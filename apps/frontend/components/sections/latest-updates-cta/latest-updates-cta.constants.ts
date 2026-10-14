// No real activity yet on any platform — renders nothing until provided.
export const LATEST_UPDATES: import("./latest-updates-cta.types").UpdateItem[] = [];

// No articles published yet.
export const FEATURED_ARTICLES: { title: string; url: string }[] = [];

// No confirmed upcoming events.
export const UPCOMING_EVENTS: import("./latest-updates-cta.types").EventItem[] = [];

export const NEWSLETTER = {
  heading: "Stay Updated.",
  body: "Receive new articles, product updates, community announcements and important milestones directly in your inbox.",
  privacyNotice: "Your email will never be shared with third parties.",
} as const;

// Real URLs not yet provided for any platform — renders nothing until confirmed.
export const SOCIAL_LINKS: import("./latest-updates-cta.types").SocialLink[] = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/shedrack-nliam-856980309" },
  { platform: "GitHub", url: "https://github.com/Sheddydecoder" },
  { platform: "X", url: "https://x.com/ShedrackNliam" },
  { platform: "Facebook", url: "https://www.facebook.com/shedrack.nliam" },
  { platform: "TikTok", url: "https://www.tiktok.com/@sheddy_de_coder1" },
  { platform: "YouTube", url: "https://youtube.com/@sheddy_de_coder" },
];


export const FINAL_CTA = {
  heading: "Let's Build Something Meaningful.",
  body:
    "Have a product to build, a brand to grow, or a workflow to simplify? Let's turn the challenge into a practical solution.",

  primaryCta: {
    label: "Book a Call",
    href: "https://calendly.com/sheddydecoder",
  },

  secondaryCta: {
    label: "Get in Touch",
    href: "/contact",
  },

  tertiaryActions: [
    { label: "Download CV", href: null },
    {
      label: "Join TechMindsVerse",
      href: "https://chat.whatsapp.com/GaIXQOrgY8W4VYAYYUsApH",
    },
    { label: "Request Mentorship", href: "/contact" },
    { label: "View Projects", href: "/projects" },
  ],
} as const;


export const CLOSING_BRAND_LINE = "Building Meaningful Technology.";