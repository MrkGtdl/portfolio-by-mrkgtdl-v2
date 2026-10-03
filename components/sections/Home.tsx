"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import Section from "@/components/ui/Section";
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
    <Section id="home" className="relative flex min-h-[100svh] overflow-hidden">
      <div ref={heroRef} className="flex min-h-[100svh] w-full flex-col">
        <div className="flex flex-1 items-center">
          <div className="w-full max-w-5xl">
            <p className="hero-eyebrow mb-5 translate-y-3 opacity-0 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Kenneth · Web Developer
            </p>

            <div className="overflow-hidden">
              <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-7xl lg:text-[7.5rem]">
                <span className="hero-line block translate-y-[70px] opacity-0">
                  I build
                </span>

                <span className="hero-line block translate-y-[70px] opacity-0 text-neutral-400">
                  modern websites.
                </span>
              </h1>
            </div>

            <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <p className="hero-description max-w-xl translate-y-[18px] opacity-0 text-base leading-7 text-neutral-400 sm:text-lg">
                I create responsive, modern, and interactive websites with a
                focus on clean interfaces, thoughtful user experience, and
                maintainable frontend development.
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

        <div className="hero-meta flex translate-y-[10px] items-center justify-between border-t border-white/10 pb-5 pt-4 text-xs uppercase tracking-[0.18em] text-neutral-600 opacity-0 sm:pb-6">
          <span>Available for opportunities</span>

          <span className="flex items-center gap-3">
            Scroll to explore
            <span className="inline-block h-8 w-px bg-neutral-800" />
          </span>
        </div>
      </div>
    </Section>
  );
}
