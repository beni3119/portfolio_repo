import { ArrowUpRight, BookOpen, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  url: string;
  source: "Medium" | "LinkedIn" | "Talk" | "Paper";
  date: string;
  description?: string;
  tags?: string[];
  featured?: boolean;
  cover?: string;
};

export function WritingCard({
  title,
  url,
  source,
  date,
  description,
  tags,
  featured,
  cover,
}: Props) {
  const Icon = source === "LinkedIn" ? Linkedin : BookOpen;
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:bg-muted/40",
        featured && "ring-1 ring-accent/30",
      )}
    >
      {cover && (
        <div className="aspect-[16/9] overflow-hidden rounded-md border border-border">
          {/* Use plain img to avoid runtime image-domain config for arbitrary CDN images */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cover}
            alt=""
            className="h-full w-full object-cover transition-transform group-hover:scale-[1.02]"
          />
        </div>
      )}
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Icon size={13} />
        <span>{source}</span>
        <span>·</span>
        <span>{date}</span>
        {featured && (
          <>
            <span>·</span>
            <span className="font-medium text-accent">Featured</span>
          </>
        )}
      </div>
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold tracking-tight leading-snug">{title}</h3>
        <ArrowUpRight
          size={16}
          className="mt-1 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span key={t} className="pill">
              {t}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}
