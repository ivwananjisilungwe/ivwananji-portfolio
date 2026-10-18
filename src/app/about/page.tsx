import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About — IVWANANJI",
  description:
    "About Ivwananji: a Computer Science student building software engineering skills through practical projects.",
};

const technicalAreas = [
  {
    title: "Backend engineering & REST APIs",
    detail: "Endpoint design, service boundaries, and the contracts behind reliable applications.",
  },
  {
    title: "Java & Spring Boot",
    detail: "Server-side application development with a focus on structure and maintainability.",
  },
  {
    title: "Databases & data modelling",
    detail: "Structuring data so it stays queryable, consistent, and understandable.",
  },
  {
    title: "Distributed & event-driven systems",
    detail: "Kafka, MQTT, and the patterns behind asynchronous communication.",
  },
  {
    title: "Python, data analysis & machine learning",
    detail: "Exploring data-driven approaches and how models fit into software.",
  },
  {
    title: "Flutter & mobile development",
    detail: "Cross-platform application work in Dart.",
  },
  {
    title: "Web development & TypeScript",
    detail: "Interfaces with React and Next.js, with attention to type safety.",
  },
  {
    title: "Linux, Git, Docker & engineering practice",
    detail: "The tooling and habits behind reproducible, maintainable work.",
  },
] as const;

const engineeringApproach = [
  {
    number: "01",
    title: "Understand the problem",
    detail: "Constraints, users, and what “done” actually means before writing code.",
  },
  {
    number: "02",
    title: "Design the system",
    detail: "Data, boundaries, and the simplest shape that fits the problem.",
  },
  {
    number: "03",
    title: "Write maintainable code",
    detail: "Clear naming, small units, and honest tests that describe real behavior.",
  },
  {
    number: "04",
    title: "Verify behavior",
    detail: "Run it, check edge cases, and read the diff before calling it finished.",
  },
] as const;

export default function AboutPage() {
  return (
    <section className="site-container py-16 sm:py-20">
      <p className="mb-5 animate-fade-up font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent">
        About
      </p>
      <h1 className="animate-fade-up text-[clamp(2.5rem,7vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.04em] text-foreground">
        A student engineer,
        <br className="hidden sm:block" />
        <span className="text-accent"> learning by building.</span>
      </h1>
      <p
        className="mt-7 max-w-2xl animate-fade-up text-base leading-7 text-muted-foreground sm:mt-9 sm:text-lg sm:leading-8"
        style={{ animationDelay: "80ms" }}
      >
        I&apos;m Ivwananji, a Computer Science student developing software
        engineering skills through coursework and hands-on projects. I care about
        understanding how systems fit together — from data models and APIs to the
        interfaces people actually use — and about writing code that stays
        readable after the first version.
      </p>

      <section
        aria-labelledby="who-title"
        className="mt-16 border-t border-border pt-12 sm:mt-20 sm:pt-16"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
          <div className="animate-fade-up">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-accent">
              Who I am
            </p>
            <h2
              id="who-title"
              className="max-w-md text-2xl font-medium tracking-tight text-foreground sm:text-3xl"
            >
              Foundations first, depth over time.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-7 text-muted-foreground">
            <p>
              My background is academic and project-based rather than professional.
              I study computer science and build things to test what I&apos;m
              learning — backend services, data models, and small applications
              that solve concrete problems. I&apos;m comfortable exploring new
              stacks, but I don&apos;t claim production experience with every
              technology I touch.
            </p>
            <p>
              I&apos;m most interested in the parts of software that are invisible
              when they work well: clear data boundaries, predictable APIs, and
              code that the next reader can follow. That&apos;s the direction I
              want to grow in, and this portfolio is a record of that progress.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="work-title"
        className="mt-16 border-t border-border pt-12 sm:mt-20 sm:pt-16"
      >
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-accent">
              What I work on
            </p>
            <h2
              id="work-title"
              className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl"
            >
              Technical areas and project-based learning.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            These reflect current interests and study, not independently verified
            proficiency levels.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {technicalAreas.map((area, index) => (
            <li
              key={area.title}
              className="animate-fade-up border border-border bg-surface p-5 transition-colors hover:border-accent"
              style={{ animationDelay: `${120 + index * 60}ms` }}
            >
              <h3 className="text-sm font-medium text-foreground">{area.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {area.detail}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="approach-title"
        className="mt-16 border-t border-border pt-12 sm:mt-20 sm:pt-16"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-accent">
              How I approach engineering
            </p>
            <h2
              id="approach-title"
              className="max-w-md text-2xl font-medium tracking-tight text-foreground sm:text-3xl"
            >
              Understand, design, build, verify.
            </h2>
          </div>
          <ol className="divide-y divide-border border-y border-border">
            {engineeringApproach.map((item, index) => (
              <li
                key={item.number}
                className="grid animate-fade-up gap-2 py-5 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-4 sm:py-6"
                style={{ animationDelay: `${80 + index * 70}ms` }}
              >
                <span className="font-mono text-xs text-muted-foreground">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-base font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 max-w-xl text-sm leading-6 text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="learning-title"
        className="mt-16 border-t border-border pt-12 sm:mt-20 sm:pt-16"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
          <div className="animate-fade-up">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-accent">
              What I&apos;m learning
            </p>
            <h2
              id="learning-title"
              className="max-w-md text-2xl font-medium tracking-tight text-foreground sm:text-3xl"
            >
              Honest about the edges.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-7 text-muted-foreground">
            <p>
              I&apos;m actively deepening backend service design, data modelling,
              and event-driven communication. Machine learning and data analysis
              are areas I&apos;m exploring with curiosity rather than expertise.
              Mobile and web work happens alongside, mostly to ship end-to-end
              features and understand the full stack.
            </p>
            <p>
              Where a technology appears on this site, it means I&apos;m
              studying or using it in a project — not that I&apos;m an expert.
              I&apos;d rather state the smaller, true claim.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="next-title"
        className="mt-16 border-t border-border pt-12 sm:mt-20 sm:pt-16"
      >
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-accent">
          Continue exploring
        </p>
        <h2
          id="next-title"
          className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl"
        >
          Where to go from here.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Link
            href="/resume"
            className="group animate-fade-up border border-border bg-surface p-5 transition-colors hover:border-accent"
            style={{ animationDelay: "0ms" }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-blue">
              Resume
            </p>
            <p className="mt-2 text-sm font-medium text-foreground">
              Background, skills, and study.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors group-hover:text-accent">
              View resume <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
          <Link
            href="/projects"
            className="group animate-fade-up border border-border bg-surface p-5 transition-colors hover:border-accent"
            style={{ animationDelay: "80ms" }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-blue">
              Projects
            </p>
            <p className="mt-2 text-sm font-medium text-foreground">
              Case studies as they&apos;re verified.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors group-hover:text-accent">
              Visit projects <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
          <Link
            href="/contact"
            className="group animate-fade-up border border-border bg-surface p-5 transition-colors hover:border-accent"
            style={{ animationDelay: "160ms" }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-blue">
              Contact
            </p>
            <p className="mt-2 text-sm font-medium text-foreground">
              Get in touch about work or collaboration.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors group-hover:text-accent">
              Contact <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </section>
    </section>
  );
}
