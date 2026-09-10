export const SITE_CONFIG = {
  name: "Sheddy De Coder",
  legalName: "Shedrack Nliam",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://shedracknliam.com.ng",
  titleTemplate: "%s | SHEDDY DE CODER",
  defaultDescription:
    "Shedrack Nliam (Sheddy De Coder) — Technology Founder, Product Builder, and Digital Strategist. Founder of TechMindsVerse. Based in Nigeria, working globally across technology, media, and digital growth.",
  jobTitle: "Technology Founder & Product Builder",
  sameAs: [
    "https://www.linkedin.com/in/shedrack-nliam-856980309",
    "https://github.com/Sheddydecoder",
    "https://x.com/ShedrackNliam",
    "https://www.facebook.com/shedrack.nliam",
    "https://www.tiktok.com/@sheddy_de_coder1",
    "https://youtube.com/@sheddy_de_coder",
  ],
  organization: {
    name: "TechMindsVerse",
    url: "https://techmindsverse.com", // update when the real TechMindsVerse URL exists
  },
} as const;