import { WritingCard } from "@/components/WritingCard";
import { fetchMediumPosts } from "@/lib/medium";
import { linkedinArticles } from "@/data/writing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description: "Articles on AI, Quantum ML, GenAI, and engineering practice.",
};

export const revalidate = 21600;

export default async function WritingPage() {
  const medium = await fetchMediumPosts();

  // Build a unified list with stable sort by ISO date desc.
  const all = [
    ...medium.map((p) => ({
      title: p.title,
      url: p.url,
      source: "Medium" as const,
      date: p.date,
      iso: p.iso,
      description: p.description,
      cover: p.cover,
      tags: p.categories?.slice(0, 4),
      featured: p.featured,
    })),
    ...linkedinArticles.map((a) => ({
      title: a.title,
      url: a.url,
      source: a.source,
      date: a.date,
      iso: a.iso,
      description: a.description,
      tags: a.tags,
      featured: false,
      cover: undefined,
    })),
  ].sort((a, b) => (a.iso < b.iso ? 1 : -1));

  return (
    <div className="container-wide py-16">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Writing
      </h1>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        Articles on Generative AI, Quantum Machine Learning, Computer Vision,
        and the engineering practice of shipping AI. Medium posts are
        auto-synced; LinkedIn articles are listed manually.
      </p>

      {all.length === 0 ? (
        <p className="mt-10 text-sm text-muted-foreground">
          No posts loaded. Medium feed may be temporarily unavailable.
        </p>
      ) : (
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {all.map((p) => (
            <WritingCard
              key={p.url}
              title={p.title}
              url={p.url}
              source={p.source}
              date={p.date}
              description={p.description}
              tags={p.tags}
              featured={p.featured}
              cover={p.cover}
            />
          ))}
        </div>
      )}
    </div>
  );
}
