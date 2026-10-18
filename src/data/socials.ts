export type SocialProfileId = "github" | "linkedin" | "instagram" | "facebook";

export interface SocialProfile {
  id: SocialProfileId;
  label: string;
  shortLabel: string;
  url: string;
}

// Only verified profile URLs are listed here.
// Keep profile URLs here so homepage and Contact links stay in sync.
export const socials: readonly SocialProfile[] = [
  {
    id: "github",
    label: "GitHub",
    shortLabel: "GH",
    url: "https://github.com/ivwananjisilungwe/",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    shortLabel: "IN",
    url: "https://www.linkedin.com/in/ivwananji-silungwe-a3a505268",
  },
  {
    id: "instagram",
    label: "Instagram",
    shortLabel: "IG",
    url: "https://www.instagram.com/ivwananji465/",
  },
  {
    id: "facebook",
    label: "Facebook",
    shortLabel: "FB",
    url: "https://www.facebook.com/ivwa.nanji.123590",
  },
];
