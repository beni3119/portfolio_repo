import Link from "next/link";
import { site } from "@/data/site";
import { Github, Linkedin, Mail, BookOpen } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border">
      <div className="container-wide flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <div>
          <div className="font-semibold">{site.name}</div>
          <p className="mt-1 text-sm text-muted-foreground">
            {site.role} · {site.location}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
            aria-label="GitHub"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href={site.links.medium}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
            aria-label="Medium"
          >
            <BookOpen size={16} /> Medium
          </a>
          <a
            href={site.links.email}
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
            aria-label="Email"
          >
            <Mail size={16} /> Email
          </a>
        </div>
      </div>
      <div className="container-wide pb-8 text-xs text-muted-foreground">
        <div className="flex flex-col items-start justify-between gap-2 sm:flex-row">
          <span>
            &copy; {new Date().getFullYear()} {site.name}. Built with Next.js & Tailwind.
          </span>
          <Link href="/" className="hover:text-foreground">
            Back to top &uarr;
          </Link>
        </div>
      </div>
    </footer>
  );
}
