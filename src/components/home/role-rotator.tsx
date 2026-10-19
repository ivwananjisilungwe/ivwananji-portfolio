"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const roles = ["Software Engineer", "AI/ML Engineer", "Full Stack Developer"] as const;

function subscribeToMotionPreference(onChange: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
}

function getMotionPreference() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerMotionPreference() {
  return false;
}

type TypingPhase = "pause" | "erase" | "type";

export function RoleRotator() {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    getMotionPreference,
    getServerMotionPreference,
  );
  const [roleIndex, setRoleIndex] = useState(0);
  const [visibleText, setVisibleText] = useState<string>(roles[0]);
  const [announcedRoleIndex, setAnnouncedRoleIndex] = useState(0);
  const [phase, setPhase] = useState<TypingPhase>("pause");
  const role = roles[roleIndex];

  useEffect(() => {
    if (prefersReducedMotion) return;

    if (phase === "pause") {
      const timeout = window.setTimeout(() => setPhase("erase"), 1_700);
      return () => window.clearTimeout(timeout);
    }

    if (phase === "erase") {
      const timeout = window.setTimeout(() => {
        if (visibleText.length === 1) {
          setVisibleText("");
          setRoleIndex((current) => (current + 1) % roles.length);
          setPhase("type");
          return;
        }

        setVisibleText((current) => current.slice(0, -1));
      }, 48);
      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => {
      const nextText = role.slice(0, visibleText.length + 1);
      setVisibleText(nextText);

      if (nextText.length === role.length) {
        setAnnouncedRoleIndex(roleIndex);
        setPhase("pause");
      }
    }, 82);

    return () => window.clearTimeout(timeout);
  }, [phase, prefersReducedMotion, role, roleIndex, visibleText]);

  return (
    <p className="mt-5 min-h-[2.5rem] text-xl font-medium tracking-tight text-accent-blue sm:mt-6 sm:min-h-[2.75rem] sm:text-2xl">
      <span className="sr-only">
        {roles[prefersReducedMotion ? 0 : announcedRoleIndex]}
      </span>
      <span aria-hidden="true" className="role-rotator-text">
        {prefersReducedMotion ? roles[0] : visibleText}
        {!prefersReducedMotion && <span className="role-rotator-cursor">|</span>}
      </span>
    </p>
  );
}
