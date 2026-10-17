import { ThemeToggle } from "@/components/theme/theme-toggle";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-8 sm:px-10 sm:py-12">
      <header className="flex items-center justify-between border-b border-border pb-6">
        <a className="font-mono text-sm font-medium tracking-tight text-accent hover:text-accent-soft" href="#main">
          IVWANANJI<span className="text-muted"> / PORTFOLIO</span>
        </a>
        <ThemeToggle />
      </header>
      <section id="main" className="flex flex-1 flex-col justify-center py-20">
        <p className="mb-5 font-mono text-sm text-accent">SOFTWARE ENGINEER</p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:tracking-tighter text-foreground sm:text-6xl">
          Thoughtful software, built with purpose.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
          A portfolio in progress. The foundation is ready for work, writing, and the
          details behind each project.
        </p>
      </section>
      <footer className="border-t border-border pt-5 font-mono text-xs text-muted">
        <span>DESIGN SYSTEM / 01</span>
      </footer>
    </main>
  );
}
