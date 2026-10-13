"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShinyText from "@/components/ui/ShinyText";
import FlowingMenu from "@/components/ui/FlowingMenu";

gsap.registerPlugin(ScrollTrigger);

const demoItems = [
  {
    text: "Frontend Development",
    image: [
      "logos:react",
      "logos:nextjs-icon",
      "logos:vue",
      "logos:typescript-icon",
      "logos:javascript",
      "logos:tailwindcss-icon",
    ],
  },
  {
    text: "Backend Development",
    image: ["logos:nodejs-icon", "logos:php", "logos:laravel", "logos:express"],
  },
  {
    text: "Databases & APIs",
    image: [
      "logos:postgresql",
      "logos:mysql",
      "logos:microsoft-sql-server",
      "mdi:api",
    ],
  },
  {
    text: "Application Support",
    image: [
      "logos:wordpress-icon",
      "logos:payload",
      "logos:git-icon",
      "logos:docker-icon",
    ],
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

      const reveal = (
        target: string,
        options: {
          y?: number;
          x?: number;
          duration?: number;
          delay?: number;
        } = {},
      ) => {
        const element = section.querySelector(target);

        if (!element) return;

        gsap.from(element, {
          y: options.y ?? 18,
          x: options.x ?? 0,
          autoAlpha: 0,
          duration: options.duration ?? 0.65,
          delay: options.delay ?? 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        });
      };

      reveal(".about-header", { y: 16 });
      reveal(".about-intro", { y: 24, duration: 0.8 });
      reveal(".about-description", { y: 16, delay: 0.05 });
      reveal(".about-cta", { y: 12, delay: 0.08 });
      // reveal(".about-expertise", { x: 18, duration: 0.7 });
      reveal(".about-footer", { y: 10 });

      const expertiseItems = section.querySelectorAll(".about-expertise-item");

      if (expertiseItems.length) {
        gsap.from(expertiseItems, {
          y: 14,
          autoAlpha: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section.querySelector(".about-expertise"),
            start: "top 88%",
            once: true,
          },
        });
      }

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

        // Desktop-only FlowingMenu entrance animation
        const flowingMenu = section.querySelector(".about-flowing-menu");

        if (flowingMenu) {
          gsap.from(flowingMenu, {
            x: 40,
            autoAlpha: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: flowingMenu,
              start: "top 82%",
              once: true,
            },
          });
        }

        // Existing section scroll animation
        gsap.to(section, {
          scale: 0.985,
          transformOrigin: "center top",
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
      aria-labelledby="about-heading"
      className="relative z-10 overflow-hidden bg-[#e8e8e5] px-5 py-16 text-[#1f1e1f] sm:px-8 sm:py-20 md:px-10 md:py-24 lg:px-16 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1600px]">
        {/* Section heading */}
        <header className="about-header mb-14 flex items-end justify-between border-t border-[#1f1e1f]/15 pt-5 sm:mb-20">
          <div>
            <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.3em] text-[#1f1e1f]/50 sm:text-[10px]">
              01 — About
            </p>

            <h2
              id="about-heading"
              className="text-3xl font-medium tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-[4.5rem]"
            >
              A little about me
            </h2>
          </div>

          <span
            aria-hidden="true"
            className="hidden font-mono text-[10px] tracking-widest text-[#1f1e1f]/40 sm:block"
          >
            PROFILE / 01
          </span>
        </header>

        {/* Main content */}
        <div className="grid min-w-0 grid-cols-1 gap-10 sm:gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-24">
          {/* Introduction */}
          <div>
            <p className="about-intro max-w-5xl text-[2.35rem] font-light leading-[1.08] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-[3.7rem]">
              I build{" "}
              <ShinyText
                text="Web Applications "
                color="#b5b5b5"
                shineColor="#ffffff"
                speed={2}
                shineWidth={40}
                softness={0.8}
                trigger="loop"
                delay={0}
                angle={120}
                bands={1}
                glow={0}
                direction="left"
                easing="smooth"
                yoyo={false}
                followPointer={false}
                pauseOnHover={false}
                disabled={false}
              />
              &nbsp;that connect thoughtful interfaces with reliable backend
              systems.
            </p>

            <p className="about-description mt-7 max-w-2xl text-sm leading-7 text-[#1f1e1f]/65 sm:mt-9 sm:text-base sm:leading-8">
              I&apos;m a Full Stack Web Developer with 4+ years of experience
              building and supporting web applications. My work spans frontend
              development, backend functionality, database integration, and
              content management systems. I focus on practical implementation,
              maintainable code, and solutions that address real application
              requirements.
            </p>

            <div className="about-cta mt-8 sm:mt-10 ">
              <Link
                href="/about"
                className="group inline-flex min-h-12 items-center justify-center gap-4 border rounded-full border-[#1f1e1f] bg-[#1f1e1f]  px-5 py-3 text-sm font-medium text-[#e8e8e5] transition-colors duration-300 hover:bg-[#363536] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f1e1f] focus-visible:ring-offset-4 focus-visible:ring-offset-[#e8e8e5] sm:px-6"
              >
                View Full Profile
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          {/* Technical capabilities */}
          <div className="about-expertise lg:pt-2">
            <div className="border-t border-[#1f1e1f]/15 pt-5">
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#1f1e1f]/50 sm:text-[10px]">
                Technical Capabilities
              </p>
            </div>

            <div>
              <div className="about-flowing-menu relative h-[340px] w-full min-w-0 overflow-hidden sm:h-[380px] md:h-[420px] lg:h-[450px]">
                <FlowingMenu
                  items={demoItems}
                  speed={5}
                  textColor="#e8e9e5"
                  bgColor="#1e1f1f"
                  marqueeBgColor="#e8e8e5"
                  marqueeTextColor="#1e1f1f"
                  borderColor="#ffffff"
                />
              </div>
            </div>

            <p className="mt-6 max-w-md text-xs leading-6 text-[#1f1e1f]/55 sm:text-sm">
              From building features to maintaining existing systems, I approach
              development with a focus on functionality, reliability, and
              continuous improvement.
            </p>
          </div>
        </div>

        {/* Section footer */}
        <footer className="about-footer mt-16 border-t border-[#1f1e1f]/15 pt-5 sm:mt-24">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#1f1e1f]/40">
              Full Stack Web Developer
            </span>

            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#1f1e1f]/40">
              Frontend · Backend · Data
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
}
