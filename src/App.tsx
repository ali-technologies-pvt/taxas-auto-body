import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DamageSelector } from './components/DamageSelector';
import { AboutSection } from './components/AboutSection';
import { BumperSpotlight } from './components/BumperSpotlight';
import { MobileConvenience } from './components/MobileConvenience';
import { ExperiencePillars } from './components/ExperiencePillars';
import { ServicesGrid } from './components/ServicesGrid';
import { DeductibleCoupons } from './components/DeductibleCoupons';
import { PhilosophyHumor } from './components/PhilosophyHumor';
import { ServiceAreaMap } from './components/ServiceAreaMap';
import { HowItWorks } from './components/HowItWorks';
import { TestimonialsSection } from './components/TestimonialsSection';
import { UrgencyAction } from './components/UrgencyAction';
import { EstimateSection } from './components/EstimateSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { EstimateModal } from './components/EstimateModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Bumper Repair');

  const handleOpenEstimate = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setModalOpen(true);
  };

  const handleSelectDamageFromGrid = (damageTitle: string) => {
    setSelectedService(damageTitle);
    const element = document.getElementById('estimate-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      setModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 text-steel-100 flex flex-col font-sans selection:bg-crimson-600 selection:text-white">
      {/* 1. Executive Corporate Multi-Tier Header */}
      <Navbar onOpenEstimate={handleOpenEstimate} />

      {/* Main Single Page Website Architecture */}
      <main className="flex-grow">
        {/* 2. Hero Section with Automotive Banner & Quick Jump Strip */}
        <Hero onOpenEstimate={handleOpenEstimate} />

        {/* 3. Problem & Agitation: Don't Let A Damaged Car Slow You Down */}
        <DamageSelector onSelectDamage={handleSelectDamageFromGrid} />

        {/* 4. Corporate About Us & 25+ Years Legacy Section */}
        <AboutSection onOpenEstimate={handleOpenEstimate} />

        {/* 5. Flagship Bumper Repair Pavilion: Only Shop in DFW for Mobile & Shop Bumper Repairs */}
        <BumperSpotlight onOpenEstimate={handleOpenEstimate} />

        {/* 6. Mobile Fleet & Shop Convenience: Driveway, Workplace, Safe Location */}
        <MobileConvenience onOpenEstimate={handleOpenEstimate} />

        {/* 7. What Makes Us Different: 6 Core Pillars & Advantages */}
        <ExperiencePillars onOpenEstimate={handleOpenEstimate} />

        {/* 8. Comprehensive Services Catalog: Dents, PDR, Collision, Paint Matching, Correction */}
        <ServicesGrid onOpenEstimate={handleOpenEstimate} />

        {/* 9. Insurance Deductible Savings Vault & Coupons */}
        <DeductibleCoupons onOpenEstimate={handleOpenEstimate} />

        {/* 10. Our Philosophy & The Miracles Joke */}
        <PhilosophyHumor onOpenEstimate={handleOpenEstimate} />

        {/* 11. Regional DFW Service Area Hub: 50-Mile Radius & 12 Listed Communities */}
        <ServiceAreaMap onOpenEstimate={handleOpenEstimate} />

        {/* 12. Three Simple Steps Workflow: How It Works */}
        <HowItWorks onOpenEstimate={handleOpenEstimate} />

        {/* 13. Customer Testimonials & Verified Google Rating Strip */}
        <TestimonialsSection />

        {/* 14. Urgency Callout: Your Car Isn't Going To Fix Itself */}
        <UrgencyAction onOpenEstimate={handleOpenEstimate} />

        {/* 15. Online Free Estimate Booking Portal */}
        <EstimateSection initialService={selectedService} />

        {/* 16. Corporate FAQ Section */}
        <FAQSection />
      </main>

      {/* 17. Massive Multi-Column Corporate Footer */}
      <Footer />

      {/* 18. Mobile Sticky App Bar */}
      <FloatingMobileBar onOpenEstimate={() => handleOpenEstimate()} />

      {/* 19. Quick Free Estimate Modal */}
      <EstimateModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceSelected={selectedService}
      />
    </div>
  );
}
