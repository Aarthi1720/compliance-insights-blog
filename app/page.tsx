import Link from "next/link";

const categories = [
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
  {
    number: "04",
    title: "Compliance",
    description:
      "Understand regulatory requirements, maintain essential documentation, and strengthen compliance practices.",
  },
  {
    number: "05",
    title: "Business Improvement",
    description:
      "Discover practical approaches to improving processes, reducing waste, and supporting sustainable business growth.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#F8FAFC] text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 px-3 py-3 min-[375px]:px-4 sm:px-6 sm:py-5 lg:px-8">
          <Link
            href="/"
            aria-label="Compliance Insights home"
            className="flex min-w-0 shrink items-center gap-2 sm:gap-3"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#173B65] text-lg font-bold text-white sm:h-10 sm:w-10">
              C
            </div>

            <div className="min-w-0">
              <p className="text-sm font-bold leading-tight tracking-tight text-[#173B65] sm:text-lg">
                Compliance Insights
              </p>
              <p className="mt-1 text-[10px] leading-tight text-slate-500 sm:text-xs">
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
            className="shrink-0 rounded-lg bg-[#173B65] px-2.5 py-2 text-xs font-semibold text-white transition hover:bg-[#102C4D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173B65] min-[375px]:px-3 sm:px-4 sm:py-2.5 sm:text-sm"
          >
            Explore Articles
          </Link>
        </div>
      </header>

      {/* Hero section */}
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl"
        />

        <div className="relative mx-auto grid w-full max-w-7xl min-w-0 items-center gap-10 px-5 py-12 min-[375px]:px-6 sm:gap-12 sm:px-6 sm:py-16 md:grid-cols-2 md:py-28 lg:px-8">
          {/* Hero content */}
          <div className="min-w-0">
            <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-[10px] font-semibold uppercase leading-relaxed tracking-[0.12em] text-[#173B65] min-[375px]:px-4 sm:text-xs sm:tracking-[0.16em]">
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
              <span>Insights for better business</span>
            </span>

            <h1 className="mt-6 w-full max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#142D4E] min-[375px]:text-4xl sm:mt-7 sm:text-5xl lg:text-6xl">
              Knowledge that builds{" "}
              <span className="text-[#4779AD]">confidence.</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 min-[375px]:text-base min-[375px]:leading-8 sm:mt-6 sm:text-lg">
              Explore practical insights on quality management, ISO
              certification, compliance, and audit readiness to help your
              organization move forward with confidence.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-lg bg-[#173B65] px-4 py-3 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#102C4D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173B65] min-[375px]:px-5 sm:px-6 sm:py-3.5 sm:text-sm"
              >
                Explore all insights
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>

              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-3 text-xs font-semibold text-slate-700 transition hover:border-[#173B65] hover:text-[#173B65] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173B65] min-[375px]:px-5 sm:px-6 sm:py-3.5 sm:text-sm"
              >
                Latest articles
              </Link>
            </div>

            {/* Statistics */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 border-t border-slate-200 pt-5 min-[375px]:gap-x-8 sm:mt-10 sm:pt-6">
              <div>
                <p className="text-2xl font-bold text-[#173B65]">50+</p>
                <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                  Knowledge articles
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[#173B65]">5</p>
                <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                  Knowledge categories
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[#173B65]">
                  Practical
                </p>
                <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                  Industry insights
                </p>
              </div>
            </div>
          </div>

          {/* Featured insight card */}
          <div className="relative mx-auto w-full min-w-0 max-w-lg">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-3xl bg-blue-100/70 blur-2xl sm:-inset-4"
            />

            <article className="relative min-w-0 rounded-3xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/60 min-[375px]:p-5 sm:p-7">
              {/* Card labels */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-emerald-50 px-2.5 py-1.5 text-[10px] font-semibold text-emerald-700 sm:px-3 sm:text-xs">
                  QUALITY MANAGEMENT
                </span>

                <span className="text-[10px] text-slate-400 sm:text-sm">
                  Featured insight
                </span>
              </div>

              {/* Decorative visual */}
              <div className="mt-5 flex aspect-5/3 min-w-0 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-[#173B65] via-[#285A88] to-[#A9CBE5] p-3 min-[375px]:p-5 sm:mt-6 sm:p-8">
                <div className="w-full max-w-xs min-w-0 rounded-2xl border border-white/30 bg-white/10 p-3 text-white shadow-lg backdrop-blur-sm min-[375px]:p-4 sm:p-6">
                  <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/15 text-xl sm:h-12 sm:w-12 sm:text-2xl">
                      ✓
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold sm:text-sm">
                        Quality first
                      </p>
                      <p className="text-[10px] leading-relaxed text-blue-100 sm:text-xs">
                        A better way forward
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
                    <div className="h-1.5 rounded-full bg-white/70 sm:h-2" />
                    <div className="h-1.5 w-4/5 rounded-full bg-white/40 sm:h-2" />
                    <div className="h-1.5 w-3/5 rounded-full bg-white/30 sm:h-2" />
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-2 border-t border-white/20 pt-3 text-[9px] text-blue-50 min-[375px]:text-[10px] sm:mt-6 sm:pt-4 sm:text-xs">
                    <span>Processes</span>
                    <span>Standards</span>
                    <span>Growth</span>
                  </div>
                </div>
              </div>

              {/* Card information */}
              <div className="mt-5 sm:mt-6">
                <p className="text-xs font-semibold text-[#4779AD]">
                  A PRACTICAL GUIDE
                </p>

                <h2 className="mt-2 text-lg font-bold leading-snug text-[#142D4E] min-[375px]:text-xl sm:text-2xl">
                  Seven Quality Management Principles Every Team Should Know
                </h2>

                <p className="mt-3 text-xs leading-6 text-slate-600 min-[375px]:text-sm">
                  Explore how customer focus, leadership, process improvement,
                  and evidence-based decisions contribute to better business
                  outcomes.
                </p>
              </div>

              {/* Card footer */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 sm:mt-6 sm:pt-5">
                <span className="text-xs text-slate-500 sm:text-sm">
                  Arun Kumar
                </span>

                <Link
                  href="/blog/quality-management-principles"
                  className="text-xs font-semibold text-[#173B65] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173B65] sm:text-sm"
                >
                  Read insights →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Explore categories */}
      <section
        id="latest-insights"
        className="mx-auto w-full max-w-7xl px-5 py-12 min-[375px]:px-6 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="flex min-w-0 flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4779AD] sm:text-sm">
              Explore our knowledge
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#142D4E] min-[375px]:text-3xl sm:text-4xl">
              Insights that make a difference
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Clear explanations and practical guidance to help you understand
              standards, strengthen processes, and prepare for audits.
            </p>
          </div>

          <Link
            href="/blog"
            className="shrink-0 text-xs font-semibold text-[#173B65] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173B65] sm:text-sm"
          >
            View all articles →
          </Link>
        </div>

        {/* Category cards */}
        <div className="mt-8 grid min-w-0 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.number}
              href={`/blog?category=${encodeURIComponent(category.title)}`}
              className="group min-w-0 rounded-2xl border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173B65] sm:p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-[#173B65] sm:h-11 sm:w-11">
                {category.number}
              </span>

              <h3 className="mt-5 text-lg font-bold text-[#142D4E] transition group-hover:text-[#4779AD] sm:text-xl">
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
      <footer id="about" className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 py-7 text-xs text-slate-500 min-[375px]:px-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-8 sm:text-sm lg:px-8">
          <p className="font-semibold text-[#173B65]">
            Compliance Insights
          </p>

          <p className="max-w-md leading-6">
            Practical knowledge for quality, certification, and compliance.
          </p>

          <p>© {new Date().getFullYear()} Compliance Insights</p>
        </div>
      </footer>
    </main>
  );
}