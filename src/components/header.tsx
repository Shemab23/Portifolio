import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { nav } from "@/data/Navigation";
import { useTheme } from "@/context/ThemeContext";
import { X, Menu } from "lucide-react";

const PhoneNav = () => {
  return (
    <div className="h-69 w-auto relative top-0 right-0 bg-green-300"></div>
  );
};

export function Nav() {
  const { contactOpen, setContactOpen } = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  const { theme, toggle } = useTheme();

  const ToggleMenu = (state: boolean) => {
    setOpen(state);
  };

  return (
    <header
      className={cn(
        "z-50 text-md sticky top-0 transition-all duration-300 bg-secondary",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Left — name */}
        <Link to={nav.homeHref} className="flex flex-col">
          <span className="tracking-tight font-extrabold text-lg md:text-xl">
            {nav.name}
          </span>
          <span className="text-sm italic text-app-text-muted">
            {nav.position}
          </span>
        </Link>

        {/* Center — desktop nav */}
        <nav className="hidden items-center gap-4 md:gap-12 md:flex">
          {nav.items.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "font-bold",
                  isActive
                    ? "text-app-heading underline underline-offset-3 "
                    : "text-app-heading/70 hover:text-app-heading",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={() => setContactOpen(true)}
            className="font-bold text-app-heading/70 hover:text-app-heading"
          >
            Contact
          </button>
        </nav>

        {/* Right — CTA, theme toggle, mobile menu toggle */}
        <div className="flex items-center gap-2">
          {/* Theme toggle — all screen sizes */}
          <button
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-app-border text-app-text transition-colors hover:bg-secondary"
          >
            {theme === "dark" ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => ToggleMenu(!open)}
            className="cursor-pointer flex h-9 w-9 items-center justify-center rounded-md border border-app-border text-app-text md:hidden hover:border-4 hover:border-app-brand-border"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute top-16 right-0 h-auto w-1/2  bg-sidebar-accent/80 rounded-b-md font-bold text-lg text-app-text flex flex-col gap-2">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {nav.items.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "bg-secondary text-app-heading"
                      : "text-app-text-muted hover:bg-secondary hover:text-app-heading",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="font-bold text-app-heading/70 hover:text-app-heading"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
