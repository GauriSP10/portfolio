'use client'
import { useState } from 'react'
import { RESEARCH } from '@/lib/data'
import { SectionLabel } from './About'

export default function Research() {
  return (
    <section id="research" className="mb-24 scroll-mt-20">
      <SectionLabel index="04" label="Research & Open Source" />
      <div className="flex flex-col gap-3">
        {RESEARCH.map(r => <ResearchCard key={r.title} {...r} />)}
      </div>
    </section>
  )
}

function ResearchCard({ venue, year, title, desc, href }: typeof RESEARCH[0]) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="p-5 rounded-xl transition-all duration-200 cursor-default"
      style={{
        background: hovered ? 'var(--bg-card)' : 'transparent',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex gap-2 mb-2 lg:hidden">
        <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: 'var(--accent-teal)' }}>{venue}</span>
        <span className="font-mono text-[10px]" style={{ color: 'var(--text-muted)' }}>{year}</span>
      </div>

      <div className="hidden lg:grid gap-6" style={{ gridTemplateColumns: '110px 1fr' }}>
        <div className="flex flex-col gap-1 pt-0.5 text-right">
          <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: 'var(--accent-teal)' }}>{venue}</span>
          <span className="font-mono text-[10px]" style={{ color: 'var(--text-muted)' }}>{year}</span>
        </div>
        <ResearchBody title={title} desc={desc} href={href} hovered={hovered} />
      </div>

      <div className="lg:hidden">
        <ResearchBody title={title} desc={desc} href={href} hovered={hovered} />
      </div>
    </div>
  )
}

function ResearchBody({ title, desc, href, hovered }: {
  title: string, desc: string, href: string, hovered: boolean
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[15px] font-medium leading-snug transition-colors duration-200 no-underline"
          style={{ color: hovered ? 'var(--accent-teal)' : 'var(--text-primary)' }}
        >
          {title}
        </a>
        <span
          className="flex-shrink-0 transition-all duration-200"
          style={{
            color: 'var(--accent-teal)',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translate(3px, -3px)' : 'translate(0, 0)',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
          </svg>
        </span>
      </div>
      <p className="text-[14px] leading-[1.7]" style={{ color: 'var(--text-secondary)' }}>
        {desc}
      </p>
    </div>
  )
}