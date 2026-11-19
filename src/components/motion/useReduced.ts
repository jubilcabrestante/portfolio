"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Reduced-motion preference that is safe to branch on during render: it reports `false`
 * until after mount, so the first client render always matches the server HTML.
 */
export function useReduced() {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted && !!reduced;
}
