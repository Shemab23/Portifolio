// components/blogs/ChapterList.tsx
import React from "react";
import { Link } from "react-router-dom";
import type { BlogChapter } from "@/types/blogs";

interface ChapterListProps {
  slug: string;
  chapters: BlogChapter[];
  currentChapterSlug?: string;
}

export function ChapterList({
  slug,
  chapters,
  currentChapterSlug,
}: ChapterListProps) {
  return (
    <nav className="flex flex-col gap-1.5 text-sm mt-6">
      <p className="text-xs font-bold uppercase tracking-wide text-app-text/50 mb-1">
        Chapters
      </p>
      <Link
        to={`/blog/${slug}`}
        className={
          !currentChapterSlug
            ? "text-app-brand font-bold"
            : "text-app-text/70 hover:text-app-brand transition-colors"
        }
      >
        Introduction
      </Link>
      {chapters.map((c) => (
        <Link
          key={c.slug}
          to={`/blog/${slug}/${c.slug}`}
          className={
            currentChapterSlug === c.slug
              ? "text-app-brand font-bold"
              : "text-app-text/70 hover:text-app-brand transition-colors"
          }
        >
          {c.title}
        </Link>
      ))}
    </nav>
  );
}
