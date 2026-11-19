"use client";

import { Icon } from "@/components/ui/Icon";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="shell flex min-h-[80svh] flex-col items-start justify-center pb-24 pt-36">
      <h1 className="display-xl" style={{ fontStretch: "120%" }}>
        <span className="block">This section</span>
        <span className="block">didn’t load.</span>
      </h1>
      <p className="lede mt-6 max-w-[32rem] text-haze">
        Something went wrong while loading the page. Try again, and if it keeps happening, email us at
        jubilcabrestante.work@gmail.com.
      </p>
      <button type="button" onClick={reset} className="btn btn-teal mt-9">
        Try again <Icon name="arrowRight" size={18} />
      </button>
    </section>
  );
}
