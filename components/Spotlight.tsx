'use client'
import { useEffect, useRef } from 'react'
import { useTheme } from './ThemeProvider'

export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return
      ref.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(249,168,212,0.06), transparent 40%)`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  if (theme === 'light') return null

  return (
    <div
      ref={ref}
      className="spotlight"
      aria-hidden
    />
  )
}