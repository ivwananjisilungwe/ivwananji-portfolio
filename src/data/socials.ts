export interface SocialProfile {
  id: string;
  label: string;
  shortLabel: string;
  url: string;
}

// Only verified profile URLs are listed here.
// Add LinkedIn and other profiles only after their URLs are confirmed.
export const socials: readonly SocialProfile[] = [
  {
    id: "github",
    label: "GitHub",
    shortLabel: "GH",
    url: "https://github.com/ivwananjisilungwe/",
  },
];
