// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://instalatiisuceava.ro',
  // Matches the URL shape in the IA proposal (/instalatii-sanitare-suceava/).
  trailingSlash: 'always',
  build: { format: 'directory' },
  // No UI framework: the only interactive element is the mobile menu, which is
  // ~40 lines of vanilla JS. Adding React back is one `astro add react` away.
  integrations: [
    // Generates the sitemap from the real routes at build time, so it cannot
    // drift out of sync the way the hand-maintained one did.
    sitemap({ changefreq: 'monthly', lastmod: new Date() }),
  ],
});
