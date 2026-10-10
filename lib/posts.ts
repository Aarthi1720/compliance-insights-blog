import "server-only";

import postsData from "@/data/posts.json";
import type { BlogPost } from "@/lib/types";

const POSTS_PER_PAGE = 10;

const posts: BlogPost[] = postsData;

export type PaginatedPosts = {
  posts: BlogPost[];
  currentPage: number;
  totalPages: number;
  totalPosts: number;
};

export function getTotalPosts(): number {
  return posts.length;
}

export function getTotalPages(): number {
  return Math.ceil(getTotalPosts() / POSTS_PER_PAGE);
}

export function getPostsPage(
  page: number,
  category?: string,
): PaginatedPosts {
  // Filter articles before pagination.
  const filteredPosts = category
    ? posts.filter((post) => post.category === category)
    : posts;

  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  // Keep the requested page within the available page range.
  const currentPage = Math.min(
    Math.max(1, Math.trunc(page) || 1),
    Math.max(1, totalPages),
  );

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;

  return {
    posts: filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE),
    currentPage,
    totalPages,
    totalPosts,
  };
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getAdjacentPosts(slug: string): {
  previousPost: BlogPost | undefined;
  nextPost: BlogPost | undefined;
} {
  const index = posts.findIndex((post) => post.slug === slug);

  if (index === -1) {
    return {
      previousPost: undefined,
      nextPost: undefined,
    };
  }

  return {
    previousPost: index > 0 ? posts[index - 1] : undefined,
    nextPost: index < posts.length - 1 ? posts[index + 1] : undefined,
  };
}