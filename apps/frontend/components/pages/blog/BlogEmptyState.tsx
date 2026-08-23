"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@sheddy/ui";
import { SITE_CONFIG } from "@/lib/seo/site-config";

export function BlogEmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mx-auto flex max-w-xl flex-col items-center px-6 py-20 text-center md:py-28"
    >
      <h2 className="font-display text-xl font-bold text-text-primary md:text-2xl">
        The next chapter is being written.
      </h2>
      <p className="mt-3 font-body text-sm text-text-secondary">
        Articles, founder insights, and build-in-public updates will appear here as they're published. In the meantime, follow along on{" "}
        <a
          href={SITE_CONFIG.sameAs[0]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-4"
        >
          LinkedIn
        </a>
        .
      </p>
      <Button asChild className="mt-6">
        <Link href="/projects">Explore Projects Instead</Link>
      </Button>
    </motion.div>
  );
}