"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { ArrowUpRight, Database, LayoutTemplate, Server } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const focusAreas = [
  {
    number: "01",
    icon: LayoutTemplate,
    title: "Frontend Development",
  },
  {
    number: "02",
    icon: Server,
    title: "Full-Stack Development",
  },
  {
    number: "03",
    icon: Database,
    title: "WordPress",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(
          [
            ".about-header",
            ".about-intro",
            ".about-description",
            ".about-cta",
            ".about-profile",
            ".about-focus-item",
            ".about-footer",
          ],
          {
            clearProps: "all",
          },
        );

        return;
      }

      gsap.from(".about-header", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".about-intro", {
        y: 45,
        opacity: 0,
        duration: 0.9,
        delay: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-intro",
          start: "top 86%",
          once: true,
        },
      });

      gsap.from(".about-description", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        delay: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-description",
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(".about-cta", {
        y: 16,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-cta",
          start: "top 90%",
          once: true,
        },
      });

      gsap.from(".about-profile", {
        x: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-profile",
          start: "top 86%",
          once: true,
        },
      });

      gsap.from(".about-focus-item", {
        y: 25,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-profile",
          start: "top 86%",
          once: true,
        },
      });

      gsap.from(".about-footer", {
        y: 16,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-footer",
          start: "top 90%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-transparent px-5 py-24 text-white sm:px-8 sm:py-32 md:px-10 md:py-40 lg:px-16"
    >
      <div ref={sectionRef} className="relative mx-auto w-full max-w-[1600px]">
        {/* HEADER */}
        <div className="about-header mb-12 flex items-end justify-between border-t border-white/10 pt-5 sm:mb-14">
          <div>
            <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 sm:text-[10px]">
              01 — About
            </p>

            <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              A little about me
            </h2>
          </div>

          <span className="hidden font-mono text-[9px] uppercase tracking-[0.25em] text-white/20 sm:block">
            2026
          </span>
        </div>

        {/* MAIN */}
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          {/* INTRO */}
          <div>
            <p className="about-intro max-w-4xl text-3xl font-light leading-[1.08] tracking-[-0.05em] text-white/90 sm:text-4xl md:text-5xl lg:text-[3.5rem]">
              I&apos;m a web developer focused on building{" "}
              <span className="text-white/35">
                modern, responsive, and purposeful digital experiences.
              </span>
            </p>

            <p className="about-description mt-7 max-w-2xl text-sm leading-7 text-white/40 sm:mt-8 sm:text-base sm:leading-8">
              I enjoy turning ideas into functional digital products, combining
              thoughtful interface design with clean and maintainable
              development.
            </p>

            <div className="about-cta">
              <Link
                href="/about"
                className="group mt-7 inline-flex items-center gap-3 border border-white/15 bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:mt-8 sm:px-6"
              >
                View Full Profile
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>

          {/* PROFILE */}
          <div className="about-profile lg:pt-1">
            <div className="border-t border-white/10 pt-5">
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/25 sm:text-[10px]">
                Focus Areas
              </p>
            </div>

            <div className="mt-6">
              {focusAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <div
                    key={area.number}
                    className="about-focus-item group flex items-center justify-between border-b border-white/10 py-4 transition-colors duration-300 hover:border-white/20 sm:py-5"
                  >
                    <div className="flex items-center gap-4">
                      <Icon
                        size={17}
                        strokeWidth={1.3}
                        aria-hidden="true"
                        className="text-white/30 transition-colors duration-300 group-hover:text-white/70"
                      />

                      <span className="text-sm text-white/60 transition-colors duration-300 group-hover:text-white sm:text-base">
                        {area.title}
                      </span>
                    </div>

                    <span className="font-mono text-[9px] text-white/20">
                      {area.number}
                    </span>
                  </div>
                );
              })}
            </div>

            <p className="mt-7 max-w-md text-sm leading-6 text-white/30">
              More about my background, development approach, technologies, and
              current focus can be found on my full profile.
            </p>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="about-footer mt-16 border-t border-white/10 pt-5 sm:mt-20">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/20">
              Profile Summary
            </span>

            <Link
              href="/about"
              className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/20 transition-colors hover:text-white"
            >
              View Full Profile ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
