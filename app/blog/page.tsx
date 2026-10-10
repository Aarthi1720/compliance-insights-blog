import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import { getPostsPage } from "@/lib/posts";

type BlogPageProps = {
  searchParams: Promise<{
    page?: string | string[];
    category?: string | string[];
  }>;
};

const VALID_CATEGORIES = [
  "ISO Certification",
  "Quality Management",
  "Audit Readiness",
  "Compliance",
  "Business Improvement",
];

export default async function BlogPage({
  searchParams,
}: BlogPageProps) {
  const params = await searchParams;

  const rawPage = params.page;
  const rawCategory = params.category;

  const pageValue = Array.isArray(rawPage) ? rawPage[0] : rawPage;
  const categoryValue = Array.isArray(rawCategory)
    ? rawCategory[0]
    : rawCategory;

  // Validate the page number.
  const isValidPage =
    pageValue === undefined ||
    (/^[1-9]\d*$/.test(pageValue) &&
      Number.isSafeInteger(Number(pageValue)));

  // Validate the category against the supported categories.
  const isValidCategory =
    categoryValue === undefined ||
    VALID_CATEGORIES.includes(categoryValue);

  if (!isValidPage || !isValidCategory) {
    return (
      <main className="min-h-screen bg-[#F8FAFC] px-6 py-24">
        <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center">
          <h1 className="text-2xl font-bold text-[#142D4E]">
            Invalid page or category
          </h1>

          <p className="mt-3 text-slate-600">
            Please choose a valid blog page and category.
          </p>

          <Link
            href="/blog"
            className="mt-6 inline-flex rounded-lg bg-[#173B65] px-5 py-3 font-semibold text-white hover:bg-[#102C4D]"
          >
            View all articles
          </Link>
        </div>
      </main>
    );
  }

  const requestedPage = pageValue === undefined ? 1 : Number(pageValue);

  const {
    posts,
    currentPage,
    totalPages,
    totalPosts,
  } = getPostsPage(requestedPage, categoryValue);

  const isOutOfRange = requestedPage > totalPages;

  const lastPageUrl = categoryValue
    ? `/blog?${new URLSearchParams({
        page: String(totalPages),
        category: categoryValue,
      }).toString()}`
    : `/blog?page=${totalPages}`;

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
          <Link
            href="/"
            className="text-sm font-medium text-[#4779AD] hover:underline"
          >
            ← Back to home
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-[#4779AD]">
            Compliance Insights
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-[#142D4E] sm:text-5xl">
            Insights for better business
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Practical guidance on quality management, ISO certification,
            compliance, and audit readiness.
          </p>

          {/* Category filters */}
          <div
            aria-label="Filter articles by category"
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/blog"
              aria-current={!categoryValue ? "page" : undefined}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                !categoryValue
                  ? "border-[#173B65] bg-[#173B65] text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-[#173B65] hover:text-[#173B65]"
              }`}
            >
              All articles
            </Link>

            {VALID_CATEGORIES.map((category) => (
              <Link
                key={category}
                href={`/blog?${new URLSearchParams({
                  category,
                }).toString()}`}
                aria-current={categoryValue === category ? "page" : undefined}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  categoryValue === category
                    ? "border-[#173B65] bg-[#173B65] text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:border-[#173B65] hover:text-[#173B65]"
                }`}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {isOutOfRange ? (
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center">
            <h2 className="text-2xl font-bold text-[#142D4E]">
              This page doesn&apos;t exist
            </h2>

            <p className="mt-3 text-slate-600">
              {categoryValue
                ? `There are currently ${totalPages} pages in ${categoryValue}.`
                : `There are currently ${totalPages} pages of articles.`}
            </p>

            <Link
              href={lastPageUrl}
              className="mt-6 inline-flex rounded-lg bg-[#173B65] px-5 py-3 font-semibold text-white hover:bg-[#102C4D]"
            >
              {totalPages > 0 ? "Go to the last page" : "View all articles"}
            </Link>
          </div>
        ) : posts.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center">
            <h2 className="text-2xl font-bold text-[#142D4E]">
              No articles found
            </h2>

            <p className="mt-3 text-slate-600">
              {categoryValue
                ? `There are no articles in ${categoryValue} yet.`
                : "Please check back for new insights."}
            </p>

            <Link
              href="/blog"
              className="mt-6 inline-flex rounded-lg bg-[#173B65] px-5 py-3 font-semibold text-white hover:bg-[#102C4D]"
            >
              View all articles
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#142D4E]">
                  {categoryValue ?? "Latest articles"}
                </h2>

                <p className="mt-2 text-sm text-slate-600">
                  {categoryValue
                    ? `Explore our articles about ${categoryValue.toLowerCase()}.`
                    : "Explore our latest knowledge and practical guidance."}
                </p>
              </div>

              <p className="text-sm text-slate-500">
                Page {currentPage} of {totalPages} · {totalPosts} articles
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <BlogCard
                  key={post.slug}
                  post={post}
                  priority={index === 0}
                />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              category={categoryValue}
            />
          </>
        )}
      </section>
    </main>
  );
}