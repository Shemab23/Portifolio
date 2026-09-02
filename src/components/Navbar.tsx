import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Process', href: '#process' },
    { label: 'Direction', href: '#direction' },
    { label: 'Experience', href: '#experience' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#E8E6DF] py-3 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="#"
          className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9B4A22]"
        >
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-semibold tracking-wider text-[#141517] uppercase group-hover:text-[#9B4A22] transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] tracking-normal text-[#757780] font-mono">
              Software Engineer // B.Sc.
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium uppercase tracking-wider text-[#4A4C54]">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-[#9B4A22] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#9B4A22] hover:after:w-full after:transition-all after:duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-full bg-[#16171A] text-[#FAF9F6] hover:bg-[#9B4A22] transition-colors duration-200 shadow-sm"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenContact}
            aria-label="Open contact form"
            className="p-2 rounded-full border border-[#E0DED7] text-[#141517] hover:bg-[#EFECE6]"
          >
            <Mail className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-[#141517] hover:bg-[#EFECE6] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-b border-[#E8E6DF] px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4 text-sm font-medium uppercase tracking-wider text-[#2D2F36]">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#9B4A22] transition-colors flex items-center justify-between border-b border-[#F0EFEA]"
              >
                <span>{item.label}</span>
                <span className="text-xs text-[#9B4A22] font-mono">→</span>
              </a>
            ))}
          </nav>
          <div className="mt-6 pt-4 border-t border-[#E8E6DF]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 rounded-lg bg-[#9B4A22] text-white font-semibold text-xs tracking-wider uppercase text-center flex items-center justify-center gap-2"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
