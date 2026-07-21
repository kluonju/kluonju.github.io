import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kluonju.github.io',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
