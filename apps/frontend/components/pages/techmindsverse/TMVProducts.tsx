"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TMV_PRODUCTS } from "./techmindsverse.constants";

export function TMVProducts() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <h2 className="font-display text-2xl font-bold text-text-primary md:text-3xl">
        Products
      </h2>
      <div className="mt-8 space-y-4">
        {TMV_PRODUCTS.map((product, i) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
            className="rounded-lg border border-border bg-surface/40 p-6"
          >
            <span className="rounded-full border border-primary/30 px-3 py-1 font-body text-xs text-primary">
              {product.status}
            </span>
            <h3 className="mt-3 font-display text-lg font-semibold text-text-primary">
              {product.name}
            </h3>
            <p className="mt-2 font-body text-sm text-text-secondary">
              {product.description}
            </p>
            <Link
              href="/projects/techmindsverse-os"
              className="mt-3 inline-block font-body text-sm text-primary underline underline-offset-4"
            >
              View Case Study
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}