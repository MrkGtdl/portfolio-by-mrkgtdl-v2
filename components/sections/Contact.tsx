"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

const SOCIAL_LINKS = {
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourusername",
};

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      inquiry: String(formData.get("inquiry") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to send message.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative z-10 isolate min-h-screen bg-[#e8e8e5] px-5 py-24 text-[#1f1e1f] md:px-8 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 max-w-5xl md:mb-28">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-[#666663]">
            Contact
          </p>

          <h2 className="text-[clamp(3.5rem,10vw,9rem)] font-medium leading-[0.82] tracking-[-0.07em]">
            LET&apos;S WORK
            <br />
            TOGETHER.
          </h2>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-[#555553] md:text-lg">
            I&apos;m open to junior and entry-level web development
            opportunities, freelance projects, and meaningful collaborations. If
            you&apos;re hiring or have a project in mind, I&apos;d be happy to
            hear from you.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[#777774]">
                Direct Contact
              </p>

              <a
                href="mailto:mrkgtdl6@gmail.com"
                className="group inline-flex items-center gap-2 text-lg font-medium tracking-tight transition-opacity hover:opacity-60 md:text-xl"
              >
                mrkgtdl6@gmail.com
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            <div className="mt-12 lg:mt-0">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[#777774]">
                Elsewhere
              </p>

              <div className="flex flex-col items-start gap-3">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-60"
                >
                  GitHub
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-60"
                >
                  LinkedIn
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="relative z-10 w-full">
            <div className="border-t border-[#b8b8b4]">
              {/* Name */}
              <div className="border-b border-[#b8b8b4] py-6">
                <label
                  htmlFor="name"
                  className="mb-3 block text-xs font-medium uppercase tracking-[0.16em] text-[#777774]"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Your name"
                  className="w-full bg-transparent text-lg outline-none placeholder:text-[#a1a19d]"
                />
              </div>

              {/* Email */}
              <div className="border-b border-[#b8b8b4] py-6">
                <label
                  htmlFor="email"
                  className="mb-3 block text-xs font-medium uppercase tracking-[0.16em] text-[#777774]"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  className="w-full bg-transparent text-lg outline-none placeholder:text-[#a1a19d]"
                />
              </div>

              {/* Company */}
              <div className="border-b border-[#b8b8b4] py-6">
                <label
                  htmlFor="company"
                  className="mb-3 block text-xs font-medium uppercase tracking-[0.16em] text-[#777774]"
                >
                  Company / Organization
                  <span className="ml-2 normal-case tracking-normal text-[#999995]">
                    Optional
                  </span>
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Company or organization"
                  className="w-full bg-transparent text-lg outline-none placeholder:text-[#a1a19d]"
                />
              </div>

              {/* Inquiry */}
              <div className="border-b border-[#b8b8b4] py-6">
                <label
                  htmlFor="inquiry"
                  className="mb-3 block text-xs font-medium uppercase tracking-[0.16em] text-[#777774]"
                >
                  Inquiry Type
                </label>

                <select
                  id="inquiry"
                  name="inquiry"
                  required
                  defaultValue=""
                  className="w-full cursor-pointer appearance-none bg-transparent text-lg outline-none"
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="Job Opportunity">Job Opportunity</option>

                  <option value="Freelance Project">Freelance Project</option>

                  <option value="Collaboration">Collaboration</option>

                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div className="border-b border-[#b8b8b4] py-6">
                <label
                  htmlFor="message"
                  className="mb-3 block text-xs font-medium uppercase tracking-[0.16em] text-[#777774]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me a little about the opportunity, project, or inquiry."
                  className="w-full resize-none bg-transparent text-lg leading-relaxed outline-none placeholder:text-[#a1a19d]"
                />
              </div>
            </div>

            {/* Status */}
            <div className="mt-6 min-h-6 text-sm">
              {status === "success" && (
                <p className="flex items-center gap-2 text-[#333331]">
                  <Check size={16} strokeWidth={2} />
                  Your message has been sent successfully.
                </p>
              )}

              {status === "error" && (
                <p className="text-[#8a2f2f]">
                  Something went wrong. Please try again or contact me directly.
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="group mt-6 inline-flex items-center gap-3 border border-[#1f1e1f] bg-[#1f1e1f] px-6 py-4 text-sm font-medium uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-transparent hover:text-[#1f1e1f] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : status === "success" ? (
                <>
                  <Check size={16} />
                  Sent
                </>
              ) : (
                <>
                  Send Inquiry
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </>
              )}
            </button>

            <p className="mt-5 max-w-md text-xs leading-relaxed text-[#777774]">
              I typically respond to inquiries within a reasonable timeframe.
              Please include enough detail so I can understand how I can help.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
