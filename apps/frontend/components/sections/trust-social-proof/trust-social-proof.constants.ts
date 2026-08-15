export const TRUST_INTRO = {
  heading: "Trusted By People. Driven By Purpose.",
  body: "Every project, collaboration and community experience is built on trust, professionalism and a commitment to creating meaningful results.",
} as const;

// No real recommendations submitted yet — renders nothing until provided.
export const RECOMMENDATIONS: import("./trust-social-proof.types").Recommendation[] = [];

export const TRUST_INDICATORS: string[] = [
  "Founder of TechMindsVerse",
  "Technology Founder",
  "Product Builder",
  "Mentor",
  "Community Builder",
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
  joinCta: { label: "Join Community", href: "/techmindsverse" },
  visitCta: { label: "Visit Official Website", href: "#" }, // real URL not yet provided
} as const;

export const LOGO_SHOWCASE: { name: string; logo: string }[] = [
  { name: "Founder Dojo", logo: "/images/logos/founder-dojo.svg" },
  { name: "CodeFactory Academy", logo: "/images/logos/codefactory-academy.svg" },
  { name: "CodeFactory Innovation Hub", logo: "/images/logos/codefactory-innovation-hub.svg" },
];