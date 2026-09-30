"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@sheddy/ui";
import { BOOKING_LINKS } from "@/components/shared/booking";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "TechMindsVerse", href: "/techmindsverse" },
  { label: "Blog", href: "/blog" },
  { label: "Work With Me", href: "/work-with-me" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-sm font-semibold tracking-wide text-text-primary transition-colors hover:text-primary"
          aria-label="SHEDDY DE CODER home"
        >
          SHEDDY DE CODER
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-6 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-text-secondary transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {mounted && (
            <button
              type="button"
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              aria-label={
                theme === "dark"
                  ? "Switch to light theme"
                  : "Switch to dark theme"
              }
              className="rounded-full border border-border p-2 text-text-secondary transition-colors hover:text-primary"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          )}

          {BOOKING_LINKS.scheduler ? (
            <a
              href={BOOKING_LINKS.scheduler}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block"
            >
              <Button size="lg">Book a Call</Button>
            </a>
          ) : (
            <Button size="lg" asChild className="hidden md:inline-flex">
              <Link href="/contact">Book a Call</Link>
            </Button>
          )}

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="rounded-full border border-border p-2 text-text-secondary transition-colors hover:text-primary md:hidden"
          >
            {mobileOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-border px-6 py-4 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-body text-sm text-text-secondary transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}

            {BOOKING_LINKS.scheduler ? (
              <a
                href={BOOKING_LINKS.scheduler}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-2"
              >
                <Button size="sm" className="w-full">
                  Book a Call
                </Button>
              </a>
            ) : (
              <Button asChild size="sm" className="mt-2 w-full">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                >
                  Book a Call
                </Link>
              </Button>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}