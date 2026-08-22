"use client";

import { motion } from "framer-motion";
import { TOOLS_INVENTORY } from "./work-with-me.constants";

export function ToolsInventory() {
  const categories = Object.entries(TOOLS_INVENTORY);

  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <h2 className="font-display text-2xl font-bold text-text-primary md:text-3xl">
        Tools I Work With
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {categories.map(([category, tools], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
          >
            <h3 className="font-display text-sm font-semibold text-primary">
              {category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-md border border-border px-2 py-1 font-body text-xs text-text-secondary"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}