"use client";

import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { LogoMark } from "@/components/brand/Logo";
import Magnetic from "@/components/motion/Magnetic";
import { Icon } from "@/components/ui/Icon";
import { nav, studio } from "@/data/site";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const firstLink = useRef<HTMLAnchorElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => setCompact(value > 60));

  useEffect(() => {
    if (!open) return;
    window.__lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    firstLink.current?.focus();
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      window.__lenis?.start();
      document.documentElement.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:pt-4">
      <nav
        aria-label="Main"
        className={cn(
          "relative z-10 flex w-full items-center justify-between gap-4 rounded-full border border-paper/10 bg-ink/55 pl-2.5 pr-2 backdrop-blur-xl backdrop-saturate-150 transition-[max-width,padding,background-color] duration-500 ease-[var(--ease-out-expo)]",
          compact ? "max-w-[50rem] bg-ink/75 py-1.5" : "max-w-[58rem] py-2",
        )}
      >
        <Link href="/" onClick={close} aria-label="Dzypher home" className="flex items-center gap-2.5 rounded-full pr-2">
          <LogoMark className="size-9" />
          <span className="text-[1.125rem] font-[850] tracking-[-0.02em] [font-stretch:112%]">Dzypher</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group block rounded-full px-4 py-2 text-[0.9375rem] font-medium text-haze transition-colors hover:text-paper"
              >
                <span className="relative block overflow-hidden leading-[1.4]">
                  <span className="block transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-full">{item.label}</span>
                  <span aria-hidden="true" className="absolute inset-0 block translate-y-full text-paper transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-y-0">
                    {item.label}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Magnetic className="hidden sm:inline-flex">
            <a href="/#contact" className="btn btn-teal btn-sm">
              Start a project
            </a>
          </Magnetic>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="site-menu"
            className="inline-flex size-10 items-center justify-center rounded-full bg-paper/10 text-paper transition-colors hover:bg-paper/20 md:hidden"
          >
            <Icon name={open ? "close" : "menu"} size={20} />
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            key="menu"
            initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 0, 100% 0)" }}
            animate={{ clipPath: "polygon(-20% 0, 100% 0, 100% 100%, -60% 100%)" }}
            exit={{ clipPath: "polygon(100% 0, 100% 0, 100% 0, 100% 0)", transition: { duration: 0.45, ease } }}
            transition={{ duration: 0.75, ease }}
            className="fixed inset-0 flex flex-col bg-ink px-6 pb-10 pt-28 md:hidden"
            data-lenis-prevent
          >
            <ul className="grid gap-1">
              {[...nav, { href: "/#contact", label: "Contact" }].map((item, index) => (
                <li key={item.href} className="overflow-hidden">
                  <motion.a
                    ref={index === 0 ? firstLink : undefined}
                    href={item.href}
                    onClick={close}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease, delay: 0.18 + index * 0.06 }}
                    className="flex items-center justify-between border-b border-rule py-4 text-[2.4rem] font-[850] uppercase leading-none tracking-[-0.02em] [font-stretch:110%]"
                  >
                    {item.label}
                    <Icon name="arrowUpRight" size={26} className="text-teal" />
                  </motion.a>
                </li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.5 }}
              className="mt-auto grid gap-4"
            >
              <a href="/#contact" onClick={close} className="btn btn-teal w-full">
                Start a project <Icon name="arrowRight" size={18} />
              </a>
              <a href={`mailto:${studio.email}`} className="text-center text-[0.9375rem] text-haze">
                {studio.email}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
