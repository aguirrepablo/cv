# Portfolio — Pablo Aguirre

Sitio estático hecho con [Astro](https://astro.build). Se compila a HTML puro:
no hay JavaScript de framework en el cliente, ni fuentes ni recursos de terceros.

## Desarrollo

```bash
npm install
npm run dev
```

Queda en `http://localhost:4321`.

## Build

```bash
npm run build
```

La salida va a `dist/`.

## Estructura

```
src/
├── data/                 # Todo el contenido editable, sin tocar markup
│   ├── site.ts           # Datos de contacto, navegación, métricas
│   ├── projects.ts       # Los tres casos del catálogo
│   └── content.ts        # Método de trabajo y stack
├── layouts/
│   └── Layout.astro      # <head>, metadatos, skip link
├── components/
│   ├── Header.astro
│   ├── Hero.astro
│   ├── Projects.astro    # Sección + fallback de imágenes
│   ├── ProjectItem.astro # Una ficha del catálogo
│   ├── Method.astro
│   ├── Stack.astro
│   ├── Contact.astro
│   └── Footer.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css        # Tokens y primitivas compartidas

public/
├── aguirrepablo-cv.html  # CV, servido en /aguirrepablo-cv.html
└── img/                  # Capturas de los proyectos (ver img/README.md)
```

## Editar contenido

Casi todo se toca desde `src/data/`. Para agregar un proyecto al catálogo,
sumá un objeto a `projects.ts`: el markup se genera solo.

## Deploy

**Vercel** (actual): importá el repo y listo. Vercel detecta Astro solo, y
`vercel.json` ya define build, output y los headers de cache.

La URL canónica se resuelve sola desde `VERCEL_PROJECT_PRODUCTION_URL`. Cuando
haya dominio propio, definí `SITE_URL` en *Settings → Environment Variables*
(por ejemplo `https://pabloaguirre.com.ar`) y se usa esa.

**Netlify**: `netlify.toml` queda como alternativa, con la misma configuración.

## Diseño

Paleta desaturada sobre fondo hueso, sin sombras: la separación es siempre
hairline de 1px. Componentes tipo píldora, micro-labels en mayúsculas, mono
para identificadores. Los proyectos se presentan como catálogo numerado, no
como grilla de tarjetas.
