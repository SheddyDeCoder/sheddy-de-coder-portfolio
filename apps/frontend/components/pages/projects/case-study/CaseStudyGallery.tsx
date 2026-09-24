"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { GalleryImage } from "../projects.types";

function GalleryItem({
  image,
  featured = false,
}: {
  image: GalleryImage;
  featured?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;

  return (
    <figure
      className={`overflow-hidden rounded-2xl border border-border bg-surface ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div
        className={`relative w-full ${
          featured ? "aspect-[16/8]" : "aspect-video"
        }`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={
            featured
              ? "(max-width: 768px) 100vw, 1200px"
              : "(max-width: 768px) 100vw, 50vw"
          }
          className="object-cover transition-transform duration-500 hover:scale-[1.02]"
          onError={() => setFailed(true)}
        />
      </div>

      {image.caption && (
        <figcaption className="border-t border-border px-4 py-3 font-body text-xs leading-5 text-text-secondary">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}

export function CaseStudyGallery({ images }: { images?: GalleryImage[] }) {
  if (!images || images.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <div className="mb-8">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          Visual Walkthrough
        </p>
        <h2 className="mt-2 font-display text-2xl font-bold text-text-primary md:text-3xl">
          Inside the project
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {images.map((image, index) => (
          <motion.div
            key={`${image.src}-${index}`}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <GalleryItem image={image} featured={index === 0} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}