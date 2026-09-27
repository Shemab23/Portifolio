import { useParams } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import { getPostComponent } from "@/lib/mdx";
import { mdxComponents } from "@/components/blogs/Mdx";

export function BlogPostContent() {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return null;

  const PostContent = getPostComponent(slug);
  if (!PostContent) return <p>Post not found.</p>;

  return (
    <MDXProvider components={mdxComponents}>
      <PostContent />
    </MDXProvider>
  );
}
