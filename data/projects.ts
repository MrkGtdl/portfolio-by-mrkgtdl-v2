export type Project = {
  number: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  overview: string;
  role: string;
  timeline: string;
  stack: string[];
  features: string[];
  variant: "certus" | "smilecare" | "novatech";
  theme: "dark" | "light";
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "certus",
    title: "CERTUS",
    category: "Web Experience",
    year: "2026",

    description:
      "A tool for migrating SAP master data. Business users upload Excel spreadsheets of master data which are then processed and validated for integration into the SAP system.",

    overview:
      "CERTUS is a tool for migrating SAP master data. Users upload Excel spreadsheets of products, bills of material, vendors and customers. The system checks them against reference rules, people fix errors and approve the data, and it then produces files ready to import into SAP ECC or S/4HANA. An AI assistant helps explain and fix errors.",

    role: "Design & Development",
    timeline: "2026",

    stack: [
      "RedwoodJS",
      "React",
      "GraphQL",
      "TypeScript",
      "Tailwind CSS",
      "Postgres",
    ],

    features: [
      "Responsive interface across desktop, tablet, and mobile",
      "Reusable component-based architecture",
      "Smooth interaction and scroll-based motion",
      "Structured content hierarchy",
      "Performance-conscious frontend implementation",
    ],

    variant: "certus",
    theme: "dark",
  },

  {
    number: "02",
    slug: "friday-planner",
    title: "Friday Planner",
    category: "Web Experience",
    year: "2025",

    description:
      "A centralized project management tool that helps Project Managers oversee projects, review consultant records, and manage project assignments and related data.",

    overview:
      "Friday Planner is a healthcare website concept focused on accessibility, clarity, and trust. The interface was structured to make important information easy to discover while maintaining a clean and approachable visual system.",

    role: "Web Design & Development",
    timeline: "2025",

    stack: ["WordPress", "Gutenberg", "GenerateBlocks", "CSS"],

    features: [
      "Responsive healthcare-focused layout",
      "Clear navigation and content hierarchy",
      "Reusable Gutenberg-based sections",
      "Accessible typography and spacing",
      "Mobile-first responsive implementation",
    ],

    variant: "friday-planner",
    theme: "light",
  },

  {
    number: "03",
    slug: "pepsi",
    title: "Pepsi Philippines",
    category: "Technology",
    year: "2026",

    description:
      "A CMS-based web tool designed to generate request-specific data for SAP-related processes, streamlining data preparation and supporting business operations.",

    overview:
      "Pepsi Philippines is a technology-focused website concept built around structured content, clear navigation, and a modern visual language. The goal was to create a professional digital presence without sacrificing usability.",

    role: "Web Design & Development",
    timeline: "2026",

    stack: ["PHP", "Laravel", "Vuejs", "JavaScript", "MS SQL Server"],

    features: [
      "Structured technology-focused content",
      "Responsive page layouts",
      "Reusable website sections",
      "Clear information hierarchy",
      "Clean and maintainable styling",
    ],

    variant: "pepsi",
    theme: "dark",
  },

  {
    number: "04",
    slug: "peoplecore",
    title: "People Core",
    category: "Technology",
    year: "2026",

    description:
      "A web-based HR management platform that streamlines employee records, attendance tracking, leave management, and workforce administration in one centralized system.",

    overview:
      "PeopleCore is a technology-focused website concept built around structured content, clear navigation, and a modern visual language. The goal was to create a professional digital presence without sacrificing usability.",

    role: "Web Design & Development",
    timeline: "2026",
    stack: [
      "RedwoodJS",
      "React",
      "GraphQL",
      "TypeScript",
      "Tailwind CSS",
      "Postgres",
    ],

    features: [
      "Structured technology-focused content",
      "Responsive page layouts",
      "Reusable website sections",
      "Clear information hierarchy",
      "Clean and maintainable styling",
    ],

    variant: "peoplecore",
    theme: "dark",
  },

  {
    number: "05",
    slug: "hertz-philippines",
    title: "Hertz Philippines",
    category: "Technology",
    year: "2023",

    description:
      "A user-friendly car rental website that simplifies vehicle discovery, rental rate inquiries, location selection, and online reservations for personal and business travel.",

    overview:
      "Hertz Philippines is a technology-focused website concept built around structured content, clear navigation, and a modern visual language. The goal was to create a professional digital presence without sacrificing usability.",

    role: "Web Design & Development",
    timeline: "2023",

    stack: ["PHP", "Laravel", "Vuejs", "Jquery", "MySQL"],

    features: [
      "Structured technology-focused content",
      "Responsive page layouts",
      "Reusable website sections",
      "Clear information hierarchy",
      "Clean and maintainable styling",
    ],

    variant: "peoplecore",
    theme: "dark",
  },

  {
    number: "06",
    slug: "medisync",
    title: "MediSync",
    category: "Technology",
    year: "2023",

    description:
      "A healthcare management platform that streamlines patient records, appointment scheduling, and medical billing for clinics and hospitals.",

    overview:
      "MediSync is a technology-focused website concept built around structured content, clear navigation, and a modern visual language. The goal was to create a professional digital presence without sacrificing usability.",

    role: "Web Design & Development",
    timeline: "2023",

    stack: ["PHP", "Laravel", "Vuejs", "Jquery", "MySQL"],

    features: [
      "Structured technology-focused content",
      "Responsive page layouts",
      "Reusable website sections",
      "Clear information hierarchy",
      "Clean and maintainable styling",
    ],

    variant: "peoplecore",
    theme: "dark",
  },

  {
    number: "07",
    slug: "novatech",
    title: "NovaTech",
    category: "Technology",
    year: "2023",

    description:
      "A technology solutions company website that showcases innovative products, services, and industry expertise.",

    overview:
      "NovaTech is a technology-focused website concept built around structured content, clear navigation, and a modern visual language. The goal was to create a professional digital presence without sacrificing usability.",

    role: "Web Design & Development",
    timeline: "2023",

    stack: ["PHP", "Laravel", "Vuejs", "Jquery", "MySQL"],

    features: [
      "Structured technology-focused content",
      "Responsive page layouts",
      "Reusable website sections",
      "Clear information hierarchy",
      "Clean and maintainable styling",
    ],

    variant: "peoplecore",
    theme: "dark",
  },

  {
    number: "08",
    slug: "smilecare-dental-clinic",
    title: "SmileCare Dental Clinic",
    category: "Technology",
    year: "2023",

    description:
      "A modern dental clinic website that provides information about services, appointment booking, and patient resources.",

    overview:
      "SmileCare Dental Clinic is a technology-focused website concept built around structured content, clear navigation, and a modern visual language. The goal was to create a professional digital presence without sacrificing usability.",

    role: "Web Design & Development",
    timeline: "2023",

    stack: ["PHP", "Laravel", "Vuejs", "Jquery", "MySQL"],

    features: [
      "Structured technology-focused content",
      "Responsive page layouts",
      "Reusable website sections",
      "Clear information hierarchy",
      "Clean and maintainable styling",
    ],

    variant: "peoplecore",
    theme: "dark",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
