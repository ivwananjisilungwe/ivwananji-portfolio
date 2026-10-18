import type { StaticImageData } from "next/image";
import novaWalletShowcase from "@/assets/optimized/NovaWallet Neon Tech Showcase.webp";
import medQueueShowcase from "@/assets/optimized/MedQueue Healthcare Dashboard Showcase.webp";

export interface FeaturedProject {
  name: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  repositoryUrl: string;
  status: readonly { label: string; value: string }[];
  technologies: readonly string[];
}

// Maintain the requested featured order; only list technologies relevant to each project.
export const featuredProjects: readonly FeaturedProject[] = [
  {
    name: "NovaWallet",
    subtitle: "Full-Stack Digital Wallet",
    description:
      "A digital-wallet application for university students and small businesses in Zambia, combining a Flutter mobile app with a Spring Boot REST API.",
    image: novaWalletShowcase,
    imageAlt: "Illustrative NovaWallet dashboard and mobile wallet concept artwork.",
    repositoryUrl: "https://github.com/ivwananjisilungwe/NovaWallet",
    status: [
      { label: "Spring Boot API", value: "Ready" },
      { label: "Flutter mobile application", value: "In progress" },
    ],
    technologies: ["Java", "Spring Boot", "Flutter", "Dart", "PostgreSQL", "Docker", "GitHub Actions"],
  },
  {
    name: "MedQueue",
    subtitle: "Healthcare Queue & Appointment Management",
    description:
      "A collaborative Android and Spring Boot healthcare application designed to support appointment scheduling, patient queues, doctor workflows, and hospital administration.",
    image: medQueueShowcase,
    imageAlt: "Illustrative MedQueue healthcare dashboard concept artwork.",
    repositoryUrl: "https://github.com/MedQueue-Team/MedQueue",
    status: [
      { label: "Project context", value: "Collaborative team project" },
      { label: "Completion status", value: "Not specified" },
    ],
    technologies: ["Java", "Kotlin", "Android", "Spring Boot", "PostgreSQL", "Room", "Retrofit"],
  },
];
