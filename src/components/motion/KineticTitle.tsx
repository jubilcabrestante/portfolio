"use client";

import { useEffect, useRef, useState, type ElementType } from "react";
import { cn } from "@/lib/utils";

type Props = {
  lines: string[];
  as?: ElementType;
  className?: string;
  id?: string;
  /** start on mount instead of waiting to scroll into view (the hero) */
  immediate?: boolean;
  delay?: number;
};

/**
 * Each line rises out of a mask while Archivo's width axis stretches from condensed to full.
 * Text is fully visible without JS; the "armed" state is only applied once the script runs.
 */
export default function KineticTitle({ lines, as: Tag = "h2", className, id, immediate = false, delay = 0 }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<"idle" | "armed" | "in">("idle");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const node = ref.current;
    if (!node) return;
    if (immediate) {
      setState("armed");
      const t = window.setTimeout(() => setState("in"), 60 + delay);
      return () => window.clearTimeout(t);
    }
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) return; // already on screen at load: leave it still
    setState("armed");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("in");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [immediate, delay]);

  return (
    <Tag ref={ref} id={id} className={cn(className)} data-kinetic={state === "idle" ? undefined : state} aria-label={lines.join(" ")}>
      {lines.map((line, i) => (
        <span key={i} className="kline" aria-hidden="true" style={{ ["--i" as string]: i }}>
          <span>{line}</span>
        </span>
      ))}
    </Tag>
  );
}
