export const ABOUT_INTRO = {
  heading: "Meet The Founder",
  subheading: "Technology Founder. Product Builder. Community Leader.",
  body:
    "I help founders, businesses, brands, and startups establish a strong online presence, build meaningful digital products, and scale through technology, design, and digital innovation.",
  cta: { label: "Read My Story", href: "/about" },
} as const;

export const ABOUT_PORTRAIT = {
  src: "/images/about/founder-portrait-personal.webp",
  alt: "Shedrack Nliam",
} as const;

// Short, real excerpts for the homepage preview only — per PBOS 6.51,
// this component avoids lengthy biography. Full essays are stored
// below in FULL_BIO for the dedicated About Experience page (later phase).
export const BIO_QUESTIONS = [
  {
    question: "Who am I?",
    answer:
      "I am Shedrack Nliam, founder of TechMindsVerse — a technology founder, product builder, software engineer, and community leader focused on using technology to solve meaningful problems.",
  },
  {
    question: "Why do I build?",
    answer:
      "I build because I believe technology should create opportunities, not just software.",
  },
  {
    question: "Where am I going?",
    answer:
      "I am building toward an ecosystem where products, education, community, and AI work together — that vision is TechMindsVerse.",
  },
] as const;

// Full three-question essays — reserved for the dedicated /about page.
export const FULL_BIO = {
  whoAmI:
    "I am Shedrack Nliam, founder of TechMindsVerse, a technology founder, product builder, software engineer, and community leader focused on using technology to solve meaningful problems. My journey began long before software engineering—I explored leadership, design, digital marketing, branding, AI, content creation, and entrepreneurship before specializing in product development. Today, I combine these disciplines to build products, communities, and systems that create long-term impact.",
  whyDoIBuild:
    "I build because I believe technology should create opportunities, not just software. Growing up, I experienced firsthand how lack of guidance, opportunities, and access can limit people's potential. Through HTCI (Human & Technology Collaborative Intelligence), I want to bridge the gap between people and technology by building products, educating future builders, and creating systems that help founders, businesses, and communities grow. My long-term vision is to contribute to reducing unemployment by making technology more practical, accessible, and collaborative across Africa and beyond.",
  whereAmIGoing:
    "I am building toward an ecosystem where products, education, community, and AI work together. That vision is TechMindsVerse. Today it begins with software products and community building. Tomorrow it grows into an ecosystem that empowers founders, developers, businesses, and future innovators through practical technology, collaboration, and intelligent systems.",
} as const;

export const PHILOSOPHY_QUOTE =
  "I believe technology is most powerful when it empowers people to build, solve meaningful problems, and create opportunities that outlive them.";

export const QUICK_TIMELINE: { year: string; description: string }[] = [
  { year: "2004", description: "Born in Ajegunle, Lagos State, Nigeria." },
  {
    year: "2014",
    description:
      "Started working at a young age through various hard labour jobs while developing an entrepreneurial mindset.",
  },
  {
    year: "2016",
    description:
      "Became President of the JET Club while actively participating in debating, arts, and science activities.",
  },
  {
    year: "2019",
    description:
      "Relocated to Imo State, became Senior Prefect, continued working while saving toward owning a laptop and pursuing technology.",
  },
  {
    year: "2020",
    description:
      "Completed secondary school (WAEC) while continuing various jobs and self-development.",
  },
  {
    year: "2022",
    description:
      "Began studies at Federal Polytechnic Nekede. Continued exploring technology, social media management, graphic design, and digital entrepreneurship.",
  },
  {
    year: "2023",
    description:
      "Received my first personal laptop, opening the door to deeper learning in software development.",
  },
  {
    year: "2024",
    description:
      "Industrial Training at the Nigerian Shippers' Council. Began structured self-learning in web development, blogging, HTML/CSS, AI, and content creation while documenting my journey.",
  },
  {
    year: "2025",
    description:
      "Rented my first apartment, enrolled in CodeFactory's Full-Stack Development program, began working as Social Media Manager at CodeFactory Innovation Hub (ongoing), launched the 30 Days of Coding Challenge, mentored aspiring developers, expanded client work, and laid the foundation for TechMindsVerse.",
  },
  {
    year: "2026",
    description:
      "Founded TechMindsVerse as a technology community and ecosystem, attended Founder Dojo, began building flagship products including TechMindsVerse OS, EIMB, and P2P Pay, while strengthening my personal brand and long-term vision.",
  },
];

export const LEADERSHIP_HIGHLIGHTS: string[] = [
  "Founder — TechMindsVerse",
  "President — Metallurgical & Materials Science Department, Federal Polytechnic Nekede",
  "President — JET Club",
  "Senior Prefect",
  "Community Builder — TechMindsVerse (105+ members)",
  "Mentor — Frontend Development (3 students mentored)",
   "Social Media Manager — CodeFactory Innovation Hub (2025–Present)",
  "Media & Technology Volunteer — Church Media Team",
  "Founder Dojo Fellow",
];

// Confirmed real values — Section 1.9 of the PBOS.
export const CORE_VALUES: string[] = [
  "Excellence",
  "Integrity",
  "Leadership",
  "Innovation",
  "Service",
  "Continuous Learning",
  "Community",
  "Collaboration",
  "Consistency",
  "Purpose",
  "Long-Term Thinking",
];

// Confirmed real categories — Section 07.A.2 of the PBOS.
export const SKILLS_SNAPSHOT: string[] = [
  "Technology",
  "Brand Strategy",
  "Digital Product Development",
  "Web Development",
  "Design",
  "Community Building",
  "Education",
  "Digital Innovation",
  "Founder Leadership",
  "Online Visibility",
];

// Hackathons intentionally omitted — confirmed value is 0, and per your
// instruction, a zero metric is left out entirely rather than shown as "0".
export const PERSONAL_IMPACT: { label: string; value: string | number }[] = [
  { label: "Community Members", value: 105 },
  { label: "Products Built", value: 3 },
  { label: "Client Projects", value: "10+" },
  { label: "Students Mentored", value: 3 },
  { label: "Workshops & Programs Attended", value: "5+" },
  { label: "Public Talks", value: 1 },
];