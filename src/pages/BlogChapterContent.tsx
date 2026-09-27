import { useParams } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import { getChapterComponent } from "@/lib/mdx";
import { mdxComponents } from "@/components/blogs/Mdx";

export function BlogChapterContent() {
  const { slug, chapter } = useParams<{ slug: string; chapter: string }>();
  if (!slug || !chapter) return null;

  const ChapterContent = getChapterComponent(slug, chapter);
  if (!ChapterContent) return <p>Chapter not found.</p>;

  return (
    <MDXProvider components={mdxComponents}>
      <ChapterContent />
    </MDXProvider>
  );
}
