export type ResumeTabId = "experience" | "education" | "skills" | "about";

export interface ResumeTab {
  id: ResumeTabId;
  label: string;
}

export const resumeTabs: readonly ResumeTab[] = [
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About Me" },
] as const;

export interface SkillCategory {
  title: string;
  items: readonly string[];
}

export const skillCategories: readonly SkillCategory[] = [
  {
    title: "Programming Languages",
    items: ["Java", "Python", "Dart", "TypeScript"],
  },
  {
    title: "Application Frameworks",
    items: ["Spring Boot", "Flutter", "React", "Next.js"],
  },
  {
    title: "Data & Persistence",
    items: ["PostgreSQL"],
  },
  {
    title: "Data Analysis & Machine Learning",
    items: ["Data analysis", "Machine learning"],
  },
  {
    title: "Engineering Tools & Distributed Systems",
    items: ["Docker", "Linux", "Git", "Kafka", "MQTT"],
  },
];
