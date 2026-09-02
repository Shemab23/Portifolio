import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 sm:py-20 bg-[#F5F2EB] text-[#141517]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E2DDD3]">
          
          {/* Brand & Mission Statement */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold tracking-wider uppercase text-[#141517]">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#E8E4DA] text-[#6E717A]">
                B.Sc. Software Engineering
              </span>
            </div>
            
            <p className="text-sm text-[#52555E] max-w-md leading-relaxed">
              Software Engineer building practical software and exploring intelligent systems. Grounded in architecture, databases, and continuous experimentation.
            </p>
          </div>

          {/* Site Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#828590] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono uppercase tracking-wider text-[#474952]">
              <li>
                <a href="#work" className="hover:text-[#9B4A22] transition-colors">
                  Work & Systems
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[#9B4A22] transition-colors">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-[#9B4A22] transition-colors">
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#9B4A22] transition-colors">
                  Engineering Process
                </a>
              </li>
              <li>
                <a href="#direction" className="hover:text-[#9B4A22] transition-colors">
                  Future Direction
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#9B4A22] transition-colors">
                  Experience & Education
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#9B4A22] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#828590] mb-4">
              Connect
            </h4>
            <div className="space-y-2 text-xs font-mono text-[#474952]">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#9B4A22] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub @Bruno-250</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#9B4A22] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={onOpenContact}
                className="flex items-center gap-2 hover:text-[#9B4A22] transition-colors text-left"
              >
                <Mail className="w-4 h-4" />
                <span>{PERSONAL_INFO.email}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7D808A]">
          <p>© 2026 Bruno Shema. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span>Built with precision & engineering rigor</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-[#DDD8CE] hover:bg-[#FAF9F6] text-[#141517] transition-colors flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px]">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
