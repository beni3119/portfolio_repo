import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { GitHubRepos } from "@/components/GitHubRepos";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      <Hero />

      <section className="container-wide py-16">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Featured projects</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Production AI work and research highlights.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm font-medium link"
          >
            All projects <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section className="container-wide py-16">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              From research labs to production AI.
            </p>
          </div>
          <Link
            href="/experience"
            className="inline-flex items-center gap-1 text-sm font-medium link"
          >
            Full timeline <ArrowRight size={14} />
          </Link>
        </div>
        <ExperienceTimeline compact />
      </section>

      <section className="container-wide py-16">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">From GitHub</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Latest active repositories — auto-updated on each rebuild.
            </p>
          </div>
        </div>
        <GitHubRepos limit={6} />
      </section>
    </>
  );
}
