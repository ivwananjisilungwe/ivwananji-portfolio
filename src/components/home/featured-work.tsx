"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { featuredProjects } from "@/data/featured-projects";
import { getNextProjectIndex } from "@/lib/project-carousel";

export function FeaturedWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const project = featuredProjects[activeIndex];

  function navigate(nextDirection: "forward" | "backward") {
    setDirection(nextDirection);
    setActiveIndex((current) =>
      getNextProjectIndex(current, featuredProjects.length, nextDirection),
    );
  }

  if (!project) return null;

  return (
    <section aria-label="Featured projects" className="mt-10">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-14">
        <div
          key={`${project.name}-copy`}
          className={`project-slide-${direction} min-w-0`}
          aria-live="polite"
        >
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-6xl font-bold tabular-nums text-accent/30 sm:text-7xl">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-mono text-sm text-accent-blue">
                {project.subtitle}
              </p>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {project.name}
              </h2>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-6 space-y-3">
            {project.status.map((status) => (
              <p key={status.label} className="flex flex-wrap items-center gap-2 text-sm">
                <span className="font-medium text-foreground">{status.label}:</span>
                <span className="text-muted-foreground">{status.value}</span>
              </p>
            ))}
          </div>

          <ul aria-label="Technologies" className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="border border-border bg-surface px-3 py-1 text-xs text-muted-foreground"
              >
                {technology}
              </li>
            ))}
          </ul>

          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent-blue transition-colors hover:text-accent focus-visible:outline-offset-4"
          >
            <ExternalLink aria-hidden="true" className="size-4" />
            View {project.name} GitHub repository
          </a>
        </div>

        <div className="min-w-0">
          <div
            key={`${project.name}-image`}
            className={`project-slide-${direction} relative aspect-[16/10] overflow-hidden border border-border bg-surface`}
          >
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              priority={activeIndex === 0}
              sizes="(max-width: 1023px) 100vw, 60vw"
              className="object-contain"
            />
            <span className="absolute bottom-3 right-3 border border-border bg-background/90 px-2.5 py-1 font-mono text-[0.65rem] text-muted-foreground">
              Concept preview
            </span>
          </div>
          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="font-mono text-sm tabular-nums text-muted-foreground" aria-live="polite">
              {String(activeIndex + 1).padStart(2, "0")} / {String(featuredProjects.length).padStart(2, "0")}
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => navigate("backward")}
                aria-label="Previous project"
                className="inline-flex size-11 items-center justify-center border border-border bg-surface text-foreground transition-colors hover:border-accent-blue hover:text-accent-blue focus-visible:outline-offset-4"
              >
                <ArrowLeft aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => navigate("forward")}
                aria-label="Next project"
                className="inline-flex size-11 items-center justify-center border border-border bg-surface text-foreground transition-colors hover:border-accent-blue hover:text-accent-blue focus-visible:outline-offset-4"
              >
                <ArrowRight aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
