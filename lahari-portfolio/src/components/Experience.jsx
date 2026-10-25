import { motion } from 'framer-motion'
import { experience } from '../data/portfolioData.js'

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="eyebrow mb-4">Experience</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-accent-blush">
            Where I've worked.
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experience.map((exp) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-7 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">{exp.role}</h3>
                  <p className="text-accent-blush text-sm mt-1">
                    {exp.org} · {exp.location}
                  </p>
                </div>
                <span className="font-label text-xs text-ink-faint glass px-3 py-1.5 rounded-full whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-3">
                {exp.points.map((pt, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="flex gap-3 text-sm text-ink-muted leading-relaxed"
                  >
                    <span className="text-accent-blush mt-1 shrink-0">◆</span>
                    <span>{pt}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
