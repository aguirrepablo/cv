export interface ProjectLink {
  href: string;
  label: string;
}

export interface Project {
  /** Número de catálogo, se muestra como 01 / 02 / 03 */
  index: string;
  name: string;
  tag: string;
  /** Color del punto del tag */
  tagDot: string;
  links: ProjectLink[];
  /** Color pastel de la ficha de inventario */
  pastel: string;
  panelLabel: string;
  /** Captura real dentro de public/img. Si falta, cae a la miniatura CSS. */
  image: string;
  imageAlt: string;
  /** Colores de la miniatura dibujada, tomados del sitio real */
  mini: { surface: string; fg: string; fgSoft: string; accent: string };
  /** Barras de la miniatura: 'd' display, 't' texto, 'a' acento, 'row' grilla */
  wire: string[];
  whatLabel: string;
  what: string;
  didLabel: string;
  did: string[];
  stack: string[];
  note?: { text: string; href: string; label: string };
}

export const projects: Project[] = [
  {
    index: '01',
    name: 'JOJO',
    tag: 'Proyecto propio',
    tagDot: '#453b60',
    links: [{ href: 'https://jojo.ar', label: 'jojo.ar' }],
    pastel: '#d3e5e9',
    panelLabel: 'Sitio institucional · Bilingüe',
    image: '/img/jojo.png',
    imageAlt:
      'Captura del sitio jojo.ar: portada oscura con el titular «Excelencia en ingeniería».',
    mini: { surface: '#111111', fg: '#e8e8e6', fgSoft: '#55534f', accent: '#e8614d' },
    wire: ['a w25', 'd w80', 'd w60', 't w70', 't w45', 'row'],
    whatLabel: 'Qué es',
    what:
      'Sitio institucional de un estudio de desarrollo de software: presentación de servicios, método de trabajo y captación de contacto comercial.',
    didLabel: 'Qué hice',
    did: [
      'Diseño e implementación completos: identidad visual, jerarquía de contenido, secciones y un sistema de componentes propio.',
      'Sitio bilingüe español / inglés con ruteo por idioma y diccionarios tipados, detectando el idioma del visitante.',
      'Formulario de contacto con validación, envío por email vía SMTP y protección antispam con reCAPTCHA v3.',
      'Asistente de chat en vivo integrado al sitio, conectado por WebSocket a un servicio backend propio con IA.',
      'Modo claro / oscuro, diseño responsive y persistencia de la sesión de chat entre recargas.',
    ],
    stack: [
      'Next.js', 'React', 'TypeScript', 'Tailwind CSS',
      'WebSockets', 'i18n', 'SMTP', 'reCAPTCHA v3', 'OpenAI API',
    ],
  },
  {
    index: '02',
    name: 'Nurtura',
    tag: 'Producto propio',
    tagDot: '#453b60',
    links: [{ href: 'https://nurtura.com.ar', label: 'nurtura.com.ar' }],
    pastel: '#cb9da2',
    panelLabel: 'SaaS · Historia clínica y turnos',
    image: '/img/nurtura.png',
    imageAlt: 'Captura de la plataforma Nurtura.',
    mini: { surface: '#fdf8f3', fg: '#3d3733', fgSoft: '#cfc3b8', accent: '#c2705a' },
    wire: ['a w25', 'd w70', 't w80', 'row', 't w45'],
    whatLabel: 'Qué es',
    what:
      'Plataforma SaaS de historia clínica digital y turnos online para profesionales de lactancia y puericultura. Cada profesional tiene además un perfil público donde sus pacientes reservan turno.',
    didLabel: 'Qué hice',
    did: [
      'Relevamiento del dominio con profesionales de lactancia: entender cómo registran una consulta hoy fue lo que definió el modelo de datos y la estructura de los formularios.',
      'Producto completo de punta a punta: modelo de datos, API, interfaz, diseño visual y puesta en producción.',
      'Perfil público por profesional con URL propia y reserva de turnos sin registro, con verificación por código enviado al email.',
      'Motor de turnos: disponibilidad semanal, duración de consulta, feriados, generación de slots y confirmación / cancelación con avisos por email.',
      'Formularios clínicos extensos resueltos con componentes reutilizables (campos, secciones, validación, barra de guardado) para mantener consistencia.',
      'Autenticación con magic link por email y Google OAuth; roles y multi-tenancy: cada profesional ve solo sus datos.',
      'Planes de suscripción con funcionalidades por plan, panel de administración con métricas y monitoreo de errores en producción.',
    ],
    stack: [
      'React 19', 'Vite', 'TypeScript', 'React Router',
      'NestJS', 'Prisma', 'PostgreSQL',
      'JWT / OAuth', 'SMTP', 'Sentry', 'Docker',
    ],
  },
  {
    index: '03',
    name: 'Segurarse',
    tag: 'Rol actual · Jefe de Sistemas',
    tagDot: '#65451d',
    links: [{ href: 'https://www.segurarse.com.ar', label: 'segurarse.com.ar' }],
    pastel: '#e4b976',
    panelLabel: 'Insurtech · Argentina y Uruguay',
    image: '/img/segurarse.png',
    imageAlt: 'Captura del sitio segurarse.com.ar.',
    mini: { surface: '#ffffff', fg: '#1f3d2b', fgSoft: '#c9d6cd', accent: '#16a34a' },
    wire: ['d w60', 't w45', 'row', 'a w30', 't w80'],
    whatLabel: 'Qué es',
    what:
      'Broker digital de seguros con operación en Argentina y Uruguay. Los usuarios cotizan, comparan y contratan seguros online, y gestionan su póliza desde un portal de autogestión.',
    didLabel: 'Mi responsabilidad',
    did: [
      'Responsable técnico de los sitios públicos de Argentina y Uruguay y del portal de autogestión (PWA) para clientes.',
      'Formularios de cotización multi-paso: la parte más sensible del negocio, donde cada campo de más cuesta conversión. Foco en validación, performance y experiencia móvil.',
      'Relevamiento de requerimientos con las áreas de negocio, comercial y operaciones, y traducción a alcance técnico priorizado.',
      'Integración de APIs de aseguradoras al multicotizador central y a servicios B2B2C / white-label para partners.',
      'Mantenimiento evolutivo continuo: mejoras de rendimiento, nuevas funcionalidades y coordinación con diseño y negocio.',
      'Definición de arquitectura backend, estándares de código y roadmap técnico del área.',
    ],
    stack: [
      'JavaScript', 'HTML / CSS', 'PWA', '.NET', 'NestJS',
      'APIs REST', 'PostgreSQL', 'Azure', 'CI/CD',
    ],
    note: {
      text: 'También publicado en',
      href: 'https://www.segurarse.com.uy',
      label: 'segurarse.com.uy',
    },
  },
];
