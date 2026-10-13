import Link from "next/link";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Layers3,
  Monitor,
  Server,
  Sparkles,
  Wrench,
  Check,
} from "lucide-react";
import ScrollZoom from "@/components/ScrollZoom";

const expertise = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Creating responsive, intuitive interfaces that make websites enjoyable and easy to use.",
    icon: Monitor,
    technologies: ["React", "Next.js", "TypeScript"],
    className: "lg:col-span-2",
  },
  {
    number: "02",
    title: "Full-Stack Development",
    description:
      "Bringing the frontend and backend together to build complete, functional web applications.",
    icon: Layers3,
    technologies: ["Node.js", "PHP", "Laravel", "APIs"],
    className: "lg:col-span-2",
  },
  {
    number: "03",
    title: "WordPress Development",
    description:
      "Building and customizing content-driven websites that are practical to manage and maintain.",
    icon: Blocks,
    technologies: ["WordPress", "Gutenberg", "GenerateBlocks"],
    className: "lg:col-span-2",
  },
];

const technologies = [
  {
    title: "Frontend",
    icon: Monitor,
    items: [
      "React.js",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & CMS",
    icon: Server,
    items: [
      "Node.js",
      "PHP",
      "Laravel",
      "RedwoodJS",
      "Payload CMS",
      "WordPress",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "SQL Server"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "Docker", "Linux", "CI/CD", "REST APIs", "Testing & QA"],
  },
];

const values = [
  {
    number: "01",
    title: "Purpose over complexity",
    description:
      "I focus on solving the actual problem instead of adding complexity that a project does not need.",
  },
  {
    number: "02",
    title: "People first",
    description:
      "A website should be intuitive, accessible, and useful for the people who interact with it.",
  },
  {
    number: "03",
    title: "Always improving",
    description:
      "I keep learning, refining my approach, and looking for better ways to deliver quality work.",
  },
];

const card =
  "relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#252425]";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/45 sm:text-[11px]">
      {children}
    </p>
  );
}

export default function AboutPage() {
  return (
    <ScrollZoom>
      <main className="min-h-screen overflow-hidden bg-[#1f1e1f] text-[#e8e8e5]">
        <div className="mx-auto max-w-[1440px] px-5 py-7 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          {/* Navigation */}
          <Link
            href="/"
            className="group inline-flex min-h-11 items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Home
          </Link>

          {/* Personal introduction */}
          <section className="mt-12 grid grid-cols-1 gap-3 sm:mt-16 lg:mt-20 lg:grid-cols-5">
            <article
              data-scroll-zoom
              className={`${card} flex min-h-[470px] flex-col justify-between p-6 sm:min-h-[540px] sm:p-10 lg:col-span-3 lg:p-12`}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
                <div className="absolute -right-24 -top-24 size-80 rounded-full bg-white/[0.045] blur-[100px]" />
              </div>

              <div className="relative flex items-center justify-between gap-3">
                <Label>A little about me</Label>

                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/10 px-3 py-2 text-[10px] text-white/65 sm:text-xs">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  Open to opportunities
                </span>
              </div>

              <div className="relative mt-16 sm:mt-20">
                <p className="mb-4 text-sm text-white/45">
                  Web Developer · Philippines
                </p>

                <h1 className="text-[clamp(3.8rem,9vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
                  Hi, I&apos;m
                  <br />
                  <span className="text-white/35">Kenneth.</span>
                </h1>

                <p className="mt-8 max-w-xl text-lg leading-snug tracking-tight text-white/90 sm:text-2xl">
                  I build websites that bring ideas to life.
                </p>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                  I&apos;m a web developer who enjoys turning ideas into clean,
                  functional, and user-friendly digital experiences. From
                  responsive interfaces to the systems behind them, I focus on
                  building websites that look good, work well, and solve real
                  problems.
                </p>

                <Link
                  href="/#contact"
                  className="group mt-7 inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#e8e8e5] px-5 py-3 text-sm font-medium text-[#1f1e1f] transition-colors hover:bg-white"
                >
                  Let&apos;s talk
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>

              <div className="relative mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/10 pt-5 text-xs text-white/45 sm:mt-14">
                <span className="inline-flex items-center gap-2">
                  <Code2 size={14} />
                  Web Development
                </span>
                <span className="inline-flex items-center gap-2">
                  <Globe2 size={14} />
                  Digital Experiences
                </span>
              </div>
            </article>

            {/* Personal statement */}
            <article
              data-scroll-zoom
              className={`${card} flex min-h-[300px] flex-col justify-between p-6 sm:p-8 lg:col-span-2 lg:min-h-0`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <Label>What matters to me</Label>
                  <Sparkles size={18} className="text-white/45" />
                </div>

                <h2 className="mt-8 max-w-sm text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                  Good websites start with understanding people.
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/55">
                  I believe the best digital experiences balance thoughtful
                  design, reliable functionality, and real user needs.
                  Technology is the tool; making something useful is the goal.
                </p>
              </div>

              <div className="mt-10 border-t border-white/10 pt-5">
                <p className="text-xs text-white/40">My approach</p>
                <p className="mt-2 text-sm font-medium text-white/80">
                  Thoughtful. Practical. User-focused.
                </p>
              </div>
            </article>
          </section>

          {/* Areas of work */}
          <section className="mt-20 sm:mt-28">
            <div className="mb-7 flex items-end justify-between gap-4">
              <div>
                <Label>01 / What I do</Label>
                <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                  A little bit of everything.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-white/50">
                  Different parts of web development, working together to create
                  complete digital experiences.
                </p>
              </div>

              <span className="hidden text-xs text-white/30 sm:block">
                MY EXPERTISE
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3 lg:grid-cols-6">
              {expertise.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    data-scroll-zoom
                    key={item.number}
                    className={`${card} group p-6 transition-colors duration-300 hover:border-white/[0.17] sm:p-8 ${item.className}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04]">
                        <Icon size={20} className="text-white/75" />
                      </div>

                      <span className="font-mono text-xs text-white/30">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-8 text-xl font-medium tracking-tight sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-7 text-white/55">
                      {item.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-white/55"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center gap-2 text-xs text-white/35 transition-colors group-hover:text-white/65">
                      <span>Part of what I do</span>
                      <ArrowRight
                        size={13}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Work philosophy */}
          <section className="mt-20 sm:mt-28">
            <div className="mb-7">
              <Label>02 / My approach</Label>
              <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                How I like to work.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/50">
                Beyond writing code, I care about the thinking and decisions
                that make a project successful.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {values.map((value) => (
                <article
                  data-scroll-zoom
                  key={value.number}
                  className={`${card} p-6 sm:p-8`}
                >
                  <span className="font-mono text-xs text-white/30">
                    {value.number}
                  </span>

                  <h3 className="mt-8 text-xl font-medium tracking-tight">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Technology stack */}
          <section className="mt-20 sm:mt-28">
            <div className="mb-7">
              <Label>03 / Technologies</Label>
              <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                Tools I work with.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/50">
                The technologies I use to bring different ideas and projects to
                life.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {technologies.map((group) => {
                const Icon = group.icon;

                return (
                  <article
                    data-scroll-zoom
                    key={group.title}
                    className={`${card} p-5 sm:p-7`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04]">
                        <Icon size={18} className="text-white/65" />
                      </div>
                      <h3 className="text-base font-medium">{group.title}</h3>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-white/[0.08] px-3 py-2 text-xs text-white/65 transition-colors hover:border-white/20 hover:text-white"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="mt-20 sm:mt-28">
            <article data-scroll-zoom className={`${card} p-6 sm:p-10 lg:p-12`}>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <Label>04 / Let&apos;s connect</Label>

                  <h2 className="mt-5 max-w-2xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
                    Have an idea?
                    <br />
                    <span className="text-white/40">
                      Let&apos;s make it happen.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-lg text-sm leading-7 text-white/55">
                    Whether it&apos;s a project, an opportunity, or an idea
                    worth exploring, I&apos;d be happy to hear from you.
                  </p>
                </div>

                <Link
                  href="/#contact"
                  className="group inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-xl bg-[#e8e8e5] px-5 py-3 text-sm font-medium text-[#1f1e1f] transition-colors hover:bg-white"
                >
                  Get in touch
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </article>
          </section>

          {/* Footer */}
          <footer className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-white/75">Kenneth</p>
              <p className="mt-1 text-xs text-white/35">
                Web Developer · Building useful digital experiences
              </p>
            </div>

            <Link
              href="/"
              className="group inline-flex w-fit items-center gap-2 text-xs text-white/45 transition-colors hover:text-white"
            >
              Back to Home
              <ArrowLeft
                size={13}
                className="transition-transform group-hover:-translate-x-1"
              />
            </Link>
          </footer>
        </div>
      </main>
    </ScrollZoom>
  );
}
