export function AboutPanel() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">About Me</h3>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
          I&apos;m a Computer Science student focused on building practical software. My interests include
          backend engineering, API design, databases, distributed systems, and mobile and web application
          development.
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
          My project work includes NovaWallet, a digital wallet with a Spring Boot API and a Flutter
          application in progress, and MedQueue, a collaborative healthcare queue and appointment management
          platform.
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
          I continue to develop my skills through hands-on implementation, testing, debugging, and exploring
          how software architecture can solve practical problems.
        </p>
      </div>
      <ul className="grid gap-3 sm:grid-cols-2">
        {[
          "Backend & API Development",
          "Data & Persistence",
          "Mobile & Web Applications",
          "Systems Design & Problem-Solving",
        ].map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-foreground">
            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
