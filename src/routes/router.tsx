import About from "@/components/home/About";
import { BlogPostLayout } from "@/Layouts/BlogPostLayout";
import { MainLayout } from "@/Layouts/Main";
import { Blog } from "@/pages/Blog";
import { BlogChapterContent } from "@/pages/BlogChapterContent";
import { BlogPostContent } from "@/pages/BlogPostContent";
import { Home } from "@/pages/Home";
import { Work } from "@/pages/Work";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/blog/:slug" element={<BlogPostLayout />}>
          <Route index element={<BlogPostContent />} />
          <Route path=":chapter" element={<BlogChapterContent />} />
        </Route>
      </Route>
    </Route>,
  ),
);
