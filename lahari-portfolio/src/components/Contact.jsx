import { motion } from 'framer-motion'
import { profile } from '../data/portfolioData.js'

const socials = [
  { label: 'Email', href: `mailto:${profile.email}`, detail: profile.email },
  { label: 'Phone', href: `tel:+91${profile.phone}`, detail: profile.phone },
  { label: 'GitHub', href: profile.github, detail: 'laharivenkatesh' },
  { label: 'LinkedIn', href: profile.linkedin, detail: 'lahariyegi' },
]

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative">
      <div className="max-w-4xl mx-auto text-center rounded-2xl bg-wine/25 border border-accent-blush/15 px-6 sm:px-14 py-16 sm:py-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-4"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl font-semibold text-accent-blush leading-tight mb-6"
        >
          Let's build something <span className="font-script font-normal text-[1.2em] text-accent-rose whitespace-nowrap">worth shipping.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-ink-muted max-w-lg mx-auto mb-10"
        >
          Graduating in 2027 and looking for full-time software engineering and Intern roles.
          Reach out — I read every message.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href={`mailto:${profile.email}`} className="btn-primary text-base !px-8 !py-4">
            Say hello
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M22 6l-10 7L2 6M2 6h20v12H2z" />
            </svg>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.label === 'GitHub' || s.label === 'LinkedIn' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="glass-card p-5 text-left hover:border-accent-blush/50 transition-colors duration-300"
            >
              <p className="text-xs font-label text-accent-rose/80 mb-1">{s.label}</p>
              <p className="text-ink text-sm truncate">{s.detail}</p>
            </a>
          ))}
        </motion.div>

        <p className="mt-8 text-sm text-ink-faint">Based in {profile.location}, India</p>
      </div>
    </section>
  )
}
