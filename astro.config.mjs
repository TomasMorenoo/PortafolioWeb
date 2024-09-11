import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: './src/pages/index.astro',
  integrations: [tailwind()],
});
