import type { Metadata } from "next";
import { site } from "@/data/site";
import { Github, Linkedin, Mail, BookOpen, MapPin } from "lucide-react";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  const items = [
    { icon: Mail, label: "Email", value: site.email, href: site.links.email },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/hardikbeniwal31",
      href: site.links.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: `github.com/${site.links.githubUser}`,
      href: site.links.github,
    },
    {
      icon: BookOpen,
      label: "Medium",
      value: `medium.com/@${site.links.mediumHandle}`,
      href: site.links.medium,
    },
  ];

  return (
    <div className="container-tight py-16">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Contact
      </h1>
      <p className="mt-2 max-w-prose text-sm text-muted-foreground">
        Open to AI/ML Engineer roles in India and on UK/EU sponsorship-friendly
        companies. Happy to chat about Generative AI, Vision-Language Models,
        Quantum ML, or anything in between.
      </p>

      <div className="mt-10 grid gap-3">
        {items.map((it) => (
          <a
            key={it.label}
            href={it.href}
            target={it.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-colors hover:bg-muted/40"
          >
            <span className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-muted">
                <it.icon size={16} />
              </span>
              <span>
                <span className="block text-sm font-medium">{it.label}</span>
                <span className="block text-sm text-muted-foreground">
                  {it.value}
                </span>
              </span>
            </span>
            <span className="text-xs text-muted-foreground transition-colors group-hover:text-foreground">
              Open →
            </span>
          </a>
        ))}
      </div>

      <div className="mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin size={14} /> {site.location}
      </div>
    </div>
  );
}
