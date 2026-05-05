import { site } from "@/data/site";

export type Repo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  topics?: string[];
  homepage?: string | null;
  archived?: boolean;
  fork?: boolean;
};

export async function fetchRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${site.links.githubUser}/repos?per_page=50&sort=pushed`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
        next: { revalidate: 60 * 60 * 12 },
      },
    );
    if (!res.ok) return [];
    const repos = (await res.json()) as Repo[];
    return repos
      .filter((r) => !r.fork && !r.archived)
      .sort(
        (a, b) =>
          b.stargazers_count - a.stargazers_count ||
          new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime(),
      );
  } catch {
    return [];
  }
}
