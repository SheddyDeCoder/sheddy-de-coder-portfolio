"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@sheddy/ui";
import { TMV_COMMUNITY, TMV_CTA } from "./techmindsverse.constants";

export function TMVCommunityCTA() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="font-display text-3xl font-bold text-primary md:text-4xl"
      >
        {TMV_COMMUNITY.memberCount}+
      </motion.p>
      <p className="mt-2 font-body text-sm text-text-secondary">
        {TMV_COMMUNITY.body}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button asChild size="lg">
          <Link href={TMV_CTA.joinHref}>{TMV_CTA.joinLabel}</Link>
        </Button>
        <Button variant="outline" size="lg" disabled aria-disabled="true">
          {TMV_CTA.visitLabel} — Coming Soon
        </Button>
      </div>
    </section>
  );
}