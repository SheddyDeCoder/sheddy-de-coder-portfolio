"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { GalleryImage } from "../projects.types";

function GalleryItem({ image }: { image: GalleryImage }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;

  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div className="relative aspect-video w-full">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      </div>
      {image.caption && (
        <p className="p-3 font-body text-xs text-text-secondary">
          {image.caption}
        </p>
      )}
    </div>
  );
}

export function CaseStudyGallery({ images }: { images?: GalleryImage[] }) {
  if (!images || images.length === 0) return null;

  return (
    <section className="mx-auto max-w-4xl px-6 py-10">
      <h2 className="font-display text-xl font-bold text-text-primary md:text-2xl">
        Visual Walkthrough
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {images.map((image, i) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
          >
            <GalleryItem image={image} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}