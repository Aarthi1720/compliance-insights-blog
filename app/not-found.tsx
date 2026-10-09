import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
          Compliance Insights
        </p>

        <h1 className="mt-6 text-6xl font-bold tracking-tight text-slate-900">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-slate-800">
          Article not found
        </h2>

        <p className="mt-4 leading-7 text-slate-600">
          Sorry, we couldn&apos;t find the article you&apos;re looking for.
          It may have been moved or the link may be incorrect.
        </p>

        <Link
          href="/blog"
          className="mt-8 inline-flex rounded-lg bg-blue-800 px-5 py-3 font-medium text-white transition hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-800"
        >
          Browse all articles
        </Link>
      </div>
    </main>
  );
}