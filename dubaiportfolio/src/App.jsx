import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutIntroSection from './components/AboutIntroSection'
import ProblemsSection from './components/ProblemsSection'
import PinkTransitionSection from './components/PinkTransitionSection'
import BenefitsSection from './components/BenefitsSection'
import ServicesSection from './components/ServicesSection'
import MarqueeSection from './components/MarqueeSection'
import PortfolioSection from './components/PortfolioSection'
import TestimonialsSection from './components/TestimonialsSection'
import DesignPhilosophySection from './components/DesignPhilosophySection'
import AboutMeSection from './components/AboutMeSection'
import ProcessAndFAQSection from './components/ProcessAndFAQSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen w-full relative overflow-x-clip bg-black text-white selection:bg-[#FF006E] selection:text-white">
      <CustomCursor />
      <Navbar />

      <main className="w-full relative">
        {/* 1. Hero – dark purple gradient */}
        <HeroSection />

        {/* 2. About intro – clean white card */}
        <AboutIntroSection />

        {/* 3. Problems – deep dark cards */}
        <ProblemsSection />

        {/* 4. Pink transition banner */}
        <PinkTransitionSection />

        {/* 5. Benefits grid – dark violet glow */}
        <BenefitsSection />

        {/* 6. Marquee ticker */}
        <MarqueeSection dark={true} />

        {/* 7. Services – black */}
        <ServicesSection />

        {/* 8. Portfolio – black */}
        <PortfolioSection />

        {/* 9. Testimonials – white */}
        <TestimonialsSection />

        {/* 10. Design philosophy – white */}
        <DesignPhilosophySection />

        {/* 11. About me – dark purple */}
        <AboutMeSection />

        {/* 12. Process & FAQ – white */}
        <ProcessAndFAQSection />

        {/* 13. CTA – black */}
        <CTASection />
      </main>

      {/* Footer – clean white */}
      <Footer />
    </div>
  )
}
