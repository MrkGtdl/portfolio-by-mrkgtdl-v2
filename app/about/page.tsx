import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  GitBranch,
  Globe2,
  Layers3,
  Monitor,
  Server,
  Wrench,
} from "lucide-react";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "WordPress",
  "Gutenberg",
  "GenerateBlocks",
  "Git",
];

const strengths = [
  {
    number: "01",
    icon: Monitor,
    title: "Frontend Development",
    description:
      "Building responsive interfaces with React, Next.js, and modern CSS, with attention to layout, usability, and behavior across screen sizes.",
  },
  {
    number: "02",
    icon: Server,
    title: "Full-Stack Development",
    description:
      "Working across frontend interfaces, application logic, APIs, and data flow to build complete web applications.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "WordPress Development",
    description:
      "Building structured WordPress websites with Gutenberg, GenerateBlocks, and custom styling for flexible content and responsive layouts.",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Problem Solving",
    description:
      "Breaking requirements into smaller problems, choosing practical solutions, and keeping the implementation understandable as the project grows.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Understand",
    description:
      "Start with the goal, requirements, content, and constraints before deciding how the project should be built.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "Plan the page hierarchy, components, content, and technical approach before adding unnecessary complexity.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop the interface and functionality with reusable components, responsive layouts, and clear code.",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "Test different screen sizes, fix inconsistencies, improve interactions, and remove things that do not add value.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent text-white">
      <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 sm:py-32 md:px-10 lg:px-16">
        {/* BACK */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.25em] text-white/30 transition-colors hover:text-white"
        >
          <ArrowLeft
            size={14}
            strokeWidth={1.3}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back Home
        </Link>

        {/* HERO */}
        <header className="mt-20 border-t border-white/10 pt-6 sm:mt-28">
          <div className="flex items-end justify-between">
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 sm:text-[10px]">
              About Me
            </p>

            <span className="hidden font-mono text-[9px] uppercase tracking-[0.25em] text-white/20 sm:block">
              01 / Profile
            </span>
          </div>

          <h1 className="mt-10 max-w-[1300px] text-[16vw] font-semibold leading-[0.8] tracking-[-0.09em] sm:text-[12vw] md:text-[10vw] lg:text-[8.5vw]">
            ABOUT
            <br />
            <span className="text-white/25">ME.</span>
          </h1>

          <p className="mt-12 max-w-3xl text-xl font-light leading-[1.25] tracking-tight text-white/70 sm:text-2xl md:text-3xl">
            I&apos;m a web developer focused on building websites and web
            applications that are clear, responsive, and practical to use.
          </p>
        </header>

        {/* INTRODUCTION */}
        <section className="mt-28 grid gap-12 border-t border-white/10 pt-6 sm:mt-40 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20">
          <SectionLabel number="02" label="Introduction" />

          <div className="max-w-4xl space-y-6 text-base leading-8 text-white/45 sm:text-lg">
            <p>
              I work across both frontend development and WordPress, depending
              on what a project needs. I enjoy building interfaces, connecting
              the pieces behind them, and making sure the result works well
              across different screen sizes.
            </p>

            <p>
              My current work is mainly centered around React, Next.js,
              TypeScript, and WordPress. I also use tools such as Tailwind CSS,
              Gutenberg, GenerateBlocks, and Git as part of my development
              workflow.
            </p>

            <p>
              I prefer to understand the problem first and then build from
              there. That usually means keeping the structure simple, using
              reusable components where they make sense, and avoiding complexity
              that the project does not need.
            </p>
          </div>
        </section>

        {/* WHAT I DO */}
        <section className="mt-28 border-t border-white/10 pt-6 sm:mt-40">
          <SectionLabel number="03" label="What I Do" />

          <div className="mt-10 grid border-l border-t border-white/10 sm:grid-cols-2">
            {strengths.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="border-b border-r border-white/10 p-6 transition-colors duration-300 hover:bg-white/[0.025] sm:p-8 lg:min-h-[300px] lg:p-10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/60">
                      <Icon size={18} strokeWidth={1.3} aria-hidden="true" />
                    </div>

                    <span className="font-mono text-[9px] text-white/20">
                      {item.number}
                    </span>
                  </div>

                  <h2 className="mt-12 text-xl font-medium tracking-tight sm:text-2xl">
                    {item.title}
                  </h2>

                  <p className="mt-4 max-w-md text-sm leading-7 text-white/35 sm:text-base">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* APPROACH */}
        <section className="mt-28 grid gap-12 border-t border-white/10 pt-6 sm:mt-40 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20">
          <SectionLabel number="04" label="My Approach" />

          <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
            {workflow.map((item) => (
              <article
                key={item.number}
                className="border-b border-r border-white/10 p-6 sm:p-8"
              >
                <span className="font-mono text-[9px] text-white/20">
                  {item.number}
                </span>

                <h2 className="mt-8 text-lg font-medium">{item.title}</h2>

                <p className="mt-3 text-sm leading-6 text-white/35">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* TECHNOLOGY */}
        <section className="mt-28 grid gap-12 border-t border-white/10 pt-6 sm:mt-40 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20">
          <SectionLabel number="05" label="Technology" />

          <div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="border border-white/10 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.15em] text-white/45 transition-colors duration-300 hover:border-white/20 hover:text-white/70"
                >
                  {technology}
                </span>
              ))}
            </div>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-white/30">
              These are the technologies I currently work with across personal,
              portfolio, concept, and client-style projects. The stack can
              change depending on the requirements of a project.
            </p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="mt-28 grid gap-12 border-t border-white/10 pt-6 sm:mt-40 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20">
          <SectionLabel number="06" label="Experience" />

          <div className="space-y-0">
            <ExperienceItem
              year="2026"
              title="Web Development Projects"
              description="Building portfolio, concept, and client-style projects across React, Next.js, WordPress, and modern frontend development."
            />

            <ExperienceItem
              year="2025"
              title="Independent Development"
              description="Developing practical web projects while building experience across frontend development, full-stack concepts, and WordPress workflows."
            />
          </div>
        </section>

        {/* CURRENT FOCUS */}
        <section className="mt-28 grid gap-12 border-t border-white/10 pt-6 sm:mt-40 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20">
          <SectionLabel number="07" label="Current Focus" />

          <div className="max-w-3xl">
            <p className="text-2xl font-light leading-[1.2] tracking-tight text-white/75 sm:text-3xl">
              Getting better at building, structuring, and shipping web projects
              from idea to working product.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <FocusTag icon={Globe2} text="Modern Web" />
              <FocusTag icon={Code2} text="Clean Code" />
              <FocusTag icon={GitBranch} text="Better Workflows" />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-28 border-t border-white/10 pt-10 sm:mt-40 sm:pt-12">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/25 sm:text-[10px]">
                Next step
              </p>

              <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] sm:text-5xl md:text-6xl">
                Let&apos;s build
                <br />
                something useful.
              </h2>
            </div>

            <Link
              href="/#contact"
              className="group inline-flex w-fit items-center gap-3 border border-white/15 bg-white px-6 py-4 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Get in touch
              <ArrowUpRight
                size={17}
                strokeWidth={1.4}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </section>

        {/* FOOTER META */}
        <div className="mt-20 flex flex-col gap-3 border-t border-white/10 pt-5 sm:mt-28 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/20">
            Web Developer
          </span>

          <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/20">
            © 2026
          </span>
        </div>
      </div>
    </main>
  );
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/25 sm:text-[10px]">
        {number} — {label}
      </p>
    </div>
  );
}

function ExperienceItem({
  year,
  title,
  description,
}: {
  year: string;
  title: string;
  description: string;
}) {
  return (
    <article className="grid gap-4 border-b border-white/10 py-7 sm:grid-cols-[100px_1fr] sm:gap-8 sm:py-8">
      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
        {year}
      </span>

      <div>
        <h2 className="text-lg font-medium">{title}</h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/35 sm:text-base">
          {description}
        </p>
      </div>
    </article>
  );
}

function FocusTag({ icon: Icon, text }: { icon: typeof Globe2; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 border border-white/10 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.15em] text-white/40">
      <Icon size={13} strokeWidth={1.3} aria-hidden="true" />
      {text}
    </span>
  );
}
