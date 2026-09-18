import { useTheme } from "@/src/context/ThemeContext";
import { navData } from "@/src/data/Metadata";
import { useState } from "react";
import { MenuIcon, X } from "lucide-react";
import { Nav } from "@/src/data/types";

interface OverlayProps {
  Links: Nav["links"];
  action: (value: boolean) => void; // Standard dispatch function type
}

const Overlay = ({ Links, action }: OverlayProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-app-bg/98 backdrop-blur-sm flex flex-col">
      <div className="flex justify-end p-6">
        <X
          onClick={() => action(false)}
          className="text-app-heading cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-6 px-8 pt-8">
        {Links.map((link) => (
          <a
            href={link.link}
            key={link.label}
            onClick={() => action(false)}
            className="text-lg font-semibold leading-6 text-app-heading"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default function Navbar() {
  const { logo } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 left-0 right-0 z-40 flex flex-row justify-between items-center px-6 sm:px-8 lg:px-12 py-6 bg-app-bg/80 backdrop-blur-md border-b border-app-border">
      <a href="/" className="flex flex-row gap-1 items-center">
        <img src={logo} alt="Logo" width={25} height={25} />
        <span className="hidden md:block text-sm font-semibold leading-6 text-app-heading">
          {navData.logo.label.toUpperCase()}
        </span>
      </a>

      <nav className="hidden sm:flex flex-row gap-8">
        {navData.links.map((link) => (
          <a
            href={link.link}
            key={link.label}
            className="text-sm font-semibold leading-6 text-app-text hover:text-app-heading transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="block sm:hidden">
        {menuOpen ? (
          <Overlay Links={navData.links} action={setMenuOpen} />
        ) : (
          <MenuIcon
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-app-heading cursor-pointer"
          />
        )}
      </div>
    </header>
  );
}
