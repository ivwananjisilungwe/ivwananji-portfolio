import type { Metadata } from "next";
import { ServicesSection } from "@/components/sections/ServicesSection";

export const metadata: Metadata = {
  title: "Services — IVWANANJI",
  description:
    "Software engineering services: backend development, REST API design, distributed systems, CI/CD automation, database engineering, debugging and testing, full-stack development, and AI/ML data-driven applications. Based on project-based learning and practical implementation.",
};

export default function ServicesPage() {
  return (
    <div className="site-container">
      <ServicesSection />
    </div>
  );
}
