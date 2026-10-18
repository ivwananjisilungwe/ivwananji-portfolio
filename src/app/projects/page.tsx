import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  return (
    <section className="site-container flex flex-col py-8 sm:py-12">
      <p className="mb-5 font-mono text-sm text-accent">Projects</p>
      <h1 className="max-w-3xl animate-fade-up text-4xl font-semibold tracking-tight sm:tracking-tighter text-foreground sm:text-6xl">
        Projects
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
        Case studies will be published here as projects are documented and
        verified. Nothing is fabricated to fill the page.
      </p>
      <div className="mt-10 animate-fade-up border border-border bg-surface p-6 sm:p-8">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-blue">
          Status
        </p>
        <p className="mt-3 text-base text-foreground">
          No verified project case studies are available yet.
        </p>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          When a project is ready, it will appear with verified scope, technical
          decisions, repository links, and implementation status.
        </p>
      </div>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-11 animate-fade-up items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
        style={{ animationDelay: "160ms" }}
      >
        Back home <ArrowRight aria-hidden="true" className="size-4" />
      </Link>
    </section>
  );
}
