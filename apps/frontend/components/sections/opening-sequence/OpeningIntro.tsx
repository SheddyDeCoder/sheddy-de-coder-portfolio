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

      const timer = window.setTimeout(() => {
        setVisible(false);
      }, 3000);

      return () => window.clearTimeout(timer);
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
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex h-16 w-16 items-center justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/branding/logo-mark.png"
              alt="SHEDDY DE CODER"
              className="h-16 w-16 object-contain"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="mt-6 font-display text-lg tracking-wide text-text-primary"
          >
            {INTRO_SEQUENCE.brandName}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="mt-2 font-body text-sm text-text-secondary"
          >
            {INTRO_SEQUENCE.tagline}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}