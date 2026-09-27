// Layouts/Main.tsx
import { ContactModal } from "@/components/about/Contact";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/header";
import { ScrollToTop } from "@/components/ScrollTop";
import { useTheme } from "@/context/ThemeContext";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  const { contactOpen, setContactOpen } = useTheme();
  return (
    <div className="flex min-h-screen flex-col bg-app-bg text-app-text">
      {contactOpen && <ContactModal />}
      <Nav />
      <ScrollToTop />
      <main className="flex-1 pt-2">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
