export interface FeaturedProject {
  name: string;
  purpose: string;
  technologies: readonly string[];
  status: string;
}

// Keep this list limited to projects whose scope and implementation can be
// supported by portfolio case-study evidence. No project evidence is currently published.
export const featuredProjects: readonly FeaturedProject[] = [];
