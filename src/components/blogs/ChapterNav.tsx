import React from "react";
import { Link } from "react-router-dom";
import { BlogChapter } from "@/types/blogs";

interface ChapterNavProps {
  slug: string;
  chapters: BlogChapter[];
  currentSlug?: string; // undefined means we're on index.mdx (the intro)
}

export function ChapterNav({ slug, chapters, currentSlug }: ChapterNavProps) {
  if (!chapters.length) return null;

  const currentIndex = currentSlug
    ? chapters.findIndex((c) => c.slug === currentSlug)
    : -1;
  const prev = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const next =
    currentIndex >= 0 && currentIndex < chapters.length - 1
      ? chapters[currentIndex + 1]
      : currentIndex === -1
        ? chapters[0]
        : null;

  return (
    <nav className="flex items-center justify-between border-t border-app-border/40 pt-6 mt-10 text-sm">
      {prev ? (
        <Link
          to={`/blog/${slug}/${prev.slug}`}
          className="text-app-heading hover:text-app-brand"
        >
          ← {prev.title}
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link
          to={`/blog/${slug}/${next.slug}`}
          className="text-app-heading hover:text-app-brand font-bold"
        >
          {currentIndex === -1 ? "Start reading" : next.title} →
        </Link>
      )}
    </nav>
  );
}
