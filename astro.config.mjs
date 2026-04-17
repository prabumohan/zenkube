import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://zenkube.pages.dev',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
