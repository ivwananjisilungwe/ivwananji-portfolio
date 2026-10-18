import Link from "next/link";
import { ArrowUpRight, FolderCode } from "lucide-react";
import { featuredProjects } from "@/data/featured-projects";

export function FeaturedWork() {
  if (featuredProjects.length === 0) {
    return (
      <div className="animate-fade-up grid gap-6 border-t border-border pt-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
        <div className="flex gap-4">
          <span
            aria-hidden="true"
            className="mt-1 inline-flex size-9 shrink-0 items-center justify-center border border-border bg-surface-elevated text-accent-blue"
          >
            <FolderCode className="size-4" />
          </span>
          <div>
            <p className="text-lg font-medium text-foreground">Case studies are being prepared.</p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              Projects will appear here with verified scope, technical choices, and
              implementation status—not just a name or an unverified claim.
            </p>
          </div>
        </div>
        <Link
          href="/projects"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-blue focus-visible:outline-offset-4"
        >
          Projects index <ArrowUpRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    );
  }

  return (
    <ol className="grid gap-0 border-t border-border sm:grid-cols-2 sm:gap-x-10">
      {featuredProjects.map((project, index) => (
        <li key={project.name} className="border-b border-border py-6 sm:py-8">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-xl font-medium tracking-tight text-foreground">{project.name}</h3>
            <span className="shrink-0 font-mono text-xs text-muted-foreground">{project.status}</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.purpose}</p>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            {project.technologies.join(" · ")}
          </p>
          <span className="sr-only">Featured project {index + 1}</span>
        </li>
      ))}
    </ol>
  );
}
