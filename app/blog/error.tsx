"use client";

import { useEffect } from "react";
import Link from "next/link";

type BlogErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function BlogError({
  error,
  reset,
}: BlogErrorProps) {
  useEffect(() => {
    // Keep the error available to Next.js without logging sensitive details.
    void error;
  }, [error]);

  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-slate-50 px-4 py-12">
      <div className="max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
          Compliance Insights
        </p>

        <h1 className="mt-5 text-3xl font-bold text-slate-900">
          Something went wrong
        </h1>

        <p className="mt-4 leading-7 text-slate-600">
          We couldn&apos;t load this page. Please try again, or return to the
          blog listing.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="rounded-lg bg-blue-800 px-5 py-3 font-medium text-white transition hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-800"
          >
            Try again
          </button>

          <Link
            href="/blog"
            className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-medium text-slate-800 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-800"
          >
            Back to articles
          </Link>
        </div>
      </div>
    </main>
  );
}