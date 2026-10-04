"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-transparent text-primary">
      {/* HEADER */}
      <section className="px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-36 md:px-10 lg:px-16 lg:pb-32">
        <div className="mx-auto w-full max-w-[1600px]">
          <Link
            href="/"
            className="group mb-14 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted transition-colors hover:text-primary sm:mb-20"
          >
            <ArrowLeft
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back Home
          </Link>

          <div className="flex items-center justify-between border-b border-border pb-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
              Project Archive
            </span>

            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
              {projects.length.toString().padStart(2, "0")} Projects
            </span>
          </div>

          <div className="mt-8 overflow-hidden">
            <h1 className="text-[18vw] font-semibold leading-[0.78] tracking-[-0.1em] text-primary sm:text-[14vw] lg:text-[10vw]">
              PROJECTS
            </h1>
          </div>

          <p className="mt-7 max-w-xl text-sm leading-6 text-secondary sm:text-base sm:leading-7">
            A collection of web projects, concepts, and digital experiences
            exploring modern interface design, responsive development, and
            thoughtful interaction.
          </p>
        </div>
      </section>

      {/* PROJECT LIST */}
      <section className="px-5 pb-24 sm:px-8 sm:pb-32 md:px-10 lg:px-16 lg:pb-40">
        <div className="mx-auto w-full max-w-[1600px]">
          <div className="border-t border-border">
            {projects.map((project) => {
              const isHovered = hoveredProject === project.slug;
              const isDimmed = hoveredProject !== null && !isHovered;

              return (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  onMouseEnter={() => setHoveredProject(project.slug)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className={[
                    "group relative block border-b border-border py-8",
                    "transition-[filter,opacity] duration-500 ease-out",
                    "sm:py-10 lg:py-12",
                    isDimmed
                      ? "lg:blur-[1.5px] lg:opacity-35"
                      : "blur-0 opacity-100",
                  ].join(" ")}
                >
                  {/* META */}
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
                      {project.number} / {project.category}
                    </span>

                    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
                      {project.year}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="relative flex flex-col gap-7 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
                    {/* LEFT */}
                    <div className="min-w-0">
                      <div className="flex items-start gap-4">
                        <span className="pt-2 font-mono text-[10px] text-muted">
                          {project.number}
                        </span>

                        <div className="min-w-0">
                          <h2 className="text-[13vw] font-semibold leading-[0.78] tracking-[-0.08em] text-primary transition-transform duration-500 ease-out group-hover:translate-x-2 sm:text-[10vw] lg:text-[6.5vw]">
                            {project.title}
                          </h2>

                          <p className="mt-4 max-w-xl text-sm leading-6 text-secondary transition-colors duration-500 group-hover:text-primary sm:text-base sm:leading-7">
                            {project.description}
                          </p>
                        </div>
                      </div>

                      {/* STACK */}
                      <div className="mt-6 flex flex-wrap gap-2 pl-8">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-border px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-muted transition-colors duration-300 group-hover:border-accent group-hover:text-accent"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* RIGHT ACTION */}
                    <div className="flex items-center justify-end">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-primary transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-primary sm:h-14 sm:w-14">
                        <ArrowUpRight
                          size={18}
                          strokeWidth={1.5}
                          className="transition-transform duration-500 group-hover:rotate-45"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ACTION */}
                  <div className="mt-7 flex items-center justify-between pl-8">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted transition-colors duration-300 group-hover:text-primary">
                      View Case Study
                    </span>

                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted lg:hidden">
                      {project.category}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="border-t border-border px-5 sm:px-8 md:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-[1600px] py-20 sm:py-28 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted">
                More Work
              </span>

              <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.04em] text-primary sm:text-4xl lg:text-5xl">
                More projects and experiments are being built.
              </h2>
            </div>

            <Link
              href="/#contact"
              className="group flex w-fit items-center gap-4 border-b border-border pb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-secondary transition-colors hover:border-primary hover:text-primary"
            >
              Get in touch
              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
