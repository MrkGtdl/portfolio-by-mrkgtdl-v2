"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "NEXORA",
    category: "Web Experience",
    year: "2026",
    description:
      "A modern digital experience focused on immersive interaction, visual clarity, and a refined user journey.",
    tags: ["Next.js", "GSAP", "TypeScript"],
  },
  {
    number: "02",
    title: "SMILECARE",
    category: "Healthcare",
    year: "2026",
    description:
      "A clean and approachable healthcare platform designed around trust, accessibility, and effortless navigation.",
    tags: ["WordPress", "Gutenberg", "UI/UX"],
  },
  {
    number: "03",
    title: "NOVATECH",
    category: "Technology",
    year: "2026",
    description:
      "A technology-focused website combining structured content with a modern visual system and responsive interactions.",
    tags: ["WordPress", "GenerateBlocks", "CSS"],
  },
  {
    number: "04",
    title: "VELORA",
    category: "Digital Product",
    year: "2026",
    description:
      "A digital product concept built around simplicity, smooth interactions, and a focused product experience.",
    tags: ["React", "Tailwind", "Framer Motion"],
  },
  {
    number: "05",
    title: "AURELIS",
    category: "Creative Platform",
    year: "2026",
    description:
      "An experimental interface exploring typography, motion, and cinematic presentation.",
    tags: ["Next.js", "Motion", "Creative UI"],
  },
  {
    number: "06",
    title: "KINETIQ",
    category: "Interactive Experience",
    year: "2026",
    description:
      "An interaction-driven concept where movement and interface behavior become part of the experience.",
    tags: ["React", "GSAP", "WebGL"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* HEADER */}
      <header className="px-6 pb-16 pt-8 sm:px-10 sm:pb-20 lg:px-16">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 transition-colors hover:text-white"
          >
            <ArrowLeft
              size={13}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back Home
          </Link>

          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/25">
            2026 / Projects
          </span>
        </div>
      </header>

      {/* INTRO */}
      <section className="px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
        <div className="max-w-6xl">
          <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.35em] text-white/30">
            Selected Work
          </p>

          <h1 className="text-[16vw] font-semibold leading-[0.78] tracking-[-0.09em] sm:text-[13vw] lg:text-[11vw]">
            PROJECTS
          </h1>

          <div className="mt-10 flex flex-col justify-between gap-8 border-t border-white/10 pt-6 sm:flex-row">
            <p className="max-w-xl text-sm leading-6 text-white/40 sm:text-base">
              A collection of digital experiences, interfaces, and products
              built with a focus on interaction, performance, and visual
              clarity.
            </p>

            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/25">
              {String(projects.length).padStart(2, "0")} Projects
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT LIST */}
      <section className="px-6 sm:px-10 lg:px-16">
        <div className="border-t border-white/10">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group border-b border-white/10 py-12 sm:py-16 lg:py-20"
            >
              {/* META */}
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
                  Project / {project.number}
                </span>

                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/20">
                  {project.year}
                </span>
              </div>

              {/* VISUAL */}
              <div className="relative mb-10 aspect-[16/8] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111111] sm:rounded-[2rem]">
                {/* subtle background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.035] via-transparent to-transparent" />

                <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/[0.025] blur-3xl transition-transform duration-1000 group-hover:scale-125" />

                <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-white/[0.02] blur-3xl" />

                {/* giant project title */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <span className="select-none whitespace-nowrap text-[18vw] font-semibold leading-none tracking-[-0.09em] text-white/[0.035] transition-transform duration-1000 ease-out group-hover:scale-105 sm:text-[14vw] lg:text-[11vw]">
                    {project.title}
                  </span>
                </div>

                {/* center button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.5}
                      className="transition-transform duration-500 group-hover:rotate-45"
                    />
                  </div>
                </div>

                {/* category */}
                <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8">
                  <span className="rounded-full border border-white/10 bg-black/30 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/50 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr]">
                <div>
                  <div className="flex items-start gap-5">
                    <span className="pt-2 font-mono text-[10px] text-white/20">
                      {project.number}
                    </span>

                    <h2 className="text-6xl font-semibold leading-[0.85] tracking-[-0.07em] sm:text-8xl lg:text-[8vw]">
                      {project.title}
                    </h2>
                  </div>
                </div>

                <div className="flex flex-col justify-end">
                  <p className="max-w-md text-sm leading-6 text-white/40">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-white/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="group/link mt-8 flex w-fit items-center gap-3 border-b border-white/20 pb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 transition-colors hover:border-white hover:text-white">
                    View Project
                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="px-6 py-32 sm:px-10 sm:py-40 lg:px-16">
        <div className="border-t border-white/10 pt-8">
          <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.3em] text-white/25">
            Have a project in mind?
          </p>

          <Link
            href="/#contact"
            className="group flex items-end justify-between gap-6"
          >
            <h2 className="text-[12vw] font-semibold leading-[0.8] tracking-[-0.08em] transition-colors group-hover:text-white/70">
              LET&apos;S TALK
            </h2>

            <ArrowUpRight
              size={40}
              strokeWidth={1}
              className="mb-2 shrink-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 sm:size-16"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
