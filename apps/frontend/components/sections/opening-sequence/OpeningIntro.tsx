"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { INTRO_SEQUENCE } from "./opening-sequence.constants";

const SESSION_KEY = "pbos-intro-seen";

export function OpeningIntro() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const seen = sessionStorage.getItem(SESSION_KEY);
    if (!seen) {
      setVisible(true);
      sessionStorage.setItem(SESSION_KEY, "true");
      const timer = setTimeout(() => setVisible(false), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-16 w-16"
          >
            {/* Reserved: brand logo mark. Real asset not yet provided. */}
          </motion.span>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="mt-6 font-display text-lg tracking-wide text-text-primary"
          >
            {INTRO_SEQUENCE.brandName}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2, ease: "easeOut" }}
            className="mt-2 font-body text-sm text-text-secondary"
          >
            {INTRO_SEQUENCE.tagline}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}