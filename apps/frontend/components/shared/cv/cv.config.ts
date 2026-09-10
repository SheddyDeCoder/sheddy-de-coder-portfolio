export interface CVOption {
  id: string;
  title: string;
  description: string;
  filePath: string | null;
}
export const CV_OPTIONS: CVOption[] = [
  {
    id: "frontend",
    title: "Frontend Developer CV",
    description: "Best for frontend engineering, React, Next.js and UI-focused roles.",
    filePath: "/cv/shedrack-nliam-frontend-developer.pdf",
  },
  {
    id: "fullstack",
    title: "Full-Stack Developer CV",
    description: "Best for full-stack, product engineering and broader software roles.",
    filePath: "/cv/shedrack-nliam-fullstack-developer.pdf",
  },
  {
    id: "media",
    title: "Social Media / Digital Media CV",
    description: "Best for social media, digital marketing, content and media roles.",
    filePath: "/cv/shedrack-nliam-social-media.pdf",
  },
];