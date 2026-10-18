"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
] as const;

interface MobileMenuProps {
  className?: string;
}

export function MobileMenu({ className }: MobileMenuProps = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Close on Escape
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        close();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  const handleLinkClick = useCallback(() => {
    close();
  }, [close]);

  return (
    <>
      <button
        type="button"
        className={`inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:bg-surface-elevated ${className ?? ""}`}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={toggle}
      >
        {isOpen ? (
          <X aria-hidden="true" className="size-5" />
        ) : (
          <Menu aria-hidden="true" className="size-5" />
        )}
      </button>

      {isOpen && (
        <div
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile primary"
          className="absolute inset-x-0 top-full z-50 animate-fade-up border-b border-border bg-surface"
        >
          <div className="site-container py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`block min-h-11 py-2 text-base transition-colors hover:text-accent focus-visible:outline-offset-2 ${pathname === item.href ? "font-medium text-accent" : "text-foreground"}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
