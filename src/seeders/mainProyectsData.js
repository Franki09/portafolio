export const mainProyects = [
  {
    id: "1",
    name: "L-tronics",
    type: "E-commerce",
    devType: "Full-Stack",
    image: ["/proyectos/L-tronics/L-tronics1.png", "/proyectos/L-tronics/L-tronics2.png"],
    desc: "Aplicación que simula el flujo completo de un usuario en un E-commerce, desde el registro, navegación de productos y gestión del carrito de compras, hasta la compra y cierre de sesión. ",
    devFunctions: [
      "Diseño e implementación de interfaces con Next.js, TypeScript y Tailwind CSS",
      "Desarrollo de API REST con Express para la gestión de usuarios, productos y órdenes de compra",
      "Integración de base de datos en PostgreSQL, incluyendo modelado y consultas eficientes",
      "Gestión de autenticación y autorización de usuarios",
      "Implementación de lógica de carrito de compras y procesamiento de órdenes",
      "Despliegue de la aplicación en Vercel y configuración de conexión con la base de datos",
    ],
    techUsed: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel", "Express.js", "PostgreSQL"],
    colaborators: {
      existed: false,
      socials: [],
    },
    for: {
      name: "Henry Bootcamp",
      image: "/logos/logoHenry.jpg",
      when: "May - June / 2025 ",
    },
    repoUrl: "https://github.com/Franki09/PM4FE-Franki09",
    deployUrl: "https://proyecto-m4-eight.vercel.app/",
    note: {
      exist: true,
      text: "No se puede experimentar al completo el proyecto ya que el deploy del back no funciona y no tengo acceso a el, disculpa las molestias",
    },
  },
  {
    id: "2",
    name: "Solvex Helpdesk Platform",
    type: "Helpdesk / Gestión de incidencias",
    devType: "Front-End",
    image: ["/proyectos/Solvex/Solvex1.png", "/proyectos/Solvex/Solvex2.png"],
    desc: "Plataforma académica de resolución de incidencias (Helpdesk) para empresas, diseñada para gestionar reportes, asignación de tareas y seguimiento de problemas en tiempo real. Proyecto en equipo con especialización en el desarrollo del Front End.",
    devFunctions: [
      "Diseño e implementación de interfaces optimizadas con Next.js, TypeScript y Tailwind CSS",
      "Desarrollo de vistas y componentes reutilizables para el registro, seguimiento y actualización de incidencias",
      "Integración con API para visualización y actualización de datos en tiempo real",
      "Implementación de sistemas de filtrado de usuarios, búsqueda y paginación de incidencias",
      "Colaboración en la optimización de la experiencia de usuario (UX) y mejora de la navegación",
      "Trabajo en equipo aplicando metodologías ágiles y control de versiones con Git/GitHub",
    ],
    techUsed: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    colaborators: {
      existed: true,
      socials: [
        {
          name: "Mariana Lopez",
          linkedin: "https://www.linkedin.com/in/marianalopez-frontend/",
        },
        {
          name: "Franco Paganoni",
          linkedin: "https://www.linkedin.com/in/franco-paganoni-a100aa245/",
        },
      ],
    },
    for: {
      name: "Henry Bootcamp",
      image: "/logos/logoHenry.jpg",
      when: "June - August / 2025",
    },
    repoUrl: "https://github.com/solvex-company/solvex-front",
    deployUrl: "https://solvex-front.vercel.app/",
    note: {
      exist: true,
      text: "No se puede experimentar al completo el proyecto ya que el deploy del back no funciona y no tengo acceso a el, disculpa las molestias",
    },
  },
];
