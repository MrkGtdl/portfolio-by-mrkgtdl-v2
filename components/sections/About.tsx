"use client";

import { ArrowUpRight, Code2, Layers3, Sparkles } from "lucide-react";
import Lanyard from "@/components/ui/Lanyard";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-visible bg-transparent px-5 py-20 text-white sm:px-6 sm:py-24 md:px-12 lg:px-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[100px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 flex items-end justify-between border-b border-white/10 pb-5 sm:mb-16 md:mb-20 md:pb-6">
          <div>
            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-white/40 sm:mb-3 sm:text-xs sm:tracking-[0.3em]">
              01 — About Me
            </p>

            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Who I am
            </h2>
          </div>

          <span className="hidden text-sm text-white/30 sm:block">/ 2026</span>
        </div>

        {/* Main Content */}
        <div className="relative">
          {/* Main Content */}
          <div className="relative z-10 max-w-3xl">
            <p className="text-2xl font-light leading-[1.2] tracking-tight text-white/90 sm:text-3xl md:text-4xl lg:text-5xl">
              I build digital experiences that combine{" "}
              <span className="text-white/40">
                thoughtful design, clean code,
              </span>{" "}
              and meaningful functionality.
            </p>

            <div className="mt-9 max-w-2xl space-y-5 text-sm leading-6 text-white/50 sm:mt-12 sm:space-y-6 sm:text-base sm:leading-7">
              <p>
                I’m a full-stack web developer focused on building modern,
                responsive, and scalable web applications.
              </p>

              <p>
                I enjoy turning ideas into functional digital products—from
                polished interfaces and interactive experiences to reliable
                backend systems.
              </p>

              <p>
                My goal is simple: create websites and applications that look
                refined, feel intuitive, and work the way they should.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 sm:mt-10">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90 sm:px-6"
              >
                Let’s work together
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>

          {/* Lanyard */}
          <div className="pointer-events-none left-80 right-[-80px] absolute top-[-80px] z-30 hidden h-[700px] w-full lg:block">
            <Lanyard
              position={[0, 0, 15]}
              gravity={[0, -40, 0]}
              frontImage="/id2.jpeg"
              backImage="/icon.png"
              imageFit="cover"
              lanyardWidth={2}
            />
          </div>

          {/* Info Cards */}
          <div className="relative z-20 mt-16 max-w-xl space-y-4 lg:ml-auto lg:mt-[-120px]">
            <InfoCard
              icon={<Code2 size={20} />}
              number="01"
              title="Development"
              description="Building responsive and scalable web applications with modern technologies."
            />

            <InfoCard
              icon={<Layers3 size={20} />}
              number="02"
              title="Full-Stack"
              description="Working across frontend, backend, databases, and the systems that connect them."
            />

            <InfoCard
              icon={<Sparkles size={20} />}
              number="03"
              title="Experience"
              description="Creating interfaces that are clean, purposeful, and enjoyable to use."
            />

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <Stat value="4+" label="Years Learning" />
              <Stat value="10+" label="Projects Built" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  number,
  title,
  description,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.045] sm:p-6">
      <div className="mb-6 flex items-center justify-between sm:mb-8">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 sm:h-10 sm:w-10">
          {icon}
        </div>

        <span className="text-xs text-white/25">{number}</span>
      </div>

      <h3 className="mb-2 text-base font-medium sm:text-lg">{title}</h3>

      <p className="text-sm leading-6 text-white/40">{description}</p>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
      <div className="text-2xl font-medium tracking-tight sm:text-3xl">
        {value}
      </div>

      <div className="mt-2 text-[10px] uppercase tracking-[0.12em] text-white/30 sm:text-xs sm:tracking-[0.15em]">
        {label}
      </div>
    </div>
  );
}
