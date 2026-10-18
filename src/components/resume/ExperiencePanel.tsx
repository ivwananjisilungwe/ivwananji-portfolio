export function ExperiencePanel() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">
          Experience
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
          I&apos;m developing my software engineering capabilities through technical study and practical
          projects, with a focus on backend systems, AI, and applications that address real-world
          problems.
        </p>
      </div>
      <div className="border border-border bg-surface-elevated p-5">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
          Project-based work
        </p>
        <ul className="mt-3 space-y-3 text-sm text-foreground">
          <li className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-3">
            <span className="font-medium">NovaWallet — Full-Stack Digital Wallet</span>
            <span className="text-muted-foreground">Personal project · Flutter mobile app with Spring Boot REST API</span>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-3">
            <span className="font-medium">MedQueue — Healthcare Queue &amp; Appointment Management</span>
            <span className="text-muted-foreground">Collaborative team project · Android and Spring Boot application</span>
          </li>
        </ul>
      </div>
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
        Project-based learning in progress · no professional employment history claimed
      </p>
    </div>
  );
}
