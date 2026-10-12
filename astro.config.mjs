import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Live site is the GitHub Pages project URL. Change `site` and `base` together
// if a custom domain is added later.
export default defineConfig({
  site: 'https://creativemkstudios.github.io',
  base: '/GrandDetailing',
  trailingSlash: 'always',
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
