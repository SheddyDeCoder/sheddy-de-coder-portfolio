"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ECOSYSTEM_NODES } from "./mission.constants";

interface LinePath {
  key: string;
  d: string;
}

export function EcosystemPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [paths, setPaths] = useState<LinePath[]>([]);

  useEffect(() => {
    function computePaths() {
      const container = containerRef.current;
      const center = centerRef.current;
      if (!container || !center) return;

      const containerBox = container.getBoundingClientRect();
      const centerBox = center.getBoundingClientRect();
      const startX = centerBox.left + centerBox.width / 2 - containerBox.left;
      const startY = centerBox.bottom - containerBox.top;

      const next: LinePath[] = ECOSYSTEM_NODES.map((node, i) => {
        const el = nodeRefs.current[i];
        if (!el) return { key: node, d: "" };
        const box = el.getBoundingClientRect();
        const endX = box.left + box.width / 2 - containerBox.left;
        const endY = box.top - containerBox.top;
        const midY = startY + (endY - startY) * 0.5;
        return {
          key: node,
          d: `M ${startX} ${startY} C ${startX} ${midY}, ${endX} ${midY}, ${endX} ${endY}`,
        };
      });

      setPaths(next);
    }

    computePaths();
    window.addEventListener("resize", computePaths);
    const observer = new ResizeObserver(computePaths);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      window.removeEventListener("resize", computePaths);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 py-16"
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {paths.map((path, i) => (
          <motion.path
            key={path.key}
            d={path.d}
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            className="text-primary/25"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.05, ease: "easeOut" }}
          />
        ))}
      </svg>

      <motion.div
        ref={centerRef}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 rounded-full border border-primary/40 bg-surface px-6 py-3 font-display text-sm font-semibold text-primary md:text-base"
      >
        SHEDDY DE CODER
      </motion.div>

      <div className="relative z-10 grid grid-cols-3 gap-3 sm:grid-cols-3 md:grid-cols-3 md:gap-4">
        {ECOSYSTEM_NODES.map((node, i) => (
          <motion.div
            key={node}
            ref={(el) => {
              nodeRefs.current[i] = el;
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.05, ease: "easeOut" }}
            className="rounded-md border border-border bg-surface/50 px-3 py-2 text-center font-body text-xs text-text-secondaryDark md:text-sm"
          >
            {node}
          </motion.div>
        ))}
      </div>
    </div>
  );
}