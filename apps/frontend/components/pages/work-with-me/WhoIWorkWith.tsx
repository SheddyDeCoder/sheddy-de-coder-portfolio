"use client";

import { motion } from "framer-motion";
import {
  WHO_I_WORK_WITH,
  WHO_I_WORK_WITH_NOTE,
} from "./work-with-me.constants";

export function WhoIWorkWith() {
  return (
    <section className="border-y border-border/60 bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="font-body text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Who I Work With
            </p>

            <h2 className="mt-3 font-display text-2xl font-bold text-text-primary md:text-3xl">
              For people building something meaningful.
            </h2>

            <p className="mt-4 max-w-xl font-body text-base leading-7 text-text-secondary">
              I work with people and teams who need technology, product
              thinking, or stronger digital visibility to move forward.
            </p>
          </div>

          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {WHO_I_WORK_WITH.map((audience, index) => (
                <motion.div
                  key={audience}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                  }}
                  className="flex items-center gap-3 rounded-lg border border-border bg-surface/50 px-4 py-4"
                >
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 shrink-0 rounded-full bg-primary"
                  />

                  <span className="font-body text-sm font-medium text-text-primary">
                    {audience}
                  </span>
                </motion.div>
              ))}
            </div>

            <p className="mt-6 font-body text-sm text-text-secondary">
              {WHO_I_WORK_WITH_NOTE}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}