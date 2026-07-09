"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type FlipBookProps = {
  /** Page faces, in reading order. Padded to an even count internally. */
  pages: React.ReactNode[];
  ariaLabel?: string;
  className?: string;
};

const FLIP_MS = 950;

/**
 * A bound volume: pages are grouped into leaves (front/back), each leaf
 * rotating around the spine in 3D. Click a page or use the controls to turn.
 */
const FlipBook = ({ pages, ariaLabel, className }: FlipBookProps) => {
  const leaves = useMemo(() => {
    const padded = pages.length % 2 === 0 ? pages : [...pages, null];
    const result: [React.ReactNode, React.ReactNode][] = [];
    for (let i = 0; i < padded.length; i += 2) {
      result.push([padded[i], padded[i + 1]]);
    }
    return result;
  }, [pages]);

  const total = leaves.length;
  const [flipped, setFlipped] = useState(0);
  const [boosted, setBoosted] = useState<number | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  // Keep the turning leaf above both stacks for the duration of the flip.
  const boost = (leaf: number) => {
    setBoosted(leaf);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setBoosted(null), FLIP_MS);
  };

  const next = () => {
    if (flipped >= total) return;
    boost(flipped);
    setFlipped(flipped + 1);
  };

  const prev = () => {
    if (flipped <= 0) return;
    boost(flipped - 1);
    setFlipped(flipped - 1);
  };

  // Center the visible half: the cover sits in the book's right half, so a
  // closed book slides left; a finished book (left half visible) slides right.
  const shift = flipped === 0 ? "-25%" : flipped === total ? "25%" : "0%";

  const spreadLabel =
    flipped === 0
      ? "COVER"
      : flipped === total
        ? "BACK COVER"
        : `PP. ${flipped * 2}–${flipped * 2 + 1} OF ${pages.length}`;

  return (
    <div className={className}>
      <div
        className="book-scene outline-none"
        role="group"
        aria-label={ariaLabel ?? "Project book"}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") next();
          if (e.key === "ArrowLeft") prev();
        }}
      >
        <div
          className="book aspect-[3/2] w-full"
          style={{ transform: `translateX(${shift})` }}
        >
          {flipped > 0 && <div className="book-board board-left" />}
          {flipped < total && <div className="book-board board-right" />}

          {leaves.map(([front, back], i) => {
            const isFlipped = i < flipped;
            const zIndex = boosted === i ? total + 2 : isFlipped ? i + 1 : total - i;
            const isTopOfStack = i === flipped || i === flipped - 1;

            return (
              <div
                key={i}
                className={cn("book-leaf", isFlipped && "flipped", isTopOfStack && "cursor-pointer")}
                style={{ zIndex }}
                onClick={() => {
                  if (i === flipped) next();
                  else if (i === flipped - 1) prev();
                }}
              >
                <div className="leaf-face face-front">{front}</div>
                <div className="leaf-face face-back">{back}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          onClick={prev}
          disabled={flipped === 0}
          className="border border-ink/30 px-3.5 py-1.5 font-label text-[11px] font-bold uppercase tracking-[0.08em] transition-colors enabled:hover:border-ink enabled:hover:bg-ink enabled:hover:text-paper disabled:opacity-30"
          aria-label="Previous page"
        >
          ‹ Back
        </button>
        <span className="min-w-32 text-center font-label text-[11px] font-semibold uppercase tracking-[0.08em] text-faded">
          {spreadLabel}
        </span>
        <button
          onClick={next}
          disabled={flipped === total}
          className="border border-ink/30 px-3.5 py-1.5 font-label text-[11px] font-bold uppercase tracking-[0.08em] transition-colors enabled:hover:border-ink enabled:hover:bg-ink enabled:hover:text-paper disabled:opacity-30"
          aria-label="Next page"
        >
          Turn ›
        </button>
      </div>
      <p className="mt-2 text-center font-sketch text-lg text-faded">
        click the pages to flip through ↴
      </p>
    </div>
  );
};

export default FlipBook;
