"use client";

import Link from "next/link";
import { AlertTriangle } from "lucide-react";

type Mode = "light" | "dark";

interface NotFoundProps {
  mode?: Mode;
}

const NotFound: React.FC<NotFoundProps> = ({ mode = "light" }) => {
  return (
    <div
      className={`flex items-center justify-center min-h-screen p-6 overflow-x-hidden ${
        mode === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="flex flex-col items-center text-center gap-10">
        {/* Icon + Text */}
        <div className="flex flex-col gap-2 w-[90vw] sm:w-auto">
          <h1 className="font-medium text-8xl">404</h1>
          <AlertTriangle className="mx-auto text-yellow-500" size={64} />
          <h2 className="text-3xl font-semibold">Page Not Found ⚠️</h2>
          <p>We couldn&apos;t find the page you are looking for.</p>
        </div>

        {/* Button */}
        <Link
          href="/"
          className={`inline-block rounded bg-blue-600 px-6 py-3 text-white font-semibold transition-colors hover:bg-blue-700 ${
            mode === "dark" ? "bg-blue-500 hover:bg-blue-600" : ""
          }`}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
