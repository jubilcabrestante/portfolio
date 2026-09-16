"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="site-width flex items-center justify-between gap-5 py-4" aria-label="Main navigation">
        <Link href="/#top" className="brand" onClick={close} aria-label="Dzypher home">
          <span className="brand-mark">D</span><span>DZYPHER<span className="text-lime">.</span></span>
        </Link>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => <a key={link.href} className="nav-link" href={link.href}>{link.label}</a>)}
          <a className="nav-cta" href="#contact">Start a project <span>↗</span></a>
        </div>
        <button onClick={() => setOpen(!open)} className="menu-button lg:hidden" aria-expanded={open} aria-label="Toggle navigation">{open ? "Close" : "Menu"}</button>
      </nav>
      {open && <div className="mobile-nav lg:hidden"><div className="site-width py-4">{links.map((link) => <a onClick={close} key={link.href} className="mobile-link" href={link.href}>{link.label}</a>)}<a onClick={close} className="button-primary mt-3" href="#contact">Start a project <span>↗</span></a></div></div>}
    </header>
  );
}
