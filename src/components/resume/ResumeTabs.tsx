"use client";

import { useCallback, useRef, useState } from "react";
import type { ComponentType } from "react";

import { resumeTabs, type ResumeTabId } from "@/data/resume";
import { AboutPanel } from "./AboutPanel";
import { EducationPanel } from "./EducationPanel";
import { ExperiencePanel } from "./ExperiencePanel";
import { SkillsPanel } from "./SkillsPanel";

const panels: Record<ResumeTabId, ComponentType> = {
  experience: ExperiencePanel,
  education: EducationPanel,
  skills: SkillsPanel,
  about: AboutPanel,
};

export function ResumeTabs() {
  const [active, setActive] = useState<ResumeTabId>("experience");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent, index: number) => {
    const count = resumeTabs.length;
    let nextIndex = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % count;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + count) % count;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = count - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActive(resumeTabs[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  }, []);

  return (
    <div className="grid gap-8 lg:grid-cols-[13rem_1fr] lg:gap-12">
      <div
        role="tablist"
        aria-label="Resume categories"
        aria-orientation="vertical"
        className="flex flex-row flex-wrap gap-2 lg:flex-col lg:gap-1"
      >
        {resumeTabs.map((tab, index) => {
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              type="button"
              role="tab"
              id={`resume-tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`resume-panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(tab.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={[
                "inline-flex min-h-11 items-center justify-start px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-offset-2",
                isActive
                  ? "bg-accent text-background"
                  : "border border-border bg-surface text-muted-foreground hover:border-accent hover:text-foreground",
              ].join(" ")}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="min-h-[16rem] border border-border bg-surface p-6 sm:p-8">
        {resumeTabs.map((tab) => {
          const Panel = panels[tab.id];
          const isActive = tab.id === active;
          return (
            <div
              key={tab.id}
              role="tabpanel"
              id={`resume-panel-${tab.id}`}
              aria-labelledby={`resume-tab-${tab.id}`}
              hidden={!isActive}
              tabIndex={isActive ? 0 : -1}
              className={isActive ? "" : "hidden"}
            >
              <Panel />
            </div>
          );
        })}
      </div>
    </div>
  );
}
