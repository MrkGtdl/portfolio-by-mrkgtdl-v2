"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

type ProjectTheme = "dark" | "light";

function ProjectPreview({ theme }: { theme: ProjectTheme }) {
  if (theme === "light") {
    return (
      <div className="absolute inset-0 bg-[#e9e9e6] p-3 text-black sm:p-4">
        <div className="h-full overflow-hidden rounded-md bg-[#f7f7f5] shadow-xl">
          <div className="flex h-6 items-center justify-between border-b border-black/10 px-3">
            <div className="h-1.5 w-10 rounded-full bg-black/70" />

            <div className="hidden gap-2 sm:flex">
              <span className="h-1 w-5 rounded-full bg-black/15" />
              <span className="h-1 w-5 rounded-full bg-black/15" />
              <span className="h-1 w-5 rounded-full bg-black/15" />
            </div>
          </div>

          <div className="grid h-[calc(100%-24px)] grid-cols-2">
            <div className="flex flex-col justify-center p-4">
              <div className="mb-2 h-1 w-8 rounded-full bg-black/20" />
              <div className="h-3 w-4/5 rounded bg-black sm:h-4" />
              <div className="mt-1.5 h-3 w-3/5 rounded bg-black sm:h-4" />
              <div className="mt-3 h-4 w-12 rounded-full bg-black sm:h-5 sm:w-14" />
            </div>

            <div className="flex items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-black/[0.06] sm:h-16 sm:w-16" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 bg-[#111111] p-3 sm:p-4">
      <div className="h-full overflow-hidden rounded-md border border-white/10 bg-[#151515]">
        <div className="flex h-6 items-center justify-between border-b border-white/10 px-3">
          <div className="h-1.5 w-9 rounded-full bg-white/30" />

          <div className="hidden gap-2 sm:flex">
            <span className="h-1 w-5 rounded-full bg-white/10" />
            <span className="h-1 w-5 rounded-full bg-white/10" />
            <span className="h-1 w-5 rounded-full bg-white/10" />
          </div>
        </div>

        <div className="flex h-[calc(100%-24px)] flex-col justify-center p-3 sm:p-4">
          <div className="h-1 w-8 rounded-full bg-white/20" />
          <div className="mt-2.5 h-4 w-3/4 rounded bg-white/80 sm:h-5" />
          <div className="mt-1.5 h-4 w-1/2 rounded bg-white/20 sm:h-5" />

          <div className="mt-3 grid grid-cols-3 gap-1.5">
            <div className="h-7 rounded bg-white/[0.035]" />
            <div className="h-7 rounded bg-white/[0.035]" />
            <div className="h-7 rounded bg-white/[0.035]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState<string | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        return;
      }

      /*
       * PROJECT REVEALS
       */

      gsap.fromTo(
        ".projects-eyebrow",
        { y: 18 },
        {
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".projects-title",
        { y: 45 },
        {
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".projects-description",
        { y: 20 },
        {
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 72%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".project-row",
        { y: 30 },
        {
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".project-list",
            start: "top 80%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".projects-footer",
        { y: 20 },
        {
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-footer",
            start: "top 88%",
            once: true,
          },
        },
      );

      /*
       * PROJECTS → CONTACT
       *
       * Projects scrolls normally until its ENTIRE
       * section reaches the bottom of the viewport.
       *
       * At that exact point:
       *
       *   Projects = pinned
       *   pinSpacing = false
       *   Contact = allowed to scroll over it
       *
       * Desktop / tablet only.
       */

      mm.add("(min-width: 768px)", () => {
        ScrollTrigger.create({
          trigger: section,
          start: "bottom bottom",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });
      });
    }, section);

    return () => {
      mm.revert();
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative z-10 overflow-hidden bg-[#1f1e1f] px-5 py-24 text-[#e8e8e5] sm:px-8 sm:py-32 md:px-10 md:py-40 lg:px-16"
    >
      <div className="mx-auto w-full max-w-[1600px]">
        {/* HEADER */}
        <div className="projects-eyebrow mb-6 flex items-center justify-between border-b border-white/10 pb-5">
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
            Selected Work
          </span>

          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
            {projects.length.toString().padStart(2, "0")} Projects
          </span>
        </div>

        {/* TITLE */}
        <div className="overflow-hidden">
          <h2 className="projects-title text-[17vw] font-semibold leading-[0.8] tracking-[-0.09em] text-[#e8e8e5] sm:text-[13vw] lg:text-[10vw]">
            PROJECTS
          </h2>
        </div>

        <p className="projects-description mt-7 max-w-xl text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
          A selection of websites and digital experiences built with a focus on
          clean interfaces, responsive development, and thoughtful interaction.
        </p>

        {/* PROJECT LIST */}
        <div className="project-list mt-20 sm:mt-28 lg:mt-32">
          {projects.map((project) => {
            const isActive = activeProject === project.slug;
            const hasActiveProject = activeProject !== null;
            const isInactive = hasActiveProject && !isActive;

            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                onMouseEnter={() => setActiveProject(project.slug)}
                onMouseLeave={() => setActiveProject(null)}
                className={[
                  "project-row group relative block border-t border-white/10 py-8",
                  "transition-[filter,opacity] duration-500 ease-out",
                  "sm:py-10 lg:py-12",
                  isInactive
                    ? "lg:blur-[2px] lg:opacity-40"
                    : "blur-0 opacity-100",
                ].join(" ")}
              >
                {/* TOP META */}
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-white/40">
                    {project.number} / {project.category}
                  </span>

                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-white/40">
                    {project.year}
                  </span>
                </div>

                {/* MAIN ROW */}
                <div className="relative flex flex-col gap-6 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
                  {/* CONTENT */}
                  <div className="min-w-0">
                    <div className="flex items-start gap-4">
                      <span className="pt-2 font-mono text-[10px] font-medium text-white/35">
                        {project.number}
                      </span>

                      <div>
                        <h3 className="text-[14vw] font-semibold leading-[0.78] tracking-[-0.08em] text-[#e8e8e5] transition-transform duration-500 ease-out group-hover:translate-x-2 sm:text-[10vw] lg:text-[7vw]">
                          {project.title}
                        </h3>

                        <p className="mt-4 max-w-lg text-sm leading-6 text-white/55 transition-colors duration-500 group-hover:text-white/75 sm:text-base">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* STACK */}
                    <div className="mt-6 flex flex-wrap gap-2 pl-8">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-white/40 transition-colors duration-300 group-hover:border-white/25 group-hover:text-white/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* DESKTOP PREVIEW */}
                  <div className="relative hidden w-[280px] shrink-0 overflow-hidden rounded-xl border border-white/10 bg-[#111111] opacity-50 transition-all duration-500 ease-out group-hover:w-[340px] group-hover:border-white/20 group-hover:opacity-100 lg:block">
                    <div className="aspect-[1.45/1]">
                      <div className="absolute inset-0 scale-[1.03] transition-transform duration-700 ease-out group-hover:scale-100">
                        <ProjectPreview theme={project.theme} />
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-black/5 transition-opacity duration-500 group-hover:opacity-0" />
                  </div>

                  {/* MOBILE PREVIEW */}
                  <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#111111] lg:hidden">
                    <div className="aspect-[16/8]">
                      <ProjectPreview theme={project.theme} />
                    </div>
                  </div>
                </div>

                {/* ACTION */}
                <div className="mt-7 flex items-center justify-between pl-8">
                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-white/40 transition-colors duration-300 group-hover:text-white/75">
                    View Case Study
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#e8e8e5] transition-all duration-500 group-hover:border-white/30 group-hover:bg-[#e8e8e5] group-hover:text-[#1f1e1f]">
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                      className="transition-transform duration-500 group-hover:rotate-45"
                    />
                  </div>
                </div>
              </Link>
            );
          })}

          <div className="border-t border-white/10" />
        </div>

        {/* VIEW ALL */}
        <div className="projects-footer mt-10">
          <Link
            href="/projects"
            className="group flex items-center justify-between border-b border-white/10 pb-5"
          >
            <span className="text-lg font-medium tracking-tight text-white/55 transition-colors duration-300 group-hover:text-[#e8e8e5] sm:text-xl">
              View all projects
            </span>

            <ArrowUpRight
              size={22}
              strokeWidth={1.5}
              className="text-white/45 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:translate-x-1.5 group-hover:text-[#e8e8e5]"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
