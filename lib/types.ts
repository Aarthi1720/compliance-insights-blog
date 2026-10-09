export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  author: string;
  publishedAt: string;
  readTimeMinutes: number;
  content: string[];
};