import { XMLParser } from "fast-xml-parser";
import { site } from "@/data/site";
import { featuredMediumUrls } from "@/data/writing";

export type MediumPost = {
  title: string;
  url: string;
  date: string;
  iso: string;
  description: string;
  cover?: string;
  categories: string[];
  featured: boolean;
};

function stripHtml(html: string): string {
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function firstImage(html: string): string | undefined {
  const match = html.match(/<img[^>]+src="([^"]+)"/i);
  return match?.[1];
}

function normaliseUrl(url: string): string {
  // Strip Medium tracking params and trailing slashes for stable comparison.
  try {
    const u = new URL(url);
    u.search = "";
    return u.toString().replace(/\/$/, "");
  } catch {
    return url.replace(/\?.*$/, "").replace(/\/$/, "");
  }
}

export async function fetchMediumPosts(): Promise<MediumPost[]> {
  const feedUrl = `https://medium.com/feed/@${site.links.mediumHandle}`;
  try {
    const res = await fetch(feedUrl, {
      headers: { "User-Agent": "portfolio-static-build" },
      next: { revalidate: 60 * 60 * 6 },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "",
      cdataPropName: "__cdata",
      parseTagValue: false,
    });
    const parsed = parser.parse(xml);
    const itemsRaw = parsed?.rss?.channel?.item;
    const items = Array.isArray(itemsRaw) ? itemsRaw : itemsRaw ? [itemsRaw] : [];

    const featuredSet = new Set(featuredMediumUrls.map(normaliseUrl));

    const unwrap = (v: unknown): string => {
      if (v == null) return "";
      if (typeof v === "string") return v;
      if (typeof v === "object" && "__cdata" in (v as object)) {
        return (v as { __cdata: string }).__cdata;
      }
      return "";
    };

    const posts: MediumPost[] = items.map((item: Record<string, unknown>) => {
      const get = (key: string) => unwrap(item[key]);

      const description = get("description") || get("content:encoded");
      const html = get("content:encoded") || description;
      const url = get("link");
      const isoDate = get("pubDate")
        ? new Date(get("pubDate")).toISOString()
        : "";

      const categoriesRaw = item["category"];
      const categoriesArr: unknown[] = Array.isArray(categoriesRaw)
        ? (categoriesRaw as unknown[])
        : categoriesRaw
        ? [categoriesRaw]
        : [];
      const categories: string[] = categoriesArr
        .map(unwrap)
        .filter((c): c is string => Boolean(c));

      return {
        title: stripHtml(get("title")),
        url,
        date: get("pubDate")
          ? new Date(get("pubDate")).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })
          : "",
        iso: isoDate,
        description: stripHtml(description).slice(0, 240) + (description ? "\u2026" : ""),
        cover: firstImage(html),
        categories,
        featured: featuredSet.has(normaliseUrl(url)),
      };
    });

    posts.sort((a, b) => (a.iso < b.iso ? 1 : -1));
    return posts;
  } catch {
    return [];
  }
}
