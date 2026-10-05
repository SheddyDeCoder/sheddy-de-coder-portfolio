"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@sheddy/ui";
import { FIXED_PRICE_SERVICES } from "./work-with-me.constants";
import { PRICING_CONFIG, type PriceValue } from "./work-with-me.config";

function formatPrice(value: PriceValue) {
  if (value.usd === null && value.ngn === null) {
    return "Contact for Pricing";
  }

  const parts: string[] = [];

  if (value.ngn !== null) {
    parts.push(`₦${value.ngn.toLocaleString()}+`);
  }

  if (value.usd !== null) {
    parts.push(`$${value.usd.toLocaleString()}+`);
  }

  return parts.join(" / ");
}

function ProductVisual() {
  return (
    <div className="relative h-36 overflow-hidden rounded-xl border border-primary/10 bg-primary/[0.04]">
      <div className="absolute left-8 top-7 h-16 w-28 rounded-lg border border-primary/20 bg-background/80 shadow-sm" />
      <div className="absolute left-12 top-11 h-2 w-12 rounded-full bg-primary/20" />
      <div className="absolute left-12 top-17 h-2 w-20 rounded-full bg-border" />

      <div className="absolute right-8 top-5 h-24 w-24 rounded-xl border border-primary/20 bg-surface/80 shadow-sm">
        <div className="absolute left-4 top-4 h-8 w-8 rounded-lg bg-primary/10" />
        <div className="absolute bottom-4 left-4 h-2 w-12 rounded-full bg-border" />
        <div className="absolute bottom-8 left-4 h-2 w-8 rounded-full bg-primary/20" />
      </div>

      <div className="absolute bottom-4 left-7 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-primary" />
        <span className="h-px w-14 bg-primary/20" />
        <span className="h-2 w-2 rounded-full border border-primary/40" />
      </div>
    </div>
  );
}

function WebVisual() {
  return (
    <div className="relative h-36 overflow-hidden rounded-xl border border-border bg-surface/60">
      <div className="absolute inset-x-6 top-6 overflow-hidden rounded-lg border border-border bg-background shadow-sm">
        <div className="flex h-5 items-center gap-1.5 border-b border-border px-3">
          <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-border" />
          <span className="h-1.5 w-1.5 rounded-full bg-border" />
        </div>

        <div className="grid grid-cols-[1fr_0.7fr] gap-3 p-4">
          <div>
            <div className="h-2 w-20 rounded-full bg-primary/20" />
            <div className="mt-2 h-2 w-28 rounded-full bg-border" />
            <div className="mt-5 h-8 w-20 rounded-md bg-primary/10" />
          </div>

          <div className="rounded-md border border-border bg-surface/60" />
        </div>
      </div>
    </div>
  );
}

function SearchVisual() {
  return (
    <div className="relative h-36 overflow-hidden rounded-xl border border-primary/10 bg-primary/[0.03]">
      <div className="absolute left-7 right-7 top-7 flex h-10 items-center gap-3 rounded-full border border-border bg-background px-4 shadow-sm">
        <span className="h-3 w-3 rounded-full border border-primary/50" />
        <span className="h-2 w-24 rounded-full bg-border" />
        <span className="ml-auto h-2 w-8 rounded-full bg-primary/20" />
      </div>

      <div className="absolute bottom-6 left-9 h-14 w-28">
        <svg
          viewBox="0 0 120 60"
          className="h-full w-full"
          aria-hidden="true"
        >
          <path
            d="M5 52 L28 42 L47 45 L68 25 L88 30 L115 7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary/50"
          />
          <circle cx="115" cy="7" r="4" className="fill-primary" />
        </svg>
      </div>

      <div className="absolute bottom-7 right-8 flex gap-1.5">
        <span className="h-5 w-2 rounded-full bg-primary/20" />
        <span className="h-8 w-2 rounded-full bg-primary/35" />
        <span className="h-11 w-2 rounded-full bg-primary/55" />
        <span className="h-14 w-2 rounded-full bg-primary/75" />
      </div>
    </div>
  );
}

function BrandVisual() {
  return (
    <div className="relative h-36 overflow-hidden rounded-xl border border-border bg-surface/60">
      <div className="absolute left-7 top-5 h-24 w-24 rounded-xl border border-primary/15 bg-background shadow-sm">
        <div className="absolute left-4 top-4 h-10 w-10 rounded-full border border-primary/30 bg-primary/5" />
        <div className="absolute bottom-5 left-4 h-2 w-12 rounded-full bg-primary/20" />
        <div className="absolute bottom-9 left-4 h-2 w-16 rounded-full bg-border" />
      </div>

      <div className="absolute right-7 top-7 w-28">
        <div className="h-2 w-20 rounded-full bg-primary/25" />
        <div className="mt-3 h-2 w-28 rounded-full bg-border" />
        <div className="mt-2 h-2 w-24 rounded-full bg-border" />
        <div className="mt-5 h-7 w-16 rounded-md border border-primary/20 bg-primary/5" />
      </div>
    </div>
  );
}

function LandingVisual() {
  return (
    <div className="relative h-36 overflow-hidden rounded-xl border border-border bg-surface/60">
      <div className="absolute left-8 right-8 top-6 rounded-lg border border-border bg-background p-4 shadow-sm">
        <div className="h-2 w-16 rounded-full bg-primary/25" />
        <div className="mt-3 h-2 w-32 rounded-full bg-border" />

        <div className="mt-5 flex items-center gap-3">
          <div className="h-8 w-20 rounded-md bg-primary/10" />
          <div className="h-8 w-16 rounded-md border border-border" />
        </div>
      </div>

      <div className="absolute bottom-4 right-10 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-primary" />
        <span className="h-px w-10 bg-primary/25" />
        <span className="text-xs text-primary/60">CTA</span>
      </div>
    </div>
  );
}

function ServiceVisual({ serviceKey }: { serviceKey: string }) {
  switch (serviceKey) {
    case "productDevelopment":
      return <ProductVisual />;
    case "webDevelopment":
      return <WebVisual />;
    case "seoSearchVisibility":
      return <SearchVisual />;
    case "personalBrandWebsites":
      return <BrandVisual />;
    case "landingPages":
      return <LandingVisual />;
    default:
      return null;
  }
}

export function FixedPriceServices() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = () => {
    const container = scrollRef.current;

    if (!container) {
      return;
    }

    const cards = Array.from(
      container.querySelectorAll<HTMLElement>("[data-service-card]")
    );

    if (!cards.length) {
      return;
    }

    const containerLeft = container.getBoundingClientRect().left;

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const distance = Math.abs(
        card.getBoundingClientRect().left - containerLeft
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

  const scrollToCard = (direction: "previous" | "next") => {
    const container = scrollRef.current;

    if (!container) {
      return;
    }

    const cards = Array.from(
      container.querySelectorAll<HTMLElement>("[data-service-card]")
    );

    const nextIndex =
      direction === "next"
        ? Math.min(activeIndex + 1, cards.length - 1)
        : Math.max(activeIndex - 1, 0);

    cards[nextIndex]?.scrollIntoView({
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
              Featured Services
            </p>

            <h2 className="mt-3 font-display text-2xl font-bold text-text-primary md:text-3xl">
              Build what matters. Grow what you build.
            </h2>

            <p className="mt-4 font-body text-base leading-7 text-text-secondary">
              Focused services for turning ideas into useful digital products
              and improving how your digital presence is discovered and
              understood.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-body text-xs font-medium tabular-nums text-text-secondary">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(FIXED_PRICE_SERVICES.length).padStart(2, "0")}
            </span>

            <div className="hidden items-center gap-2 md:flex">
              <button
                type="button"
                onClick={() => scrollToCard("previous")}
                disabled={activeIndex === 0}
                aria-label="Previous service"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-primary transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() => scrollToCard("next")}
                disabled={activeIndex === FIXED_PRICE_SERVICES.length - 1}
                aria-label="Next service"
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
        className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 pl-6 pr-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:pl-[max(1.5rem,calc((100vw-72rem)/2))] md:pr-[max(1.5rem,calc((100vw-72rem)/2))]"
        aria-label="Featured services"
      >
        {FIXED_PRICE_SERVICES.map((service, index) => {
          const isPrimary = index === 0;

          return (
            <motion.article
              key={service.key}
              data-service-card
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.4,
                delay: Math.min(index * 0.06, 0.24),
                ease: "easeOut",
              }}
              whileHover={{ y: -4 }}
              className={[
                "group relative w-[calc(100vw-3rem)] max-w-[430px] shrink-0 snap-start overflow-hidden rounded-2xl border p-5 transition-colors duration-300 sm:w-[430px] md:p-6",
                isPrimary
                  ? "border-primary/25 bg-primary/[0.035]"
                  : "border-border bg-surface/50 hover:border-primary/20",
              ].join(" ")}
            >
              {isPrimary && (
                <div className="absolute right-5 top-5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                  Primary Service
                </div>
              )}

              <div className="flex min-h-[450px] flex-col">
                <div className="mb-6 flex items-center justify-between pr-32">
                  <span className="font-body text-xs font-medium tabular-nums tracking-[0.14em] text-text-secondary">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="font-body text-[10px] font-medium uppercase tracking-[0.14em] text-text-secondary">
                    {isPrimary ? "Build" : index === 2 ? "Grow" : "Build"}
                  </span>
                </div>

                <motion.div
                  className="transition-transform duration-500 group-hover:scale-[1.015]"
                >
                  <ServiceVisual serviceKey={service.key} />
                </motion.div>

                <div className="mt-6">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-text-primary md:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-md font-body text-sm leading-6 text-text-secondary">
                    {service.description}
                  </p>
                </div>

                <div className="mt-auto pt-8">
                  <p className="font-body text-[10px] font-medium uppercase tracking-[0.14em] text-text-secondary">
                    Starting from
                  </p>

                  <p className="mt-1 font-display text-lg font-semibold text-primary">
                    {formatPrice(PRICING_CONFIG[service.key])}
                  </p>

                  <Button asChild size="sm" className="mt-5">
                    <Link href="/contact">Get Started →</Link>
                  </Button>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="mx-auto mt-2 flex max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-1.5" aria-label="Service progress">
          {FIXED_PRICE_SERVICES.map((service, index) => (
            <span
              key={service.key}
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
          Scroll to explore
        </p>
      </div>

      <div className="mx-auto mt-5 max-w-6xl px-6">
        <p className="font-body text-xs leading-5 text-text-secondary">
          Final pricing depends on scope, complexity, features, timeline, and
          project requirements.
        </p>
      </div>
    </section>
  );
}