'use client'
import { useEffect, useState } from 'react'
import { NAV_ITEMS } from '@/lib/data'

export default function Sidebar() {
  const [active, setActive] = useState('about')
  const [hovered, setHovered] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between py-12 lg:w-[280px] shrink-0">
      <div>
        <div className="mb-10">
          <h1
            className="text-[42px] font-semibold tracking-tight leading-none mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            Gauri Prabhakar
          </h1>
          <h2
            className="font-mono text-[13px] tracking-widest uppercase mb-4"
            style={{ color: 'var(--accent-teal)' }}
          >
            ML Engineer
          </h2>
          <p
            className="text-sm leading-relaxed max-w-[240px]"
            style={{ color: 'var(--text-secondary)' }}
          >
            I build intelligent systems; and occasionally break them to understand why.
          </p>
        </div>

        <nav aria-label="Sections" className="flex flex-col gap-1">
          {NAV_ITEMS.map(({ id, label }) => {
            const isHighlighted = active === id || hovered === id
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                onMouseEnter={() => setHovered(id)}
                onMouseLeave={() => setHovered(null)}
                className="flex items-center gap-4 py-1.5 text-left cursor-pointer bg-transparent border-none outline-none"
              >
                <span
                  className="h-px flex-shrink-0 transition-all duration-300"
                  style={{
                    width: isHighlighted ? '64px' : '32px',
                    background: isHighlighted ? 'var(--nav-line-active)' : 'var(--text-muted)',
                  }}
                />
                <span
                  className="font-mono text-[11px] tracking-[0.14em] uppercase transition-all duration-300"
                  style={{
                    color: isHighlighted ? 'var(--accent-teal)' : 'var(--text-muted)',
                    fontWeight: isHighlighted ? '600' : '400',
                  }}
                >
                  {label}
                </span>
              </button>
            )
          })}
        </nav>
      </div>

      <div>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase px-4 py-2 rounded border transition-all duration-200"
          style={{
            color: 'var(--text-secondary)',
            borderColor: 'var(--border)',
            background: 'transparent',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget
            el.style.color = 'var(--accent-teal)'
            el.style.borderColor = 'var(--accent-teal)'
            el.style.background = 'var(--tag-teal-bg)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget
            el.style.color = 'var(--text-secondary)'
            el.style.borderColor = 'var(--border)'
            el.style.background = 'transparent'
          }}
        >
          View Full Résumé
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </div>
    </aside>
  )
}