"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@sheddy/ui";
import {
  OPENING_SCENE,
  OPENING_SCENE_PORTRAIT,
} from "./opening-sequence.constants";

export function OpeningScene() {
  return (
    <section className="relative flex min-h-screen flex-col-reverse items-center overflow-hidden px-6 py-16 md:flex-row md:px-16">
      <div className="relative z-10 flex flex-1 flex-col items-start gap-6 text-left">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display text-3xl font-bold text-text-primary md:text-5xl"
        >
          {OPENING_SCENE.heading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="font-body text-base text-primary md:text-lg"
        >
          {OPENING_SCENE.subheading}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="max-w-xl font-body text-base text-text-secondary md:text-lg"
        >
          {OPENING_SCENE.positioning}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          className="font-body text-base italic text-text-secondary"
        >
          {OPENING_SCENE.supportingMessage}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mt-4 flex flex-wrap items-center gap-4"
        >
          <Button asChild size="lg">
            <Link href={OPENING_SCENE.primaryCta.href}>
              {OPENING_SCENE.primaryCta.label}
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={OPENING_SCENE.secondaryCta.href}>
              {OPENING_SCENE.secondaryCta.label}
            </Link>
          </Button>
          <Link
            href={OPENING_SCENE.tertiaryCta.href}
            className="font-body text-sm text-text-secondary underline underline-offset-4 hover:text-primary"
          >
            {OPENING_SCENE.tertiaryCta.label}
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mb-10 flex flex-1 items-center justify-center md:mb-0"
      >
        <div className="relative aspect-[3/4] w-full max-w-md">
          <Image
            src={OPENING_SCENE_PORTRAIT.src}
            alt={OPENING_SCENE_PORTRAIT.alt}
            fill
            priority
            className="object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}