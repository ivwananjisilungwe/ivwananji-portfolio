import { socials } from "@/data/socials";
import { BrandIcon } from "@/components/icons/brand-icon";
import type { SocialProfileId } from "@/data/socials";

interface SocialLinksProps {
  exclude?: readonly SocialProfileId[];
}

export function SocialLinks({ exclude = [] }: SocialLinksProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {socials
        .filter((social) => !exclude.includes(social.id))
        .map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none"
          >
            <BrandIcon name={social.id} className="size-5" />
          </a>
        ))}
    </div>
  );
}

export function HeroSocials() {
  return <SocialLinks />;
}
