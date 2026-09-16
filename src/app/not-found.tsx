import Link from "next/link";

export default function NotFound() {
  return (
    <div className="site-width flex min-h-[65vh] flex-col items-center justify-center py-20 text-center">
      <p className="section-label">404 / Lost signal</p>
      <h1 className="mt-4 font-display text-6xl font-semibold tracking-[-.07em] text-navy sm:text-8xl">This route<br />doesn&rsquo;t exist.</h1>
      <p className="mt-5 max-w-md text-slate-600">The page may have moved, or the address may be off. Let&rsquo;s get you back to Dzypher.</p>
      <Link href="/" className="button-primary mt-8">Back to home <span>→</span></Link>
    </div>
  );
}
