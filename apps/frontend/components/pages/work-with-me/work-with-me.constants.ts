
import type { FixedPriceServiceKey } from "./work-with-me.config";

export const POSITIONING = {
  heading: "Build Useful Digital Products. Improve Digital Visibility.",
  body: "I help founders, startups, businesses, and personal brands turn ideas and real-world problems into useful digital products — then improve how those products and brands are discovered, understood, and trusted online.",
} as const;

export const BUILD_GROW = {
  build: {
    label: "BUILD",
    heading: "Turn ideas into useful digital products.",
    description:
      "From websites and landing pages to applications, MVPs, and custom digital products, I help shape the idea, design the experience, and build the solution.",
  },
  grow: {
    label: "GROW",
    heading: "Make your digital presence easier to discover.",
    description:
      "Through SEO, search visibility, digital positioning, and GEO/AI visibility foundations, I help products and brands become easier to find, understand, and trust.",
  },
} as const;

export const PRIMARY_SERVICE = {
  name: "Product Development",
  note: "For founders and teams turning ideas, problems, or opportunities into real digital products.",
} as const;

export interface FixedPriceService {
  key: FixedPriceServiceKey;
  title: string;
  description: string;
  priceLabel: string;
}

export const FIXED_PRICE_SERVICES: FixedPriceService[] = [
  {
    key: "productDevelopment",
    title: "Product Development",
    description:
      "Turn an idea or business problem into a useful digital product through strategy, design, development, and launch.",
    priceLabel: "₦1m+ / $1,000+",
  },
  {
    key: "webDevelopment",
    title: "Web Development",
    description:
      "Build fast, professional websites and web applications designed around your goals, users, and business.",
    priceLabel: "₦500k+ / $500+",
  },
  {
    key: "seoSearchVisibility",
    title: "SEO & Search Visibility",
    description:
      "Improve how your website, brand, or business is discovered through technical SEO, search optimization, indexing, and visibility strategy.",
    priceLabel: "₦150k+ / $150+",
  },
  {
    key: "personalBrandWebsites",
    title: "Personal Brand Websites",
    description:
      "Build an authority-focused website that communicates who you are, what you do, your work, and how people can work with you.",
    priceLabel: "₦350k+ / $350+",
  },
  {
    key: "landingPages",
    title: "Landing Pages",
    description:
      "Create focused landing pages designed to communicate an offer clearly and move visitors toward a specific action.",
    priceLabel: "₦150k+ / $150+",
  },
] as const;

export const SERVICE_PROCESS = [
  "Idea",
  "Research",
  "Product Strategy",
  "Product Design",
  "Implementation",
  "SEO",
  "Visibility",
] as const;

export const WHO_I_WORK_WITH = [
  "Founders",
  "Startups",
  "Businesses",
  "Personal Brands",
  "Organizations",
] as const;

export const WHO_I_WORK_WITH_NOTE =
  "Based in Nigeria. Open to remote collaboration worldwide.";

export const SUPPORTING_CAPABILITIES = [
  "Product Strategy",
  "Product Design",
  "Technical Consulting",
  "AI & Automation",
  "Brand Positioning",
  "Media & Creative Support",
  "Church Technology",
] as const;

export const TOOLS_INVENTORY = {
  "Product & Development": [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
  ],
  "Data & Backend": [
    "Supabase",
    "PostgreSQL",
    "Prisma",
  ],
  "Design & Creative": [
    "Figma",
    "Canva",
    "CapCut",
  ],
  "SEO & Analytics": [
    "Google Search Console",
    "Google Analytics",
    "Google Ads",
  ],
} as const;

export const MENTORSHIP = {
  heading: "Mentorship",
  description:
    "Application-based — free or paid depending on the situation. Available for mentorship and educational collaborations.",
  ctaLabel: "Apply for Mentorship",
} as const;
