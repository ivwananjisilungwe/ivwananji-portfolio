import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border pt-8 pb-12">
      <div className="site-container">
        <nav className="flex animate-fade-up flex-col gap-4 text-xs text-muted-foreground sm:flex-row sm:gap-8">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          <Link href="/projects" className="hover:text-accent">
            Projects
          </Link>
          <Link href="/about" className="hover:text-accent">
            About
          </Link>
          <Link href="/#resume" className="hover:text-accent">
            Resume
          </Link>
          <Link href="/contact" className="hover:text-accent">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
