import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#173B65] text-lg font-bold text-white">
              C
            </div>

            <div>
              <p className="text-lg font-bold tracking-tight text-[#173B65]">
                Compliance Insights
              </p>
              <p className="text-xs text-slate-500">
                Knowledge. Quality. Trust.
              </p>
            </div>
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex"
          >
            <Link href="/" className="transition hover:text-[#173B65]">
              Home
            </Link>

            <Link
              href="/blog"
              className="transition hover:text-[#173B65]"
            >
              Insights
            </Link>

            <a
              href="#about"
              className="transition hover:text-[#173B65]"
            >
              About
            </a>
          </nav>

          <Link
            href="/blog"
            className="rounded-lg bg-[#173B65] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#102C4D]"
          >
            Explore Articles
          </Link>
        </div>
      </header>

      {/* Hero section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28 lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#173B65]">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Insights for better business
            </span>

            <h1 className="mt-7 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-[#142D4E] sm:text-5xl lg:text-6xl">
              Knowledge that builds{" "}
              <span className="text-[#4779AD]">confidence.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Explore practical insights on quality management, ISO
              certification, compliance, and audit readiness to help your
              organization move forward with confidence.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-lg bg-[#173B65] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#102C4D]"
              >
                Explore all insights
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>

              <a
                href="#latest-insights"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-[#173B65] hover:text-[#173B65]"
              >
                Latest articles
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-slate-200 pt-6">
              <div>
                <p className="text-2xl font-bold text-[#173B65]">50+</p>
                <p className="mt-1 text-xs text-slate-500">
                  Knowledge articles
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[#173B65]">6+</p>
                <p className="mt-1 text-xs text-slate-500">
                  Knowledge categories
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[#173B65]">Practical</p>
                <p className="mt-1 text-xs text-slate-500">
                  Industry insights
                </p>
              </div>
            </div>
          </div>

          {/* Featured visual */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 rounded-3xl bg-blue-100/70 blur-2xl" />

            <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                  QUALITY MANAGEMENT
                </span>

                <span className="text-sm text-slate-400">Featured insight</span>
              </div>

              <div className="mt-6 flex aspect-5/3 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-[#173B65] via-[#285A88] to-[#A9CBE5] p-8">
                <div className="w-full max-w-xs rounded-2xl border border-white/30 bg-white/10 p-6 text-white shadow-lg backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-2xl">
                      ✓
                    </div>

                    <div>
                      <p className="text-sm font-semibold">Quality first</p>
                      <p className="text-xs text-blue-100">
                        A better way forward
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="h-2 rounded-full bg-white/70" />
                    <div className="h-2 w-4/5 rounded-full bg-white/40" />
                    <div className="h-2 w-3/5 rounded-full bg-white/30" />
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-4 text-xs text-blue-50">
                    <span>Processes</span>
                    <span>Standards</span>
                    <span>Growth</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold text-[#4779AD]">
                  A PRACTICAL GUIDE
                </p>

                <h2 className="mt-2 text-xl font-bold leading-snug text-[#142D4E] sm:text-2xl">
                  Building a stronger foundation for quality and compliance
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Discover practical approaches to creating reliable
                  processes and preparing your organization for what comes
                  next.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                <span className="text-sm text-slate-500">
                  Editorial team
                </span>

                <Link
                  href="/blog"
                  className="text-sm font-semibold text-[#173B65] hover:underline"
                >
                  Read insights →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest insights introduction */}
      <section
        id="latest-insights"
        className="mx-auto max-w-7xl px-6 py-16 lg:px-8"
      >
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#4779AD]">
              Explore our knowledge
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#142D4E] sm:text-4xl">
              Insights that make a difference
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Clear explanations and practical guidance to help you understand
              standards, strengthen processes, and prepare for audits.
            </p>
          </div>

          <Link
            href="/blog"
            className="shrink-0 text-sm font-semibold text-[#173B65] hover:underline"
          >
            View all articles →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              number: "01",
              title: "ISO Certification",
              description:
                "Understand certification requirements, preparation, and the steps toward compliance.",
            },
            {
              number: "02",
              title: "Quality Management",
              description:
                "Learn how consistent processes can improve quality, efficiency, and accountability.",
            },
            {
              number: "03",
              title: "Audit Readiness",
              description:
                "Explore practical ways to organize documentation and prepare for successful audits.",
            },
          ].map((category) => (
            <Link
              key={category.number}
              href="/blog"
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-[#173B65]">
                {category.number}
              </span>

              <h3 className="mt-5 text-xl font-bold text-[#142D4E] transition group-hover:text-[#4779AD]">
                {category.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {category.description}
              </p>

              <span className="mt-5 inline-flex items-center text-sm font-semibold text-[#173B65]">
                Explore category
                <span
                  aria-hidden="true"
                  className="ml-2 transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        id="about"
        className="border-t border-slate-200 bg-white"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="font-semibold text-[#173B65]">
            Compliance Insights
          </p>

          <p>
            Practical knowledge for quality, certification, and compliance.
          </p>

          <p>© {new Date().getFullYear()} Compliance Insights</p>
        </div>
      </footer>
    </main>
  );
}