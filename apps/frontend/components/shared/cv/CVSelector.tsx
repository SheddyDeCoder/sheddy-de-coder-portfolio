"use client";

import { useState } from "react";
import { Download, Eye, X } from "lucide-react";
import { Button } from "@sheddy/ui";
import { CV_OPTIONS } from "./cv.config";

export function CVSelector() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outline" size="lg" onClick={() => setOpen(true)}>
        Download CV
      </Button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Choose a CV version"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div className="w-full max-w-lg rounded-xl border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-semibold text-text-primary">
                Choose a CV
              </h2>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="rounded-full p-1 text-text-secondary hover:text-primary"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {CV_OPTIONS.map((cv) => (
                <div key={cv.id} className="rounded-lg border border-border p-4">
                  <p className="font-body text-sm font-semibold text-text-primary">
                    {cv.title}
                  </p>
                  <p className="mt-1 font-body text-xs text-text-secondary">
                    {cv.description}
                  </p>
                  <div className="mt-3 flex gap-3">
                    {cv.filePath ? (
                      <>
                        <a
                          href={cv.filePath}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 font-body text-xs font-medium text-primary underline underline-offset-4"
                        >
                          <Eye className="h-3 w-3" /> View
                        </a>
                        <a
                          href={cv.filePath}
                          download
                          className="flex items-center gap-1 font-body text-xs font-medium text-primary underline underline-offset-4"
                        >
                          <Download className="h-3 w-3" /> Download
                        </a>
                      </>
                    ) : (
                      <span className="font-body text-xs text-text-secondary opacity-60">
                        Not yet available
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}