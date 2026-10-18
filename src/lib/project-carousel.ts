export type ProjectDirection = "forward" | "backward";

export function getNextProjectIndex(
  currentIndex: number,
  projectCount: number,
  direction: ProjectDirection,
): number {
  if (projectCount <= 0) return 0;

  const step = direction === "forward" ? 1 : -1;
  return ((currentIndex + step) % projectCount + projectCount) % projectCount;
}
