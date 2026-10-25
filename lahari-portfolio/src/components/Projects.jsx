import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/portfolioData.js'

function handleMove(e) {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M7 17L17 7M17 7H8M17 7v9" />
    </svg>
  )
}
function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a10.98 10.98 0 0 1 5.79 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
    </svg>
  )
}
function PlayIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}
function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

function ProjectLinks({ p, onWatchDemo }) {
  return (
    <div className="flex gap-2 shrink-0">
      {p.demo && (
        <a
          href={p.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${p.title} live demo`}
          className="w-9 h-9 rounded-full glass flex items-center justify-center text-ink-muted hover:text-cream hover:border-accent-blush/60 transition-colors"
        >
          <ExternalIcon />
        </a>
      )}
      {!p.demo && p.demoVideo && (
        <button
          onClick={() => onWatchDemo(p)}
          className="flex items-center gap-1.5 text-[11px] font-label text-ink-muted glass px-3 py-2 rounded-full hover:text-cream hover:border-accent-blush/60 transition-colors"
        >
          <PlayIcon />
          Watch demo
        </button>
      )}
      {!p.demo && !p.demoVideo && (
        <span
          title={p.demoNote}
          className="text-[10px] font-label text-ink-faint glass px-2.5 py-2 rounded-full whitespace-nowrap self-center"
        >
          {p.demoNote}
        </span>
      )}
      {p.github && (
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${p.title} on GitHub`}
          className="w-9 h-9 rounded-full glass flex items-center justify-center text-ink-muted hover:text-cream hover:border-accent-blush/60 transition-colors"
        >
          <GithubIcon />
        </a>
      )}
    </div>
  )
}

function VideoModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-void/85 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="glass-card w-full max-w-3xl overflow-hidden shadow-card"
      >
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-glass-border">
          <div>
            <p className="text-xs font-label text-accent-rose/80 uppercase tracking-wide">Demo</p>
            <h3 className="font-display text-sm text-ink font-semibold mt-0.5">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close demo video"
            className="w-8 h-8 rounded-full glass flex items-center justify-center text-ink-muted hover:text-cream transition-colors"
          >
            <CloseIcon />
          </button>
        </div>
        <video
          src={project.demoVideo}
          controls
          autoPlay
          playsInline
          className="w-full aspect-video bg-black"
        />
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)
  const [videoProject, setVideoProject] = useState(null)

  return (
    <section id="projects" className="section-pad relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="eyebrow mb-4">Featured Projects</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-accent-blush">
            Things I've <span className="font-script font-normal text-[1.15em] text-accent-rose">shipped.</span>
          </h2>
        </motion.div>

        {featured && (
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            onMouseMove={handleMove}
            className="spotlight glass-card p-8 sm:p-10 mb-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-10"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="eyebrow !text-accent-blush">Featured</span>
                <span className="h-px flex-1 bg-glass-border" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink mb-4">
                {featured.title}
              </h3>
              <p className="text-ink-muted leading-relaxed text-sm mb-6">{featured.description}</p>

              {featured.problem && featured.approach && (
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-xs font-label uppercase tracking-wide text-accent-rose/80 mb-1.5">Problem</p>
                    <p className="text-ink-muted text-sm leading-relaxed">{featured.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-label uppercase tracking-wide text-accent-rose/80 mb-1.5">Approach</p>
                    <p className="text-ink-muted text-sm leading-relaxed">{featured.approach}</p>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 mb-6">
                {featured.tech.map((t) => (
                  <span key={t} className="text-[11px] font-label px-2 py-1 rounded-md bg-cotton/5 text-ink-muted">
                    {t}
                  </span>
                ))}
              </div>

              <ProjectLinks p={featured} onWatchDemo={setVideoProject} />
            </div>

            <div className="glass rounded-2xl p-6 flex flex-col justify-center">
              <p className="text-xs font-label uppercase tracking-wide text-accent-rose/80 mb-4">
                What made it work
              </p>
              <ul className="space-y-4">
                {featured.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-ink leading-relaxed">
                    <span className="text-accent-blush mt-0.5 shrink-0">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        )}

        <div className={`grid gap-6 ${rest.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'}`}>
          {rest.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1, ease: 'easeOut' }}
              onMouseMove={handleMove}
              whileHover={{ y: -6 }}
              className="spotlight glass-card p-6 flex flex-col group"
            >
              <div className="flex items-start justify-between mb-4 gap-2">
                <div className="w-10 h-10 rounded-lg bg-cherry border border-accent-blush/25 flex items-center justify-center font-display font-semibold text-accent-blush text-sm shrink-0">
                  {String(i + 2).padStart(2, '0')}
                </div>
                <ProjectLinks p={p} onWatchDemo={setVideoProject} />
              </div>

              <h3 className="font-display text-lg font-semibold text-ink mb-2 group-hover:text-accent-blush transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-ink-muted text-sm leading-relaxed mb-4">{p.description}</p>

              <ul className="space-y-1.5 mb-5">
                {p.highlights.slice(0, 3).map((h) => (
                  <li key={h} className="text-xs text-ink-faint flex gap-2">
                    <span className="text-accent-rose mt-0.5">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-1.5 pt-4 border-t border-glass-border">
                {p.tech.map((t) => (
                  <span key={t} className="text-[11px] font-label px-2 py-1 rounded-md bg-cotton/5 text-ink-muted">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {videoProject && <VideoModal project={videoProject} onClose={() => setVideoProject(null)} />}
      </AnimatePresence>
    </section>
  )
}
