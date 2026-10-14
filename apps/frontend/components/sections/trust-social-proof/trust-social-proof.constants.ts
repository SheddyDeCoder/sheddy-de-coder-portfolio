export const TRUST_INTRO = {
  heading: "Experience That Shapes My Work",
  body:
    "My approach combines hands-on product development, founder experience, professional training, and community leadership.",
} as const;

// No real recommendations submitted yet — renders nothing until provided.
export const RECOMMENDATIONS: import("./trust-social-proof.types").Recommendation[] = [];

export const TRUST_INDICATORS: string[] = [
  "Founder — TechMindsVerse",
  "Founder Dojo Fellow",
  "Google Ads Search Certified",
  "Product Development",
  "Community Leadership",
];

export const COMMUNITY_IMPACT: { label: string; value: string | number }[] = [
  { label: "Technology Community Founded", value: "TechMindsVerse" },
  { label: "Students Mentored", value: 3 },
  { label: "Workshops & Programs Attended", value: "5+" },
  { label: "Digital Products Built", value: 3 },
];

// No confirmed event name/topic/location yet — renders nothing until provided.
export const SPEAKING_HIGHLIGHTS: import("./trust-social-proof.types").SpeakingHighlight[] = [];

export const TECHMINDSVERSE_PREVIEW = {
  heading: "Building The Next Generation Of Technology Leaders",
  body: "TechMindsVerse is a growing technology community dedicated to learning, collaboration, innovation and building meaningful digital solutions.",
  memberCount: 105,
  joinCta: { label: "Join Community", href: "https://chat.whatsapp.com/GaIXQOrgY8W4VYAYYUsApH" },
  visitCta: { label: "Visit Official Website", href: "#" }, // real URL not yet provided
} as const;

export const LOGO_SHOWCASE = [
  { name: "Founder Dojo", logo: "/images/logos/founder-dojo.png" },
  { name: "CodeFactory Academy", logo: "/images/logos/codefactory.png" },
  { name:"TechMindsVerse", logo: "/images/logos/techmindsverse.png" },
] as const;