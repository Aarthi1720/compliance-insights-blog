import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/types";

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(post.publishedAt));

  return (
    <article className="group h-full">
      <Link
        href={`/blog/${post.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#173B65]"
      >
        {/* Cover image */}
        <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
          <Image
            src={post.coverImage}
            alt={`${post.category} article cover`}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#173B65] shadow-sm">
            {post.category}
          </span>
        </div>

        {/* Article information */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <time dateTime={post.publishedAt}>{formattedDate}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readTimeMinutes} min read</span>
          </div>

          <h2 className="mt-4 line-clamp-2 text-xl font-bold leading-snug text-[#142D4E] transition-colors group-hover:text-[#4779AD]">
            {post.title}
          </h2>

          <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
            {post.excerpt}
          </p>

          <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
            <span className="min-w-0 truncate text-sm font-medium text-slate-700">
              By {post.author}
            </span>

            <span
              aria-hidden="true"
              className="shrink-0 text-lg text-[#173B65] transition-transform group-hover:translate-x-1"
            >
              →
            </span>

            <span className="sr-only">Read article: {post.title}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}