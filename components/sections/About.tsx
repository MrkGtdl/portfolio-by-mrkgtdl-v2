"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lanyard from "@/components/ui/Lanyard";

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    number: "01",
    label: "ABOUT ME",
    bg: "bg-red-500",
    title: (
      <>
        I build digital <br />
        experiences that <br />
        <span>feel alive.</span>
      </>
    ),
    description:
      "I combine design, code, and interaction to create modern digital experiences that feel intentional from the first interaction to the last.",
  },
  {
    number: "05",
    label: "THE GOAL",
    bg: "bg-yellow-500",
    title: (
      <>
        Code into motion. <br />
        Ideas into <br />
        <span>systems.</span>
      </>
    ),
    description:
      "The goal is simple: create digital work that looks considered, feels natural, and leaves a lasting impression.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const allPanels = panelsRef.current.filter(Boolean);

      if (!allPanels.length) return;

      /*
       * ------------------------------------------------------
       * PANEL LAYERING
       *
       * Every panel pins at the top.
       *
       * pinSpacing: false keeps the panels layered
       * so the next panel overlaps the current panel.
       * ------------------------------------------------------
       */

      const triggers: ScrollTrigger[] = [];

      allPanels.forEach((panel) => {
        const trigger = ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
        });

        triggers.push(trigger);
      });

      /*
       * ------------------------------------------------------
       * PANEL ENTER ANIMATION
       *
       * No scale / zoom effect.
       * Only the content fades and moves into place.
       * ------------------------------------------------------
       */

      allPanels.forEach((panel, index) => {
        if (index === 0) return;

        const content = panel.querySelectorAll(".about-content");

        gsap.set(content, {
          y: 50,
          opacity: 0,
        });

        const contentTrigger = ScrollTrigger.create({
          trigger: panel,
          start: "top 90%",
          end: "top top",
          scrub: true,

          onUpdate: (self) => {
            const progress = self.progress;

            gsap.set(content, {
              y: 50 - progress * 50,
              opacity: progress,
            });
          },
        });

        triggers.push(contentTrigger);
      });

      /*
       * ------------------------------------------------------
       * CLEANUP
       * ------------------------------------------------------
       */

      return () => {
        triggers.forEach((trigger) => {
          trigger.kill();
        });
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full overflow-hidden text-black"
    >
      {/* ------------------------------------------------ */}
      {/* HEADER */}
      {/* ------------------------------------------------ */}

      <div className="fixed left-0 right-0 top-0 z-[200] px-6 py-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between border-b border-black/10 pb-5 mix-blend-difference">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white">
            About
          </p>

          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
            Selected / 2026
          </p>
        </div>
      </div>

      {/* ------------------------------------------------ */}
      {/* PANELS */}
      {/* ------------------------------------------------ */}

      <div>
        {panels.map((panel, index) => (
          <article
            key={panel.number}
            ref={(element) => {
              if (element) {
                panelsRef.current[index] = element;
              }
            }}
            className={`relative h-screen w-full overflow-hidden ${panel.bg}`}
          >
            {/* NUMBER */}

            <div className="absolute bottom-8 left-6 z-50 sm:left-10 lg:left-16">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/50">
                {panel.number} / {String(panels.length).padStart(2, "0")}
              </p>
            </div>

            {/* PANEL 01 */}

            {index === 0 ? (
              <div className="grid h-full grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
                {/* TEXT */}

                <div className="flex h-full items-center px-6 pb-20 pt-32 sm:px-10 lg:px-16">
                  <div className="max-w-5xl">
                    <p className="about-content mb-8 font-mono text-[10px] uppercase tracking-[0.3em] text-black/50">
                      {panel.label}
                    </p>

                    <h2 className="about-content text-5xl font-semibold leading-[0.9] tracking-[-0.065em] text-black sm:text-7xl lg:text-[7.3rem]">
                      {panel.title}
                    </h2>

                    <p className="about-content mt-10 max-w-xl text-base leading-7 text-black/50 sm:text-lg">
                      {panel.description}
                    </p>
                  </div>
                </div>

                {/* LANYARD */}

                <div className="relative hidden h-full overflow-hidden lg:block">
                  <div className="absolute inset-8 overflow-hidden">
                    <Lanyard
                      position={[0, 0, 30]}
                      gravity={[0, -40, 0]}
                      fov={20}
                      transparent
                      lanyardWidth={1}
                    />
                  </div>
                </div>
              </div>
            ) : (
              /* PANELS 02 - 05 */

              <div className="flex h-full items-center px-6 pb-20 pt-32 sm:px-10 lg:px-16">
                <div className="grid w-full gap-16 lg:grid-cols-[0.25fr_1fr]">
                  {/* SIDE */}

                  <div className="about-content hidden lg:block">
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/50">
                      About / {panel.number}
                    </p>

                    <div className="mt-8 h-px w-20 bg-black/20" />

                    <p className="mt-6 max-w-[180px] text-xs leading-5 text-black/40">
                      A closer look at how I approach digital work.
                    </p>
                  </div>

                  {/* MAIN */}

                  <div className="max-w-7xl">
                    <p className="about-content mb-8 font-mono text-[10px] uppercase tracking-[0.3em] text-black/50">
                      {panel.label}
                    </p>

                    <h2 className="about-content text-6xl font-semibold leading-[0.88] tracking-[-0.065em] text-black sm:text-8xl lg:text-[9rem]">
                      {panel.title}
                    </h2>

                    <div className="about-content mt-14 flex max-w-4xl flex-col gap-10 border-t border-black/15 pt-8 sm:flex-row sm:items-start sm:justify-between">
                      <p className="max-w-xl text-base leading-7 text-black/50 sm:text-lg">
                        {panel.description}
                      </p>

                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/40">
                        Scroll to explore
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* ------------------------------------------------ */}
      {/* SCROLL INDICATOR */}
      {/* ------------------------------------------------ */}

      <div className="fixed bottom-8 right-6 z-[200] mix-blend-difference sm:right-10 lg:right-16">
        <div className="flex items-center gap-4 text-white">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em]">
            Scroll
          </span>

          <div className="h-px w-16 bg-white/30 sm:w-24" />

          <span className="font-mono text-[12px]">↓</span>
        </div>
      </div>
    </section>
  );
}
