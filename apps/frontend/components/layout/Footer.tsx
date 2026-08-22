import Link from "next/link";
import { SocialConnection } from "@/components/sections/latest-updates-cta";

const QUICK_LINKS = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Work With Me", href: "/work-with-me" },
  { label: "Blog", href: "/blog" },
  { label: "TechMindsVerse", href: "/techmindsverse" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <p className="font-display text-sm font-semibold text-text-primary">
          SHEDDY DE CODER
        </p>

        <nav className="flex flex-wrap justify-center gap-6">
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-text-secondary hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <SocialConnection />

        <p className="font-body text-xs text-text-secondary">
          © {year} Shedrack Nliam — SHEDDY DE CODER. All rights reserved.
        </p>
      </div>
    </footer>
  );
}