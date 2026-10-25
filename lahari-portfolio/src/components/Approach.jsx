import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { approach, explore } from '../data/portfolioData.js'

// One word of the statement: fades from dim to full as the reader scrolls past it
function Word({ children, progress, range, highlight }) {
  const opacity = useTransform(progress, range, [0.18, 1])
  return (
    <motion.span
      style={{ opacity }}
      className={`inline-block mr-[0.28em] ${highlight ? 'italic text-accent-rose' : ''}`}
    >
      {children}
    </motion.span>
  )
}

function RevealStatement({ text, highlightLast = 0 }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'start 0.4'] })
  const words = text.split(' ')
  return (
    <h3
      ref={ref}
      className="font-display font-semibold text-accent-blush text-[2rem] sm:text-5xl leading-[1.12] tracking-[-0.01em]"
    >
      {words.map((w, i) => (
        <Word
          key={i}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
          highlight={i >= words.length - highlightLast}
        >
          {w}
        </Word>
      ))}
    </h3>
  )
}

const label =
  'font-label text-xs font-semibold uppercase tracking-[0.2em] text-accent-rose whitespace-nowrap'

export default function Approach() {
  return (
    <section id="approach" className="section-pad relative">
      <div className="max-w-6xl mx-auto rounded-xl border border-accent-blush/20 overflow-hidden bg-navy-deep/40">
        {/* 01 — Approach */}
        <div className="grid lg:grid-cols-[250px_1fr]">
          <div className="px-6 py-6 lg:px-8 lg:py-8 border-b lg:border-b-0 lg:border-r border-accent-blush/20">
            <h2 className={label}>( 01 — Approach )</h2>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-accent-blush/20"
          >
            {approach.map((step) => (
              <motion.div
                key={step.title}
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
                }}
                className="p-6 lg:p-8"
              >
                <h3 className="font-display font-bold text-accent-blush text-[1.85rem] uppercase tracking-[0.06em] mb-4">
                  {step.title}
                </h3>
                <p className="text-ink-muted text-[15px] leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 02 — Explore */}
        <div id="explore" className="grid lg:grid-cols-[250px_1fr] border-t border-accent-blush/20">
          <div className="px-6 py-6 lg:px-8 lg:py-8 border-b lg:border-b-0 lg:border-r border-accent-blush/20">
            <h2 className={label}>( 02 — Explore )</h2>
          </div>
          <div className="px-6 py-12 lg:px-14 lg:py-16 max-w-4xl">
            <RevealStatement text={explore.statement} highlightLast={explore.highlightLast} />
            <p className="mt-8 text-ink-muted text-base leading-relaxed max-w-2xl">{explore.text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
