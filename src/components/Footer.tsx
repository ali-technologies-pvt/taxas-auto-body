import React from 'react';
import { Phone, Clock, MapPin, ShieldCheck, ArrowUp, Award, Calendar, HeartHandshake, Tag } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cities = [
    'Arlington (Main Hub)', 'Pantego', 'Dalworthington Gardens', 'Mansfield',
    'Grand Prairie', 'Kennedale', 'Fort Worth', 'Hurst',
    'Euless', 'Bedford', 'Everman', 'Forest Hill',
  ];

  const services = [
    { name: 'Bumper Repair (Mobile & Shop)', href: '#bumper-repair' },
    { name: 'Dent Repair & Evaluation', href: '#services' },
    { name: 'Paintless Dent Repair (PDR)', href: '#services' },
    { name: 'Insurance Collision Repair', href: '#services' },
    { name: 'Precision Paint Matching', href: '#services' },
    { name: 'Multi-Stage Paint Correction', href: '#services' },
    { name: 'Deductible Savings Coupons', href: '#coupons' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us (25+ Years Legacy)', href: '#about' },
    { label: 'Why Us (6 Differentiators)', href: '#differentiators' },
    { label: 'Mobile Fleet & Shop Services', href: '#mobile-convenience' },
    { label: 'Bumper Repair Specialists', href: '#bumper-repair' },
    { label: 'Deductible Savings Vault', href: '#coupons' },
    { label: '50-Mile DFW Coverage', href: '#service-area' },
    { label: 'How It Works (3 Steps)', href: '#how-it-works' },
    { label: 'Verified Reviews', href: '#reviews' },
    { label: 'Frequently Asked Questions', href: '#faq' },
    { label: 'Free Estimate Portal', href: '#estimate-form' },
  ];

  return (
    <footer className="bg-navy-950 text-steel-300 pt-16 pb-24 lg:pb-12 border-t border-steel-800 relative">
      
      {/* Top Corporate Dispatch CTA Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-crimson-600/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center lg:text-left">
            <span className="text-xs font-black uppercase text-crimson-400 tracking-widest inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-crimson-500 animate-ping inline-block" />
              DIRECT MOBILE DISPATCH HOTLINE
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
              Need Fast Mobile Auto Body Repair in DFW?
            </h3>
            <p className="text-xs sm:text-sm text-steel-300">
              Open 7 days a week (7 AM – 5 PM) + 24/7 on-call roadside and damage assistance across 50 miles.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
            <a
              href="tel:+18178209773"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-crimson-600 hover:bg-crimson-500 text-white font-black text-sm uppercase px-6 py-4 rounded-xl shadow-crimson-glow tracking-wider transition transform hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>Call +1 817-820-9773</span>
            </a>
            <a
              href="#estimate-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-navy-950 hover:bg-navy-800 text-white font-bold text-xs uppercase px-5 py-4 rounded-xl border border-steel-700 transition"
            >
              Request Free Estimate
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Corporate Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-steel-800/80">
          
          {/* Column 1: Brand Seal & Profile */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3.5">
              <img
                src="/texas-auto-body-logo.jpg"
                alt="Texas Auto Body Official Crest"
                className="h-16 w-auto rounded-xl border border-steel-600 shadow-xl"
              />
              <div>
                <span className="font-heading font-black text-2xl text-white tracking-wider">
                  TEXAS <span className="text-crimson-500">AUTO BODY</span>
                </span>
                <p className="text-[11px] text-steel-400 uppercase font-bold tracking-wider">
                  Trusted Restoration • Quality Craftsmanship
                </p>
              </div>
            </div>

            <p className="text-sm text-steel-300 leading-relaxed font-medium">
              Quality Work. Fair Prices. Real Convenience.
            </p>

            <p className="text-xs text-steel-400 leading-relaxed">
              Family-owned auto body repair with 25+ years of hands-on experience. We are the only body shop in the Dallas-Fort Worth area that provides mobile and shop-based bumper repairs, open 7 days a week, doing twice the work for half the money.
            </p>

            {/* Corporate Trust Badges */}
            <div className="pt-2 grid grid-cols-2 gap-2 text-[11px] text-steel-300 font-semibold">
              <div className="flex items-center gap-1.5 p-2 rounded-lg bg-navy-900 border border-steel-800">
                <Award className="w-4 h-4 text-crimson-400 shrink-0" />
                <span>25+ Years in Texas</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-lg bg-navy-900 border border-steel-800">
                <HeartHandshake className="w-4 h-4 text-crimson-400 shrink-0" />
                <span>Family Owned</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-lg bg-navy-900 border border-steel-800">
                <ShieldCheck className="w-4 h-4 text-crimson-400 shrink-0" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-lg bg-navy-900 border border-steel-800">
                <Tag className="w-4 h-4 text-crimson-400 shrink-0" />
                <span>Deductible Coupons</span>
              </div>
            </div>
          </div>

          {/* Column 2: Corporate Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-white text-base uppercase tracking-wider border-b border-steel-800 pb-2">
              Website Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-white hover:text-crimson-400 transition flex items-center gap-1.5"
                  >
                    <span className="text-crimson-500 text-[10px]">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Catalog */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-white text-base uppercase tracking-wider border-b border-steel-800 pb-2">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {services.map((srv, idx) => (
                <li key={idx}>
                  <a
                    href={srv.href}
                    className="hover:text-white hover:text-crimson-400 transition flex items-center gap-1.5"
                  >
                    <span className="text-crimson-500 text-[10px]">›</span>
                    <span>{srv.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-steel-800">
              <span className="text-[11px] font-bold text-crimson-400 block uppercase">
                Turnaround Time
              </span>
              <p className="text-[11px] text-steel-400 mt-0.5">
                ⚡ 24-Hour turnaround available on qualifying minor works.
              </p>
            </div>
          </div>

          {/* Column 4: Contact & 50-Mile Coverage */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-white text-base uppercase tracking-wider border-b border-steel-800 pb-2">
              Operating Hours & Hub
            </h4>

            {/* Hours card */}
            <div className="p-3 rounded-xl bg-navy-900 border border-steel-800 space-y-1.5 text-xs">
              <div className="flex items-center justify-between text-white font-bold">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-crimson-400" />
                  Monday – Sunday:
                </span>
                <span className="text-crimson-400">7 AM – 5 PM</span>
              </div>
              <div className="flex items-center justify-between text-white font-bold pt-1 border-t border-steel-800">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-green-400" />
                  24/7 Availability:
                </span>
                <span className="text-green-400">On-Call</span>
              </div>
            </div>

            {/* Direct NAP */}
            <div className="space-y-1 text-xs text-steel-300">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-crimson-400 shrink-0" />
                <span>Arlington, TX 76010 (Serving 50-Mi DFW Radius)</span>
              </p>
              <p className="flex items-center gap-2 font-bold text-white">
                <Phone className="w-4 h-4 text-crimson-400 shrink-0" />
                <a href="tel:+18178209773" className="hover:text-crimson-400">
                  +1 817-820-9773
                </a>
              </p>
            </div>

            {/* Coverage Cities Pills */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-steel-400 uppercase tracking-wider block mb-1.5">
                50-Mile Service Communities:
              </span>
              <div className="flex flex-wrap gap-1">
                {cities.map((city, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] bg-navy-900 text-steel-300 px-2 py-0.5 rounded border border-steel-800"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Sub-Footer Bar with Full Legal Notices */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-steel-400">
          <div className="space-y-1 text-center md:text-left max-w-2xl">
            <p className="font-semibold text-steel-300">
              © {new Date().getFullYear()} Texas Auto Body. All Rights Reserved. Family Owned & Locally Operated in Arlington, Texas.
            </p>
            <p className="text-[11px] text-steel-500 leading-relaxed">
              *Offers and eligibility may vary. Deductible coupon promotions apply to qualifying collision and body repairs. Computerized color-matching and bumper plastic repairs performed according to manufacturer safety standards.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <span className="text-steel-400 text-xs hidden sm:inline">Arlington, TX & DFW</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-navy-900 border border-steel-700 text-steel-200 hover:text-white hover:bg-crimson-600 transition shadow"
              aria-label="Scroll to top of website"
            >
              <span className="text-xs font-bold uppercase tracking-wider">Back To Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
