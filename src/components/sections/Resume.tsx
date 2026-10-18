import { ResumeTabs } from "@/components/resume/ResumeTabs";

export function Resume() {
  return (
    <section id="resume" aria-labelledby="resume-title" className="animate-fade-up border-t border-border py-16 sm:py-20">
      <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-accent">Resume</p>
            <h2 id="resume-title" className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Background &amp; capabilities.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            A concise overview of my studies, skills, and current development direction.
          </p>
      </div>
      <ResumeTabs />
    </section>
  );
}
