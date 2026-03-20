'use client'
import { EMAIL } from '@/lib/data'

export default function EmailColumn() {
  return (
    <div className="fixed bottom-2 right-8 z-10 hidden lg:flex flex-col items-center gap-6">
      <div className="w-px h-44" style={{ background: 'var(--side-line)' }} />
      <a
        href={`mailto:${EMAIL}`}
        className="font-mono text-[11px] tracking-widest transition-all duration-200 hover:-translate-y-1"
        style={{
          color: 'var(--side-icon)',
          writingMode: 'vertical-rl',
          letterSpacing: '0.15em',
          textDecoration: 'none',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--side-icon-hover)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--side-icon)')}
      >
        {EMAIL}
      </a>
    </div>
  )
}