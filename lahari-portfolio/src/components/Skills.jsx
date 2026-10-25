import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData.js'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl bg-parchment text-wine p-8 sm:p-12 shadow-card"
        >
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow !text-cherry mb-4">Skills</p>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold text-wine leading-[1.05]">
                The stack
                <br />I build with.
              </h2>
            </div>
            <p className="max-w-xs text-[15px] font-medium leading-relaxed text-wine">
              Languages, frameworks and tools I reach for across web, data and cloud work.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-wine/30"
          >
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                variants={item}
                className="py-8 sm:pr-8 lg:[&:not(:nth-child(3n))]:border-r border-wine/25 lg:[&:not(:nth-child(3n+1))]:pl-8 border-b"
              >
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="font-display font-semibold text-[20px] uppercase tracking-[0.05em] text-wine">
                    {group.category}
                  </h3>
                  <span className="font-display font-semibold text-base text-cherry">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-2">
                  {group.items.map((s) => (
                    <span
                      key={s}
                      className="px-3.5 py-1.5 rounded-full border border-wine/45 text-[14px] font-medium text-wine hover:bg-wine hover:text-cream hover:border-wine transition-colors duration-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
