import { Header, HeroSection, FeaturesSection, CommunitySection, DownloadSection, Footer } from '../landing'

export default function LandingPage() {
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
