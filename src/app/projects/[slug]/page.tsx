import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.blurb,
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <article className="container-tight py-16">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft size={14} /> All projects
      </Link>

      <header className="mt-6">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
          {project.context}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-3 text-base text-muted-foreground">{project.blurb}</p>

        {project.links && project.links.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-sm hover:bg-muted"
              >
                {l.label} <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        )}
      </header>

      <section className="mt-10">
        <h2 className="text-lg font-semibold tracking-tight">Problem</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
          {project.problem}
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold tracking-tight">Approach</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted-foreground">
          {project.approach.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold tracking-tight">Stack</h2>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span key={s} className="pill">
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold tracking-tight">Results</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted-foreground">
          {project.results.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
