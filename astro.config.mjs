import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Endereço final do site
const SITE_URL = 'https://teleentulhosantamaria.com.br';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [sitemap({ lastmod: new Date(), filter: (page) => !page.includes('/404') })],
});
