import { fetchRepos } from "@/lib/github";
import { ArrowUpRight, Star } from "lucide-react";

export async function GitHubRepos({ limit = 6 }: { limit?: number }) {
  const repos = (await fetchRepos()).slice(0, limit);
  if (repos.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        Live GitHub repositories will appear here once the page is rebuilt.
      </p>
    );
  }
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {repos.map((r) => (
        <a
          key={r.html_url}
          href={r.html_url}
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col rounded-xl border border-border bg-card p-4 transition-colors hover:bg-muted/40"
        >
          <div className="flex items-start justify-between gap-3">
            <span className="font-medium tracking-tight">{r.name}</span>
            <ArrowUpRight
              size={15}
              className="shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
          {r.description && (
            <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
              {r.description}
            </p>
          )}
          <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
            {r.language && <span>{r.language}</span>}
            {typeof r.stargazers_count === "number" && r.stargazers_count > 0 && (
              <span className="inline-flex items-center gap-1">
                <Star size={12} /> {r.stargazers_count}
              </span>
            )}
          </div>
        </a>
      ))}
    </div>
  );
}
