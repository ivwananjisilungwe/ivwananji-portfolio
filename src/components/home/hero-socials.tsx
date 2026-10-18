import { socials } from "@/data/socials";

export function HeroSocials() {
  return (
    <div className="flex items-center gap-3">
      {socials.map((social) => {
        return (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border font-mono text-xs font-semibold tracking-tight text-muted-foreground transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <span aria-hidden="true">{social.shortLabel}</span>
          </a>
        );
      })}
    </div>
  );
}
