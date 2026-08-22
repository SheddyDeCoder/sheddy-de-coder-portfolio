"use client";

import { motion } from "framer-motion";
import { CONTACT_INTRO } from "./contact.constants";
import { CONTACT_EMAIL } from "@/components/shared/booking/booking.config";

export function ContactHero() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="font-display text-3xl font-bold text-text-primary md:text-5xl"
      >
        {CONTACT_INTRO.heading}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="mx-auto mt-4 max-w-xl font-body text-base text-text-secondary md:text-lg"
      >
        {CONTACT_INTRO.body}
      </motion.p>
      {CONTACT_EMAIL && (
        <motion.a
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-6 inline-block font-body text-sm font-medium text-primary underline underline-offset-4"
        >
          {CONTACT_EMAIL}
        </motion.a>
      )}
    </section>
  );
}