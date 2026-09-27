import { BlogListSection } from "@/components/blogs/BlogListSection";
import { getAllPosts } from "@/lib/mdx";

export function Blog() {
  const posts = getAllPosts();
  return <BlogListSection posts={posts} />;
}
