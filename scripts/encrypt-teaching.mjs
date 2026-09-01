import { createCipheriv, pbkdf2, randomBytes } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { readFileSync, watch } from 'node:fs';
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

const publicDir = path.join(root, 'public', 'teaching', COURSE);
const markdownPath = path.join(root, 'src', 'content', 'teaching', `${COURSE}.md`);
const envPath = path.join(root, '.env');
const gatePath = path.join(publicDir, 'gate.json');

function loadDotenv() {
  try {
    const raw = readFileSync(envPath, 'utf8');
    for (const line of raw.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eq = trimmed.indexOf('=');
      if (eq < 1) continue;
      const key = trimmed.slice(0, eq).trim();
      let value = trimmed.slice(eq + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      if (key && process.env[key] === undefined) process.env[key] = value;
    }
  } catch {
    /* no .env */
  }
}

function loadPasscode() {
  loadDotenv();
  return process.env.TEACHING_PASSCODE?.trim() || DEFAULT_PASSCODE;
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

async function loadOrMakeSalt() {
  try {
    const existing = JSON.parse(await readFile(gatePath, 'utf8'));
    if (typeof existing.salt === 'string' && existing.iterations === ITERATIONS) {
      return Buffer.from(existing.salt, 'base64');
    }
  } catch {
    /* first run */
  }
  return randomBytes(SALT_LEN);
}

export async function encryptTeaching({ quiet = false } = {}) {
  const passcode = loadPasscode();
  await mkdir(publicDir, { recursive: true });
  const salt = await loadOrMakeSalt();
  const key = await deriveKey(passcode, salt);

  const rawMd = await readFile(markdownPath, 'utf8');
  const { body } = extractFrontmatter(rawMd);
  const html = await marked.parse(body, { gfm: true });
  await writeFile(path.join(publicDir, 'content.bin.enc'), encryptBuffer(Buffer.from(html, 'utf8'), key));

  const gate = {
    course: COURSE,
    salt: salt.toString('base64'),
    iterations: ITERATIONS,
    hash: 'SHA-256',
    contentFile: 'content.bin.enc',
  };
  await writeFile(gatePath, `${JSON.stringify(gate, null, 2)}\n`);
  if (!quiet) console.log('[teaching] encrypted page HTML');
  return { skipped: false };
}

export function encryptTeachingIntegration() {
  let debounce;
  const run = (quiet) => encryptTeaching({ quiet }).catch((err) => console.error('[teaching]', err));

  return {
    name: 'encrypt-teaching',
    hooks: {
      'astro:config:setup': async () => {
        await run(false);
      },
      'astro:server:setup': ({ server }) => {
        const reload = () => {
          clearTimeout(debounce);
          debounce = setTimeout(() => {
            void run(true).then((result) => {
              if (result && !result.skipped) {
                const payload = { type: 'full-reload' };
                server.hot?.send(payload);
                server.ws?.send(payload);
              }
            });
          }, 150);
        };
        watch(path.dirname(markdownPath), reload);
      },
    },
  };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  encryptTeaching().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
