import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <div className="container-tight py-16">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Experience
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Roles, internships, and research positions.
      </p>
      <div className="mt-10">
        <ExperienceTimeline />
      </div>
    </div>
  );
}
