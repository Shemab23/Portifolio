import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { nav } from "@/data/Navigation";
import { useTheme } from "@/context/ThemeContext";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const ctaHref = isHome ? nav.cta.href : `/${nav.cta.href}`;

  return (
    <header
      className={cn(
        "sticky inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-app-border bg-app-bg/80 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Left — name */}
        <Link
          to={nav.homeHref}
          className="text-sm font-semibold tracking-tight text-app-heading"
        >
          {nav.name}
        </Link>

        {/* Center — desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.items.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "text-sm transition-colors",
                  isActive
                    ? "text-app-heading"
                    : "text-app-text-muted hover:text-app-heading",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right — CTA, theme toggle, mobile menu toggle */}
        <div className="flex items-center gap-2">
          {/* Desktop CTA */}
          <a
            href={ctaHref}
            className="hidden rounded-lg border border-app-border px-4 py-1.5 text-sm font-medium text-app-text transition-colors hover:bg-[var(--secondary)] md:inline-flex"
          >
            {nav.cta.label}
          </a>

          {/* Theme toggle — all screen sizes */}
          <button
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-app-border text-app-text transition-colors hover:bg-[var(--secondary)]"
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
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-app-border text-app-text md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={cn(
                  "absolute left-0 top-0 h-px w-full bg-current transition-transform",
                  open && "translate-y-1.5 rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 h-px w-full bg-current transition-opacity",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-3 h-px w-full bg-current transition-transform",
                  open && "-translate-y-1.5 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={cn(
          "overflow-hidden border-t border-app-border bg-app-bg transition-[max-height] duration-300 md:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {nav.items.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "rounded-md px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-[var(--secondary)] text-app-heading"
                    : "text-app-text-muted hover:bg-[var(--secondary)] hover:text-app-heading",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={ctaHref}
            className="mt-2 rounded-md bg-[var(--contrast)] px-3 py-2 text-sm font-medium text-[var(--bg)]"
          >
            {nav.cta.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
