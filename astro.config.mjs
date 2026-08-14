// @ts-check
import { defineConfig } from 'astro/config';

// La URL canónica se resuelve sola:
//  1. SITE_URL, si algún día hay dominio propio (definirla en Vercel > Settings > Environment Variables)
//  2. el dominio de producción que Vercel expone en el build
//  3. localhost, para desarrollo
const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:4321');

export default defineConfig({
  site,
  // El sitio es estático: no hay JS de framework, solo HTML y CSS.
  build: {
    // Un único archivo CSS en lugar de uno por componente.
    inlineStylesheets: 'auto',
  },
});
