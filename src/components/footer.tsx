import { useTheme } from "@/context/ThemeContext";
import { footer } from "@/data/Navigation";
import { Link } from "react-router-dom";

export function Footer() {
  const { contactOpen, setContactOpen } = useTheme();
  return (
    <footer className="border-t border-app-border bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Identity */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold tracking-tight text-app-heading">
              {footer.name}
            </span>
            <span className="text-sm text-app-text-muted">
              {footer.tagline}
            </span>
          </div>

          {/* Routes */}
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-wider text-app-text-muted">
              Pages
            </span>
            <ul className="flex flex-col gap-2 items-start">
              {footer.routes.map((r) => (
                <li key={r.href}>
                  <Link
                    to={r.href}
                    className="text-sm text-app-text transition-colors hover:text-app-brand"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
              {/* Wrap the button in an li and match styles exactly */}
              <li>
                <button
                  type="button"
                  onClick={() => setContactOpen(true)}
                  className="text-sm text-app-text transition-colors hover:text-app-brand text-left bg-transparent p-0 border-0 cursor-pointer block"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-wider text-app-text-muted">
              Elsewhere
            </span>
            <ul className="flex flex-col gap-2">
              {footer.socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target={s.external ? "_blank" : undefined}
                    rel={s.external ? "noreferrer" : undefined}
                    className="text-sm text-app-text transition-colors hover:text-app-brand"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-app-border pt-6 text-xs text-app-text-muted sm:flex-row sm:items-center">
          <span>
            © {footer.year} {footer.name}
          </span>
          <span>{footer.note}</span>
        </div>
      </div>
    </footer>
  );
}
