"use client";

import { motion } from "framer-motion";
import { Globe, Plane, Users } from "lucide-react";
import {
  REMOTE_AVAILABILITY,
  RELOCATION_AVAILABILITY,
  INTERNATIONAL_COLLABORATION,
} from "./availability.config";

const ITEMS = [
  { ...REMOTE_AVAILABILITY, icon: Globe },
  { ...INTERNATIONAL_COLLABORATION, icon: Users },
  { ...RELOCATION_AVAILABILITY, icon: Plane },
];

export function GlobalAvailabilityBlock() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {ITEMS.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
          className="rounded-lg border border-border bg-surface/40 p-4"
        >
          <item.icon className="h-5 w-5 text-primary" />
          <p className="mt-2 font-body text-sm font-medium text-text-primary">
            {item.label}
          </p>
          <p className="mt-1 font-body text-xs text-text-secondary">
            {item.body}
          </p>
        </motion.div>
      ))}
    </div>
  );
}