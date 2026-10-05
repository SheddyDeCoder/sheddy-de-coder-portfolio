"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SERVICE_PROCESS } from "./work-with-me.constants";

const STEP_DESCRIPTIONS: Record<string, string> = {
  Idea: "Define the opportunity, problem, or goal.",
  Research: "Understand users, context, and what already exists.",
  "Product Strategy": "Shape the right solution and define what matters.",
  "Product Design": "Design the experience, structure, and interface.",
  Implementation: "Turn the product into a working digital experience.",
  SEO: "Build the technical foundation for search discovery.",
  Visibility: "Help the product become easier to find and understand.",
};

export function ServiceProcess() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = () => {
    const container = scrollRef.current;

    if (!container) {
      return;
    }

    const steps = Array.from(
      container.querySelectorAll<HTMLElement>("[data-process-step]")
    );

    if (!steps.length) {
      return;
    }

    const containerLeft = container.getBoundingClientRect().left;

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    steps.forEach((step, index) => {
      const distance = Math.abs(
        step.getBoundingClientRect().left - containerLeft
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) {
      return;
    }

    container.addEventListener("scroll", updateActiveIndex, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveIndex);

    return () => {
      container.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, []);

  const scrollToStep = (direction: "previous" | "next") => {
    const container = scrollRef.current;

    if (!container) {
      return;
    }

    const steps = Array.from(
      container.querySelectorAll<HTMLElement>("[data-process-step]")
    );

    const nextIndex =
      direction === "next"
        ? Math.min(activeIndex + 1, steps.length - 1)
        : Math.max(activeIndex - 1, 0);

    steps[nextIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });

    setActiveIndex(nextIndex);
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-body text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              My Approach
            </p>

            <h2 className="mt-3 font-display text-2xl font-bold text-text-primary md:text-3xl">
              From Idea to Visibility
            </h2>

            <p className="mt-4 font-body text-base leading-7 text-text-secondary">
              I don't start with code. I start by understanding the problem,
              shaping the right solution, building it, and making sure it can
              be discovered.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-body text-xs font-medium tabular-nums text-text-secondary">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(SERVICE_PROCESS.length).padStart(2, "0")}
            </span>

            <div className="hidden items-center gap-2 md:flex">
              <button
                type="button"
                onClick={() => scrollToStep("previous")}
                disabled={activeIndex === 0}
                aria-label="Previous process step"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-primary transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() => scrollToStep("next")}
                disabled={activeIndex === SERVICE_PROCESS.length - 1}
                aria-label="Next process step"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-primary transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="relative mt-12 overflow-x-auto pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Product development process"
      >
        <div className="pointer-events-none absolute bottom-6 left-0 top-0 z-10 w-8 bg-gradient-to-r from-background to-transparent md:w-16" />

        <div className="pointer-events-none absolute bottom-6 right-0 top-0 z-10 w-12 bg-gradient-to-l from-background to-transparent md:w-24" />

        <ol className="flex min-w-max px-6 md:px-[max(1.5rem,calc((100vw-72rem)/2))]">
          {SERVICE_PROCESS.map((step, index) => {
            const isActive = index === activeIndex;
            const isLast = index === SERVICE_PROCESS.length - 1;

            return (
              <motion.li
                key={step}
                data-process-step
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.05, 0.3),
                  ease: "easeOut",
                }}
                className="flex items-start snap-start"
              >
                <button
                  type="button"
                  onClick={() => {
                    const container = scrollRef.current;
                    const target = container?.querySelectorAll<HTMLElement>(
                      "[data-process-step]"
                    )[index];

                    target?.scrollIntoView({
                      behavior: "smooth",
                      block: "nearest",
                      inline: "start",
                    });

                    setActiveIndex(index);
                  }}
                  className="group w-[260px] text-left md:w-[300px]"
                  aria-label={`Go to ${step}`}
                >
                  <span
                    className={[
                      "flex h-10 w-10 items-center justify-center rounded-full border font-display text-sm font-semibold transition-all duration-300",
                      isActive
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-primary/40 text-primary group-hover:border-primary",
                    ].join(" ")}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p
                    className={[
                      "mt-5 font-display text-base font-semibold transition-colors duration-300 md:text-lg",
                      isActive
                        ? "text-text-primary"
                        : "text-text-secondary group-hover:text-text-primary",
                    ].join(" ")}
                  >
                    {step}
                  </p>

                  <p className="mt-2 max-w-[240px] font-body text-sm leading-6 text-text-secondary">
                    {STEP_DESCRIPTIONS[step]}
                  </p>
                </button>

                {!isLast && (
                  <div
                    aria-hidden="true"
                    className="mt-5 flex w-16 items-center md:w-24"
                  >
                    <span className="h-px w-full bg-border" />
                    <span className="-ml-1 text-xs text-border">→</span>
                  </div>
                )}
              </motion.li>
            );
          })}
        </ol>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-1.5">
          {SERVICE_PROCESS.map((step, index) => (
            <span
              key={step}
              className={[
                "h-1 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "w-6 bg-primary"
                  : "w-2 bg-border",
              ].join(" ")}
            />
          ))}
        </div>

        <p className="font-body text-xs text-text-secondary md:hidden">
          Swipe to explore →
        </p>

        <p className="hidden font-body text-xs text-text-secondary md:block">
          Scroll through the process →
        </p>
      </div>
    </section>
  );
}