import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import type { ComponentType } from "react";

import { contactMethods, type ContactIcon } from "@/data/contact";
import { BrandIcon } from "@/components/icons/brand-icon";
import { SocialLinks } from "@/components/home/hero-socials";

export const metadata: Metadata = {
  title: "Contact — IVWANANJI",
  description:
    "Get in touch about software projects, engineering discussions, collaboration, or relevant opportunities.",
};

const iconMap: Record<ContactIcon, ComponentType<{ "aria-hidden"?: boolean; className?: string }>> = {
  mail: Mail,
  github: GithubBrandIcon,
  linkedin: ExternalLink,
  phone: Phone,
  "map-pin": MapPin,
  globe: ExternalLink,
};

const missingDetails = [
  "A verified email address (enables a working mailto: link)",
  "Optional phone number and location",
] as const;

function GithubBrandIcon({ className }: { className?: string }) {
  return <BrandIcon name="github" className={className} />;
}

export default function ContactPage() {
  const hasMethods = contactMethods.length > 0;

  return (
    <section className="site-container py-16 sm:py-20">
      <p className="mb-5 animate-fade-up font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent">
        Contact
      </p>
      <h1 className="animate-fade-up text-[clamp(2.5rem,7vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.04em] text-foreground">
        Let&apos;s talk.
      </h1>
      <p
        className="mt-7 max-w-2xl animate-fade-up text-base leading-7 text-muted-foreground sm:mt-9 sm:text-lg sm:leading-8"
        style={{ animationDelay: "80ms" }}
      >
        You can reach out about software projects, engineering discussions,
        collaboration, or relevant opportunities. I read every message that
        arrives through a verified channel.
      </p>

      {hasMethods ? (
        <section
          aria-labelledby="methods-title"
          className="mt-16 border-t border-border pt-12 sm:mt-20 sm:pt-16"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-accent">
            Contact methods
          </p>
          <h2
            id="methods-title"
            className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl"
          >
            Verified ways to reach me.
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {contactMethods.map((method, index) => {
              const Icon = iconMap[method.icon];
              return (
                <li
                  key={method.label}
                  className="animate-fade-up border border-border bg-surface p-5 transition-colors hover:border-accent"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <a
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    className="group flex items-start gap-4 focus-visible:outline-offset-4"
                  >
                    <span
                      aria-hidden="true"
                      className="inline-flex size-10 shrink-0 items-center justify-center border border-border bg-surface-elevated text-accent-blue transition-colors group-hover:border-accent group-hover:text-accent"
                    >
                      <Icon className="size-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                        {method.label}
                      </span>
                      <span className="mt-1 block break-all text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                        {method.value}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      ) : (
        <section
          aria-labelledby="status-title"
          className="mt-16 border-t border-border pt-12 sm:mt-20 sm:pt-16"
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
            <div className="animate-fade-up">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-accent">
                Contact status
              </p>
              <h2
                id="status-title"
                className="max-w-md text-2xl font-medium tracking-tight text-foreground sm:text-3xl"
              >
                Details not published yet.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-7 text-muted-foreground">
              <p>
                To keep this page honest, no email or phone number is shown
                until verified. Social profiles are listed below. There is no
                contact form here either — a form that can&apos;t deliver a message would only
                create a false impression.
              </p>
              <p>
                A verified email address or optional phone number can be added
                to <code className="font-mono text-sm text-foreground">src/data/contact.ts</code>.
                Social profile links are maintained in{" "}
                <code className="font-mono text-sm text-foreground">src/data/socials.ts</code>.
              </p>
            </div>
          </div>

          <div className="mt-10 animate-fade-up border border-border bg-surface-elevated p-5 sm:p-6">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-blue">
              Details needed to enable direct contact
            </p>
            <ul className="mt-4 space-y-2">
              {missingDetails.map((detail) => (
                <li
                  key={detail}
                  className="flex items-start gap-3 text-sm text-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent"
                  />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section
        aria-labelledby="socials-title"
        className="mt-16 border-t border-border pt-12 sm:mt-20 sm:pt-16"
      >
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-accent">
          Social profiles
        </p>
        <h2
          id="socials-title"
          className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl"
        >
          Find me online.
        </h2>
        <div className="mt-7">
          <SocialLinks exclude={["github"]} />
        </div>
      </section>

      <section
        aria-labelledby="elsewhere-title"
        className="mt-16 border-t border-border pt-12 sm:mt-20 sm:pt-16"
      >
        <p className="mb-3 animate-fade-up font-mono text-xs uppercase tracking-[0.16em] text-accent">
          In the meantime
        </p>
        <h2
          id="elsewhere-title"
          className="animate-fade-up text-2xl font-medium tracking-tight text-foreground sm:text-3xl"
        >
          Explore the rest of the portfolio.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Link
            href="/"
            className="group animate-fade-up border border-border bg-surface p-5 transition-colors hover:border-accent"
            style={{ animationDelay: "0ms" }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-blue">
              Home
            </p>
            <p className="mt-2 text-sm font-medium text-foreground">
              Overview and engineering approach.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors group-hover:text-accent">
              Home <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
          <Link
            href="/about"
            className="group animate-fade-up border border-border bg-surface p-5 transition-colors hover:border-accent"
            style={{ animationDelay: "80ms" }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-blue">
              About
            </p>
            <p className="mt-2 text-sm font-medium text-foreground">
              Background and current focus.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors group-hover:text-accent">
              About <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
          <Link
            href="/projects"
            className="group animate-fade-up border border-border bg-surface p-5 transition-colors hover:border-accent"
            style={{ animationDelay: "160ms" }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-blue">
              Projects
            </p>
            <p className="mt-2 text-sm font-medium text-foreground">
              Case studies as they&apos;re verified.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors group-hover:text-accent">
              Projects <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </section>
    </section>
  );
}
