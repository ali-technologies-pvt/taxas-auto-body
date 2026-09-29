import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Menu, X, ChevronDown, Award } from 'lucide-react';

interface NavbarProps {
  onOpenEstimate: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceItems = [
    { name: 'Bumper Repair (Mobile & Shop)', href: '#bumper-repair', desc: 'Plastic welding, cracks & scuffs' },
    { name: 'Dent Repair & Assessment', href: '#services', desc: 'Door dings & panel evaluation' },
    { name: 'Paintless Dent Repair (PDR)', href: '#services', desc: 'Preserves factory clear coat' },
    { name: 'Insurance Collision Repair', href: '#services', desc: 'Hassle-free claims & deductible aid' },
    { name: 'Computerized Paint Matching', href: '#services', desc: 'Flawless spectrophotometer blend' },
    { name: 'Paint Correction & Detail', href: '#services', desc: 'Swirl & oxidation removal' },
  ];

  return (
    <header className="w-full sticky top-0 z-50 overflow-visible">
      
      {/* 1. Sleek Top Bar (Single-line, Responsive) */}
      <div className="bg-navy-950 text-steel-400 text-xs border-b border-steel-800/80 py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          {/* Left: Schedule & Availability */}
          <div className="flex items-center gap-2 sm:gap-4 whitespace-nowrap overflow-hidden text-ellipsis">
            <span className="inline-flex items-center gap-1.5 font-bold text-crimson-400 text-[11px] sm:text-xs shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-crimson-500 animate-ping inline-block" />
              Open 7 Days (7 AM – 5 PM)
            </span>
            <span className="text-steel-600 hidden sm:inline">•</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-steel-300 text-[11px] sm:text-xs">
              <Clock className="w-3.5 h-3.5 text-crimson-500 shrink-0" />
              24/7 Availability
            </span>
            <span className="text-steel-600 hidden md:inline">•</span>
            <span className="hidden md:inline-flex items-center gap-1 text-steel-300 text-[11px] sm:text-xs">
              <MapPin className="w-3.5 h-3.5 text-crimson-500 shrink-0" />
              Arlington & 50-Mile DFW Radius
            </span>
          </div>

          {/* Right: Direct Phone Hotline */}
          <div className="flex items-center gap-3 shrink-0 whitespace-nowrap text-[11px] sm:text-xs">
            <span className="hidden lg:inline-flex items-center gap-1 text-steel-300">
              <Award className="w-3.5 h-3.5 text-crimson-400" />
              25+ Years Experience
            </span>
            <span className="text-steel-600 hidden lg:inline">•</span>
            <a
              href="tel:+18178209773"
              className="inline-flex items-center gap-1.5 font-bold text-white hover:text-crimson-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-crimson-400" />
              <span>+1 817-820-9773</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-navy-950/98 backdrop-blur-md shadow-2xl border-b border-steel-800 py-2.5'
            : 'bg-navy-950/90 backdrop-blur-sm border-b border-steel-800/60 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          
          {/* Brand Logo & Name */}
          <a href="#home" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
            <img
              src="/texas-auto-body-logo.jpg"
              alt="Texas Auto Body Logo"
              className="h-9 sm:h-11 w-auto object-contain rounded-lg border border-steel-700/60 transition-transform duration-200 group-hover:scale-105 shrink-0"
            />
            <div className="whitespace-nowrap">
              <div className="font-heading font-black text-base sm:text-lg lg:text-xl tracking-wider text-white">
                TEXAS <span className="text-crimson-500">AUTO BODY</span>
              </div>
              <div className="text-[9px] sm:text-[10px] text-steel-400 uppercase tracking-widest font-semibold hidden xs:block">
                Mobile & Shop Repair • DFW
              </div>
            </div>
          </a>

          {/* Streamlined Desktop Nav Links (Fits on all screens without wrapping or overflow) */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-xs xl:text-sm font-semibold text-steel-300">
            
            {/* About */}
            <a
              href="#about"
              className="px-2.5 py-1.5 rounded-lg hover:text-white hover:bg-navy-900 transition whitespace-nowrap"
            >
              About
            </a>

            {/* Services with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className="px-2.5 py-1.5 rounded-lg hover:text-white hover:bg-navy-900 transition flex items-center gap-1 whitespace-nowrap text-xs xl:text-sm"
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-crimson-400' : 'text-steel-400'}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-navy-950 border border-steel-700 rounded-2xl shadow-2xl p-2 space-y-1 animate-in fade-in zoom-in-95 duration-150 z-50">
                  <div className="px-3 py-1 text-[10px] font-black uppercase tracking-wider text-crimson-400 border-b border-steel-800">
                    Auto Body Care
                  </div>
                  {serviceItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setServicesDropdownOpen(false)}
                      className="block p-2 rounded-xl hover:bg-navy-900 hover:text-white transition group"
                    >
                      <div className="font-bold text-xs text-white group-hover:text-crimson-400 transition-colors">
                        {item.name}
                      </div>
                      <div className="text-[10px] text-steel-400">
                        {item.desc}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Bumper Repair Specialist */}
            <a
              href="#bumper-repair"
              className="px-2.5 py-1.5 rounded-lg hover:text-white hover:bg-navy-900 transition whitespace-nowrap"
            >
              Bumper Repair
            </a>

            {/* Mobile & Shop */}
            <a
              href="#mobile-convenience"
              className="px-2.5 py-1.5 rounded-lg hover:text-white hover:bg-navy-900 transition whitespace-nowrap"
            >
              Mobile & Shop
            </a>

            {/* Why Us */}
            <a
              href="#differentiators"
              className="px-2.5 py-1.5 rounded-lg hover:text-white hover:bg-navy-900 transition whitespace-nowrap"
            >
              Why Us
            </a>

            {/* Our Work Gallery */}
            <a
              href="#gallery"
              className="px-2.5 py-1.5 rounded-lg hover:text-white hover:bg-navy-900 transition whitespace-nowrap"
            >
              Our Work
            </a>

            {/* Coupons */}
            <a
              href="#coupons"
              className="px-2.5 py-1.5 rounded-lg hover:text-white hover:bg-navy-900 transition whitespace-nowrap text-crimson-400 font-bold"
            >
              Coupons
            </a>

            {/* DFW Coverage */}
            <a
              href="#service-area"
              className="px-2.5 py-1.5 rounded-lg hover:text-white hover:bg-navy-900 transition whitespace-nowrap"
            >
              Coverage
            </a>
          </div>

          {/* Right Header CTAs: Phone + Get Free Estimate */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Phone link on wide screens (2xl or xl) */}
            <a
              href="tel:+18178209773"
              className="hidden xl:inline-flex items-center gap-1.5 text-white bg-navy-900 hover:bg-navy-850 px-3 py-2 rounded-xl border border-steel-700 text-xs font-bold transition whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-crimson-500" />
              <span>(817) 820-9773</span>
            </a>

            {/* Quick Call Icon button on medium screens */}
            <a
              href="tel:+18178209773"
              className="xl:hidden p-2 rounded-xl bg-navy-900 hover:bg-navy-850 text-crimson-400 border border-steel-700 transition shrink-0"
              aria-label="Call +1 817-820-9773"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Free Estimate Button (Never cut off!) */}
            <button
              onClick={() => onOpenEstimate()}
              className="bg-gradient-to-r from-crimson-600 to-crimson-700 hover:from-crimson-500 hover:to-crimson-600 text-white font-extrabold text-xs uppercase px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-crimson-glow tracking-wider transition whitespace-nowrap shrink-0 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Free Estimate
            </button>

            {/* Mobile / Tablet Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-steel-300 hover:text-white hover:bg-navy-900 border border-steel-800 focus:outline-none shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile / Tablet Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-navy-950 border-b border-steel-800 px-5 pt-3 pb-6 space-y-3 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-1 gap-1 text-sm font-semibold">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg text-steel-200 hover:text-white hover:bg-navy-900"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg text-steel-200 hover:text-white hover:bg-navy-900"
              >
                About Texas Auto Body (25+ Years)
              </a>
              <a
                href="#bumper-repair"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg text-white font-bold bg-navy-900 border border-crimson-600/40 flex items-center justify-between"
              >
                <span>Bumper Repair (#1 DFW Specialist)</span>
                <span className="text-[10px] bg-crimson-600 text-white px-2 py-0.5 rounded">Exclusive</span>
              </a>
              <a
                href="#mobile-convenience"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg text-steel-200 hover:text-white hover:bg-navy-900"
              >
                Mobile Fleet & Shop Services
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg text-steel-200 hover:text-white hover:bg-navy-900"
              >
                All Services (Dents, PDR, Collision, Paint)
              </a>
              <a
                href="#differentiators"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg text-steel-200 hover:text-white hover:bg-navy-900"
              >
                What Makes Us Different (6 Pillars)
              </a>
              <a
                href="#coupons"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg text-crimson-400 hover:text-white hover:bg-navy-900 flex items-center justify-between"
              >
                <span>Deductible Coupons & Savings</span>
                <span className="text-[10px] bg-crimson-950 border border-crimson-600/40 text-crimson-300 px-2 py-0.5 rounded">Offers</span>
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg text-steel-200 hover:text-white hover:bg-navy-900 flex items-center justify-between"
              >
                <span>Our Work (20-Photo Gallery)</span>
                <span className="text-[10px] bg-steel-800 text-steel-300 px-2 py-0.5 rounded">Photos</span>
              </a>
              <a
                href="#service-area"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg text-steel-200 hover:text-white hover:bg-navy-900"
              >
                DFW Service Areas (50-Mile Radius)
              </a>
              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg text-steel-200 hover:text-white hover:bg-navy-900"
              >
                How It Works (3 Simple Steps)
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg text-steel-200 hover:text-white hover:bg-navy-900"
              >
                Customer Testimonials
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg text-steel-200 hover:text-white hover:bg-navy-900"
              >
                FAQ
              </a>
            </div>

            <div className="pt-3 border-t border-steel-800 space-y-2">
              <a
                href="tel:+18178209773"
                className="w-full flex items-center justify-center gap-2 bg-navy-900 text-white py-3 rounded-xl border border-steel-700 font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-crimson-500" />
                Call +1 817-820-9773
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimate();
                }}
                className="w-full flex items-center justify-center gap-2 bg-crimson-600 hover:bg-crimson-500 text-white py-3 rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg"
              >
                Get Free Estimate
              </button>
            </div>
          </div>
        )}
      </nav>

    </header>
  );
};
