"use client";

import { useEffect, useRef, useState } from "react";
import {
  AppWindow,
  BrainCircuit,
  Bug,
  Cable,
  Database,
  GitBranch,
  Network,
  Server,
  type LucideIcon,
} from "lucide-react";

const services: {
  id: string;
  title: string;
  description: string;
  focus: string;
  icon: LucideIcon;
}[] = [
  {
    id: "backend",
    title: "Backend development",
    description:
      "Build server-side application logic around clear responsibilities: express business rules, structure maintainable services, and connect application code to persistent data. Java and Spring Boot are current areas of project-based practice.",
    focus: "Java · Spring Boot · service logic",
    icon: Server,
  },
  {
    id: "api",
    title: "REST API design & development",
    description:
      "Shape clear HTTP endpoints and request/response contracts, with validation, authentication or authorization, and predictable error handling where the application needs them. Spring Boot is represented in current project-based learning.",
    focus: "REST · HTTP · Spring Boot",
    icon: Cable,
  },
  {
    id: "distributed",
    title: "Microservices & distributed systems",
    description:
      "Explore service boundaries, communication, configuration, integration, and resilience while keeping services understandable. Kafka and MQTT are active technical interests; this does not claim production microservice deployments.",
    focus: "Kafka · MQTT · event-driven patterns",
    icon: Network,
  },
  {
    id: "devops",
    title: "CI/CD & DevOps automation",
    description:
      "Develop repeatable build, test, and deployment workflows, with environment configuration and useful feedback during development. Git and Docker appear in the portfolio; a completed production pipeline is not claimed.",
    focus: "Git · Docker · workflow automation",
    icon: GitBranch,
  },
  {
    id: "database",
    title: "Database design & engineering",
    description:
      "Model entities and relationships, consider constraints and transactions that protect data integrity, and connect queries and persistence to application services. These are database learning and project interests, not vendor-specific expertise.",
    focus: "Data modelling · SQL concepts · persistence",
    icon: Database,
  },
  {
    id: "quality",
    title: "Debugging, testing & code quality",
    description:
      "Reproduce failures, trace behavior, fix defects, and validate changes with focused checks and tests. This reflects the portfolio's verify-and-test approach without invented coverage or performance figures.",
    focus: "Debugging · testing · verification",
    icon: Bug,
  },
  {
    id: "full-stack",
    title: "Full-stack application development",
    description:
      "Connect user-facing workflows to backend APIs and data layers. React, Next.js, and TypeScript are present in this portfolio; Java and Spring Boot are current project-based learning, not claims of mastery across every framework.",
    focus: "React · Next.js · TypeScript",
    icon: AppWindow,
  },
  {
    id: "data-ai",
    title: "AI/ML & data-driven applications",
    description:
      "Explore data preparation and analysis, experiment with models, and consider how intelligent capabilities can fit into useful applications. Python, data analysis, and machine learning are learning areas—not specialist or production claims.",
    focus: "Python · data analysis · ML exploration",
    icon: BrainCircuit,
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      aria-labelledby="services-title"
      className="border-y border-border py-16 sm:py-20"
    >
      <div
        className={`mx-auto max-w-2xl text-center space-y-4 mb-10 lg:mb-12 ${hasEntered ? "animate-fade-up" : ""}`}
      >
        <h2
          id="services-title"
          className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
        >
          My Services
        </h2>
      </div>

      <div
        className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-5"
        style={{ perspective: "1100px" }}
      >
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <article
              key={service.id}
              aria-labelledby={`service-title-${service.id}`}
              className={`service-card ${hasEntered ? "animate-fade-up" : ""}`}
              style={{ animationDelay: `${index * 42}ms` }}
            >
              <div className="service-card-icon mb-4 inline-flex size-11 items-center justify-center border border-accent/30 bg-surface-elevated text-accent-blue">
                <Icon aria-hidden="true" className="size-5" strokeWidth={1.7} />
              </div>
              <h3
                id={`service-title-${service.id}`}
                className="text-base font-medium leading-snug tracking-tight text-foreground sm:text-lg"
              >
                {service.title}
              </h3>
              <p className="mt-2.5 text-sm leading-7 text-muted-foreground">
                {service.description}
              </p>
              <p className="mt-4 border-t border-border/80 pt-3 font-mono text-xs leading-6 tracking-[0.02em] text-accent-blue">
                {service.focus}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
