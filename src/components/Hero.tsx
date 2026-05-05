import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { focusAreas } from "@/data/skills";
import { ArrowUpRight, Download, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="container-wide py-20 sm:py-24">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {site.openToWork ? "Open to work · UK / EU / India" : "Currently engaged"}
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Hi, I&apos;m Hardik.
              <br />
              <span className="text-muted-foreground">{site.tagline}.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              {site.longTagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                View projects <ArrowUpRight size={15} />
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"
              >
                <Download size={15} /> Resume
              </Link>
              <a
                href={site.links.email}
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"
              >
                Email me
              </a>
            </div>

            <div className="mt-10 flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin size={13} /> {site.location}
            </div>
          </div>

          <div className="row-start-1 mx-auto md:row-auto">
            <div className="relative">
              <span
                aria-hidden
                className="absolute -inset-1 rounded-full bg-gradient-to-tr from-accent/30 via-transparent to-transparent blur-xl"
              />
              <div className="relative h-44 w-44 overflow-hidden rounded-full border border-border bg-muted shadow-sm sm:h-56 sm:w-56 md:h-60 md:w-60">
                <Image
                  src={site.headshot}
                  alt={`${site.name} headshot`}
                  fill
                  priority
                  sizes="(max-width: 768px) 11rem, 15rem"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-1.5">
          {focusAreas.map((f) => (
            <span key={f} className="pill">
              {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
