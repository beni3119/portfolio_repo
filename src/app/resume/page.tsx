import type { Metadata } from "next";
import { site } from "@/data/site";
import { Download, Globe2, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download Hardik Beniwal's resume — Indian and UK/EU versions.",
};

export default function ResumePage() {
  const cards = [
    {
      title: "Indian Market",
      file: site.resume.india,
      icon: MapPin,
      desc: "DD-MM dates, INR-context phrasing, IIT Madras listed first. Ideal for Naukri / LinkedIn Easy Apply / Workday in India.",
    },
    {
      title: "UK / EU / Sponsored",
      file: site.resume.uk,
      icon: Globe2,
      desc: "UK English, visa & relocation line, University of Birmingham listed first. Tailored for Skilled Worker sponsor companies.",
    },
  ];

  return (
    <div className="container-tight py-16">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Resume
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Two one-page versions, market-specific and ATS-optimised.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {cards.map((c) => (
          <div
            key={c.title}
            className="flex flex-col rounded-xl border border-border bg-card p-6"
          >
            <span className="grid h-10 w-10 place-items-center rounded-md bg-muted">
              <c.icon size={18} />
            </span>
            <h2 className="mt-4 font-semibold tracking-tight">{c.title}</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">{c.desc}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={c.file}
                download
                className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-3 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                <Download size={14} /> Download PDF
              </a>
              <a
                href={c.file}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-sm hover:bg-muted"
              >
                Open in browser
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-border bg-muted/30 p-5 text-sm text-muted-foreground">
        Both versions are single-column, ATS-safe, and verified to render as
        exactly one page in Microsoft Word.
      </div>
    </div>
  );
}
