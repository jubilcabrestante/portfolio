import { cn } from "@/lib/utils";

/*
 * The Dzypher mark, redrawn from assets/dzypher-logo-180.png on its 180-unit grid:
 * a D (bowl radius 56, centred at 89,90) split by a Z-shaped channel 11.5 units wide.
 * Upper stroke is paper, lower stroke teal.
 */
const UPPER = "M34 34H89A56 56 0 0 1 142.7 106H81L122.45 61.5H34Z";
const LOWER = "M34 73H96L55 117H138.1A56 56 0 0 1 89 146H34Z";

type MarkProps = {
  className?: string;
  /** Draw the ink app-icon tile behind the mark (use on light grounds). */
  tile?: boolean;
};

export function LogoMark({ className, tile = true }: MarkProps) {
  return (
    <svg
      viewBox={tile ? "0 0 180 180" : "30 30 119 120"}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {tile && <rect width="180" height="180" rx="42" fill="#0e1117" />}
      <path d={UPPER} fill="#f5f7fa" />
      <path d={LOWER} fill="#2dd4bf" />
    </svg>
  );
}

type LogoProps = {
  className?: string;
  /** "light" sits on white (tiled mark, ink wordmark); "dark" sits on ink. */
  tone?: "light" | "dark";
};

export function Logo({ className, tone = "light" }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark tile={tone === "light"} className={tone === "light" ? "size-8" : "size-7"} />
      <span
        className={cn(
          "text-[1.3125rem] font-[800] leading-none tracking-[-0.025em] [font-stretch:108%]",
          tone === "light" ? "text-ink" : "text-paper",
        )}
      >
        Dzypher
      </span>
    </span>
  );
}
