import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://gowilliamslawfirm.com',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
});
