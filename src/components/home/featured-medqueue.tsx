import Link from "next/link";

import {
  ArrowRight,
  Database,
  ExternalLink,
  RefreshCw,
  Server,
  Smartphone,
  Users,
} from "lucide-react";

const medQueueRepositoryUrl = "https://github.com/MedQueue-Team/MedQueue";

const engineeringHighlights = [
  {
    icon: Users,
    title: "Role-based workflows",
    detail:
      "Patient, doctor, receptionist, and administrator experiences for healthcare operations.",
  },
  {
    icon: Smartphone,
    title: "Mobile + backend architecture",
    detail:
      "An Android client communicating with a Spring Boot REST API and PostgreSQL.",
  },
  {
    icon: RefreshCw,
    title: "Local data & synchronization",
    detail:
      "Room persistence with connectivity and sync components for offline access.",
  },
] as const;

const technologyStack = [
  "Java",
  "Kotlin",
  "Android",
  "Spring Boot",
  "PostgreSQL",
  "Room",
  "Retrofit",
] as const;

const queueRows = [
  { label: "#01", state: "In consultation", tone: "cyan" },
  { label: "#02", state: "Waiting", tone: "violet" },
  { label: "#03", state: "Waiting", tone: "violet" },
] as const;

const roleTabs = ["Patient", "Doctor", "Receptionist", "Administrator"] as const;

export function FeaturedMedQueue() {
  return (
    <section
      aria-labelledby="featured-project-title"
      className="py-14 sm:py-16"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-14">
        <div className="min-w-0">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
            Featured project
          </p>
          <h2
            id="featured-project-title"
            className="mt-3 text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
          >
            MedQueue
          </h2>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-accent-blue">
            Healthcare queue &amp; appointment management
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Collaborative project · Co-developed by Ivwananji Silungwe and Samson
            Chibau Mumba
          </p>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            MedQueue is a collaborative Android and Spring Boot healthcare
            platform designed to help clinics coordinate patient queues,
            appointments, and clinical workflows. The system connects
            role-specific mobile experiences to a REST API and relational
            backend, with local data storage and synchronization components for
            handling connectivity.
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
            <div>
              <dt className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                Type
              </dt>
              <dd className="mt-1 text-sm text-foreground">
                Collaborative team project
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                Role
              </dt>
              <dd className="mt-1 text-sm text-foreground">Co-developer</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                Status
              </dt>
              <dd className="mt-1 text-sm text-foreground">
                In active development
              </dd>
            </div>
          </dl>

          <ul className="mt-8 space-y-4">
            {engineeringHighlights.map(({ icon: Icon, title, detail }) => (
              <li key={title} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center border border-border bg-surface text-accent-blue"
                >
                  <Icon className="size-4" strokeWidth={1.5} />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground">{title}</p>
                  <p className="mt-0.5 text-sm leading-6 text-muted-foreground">
                    {detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <ul
            aria-label="Technologies"
            className="mt-6 flex flex-wrap gap-2"
          >
            {technologyStack.map((technology) => (
              <li
                key={technology}
                className="border border-border bg-surface px-3 py-1 text-xs text-muted-foreground"
              >
                {technology}
              </li>
            ))}
          </ul>

          <p className="mt-5 text-xs leading-5 text-muted-foreground">
            AI-assisted triage and waiting-time prediction are documented as
            future directions, not deployed capabilities.
          </p>

          <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:items-center sm:gap-4">
            <a
              href={medQueueRepositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-3 bg-accent px-5 text-sm font-medium text-background hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              View GitHub Repository
              <ExternalLink aria-hidden="true" className="size-4" />
            </a>
            <Link
              href="/projects"
              className="inline-flex min-h-12 items-center justify-center gap-3 border border-border px-5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Explore All Projects
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>

        <figure className="min-w-0">
          <div className="border border-border bg-surface p-4 sm:p-5">
            {/* Conceptual Android queue interface */}
            <div className="border border-border bg-background p-3">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                  Android client
                </span>
                <span className="font-mono text-[0.65rem] text-accent-blue">
                  Patient view
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {roleTabs.map((role, index) => (
                  <span
                    key={role}
                    aria-hidden="true"
                    className={
                      index === 0
                        ? "border border-accent-blue bg-accent-soft px-2 py-0.5 font-mono text-[0.65rem] text-accent-blue"
                        : "border border-border bg-surface px-2 py-0.5 font-mono text-[0.65rem] text-muted-foreground"
                    }
                  >
                    {role}
                  </span>
                ))}
              </div>
              <ul className="mt-3 space-y-2" aria-hidden="true">
                {queueRows.map(({ label, state, tone }) => (
                  <li
                    key={label}
                    className="flex items-center justify-between gap-2 border border-border bg-surface px-2.5 py-2"
                  >
                    <span className="font-mono text-xs text-foreground">
                      {label}
                    </span>
                    <span className="flex items-center gap-1.5 text-[0.65rem] text-muted-foreground">
                      <span
                        className={
                          tone === "cyan"
                            ? "size-1.5 rounded-full bg-accent-blue"
                            : "size-1.5 rounded-full bg-accent"
                        }
                      />
                      {state}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 border-t border-border pt-2">
                <span className="font-mono text-[0.65rem] text-muted-foreground">
                  Room · local database
                </span>
              </div>
            </div>

            {/* Data flow */}
            <ol className="mt-4 space-y-1.5" aria-hidden="true">
              <li className="flex items-center gap-3 border border-border bg-background px-3 py-2.5">
                <span className="inline-flex size-7 shrink-0 items-center justify-center border border-border bg-surface text-accent-blue">
                  <Smartphone className="size-3.5" strokeWidth={1.5} />
                </span>
                <span className="font-mono text-xs text-foreground">
                  Android App
                </span>
              </li>
              <li className="flex items-center gap-2 pl-3">
                <span className="h-4 w-px bg-border" />
                <span className="inline-flex items-center gap-1.5 border border-border bg-background px-2 py-0.5 font-mono text-[0.6rem] text-muted-foreground">
                  <RefreshCw className="size-3" strokeWidth={1.5} />
                  sync when online
                </span>
              </li>
              <li className="flex items-center gap-3 border border-border bg-background px-3 py-2.5">
                <span className="inline-flex size-7 shrink-0 items-center justify-center border border-border bg-surface text-accent">
                  <Server className="size-3.5" strokeWidth={1.5} />
                </span>
                <span className="font-mono text-xs text-foreground">
                  Spring Boot REST API
                </span>
              </li>
              <li className="mx-auto h-3 w-px bg-border" />
              <li className="flex items-center gap-3 border border-border bg-background px-3 py-2.5">
                <span className="inline-flex size-7 shrink-0 items-center justify-center border border-border bg-surface text-accent-blue">
                  <Database className="size-3.5" strokeWidth={1.5} />
                </span>
                <span className="font-mono text-xs text-foreground">
                  PostgreSQL
                </span>
              </li>
            </ol>
          </div>
          <figcaption className="mt-2 text-center font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
            Conceptual overview · not a screenshot of the running application
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
