import Link from "next/link";

export function Brand() {
  return (
    <Link
      href="/"
      className="whitespace-nowrap text-base font-semibold tracking-tight text-foreground transition-colors hover:text-accent sm:text-lg lg:text-xl"
    >
      Ivwananji Silungwe
    </Link>
  );
}
