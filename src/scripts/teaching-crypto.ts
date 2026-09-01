const IV_LEN = 12;
const TAG_LEN = 16;
const KEY_LEN = 32;

function b64ToBytes(value: string) {
  const bin = atob(value);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

export async function deriveKey(passcode: string, saltB64: string, iterations: number) {
  const material = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(passcode),
    'PBKDF2',
    false,
    ['deriveKey'],
  );
  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: b64ToBytes(saltB64),
      iterations,
      hash: 'SHA-256',
    },
    material,
    { name: 'AES-GCM', length: KEY_LEN * 8 },
    false,
    ['decrypt'],
  );
}

export async function decryptBytes(packed: ArrayBuffer, key: CryptoKey) {
  const bytes = new Uint8Array(packed);
  if (bytes.length < IV_LEN + TAG_LEN + 1) {
    throw new Error('Ciphertext too short');
  }
  const iv = bytes.subarray(0, IV_LEN);
  const tag = bytes.subarray(IV_LEN, IV_LEN + TAG_LEN);
  const data = bytes.subarray(IV_LEN + TAG_LEN);
  const ciphertext = new Uint8Array(data.length + TAG_LEN);
  ciphertext.set(data, 0);
  ciphertext.set(tag, data.length);
  return crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ciphertext);
}

export async function decryptText(packed: ArrayBuffer, key: CryptoKey) {
  const plain = await decryptBytes(packed, key);
  return new TextDecoder().decode(plain);
}
