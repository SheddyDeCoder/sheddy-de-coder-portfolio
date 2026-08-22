"use client";

import { motion } from "framer-motion";
import {
  SOCIAL_MEDIA_EXPERIENCE,
  SOCIAL_MEDIA_RESPONSIBILITIES,
  MEDIA_AV_EXPERIENCE,
} from "./about.constants";

export function ProfessionalExperience() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <h2 className="font-display text-2xl font-bold text-text-primary md:text-3xl">
        Social Media & Digital Growth Experience
      </h2>
      <p className="mt-3 max-w-2xl font-body text-sm text-text-secondary">
        Managed social media presence and digital growth for organizations and individuals across technology, faith, and business.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {SOCIAL_MEDIA_EXPERIENCE.map((entry, i) => (
          <motion.div
            key={entry.org}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" }}
            className="rounded-lg border border-border bg-surface/40 p-4"
          >
            <p className="font-body text-sm font-medium text-text-primary">
              {entry.org}
            </p>
            {"note" in entry && entry.note && (
              <p className="mt-1 font-body text-xs text-text-secondary">
                {entry.note}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {SOCIAL_MEDIA_RESPONSIBILITIES.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border px-3 py-1 font-body text-xs text-text-secondary"
          >
            {item}
          </span>
        ))}
      </div>

      <h3 className="mt-16 font-display text-xl font-bold text-text-primary">
        Media & Technical Production Experience
      </h3>
      <p className="mt-2 max-w-2xl font-body text-sm text-text-secondary">
        Includes projection and presentation systems — laptop-to-display setups using HDMI and television displays, not only traditional projectors.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {MEDIA_AV_EXPERIENCE.map((item) => (
          <span
            key={item}
            className="rounded-full border border-primary/30 px-3 py-1 font-body text-xs text-primary"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}