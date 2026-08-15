"use client";

import { motion } from "framer-motion";
import { BIO_QUESTIONS } from "./about-preview.constants";

export function AboutBio() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {BIO_QUESTIONS.map((item, i) => (
        <motion.div
          key={item.question}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
        >
          <h4 className="font-display text-sm font-semibold text-primary">
            {item.question}
          </h4>
          <p className="mt-2 font-body text-sm text-text-secondaryDark">
            {item.answer}
          </p>
        </motion.div>
      ))}
    </div>
  );
}