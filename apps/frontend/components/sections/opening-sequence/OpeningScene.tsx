"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@sheddy/ui";
import {
  OPENING_SCENE,
  OPENING_SCENE_PORTRAIT,
} from "./opening-sequence.constants";
import { CVSelector } from "@/components/shared/cv/CVSelector";

export function OpeningScene() {
  return (
    <section className="relative overflow-hidden px-6 py-16 md:px-16 md:py-24">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-center">
        <div className="grid w-full items-center gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-16 lg:gap-20">
          {/* Content */}
          <div className="order-2 flex flex-col items-start text-left md:order-1">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-5 font-body text-sm font-medium uppercase tracking-[0.16em] text-primary"
            >
              {OPENING_SCENE.eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="max-w-3xl font-display text-4xl font-bold leading-[1.04] tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {OPENING_SCENE.heading}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="mt-7 max-w-2xl font-body text-lg leading-8 text-text-primary md:text-xl"
            >
              {OPENING_SCENE.subheading}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: "easeOut",
              }}
              className="mt-4 max-w-2xl font-body text-base leading-7 text-text-secondary md:text-lg"
            >
              {OPENING_SCENE.positioning}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: "easeOut",
              }}
              className="mt-6"
            >
              <p className="font-body text-sm font-medium tracking-wide text-text-secondary">
                {OPENING_SCENE.supportingMessage}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                ease: "easeOut",
              }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button asChild size="lg">
                <a
                  href={OPENING_SCENE.primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {OPENING_SCENE.primaryCta.label}
                </a>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href={OPENING_SCENE.secondaryCta.href}>
                  {OPENING_SCENE.secondaryCta.label}
                </Link>
              </Button>

              <CVSelector location="opening_scene" />
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="order-1 flex justify-center md:order-2 md:justify-end"
          >
            <div className="relative aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-2xl md:max-w-md md:rounded-none">
              <Image
                src={OPENING_SCENE_PORTRAIT.src}
                alt={OPENING_SCENE_PORTRAIT.alt}
                fill
                priority
                sizes="(max-width: 768px) 280px, 420px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}