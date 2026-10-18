import type { Metadata } from "next";
import { ServicesSection } from "@/components/sections/ServicesSection";

export const metadata: Metadata = {
  title: "Services — IVWANANJI",
};

export default function ServicesPage() {
  return (
    <div className="site-container">
      <ServicesSection />
    </div>
  );
}
