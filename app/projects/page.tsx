"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

const projects = [
  {
    number: "01",
    slug: "nexora",
    title: "NEXORA",
    category: "Web Experience",
    year: "2026",
    description:
      "A modern digital experience focused on immersive interaction, visual clarity, and a refined user journey.",
    tags: ["Next.js", "GSAP", "TypeScript"],
  },
  {
    number: "02",
    slug: "smilecare",
    title: "SMILECARE",
    category: "Healthcare",
    year: "2026",
    description:
      "A clean and approachable healthcare platform designed around trust, accessibility, and effortless navigation.",
    tags: ["WordPress", "Gutenberg", "UI/UX"],
  },
  {
    number: "03",
    slug: "novatech",
    title: "NOVATECH",
    category: "Technology",
    year: "2026",
    description:
      "A technology-focused website combining structured content with a modern visual system and responsive interactions.",
    tags: ["WordPress", "GenerateBlocks", "CSS"],
  },
  {
    number: "04",
    slug: "velora",
    title: "VELORA",
    category: "Digital Product",
    year: "2026",
    description:
      "A digital product concept built around simplicity, smooth interactions, and a focused product experience.",
    tags: ["React", "Tailwind", "Framer Motion"],
  },
  {
    number: "05",
    slug: "aurelis",
    title: "AURELIS",
    category: "Creative Platform",
    year: "2026",
    description:
      "An experimental interface exploring typography, motion, and cinematic presentation.",
    tags: ["Next.js", "Motion", "Creative UI"],
  },
  {
    number: "06",
    slug: "kinetiq",
    title: "KINETIQ",
    category: "Interactive Experience",
    year: "2026",
    description:
      "An interaction-driven concept where movement and interface behavior become part of the experience.",
    tags: ["React", "GSAP", "WebGL"],
  },
  {
    number: "07",
    slug: "monarch",
    title: "MONARCH",
    category: "Digital Experience",
    year: "2026",
    description:
      "A refined digital experience combining bold typography, structured layouts, and immersive transitions.",
    tags: ["Next.js", "GSAP", "Tailwind"],
  },
  {
    number: "08",
    slug: "lumera",
    title: "LUMERA",
    category: "Brand Experience",
    year: "2026",
    description:
      "A visual-first experience designed around elegant composition, motion, and strong brand presence.",
    tags: ["React", "Framer Motion", "UI/UX"],
  },
  {
    number: "09",
    slug: "vertex",
    title: "VERTEX",
    category: "Technology",
    year: "2026",
    description:
      "A modern technology interface focused on clarity, performance, and scalable digital experiences.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    number: "10",
    slug: "orbital",
    title: "ORBITAL",
    category: "Interactive Product",
    year: "2026",
    description:
      "An experimental product interface built around movement, interaction, and immersive visual storytelling.",
    tags: ["React", "GSAP", "WebGL"],
  },
  {
    number: "11",
    slug: "arcova",
    title: "ARCOVA",
    category: "Creative Website",
    year: "2026",
    description:
      "A cinematic website concept combining minimal layouts with expressive typography and subtle motion.",
    tags: ["Next.js", "Motion", "Creative UI"],
  },
  {
    number: "12",
    slug: "syntra",
    title: "SYNTRA",
    category: "Digital Product",
    year: "2026",
    description:
      "A futuristic product experience focused on interaction, usability, and a clean visual system.",
    tags: ["React", "Tailwind", "GSAP"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      {/* HEADER */}
      <header className="px-5 pb-14 pt-6 sm:px-8 sm:pb-20 sm:pt-8 md:px-10 lg:px-16">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="group flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white sm:gap-3 sm:text-[10px] sm:tracking-[0.25em]"
          >
            <ArrowLeft
              size={12}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-x-1 sm:h-[13px] sm:w-[13px]"
            />

            <span>Back Home</span>
          </Link>

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25 sm:text-[10px] sm:tracking-[0.25em]">
            2026 / Projects
          </span>
        </div>
      </header>

      {/* HERO */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 md:px-10 lg:px-16 lg:pb-32">
        <div className="max-w-6xl">
          <p className="mb-6 font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 sm:mb-8 sm:text-[10px] sm:tracking-[0.35em]">
            Selected Work
          </p>

          <h1 className="text-[20vw] font-semibold leading-[0.78] tracking-[-0.1em] sm:text-[16vw] md:text-[13vw] lg:text-[11vw]">
            PROJECTS
          </h1>

          <div className="mt-8 flex flex-col justify-between gap-6 border-t border-white/10 pt-6 sm:mt-10 sm:gap-8 md:flex-row">
            <p className="max-w-xl text-sm leading-6 text-white/40 sm:text-base sm:leading-7">
              A collection of digital experiences, interfaces, and products
              built with a focus on interaction, performance, and visual
              clarity.
            </p>

            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/25 sm:text-[10px]">
              {String(projects.length).padStart(2, "0")} Projects
            </p>
          </div>
        </div>
      </section>

      {/* ALL PROJECTS */}
      <section className="px-5 sm:px-8 md:px-10 lg:px-16">
        <div className="border-t border-white/10">
          {projects.map((project) => (
            <Link
              key={project.number}
              href={`/projects/${project.slug}`}
              className="group block border-b border-white/10 py-10 transition-colors duration-500 hover:bg-white/[0.015] sm:py-14 md:py-16 lg:py-20"
            >
              {/* TOP INFO */}
              <div className="mb-6 flex items-center justify-between sm:mb-8">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/30 sm:text-[10px] sm:tracking-[0.3em]">
                  Project / {project.number}
                </span>

                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/20 sm:text-[10px] sm:tracking-[0.3em]">
                  {project.year}
                </span>
              </div>

              {/* VISUAL */}
              <div className="relative mb-7 aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#111111] sm:mb-10 sm:aspect-[16/8] sm:rounded-[1.5rem] md:rounded-[2rem]">
                {/* TOP GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.035] via-transparent to-transparent" />

                {/* GLOW */}
                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/[0.025] blur-3xl transition-transform duration-1000 group-hover:scale-125 sm:-right-32 sm:-top-32 sm:h-96 sm:w-96" />

                <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white/[0.02] blur-3xl sm:-bottom-40 sm:h-96 sm:w-96" />

                {/* PROJECT NAME */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <span className="select-none whitespace-nowrap text-[24vw] font-semibold leading-none tracking-[-0.09em] text-white/[0.035] transition-transform duration-1000 ease-out group-hover:scale-105 sm:text-[16vw] md:text-[14vw] lg:text-[11vw]">
                    {project.title}
                  </span>
                </div>

                {/* CENTER ARROW */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-black sm:h-20 sm:w-20">
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.5}
                      className="transition-transform duration-500 group-hover:rotate-45 sm:h-5 sm:w-5"
                    />
                  </div>
                </div>

                {/* CATEGORY */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8">
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.18em] text-white/50 backdrop-blur-md sm:px-4 sm:py-2 sm:text-[9px] sm:tracking-[0.2em]">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* PROJECT INFO */}
              <div className="grid gap-7 md:gap-8 lg:grid-cols-[1fr_0.45fr]">
                {/* TITLE */}
                <div>
                  <div className="flex items-start gap-3 sm:gap-5">
                    <span className="pt-1.5 font-mono text-[9px] text-white/20 sm:pt-2 sm:text-[10px]">
                      {project.number}
                    </span>

                    <h2 className="min-w-0 break-words text-[16vw] font-semibold leading-[0.82] tracking-[-0.08em] sm:text-7xl md:text-8xl lg:text-[8vw]">
                      {project.title}
                    </h2>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="flex flex-col justify-end">
                  <p className="max-w-md text-sm leading-6 text-white/40">
                    {project.description}
                  </p>

                  {/* TAGS */}
                  <div className="mt-5 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-white/30 sm:px-3 sm:text-[9px] sm:tracking-[0.15em]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* VIEW PROJECT */}
                  <div className="group/link mt-6 flex w-fit items-center gap-2 border-b border-white/20 pb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/50 sm:mt-8 sm:gap-3 sm:text-[10px] sm:tracking-[0.25em]">
                    View Project
                    <ArrowUpRight
                      size={12}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 sm:h-[13px] sm:w-[13px]"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-5 py-24 sm:px-8 sm:py-32 md:px-10 md:py-40 lg:px-16">
        <div className="border-t border-white/10 pt-7 sm:pt-8">
          <p className="mb-6 font-mono text-[9px] uppercase tracking-[0.25em] text-white/25 sm:mb-8 sm:text-[10px] sm:tracking-[0.3em]">
            Have a project in mind?
          </p>

          <Link
            href="/#contact"
            className="group flex items-end justify-between gap-4"
          >
            <h2 className="text-[13vw] font-semibold leading-[0.8] tracking-[-0.08em] sm:text-7xl md:text-8xl lg:text-[12vw]">
              LET&apos;S TALK
            </h2>

            <ArrowUpRight
              size={32}
              strokeWidth={1}
              className="mb-1 shrink-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 sm:mb-2 sm:h-12 sm:w-12 md:h-16 md:w-16"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
