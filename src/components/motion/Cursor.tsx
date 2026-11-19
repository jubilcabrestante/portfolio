"use client";

import { useEffect, useRef } from "react";

/**
 * Dot + trailing ring, blended by difference so it reads on ink, paper, and teal.
 * Only for fine pointers without reduced motion; the system cursor returns everywhere else.
 */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced || !dot.current || !ring.current) return;

    const d = dot.current;
    const r = ring.current;
    document.documentElement.classList.add("has-cursor");

    let x = -100, y = -100, rx = -100, ry = -100, raf = 0;
    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      r.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      d.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest("a, button, [role='button'], label, [data-cursor]");
      const typing = target?.closest("input, textarea");
      r.dataset.hover = interactive && !typing ? "true" : "false";
      r.dataset.hidden = typing ? "true" : "false";
      d.dataset.hidden = typing ? "true" : "false";
    };
    const leave = () => {
      r.dataset.hidden = "true";
      d.dataset.hidden = "true";
    };
    const enter = () => {
      r.dataset.hidden = "false";
      d.dataset.hidden = "false";
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    document.addEventListener("pointerenter", enter);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      document.removeEventListener("pointerenter", enter);
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring hidden [@media(pointer:fine)]:block" aria-hidden="true" />
      <div ref={dot} className="cursor-dot hidden [@media(pointer:fine)]:block" aria-hidden="true" />
    </>
  );
}
