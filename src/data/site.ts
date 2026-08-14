export const site = {
  name: 'Pablo Aguirre',
  title: 'Pablo Aguirre — Portfolio de Desarrollo Web',
  description:
    'Portfolio de Pablo Aguirre, desarrollador web y analista con más de 10 años de experiencia: sitios profesionales, productos digitales, APIs, formularios e integraciones.',
  email: 'pe.aguirre@outlook.com',
  phone: '+54 11 3918 2509',
  phoneHref: '+541139182509',
  linkedin: 'https://www.linkedin.com/in/paguirre90',
  linkedinLabel: 'linkedin.com/in/paguirre90',
  location: 'Villa Carlos Paz, Córdoba, Argentina',
  cv: '/aguirrepablo-cv.html',
  mailSubject: 'Desarrollo Web | Pablo Aguirre',
};

export const mailto = `mailto:${site.email}?subject=${encodeURIComponent(site.mailSubject)}`;

export const nav = [
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#metodo', label: 'Método' },
  { href: '#stack', label: 'Stack' },
  { href: '#contacto', label: 'Contacto' },
];

export const metrics = [
  { value: '10+', label: 'años en desarrollo e integración' },
  { value: '2', label: 'productos propios end-to-end' },
  { value: '2', label: 'países con sitios en producción' },
  { value: '0', label: 'dependencias externas en esta página' },
];
