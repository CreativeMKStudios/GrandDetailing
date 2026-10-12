import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change `site` if the live domain is different. Canonical URLs, the sitemap,
// and Open Graph tags all use this origin.
export default defineConfig({
  site: 'https://granddetailing.co.uk',
  trailingSlash: 'never',
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
