import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const projects = {
  nexora: {
    number: "01",
    title: "NEXORA",
    category: "Web Experience",
    year: "2026",
    description:
      "A modern digital experience focused on immersive interaction, visual clarity, and a refined user journey.",
    tags: ["Next.js", "GSAP", "TypeScript"],
  },

  smilecare: {
    number: "02",
    title: "SMILECARE",
    category: "Healthcare",
    year: "2026",
    description:
      "A clean and approachable healthcare platform designed around trust, accessibility, and effortless navigation.",
    tags: ["WordPress", "Gutenberg", "UI/UX"],
  },

  novatech: {
    number: "03",
    title: "NOVATECH",
    category: "Technology",
    year: "2026",
    description:
      "A technology-focused website combining structured content with a modern visual system and responsive interactions.",
    tags: ["WordPress", "GenerateBlocks", "CSS"],
  },

  velora: {
    number: "04",
    title: "VELORA",
    category: "Digital Product",
    year: "2026",
    description:
      "A digital product concept built around simplicity, smooth interactions, and a focused product experience.",
    tags: ["React", "Tailwind", "Framer Motion"],
  },

  aurelis: {
    number: "05",
    title: "AURELIS",
    category: "Creative Platform",
    year: "2026",
    description:
      "An experimental interface exploring typography, motion, and cinematic presentation.",
    tags: ["Next.js", "Motion", "Creative UI"],
  },

  kinetiq: {
    number: "06",
    title: "KINETIQ",
    category: "Interactive Experience",
    year: "2026",
    description:
      "An interaction-driven concept where movement and interface behavior become part of the experience.",
    tags: ["React", "GSAP", "WebGL"],
  },

  monarch: {
    number: "07",
    title: "MONARCH",
    category: "Digital Experience",
    year: "2026",
    description:
      "A refined digital experience combining bold typography, structured layouts, and immersive transitions.",
    tags: ["Next.js", "GSAP", "Tailwind"],
  },

  lumera: {
    number: "08",
    title: "LUMERA",
    category: "Brand Experience",
    year: "2026",
    description:
      "A visual-first experience designed around elegant composition, motion, and strong brand presence.",
    tags: ["React", "Framer Motion", "UI/UX"],
  },

  vertex: {
    number: "09",
    title: "VERTEX",
    category: "Technology",
    year: "2026",
    description:
      "A modern technology interface focused on clarity, performance, and scalable digital experiences.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },

  orbital: {
    number: "10",
    title: "ORBITAL",
    category: "Interactive Product",
    year: "2026",
    description:
      "An experimental product interface built around movement, interaction, and immersive visual storytelling.",
    tags: ["React", "GSAP", "WebGL"],
  },

  arcova: {
    number: "11",
    title: "ARCOVA",
    category: "Creative Website",
    year: "2026",
    description:
      "A cinematic website concept combining minimal layouts with expressive typography and subtle motion.",
    tags: ["Next.js", "Motion", "Creative UI"],
  },

  syntra: {
    number: "12",
    title: "SYNTRA",
    category: "Digital Product",
    year: "2026",
    description:
      "A futuristic product experience focused on interaction, usability, and a clean visual system.",
    tags: ["React", "Tailwind", "GSAP"],
  },
} as const;

type ProjectSlug = keyof typeof projects;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects[slug as ProjectSlug];

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0a0a0a] px-6 text-white">
        <div className="text-center">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 sm:text-xs">
            Project Not Found
          </p>

          <Link
            href="/projects"
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white sm:text-xs"
          >
            ← Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#0a0a0a] pt-20 text-white sm:pt-24">
      {/* HEADER */}
      <header className="flex items-center justify-between px-5 py-6 sm:px-8 sm:py-8 md:px-10 lg:px-16">
        <Link
          href="/projects"
          className="group flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white sm:gap-3 sm:text-[10px] sm:tracking-[0.25em]"
        >
          <ArrowLeft
            size={12}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:-translate-x-1 sm:h-[13px] sm:w-[13px]"
          />

          <span>All Projects</span>
        </Link>

        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25 sm:text-[10px] sm:tracking-[0.25em]">
          Project / {project.number}
        </span>
      </header>

      {/* HERO */}
      <section className="px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20 md:px-10 md:pb-28 md:pt-24 lg:px-16 lg:pb-32">
        {/* META */}
        <div className="mb-7 flex flex-wrap items-center gap-2.5 sm:mb-8 sm:gap-4">
          <span className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.18em] text-white/40 sm:px-4 sm:py-2 sm:text-[9px] sm:tracking-[0.2em]">
            {project.category}
          </span>

          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/20 sm:text-[10px] sm:tracking-[0.2em]">
            {project.year}
          </span>
        </div>

        {/* TITLE */}
        <h1 className="max-w-full break-words text-[19vw] font-semibold leading-[0.78] tracking-[-0.1em] sm:text-[16vw] md:max-w-[1200px] md:text-[14vw] lg:text-[11vw]">
          {project.title}
        </h1>

        {/* DESCRIPTION + TAGS */}
        <div className="mt-10 grid gap-8 border-t border-white/10 pt-7 sm:mt-12 sm:gap-10 sm:pt-8 lg:grid-cols-[1fr_0.5fr]">
          <p className="max-w-2xl text-sm leading-6 text-white/45 sm:text-base sm:leading-7 md:text-lg md:leading-8">
            {project.description}
          </p>

          <div className="flex flex-wrap content-start gap-2 lg:justify-end">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-white/35 sm:px-4 sm:py-2 sm:text-[9px] sm:tracking-[0.15em]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN VISUAL */}
      <section className="px-5 sm:px-8 md:px-10 lg:px-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#111111] sm:aspect-[16/9] sm:rounded-[1.5rem] md:rounded-[2rem]">
          {/* GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent" />

          {/* GLOW */}
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/[0.025] blur-3xl sm:h-96 sm:w-96" />

          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white/[0.02] blur-3xl sm:h-96 sm:w-96" />

          {/* BACKGROUND TITLE */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <span className="select-none whitespace-nowrap text-[24vw] font-semibold leading-none tracking-[-0.1em] text-white/[0.035] sm:text-[18vw] md:text-[15vw] lg:text-[12vw]">
              {project.title}
            </span>
          </div>

          {/* CENTER */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] backdrop-blur-md sm:h-20 sm:w-20 md:h-24 md:w-24">
              <ArrowUpRight
                size={17}
                strokeWidth={1.3}
                className="sm:h-5 sm:w-5"
              />
            </div>
          </div>

          {/* LABEL */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10">
            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/25 sm:text-[9px] sm:tracking-[0.3em]">
              Project Preview
            </span>
          </div>
        </div>
      </section>

      {/* PROJECT DETAILS */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32 lg:px-16">
        <div className="grid gap-10 border-t border-white/10 pt-8 sm:gap-12 sm:pt-10 md:gap-16 lg:grid-cols-[0.7fr_1fr]">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/25 sm:text-[10px] sm:tracking-[0.3em]">
              About The Project
            </p>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg leading-8 text-white/55 sm:text-xl sm:leading-9 md:text-2xl md:leading-10">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* NEXT / BACK */}
      <section className="px-5 pb-24 sm:px-8 sm:pb-32 md:px-10 lg:px-16">
        <div className="border-t border-white/10 pt-7 sm:pt-8">
          <Link
            href="/projects"
            className="group flex items-center justify-between gap-6"
          >
            <div className="min-w-0">
              <p className="mb-3 font-mono text-[8px] uppercase tracking-[0.25em] text-white/25 sm:text-[9px] sm:tracking-[0.3em]">
                Continue Exploring
              </p>

              <h2 className="text-[11vw] font-semibold leading-none tracking-[-0.08em] sm:text-6xl md:text-7xl">
                ALL PROJECTS
              </h2>
            </div>

            <ArrowUpRight
              size={32}
              strokeWidth={1}
              className="shrink-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 sm:h-12 sm:w-12 md:h-16 md:w-16"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
