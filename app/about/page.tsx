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
  Database,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import ScrollZoom from "@/components/ScrollZoom";

const technologyGroups = [
  {
    title: "Frontend",
    description:
      "Building responsive interfaces and interactive web experiences.",
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
    description:
      "Developing application functionality and configurable content systems.",
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
    title: "Database",
    description: "Working with relational databases and application data.",
    items: ["PostgreSQL", "MySQL", "SQL Server"],
  },
  {
    title: "Tools & Practices",
    description: "Supporting collaborative development and reliable delivery.",
    items: ["Git", "Docker", "Linux", "CI/CD", "REST APIs", "Testing & QA"],
  },
];

const strengths = [
  {
    number: "01",
    icon: Monitor,
    title: "Frontend Development",
    description:
      "Developing responsive interfaces and interactive web applications using React, Vue, TypeScript, JavaScript, and modern styling tools, with attention to usability and maintainable components.",
  },
  {
    number: "02",
    icon: Server,
    title: "Backend Development",
    description:
      "Working with PHP, Laravel, Node.js, and RedwoodJS to implement application functionality, support business requirements, and connect frontend experiences with backend services.",
  },
  {
    number: "03",
    icon: Database,
    title: "Database & API Integration",
    description:
      "Working with PostgreSQL, MySQL, and SQL Server, including application data handling, relational data, and API integration.",
  },
  {
    number: "04",
    icon: Layers3,
    title: "CMS Development",
    description:
      "Customizing content management workflows with Payload CMS and building or customizing websites with WordPress and its block-based editing tools.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "System Reliability",
    description:
      "Contributing to bug fixing, system optimization, security remediation, testing, and deployment workflows to help keep applications reliable.",
  },
  {
    number: "06",
    icon: Wrench,
    title: "Problem Solving",
    description:
      "Breaking requirements into manageable tasks, investigating issues, and implementing practical solutions that support application needs and code maintainability.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Understand",
    description:
      "Review the requirements, expected behavior, constraints, and purpose of the feature before implementation.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Identify the relevant components, application logic, data requirements, and technical approach.",
  },
  {
    number: "03",
    title: "Implement",
    description:
      "Build or improve functionality, integrate the necessary services, and manage changes with version control.",
  },
  {
    number: "04",
    title: "Validate",
    description:
      "Test expected behavior, investigate issues, and refine the implementation for consistency and reliability.",
  },
];

const engineeringPractices = [
  "Responsive UI development",
  "Reusable component design",
  "Application logic",
  "REST API integration",
  "Database integration",
  "CMS customization",
  "Bug fixing and debugging",
  "Testing and quality assurance",
  "System optimization",
  "Version control with Git",
  "Deployment and CI/CD workflows",
  "Security remediation support",
];

export default function AboutPage() {
  return (
    <ScrollZoom>
      <main className="min-h-screen overflow-hidden bg-[#1f1e1f] text-[#e8e8e5]">
        <div className="mx-auto w-full max-w-[1600px] px-5 py-12 sm:px-8 sm:py-16 md:px-10 lg:px-16">
          {/* Navigation */}
          <Link
            href="/"
            className="group inline-flex min-h-11 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <ArrowLeft
              size={15}
              strokeWidth={1.4}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Home
          </Link>

          {/* Hero */}
          <header className="mt-20 border-t border-white/15 pt-6 sm:mt-28 sm:pt-8">
            <div className="flex items-end justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">
                About Me
              </p>

              <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-white/35 sm:block">
                Profile / 01
              </span>
            </div>

            <h1 className="mt-10 text-[19vw] font-semibold leading-[0.82] tracking-[-0.075em] sm:text-[13vw] md:text-[10vw] lg:text-[8.5rem]">
              ABOUT
              <br />
              <span className="text-white/30">ME.</span>
            </h1>

            <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-16">
              <p className="max-w-4xl text-2xl font-light leading-[1.2] tracking-[-0.04em] text-white/85 sm:text-3xl md:text-4xl lg:text-5xl">
                I build web applications from user interface to backend
                functionality.
              </p>

              <p className="max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                I&apos;m a Full Stack Web Developer with professional experience
                in web application development, CMS customization, database
                integration, and application support. I focus on building
                practical solutions that meet requirements and support reliable,
                maintainable applications.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 border-l border-t border-white/15 sm:grid-cols-3">
              <div className="border-b border-r border-white/15 p-4 sm:p-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/40">
                  Focus
                </p>
                <p className="mt-3 text-sm text-white/80">
                  Full Stack Development
                </p>
              </div>

              <div className="border-b border-r border-white/15 p-4 sm:p-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/40">
                  Core Areas
                </p>
                <p className="mt-3 text-sm text-white/80">
                  Frontend / Backend / Data
                </p>
              </div>

              <div className="col-span-2 border-b border-r border-white/15 p-4 sm:col-span-1 sm:p-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/40">
                  Approach
                </p>
                <p className="mt-3 text-sm text-white/80">
                  Practical & Maintainable
                </p>
              </div>
            </div>
          </header>

          {/* Introduction */}
          <section
            data-scroll-zoom
            aria-labelledby="introduction-heading"
            className="mt-24 grid gap-8 border-t border-white/15 pt-6 sm:mt-36 sm:gap-12 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20"
          >
            <SectionLabel
              number="01"
              label="Introduction"
              id="introduction-heading"
            />

            <div className="max-w-4xl space-y-6 text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              <p>
                My work spans different parts of web application development,
                from building user interfaces to implementing features,
                integrating data, and supporting existing systems. I work with
                technologies such as React, Vue, TypeScript, JavaScript, PHP,
                Laravel, and RedwoodJS, depending on the requirements of a
                project.
              </p>

              <p>
                I also work with relational databases and content management
                systems. My experience includes PostgreSQL, MySQL, SQL Server,
                and Payload CMS, along with website development and
                customization using WordPress.
              </p>

              <p>
                Beyond implementation, I value debugging, testing, code
                maintainability, version control, and reliable delivery. I aim
                to understand the purpose behind a feature and contribute
                solutions that fit the existing application rather than
                introduce unnecessary complexity.
              </p>
            </div>
          </section>

          {/* Development areas */}
          <section
            data-scroll-zoom
            aria-labelledby="development-heading"
            className="mt-24 border-t border-white/15 pt-6 sm:mt-36"
          >
            <SectionLabel
              number="02"
              label="Technical Capabilities"
              id="development-heading"
            />

            <div className="mt-10 grid grid-cols-1 border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
              {strengths.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className="group border-b border-r border-white/15 p-6 transition-colors duration-300 hover:bg-white/[0.035] sm:p-8 lg:min-h-[280px] lg:p-9"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex size-10 items-center justify-center border border-white/15 text-white/70 transition-colors duration-300 group-hover:border-white/35 group-hover:text-white">
                        <Icon size={18} strokeWidth={1.4} aria-hidden="true" />
                      </div>

                      <span className="font-mono text-[10px] text-white/40">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-8 text-xl font-medium tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/60">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Development approach */}
          <section
            data-scroll-zoom
            aria-labelledby="approach-heading"
            className="mt-24 grid gap-8 border-t border-white/15 pt-6 sm:mt-36 sm:gap-12 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20"
          >
            <SectionLabel
              number="03"
              label="My Approach"
              id="approach-heading"
            />

            <div className="grid grid-cols-1 border-l border-t border-white/15 sm:grid-cols-2">
              {workflow.map((item) => (
                <article
                  key={item.number}
                  className="border-b border-r border-white/15 p-6 sm:p-8"
                >
                  <span className="font-mono text-[10px] text-white/40">
                    {item.number}
                  </span>

                  <h3 className="mt-7 text-lg font-medium">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-white/60">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Engineering practices */}
          <section
            data-scroll-zoom
            aria-labelledby="practices-heading"
            className="mt-24 grid gap-8 border-t border-white/15 pt-6 sm:mt-36 sm:gap-12 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20"
          >
            <SectionLabel
              number="04"
              label="Engineering Practices"
              id="practices-heading"
            />

            <div>
              <p className="max-w-3xl text-xl font-light leading-relaxed text-white/80 sm:text-2xl">
                Beyond writing code, I focus on how applications behave, how
                changes are maintained, and how features are delivered.
              </p>

              <ul className="mt-8 grid gap-0 border-t border-white/15 sm:grid-cols-2">
                {engineeringPractices.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 border-b border-white/15 py-4 pr-4 text-sm text-white/65 sm:odd:border-r sm:odd:pr-6 sm:even:pl-6"
                  >
                    <span className="font-mono text-[10px] text-white/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Technology stack */}
          <section
            data-scroll-zoom
            aria-labelledby="technology-heading"
            className="mt-24 border-t border-white/15 pt-6 sm:mt-36"
          >
            <SectionLabel
              number="05"
              label="Technology Stack"
              id="technology-heading"
            />

            <div className="mt-10 grid grid-cols-1 border-l border-t border-white/15 sm:grid-cols-2">
              {technologyGroups.map((group, index) => (
                <article
                  key={group.title}
                  className="border-b border-r border-white/15 p-6 sm:p-8 lg:p-9"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-medium tracking-tight">
                        {group.title}
                      </h3>
                      <p className="mt-3 max-w-sm text-sm leading-6 text-white/50">
                        {group.description}
                      </p>
                    </div>

                    <span className="font-mono text-[10px] text-white/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((technology) => (
                      <li
                        key={technology}
                        className="border border-white/15 px-3 py-2 font-mono text-[10px] tracking-wide text-white/65 transition-colors duration-300 hover:border-white/35 hover:text-white"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <p className="mt-5 max-w-3xl text-xs leading-6 text-white/40">
              This stack reflects technologies listed in my development
              background. The depth of experience varies by technology and
              project requirements.
            </p>
          </section>

          {/* Current direction */}
          <section
            data-scroll-zoom
            aria-labelledby="direction-heading"
            className="mt-24 grid gap-8 border-t border-white/15 pt-6 sm:mt-36 sm:gap-12 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20"
          >
            <SectionLabel
              number="06"
              label="Development Philosophy"
              id="direction-heading"
            />

            <div className="max-w-3xl">
              <h2 className="text-2xl font-light leading-[1.2] tracking-tight text-white/85 sm:text-3xl md:text-4xl">
                Build with purpose. Solve the problem. Improve the
                implementation.
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                I aim to create web applications that balance functionality,
                usability, and maintainability. Whether developing a new feature
                or improving an existing system, I value clear requirements,
                thoughtful implementation, and continuous refinement.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                <FocusTag icon={Globe2} text="Web Applications" />
                <FocusTag icon={Code2} text="Clean Code" />
                <FocusTag icon={GitBranch} text="Version Control" />
              </div>
            </div>
          </section>

          {/* Contact CTA */}

          <section
            data-scroll-zoom
            className="mt-24 border-t border-white/15 pt-10 sm:mt-36 sm:pt-12"
          >
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">
                  Let&apos;s connect
                </p>

                <h2 className="mt-5 text-4xl font-medium leading-[1.05] tracking-[-0.055em] sm:text-5xl md:text-6xl">
                  Have a project?
                  <br />
                  Let&apos;s talk.
                </h2>
              </div>

              <Link
                href="/#contact"
                className="group inline-flex min-h-12 w-fit items-center gap-4 border border-white/20 bg-white px-6 py-4 text-sm font-medium text-[#1f1e1f] transition-colors duration-300 hover:bg-[#e8e8e5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#1f1e1f]"
              >
                Get in Touch
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.4}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-20 flex flex-col gap-3 border-t border-white/15 pt-5 sm:mt-28 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/45">
              Full Stack Web Developer
            </span>

            <Link
              href="/"
              className="group inline-flex w-fit items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/45 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Back to Home
              <ArrowUpRight
                size={12}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </footer>
        </div>
      </main>
    </ScrollZoom>
  );
}

function SectionLabel({
  number,
  label,
  id,
}: {
  number: string;
  label: string;
  id: string;
}) {
  return (
    <div>
      <h2
        id={id}
        className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50"
      >
        {number} — {label}
      </h2>
    </div>
  );
}

function FocusTag({ icon: Icon, text }: { icon: typeof Globe2; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 border border-white/15 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-white/60 sm:px-4">
      <Icon size={13} strokeWidth={1.4} aria-hidden="true" />
      {text}
    </span>
  );
}
