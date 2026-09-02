import { useState, type FormEvent } from 'react';
import { X, Mail, Copy, Check, ArrowUpRight, Github, Linkedin, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);
  const [inquiryType, setInquiryType] = useState('Recruitment');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendEmail = (e: FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(
      `[${inquiryType}] ${subject || 'Portfolio Inquiry from ' + (name || 'Website Visitor')}`
    );
    const mailBody = encodeURIComponent(
      `Hi Bruno,\n\nName: ${name || 'Not specified'}\nCategory: ${inquiryType}\n\nMessage:\n${message}\n\nBest regards.`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#141517]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-2xl bg-[#FAF9F6] border border-[#E3DFD5] shadow-2xl overflow-hidden p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#EFECE6] text-[#555861] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-6">
          <div className="text-xs font-mono tracking-widest uppercase text-[#9B4A22] mb-1 flex items-center gap-2">
            <span className="w-2 h-[1.5px] bg-[#9B4A22]"></span>
            Start a Conversation
          </div>
          <h3 className="text-2xl font-bold text-[#141517] tracking-tight">
            Connect with Bruno Shema
          </h3>
          <p className="text-xs sm:text-sm text-[#5A5D66] mt-1">
            Available for software engineering opportunities, systems architecture discussions, and technical collaborations.
          </p>
        </div>

        {/* Quick Email Copy Strip */}
        <div className="p-3.5 rounded-xl bg-[#F2EFE8] border border-[#E2DDD4] flex items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#23252B] truncate">
            <Mail className="w-4 h-4 text-[#9B4A22] shrink-0" />
            <span className="truncate">{PERSONAL_INFO.email}</span>
          </div>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF9F6] border border-[#D5D0C5] text-xs font-mono font-medium text-[#141517] hover:bg-white transition-colors shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#757780]" />
                <span>Copy Address</span>
              </>
            )}
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSendEmail} className="space-y-4 text-xs">
          <div>
            <label className="block font-mono uppercase tracking-wider text-[#636670] mb-1.5">
              Inquiry Purpose
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono">
              {['Recruitment', 'Project', 'Consultation', 'Research'].map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => setInquiryType(type)}
                  className={`py-2 px-2.5 rounded-lg border text-center transition-all ${
                    inquiryType === type
                      ? 'bg-[#141517] text-white border-[#141517] font-semibold'
                      : 'bg-[#FAF9F6] text-[#4F525B] border-[#DDD8CD] hover:bg-[#EFECE5]'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-mono uppercase tracking-wider text-[#636670] mb-1">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Morgan"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF9F6] border border-[#DDD8CD] text-[#141517] text-xs focus:outline-none focus:ring-1 focus:ring-[#9B4A22]"
              />
            </div>
            <div>
              <label className="block font-mono uppercase tracking-wider text-[#636670] mb-1">
                Topic / Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. Software Engineer Opportunity"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF9F6] border border-[#DDD8CD] text-[#141517] text-xs focus:outline-none focus:ring-1 focus:ring-[#9B4A22]"
              />
            </div>
          </div>

          <div>
            <label className="block font-mono uppercase tracking-wider text-[#636670] mb-1">
              Message
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Outline the problem, system, or role you would like to discuss..."
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF9F6] border border-[#DDD8CD] text-[#141517] text-xs focus:outline-none focus:ring-1 focus:ring-[#9B4A22] resize-none"
            />
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3 font-mono text-[#555861]">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#9B4A22]"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span>•</span>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#9B4A22]"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#9B4A22] text-[#FAF9F6] font-semibold text-xs uppercase tracking-wider hover:bg-[#833D1B] transition-colors"
            >
              <span>Compose Email</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
