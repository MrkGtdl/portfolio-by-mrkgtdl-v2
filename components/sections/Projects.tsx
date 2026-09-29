"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "NEXORA",
    slug: "nexora",
    category: "Web Experience",
  },
  {
    number: "02",
    title: "SMILECARE",
    slug: "smilecare",
    category: "Healthcare",
  },
  {
    number: "03",
    title: "NOVATECH",
    slug: "novatech",
    category: "Technology",
  },
  {
    number: "04",
    title: "VELORA",
    slug: "velora",
    category: "Digital Product",
  },
  {
    number: "05",
    title: "VIEW ALL",
    category: "Explore",
    isViewAll: true,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // DESKTOP / TABLET
      mm.add("(min-width: 768px)", () => {
        const updateScroll = () => {
          const totalWidth = track.scrollWidth - window.innerWidth;

          return Math.max(totalWidth, 0);
        };

        gsap.to(track, {
          x: () => -updateScroll(),
          ease: "none",

          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${updateScroll()}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      return () => {
        mm.revert();
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden bg-[#0a0a0a] text-white md:h-screen"
    >
      {/* SECTION HEADER */}
      <div className="absolute left-5 right-5 top-6 z-20 flex items-center justify-between sm:left-8 sm:right-8 md:left-10 md:right-10 lg:left-16 lg:right-16">
        <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 sm:text-[10px]">
          Selected Projects
        </p>

        <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 sm:text-[10px]">
          <span className="md:hidden">Swipe →</span>
          <span className="hidden md:inline">Scroll →</span>
        </p>
      </div>

      {/* PROJECT TRACK */}
      <div
        ref={trackRef}
        className="
          flex
          flex-col
          items-center
          gap-5
          px-5
          pb-20
          pt-24
          md:h-screen
          md:w-max
          md:flex-row
          md:items-center
          md:gap-8
          md:px-[5vw]
          md:pb-0
          md:pt-0
        "
      >
        {projects.map((project) => {
          const isViewAll = project.isViewAll;

          const href = isViewAll ? "/projects" : `/projects/${project.slug}`;

          return (
            <Link
              key={project.number}
              href={href}
              aria-label={
                isViewAll
                  ? "View all projects"
                  : `View ${project.title} project`
              }
              className={`
                project-panel
                group
                relative
                flex
                h-[68vh]
                min-h-[460px]
                w-full
                max-w-[520px]
                shrink-0
                flex-col
                overflow-hidden
                rounded-[1.5rem]
                border
                border-white/10
                outline-none
                transition-transform
                duration-500
                focus-visible:ring-2
                focus-visible:ring-white/40

                sm:h-[70vh]
                sm:rounded-[2rem]

                md:h-[80vh]
                md:w-[86vw]
                md:max-w-none
                lg:w-[82vw]
              `}
              style={{
                backgroundColor: isViewAll ? "#ffffff" : "#111111",
                color: isViewAll ? "#000000" : "#ffffff",
              }}
            >
              {/* CARD BACKGROUND */}
              <div className="pointer-events-none absolute inset-0">
                {!isViewAll && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.035] via-transparent to-transparent" />

                    <div className="absolute -right-32 -top-32 h-[24rem] w-[24rem] rounded-full bg-white/[0.025] blur-3xl transition-transform duration-700 group-hover:scale-110 md:-right-40 md:-top-40 md:h-[32rem] md:w-[32rem]" />
                  </>
                )}

                {isViewAll && (
                  <div className="absolute inset-0 bg-gradient-to-br from-black/[0.04] via-transparent to-black/[0.02]" />
                )}
              </div>

              {/* TOP META */}
              <div className="relative z-10 flex items-start justify-between p-5 sm:p-7 md:p-10">
                <p
                  className={`font-mono text-[9px] uppercase tracking-[0.25em] sm:text-[10px] sm:tracking-[0.3em] ${
                    isViewAll ? "text-black/40" : "text-white/35"
                  }`}
                >
                  {project.category}
                </p>

                <p
                  className={`font-mono text-[9px] uppercase tracking-[0.25em] sm:text-[10px] sm:tracking-[0.3em] ${
                    isViewAll ? "text-black/30" : "text-white/30"
                  }`}
                >
                  {project.number}
                </p>
              </div>

              {/* MAIN VISUAL */}
              <div
                className={`
                  relative
                  mx-5
                  mt-1
                  flex
                  flex-1
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[1.25rem]
                  border
                  sm:mx-7
                  sm:rounded-[1.5rem]
                  md:mx-10

                  ${
                    isViewAll
                      ? "border-black/10 bg-black/[0.03]"
                      : "border-white/[0.06] bg-[#181818]"
                  }
                `}
              >
                {/* LARGE BACKGROUND TEXT */}
                <span
                  className={`
                    select-none
                    whitespace-nowrap
                    text-[22vw]
                    font-semibold
                    leading-none
                    tracking-[-0.09em]
                    transition-transform
                    duration-700
                    group-hover:scale-105

                    sm:text-[18vw]

                    md:text-[12vw]
                    lg:text-[10vw]

                    ${isViewAll ? "text-black/[0.045]" : "text-white/[0.035]"}
                  `}
                >
                  {isViewAll ? "PROJECTS" : project.title}
                </span>

                {/* CENTER BUTTON */}
                <div
                  className={`
                    absolute
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    border
                    backdrop-blur-sm
                    transition-all
                    duration-500
                    group-hover:scale-110

                    sm:h-24
                    sm:w-24

                    ${
                      isViewAll
                        ? "border-black/10 bg-black/[0.04]"
                        : "border-white/10 bg-white/[0.025]"
                    }
                  `}
                >
                  <span
                    className={`
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-[0.18em]
                      sm:text-[9px]
                      sm:tracking-[0.2em]

                      ${isViewAll ? "text-black/50" : "text-white/40"}
                    `}
                  >
                    {isViewAll ? "Open ↗" : "View"}
                  </span>
                </div>
              </div>

              {/* BOTTOM */}
              <div className="relative z-10 flex items-end justify-between gap-4 p-5 sm:gap-6 sm:p-7 md:p-10">
                <div className="min-w-0">
                  <p
                    className={`
                      mb-2
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-[0.25em]
                      sm:text-[9px]
                      sm:tracking-[0.3em]

                      ${isViewAll ? "text-black/30" : "text-white/25"}
                    `}
                  >
                    {isViewAll ? "Explore Everything" : "Selected Project"}
                  </p>

                  <h2
                    className={`
                      truncate
                      text-5xl
                      font-semibold
                      leading-none
                      tracking-[-0.07em]
                      transition-transform
                      duration-500
                      group-hover:translate-x-1

                      sm:text-6xl

                      md:text-7xl
                      lg:text-[7vw]

                      ${isViewAll ? "text-black" : "text-white"}
                    `}
                  >
                    {project.title}
                  </h2>
                </div>

                {/* DESKTOP CTA */}
                <div className="hidden shrink-0 pb-1 sm:block">
                  <span
                    className={`
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      md:text-[10px]

                      ${isViewAll ? "text-black/40" : "text-white/35"}
                    `}
                  >
                    {isViewAll ? "View All Projects ↗" : "Explore ↗"}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
