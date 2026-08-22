"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, FolderOpen, Download, Users, Linkedin } from "lucide-react";
import { QUICK_ACTIONS } from "./opening-sequence.constants";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "Book a Call": Calendar,
  "View Projects": FolderOpen,
  "Download CV": Download,
  "Join TechMindsVerse": Users,
  "Follow on LinkedIn": Linkedin,
};

export function QuickActionPanel() {
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    function handleScroll() {
      setExpanded(window.scrollY < 200);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const actions = QUICK_ACTIONS.filter((a) => a.href !== null);

  return (
    <motion.div
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(window.scrollY < 200)}
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2"
    >
      <AnimatePresence initial={false}>
        {expanded &&
          actions.map((action, i) => {
            const Icon = ICONS[action.label];
            return (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                transition={{ duration: 0.2, delay: i * 0.03 }}
              >
                <Link
                  href={action.href as string}
                  className="flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-2 font-body text-sm text-text-secondary backdrop-blur-sm hover:text-primary"
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  {action.label}
                </Link>
              </motion.div>
            );
          })}
      </AnimatePresence>

      {!expanded && (
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => setExpanded(true)}
          aria-label="Open quick actions"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface/90 text-primary backdrop-blur-sm"
        >
          <Calendar className="h-5 w-5" />
        </motion.button>
      )}
    </motion.div>
  );
}