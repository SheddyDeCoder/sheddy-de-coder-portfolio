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
  heading: "Let's Build Something Meaningful Together.",
  body: "Whether you're building a startup, strengthening your brand, launching a digital product or looking for a technology partner, I'd love to work with you.",
  primaryCta: { label: "Book a Call", href: "/contact" },
  secondaryCta: { label: "Hire Me", href: "/contact" },
  tertiaryActions: [
    { label: "Download CV", href: "/cv.pdf" },
    { label: "Join TechMindsVerse", href: "/techmindsverse" },
    { label: "Request Mentorship", href: "/contact" },
    { label: "View Projects", href: "/projects" },
  ],
} as const;

export const CLOSING_BRAND_LINE = "Building Meaningful Technology.";