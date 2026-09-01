import { createCipheriv, pbkdf2, randomBytes } from 'node:crypto';
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const COURSE = 'fall-2026';
const ITERATIONS = 310_000;
const KEY_LEN = 32;
const IV_LEN = 12;
const SALT_LEN = 16;
const DEFAULT_PASSCODE = 'mathphys2026';

const privateDir = path.join(root, 'private', 'teaching', COURSE);
const publicDir = path.join(root, 'public', 'teaching', COURSE);
const markdownPath = path.join(root, 'src', 'content', 'teaching', `${COURSE}.md`);

function loadPasscode() {
  const fromEnv = process.env.TEACHING_PASSCODE?.trim();
  if (fromEnv) return fromEnv;
  return DEFAULT_PASSCODE;
}

function deriveKey(passcode, salt) {
  return new Promise((resolve, reject) => {
    pbkdf2(passcode, salt, ITERATIONS, KEY_LEN, 'sha256', (err, key) => {
      if (err) reject(err);
      else resolve(key);
    });
  });
}

function encryptBuffer(plain, key) {
  const iv = randomBytes(IV_LEN);
  const cipher = createCipheriv('aes-256-gcm', key, iv);
  const encrypted = Buffer.concat([cipher.update(plain), cipher.final()]);
  return Buffer.concat([iv, cipher.getAuthTag(), encrypted]);
}

function extractFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { body: raw };
  return { body: match[2].trimStart() };
}

function rewritePdfHrefs(html, files) {
  const names = new Set(files.map((f) => f.name));
  return html.replace(/href="(\/teaching\/fall-2026\/([^"]+))"/g, (full, href, name) => {
    if (!names.has(name)) return full;
    return `href="${href}" data-enc-src="${name}.enc"`;
  });
}

async function main() {
  const passcode = loadPasscode();
  if (!process.env.TEACHING_PASSCODE?.trim()) {
    console.warn(`TEACHING_PASSCODE unset; using default "${DEFAULT_PASSCODE}".`);
  }

  const entries = (await readdir(privateDir)).filter((name) => name.endsWith('.pdf'));
  if (!entries.length) {
    throw new Error(`No PDFs found in ${privateDir}`);
  }

  await rm(publicDir, { recursive: true, force: true });
  await mkdir(publicDir, { recursive: true });

  const salt = randomBytes(SALT_LEN);
  const key = await deriveKey(passcode, salt);

  const files = [];
  for (const name of entries.sort()) {
    const plain = await readFile(path.join(privateDir, name));
    await writeFile(path.join(publicDir, `${name}.enc`), encryptBuffer(plain, key));
    files.push({
      name,
      enc: `${name}.enc`,
    });
  }

  const rawMd = await readFile(markdownPath, 'utf8');
  const { body } = extractFrontmatter(rawMd);
  const html = rewritePdfHrefs(await marked.parse(body, { gfm: true }), files);
  await writeFile(path.join(publicDir, 'content.bin.enc'), encryptBuffer(Buffer.from(html, 'utf8'), key));

  const gate = {
    course: COURSE,
    salt: salt.toString('base64'),
    iterations: ITERATIONS,
    hash: 'SHA-256',
    contentFile: 'content.bin.enc',
    files,
  };
  await writeFile(path.join(publicDir, 'gate.json'), `${JSON.stringify(gate, null, 2)}\n`);
  console.log(`Encrypted ${files.length} PDFs + page HTML → public/teaching/${COURSE}/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
