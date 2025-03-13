// @ts-check
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  site: "https://astro-crivo.netlify.app/",
  integrations: [preact()]
});