import Image from "next/image";
import { site } from "@/data/site";
import { skills, focusAreas } from "@/data/skills";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="container-tight py-16">
      <div className="flex items-center gap-5">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-border bg-muted sm:h-24 sm:w-24">
          <Image
            src={site.headshot}
            alt={`${site.name} headshot`}
            fill
            sizes="6rem"
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            About
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {site.role} · {site.location}
          </p>
        </div>
      </div>

      <div className="prose prose-zinc mt-8 max-w-none text-[15px] leading-relaxed text-foreground dark:prose-invert">
        <p>
          I&apos;m an AI/ML Engineer who likes shipping. I&apos;ve spent the last
          year-and-a-bit moving research-grade ideas into production —
          fine-tuning Vision-Language Models at Bosch, building real-time RAG
          and anomaly-detection pipelines at Resolve Tech Solutions, and
          contributing to AI-ethics work at IIT Madras&apos; Centre for
          Responsible AI.
        </p>
        <p>
          My MSc was a joint Data Science & AI degree from the{" "}
          <strong>University of Birmingham</strong> and{" "}
          <strong>IIT Madras</strong>, where I wrote my dissertation on{" "}
          <em>Quantum-Enhanced Kernelised Contextual Bandits</em> — designing
          quantum bandit algorithms in RKHS and showing where quantum kernels
          beat classical ones on high-dimensional decision problems.
        </p>
        <p>
          I care about <strong>production AI</strong> (latency, reliability,
          cost, observability), <strong>responsible AI</strong>
          (explainability and ethics), and the parts of research that
          translate cleanly into things people use. I write occasionally on
          Medium and LinkedIn — see the{" "}
          <a href="/writing" className="link">writing</a> page.
        </p>
      </div>

      <section className="mt-12">
        <h2 className="text-lg font-semibold tracking-tight">Focus areas</h2>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {focusAreas.map((f) => (
            <span key={f} className="pill">
              {f}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-semibold tracking-tight">Stack</h2>
        <dl className="mt-4 space-y-4">
          {skills.map((g) => (
            <div key={g.label} className="grid gap-1.5 sm:grid-cols-[140px_1fr] sm:gap-4">
              <dt className="text-sm font-medium">{g.label}</dt>
              <dd className="flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <span key={s} className="pill">
                    {s}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-semibold tracking-tight">Education</h2>
        <ul className="mt-4 space-y-4 text-sm">
          <li>
            <div className="font-medium">
              MSc, Data Science and Artificial Intelligence (Joint Degree)
            </div>
            <div className="text-muted-foreground">
              University of Birmingham, UK & IIT Madras, India · 2023 — 2025 ·
              GPA: 7.12/10
            </div>
          </li>
          <li>
            <div className="font-medium">
              BTech, Computer Science and Engineering
            </div>
            <div className="text-muted-foreground">
              Shri Mata Vaishno Devi University · 2018 — 2022 · CGPA: 7.89/10
            </div>
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-semibold tracking-tight">
          Visa & relocation
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">{site.visa}</p>
      </section>
    </div>
  );
}
