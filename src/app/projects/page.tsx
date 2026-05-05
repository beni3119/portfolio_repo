import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div className="container-wide py-16">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Projects
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Production AI systems, research, and personal builds.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
