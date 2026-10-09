import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getAdjacentPosts, getPostBySlug } from "@/lib/posts";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogDetailPage({
  params,
}: BlogDetailPageProps) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { previousPost, nextPost } = getAdjacentPosts(slug);

  const formattedDate = new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(post.publishedAt));

  return (
    <main className="min-h-screen bg-slate-50">
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 transition hover:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
        >
          <span aria-hidden="true">←</span>
          Back to all articles
        </Link>

        <header className="mt-8">
          <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
            {post.category}
          </span>

          <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            {post.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-slate-200 pb-6 text-sm text-slate-500">
            <span>
              By <span className="font-medium text-slate-800">{post.author}</span>
            </span>

            <span aria-hidden="true">•</span>

            <time dateTime={post.publishedAt}>{formattedDate}</time>

            <span aria-hidden="true">•</span>

            <span>{post.readTimeMinutes} min read</span>
          </div>
        </header>

        <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl bg-slate-200">
          <Image
            src={post.coverImage}
            alt={`Cover image for ${post.title}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        <div className="mt-10 space-y-6">
          {post.content.map((paragraph, index) => (
            <p
              key={`${post.slug}-paragraph-${index}`}
              className="text-base leading-8 text-slate-700 sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <nav
          aria-label="Article navigation"
          className="mt-12 grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2"
        >
          {previousPost ? (
            <Link
              href={`/blog/${previousPost.slug}`}
              className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              <span className="text-sm text-slate-500">← Previous article</span>
              <span className="mt-2 block font-semibold text-slate-900">
                {previousPost.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextPost && (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="rounded-xl border border-slate-200 bg-white p-5 text-left transition hover:border-blue-300 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 sm:text-right"
            >
              <span className="text-sm text-slate-500">Next article →</span>
              <span className="mt-2 block font-semibold text-slate-900">
                {nextPost.title}
              </span>
            </Link>
          )}
        </nav>
      </article>
    </main>
  );
}