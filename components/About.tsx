'use client'

export default function About() {
  return (
    <section id="about" className="mb-24 scroll-mt-20">
      <SectionLabel index="01" label="About" />

      <div className="space-y-5">
        <p className="text-[15px] leading-[1.8]" style={{ color: 'var(--text-secondary)' }}>
          I'm an ML Engineer with three years of experience building systems that actually ship -
          recommendation engines that cut cross-team dependency by{' '}
          <span className="font-medium" style={{ color: 'var(--accent-teal)' }}>85%</span>,
          conversational AI that improved user retention by{' '}
          <span className="font-medium" style={{ color: 'var(--accent-teal)' }}>30%</span>,
          API infrastructure that reduced response times by{' '}
          <span className="font-medium" style={{ color: 'var(--accent-teal)' }}>80%</span>.
          I've worked across ed-tech, oil & gas and wellness, and I've supported teams
          as much as I've built alongside them.
        </p>
        <p className="text-[15px] leading-[1.8]" style={{ color: 'var(--text-secondary)' }}>
          My instinct is always the full picture. Not just the model, but the pipeline feeding it,
          the backend serving it and the team shipping it. At SLB I supported six engineers across
          a portfolio of 80+ APIs. At iSchoolConnect a tool I built directly contributed to
          onboarding 2 enterprise clients. At AYU I owned the AI layer end to end.
        </p>
        <p className="text-[15px] leading-[1.8]" style={{ color: 'var(--text-secondary)' }}>
          I'm currently doing my{' '}
          <span className="font-medium" style={{ color: 'var(--accent-blue)' }}>Master's in AI at Northeastern</span>,
          working on multi-agent RL for GPU scheduling and cryptographic fingerprinting for AI
          attribution - problems I picked because the framing itself is interesting.
        </p>
        <p className="text-[15px] leading-[1.8]" style={{ color: 'var(--text-secondary)' }}>
          Outside of work I've built a{' '}
          <span className="font-medium" style={{ color: 'var(--accent-teal)' }}>PyPI library with 30k+ downloads</span>,
          a VS Code extension and published in IEEE. When I'm not doing that, I draw portraits
          and go down music rabbit holes.
        </p>
      </div>
    </section>
  )
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="font-mono text-[11px] tracking-[0.14em] uppercase" style={{ color: 'var(--accent-teal)' }}>
        {index}
      </span>
      <span className="font-mono text-[11px] tracking-[0.14em] uppercase" style={{ color: 'var(--text-muted)' }}>
        {label}
      </span>
      <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
    </div>
  )
}