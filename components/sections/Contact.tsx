"use client";

import { FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

const CONTACT_EMAIL = "your@email.com";

const SOCIAL_LINKS = {
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourusername",
};

export default function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      return;
    }

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-transparent px-5 py-24 text-white sm:px-8 sm:py-32 md:px-10 md:py-40 lg:px-16"
    >
      {/* BACKGROUND */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px]">
        {/* TOP LABEL */}
        <div className="mb-16 flex items-center justify-between border-t border-white/10 pt-5 sm:mb-20">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 sm:text-[10px]">
            Contact
          </span>

          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/20 sm:text-[10px]">
            06 / 06
          </span>
        </div>

        {/* HEADING */}
        <div className="mb-20 max-w-[1200px] sm:mb-28">
          <p className="mb-6 font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 sm:text-[10px]">
            Open to opportunities
          </p>

          <h2
            id="contact-heading"
            className="text-[17vw] font-semibold leading-[0.78] tracking-[-0.1em] sm:text-[13vw] md:text-[11vw] lg:text-[9vw]"
          >
            LET&apos;S
            <br />
            WORK
            <br />
            <span className="text-white/25">TOGETHER.</span>
          </h2>
        </div>

        {/* CONTENT */}
        <div className="grid gap-16 border-t border-white/10 pt-10 lg:grid-cols-[0.7fr_1fr] lg:gap-24">
          {/* LEFT */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="max-w-md text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
                Open to web development opportunities, freelance projects, and
                collaborations. If you have an idea or project in mind, feel
                free to get in touch.
              </p>
            </div>

            {/* CONTACT INFO */}
            <div className="mt-12 space-y-7 lg:mt-0">
              {/* EMAIL */}
              <div>
                <p className="mb-2 font-mono text-[8px] uppercase tracking-[0.25em] text-white/20">
                  Email
                </p>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white sm:text-base"
                >
                  {CONTACT_EMAIL}

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.3}
                    aria-hidden="true"
                  />
                </a>
              </div>

              {/* SOCIAL */}
              <div>
                <p className="mb-2 font-mono text-[8px] uppercase tracking-[0.25em] text-white/20">
                  Social
                </p>

                <div className="flex gap-5">
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white"
                  >
                    GitHub
                  </a>

                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-8"
            aria-label="Contact form"
          >
            <div className="grid gap-8 sm:grid-cols-2">
              {/* NAME */}
              <div className="group border-b border-white/10 pb-3 transition-colors focus-within:border-white/40">
                <label
                  htmlFor="contact-name"
                  className="mb-3 block font-mono text-[8px] uppercase tracking-[0.25em] text-white/25"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="John Doe"
                  required
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/15 sm:text-base"
                />
              </div>

              {/* EMAIL */}
              <div className="group border-b border-white/10 pb-3 transition-colors focus-within:border-white/40">
                <label
                  htmlFor="contact-email"
                  className="mb-3 block font-mono text-[8px] uppercase tracking-[0.25em] text-white/25"
                >
                  Your Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="john@example.com"
                  required
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/15 sm:text-base"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div className="group border-b border-white/10 pb-3 transition-colors focus-within:border-white/40">
              <label
                htmlFor="contact-message"
                className="mb-3 block font-mono text-[8px] uppercase tracking-[0.25em] text-white/25"
              >
                Tell me about your project
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Tell me a little about your idea..."
                required
                className="w-full resize-none bg-transparent text-sm text-white outline-none placeholder:text-white/15 sm:text-base"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="group flex w-full items-center justify-between border border-white/10 px-5 py-5 transition-all duration-500 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:px-7"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.25em]">
                Send Message
              </span>

              <ArrowUpRight
                size={18}
                strokeWidth={1.3}
                aria-hidden="true"
                className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </form>
        </div>

        {/* FOOTER LINE */}
        <div className="mt-24 flex flex-col gap-3 border-t border-white/10 pt-5 sm:mt-32 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/20">
            Available for selected projects &amp; opportunities
          </span>

          <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/20">
            © 2026
          </span>
        </div>
      </div>
    </section>
  );
}
