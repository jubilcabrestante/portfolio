import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-400">
      <div className="site-width flex flex-col gap-8 border-t border-white/10 py-8 sm:flex-row sm:items-end sm:justify-between">
        <div><Link href="/#top" className="brand text-white"><span className="brand-mark">D</span><span>DZYPHER<span className="text-lime">.</span></span></Link><p className="mt-3 text-sm">Software development services for useful digital products.</p></div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm"><a href="#services">Services</a><a href="#work">Work</a><a href="#process">Process</a><a href="#contact">Contact</a><span className="w-full text-xs sm:w-auto">© {new Date().getFullYear()} Dzypher</span></div>
      </div>
    </footer>
  );
}
