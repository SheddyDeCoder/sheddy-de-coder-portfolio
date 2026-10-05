"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@sheddy/ui";
import { POSITIONING } from "./work-with-me.constants";
import {
  CURRENT_AVAILABILITY,
  AVAILABILITY_LABELS,
} from "./work-with-me.config";
import { INTERNATIONAL_COLLABORATION } from "@/components/shared/availability";

export function WorkWithMeHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Lightweight background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl md:left-[72%] md:top-10 md:h-[520px] md:w-[520px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:py-24 lg:py-28">
        {/* Text */}
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="inline-flex rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 font-body text-xs font-medium text-primary"
          >
            {AVAILABILITY_LABELS[CURRENT_AVAILABILITY]}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
            className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            {POSITIONING.heading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
            className="mt-6 max-w-xl font-body text-base leading-7 text-text-secondary md:text-lg"
          >
            {POSITIONING.body}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22, ease: "easeOut" }}
            className="mt-4 max-w-lg font-body text-sm leading-6 text-text-secondary"
          >
            {INTERNATIONAL_COLLABORATION.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild>
              <a
                href="https://calendly.com/sheddydecoder"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Call
              </a>
            </Button>

            <Button asChild variant="outline">
              <Link href="/projects">Explore My Work</Link>
            </Button>
          </motion.div>
        </div>

        {/* Founder visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[460px]"
        >
          {/* Decorative orbit/line */}
          <div
            aria-hidden="true"
            className="absolute -inset-5 rounded-[2rem] border border-primary/10"
          />

          <div
            aria-hidden="true"
            className="absolute -right-4 -top-4 h-20 w-20 rounded-full border border-primary/20"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-5 -left-5 h-24 w-24 rounded-full border border-border"
          />

          <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />

            <Image
              src="/images/hero/founder-portrait.webp"
              alt="Shedrack Nliam — Sheddy De Coder"
              width={920}
              height={1100}
              priority
              className="h-auto w-full object-cover"
              sizes="(max-width: 768px) 92vw, 460px"
            />

            <div className="absolute bottom-5 left-5 rounded-lg border border-white/20 bg-black/55 px-4 py-3 backdrop-blur-sm">
              <p className="font-body text-xs uppercase tracking-[0.14em] text-white/70">
                SHEDDY DE CODER
              </p>
              <p className="mt-1 font-body text-sm font-medium text-white">
                Technology · Product · Visibility
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}