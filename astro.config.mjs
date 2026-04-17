import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "hybrid",
  site: 'https://zenkube.pages.dev',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],

  adapter: cloudflare()
});