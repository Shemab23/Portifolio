import { contact } from "@/data/home/profile";
import { motion } from "framer-motion";

export function HomeContact() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-6 py-2 md:py-4">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-12 flex flex-col gap-3"
        >
          <span className="text-sm font-medium uppercase tracking-wider text-app-brand">
            {contact.label}
          </span>
          <h2 className="max-w-2xl text-2xl font-semibold leading-snug tracking-tight text-app-heading md:text-4xl">
            {contact.headline}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* CHANNELS */}
          <div className="flex flex-col gap-4 md:col-span-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {contact.channels.map((channel, i) => (
                <motion.a
                  key={channel.label}
                  href={channel.href}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.08,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="card-base group flex flex-col gap-2 hover:-translate-y-0.5 hover:border-[var(--brand-border)]"
                >
                  <span className="text-xs uppercase tracking-wider text-app-text-muted">
                    {channel.label}
                  </span>
                  <span className="text-base font-medium text-app-heading">
                    {channel.value}
                  </span>
                  {channel.note && (
                    <span className="text-xs text-app-text-muted">
                      {channel.note}
                    </span>
                  )}
                </motion.a>
              ))}
            </div>

            {/* SOCIALS */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              {contact.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-app-text-muted transition-colors hover:text-app-brand"
                >
                  {social.label}
                </a>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-4 text-sm text-app-text-muted"
            >
              {contact.closing}
            </motion.p>
          </div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="w-full"
          >
            <div className="card-base h-full overflow-hidden p-0">
              <img
                src="/home/contact.jpeg"
                alt="A phone, a coffee, and a notebook on a warm neutral desk."
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
