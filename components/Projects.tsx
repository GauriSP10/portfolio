'use client'
import { useState } from 'react'
import { PROJECTS } from '@/lib/data'
import { SectionLabel } from './About'
import Tag from './Tag'

export default function Projects() {
  return (
    <section id="projects" className="mb-24 scroll-mt-20">
      <SectionLabel index="03" label="Projects" />
      <div className="flex flex-col gap-3">
        {PROJECTS.map(p => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ title, desc, date, href, tags }: typeof PROJECTS[0]) {
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
        <ProjectBody title={title} desc={desc} href={href} tags={tags} hovered={hovered} />
      </div>

      <div className="lg:hidden">
        <ProjectBody title={title} desc={desc} href={href} tags={tags} hovered={hovered} />
      </div>
    </div>
  )
}

function ProjectBody({ title, desc, href, tags, hovered }: {
  title: string, desc: string, href: string,
  tags: { label: string, color: string }[], hovered: boolean
}) {
  return (
    <div>
      <div className="flex items-center gap-2 flex-wrap mb-2">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[15px] font-medium transition-colors duration-200 no-underline"
          style={{ color: hovered ? 'var(--accent-teal)' : 'var(--text-primary)' }}
        >
          {title}
        </a>
        <span
          className="transition-all duration-200"
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

      <p className="text-[14px] leading-[1.7] mb-3" style={{ color: 'var(--text-secondary)' }}>
        {desc}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {tags.map(t => <Tag key={t.label} label={t.label} color={t.color as 'teal' | 'blue' | 'amber'} />)}
      </div>
    </div>
  )
}