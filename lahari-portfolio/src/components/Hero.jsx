import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { profile, stats } from '../data/portfolioData.js'

function useTypewriter(words, { typeSpeed = 65, deleteSpeed = 35, pause = 1400 } = {}) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    } else {
      timeout = setTimeout(() => {
        setText((t) => (deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)))
      }, deleting ? deleteSpeed : typeSpeed)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause])

  return text
}

function Counter({ value, suffix = '', decimals = 0 }) {
  const [display, setDisplay] = useState(0)
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { duration: 1800, bounce: 0 })

  useEffect(() => {
    const unsub = spring.on('change', (v) => setDisplay(v))
    mv.set(value)
    return unsub
  }, [value])

  return (
    <span className="font-display font-semibold">
      {display.toFixed(decimals)}
      {suffix && <span className="font-body font-semibold text-[0.6em] ml-0.5 align-[0.35em]">{suffix}</span>}
    </span>
  )
}

export default function Hero() {
  const typed = useTypewriter(profile.roles)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rotateX = useTransform(my, [0, 1], [6, -6])
  const rotateY = useTransform(mx, [0, 1], [-6, 6])

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 section-pad"
      onMouseMove={onMouseMove}
    >
      <div className="ambient" aria-hidden="true">
        <span style={{ width: '46vw', height: '46vw', top: '-14vw', right: '-10vw', background: 'rgba(99,0,0,0.42)' }} />
        <span style={{ width: '34vw', height: '34vw', bottom: '-12vw', left: '-8vw', background: 'rgba(90,7,23,0.32)', animationDelay: '-9s' }} />
        <span style={{ width: '22vw', height: '22vw', top: '30%', left: '38%', background: 'rgba(217,175,152,0.05)', animationDelay: '-15s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center w-full">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-5"
          >
            open to full-time and Intern roles · 2027 grad
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-semibold text-[2.5rem] leading-[1.06] sm:text-6xl lg:text-[3.6rem] tracking-[-0.01em] text-accent-blush text-balance"
          >
            Hi, I'm {profile.name}.
            <br />
            <span className="italic font-medium text-accent-rose">
              {typed}
              <span className="inline-block w-[2px] h-[0.8em] bg-accent-rose ml-1 animate-blink align-middle" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 text-ink-muted text-base sm:text-lg max-w-xl leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a href="#projects" className="btn-primary">
              View my work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
            <a href={profile.resume} download className="btn-ghost">
              Download Resume
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl sm:text-4xl font-display font-semibold text-accent-blush">
                  <Counter value={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
                </div>
                <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-faint mt-1.5 leading-tight">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ rotateX, rotateY, transformPerspective: 1000 }}
          className="hidden lg:block"
        >
          <div className="relative">
            <div className="glass-card p-8 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <span className="font-label text-[11px] font-semibold uppercase tracking-[0.3em] text-accent-rose">Profile</span>
                <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#D89E93" d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
                </svg>
              </div>
              <dl className="divide-y divide-accent-blush/15">
                {[
                  ['Name', profile.name],
                  ['Focus', 'Full-Stack · Data & ML · REST APIs'],
                  ['School', "Saveetha Engineering College '27"],
                  ['Based in', profile.location],
                  ['Looking for', 'Full-time and Intern roles'],
                ].map(([k, v]) => (
                  <div key={k} className="py-3.5 first:pt-0 last:pb-0 flex flex-col gap-1">
                    <dt className="font-label text-[11px] font-semibold uppercase tracking-[0.26em] text-ink-faint">{k}</dt>
                    <dd className="font-display text-[18px] font-medium leading-snug text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-faint"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-label">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="w-[1px] h-8 bg-gradient-to-b from-accent-blush to-transparent"
        />
      </motion.div>
    </section>
  )
}
