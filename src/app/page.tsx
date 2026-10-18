import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { HeroVisual } from "@/components/home/hero-visual";
import { RoleRotator } from "@/components/home/role-rotator";
import { Resume } from "@/components/sections/Resume";
import { ServicesSection } from "@/components/sections/ServicesSection";

const engineeringFocus = [
  {
    number: "01",
    title: "Backend systems",
    detail: "APIs, service boundaries, and the foundations behind reliable applications.",
  },
  {
    number: "02",
    title: "Data & persistence",
    detail: "Thoughtful data models and the systems that make information useful.",
  },
  {
    number: "03",
    title: "Applied problem-solving",
    detail: "Exploring software for practical challenges, including constrained and offline contexts.",
  },
] as const;

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
              className="inline-flex min-h-12 cursor-not-allowed items-center justify-center gap-3 bg-accent/70 px-5 text-sm font-medium text-background opacity-80"
            >
              Download CV <Download aria-hidden="true" className="size-4" />
            </button>
          </div>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "300ms" }}>
          <HeroVisual />
        </div>
      </section>

      <ServicesSection />

      <Resume />

      <section aria-labelledby="approach-title" className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div className="animate-fade-up">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-accent">
            Engineering approach
          </p>
          <h2 id="approach-title" className="max-w-md text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Start with the problem. Make the system make sense.
          </h2>
        </div>
        <ol className="divide-y divide-border border-y border-border">
          {engineeringFocus.map((item, index) => (
            <li
              key={item.number}
              className="grid animate-fade-up gap-2 py-5 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-4 sm:py-6"
              style={{ animationDelay: `${80 + index * 70}ms` }}
            >
              <span className="font-mono text-xs text-muted-foreground">{item.number}</span>
              <div>
                <h3 className="text-base font-medium text-foreground">{item.title}</h3>
                <p className="mt-1 max-w-xl text-sm leading-6 text-muted-foreground">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
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
