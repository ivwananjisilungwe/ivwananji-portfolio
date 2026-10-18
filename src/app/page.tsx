import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { HeroVisual } from "@/components/home/hero-visual";
import { RoleRotator } from "@/components/home/role-rotator";
import { HeroSocials } from "@/components/home/hero-socials";

export default function Home() {
  return (
    <div className="site-container">
      <section
        aria-labelledby="hero-title"
        className="grid min-h-[66svh] grid-cols-1 items-center gap-8 border-b border-border py-14 sm:py-16 md:grid-cols-[minmax(0,1.15fr)_minmax(17rem,0.85fr)] md:gap-8 lg:gap-12 lg:py-20"
      >
        <div className="max-w-3xl">
          <h1
            id="hero-title"
            className="animate-fade-up text-[clamp(2.75rem,8.2vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.06em] text-foreground"
            style={{ animationDelay: "60ms" }}
          >
            Ivwananji
            <br />
            Silungwe
          </h1>
          <div className="animate-fade-up" style={{ animationDelay: "120ms" }}>
            <RoleRotator />
          </div>
          <p
            className="mt-4 max-w-xl animate-fade-up text-base leading-7 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-8"
            style={{ animationDelay: "180ms" }}
          >
            I’m interested in backend systems, applied machine learning, and
            building useful digital products with thoughtful engineering.
          </p>
          <div
            className="mt-8 flex animate-fade-up flex-col gap-3 min-[420px]:flex-row min-[420px]:items-center sm:mt-9 sm:gap-5"
            style={{ animationDelay: "240ms" }}
          >
            <button
              type="button"
              disabled
              title="CV PDF is not available yet"
              aria-label="Download CV (CV PDF not available yet)"
              className="inline-flex min-h-12 cursor-not-allowed items-center justify-center gap-3 bg-accent px-5 text-sm font-medium text-background disabled:opacity-100"
            >
              Download CV <Download aria-hidden="true" className="size-4" />
            </button>
            <HeroSocials />
          </div>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "300ms" }}>
          <HeroVisual />
        </div>
      </section>

      <section
        aria-labelledby="approach-title"
        className="grid gap-5 py-14 sm:py-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end lg:gap-16"
      >
        <div className="animate-fade-up">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-accent">
            Engineering approach
          </p>
          <h2
            id="approach-title"
            className="max-w-md text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
          >
            Start with the problem. Make the system make sense.
          </h2>
        </div>
        <p className="max-w-2xl animate-fade-up text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          I focus on understanding the problem, keeping data and service
          boundaries clear, and checking that a solution meets its intended need.
        </p>
      </section>

      <section aria-labelledby="closing-title" className="mb-16 border-t border-border py-10 sm:mb-20 sm:py-12">
        <div className="flex animate-fade-up flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Continue exploring</p>
            <h2 id="closing-title" className="mt-3 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              Follow the work as it takes shape.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 border border-border px-5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
