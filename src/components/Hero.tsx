import React from 'react';
import { Phone, Sparkles, CheckCircle2, Clock, MapPin, Tag, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenEstimate: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimate }) => {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 border-b border-steel-800/80">
      {/* Background Decorative Gradients & Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-crimson-600/15 via-transparent to-transparent pointer-events-none blur-3xl" />
      <div className="absolute -top-40 right-10 w-96 h-96 bg-crimson-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-60 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Carbon/Grid Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Premium Tagline Badge */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 bg-gradient-to-r from-navy-850 to-navy-800 border border-crimson-600/40 rounded-full px-3.5 py-1.5 shadow-md">
              <span className="bg-crimson-600 text-white text-[11px] sm:text-xs font-black uppercase px-2.5 py-0.5 rounded-full tracking-wider">
                EXCLUSIVE
              </span>
              <span className="text-xs sm:text-sm font-semibold text-steel-200">
                Only Auto Body Shop with Mobile & Shop Bumper Repairs
              </span>
            </div>

            {/* Main Page Heading */}
            <div className="space-y-3">
              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[1.08]">
                Auto Body Repair <br className="hidden sm:inline" />
                <span className="text-crimson-gradient">That Comes to You</span>
              </h1>
              
              <p className="font-heading font-extrabold text-xl sm:text-2xl text-steel-200 tracking-wide">
                Dents. Bumpers. Collision Damage. Paint.
              </p>
              
              <p className="text-crimson-400 font-bold text-lg sm:text-xl flex items-center justify-center lg:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-crimson-500 animate-ping" />
                We Fix It — You Get Back on the Road.
              </p>
            </div>

            {/* Core Value Proposition Narrative */}
            <p className="text-steel-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              For <strong className="text-white font-bold">25+ years</strong>, Texas Auto Body has delivered trusted craftsmanship across Arlington and the entire Dallas-Fort Worth metroplex. We do <strong className="text-crimson-400 font-bold">twice the work for half the money</strong>, offering both mobile service directly to your driveway or workplace, and comprehensive shop-based repairs.
            </p>

            {/* Key Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-steel-200">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-crimson-500 shrink-0" />
                <span>25+ Years of Auto Body Experience</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-crimson-500 shrink-0" />
                <span>Mobile & Shop-Based Repair Options</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-crimson-500 shrink-0" />
                <span>Free Estimates & Free Appointments</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-crimson-500 shrink-0" />
                <span>Coupons Available for Your Deductibles</span>
              </div>
            </div>

            {/* Location & Radius Notice */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-steel-400 bg-navy-900/80 px-3.5 py-1.5 rounded-lg border border-steel-800">
              <MapPin className="w-4 h-4 text-crimson-500 shrink-0" />
              <span>Serving Arlington and the Dallas-Fort Worth area within approximately a <strong>50-mile service radius</strong>.</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => onOpenEstimate()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-crimson-600 via-crimson-500 to-crimson-700 hover:from-crimson-500 hover:to-crimson-600 text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl shadow-crimson-glow tracking-wider uppercase transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
              >
                <Sparkles className="w-5 h-5" />
                <span>GET MY FREE ESTIMATE</span>
              </button>

              <a
                href="tel:+18178209773"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-navy-850 hover:bg-navy-800 text-white font-bold text-base sm:text-lg px-7 py-4 rounded-xl border border-steel-700 hover:border-steel-500 shadow-lg transition-all duration-300"
              >
                <Phone className="w-5 h-5 text-crimson-500 animate-pulse" />
                <span>CALL NOW: +1 817-820-9773</span>
              </a>
            </div>

            {/* Quick Slogan Badge */}
            <p className="text-xs text-steel-400 font-medium">
              Family Owned & Operated • Good Work at Affordable Prices • 24/7 Availability
            </p>
          </div>

          {/* Right Column: Hero Visual Card with Original Client Logo */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Glow & Metallic Shield Frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-crimson-600 via-steel-600 to-crimson-600 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000" />
              
              <div className="relative rounded-2xl bg-gradient-to-b from-navy-850 via-navy-900 to-navy-950 p-6 sm:p-7 border border-steel-700/80 shadow-2xl">
                
                {/* Logo Presentation */}
                <div className="relative flex justify-center mb-6">
                  <div className="relative p-2 rounded-2xl bg-navy-950/80 border border-steel-600/40 shadow-inner">
                    <img
                      src="/texas-auto-body-logo.jpg"
                      alt="Texas Auto Body Shield Logo"
                      className="w-56 sm:w-64 h-auto object-contain mx-auto drop-shadow-2xl rounded-xl"
                    />
                  </div>
                  {/* Subtle Badge Ribbons */}
                  <div className="absolute -bottom-3 bg-crimson-700 text-white text-[11px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg border border-white/20">
                    Trusted Restoration • Quality Craftsmanship
                  </div>
                </div>

                {/* Quick Snapshot Metrics */}
                <div className="grid grid-cols-2 gap-3 pt-3">
                  <div className="bg-navy-950/80 p-3 rounded-xl border border-steel-800 text-center">
                    <div className="text-2xl font-black text-white font-heading">25+</div>
                    <div className="text-xs text-steel-400 font-medium">Years in Auto Body</div>
                  </div>
                  <div className="bg-navy-950/80 p-3 rounded-xl border border-steel-800 text-center">
                    <div className="text-2xl font-black text-crimson-500 font-heading">7 Days</div>
                    <div className="text-xs text-steel-400 font-medium">Mon-Sun 7am–5pm</div>
                  </div>
                  <div className="bg-navy-950/80 p-3 rounded-xl border border-steel-800 text-center">
                    <div className="text-2xl font-black text-white font-heading">50 Mi</div>
                    <div className="text-xs text-steel-400 font-medium">DFW Service Radius</div>
                  </div>
                  <div className="bg-navy-950/80 p-3 rounded-xl border border-steel-800 text-center">
                    <div className="text-2xl font-black text-crimson-500 font-heading">24 Hr</div>
                    <div className="text-xs text-steel-400 font-medium">Minor Work Turnaround</div>
                  </div>
                </div>

                {/* Special Deductible Coupon Teaser */}
                <div className="mt-4 p-3.5 bg-gradient-to-r from-crimson-950/90 to-navy-900 border border-crimson-600/50 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Tag className="w-5 h-5 text-crimson-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white uppercase tracking-wider">
                        Insurance Deductible Coupon
                      </div>
                      <div className="text-[11px] text-steel-300">
                        Available on qualifying repairs
                      </div>
                    </div>
                  </div>
                  <a
                    href="#coupons"
                    className="text-xs font-bold text-crimson-400 hover:text-white underline underline-offset-2 shrink-0 ml-2"
                  >
                    View Offer
                  </a>
                </div>

                {/* Direct Call Quick Bar inside card */}
                <div className="mt-4 text-center">
                  <p className="text-[11px] text-steel-400 mb-1.5 font-medium">Need immediate roadside or damage assessment?</p>
                  <a
                    href="tel:+18178209773"
                    className="w-full flex items-center justify-center gap-2 bg-steel-800/80 hover:bg-steel-750 text-steel-100 py-2.5 rounded-lg border border-steel-600 text-xs font-bold transition"
                  >
                    <Clock className="w-3.5 h-3.5 text-crimson-400" />
                    24/7 Availability: (817) 820-9773
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Corporate Quick-Access Strip across bottom of Hero */}
        <div className="mt-12 pt-8 border-t border-steel-800/80">
          <div className="text-xs font-bold uppercase tracking-wider text-steel-400 mb-3 text-center lg:text-left">
            Direct Service Jump:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Bumper Repair', desc: 'Mobile & Shop based', href: '#bumper-repair' },
              { label: 'Dent Repair & PDR', desc: 'Preserves factory paint', href: '#services' },
              { label: 'Collision Claims', desc: 'Deductible coupons', href: '#coupons' },
              { label: 'Paint Matching', desc: 'Flawless color blending', href: '#services' },
            ].map((jump, idx) => (
              <a
                key={idx}
                href={jump.href}
                className="p-3 rounded-xl bg-navy-900/90 border border-steel-800 hover:border-crimson-500/60 transition group flex items-center justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-crimson-400 transition">
                    {jump.label}
                  </div>
                  <div className="text-[10px] text-steel-400">
                    {jump.desc}
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-steel-500 group-hover:text-crimson-400 group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
