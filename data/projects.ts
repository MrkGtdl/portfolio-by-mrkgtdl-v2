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
  variant: "nexora" | "smilecare" | "novatech";
  theme: "dark" | "light";
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "nexora",
    title: "NEXORA",
    category: "Web Experience",
    year: "2026",

    description:
      "A modern digital experience built around clear communication, responsive layouts, and polished interaction.",

    overview:
      "NEXORA is a modern web experience designed around a clear visual hierarchy, responsive layouts, and a focused user journey. The project explores how a strong interface can communicate information without unnecessary visual complexity.",

    role: "Design & Development",
    timeline: "2026",

    stack: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],

    features: [
      "Responsive interface across desktop, tablet, and mobile",
      "Reusable component-based architecture",
      "Smooth interaction and scroll-based motion",
      "Structured content hierarchy",
      "Performance-conscious frontend implementation",
    ],

    variant: "nexora",
    theme: "dark",
  },

  {
    number: "02",
    slug: "smilecare",
    title: "SMILECARE",
    category: "Healthcare",
    year: "2026",

    description:
      "A clean healthcare website designed to make information easy to find while creating a trustworthy digital experience.",

    overview:
      "SMILECARE is a healthcare website concept focused on accessibility, clarity, and trust. The interface was structured to make important information easy to discover while maintaining a clean and approachable visual system.",

    role: "Web Design & Development",
    timeline: "2026",

    stack: ["WordPress", "Gutenberg", "GenerateBlocks", "CSS"],

    features: [
      "Responsive healthcare-focused layout",
      "Clear navigation and content hierarchy",
      "Reusable Gutenberg-based sections",
      "Accessible typography and spacing",
      "Mobile-first responsive implementation",
    ],

    variant: "smilecare",
    theme: "light",
  },

  {
    number: "03",
    slug: "novatech",
    title: "NOVATECH",
    category: "Technology",
    year: "2026",

    description:
      "A structured technology website combining strong content hierarchy with a modern responsive interface.",

    overview:
      "NOVATECH is a technology-focused website concept built around structured content, clear navigation, and a modern visual language. The goal was to create a professional digital presence without sacrificing usability.",

    role: "Web Design & Development",
    timeline: "2026",

    stack: ["WordPress", "GenerateBlocks", "CSS", "JavaScript"],

    features: [
      "Structured technology-focused content",
      "Responsive page layouts",
      "Reusable website sections",
      "Clear information hierarchy",
      "Clean and maintainable styling",
    ],

    variant: "novatech",
    theme: "dark",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
