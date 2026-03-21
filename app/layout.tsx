import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Gauri Prabhakar — ML Engineer',
  description: 'ML Engineer building intelligent systems at the edge of language and learning. MS AI at Northeastern University.',
  openGraph: {
    title: 'Gauri Prabhakar — ML Engineer',
    description: 'ML Engineer building intelligent systems at the edge of language and learning.',
    url: 'https://gauri-prabhakar.vercel.app',
    siteName: 'Gauri Prabhakar',
  },
  icons: {
    icon: '/gp_favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}