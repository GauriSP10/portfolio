'use client'
import { useState } from 'react'
import { EXPERIENCE } from '@/lib/data'
import { SectionLabel } from './About'
import Tag from './Tag'

export default function Experience() {
  return (
    <section id="experience" className="mb-24 scroll-mt-20">
      <SectionLabel index="02" label="Experience" />
      <div className="flex flex-col gap-3">
        {EXPERIENCE.map((job) => (
          <ExperienceCard key={job.company} {...job} />
        ))}
      </div>
    </section>
  )
}

function ExperienceCard({ date, title, company, href, intro, bullets, tags }: typeof EXPERIENCE[0]) {
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
      <div className="font-mono text-[10px] leading-relaxed whitespace-nowrap mb-2 lg:hidden" style={{ color: 'var(--text-muted)' }}>
        {date}
      </div>

      <div className="hidden lg:grid gap-6" style={{ gridTemplateColumns: '110px 1fr' }}>
        <div className="font-mono text-[10px] text-right pt-0.5 leading-relaxed whitespace-nowrap" style={{ color: 'var(--text-muted)' }}>
          {date}
        </div>
        <ExperienceBody title={title} company={company} href={href} intro={intro} bullets={bullets} tags={tags} hovered={hovered} />
      </div>

      <div className="lg:hidden">
        <ExperienceBody title={title} company={company} href={href} intro={intro} bullets={bullets} tags={tags} hovered={hovered} />
      </div>
    </div>
  )
}

function ExperienceBody({ title, company, href, intro, bullets, tags, hovered }: {
  title: string, company: string, href: string, intro: string,
  bullets: string[], tags: { label: string, color: string }[], hovered: boolean
}) {
  return (
    <div>
      <div className="flex items-center gap-1.5 flex-wrap mb-2">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[15px] font-medium transition-colors duration-200 no-underline"
          style={{ color: hovered ? 'var(--accent-teal)' : 'var(--text-primary)' }}
        >
          {title}
        </a>
        <span className="text-[14px]" style={{ color: 'var(--accent-teal)' }}>
          · {company}
        </span>
        <span
          className="transition-all duration-200 ml-1"
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

      {intro && (
        <p className="text-[13px] leading-[1.7] mb-3 italic" style={{ color: 'var(--text-muted)' }}>
          {intro}
        </p>
      )}

      <ul className="space-y-2 mb-3">
        {bullets.map((bullet, i) => (
          <li key={i} className="text-[14px] leading-[1.7] pl-3 relative" style={{ color: 'var(--text-secondary)' }}>
            <span className="absolute left-0 top-[9px] w-1 h-1 rounded-full" style={{ background: 'var(--accent-teal)' }} />
            {bullet}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {tags.map(t => <Tag key={t.label} label={t.label} color={t.color as 'teal' | 'blue' | 'amber'} />)}
      </div>
    </div>
  )
}