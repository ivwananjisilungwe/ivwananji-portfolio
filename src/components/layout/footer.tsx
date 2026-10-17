import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border pt-8 pb-12">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <nav className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-accent-soft">
            Home
          </Link>
          <Link href="/projects" className="hover:text-accent-soft">
            Projects
          </Link>
          <Link href="/about" className="hover:text-accent-soft">
            About
          </Link>
          <Link href="/contact" className="hover:text-accent-soft">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
