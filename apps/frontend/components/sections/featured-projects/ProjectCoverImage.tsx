"use client";

import { useState } from "react";
import Image from "next/image";

export function ProjectCoverImage({
  src,
  alt,
  projectName,
}:
 {
  src: string;
  alt: string;
  projectName: string;
}) 
{
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-lg border border-border bg-surface/50">
        <span className="font-display text-sm text-text-secondaryDark">
          {projectName}
        </span>
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}