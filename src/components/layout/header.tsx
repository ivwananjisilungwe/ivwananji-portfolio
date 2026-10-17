import { Brand } from "./brand";
import { MobileMenuWrapper } from "./mobile-menu-wrapper";
import { NavLink } from "./nav-link";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function Header() {
  return (
    <header className="border-b border-border bg-surface">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between h-16">
          <Brand />
          <nav className="hidden sm:flex items-center gap-6">
            <NavLink
              href="/"
              className="text-sm text-muted-foreground hover:text-accent-soft"
            >
              Home
            </NavLink>
            <NavLink
              href="/projects"
              className="text-sm text-muted-foreground hover:text-accent-soft"
            >
              Projects
            </NavLink>
            <NavLink
              href="/about"
              className="text-sm text-muted-foreground hover:text-accent-soft"
            >
              About
            </NavLink>
            <NavLink
              href="/contact"
              className="text-sm text-muted-foreground hover:text-accent-soft"
            >
              Contact
            </NavLink>
          </nav>
          <div className="flex items-center gap-3">
            <MobileMenuWrapper className="sm:hidden" />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
