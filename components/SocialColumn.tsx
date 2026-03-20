'use client'
import { SOCIAL_LINKS } from '@/lib/data'

export default function SocialColumn() {
  return (
    <div className="fixed bottom-2 left-8 z-10 hidden lg:flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-4">
        {SOCIAL_LINKS.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="transition-all duration-200 hover:-translate-y-1"
            style={{ color: 'var(--side-icon)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--side-icon-hover)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--side-icon)')}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              dangerouslySetInnerHTML={{ __html: icon }}
            />
          </a>
        ))}
      </div>
      <div className="w-px h-44" style={{ background: 'var(--side-line)' }} />
    </div>
  )
}