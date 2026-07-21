import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kluonj.github.io',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
