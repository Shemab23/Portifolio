import { useTheme } from "@/src/context/ThemeContext";
import React from "react";

const FOOTER_CONTENT = {
  identity: {
    label: "BRUNO SHEMA",
    role: "Software Engineer",
    tagline:
      "Building practical software today, exploring intelligent systems for tomorrow.",
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#toolkit" },
    { label: "Contact", href: "#contact" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/Shemab23" },
    { label: "LinkedIn", href: "https://linkedin.com/in/bruno-shema" },
    { label: "YouTube", href: "https://www.youtube.com/@shemabruno1508" },
    { label: "Instagram", href: "https://www.instagram.com/shemab23" },
  ],
  copyright: `© ${new Date().getFullYear()} Bruno Shema. All rights reserved.`,
};

export const Footer = () => {
  const { logo } = useTheme();

  return (
    <footer
      id="footer"
      className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 font-sans antialiased text-app-text"
    >
      {/* Structural Divider */}
      <div className="w-full border-t border-app-border" />

      {/* Main Grid Content Area */}
      <div className="py-12 flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        {/* Left Column: Brand Identity */}
        <div className="flex flex-col gap-3 max-w-sm">
          {/* Logo Integration matching Navbar structure */}
          <a href="/" className="flex flex-row items-center gap-1.5 w-fit">
            <img src={logo} alt="Logo" width={25} height={25} />
            <span className="text-sm font-semibold tracking-wide text-app-heading">
              {FOOTER_CONTENT.identity.label}
            </span>
          </a>

          <div className="flex flex-col gap-1">
            <span className="text-xs font-mono font-medium text-muted-foreground">
              {FOOTER_CONTENT.identity.role}
            </span>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {FOOTER_CONTENT.identity.tagline}
            </p>
          </div>
        </div>

        {/* Right Columns: Links Layout */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
          {/* Internal Navigation */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
              Navigation
            </span>
            <div className="flex sm:flex-col flex-wrap gap-x-4 gap-y-1.5 text-xs font-medium text-muted-foreground">
              {FOOTER_CONTENT.navigation.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-app-heading transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Channels */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
              Connect
            </span>
            <div className="flex sm:flex-col flex-wrap gap-x-4 gap-y-1.5 text-xs font-medium text-muted-foreground">
              {FOOTER_CONTENT.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-app-heading transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Section */}
      <div className="pb-6 pt-2 border-t border-app-border flex max-w-full text-muted-foreground text-xs">
        <span>{FOOTER_CONTENT.copyright}</span>
      </div>
    </footer>
  );
};
