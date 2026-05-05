import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:bg-muted/40"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold tracking-tight">{project.title}</h3>
        <ArrowUpRight
          size={16}
          className="mt-0.5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
      <p className="mt-1 text-xs text-muted-foreground">{project.context}</p>
      <p className="mt-3 text-sm text-muted-foreground">{project.blurb}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 4).map((t) => (
          <span key={t} className="pill">
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}
