import { Code2, Database, Network, Server } from "lucide-react";

const systemNodes = [
  { label: "Code", icon: Code2, className: "hero-node-code" },
  { label: "Data", icon: Database, className: "hero-node-data" },
  { label: "Services", icon: Server, className: "hero-node-services" },
  { label: "Systems", icon: Network, className: "hero-node-systems" },
] as const;

export function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="hero-visual relative mx-auto aspect-square w-full max-w-[21rem] md:max-w-[25rem] lg:max-w-[27rem]"
    >
      <div className="hero-visual-grid absolute inset-[8%]" />
      <svg
        className="absolute inset-0 size-full text-accent-blue/60"
        viewBox="0 0 320 320"
        fill="none"
      >
        <path d="M160 160 76 94M160 160l84-66M160 160l-84 66M160 160l84 66" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="160" cy="160" r="92" stroke="currentColor" strokeOpacity=".3" />
        <circle cx="160" cy="160" r="120" stroke="currentColor" strokeOpacity=".16" />
      </svg>

      {systemNodes.map(({ label, icon: Icon, className }) => (
        <span key={label} className={`hero-node ${className}`}>
          <Icon className="size-5 sm:size-6" strokeWidth={1.5} />
        </span>
      ))}

      <div className="hero-core absolute left-1/2 top-1/2 flex size-[7.25rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-accent/50 bg-surface-elevated text-accent shadow-[0_18px_50px_-24px_rgba(139,92,246,0.6)] sm:size-32">
        <Code2 className="size-10 sm:size-12" strokeWidth={1.4} />
        <span className="absolute -bottom-7 font-mono text-[10px] tracking-[0.18em] text-muted-foreground">
          BUILD · REFINE
        </span>
      </div>
      <span className="absolute right-[9%] top-[18%] size-1.5 rounded-full bg-accent-blue shadow-[0_0_14px_var(--accent-blue)]" />
      <span className="absolute bottom-[15%] left-[18%] size-1 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
    </div>
  );
}
