"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Button from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

type HomeProps = {
  startAnimation: boolean;
};

export default function Home({ startAnimation }: HomeProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!startAnimation) return;

    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      /*
       * ------------------------------------------------------------
       * HERO INTRO
       * ------------------------------------------------------------
       */

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.to(".hero-eyebrow", {
        y: 0,
        opacity: 1,
        duration: 0.6,
      })
        .to(
          ".hero-line",
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
          },
          "-=0.3",
        )
        .to(
          ".hero-description",
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          },
          "-=0.45",
        )
        .to(
          ".hero-actions",
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
          "-=0.4",
        )
        .to(
          ".hero-meta",
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
          "-=0.35",
        );

      if (reduceMotion) return;

      /*
       * ------------------------------------------------------------
       * DESKTOP / TABLET PIN
       *
       * Same interaction pattern as About.
       *
       * Home stays fixed while About naturally
       * moves over it.
       *
       * Mobile stays completely normal.
       * ------------------------------------------------------------
       */

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
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
         * Very subtle scale while Home is being
         * covered by the next section.
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
  }, [startAnimation]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative z-0 min-h-[100svh] overflow-hidden bg-[#1f1e1f] px-5 pt-28 pb-8 text-[#e8e8e5] sm:px-8 sm:pt-32 sm:pb-10 md:px-10 md:pt-36 lg:px-16 lg:pt-40"
    >
      <div className="relative mx-auto flex min-h-[calc(100svh-9rem)] w-full max-w-[1600px] flex-col sm:min-h-[calc(100svh-10rem)] md:min-h-[calc(100svh-11rem)]">
        {/* HERO CONTENT */}
        <div className="pt-[18vh] sm:pt-[20vh] lg:pt-[22vh]">
          <div className="w-full">
            {/* EYEBROW */}
            <p className="hero-eyebrow mb-5 translate-y-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/40 opacity-0">
              Kenneth / Full-Stack Web Developer
            </p>

            {/* HEADING */}
            <div className="overflow-hidden">
              <h1 className="text-[15vw] font-semibold leading-[0.84] tracking-[-0.09em] text-[#e8e8e5] sm:text-[11vw] lg:text-[8.5vw]">
                <span className="hero-line block translate-y-[70px] opacity-0">
                  I build
                </span>

                <span className="hero-line block translate-y-[70px] text-[#e8e8e5] opacity-0">
                  modern websites.
                </span>
              </h1>
            </div>

            {/* DESCRIPTION + ACTIONS */}
            <div className="mt-8 flex flex-col gap-7 sm:mt-10 sm:flex-row sm:items-end sm:justify-between lg:mt-12">
              <p className="hero-description max-w-xl translate-y-[18px] text-base leading-7 text-white/55 opacity-0 sm:text-lg sm:leading-8">
                I build responsive and interactive web experiences using modern
                frontend technologies, with a focus on clean interfaces,
                thoughtful user experience, and maintainable code.
              </p>

              <div className="hero-actions flex shrink-0 translate-y-[14px] flex-wrap gap-3 opacity-0">
                <Button href="#projects">View Projects</Button>

                <Button href="#contact" variant="secondary">
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* HERO META */}
        <div className="hero-meta mt-12 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-white/40 opacity-0 sm:mt-14">
          <span>Available for opportunities</span>

          <span className="flex items-center gap-3">
            Scroll to explore
            <span className="inline-block h-1 w-px bg-white/20" />
          </span>
        </div>
      </div>
    </section>
  );
}
