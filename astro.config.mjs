import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// [[DA COMPILARE: dominio canonico del cliente, es. https://www.nomestudio.it]]
// Ordine: SITE_URL (impostabile su Netlify) > URL (lo fornisce Netlify in ogni build:
// dominio principale del sito) > segnaposto, perché Astro richiede un URL assoluto.
export default defineConfig({
  site: process.env.SITE_URL || process.env.URL || 'https://esempio-dominio.it',
  trailingSlash: 'always',
  integrations: [tailwind({ applyBaseStyles: false })],
  build: { format: 'directory' },
});
