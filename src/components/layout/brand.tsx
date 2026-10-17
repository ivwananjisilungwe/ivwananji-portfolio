import Link from "next/link";

export function Brand() {
  return (
    <Link
      href="/"
      className="font-mono text-sm font-medium tracking-tight text-accent hover:text-accent-soft"
    >
      IVWANANJI<span className="text-muted"> / PORTFOLIO</span>
    </Link>
  );
}
