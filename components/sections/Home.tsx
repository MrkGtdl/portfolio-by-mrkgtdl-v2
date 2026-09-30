"use client";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <Section id="home" className="flex min-h-screen items-center">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-neutral-500">
          Creative Developer
        </p>

        <h1 className="text-5xl font-semibold tracking-[-0.05em] sm:text-7xl lg:text-8xl">
          Building digital
          <br />
          experiences.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-neutral-500 sm:text-lg">
          Modern, interactive, and thoughtful digital experiences built with
          clean technology.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#projects">View Projects</Button>

          <Button href="#about" variant="secondary">
            About Me
          </Button>
        </div>
      </div>
    </Section>
  );
}
