export const mainProjectsEn = [
  {
    id: "1",
    name: "L-tronics",
    type: "E-commerce",
    devType: "Full-Stack",
    image: ["/proyectos/L-tronics/L-tronics1.png", "/proyectos/L-tronics/L-tronics2.png"],
    desc: "Application that simulates the complete user flow in an e-commerce platform, from registration, product browsing, and cart management to purchase and logout.",
    devFunctions: [
      "Design and implementation of interfaces with Next.js, TypeScript, and Tailwind CSS",
      "Development of REST API with Express for managing users, products, and purchase orders",
      "Database integration with PostgreSQL, including modeling and efficient queries",
      "User authentication and authorization management",
      "Implementation of shopping cart logic and order processing",
      "Deployment of the application on Vercel and configuration of the database connection",
    ],
    techUsed: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel", "Express.js", "PostgreSQL"],
    colaborators: {
      existed: false,
      socials: [],
    },
    for: {
      name: "Henry Bootcamp",
      image: "/logos/logoHenry.jpg",
      web: "https://www.soyhenry.com/",
      when: "May - June / 2025",
    },
    repoUrl: "https://github.com/Franki09/PM4FE-Franki09",
    deployUrl: "https://proyecto-m4-eight.vercel.app/",
    note: {
      exist: true,
      text: "Requests may take a little longer to process at first due to the current backend version in use. Sorry for the inconvenience.",
    },
  },
  {
    id: "2",
    name: "Solvex Helpdesk Platform",
    type: "Helpdesk / Issue Management",
    devType: "Front-End",
    image: ["/proyectos/Solvex/Solvex1.png", "/proyectos/Solvex/Solvex2.png"],
    desc: "Academic Helpdesk platform for companies, designed to manage reports, task assignments, and issue tracking in real time. Team project with specialization in Front-End development.",
    devFunctions: [
      "Design and implementation of optimized interfaces using Next.js, TypeScript, and Tailwind CSS",
      "Development of reusable views and components for issue registration, tracking, and updates",
      "Integration with API for real-time data visualization and updates",
      "Implementation of user filtering, search, and issue pagination systems",
      "Collaboration on user experience (UX) optimization and navigation improvements",
      "Teamwork applying agile methodologies and version control with Git/GitHub",
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
      web: "https://www.soyhenry.com/",
      when: "June - August / 2025",
    },
    repoUrl: "https://github.com/solvex-company/solvex-front",
    deployUrl: "https://solvex-front.vercel.app/",
    note: {
      exist: true,
      text: "The full project experience is not available since the backend deploy is not working and I don’t have access to it. Sorry for the inconvenience.",
    },
  },
];
