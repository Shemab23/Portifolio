// components/ContactModal.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

// --- Configuration ---
const WEB3FORMS_ACCESS_KEY = "c5108978-cabc-432f-9648-1d22144e4ddd";
const DEST_WHATSAPP = "905391351079";

const SERVICES = [
  { group: "General", items: ["General Inquiry"] },
  {
    group: "Web & App Development",
    items: [
      "Full-stack architecture",
      "MVP rapid deployment",
      "Legacy code refactoring",
      "Database design & optimization",
    ],
  },
  {
    group: "AI Integration & Automation",
    items: [
      "Multi-model AI orchestration",
      "Workflow task automation",
      "Intelligent data extraction",
      "Custom chatbot pipelines",
    ],
  },
  {
    group: "Digitizing Manual Processes",
    items: [
      "Custom business dashboards",
      "Spreadsheet-to-app migration",
      "Data pipeline structuring",
      "Internal operational tooling",
    ],
  },
  {
    group: "UI/UX Design & Branding Systems",
    items: [
      "High-fidelity UI components",
      "Design tokens & color systems",
      "Sleek user journey layouts",
      "AI content generation setups",
    ],
  },
  {
    group: "Code Quality & Technical Mentorship",
    items: [
      "Deep-dive performance audits",
      "C/C++ & OOP mentoring",
      "QA testing infrastructure",
      "Algorithm design coaching",
    ],
  },
];

export function ContactModal() {
  const { contactOpen, setContactOpen } = useTheme();

  // Controlled states for validation and fallback generation
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("General Inquiry");
  const [message, setMessage] = useState("");

  // Status tracking states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleClose = () => {
    setContactOpen(false);
    setTimeout(() => setSubmitStatus("idle"), 200);
  };

  // Official Web3Forms Async Engine Integration
  const handleSubmitEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Form data creation mirroring Web3forms native structure
    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append(
      "subject",
      service === "General Inquiry"
        ? `New Project Inquiry from ${name}`
        : `Inquiry: ${service}`,
    );
    formData.append("name", name);
    formData.append("email", email);
    formData.append("service", service);
    formData.append("message", message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData, // Fixed: Sends packed multipart form mapping instead of stringified json
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        // Clear variables on successful submission
        setName("");
        setEmail("");
        setMessage("");
        setService("General Inquiry");
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // WhatsApp Fallback string assembly
  const whatsappText = `Hi, I'm ${name || "interested in working together"}.\nService: ${service}\nMessage: ${message}\nContact: ${email}`;
  const whatsappLink = `https://wa.me/${DEST_WHATSAPP}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <AnimatePresence>
      {contactOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />

          <div
            onClick={handleClose}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-app-bg border border-app-border/50 rounded-xl p-6 md:p-8 relative shadow-xl my-auto"
            >
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 text-app-text/40 hover:text-app-text transition-colors p-1 rounded-md hover:bg-app-border/20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <h2 className="text-2xl font-extrabold text-app-heading mb-2 tracking-tight">
                  Let's talk
                </h2>
                <p className="text-sm text-app-text/60">
                  Fill out your info and it will send directly to my email
                  address.
                </p>
              </div>

              {submitStatus === "success" && (
                <div className="mb-4 p-3 text-sm text-emerald-600 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                  ✓ Message sent instantly! Check your inbox soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-4 p-3 text-sm text-rose-600 bg-rose-500/10 border border-rose-500/20 rounded-lg">
                  ✕ Delivery failed. Please try again or use WhatsApp below.
                </div>
              )}

              <form
                onSubmit={handleSubmitEmail}
                className="flex flex-col gap-4 mb-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name" // Fixed: Added key map identifier attributes
                    required
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-app-bg border border-app-border/40 rounded-lg px-4 py-2.5 text-sm text-app-text focus:outline-none focus:border-app-brand/60"
                  />
                  <input
                    type="email"
                    name="email" // Fixed: Added key map identifier attributes
                    required
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-app-bg border border-app-border/40 rounded-lg px-4 py-2.5 text-sm text-app-text focus:outline-none focus:border-app-brand/60"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-app-text/50 uppercase tracking-wider pl-1">
                    Select a Service
                  </label>
                  <select
                    name="service" // Fixed: Added key map identifier attributes
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-app-bg border border-app-border/40 rounded-lg px-3 py-2.5 text-sm text-app-text focus:outline-none focus:border-app-brand/60 cursor-pointer"
                  >
                    {SERVICES.map((group) => (
                      <optgroup
                        key={group.group}
                        label={group.group}
                        className="bg-app-bg text-app-text"
                      >
                        {group.items.map((item) => (
                          <option
                            key={item}
                            value={item}
                            className="bg-app-bg text-app-text"
                          >
                            {item}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>

                <textarea
                  required
                  name="message" // Fixed: Added key map identifier attributes
                  placeholder="What's on your mind? Share some context..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full bg-app-bg border border-app-border/40 rounded-lg px-4 py-2.5 text-sm text-app-text focus:outline-none focus:border-app-brand/60 resize-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center text-sm font-bold text-app-heading bg-app-brand/10 hover:bg-app-brand/20 border border-app-brand/30 py-3 rounded-lg transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? "Sending Message..."
                    : "Send Message Directly"}
                </button>
              </form>

              <div className="text-center pt-4 border-t border-app-border/20">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs font-medium text-app-text/60 hover:text-app-brand transition-colors underline underline-offset-4 decoration-1"
                >
                  or instantly message on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
