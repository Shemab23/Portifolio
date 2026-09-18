import React, { useState } from "react";

// 1. Data Object (Keeps all social URLs and contact info centralized)
const CONTACT_CONTENT = {
  header: {
    index: "04 // Network",
    title: "Let's build something useful.",
    description:
      "I'm currently looking for internship or junior Software Engineering opportunities where I can contribute, learn, and grow through real-world software development.",
  },
  email: "bruno.shema@example.com", // Replace with your actual email address
  socials: [
    { name: "GitHub", url: "https://github.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
  ],
  topics: ["Internship", "Junior role", "Project", "Other"],
};

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: CONTACT_CONTENT.topics[0],
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct email subject and body strings
    const subject = encodeURIComponent(
      `Portfolio Contact — [${formData.topic}]`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Topic: ${formData.topic}\n\n` +
        `Message:\n${formData.message}`,
    );

    // Open native mail client with formatted context pre-filled
    window.location.href = `mailto:${CONTACT_CONTENT.email}?subject=${subject}&body=${body}`;
  };

  const inputClasses =
    "p-2 border border-app-border rounded-md bg-muted text-app-text text-sm focus:outline-none focus:ring-1 focus:ring-ring";

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-4 py-16 font-sans antialiased text-app-text"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Heading & Context info */}
        <div className="flex flex-col justify-between py-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-xs font-mono tracking-widest uppercase text-muted-foreground">
              {CONTACT_CONTENT.header.index}
            </h2>
            <h3 className="text-2xl font-bold tracking-tight text-app-heading">
              {CONTACT_CONTENT.header.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-md">
              {CONTACT_CONTENT.header.description}
            </p>
          </div>

          {/* Direct Channels Footer */}
          <div className="mt-8 pt-6 border-t border-app-border flex flex-col gap-3 text-xs">
            <div>
              <span className="text-muted-foreground block mb-1">
                Prefer email?
              </span>
              <a
                href={`mailto:${CONTACT_CONTENT.email}`}
                className="font-mono font-medium hover:underline text-app-heading"
              >
                {CONTACT_CONTENT.email}
              </a>
            </div>
            <div>
              <span className="text-muted-foreground block mb-1">
                Or connect:
              </span>
              <div className="flex gap-3 font-medium">
                {CONTACT_CONTENT.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-app-heading"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Compact Form Panel */}
        <form onSubmit={handleSubmit} className="card-base flex flex-col gap-4">
          {/* Name Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-muted-foreground">
              Name
            </label>
            <input
              type="text"
              required
              placeholder="Your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={inputClasses}
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-muted-foreground">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={inputClasses}
            />
          </div>

          {/* Dropdown Topic Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-muted-foreground">
              What are you reaching out about?
            </label>
            <select
              value={formData.topic}
              onChange={(e) =>
                setFormData({ ...formData, topic: e.target.value })
              }
              className={inputClasses}
            >
              {CONTACT_CONTENT.topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-muted-foreground">
              Message
            </label>
            <textarea
              required
              rows={4}
              placeholder="Tell me a little about what you have in mind..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className={`${inputClasses} resize-none`}
            />
          </div>

          {/* Submit Action Button */}
          <button
            type="submit"
            className="mt-2 w-full p-2.5 bg-primary text-primary-foreground font-medium text-sm rounded-md hover:opacity-90 transition-opacity"
          >
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
};
