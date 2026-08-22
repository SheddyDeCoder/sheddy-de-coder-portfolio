"use client";

import { motion } from "framer-motion";
import { TMV_MISSION, TMV_ACTIVITIES } from "./techmindsverse.constants";

export function TMVMission() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <h2 className="font-display text-2xl font-bold text-text-primary md:text-3xl">
        {TMV_MISSION.heading}
      </h2>
      <p className="mt-4 font-body text-base leading-relaxed text-text-secondary">
        {TMV_MISSION.body}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {TMV_ACTIVITIES.map((item, i) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.04, ease: "easeOut" }}
            className="rounded-full border border-border px-3 py-1 font-body text-sm text-text-secondary"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </section>
  );
}