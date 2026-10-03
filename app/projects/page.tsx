import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-transparent text-white">
      {/* HEADER */}
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-36 lg:px-10 lg:pb-36">
        <Link
          href="/"
          className="group mb-14 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 transition-colors hover:text-white sm:mb-20"
        >
          <ArrowLeft
            size={14}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back Home
        </Link>

        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/35">
            Project Archive
          </span>

          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/25">
            {projects.length.toString().padStart(2, "0")} Projects
          </span>
        </div>

        <div className="mt-8 overflow-hidden">
          <h1 className="text-[19vw] font-semibold leading-[0.78] tracking-[-0.1em] sm:text-[15vw] lg:text-[11vw]">
            PROJECTS
          </h1>
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
          A collection of web projects, concepts, and digital experiences
          exploring modern interface design, responsive development, and
          thoughtful interaction.
        </p>
      </section>

      {/* PROJECT LIST */}
      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-6 sm:pb-32 lg:px-10 lg:pb-40">
        <div className="border-t border-white/10">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block border-b border-white/10 py-8 transition-colors duration-500 hover:bg-white/[0.015] sm:py-10 lg:py-12"
            >
              {/* META */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] text-white/20">
                    {project.number}
                  </span>

                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">
                    {project.category}
                  </span>
                </div>

                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/20">
                  {project.year}
                </span>
              </div>

              {/* CONTENT */}
              <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.55fr_auto] lg:items-end lg:gap-12">
                <div>
                  <h2 className="text-[13vw] font-semibold leading-[0.8] tracking-[-0.08em] transition-transform duration-500 ease-out group-hover:translate-x-2 sm:text-[9vw] lg:text-[6vw]">
                    {project.title}
                  </h2>
                </div>

                <div>
                  <p className="max-w-md text-sm leading-6 text-white/35 transition-colors duration-500 group-hover:text-white/50 sm:text-base sm:leading-7">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-white/25 transition-colors duration-300 group-hover:border-white/20 group-hover:text-white/45"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ARROW */}
                <div className="flex items-end justify-end">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:border-white/30 group-hover:bg-white group-hover:text-black sm:h-14 sm:w-14">
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.5}
                      className="transition-transform duration-500 group-hover:rotate-45"
                    />
                  </div>
                </div>
              </div>

              {/* MOBILE ACTION */}
              <div className="mt-7 flex items-center justify-between lg:hidden">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/20">
                  View Case Study
                </span>

                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                  {project.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28 lg:px-10 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/20">
                More Work
              </span>

              <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.04em] text-white/70 sm:text-4xl lg:text-5xl">
                More projects and experiments are being built.
              </h2>
            </div>

            <Link
              href="/#contact"
              className="group flex w-fit items-center gap-4 border-b border-white/15 pb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 transition-colors hover:border-white hover:text-white"
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
