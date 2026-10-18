import type { Metadata } from "next";
import { Resume } from "@/components/sections/Resume";

export const metadata: Metadata = {
  title: "Resume — IVWANANJI",
  description: "Background, skills, and study — a concise resume overview.",
};

export default function ResumePage() {
  return (
    <div className="site-container">
      <Resume />
    </div>
  );
}
