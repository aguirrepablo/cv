export const steps = [
  {
    n: '01',
    title: 'Primero entiendo el problema',
    text: 'Vengo del análisis funcional: hablo con los usuarios y con negocio, relevo el requerimiento real —que casi nunca es el que llega escrito— y lo devuelvo como alcance claro antes de escribir una línea de código. Eso evita rehacer trabajo después.',
  },
  {
    n: '02',
    title: 'Del diseño a la implementación',
    text: 'Trabajo bien a partir de referencias visuales, mockups o un objetivo escrito. Respeto la intención del diseño y resuelvo los estados que el diseño no siempre define: vacíos, errores, cargas, textos largos, mobile.',
  },
  {
    n: '03',
    title: 'Simple antes que ingenioso',
    text: 'Elijo la solución más simple que resuelve el problema y se puede mantener después. Si algo se puede resolver con HTML y CSS, no le agrego una librería.',
  },
  {
    n: '04',
    title: 'Rendimiento y accesibilidad',
    text: 'HTML semántico, contraste y foco visibles, navegación por teclado, imágenes y fuentes controladas. Este mismo sitio se compila a HTML estático, sin JavaScript de framework en el cliente.',
  },
  {
    n: '05',
    title: 'Formularios que funcionan',
    text: 'Validación clara, mensajes útiles, antispam, envío por email o API y confirmación al usuario. Es donde más se nota el detalle y donde más proyectos fallan.',
  },
  {
    n: '06',
    title: 'Automatizaciones e integraciones',
    text: 'Conexión con APIs de terceros, notificaciones automáticas por email o webhook, sincronización de datos entre sistemas. Simple cuando alcanza con simple.',
  },
  {
    n: '07',
    title: 'IA aplicada con criterio',
    text: 'Uso herramientas de IA para acelerar análisis, implementación y documentación, y también las integro como funcionalidad cuando el producto lo pide. Siempre reviso y me hago cargo del resultado final.',
  },
];

export const skills = [
  {
    title: 'Análisis y proceso',
    items: [
      'Relevamiento con usuarios',
      'Negocio traducido a alcance técnico',
      'Entregables y criterios de terminado',
      'Interlocución con diseño y operaciones',
      'Documentación funcional y técnica',
      'Capacitación al usuario final',
    ],
  },
  {
    title: 'Front-end',
    items: [
      'HTML semántico y CSS moderno',
      'JavaScript / TypeScript',
      'Responsive y mobile first',
      'Astro · React · Next.js · Vite',
      'Tailwind CSS',
      'Accesibilidad y performance',
    ],
  },
  {
    title: 'Back-end e integraciones',
    items: [
      'Node.js · NestJS · .NET',
      'APIs REST y consumo de terceros',
      'PostgreSQL · MySQL · MongoDB',
      'Envío de emails / SMTP',
      'Auth: JWT, OAuth, magic links',
      'Webhooks y automatizaciones',
    ],
  },
  {
    title: 'Deploy y operación',
    items: [
      'Netlify · Vercel · servidor propio',
      'Git y flujo de ramas',
      'CI/CD',
      'Docker',
      'Monitoreo de errores',
      'Azure',
    ],
  },
  {
    title: 'IA aplicada',
    items: [
      'APIs de Anthropic · OpenAI · Gemini',
      'Chat y asistentes en producto',
      'IA como apoyo al desarrollo',
      'Criterio y revisión del resultado',
    ],
  },
];
