import { useEffect } from 'react'
import { Header, HeroSection, FeaturesSection, CommunitySection, DownloadSection, Footer } from '../landing'

export default function LandingPage() {
  useEffect(() => {
    const root = document.documentElement
    root.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }, [])

  return (
    <div className='min-h-screen bg-white dark:bg-gray-900'>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CommunitySection />
      <DownloadSection />
      <Footer />
    </div>
  )
}
