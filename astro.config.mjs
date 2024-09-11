import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/PortafolioWeb/',
  integrations: [tailwind()],
});
