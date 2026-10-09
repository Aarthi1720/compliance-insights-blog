import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import { getPostsPage } from "@/lib/posts";

type BlogPageProps = {
  searchParams: Promise<{
    page?: string | string[];
  }>;
};

export default async function BlogPage({
  searchParams,
}: BlogPageProps) {
  const params = await searchParams;
  const rawPage = params.page;

  const pageValue = Array.isArray(rawPage) ? rawPage[0] : rawPage;

  const isValidPage =
    pageValue === undefined ||
    (/^[1-9]\d*$/.test(pageValue) && Number.isSafeInteger(Number(pageValue)));

  if (!isValidPage) {
    return (
      <main className="min-h-screen bg-[#F8FAFC] px-6 py-24">
        <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center">
          <h1 className="text-2xl font-bold text-[#142D4E]">
            Invalid page number
          </h1>
          <p className="mt-3 text-slate-600">
            Please choose a valid blog page.
          </p>
          <Link
            href="/blog"
            className="mt-6 inline-flex rounded-lg bg-[#173B65] px-5 py-3 font-semibold text-white hover:bg-[#102C4D]"
          >
            View blog articles
          </Link>
        </div>
      </main>
    );
  }

  const requestedPage = pageValue === undefined ? 1 : Number(pageValue);

  const { posts, currentPage, totalPages, totalPosts } =
    getPostsPage(requestedPage);

  const isOutOfRange = requestedPage > totalPages;

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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {isOutOfRange ? (
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center">
            <h2 className="text-2xl font-bold text-[#142D4E]">
              This page doesn't exist
            </h2>
            <p className="mt-3 text-slate-600">
              There are currently {totalPages} pages of articles.
            </p>
            <Link
              href={`/blog?page=${totalPages}`}
              className="mt-6 inline-flex rounded-lg bg-[#173B65] px-5 py-3 font-semibold text-white hover:bg-[#102C4D]"
            >
              Go to the last page
            </Link>
          </div>
        ) : posts.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center">
            <h2 className="text-2xl font-bold text-[#142D4E]">
              No articles yet
            </h2>
            <p className="mt-3 text-slate-600">
              Please check back for new insights.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#142D4E]">
                  Latest articles
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Explore our latest knowledge and practical guidance.
                </p>
              </div>

              <p className="text-sm text-slate-500">
                Page {currentPage} of {totalPages} · {totalPosts} articles
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </>
        )}
      </section>
    </main>
  );
}