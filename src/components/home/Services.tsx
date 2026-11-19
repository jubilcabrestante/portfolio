"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import KineticTitle from "@/components/motion/KineticTitle";
import ZSection from "@/components/motion/ZSection";
import { Icon } from "@/components/ui/Icon";
import { coreServices, supportServices } from "@/data/site";
import { cn } from "@/lib/utils";
import { useReduced } from "@/components/motion/useReduced";

const ease = [0.16, 1, 0.3, 1] as const;

/** Steps through `count` states while the ref is on screen; frozen for reduced motion. */
function useLoop(ref: RefObject<HTMLElement | null>, count: number, interval: number) {
  const inView = useInView(ref, { amount: 0.35 });
  const reduced = useReduced();
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (!inView || reduced) return;
    const timer = window.setInterval(() => setStep((s) => (s + 1) % count), interval);
    return () => window.clearInterval(timer);
  }, [inView, reduced, count, interval]);
  return { step, inView, reduced: !!reduced };
}

function Tile({ tone = "light", className, children }: { tone?: "light" | "ink" | "teal"; className?: string; children: ReactNode }) {
  return (
    <article
      className={cn(
        "relative flex flex-col overflow-hidden rounded-card p-6 sm:p-8",
        tone === "light" && "bg-white ring-1 ring-rule-light",
        tone === "ink" && "bg-ink text-paper",
        tone === "teal" && "on-teal bg-teal text-ink",
        className,
      )}
    >
      {children}
    </article>
  );
}

/* ---------- Web apps: one layout, every screen ---------- */
const SCREENS = [
  { name: "Desktop", px: 1440, width: "100%", cols: 3 },
  { name: "Tablet", px: 834, width: "68%", cols: 2 },
  { name: "Phone", px: 390, width: "40%", cols: 1 },
];
const MODULES = [
  { k: "Orders", v: "38" },
  { k: "Sales", v: "₱5,065" },
  { k: "Customers", v: "10" },
  { k: "Stock", v: "124" },
  { k: "Rewards", v: "51 pts" },
  { k: "Riders", v: "4 online" },
];

function ResponsiveBrowser() {
  const ref = useRef<HTMLDivElement>(null);
  const { step } = useLoop(ref, SCREENS.length, 2600);
  const screen = SCREENS[step];
  return (
    <div ref={ref} className="mt-8 flex flex-1 flex-col" aria-hidden="true">
      <div className="mb-3 flex items-center justify-between text-[0.8125rem] font-semibold text-haze">
        <AnimatePresence mode="wait">
          <motion.span key={screen.name} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.3 }}>
            {screen.name}
          </motion.span>
        </AnimatePresence>
        <span className="tabular">{screen.px}px</span>
      </div>
      <div className="flex flex-1 items-start justify-center">
        <motion.div layout transition={{ duration: 0.9, ease }} style={{ width: screen.width }} className="overflow-hidden rounded-[14px] bg-paper text-ink">
          <motion.div layout className="flex items-center gap-1.5 border-b border-rule-light px-3 py-2.5">
            <span className="size-2 rounded-full bg-rule-light" />
            <span className="size-2 rounded-full bg-rule-light" />
            <span className="size-2 rounded-full bg-rule-light" />
          </motion.div>
          <motion.div layout className="grid gap-2 p-3" style={{ gridTemplateColumns: `repeat(${screen.cols}, minmax(0, 1fr))` }}>
            {MODULES.slice(0, screen.cols === 1 ? 4 : 6).map((m) => (
              <motion.div layout key={m.k} transition={{ duration: 0.9, ease }} className="rounded-[10px] bg-white px-3 py-2.5 ring-1 ring-rule-light">
                <motion.p layout="position" className="text-[0.6875rem] font-semibold text-slate">{m.k}</motion.p>
                <motion.p layout="position" className="tabular mt-0.5 text-[0.9375rem] font-[800]">{m.v}</motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

/* ---------- Mobile apps: one Flutter codebase, two platforms ---------- */
function MiniPhone({ platform }: { platform: "ios" | "android" }) {
  return (
    <div className="w-[8.5rem] rounded-[1.6rem] bg-ink p-1.5 shadow-[0_24px_40px_-24px_rgb(14_17_23/0.65)] sm:w-[9.5rem]">
      <div className="relative flex aspect-[9/18.5] flex-col overflow-hidden rounded-[1.25rem] bg-paper text-ink">
        {platform === "ios" ? (
          <span className="absolute left-1/2 top-1.5 h-3 w-10 -translate-x-1/2 rounded-full bg-ink" />
        ) : (
          <span className="absolute left-1/2 top-2 size-2.5 -translate-x-1/2 rounded-full bg-ink" />
        )}
        <div className="bg-ink px-3 pb-3 pt-7 text-paper">
          <p className="text-[0.5625rem] font-semibold text-haze">Good morning</p>
          <p className="text-[0.8125rem] font-[800]">Hi, Maria!</p>
        </div>
        <div className="grid gap-2 p-2.5">
          <div className="rounded-lg bg-white p-2 ring-1 ring-rule-light">
            <p className="text-[0.5625rem] font-semibold text-slate">Order #1042</p>
            <p className="text-[0.6875rem] font-[800]">Preparing</p>
            <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-rule-light">
              <div className="h-full w-2/3 rounded-full bg-teal" />
            </div>
          </div>
          <div className="rounded-lg bg-white p-2 ring-1 ring-rule-light">
            <p className="text-[0.5625rem] font-semibold text-slate">Points</p>
            <p className="tabular text-[0.6875rem] font-[800]">128.40</p>
          </div>
        </div>
        <div className="mt-auto px-2.5 pb-2.5">
          <div className="rounded-full bg-teal py-1.5 text-center text-[0.625rem] font-[800]">Track order</div>
        </div>
        {platform === "android" && (
          <div className="flex justify-center gap-4 bg-white pb-1.5 pt-1 text-slate">
            <span className="size-1.5 rounded-sm border border-current" />
            <span className="size-1.5 rounded-full border border-current" />
            <span className="h-1.5 w-1 border-y-[3px] border-l-[4px] border-y-transparent border-l-current" />
          </div>
        )}
      </div>
    </div>
  );
}

function OneCodebase() {
  const ref = useRef<HTMLDivElement>(null);
  const { step, reduced } = useLoop(ref, 2, 2600);
  const split = reduced || step === 1;
  return (
    <div ref={ref} className="relative mt-8 flex min-h-[19rem] flex-1 items-center justify-center" aria-hidden="true">
      <motion.div className="absolute" animate={{ x: split ? "-56%" : "0%", rotate: split ? -6 : 0 }} transition={{ duration: 1, ease }}>
        <MiniPhone platform="ios" />
        <motion.p animate={{ opacity: split ? 1 : 0 }} className="mt-3 text-center text-[0.8125rem] font-[800]">iOS</motion.p>
      </motion.div>
      <motion.div className="absolute" animate={{ x: split ? "56%" : "0%", rotate: split ? 6 : 0 }} transition={{ duration: 1, ease }}>
        <MiniPhone platform="android" />
        <motion.p animate={{ opacity: split ? 1 : 0 }} className="mt-3 text-center text-[0.8125rem] font-[800]">Android</motion.p>
      </motion.div>
      <motion.p
        animate={{ opacity: split ? 0 : 1 }}
        className="absolute bottom-0 rounded-full bg-ink px-3 py-1.5 text-[0.75rem] font-[800] text-paper"
      >
        One Flutter codebase
      </motion.p>
    </div>
  );
}

/* ---------- UI/UX: a flow that draws itself ---------- */
function FlowDraw() {
  const ref = useRef<HTMLDivElement>(null);
  const { step, reduced } = useLoop(ref, 4, 1100);
  const screens = [16, 116, 216];
  return (
    <div ref={ref} className="mt-6" aria-hidden="true">
      <svg viewBox="0 0 300 130" className="w-full">
        {screens.map((x, i) => (
          <g key={x} opacity={reduced || step >= i ? 1 : 0.35} style={{ transition: "opacity 0.4s" }}>
            <rect x={x} y="10" width="68" height="110" rx="10" fill="#fff" stroke="#dce1e7" />
            <rect x={x + 8} y="22" width="34" height="5" rx="2.5" fill="#0e1117" />
            <rect x={x + 8} y="34" width="52" height="4" rx="2" fill="#dce1e7" />
            <rect x={x + 8} y="43" width="44" height="4" rx="2" fill="#dce1e7" />
            <rect x={x + 8} y="96" width="52" height="14" rx="7" fill={i === 2 ? "#2dd4bf" : "#0e1117"} />
          </g>
        ))}
        {[0, 1].map((i) => (
          <motion.path
            key={i}
            d={`M${screens[i] + 68} 103 C ${screens[i] + 86} 103, ${screens[i + 1] - 18} 60, ${screens[i + 1]} 60`}
            fill="none"
            stroke="#0f766e"
            strokeWidth="2"
            strokeLinecap="round"
            initial={false}
            animate={{ pathLength: reduced || step > i ? 1 : 0 }}
            transition={{ duration: 0.7, ease }}
          />
        ))}
      </svg>
    </div>
  );
}

/* ---------- Backend & cloud: every surface, one database ---------- */
function BackendPulse() {
  const ref = useRef<HTMLDivElement>(null);
  const { inView, reduced } = useLoop(ref, 1, 100000);
  const lines = ["M44 30 C 90 30, 110 66, 150 66", "M44 102 C 90 102, 110 66, 150 66", "M256 66 C 220 66, 200 66, 172 66"];
  return (
    <div ref={ref} className="mt-6" aria-hidden="true">
      <svg viewBox="0 0 300 132" className="w-full">
        {lines.map((d) => (
          <path key={d} d={d} fill="none" stroke="#dce1e7" strokeWidth="2" />
        ))}
        {inView &&
          !reduced &&
          lines.map((d, i) => (
            <circle key={`p-${d}`} r="3.5" fill="#0f766e">
              <animateMotion dur="1.8s" repeatCount="indefinite" begin={`${i * 0.45}s`} path={d} />
            </circle>
          ))}
        {[
          { x: 22, y: 30, t: "App" },
          { x: 22, y: 102, t: "Web" },
          { x: 278, y: 66, t: "Admin" },
        ].map((n) => (
          <g key={n.t}>
            <circle cx={n.x} cy={n.y} r="21" fill="#fff" stroke="#dce1e7" />
            <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#0e1117">
              {n.t}
            </text>
          </g>
        ))}
        <g>
          <ellipse cx="161" cy="50" rx="17" ry="6" fill="#0e1117" />
          <path d="M144 50v32c0 3.3 7.6 6 17 6s17-2.7 17-6V50" fill="#0e1117" />
          <path d="M144 62c0 3.3 7.6 6 17 6s17-2.7 17-6M144 72c0 3.3 7.6 6 17 6s17-2.7 17-6" fill="none" stroke="#2dd4bf" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

/* ---------- E-commerce & payments ---------- */
const METHODS = ["GCash", "Maya", "QR Ph"];
function PaymentCycle() {
  const ref = useRef<HTMLDivElement>(null);
  const { step } = useLoop(ref, METHODS.length, 1900);
  return (
    <div ref={ref} className="mt-6 rounded-[16px] bg-paper p-4 ring-1 ring-rule-light" aria-hidden="true">
      <div className="flex items-center justify-between text-[0.8125rem]">
        <span className="text-slate">Total</span>
        <span className="tabular font-[800]">₱1,280.00</span>
      </div>
      <div className="mt-3 flex items-center justify-between rounded-[12px] bg-white px-3 py-2.5 ring-1 ring-rule-light">
        <span className="text-[0.8125rem] text-slate">Pay with</span>
        <span className="relative h-5 w-16 overflow-hidden text-right">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={METHODS[step]}
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-110%" }}
              transition={{ duration: 0.45, ease }}
              className="absolute inset-0 text-[0.875rem] font-[800]"
            >
              {METHODS[step]}
            </motion.span>
          </AnimatePresence>
        </span>
      </div>
      <motion.div
        key={`paid-${step}`}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease, delay: 0.55 }}
        className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-teal px-3 py-1 text-[0.75rem] font-[800] text-ink"
      >
        <Icon name="check" size={14} strokeWidth={2.4} /> Paid
      </motion.div>
    </div>
  );
}

/* ---------- Maintenance & support: the release log keeps moving ---------- */
const RELEASES = [
  { v: "2.4.0", note: "Loyalty tiers", where: "iOS, Android" },
  { v: "2.3.1", note: "Checkout fix", where: "Android" },
  { v: "2.3.0", note: "Order tracking", where: "iOS, Android, Web" },
  { v: "2.2.4", note: "Faster search", where: "Web" },
];
function ReleaseLog() {
  const ref = useRef<HTMLDivElement>(null);
  const { step } = useLoop(ref, RELEASES.length, 2200);
  const list = [0, 1, 2].map((i) => RELEASES[(step + i) % RELEASES.length]);
  return (
    <div ref={ref} className="mt-6" aria-hidden="true">
      <p className="flex items-center gap-2 text-[0.75rem] font-semibold text-haze">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-teal opacity-60" />
          <span className="relative inline-flex size-2 rounded-full bg-teal" />
        </span>
        Monitoring after launch
      </p>
      <ul className="mt-3 grid gap-2">
        <AnimatePresence initial={false} mode="popLayout">
          {list.map((r, i) => (
            <motion.li
              key={r.v}
              layout
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: i === 0 ? 1 : 0.55, y: 0 }}
              exit={{ opacity: 0, y: 14 }}
              transition={{ duration: 0.55, ease }}
              className="flex items-center justify-between gap-3 rounded-[12px] bg-ink-3 px-3 py-2 text-[0.8125rem]"
            >
              <span className="tabular font-[800] text-teal">v{r.v}</span>
              <span className="flex-1 truncate">{r.note}</span>
              <span className="shrink-0 text-[0.6875rem] text-haze">{r.where}</span>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}

export default function Services() {
  const web = coreServices.find((service) => service.id === "web")!;
  const mobile = coreServices.find((service) => service.id === "mobile")!;
  const [design, backend, commerce, support] = supportServices;

  return (
    <ZSection id="services" aria-labelledby="services-title" className="on-paper bg-paper text-ink">
      <div className="shell section-y">
        <div className="grid gap-x-14 gap-y-6 lg:grid-cols-2 lg:items-end">
          <KineticTitle id="services-title" lines={["Built for", "every screen."]} className="display-xl" />
          <p className="lede max-w-[32rem] text-slate">
            Mobile apps and web apps, designed and built together, with the design, backend, payments, and support
            around them.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Tile tone="ink" className="min-h-[34rem] md:col-span-2">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="title">{web.title}</h3>
                <p className="mt-2 max-w-[28rem] text-haze">{web.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Built with">
                  {web.tech.map((t) => (
                    <li key={t} className="rounded-full bg-teal px-3.5 py-1.5 text-[0.875rem] font-[800] text-ink">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <Icon name="browser" size={30} className="shrink-0 text-teal" />
            </div>
            <ResponsiveBrowser />
            <ul className="mt-6 flex flex-wrap gap-2">
              {web.builds.map((b) => (
                <li key={b} className="tag">
                  {b}
                </li>
              ))}
            </ul>
          </Tile>

          <Tile tone="teal" className="min-h-[34rem] md:col-span-2">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="title">{mobile.title}</h3>
                <p className="mt-2 max-w-[28rem] text-ink/75">{mobile.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Built with">
                  {mobile.tech.map((t) => (
                    <li key={t} className="rounded-full bg-ink px-3.5 py-1.5 text-[0.875rem] font-[800] text-teal">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <Icon name="phone" size={30} className="shrink-0" />
            </div>
            <OneCodebase />
            <ul className="mt-6 flex flex-wrap gap-2">
              {mobile.builds.map((b) => (
                <li key={b} className="tag">
                  {b}
                </li>
              ))}
            </ul>
          </Tile>

          <Tile>
            <h3 className="title">{design.title}</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate">{design.text}</p>
            <FlowDraw />
          </Tile>
          <Tile>
            <h3 className="title">{backend.title}</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate">{backend.text}</p>
            <BackendPulse />
          </Tile>
          <Tile>
            <h3 className="title">{commerce.title}</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate">{commerce.text}</p>
            <PaymentCycle />
          </Tile>
          <Tile tone="ink">
            <h3 className="title">{support.title}</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-haze">{support.text}</p>
            <ReleaseLog />
          </Tile>
        </div>
        <p className="mt-5 text-[0.8125rem] text-slate">Illustrations use sample data.</p>
      </div>
    </ZSection>
  );
}
