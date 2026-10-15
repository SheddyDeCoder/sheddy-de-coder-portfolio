
export const SITE_CONFIG = {
  name: "Sheddy De Coder",
  legalName: "Shedrack Nliam",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://shedracknliam.com.ng",

  titleTemplate: "%s | Sheddy De Coder",

  defaultDescription:
  "Shedrack Nliam (Sheddy De Coder) is a technology founder and digital solutions strategist helping founders and businesses build websites and digital solutions, improve SEO and online visibility, and simplify workflows through automation.",
  jobTitle: "Technology Founder & Digital Solutions Strategist",

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
    url: "https://techmindsverse.com.ng",
  },
} as const;
