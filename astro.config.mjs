import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// [[DA COMPILARE: dominio canonico del cliente, es. https://www.nomestudio.it]]
// Su Netlify si può impostare la variabile SITE_URL; qui resta un dominio
// segnaposto valido perché Astro richiede un URL assoluto per canonical/OG/sitemap.
export default defineConfig({
  site: process.env.SITE_URL || 'https://esempio-dominio.it',
  trailingSlash: 'always',
  integrations: [tailwind({ applyBaseStyles: false })],
  build: { format: 'directory' },
});
