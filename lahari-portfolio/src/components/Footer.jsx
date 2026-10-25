import { profile } from '../data/portfolioData.js'

export default function Footer() {
  return (
    <footer className="px-6 sm:px-10 lg:px-24 py-8 border-t border-accent-blush/10 bg-wine/25">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-faint">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React, Tailwind & Framer Motion.</p>
        <div className="flex gap-5">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-ink transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
