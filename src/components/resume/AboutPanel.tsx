export function AboutPanel() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">About Me</h3>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
          I&apos;m a Computer Science student interested in building software that solves practical
          problems. My learning focuses on backend engineering, artificial intelligence, distributed
          systems, and mobile and web application development. I enjoy exploring how software
          architecture, data, and intelligent systems can be combined to build useful, maintainable
          applications.
        </p>
      </div>
      <ul className="grid gap-3 sm:grid-cols-2">
        {[
          "Computer Science foundation",
          "Backend & API design",
          "AI & data-driven systems",
          "Continuous technical learning",
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
