"use client";

import { motion } from "framer-motion";
import { TMV_HERO } from "./techmindsverse.constants";

export function TMVHero() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="font-display text-3xl font-bold text-text-primary md:text-5xl"
      >
        {TMV_HERO.heading}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="mt-4 font-body text-lg font-medium text-primary"
      >
        {TMV_HERO.tagline}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="mx-auto mt-4 max-w-xl font-body text-base text-text-secondary md:text-lg"
      >
        {TMV_HERO.body}
      </motion.p>
    </section>
  );
}