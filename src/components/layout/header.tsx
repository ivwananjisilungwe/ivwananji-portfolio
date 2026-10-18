import { Brand } from "./brand";
import { MobileMenuWrapper } from "./mobile-menu-wrapper";
import { NavLink } from "./nav-link";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function Header() {
  return (
    <header className="relative border-b border-border bg-surface">
      <div className="site-container">
        <div className="flex min-h-16 items-center justify-between gap-4 py-3 lg:gap-8">
          <Brand />
          <nav aria-label="Primary" className="hidden items-center gap-4 lg:flex xl:gap-6">
            <NavLink href="/" className="text-base xl:text-lg">
              Home
            </NavLink>
            <NavLink href="/#services" className="text-base xl:text-lg">
              Services
            </NavLink>
            <NavLink href="/#resume" className="text-base xl:text-lg">
              Resume
            </NavLink>
            <NavLink href="/contact" className="text-base xl:text-lg">
              Contact
            </NavLink>
          </nav>
          <div className="flex items-center gap-3">
            <MobileMenuWrapper className="lg:hidden" />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
