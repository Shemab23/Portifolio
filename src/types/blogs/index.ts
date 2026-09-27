// types.ts

export type BlogPostStatus = "draft" | "published";

export interface BlogChapter {
  slug: string;
  title: string;
  order: number;
  contentPath: string; // relative to content/blogs/<slug>/chapters/
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  image: string; // resolved public path, e.g. "/blogs/<slug>/cover.png"
  summary: string;
  date: string;
  status: BlogPostStatus;
  tags?: string[];
  chapters?: BlogChapter[];
}

export interface BlogRegistryEntry {
  slug: string; // must match both public/blogs/<slug> and content/blogs/<slug>
}
export interface BlogPostLayoutProps {
  title: string;
  date: string;
  slug: string;
  chapters?: BlogChapter[];
  currentChapterSlug?: string;
  children: React.ReactNode;
}

export interface Heading {
  id: string;
  text: string;
  level: number;
}
