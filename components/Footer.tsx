'use client'

export default function Footer() {
  return (
    <footer className="pt-10 pb-16 border-t" style={{ borderColor: 'var(--border)' }}>
      <p className="font-mono text-[11px] mt-1" style={{ color: 'var(--text-muted)' }}>
        Built with Next.js &amp; Tailwind CSS · Deployed on Vercel
      </p>
    </footer>
  )
}