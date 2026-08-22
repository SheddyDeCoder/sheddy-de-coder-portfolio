"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@sheddy/ui";
import { FIXED_PRICE_SERVICES } from "./work-with-me.constants";
import { PRICING_CONFIG } from "./work-with-me.config";

function formatPrice(value: number | null) {
  if (value === null) return "Starting From — Contact for Pricing";
  return `Starting From ₦${value.toLocaleString()}`;
}

export function FixedPriceServices() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <h2 className="font-display text-2xl font-bold text-text-primary md:text-3xl">
        Fixed Pricing Services
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {FIXED_PRICE_SERVICES.map((service, i) => (
          <motion.div
            key={service.key}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
            className="rounded-lg border border-border bg-surface/40 p-6"
          >
            <h3 className="font-display text-lg font-semibold text-text-primary">
              {service.title}
            </h3>
            {service.description && (
              <p className="mt-2 font-body text-sm text-text-secondary">
                {service.description}
              </p>
            )}
            <p className="mt-4 font-display text-sm font-semibold text-primary">
              {formatPrice(PRICING_CONFIG[service.key])}
            </p>
            {service.deliveryTime && (
              <p className="mt-1 font-body text-xs text-text-secondary">
                Delivery: {service.deliveryTime}
              </p>
            )}
            {service.idealFor && (
              <p className="mt-1 font-body text-xs text-text-secondary">
                Ideal for: {service.idealFor}
              </p>
            )}
            <Button asChild size="sm" className="mt-4">
              <Link href="/contact">Get Started</Link>
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}