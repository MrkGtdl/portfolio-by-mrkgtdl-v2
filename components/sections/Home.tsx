"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import Button from "@/components/ui/Button";

type HomeProps = {
  startAnimation: boolean;
};

export default function Home({ startAnimation }: HomeProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!startAnimation) return;

    const ctx = gsap.context(() => {
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
    }, heroRef);

    return () => ctx.revert();
  }, [startAnimation]);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] overflow-hidden bg-transparent px-5 py-24 text-primary sm:px-8 sm:py-32 md:px-10 md:py-40 lg:px-16"
    >
      <div
        ref={heroRef}
        className="relative mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col"
      >
        {/* HERO CONTENT */}
        <div className="flex flex-1 items-center">
          <div className="w-full">
            {/* EYEBROW */}
            <p className="hero-eyebrow mb-5 translate-y-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary opacity-0">
              Kenneth / Full-Stack Web Developer
            </p>

            {/* HEADING */}
            <div className="overflow-hidden">
              <h1 className="text-[15vw] font-semibold leading-[0.84] tracking-[-0.09em] text-primary sm:text-[11vw] lg:text-[8.5vw]">
                <span className="hero-line block translate-y-[70px] opacity-0">
                  I build
                </span>

                <span className="hero-line block translate-y-[70px] text-primary opacity-0">
                  modern websites.
                </span>
              </h1>
            </div>

            {/* DESCRIPTION + ACTIONS */}
            <div className="mt-10 flex flex-col gap-8 sm:mt-12 sm:flex-row sm:items-end sm:justify-between lg:mt-14">
              <p className="hero-description max-w-xl translate-y-[18px] text-base leading-7 text-secondary opacity-0 sm:text-lg sm:leading-8">
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
        <div className="hero-meta flex translate-y-[10px] items-center justify-between border-t border-border pb-5 pt-5 text-[10px] uppercase tracking-[0.18em] text-secondary opacity-0 sm:pb-6 sm:pt-6">
          <span>Available for opportunities</span>

          <span className="flex items-center gap-3">
            Scroll to explore
            <span className="inline-block h-8 w-px bg-muted" />
          </span>
        </div>
      </div>
    </section>
  );
}
