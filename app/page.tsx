import Sidebar from '@/components/Sidebar'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Research from '@/components/Research'
import Footer from '@/components/Footer'
import SocialColumn from '@/components/SocialColumn'
import EmailColumn from '@/components/EmailColumn'
import ThemeToggle from '@/components/ThemeToggle'
import Spotlight from '@/components/Spotlight'

export default function Home() {
  return (
    <>
      <Spotlight />
      <SocialColumn />
      <EmailColumn />
      <ThemeToggle />

      <div
        className="relative z-10 max-w-[1200px] mx-auto px-14 min-h-screen
          flex flex-col lg:flex-row gap-0"
      >
        <Sidebar />

        <main className="flex-1 min-w-0 pt-20 pb-10 lg:pl-10">
          <About />
          <Experience />
          <Projects />
          <Research />
          <Footer />
        </main>
      </div>
    </>
  )
}