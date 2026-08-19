"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT_HERO } from "./about.constants";

const QUESTIONS = [
  ABOUT_HERO.whoAmI,
  ABOUT_HERO.whyIBuild,
  ABOUT_HERO.whereAmIGoing,
] as const;

export function AboutHero() {
  const [portraitFailed, setPortraitFailed] = useState(false);

  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-20 md:flex-row md:items-start md:py-28">
      {!portraitFailed && (
        <div className="relative mx-auto aspect-[3/4] w-full max-w-xs shrink-0 overflow-hidden rounded-lg md:mx-0">
          <Image
            src="/images/about/founder-portrait-personal.webp"
            alt="Shedrack Nliam"
            fill
            className="object-cover"
            onError={() => setPortraitFailed(true)}
          />
        </div>
      )}

      <div className="flex-1">
        <p className="font-body text-sm uppercase tracking-wide text-primary">
          {ABOUT_HERO.eyebrow}
        </p>

        <div className="mt-6 space-y-10">
          {QUESTIONS.map((q, i) => (
            <motion.div
              key={q.question}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
            >
              <h2 className="font-display text-xl font-bold text-text-primaryDark md:text-2xl">
                {q.question}
              </h2>
              <p className="mt-2 font-body text-base leading-relaxed text-text-secondaryDark">
                {q.answer}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          className="mt-10 border-l-2 border-primary pl-4 font-body text-lg italic text-text-primaryDark"
        >
          {ABOUT_HERO.philosophyQuote}
        </motion.p>
      </div>
    </section>
  );
}