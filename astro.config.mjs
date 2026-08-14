// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pabloaguirre.dev',
  // El sitio es estático: no hay JS de framework, solo HTML y CSS.
  build: {
    // Un único archivo CSS en lugar de uno por componente.
    inlineStylesheets: 'auto',
  },
});
