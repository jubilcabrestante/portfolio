import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[80svh] flex-col items-start justify-center pb-24 pt-36">
      <h1 className="display-xl" style={{ fontStretch: "120%" }}>
        <span className="block">This page</span>
        <span className="block">doesn’t exist.</span>
      </h1>
      <p className="lede mt-6 max-w-[32rem] text-haze">
        The link may be old, or the address may have a typo. Everything Dzypher does is on the home page.
      </p>
      <Link href="/" className="btn btn-teal mt-9">
        Go to the home page <Icon name="arrowRight" size={18} />
      </Link>
    </section>
  );
}
