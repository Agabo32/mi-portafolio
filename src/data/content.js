/**
 * Contenido centralizado del portafolio - Gabriel Torrealba
 * Fácil de modificar para actualizar textos, enlaces y proyectos.
 */

export const site = {
  name: 'Gabriel Torrealba',
  title: 'Ingeniero de Sistemas | Desarrollador Web',
  initials: 'GT',
  email: 'gabrielalejandro321804@gmail.com',
  phone: '0412-555-6516',
  address: [
    'Av. 20 entre 16 y 17',
    'Barrio Bolívar Libertador',
    'Quíbor, Estado Lara',
    'Venezuela',
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/gabriel-torrealba-48a4612ba',
    github: 'https://github.com/Agabo32',
  },
  cvUrls: {
    es: '/Curriculum-CV-Gabriel-Torrealba.pdf',
    en: '/Curriculum-CV-Gabriel-Torrealba-Inglespdf.pdf',
  },
}

export const hero = {
  greeting: 'Hola, soy',
  name: site.name,
  title: site.title,
  description: 'Ingeniero de Sistemas y Desarrollador Web especializado en la creación de sitios corporativos, ecommerce y soluciones digitales personalizadas. Diseño y desarrollo experiencias web modernas utilizando WordPress, Shopify, PHP, MySQL y tecnologías web actuales, ayudando a empresas y emprendedores a transformar ideas en productos digitales funcionales, escalables y orientados a resultados.',
  ctaProjects: 'Ver mis proyectos',
  ctaContact: 'Contáctame',
  profileImage: '/images/WhatsApp%20Image%202026-02-19%20at%2010.49.10%20PM.jpeg',
}

export const about = {
  title: 'Sobre mí',
  subtitle: 'Conoce un poco más sobre mi perfil profesional y experiencia.',
  paragraphs: [
    'Soy Ingeniero de Sistemas y Desarrollador Web con experiencia en la creación de sitios web corporativos, plataformas empresariales y soluciones de comercio electrónico.',
    'Trabajo con tecnologías como WordPress, Elementor Pro, Shopify, PHP, MySQL, HTML, CSS y JavaScript, desarrollando proyectos enfocados en rendimiento, escalabilidad y experiencia de usuario.',
    'Durante mi trayectoria he participado en el diseño, desarrollo e implementación de soluciones web para empresas de diferentes sectores, incluyendo ecommerce, sistemas de gestión de información y plataformas corporativas.',
    'También cuento con experiencia en modelado y administración de bases de datos, integración de información mediante archivos CSV, optimización de procesos y despliegue de proyectos en entornos de producción.',
    'Actualmente me desempeño como Web Developer en Wisex3, donde participo en el desarrollo de soluciones digitales orientadas a generar resultados reales para clientes y organizaciones.',
    'Mi objetivo es seguir creciendo profesionalmente en el desarrollo de software y la construcción de productos digitales que aporten valor a las empresas y a sus usuarios.',
  ],
  profileList: [
    'Ingeniero de Sistemas',
    'Desarrollador Web',
    'Orientado a la mejora de procesos',
    'Enfoque en soluciones eficientes',
    'Aprendizaje y mejora continua',
  ],
}

/** Tecnologías por categoría, con descripción opcional */
export const skills = [
  {
    category: 'Lenguajes',
    items: [
      { name: 'PHP', description: 'Backend y APIs' },
      { name: 'HTML5', description: 'Estructura semántica' },
      { name: 'JavaScript', description: 'Interactividad y React' },
      { name: 'SQL', description: 'Consultas y modelado de datos' },
    ],
  },
  {
    category: 'Frameworks y herramientas',
    items: [
      { name: 'React', description: 'Interfaces modernas' },
      { name: 'Bootstrap', description: 'Diseño rápido' },
      { name: 'Tailwind CSS', description: 'Estilos utility-first' },
      { name: 'WordPress', description: 'CMS y sitios web' },
      { name: 'Elementor Pro', description: 'Maquetación visual' },
    ],
  },
  {
    category: 'Base de datos',
    items: [
      { name: 'MySQL', description: 'Bases de datos relacionales' },
    ],
  },
  {
    category: 'Herramientas',
    items: [
      { name: 'Git', description: 'Control de versiones' },
      { name: 'VS Code', description: 'Editor de código' },
      { name: 'XAMPP', description: 'Entorno local' },
      { name: 'Draw.io', description: 'Diagramas' },
    ],
  },
]

/** Proyectos recientes - agregar más en projects.jsx o aquí */
export const projects = [
  {
    id: 1,
    name: 'SIGEVU - Sistema de Gestión CORPOLARA',
    description: 'Sistema web institucional para la Corporación de Desarrollo Jacinto Lara. Gestión de beneficiarios, viviendas y proyectos urbanísticos. Migración y gestión de más de 14.000 registros desde hojas de cálculo a base de datos relacional.',
    technologies: ['PHP', 'MySQL', 'HTML5', 'JavaScript', 'Bootstrap'],
    images: [
      '/images/SIGEVU/SIGEVU Login.png',
      '/images/SIGEVU/SIGEVU 3.png',
      '/images/SIGEVU/SIGEVU 4.png',
      '/images/SIGEVU/SIGEVU-BENEFICIARIOS.png',
    ],
    github: null,
    live: null,
  },
  {
    id: 2,
    name: 'ARM GYM — Sistema de Gestión Administrativa',
    description: 'Plataforma web fullstack diseñada para digitalizar y centralizar la operación administrativa de gimnasios. Permite gestionar clientes, controlar mensualidades, registrar pagos y visualizar el rendimiento financiero desde un dashboard con gráficos dinámicos. Incluye sistema de bitácora, gestión de roles (Admin/Trabajador), API REST en PHP puro con arquitectura MVC, dark mode y diseño responsive estilo SaaS.',
    technologies: ['PHP 8+', 'MySQL', 'HTML5', 'TailwindCSS', 'JavaScript', 'AJAX', 'Chart.js', 'MVC', 'API REST', 'PDO'],
    images: [
      '/images/ARM GYM/1.png',
      '/images/ARM GYM/2.png',
      '/images/ARM GYM/3.png',
      '/images/ARM GYM/4.png',
      '/images/ARM GYM/5.png',
      '/images/ARM GYM/6.png',
      '/images/ARM GYM/7.png',
      '/images/ARM GYM/8.png',
    ],
    github: null,
    live: null,
  },
  {
    id: 3,
    name: 'K9 Tires — Sitio Corporativo (Priory)',
    description: 'Desarrollé el sitio web Priory utilizando WordPress y Elementor Pro, creando una plataforma moderna, responsive y optimizada para la conversión. Me encargué del diseño, maquetación, experiencia de usuario y adaptación para dispositivos móviles, logrando una interfaz profesional que comunica de forma clara los servicios y fortalece la presencia digital de la organización.',
    technologies: ['WordPress', 'Elementor Pro', 'HTML5', 'CSS3', 'JavaScript', 'SEO'],
    images: [
      '/images/K9 Tires/K9 1.png',
      '/images/K9 Tires/K9 2.png',
      '/images/K9 Tires/K9 3.png',
      '/images/K9 Tires/K9 4.png',
      '/images/K9 Tires/K9 5 .png',
      '/images/K9 Tires/K9 6.png',
      '/images/K9 Tires/K9 7.png',
    ],
    github: null,
    live: 'https://priory.wisex3.com/',
  },
  {
    id: 4,
    name: 'My Speedy Printing',
    description: 'Desarrollé el sitio web My Speedy Printing utilizando HTML, CSS y JavaScript, creando una interfaz moderna, rápida y responsive. Posteriormente transformé el desarrollo en una plantilla personalizada de WordPress, permitiendo una gestión sencilla del contenido y una experiencia de usuario optimizada en todos los dispositivos.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'WordPress', 'Diseño Responsive', 'SEO'],
    images: [
      '/images/Speddy landing/Speddy 1.png',
    ],
    github: null,
    live: 'https://myspeedyprinting.com',
  },
]

