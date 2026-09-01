import { defineConfig } from 'astro/config';
import { encryptTeachingIntegration } from './scripts/encrypt-teaching.mjs';

export default defineConfig({
  site: 'https://kluonju.github.io',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [encryptTeachingIntegration()],
});
