import { ROUTES } from "@/constants/routes";
import { MainLayout } from "@/Layouts/Main";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { Home } from "@/pages/Home";
import { Learning } from "@/pages/Learning";
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
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/Learning" element={<Learning />} /> */}
      </Route>
    </Route>,
  ),
);
