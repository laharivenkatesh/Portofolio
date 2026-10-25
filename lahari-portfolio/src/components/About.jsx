import { motion } from 'framer-motion'
import { about } from '../data/portfolioData.js'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="eyebrow mb-4">About</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-accent-blush leading-tight mb-6">
            {about.heading}
          </h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-ink-muted leading-relaxed mb-4 text-[15px]">
              {p}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="relative pl-8"
        >
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-accent-blush/25" />
          {about.education.map((ed) => (
            <motion.div key={ed.school} variants={fadeUp} className="relative mb-10 last:mb-0">
              <span className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full bg-void border border-accent-blush" />
              <p className="text-xs font-label text-accent-rose/80 mb-1">{ed.period}</p>
              <h3 className="font-display text-lg text-ink font-semibold">{ed.school}</h3>
              <p className="text-ink-muted text-sm mt-1">{ed.degree}</p>
              <p className="text-ink-faint text-sm mt-0.5">{ed.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
