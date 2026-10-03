import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";

import { projects, getProject } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

function ProjectVisual({ theme }: { theme: "dark" | "light" }) {
  if (theme === "light") {
    return (
      <div className="absolute inset-0 bg-[#e9e9e6] p-5 sm:p-8 lg:p-12">
        <div className="h-full overflow-hidden rounded-xl bg-[#f7f7f5] shadow-2xl">
          <div className="flex h-10 items-center justify-between border-b border-black/10 px-5">
            <div className="h-2 w-20 rounded-full bg-black/70" />

            <div className="hidden gap-5 sm:flex">
              <span className="h-1.5 w-10 rounded-full bg-black/10" />
              <span className="h-1.5 w-10 rounded-full bg-black/10" />
              <span className="h-1.5 w-10 rounded-full bg-black/10" />
            </div>
          </div>

          <div className="grid h-[calc(100%-40px)] grid-cols-2">
            <div className="flex flex-col justify-center p-6 sm:p-12">
              <div className="mb-4 h-2 w-16 rounded-full bg-black/15" />

              <div className="h-8 w-full max-w-[420px] rounded bg-black sm:h-12" />

              <div className="mt-2 h-8 w-3/4 max-w-[320px] rounded bg-black sm:h-12" />

              <div className="mt-7 h-9 w-28 rounded-full bg-black" />
            </div>

            <div className="flex items-center justify-center">
              <div className="h-32 w-32 rounded-full bg-black/[0.06] sm:h-52 sm:w-52 lg:h-64 lg:w-64" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 bg-[#111111] p-5 sm:p-8 lg:p-12">
      <div className="h-full overflow-hidden rounded-xl border border-white/10 bg-[#151515]">
        <div className="flex h-10 items-center justify-between border-b border-white/10 px-5">
          <div className="h-2 w-20 rounded-full bg-white/25" />

          <div className="hidden gap-5 sm:flex">
            <span className="h-1.5 w-10 rounded-full bg-white/10" />
            <span className="h-1.5 w-10 rounded-full bg-white/10" />
            <span className="h-1.5 w-10 rounded-full bg-white/10" />
          </div>
        </div>

        <div className="flex h-[calc(100%-40px)] flex-col justify-center p-6 sm:p-12">
          <div className="h-2 w-16 rounded-full bg-white/20" />

          <div className="mt-5 h-10 w-3/4 max-w-[500px] rounded bg-white/80 sm:h-16" />

          <div className="mt-3 h-10 w-1/2 max-w-[350px] rounded bg-white/15 sm:h-16" />

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            <div className="h-20 rounded-lg border border-white/10 bg-white/[0.035]" />
            <div className="h-20 rounded-lg border border-white/10 bg-white/[0.035]" />
            <div className="h-20 rounded-lg border border-white/10 bg-white/[0.035]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);

  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-transparent text-white">
      {/* BACK */}
      <div className="mx-auto max-w-7xl px-5 pt-32 sm:px-6 lg:px-8 lg:pt-36">
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/35 transition-colors hover:text-white"
        >
          <ArrowLeft
            size={14}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to Projects
        </Link>
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8 lg:pb-36 lg:pt-20">
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
            {project.category}
          </span>

          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/25">
            {project.year}
          </span>
        </div>

        <div className="pt-12 sm:pt-16 lg:pt-20">
          <h1 className="text-[19vw] font-semibold leading-[0.78] tracking-[-0.1em] sm:text-[15vw] lg:text-[11vw]">
            {project.title}
          </h1>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-end">
            <p className="max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
              {project.description}
            </p>

            <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-5 lg:border-t-0 lg:border-l lg:pl-8">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/20">
                  Role
                </span>

                <p className="mt-2 text-sm text-white/60">{project.role}</p>
              </div>

              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/20">
                  Year
                </span>

                <p className="mt-2 text-sm text-white/60">{project.timeline}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN VISUAL */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div
          className={`relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 sm:rounded-[1.5rem] ${
            project.theme === "light" ? "bg-[#e9e9e6]" : "bg-[#111111]"
          }`}
        >
          <ProjectVisual theme={project.theme} />
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="mx-auto grid max-w-7xl gap-16 px-5 py-24 sm:px-6 sm:py-32 lg:grid-cols-[0.35fr_1fr] lg:px-8 lg:py-40">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/25">
            01 / Overview
          </span>
        </div>

        <div>
          <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            Building a clear digital experience around the needs of the user.
          </h2>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
            {project.overview}
          </p>

          {/* TECHNOLOGIES */}
          <div className="mt-12 border-t border-white/10 pt-6">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/20">
              Technologies
            </span>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.15em] text-white/45"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-y border-white/10">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 py-24 sm:px-6 sm:py-32 lg:grid-cols-[0.35fr_1fr] lg:px-8 lg:py-36">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/25">
              02 / What I Built
            </span>
          </div>

          <div>
            <div className="divide-y divide-white/10 border-t border-white/10">
              {project.features.map((feature, index) => (
                <div
                  key={feature}
                  className="grid grid-cols-[45px_1fr] gap-5 py-6 sm:grid-cols-[60px_1fr] sm:py-7"
                >
                  <span className="font-mono text-[10px] text-white/20">
                    0{index + 1}
                  </span>

                  <p className="text-base leading-7 text-white/55 sm:text-lg">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTERFACE */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mb-10 flex items-end justify-between border-b border-white/10 pb-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/25">
            03 / Interface
          </span>

          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/20">
            Selected Views
          </span>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#111111]">
            <div className="h-full w-full bg-gradient-to-br from-white/[0.06] via-transparent to-transparent p-5 sm:p-8">
              <div className="h-full rounded-xl border border-white/10 bg-[#151515] p-5 sm:p-8">
                <div className="h-2 w-16 rounded-full bg-white/20" />

                <div className="mt-8 h-8 w-3/4 rounded bg-white/10 sm:h-12" />

                <div className="mt-3 h-8 w-1/2 rounded bg-white/[0.05] sm:h-12" />

                <div className="mt-10 grid grid-cols-2 gap-3">
                  <div className="h-20 rounded-lg border border-white/10 bg-white/[0.025]" />
                  <div className="h-20 rounded-lg border border-white/10 bg-white/[0.025]" />
                </div>
              </div>
            </div>
          </div>

          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#111111]">
            <div className="h-full w-full bg-gradient-to-br from-white/[0.04] via-transparent to-transparent p-5 sm:p-8">
              <div className="h-full rounded-xl border border-white/10 bg-[#151515] p-5 sm:p-8">
                <div className="grid grid-cols-[0.3fr_1fr] gap-4">
                  <div className="space-y-2 border-r border-white/10 pr-4">
                    <div className="h-2 w-10 rounded-full bg-white/20" />
                    <div className="h-1.5 w-full rounded-full bg-white/10" />
                    <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
                    <div className="h-1.5 w-3/4 rounded-full bg-white/10" />
                  </div>

                  <div>
                    <div className="h-2 w-20 rounded-full bg-white/20" />

                    <div className="mt-7 h-20 rounded-lg border border-white/10 bg-white/[0.025]" />

                    <div className="mt-3 grid grid-cols-2 gap-3">
                      <div className="h-14 rounded-lg border border-white/10 bg-white/[0.02]" />
                      <div className="h-14 rounded-lg border border-white/10 bg-white/[0.02]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXTERNAL LINK */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6 sm:pb-32 lg:px-8 lg:pb-40">
        <div className="border-t border-white/10 pt-8">
          <a href="#" className="group flex items-center justify-between">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/20">
                External Link
              </span>

              <p className="mt-2 text-2xl font-medium tracking-tight text-white/60 transition-colors duration-300 group-hover:text-white sm:text-3xl">
                View Live Project
              </p>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:bg-white group-hover:text-black">
              <ArrowUpRight
                size={20}
                strokeWidth={1.5}
                className="transition-transform duration-500 group-hover:rotate-45"
              />
            </div>
          </a>
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <Link href={`/projects/${nextProject.slug}`} className="group block">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/20">
              Next Project
            </span>

            <div className="mt-5 flex items-end justify-between gap-6">
              <h2 className="text-[14vw] font-semibold leading-[0.8] tracking-[-0.09em] transition-transform duration-500 group-hover:translate-x-1 sm:text-[10vw] lg:text-[7vw]">
                {nextProject.title}
              </h2>

              <ArrowUpRight
                size={28}
                strokeWidth={1.5}
                className="mb-2 shrink-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"
              />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
