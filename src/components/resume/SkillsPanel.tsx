import { Code2, Layers, Brain, Wrench } from "lucide-react";
import type { ComponentType } from "react";

import { skillCategories } from "@/data/resume";

const categoryIcons: readonly ComponentType<{ "aria-hidden"?: boolean; className?: string }>[] = [
  Code2,
  Layers,
  Brain,
  Wrench,
];

export function SkillsPanel() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">Skills</h3>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
          Technologies reflect tools used in my projects and areas I&apos;m actively developing.
          Their inclusion does not imply equal proficiency across the stack.
        </p>
      </div>
      <div
        className="grid gap-4 sm:grid-cols-2"
        style={{ perspective: "900px" }}
      >
        {skillCategories.map((category, index) => {
          const Icon = categoryIcons[index] ?? Code2;
          return (
            <div
              key={category.title}
              className="tech-tile animate-fade-up border border-border bg-surface p-5"
              style={{ animationDelay: `${index * 80}ms` }}
              tabIndex={0}
            >
              <div className="mb-3 flex items-center gap-2">
                <Icon aria-hidden className="size-4 text-accent-blue" />
                <h4 className="text-sm font-medium text-foreground">{category.title}</h4>
              </div>
              <ul className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="border border-border bg-surface-elevated px-2.5 py-1 text-xs text-foreground transition-colors hover:border-accent-blue"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
