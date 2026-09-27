import { ROUTES } from "@/constants/routes";
import { MainLayout } from "@/Layouts/Main";
import { About } from "@/pages/About";
import { Home } from "@/pages/Home";
import { Blog } from "@/pages/Blog";
import { Work } from "@/pages/Work";
import { BlogPostContent } from "@/pages/BlogPostContent";
import { BlogChapterContent } from "@/pages/BlogChapterContent";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { BlogPostLayout } from "@/Layouts/BlogPostLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
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
