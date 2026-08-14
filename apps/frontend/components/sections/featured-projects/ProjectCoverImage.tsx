"use client";

import Image from "next/image";
import { useState } from "react";

export function ProjectCoverImage({
  src,
  name,
}: {
  src: string;
  name: string;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="flex aspect-[16/10] w-full items-center justify-center rounded-lg border border-border bg-surface">
        <span className="px-4 text-center font-display text-lg font-semibold text-text-secondaryDark">
          {name}
        </span>
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-border bg-surface">
      <Image
        src={src}
        alt={name}
        fill
        className="object-cover"
        onError={() => setErrored(true)}
      />
    </div>
  );
}