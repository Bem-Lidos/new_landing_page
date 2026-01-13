'use client'

import { Header, HeroSection, FeaturesSection, CommunitySection, DownloadSection, Footer } from "@/app/components/landing";

export default function Home() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-900">
            <Header />
            <HeroSection />
            <FeaturesSection />
            <CommunitySection />
            <DownloadSection />
            <Footer />
        </main>
    );
}