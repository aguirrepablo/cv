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

## Deploy en Netlify

`netlify.toml` ya está configurado (`npm run build` → `dist`). Conectá el repo
y no hace falta tocar nada más en el panel de Netlify.

## Diseño

Paleta desaturada sobre fondo hueso, sin sombras: la separación es siempre
hairline de 1px. Componentes tipo píldora, micro-labels en mayúsculas, mono
para identificadores. Los proyectos se presentan como catálogo numerado, no
como grilla de tarjetas.
