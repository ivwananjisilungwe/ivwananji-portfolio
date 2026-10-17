"use client";

import { usePathname } from "next/navigation";
import { MobileMenu } from "./mobile-menu";

interface MobileMenuWrapperProps {
  className?: string;
}

export function MobileMenuWrapper({ className }: MobileMenuWrapperProps = {}) {
  const pathname = usePathname();

  // Force the menu to remount on route changes so its open state resets
  // to closed. This avoids calling setState inside an effect.
  return <MobileMenu key={pathname} className={className} />;
}
