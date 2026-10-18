export function EducationPanel() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">
          Education
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
          I&apos;m studying Computer Science and developing a foundation in programming, software
          engineering, algorithms, data, and system design.
        </p>
      </div>
      <div className="border border-border bg-surface-elevated p-5">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Field of study</p>
        <p className="mt-2 text-base font-medium text-foreground">Computer Science</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Institution and study dates are omitted because they have not been verified for publication.
        </p>
      </div>
    </div>
  );
}
