// Layouts/Main.tsx
import { Footer } from "@/components/footer";
import { Nav } from "@/components/header";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-app-bg text-app-text">
      <Nav />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
