import { CTA } from './components/sections/CTA';
import { Features } from './components/sections/Features';
import { Footer } from './components/sections/Footer';
import { Hero } from './components/sections/Hero';
import { HowItWorks } from './components/sections/HowItWorks';
import { Navigation } from './components/sections/Navigation';
import { Pricing } from './components/sections/Pricing';
import { Stats } from './components/sections/Stats';
import { Testimonials } from './components/sections/Testimonials';

export default function App() {
    return (
        <div className="min-h-screen bg-background" suppressHydrationWarning>
            <Navigation />
            <Hero />
            <Stats />
            <Features />
            <HowItWorks />
            <Testimonials />
            <Pricing />
            <CTA />
            <Footer />
        </div>
    );
}
