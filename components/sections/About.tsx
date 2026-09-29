"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      /* --------------------------------
         HERO TEXT REVEAL
      -------------------------------- */

      gsap.from(".about-hero-label", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".about-hero",
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".about-hero-title", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        delay: 0.1,
        ease: "power4.out",

        scrollTrigger: {
          trigger: ".about-hero",
          start: "top 70%",
          once: true,
        },
      });

      /* --------------------------------
         DESCRIPTION
      -------------------------------- */

      gsap.from(".about-description", {
        y: 70,
        opacity: 0,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".about-description",
          start: "top 80%",
          once: true,
        },
      });

      /* --------------------------------
         INFO BLOCKS
      -------------------------------- */

      gsap.from(".about-info-item", {
        y: 50,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".about-info",
          start: "top 80%",
          once: true,
        },
      });

      /* --------------------------------
         BOTTOM INFO
      -------------------------------- */

      gsap.from(".about-bottom", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".about-bottom",
          start: "top 85%",
          once: true,
        },
      });

      /* --------------------------------
         SUBTLE HERO PARALLAX
      -------------------------------- */

      gsap.to(".about-hero-title", {
        y: -70,
        ease: "none",

        scrollTrigger: {
          trigger: ".about-hero",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-[#0a0a0a] px-6 py-24 text-white sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">
            About / 01
          </p>

          <span className="font-mono text-xs text-white/30">2026</span>
        </div>

        {/* HERO */}
        <div className="about-hero mt-20">
          <p className="about-hero-label mb-8 text-sm uppercase tracking-[0.25em] text-white/40">
            Creative Developer
          </p>

          <div className="overflow-hidden">
            <h2 className="about-hero-title text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-[8rem]">
              I build digital
              <br />
              experiences that
              <br />
              <span className="text-white/30">feel alive.</span>
            </h2>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="about-description mt-24 grid gap-12 border-t border-white/10 pt-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/30">
              A little about me
            </p>
          </div>

          <div className="max-w-3xl">
            <p className="text-xl leading-relaxed text-white/70 sm:text-2xl">
              I&apos;m a developer focused on creating modern web experiences
              that combine thoughtful design, clean engineering, and meaningful
              interaction.
            </p>

            <p className="mt-8 text-base leading-7 text-white/40">
              From responsive interfaces to interactive digital experiences, I
              enjoy turning ideas into products that are simple to use, visually
              engaging, and built to last.
            </p>
          </div>
        </div>

        {/* INFO */}
        <div className="about-info mt-24 grid border-t border-white/10 sm:grid-cols-3">
          {/* ROLE */}
          <div className="about-info-item border-b border-white/10 py-8 sm:border-b-0 sm:border-r sm:pr-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">
              Role
            </p>

            <p className="mt-4 text-lg text-white/80">Full-Stack Developer</p>
          </div>

          {/* FOCUS */}
          <div className="about-info-item border-b border-white/10 py-8 sm:border-b-0 sm:border-r sm:px-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">
              Focus
            </p>

            <p className="mt-4 text-lg text-white/80">Web &amp; Interactive</p>
          </div>

          {/* STACK */}
          <div className="about-info-item py-8 sm:pl-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">
              Stack
            </p>

            <p className="mt-4 text-lg text-white/80">
              React · Next.js · TypeScript
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="about-bottom mt-24 flex flex-col justify-between gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">
            Based in the Philippines
          </p>

          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">
            Available for selected projects
          </p>
        </div>
      </div>
    </section>
  );
}
