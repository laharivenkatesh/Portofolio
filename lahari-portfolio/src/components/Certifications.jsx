import { motion } from 'framer-motion'
import { certifications } from '../data/portfolioData.js'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function BadgeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-accent-blush"
    >
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 14.5L7 22l5-3 5 3-1.5-7.5" />
    </svg>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="eyebrow mb-4">Certifications</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-accent-blush">
            Credentials I've earned.
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {certifications.map((c) => (
            <motion.div
              key={c.title}
              variants={item}
              whileHover={{ y: -5, borderColor: 'rgba(217,175,152,0.4)' }}
              className="glass-card p-6 flex flex-col"
            >
              <div className="w-9 h-9 rounded-lg bg-cotton/5 border border-glass-border flex items-center justify-center mb-4">
                <BadgeIcon />
              </div>
              <h3 className="font-display text-base font-semibold text-ink mb-1">{c.title}</h3>
              <p className="text-accent-blush text-xs mb-2">{c.issuer}</p>
              {c.detail && (
                <p className="text-ink-muted text-sm leading-relaxed">{c.detail}</p>
              )}
              {c.link && (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-5 inline-flex items-center gap-1.5 text-xs font-label text-ink-muted hover:text-cream transition-colors"
                >
                  View certificate
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M7 17L17 7M17 7H8M17 7v9" />
                  </svg>
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
