"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stack = [
  {
    number: "01",
    title: "React / Next.js",
  },
  {
    number: "02",
    title: "TypeScript",
  },
  {
    number: "03",
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

      if (reduceMotion) return;

      /*
       * ABOUT REVEALS
       */

      gsap.from(".about-header", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".about-intro", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        delay: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-intro",
          start: "top 86%",
          once: true,
        },
      });

      gsap.from(".about-description", {
        y: 18,
        opacity: 0,
        duration: 0.6,
        delay: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-description",
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(".about-cta", {
        y: 12,
        opacity: 0,
        duration: 0.5,
        delay: 0.18,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-cta",
          start: "top 90%",
          once: true,
        },
      });

      gsap.from(".about-profile", {
        x: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-profile",
          start: "top 86%",
          once: true,
        },
      });

      gsap.from(".about-stack-item", {
        y: 15,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-profile",
          start: "top 86%",
          once: true,
        },
      });

      gsap.from(".about-footer", {
        y: 12,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-footer",
          start: "top 90%",
          once: true,
        },
      });

      /*
       * DESKTOP / TABLET PIN
       *
       * Mobile stays completely normal.
       * The pinned interaction only exists from 768px upward.
       */

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        /*
         * Keep About fixed while Projects naturally
         * moves over it.
         */
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });

        /*
         * Very subtle overscroll.
         *
         * This is intentionally minimal so About
         * doesn't feel like it's being dragged.
         *
         * Because it is scrubbed, it automatically
         * reverses when scrolling upward.
         */
        gsap.to(section, {
          scale: 0.985,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "bottom bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      });
    }, section);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative z-10 overflow-visible bg-transparent px-5 pt-16 pb-24 text-white sm:px-8 sm:pt-20 sm:pb-32 md:px-10 md:pt-24 md:pb-40 lg:px-16"
    >
      <div className="relative mx-auto w-full max-w-[1600px]">
        {/* HEADER */}
        <div className="about-header mb-14 flex items-end justify-between border-t border-white/10 pt-5 sm:mb-20">
          <div>
            <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 sm:text-[10px]">
              01 — About
            </p>

            <h2 className="text-4xl font-medium tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              A little about me
            </h2>
          </div>

          <span className="hidden font-mono text-[9px] uppercase tracking-[0.25em] text-white/20 sm:block">
            2026
          </span>
        </div>

        {/* MAIN */}
        <div className="grid gap-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-24">
          {/* INTRO */}
          <div>
            <p className="about-intro max-w-5xl text-3xl font-light leading-[1.06] tracking-[-0.055em] text-white/90 sm:text-4xl md:text-5xl lg:text-[3.7rem]">
              I build websites and web applications{" "}
              <span className="text-white/30">from the ground up.</span>
            </p>

            <p className="about-description mt-8 max-w-2xl text-sm leading-7 text-white/40 sm:mt-10 sm:text-base sm:leading-8">
              I work mainly with React, Next.js, TypeScript, and WordPress,
              building interfaces and the functionality behind them.
            </p>

            <div className="about-cta">
              <Link
                href="/about"
                className="group mt-8 inline-flex items-center gap-3 border border-white/15 bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:px-6"
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

          {/* STACK */}
          <div className="about-profile lg:pt-2">
            <div className="border-t border-white/10 pt-5">
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/25 sm:text-[10px]">
                Current Stack
              </p>
            </div>

            <div className="mt-5">
              {stack.map((item) => (
                <div
                  key={item.number}
                  className="about-stack-item group flex items-center justify-between border-b border-white/10 py-5 transition-colors duration-300 hover:border-white/25"
                >
                  <span className="text-sm text-white/55 transition-colors duration-300 group-hover:text-white sm:text-base">
                    {item.title}
                  </span>

                  <span className="font-mono text-[9px] text-white/20">
                    {item.number}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/20">
                More
              </p>

              <p className="mt-3 max-w-sm text-sm leading-6 text-white/30">
                Background, experience, workflow, and the technologies I use are
                covered on my full profile.
              </p>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="about-footer mt-20 border-t border-white/10 pt-5 sm:mt-28">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/20">
              Profile / Overview
            </span>

            <Link
              href="/about"
              className="group inline-flex items-center gap-1 font-mono text-[8px] uppercase tracking-[0.25em] text-white/20 transition-colors hover:text-white"
            >
              Full Profile
              <ArrowUpRight
                size={11}
                strokeWidth={1.3}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
