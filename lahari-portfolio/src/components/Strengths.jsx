import { motion } from 'framer-motion'
import { strengths } from '../data/portfolioData.js'

const icons = [
  <path key="1" d="M4 17V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10M4 17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M4 17l5-5M20 17l-5-5M9 12l3 3 3-3" />,
  <>
    <path key="2a" d="M12 2a10 10 0 1 0 10 10" />
    <path key="2b" d="M12 6v6l4 2" />
  </>,
  <path key="3" d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />,
  <path key="4" d="M12 2l2.4 7.2H22l-6 4.6 2.3 7.2-6.3-4.6-6.3 4.6 2.3-7.2-6-4.6h7.6z" />,
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Strengths() {
  return (
    <section className="section-pad !pt-8 !pb-16 relative" aria-label="Core strengths">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {strengths.map((s, i) => (
            <motion.div key={s.title} variants={item} className="glass-card p-6">
              <div className="w-10 h-10 rounded-lg bg-cherry border border-accent-blush/25 flex items-center justify-center mb-4">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D9AF98" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {icons[i]}
                </svg>
              </div>
              <h3 className="font-display text-base font-semibold text-ink mb-2">{s.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{s.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
