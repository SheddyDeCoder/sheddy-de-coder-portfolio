"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BLOG_POSTS, BLOG_CATEGORIES } from "./blog.constants";
import { BlogEmptyState } from "./BlogEmptyState";

export function BlogListing() {
  if (BLOG_POSTS.length === 0) {
    return <BlogEmptyState />;
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <div className="flex flex-wrap gap-2">
        {BLOG_CATEGORIES.map((category) => (
          <span
            key={category}
            className="rounded-full border border-border px-3 py-1 font-body text-xs text-text-secondary"
          >
            {category}
          </span>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {BLOG_POSTS.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="block rounded-lg border border-border bg-surface/40 p-6 transition-colors hover:border-primary"
            >
              <span className="font-body text-xs text-primary">{post.category}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-text-primary">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-2 font-body text-sm text-text-secondary">
                {post.excerpt}
              </p>
              <p className="mt-3 font-body text-xs text-text-secondary">
                {post.readingTimeMinutes} min read
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}