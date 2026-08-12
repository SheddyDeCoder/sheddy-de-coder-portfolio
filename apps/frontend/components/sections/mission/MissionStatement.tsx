"use client";

import { motion } from "framer-motion";
import { MISSION_STATEMENT } from "./mission.constants";

const EMPHASIZED_WORDS = [
  "Technology",
  "empowers",
  "founders",
  "innovation",
  "communities",
  "meaningful",
];

export function MissionStatement() {
  const words = MISSION_STATEMENT.text.split(" ");

  return (
    <section className="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center md:py-32">
      <p className="font-display text-2xl leading-snug text-text-primaryDark md:text-4xl">
        {words.map((word, i) => {
          const clean = word.replace(/[.,]/g, "");
          const isEmphasized = EMPHASIZED_WORDS.includes(clean);
          return (
            <motion.span
              key={`${word}-${i}`}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" }}
              className={
                isEmphasized
                  ? "text-primary"
                  : "text-text-primaryDark"
              }
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </p>
    </section>
  );
}