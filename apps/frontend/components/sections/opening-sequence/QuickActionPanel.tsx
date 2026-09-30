"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  FolderOpen,
  Linkedin,
  MoreHorizontal,
  X,
} from "lucide-react";
import { QUICK_ACTIONS } from "./opening-sequence.constants";
import { CVSelector } from "@/components/shared/cv/CVSelector";

const ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  "Book a Call": Calendar,
  "View Projects": FolderOpen,
  "Download CV": FolderOpen,
  "Follow on LinkedIn": Linkedin,
};

export function QuickActionPanel() {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY < 700);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!visible) return null;

  const pillClass =
    "flex items-center gap-2 rounded-full border border-border bg-surface/95 px-4 py-2.5 font-body text-sm text-text-secondary shadow-sm backdrop-blur-md transition-colors hover:text-primary";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-40 md:bottom-6 md:right-6"
    >
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{
              opacity: 0,
              y: 8,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 8,
              scale: 0.98,
            }}
            transition={{ duration: 0.2 }}
            className="mb-2 flex flex-col items-end gap-2"
          >
            {QUICK_ACTIONS.map((action) => {
              const Icon = ICONS[action.label];
              const isCV = action.label === "Download CV";

              return (
                <motion.div
                  key={action.label}
                  initial={{
                    opacity: 0,
                    x: 8,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: 8,
                  }}
                >
                  {isCV ? (
                    <div className={pillClass}>
                      {Icon && <Icon className="h-4 w-4" />}
                      <CVSelector location="quick_actions" />
                    </div>
                  ) : action.href.startsWith("http") ? (
                    <a
                      href={action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={pillClass}
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                      {action.label}
                    </a>
                  ) : (
                    <Link
                      href={action.href}
                      className={pillClass}
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                      {action.label}
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setExpanded((open) => !open)}
        aria-expanded={expanded}
        aria-label={
          expanded
            ? "Close quick actions"
            : "Open quick actions"
        }
        className="ml-auto flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/95 text-primary shadow-sm backdrop-blur-md transition-colors hover:text-text-primary"
      >
        {expanded ? (
          <X className="h-5 w-5" />
        ) : (
          <MoreHorizontal className="h-5 w-5" />
        )}
      </button>
    </motion.div>
  );
}