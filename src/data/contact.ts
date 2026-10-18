// Verified contact methods for the portfolio.
//
// Only entries whose details have been confirmed should be added here.
// Do not fabricate email addresses, phone numbers, or profile URLs.
// The Contact page renders one card per entry below; an empty list means
// no contact methods are displayed (no fake or disabled links).

export type ContactIcon = "mail" | "github" | "linkedin" | "phone" | "map-pin" | "globe";

export interface ContactMethod {
  label: string;
  value: string;
  href: string;
  icon: ContactIcon;
  external?: boolean;
}

// Only entries whose details have been confirmed should be added here.
// Do not fabricate email addresses, phone numbers, or profile URLs.
export const contactMethods: readonly ContactMethod[] = [
  {
    label: "GitHub",
    value: "github.com/ivwananjisilungwe",
    href: "https://github.com/ivwananjisilungwe/",
    icon: "github",
    external: true,
  },
];
