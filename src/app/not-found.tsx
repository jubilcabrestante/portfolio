import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-4 py-16 text-center">
      <p className="font-label text-xs font-bold uppercase tracking-[0.12em] text-accent">
        Page not found
      </p>
      <h1 className="mt-3 font-headline text-7xl font-black">404</h1>
      <p className="mt-4 font-sketch text-2xl text-ink-soft">
        this page is still a sketch —
      </p>
      <p className="mt-2 font-body text-[15px] italic text-ink-soft">
        The page you requested doesn&rsquo;t exist, or it moved somewhere
        better.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block bg-ink px-6 py-3 font-label text-sm font-bold text-paper transition-colors hover:bg-accent"
      >
        Back to home
      </Link>
    </div>
  );
}
