import { experience } from "@/data/experience";

export function ExperienceTimeline({ compact = false }: { compact?: boolean }) {
  return (
    <ol className="relative space-y-8 border-l border-border pl-6">
      {experience.map((job) => (
        <li key={`${job.company}-${job.start}`} className="relative">
          <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-foreground" />
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 className="font-semibold tracking-tight">{job.role}</h3>
              <p className="text-sm text-muted-foreground">
                {job.companyUrl ? (
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
                {" · "}
                {job.location}
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              {job.start} — {job.end}
            </p>
          </div>
          {!compact && (
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
          {!compact && job.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {job.tags.map((t) => (
                <span key={t} className="pill">
                  {t}
                </span>
              ))}
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
