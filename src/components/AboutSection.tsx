import React from 'react';
import { Award, HeartHandshake, CheckCircle2, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  onOpenEstimate: (service?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEstimate }) => {
  return (
    <section id="about" className="py-18 sm:py-24 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 relative border-b border-steel-800/80">
      
      {/* Subtle ambient lighting */}
      <div className="absolute left-1/4 top-10 w-96 h-96 bg-crimson-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-10 bottom-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-crimson-400 bg-crimson-950/80 px-4 py-1.5 rounded-full border border-crimson-600/30">
            OUR HERITAGE & CRAFTSMANSHIP
          </span>
          <h2 className="mt-4 font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            Experience Matters When <br />
            <span className="text-crimson-gradient">Your Car Gets Damaged.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-steel-300 leading-relaxed">
            For more than <strong className="text-white font-bold">25 years</strong>, Texas Auto Body has been helping vehicle owners across Arlington and the Dallas-Fort Worth area get their cars looking right again.
          </p>
        </div>

        {/* 2-Column Corporate Story Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Left: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="card-metallic rounded-3xl p-7 sm:p-9 border-steel-700/80 space-y-5">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-crimson-600/20 border border-crimson-500/40 flex items-center justify-center text-crimson-400 shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white uppercase">
                    25+ Years of Dedicated Auto Body Repair
                  </h3>
                  <p className="text-xs text-crimson-400 font-bold uppercase tracking-wider">
                    Arlington, Texas • Family Owned & Locally Operated
                  </p>
                </div>
              </div>

              <p className="text-steel-300 text-sm sm:text-base leading-relaxed">
                We know auto body repair inside and out. But more importantly, we know what Texas vehicle owners genuinely want when an unexpected accident or dent happens:
              </p>

              {/* Three Customer Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
                <div className="p-4 rounded-xl bg-navy-950 border border-steel-800 text-center">
                  <div className="font-heading font-black text-base text-white">Good Work</div>
                  <div className="text-xs text-crimson-400 mt-1 font-semibold">Flawless Restoration</div>
                  <p className="text-[11px] text-steel-400 mt-1">High-end fit, finish & paint blending.</p>
                </div>

                <div className="p-4 rounded-xl bg-navy-950 border border-steel-800 text-center">
                  <div className="font-heading font-black text-base text-white">Fair Pricing</div>
                  <div className="text-xs text-crimson-400 mt-1 font-semibold">Half The Money</div>
                  <p className="text-[11px] text-steel-400 mt-1">No corporate markups or hidden fees.</p>
                </div>

                <div className="p-4 rounded-xl bg-navy-950 border border-steel-800 text-center">
                  <div className="font-heading font-black text-base text-white">Clear Talk</div>
                  <div className="text-xs text-crimson-400 mt-1 font-semibold">No Pressure</div>
                  <p className="text-[11px] text-steel-400 mt-1">Direct communication with your tech.</p>
                </div>
              </div>

              <blockquote className="border-l-2 border-crimson-500 pl-4 py-1 text-sm text-steel-200 italic font-medium">
                "We don't believe you should have to choose between convenience and quality. You deserve both."
              </blockquote>

            </div>
          </div>

          {/* Right: Family Owned Commitment Box */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-crimson-600 via-steel-700 to-navy-900 shadow-2xl">
              <div className="rounded-[22px] bg-navy-950 p-7 sm:p-8 space-y-6">
                
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-crimson-700 to-crimson-500 flex items-center justify-center text-white mx-auto shadow-crimson-glow">
                    <HeartHandshake className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-black uppercase text-crimson-400 tracking-widest block">
                    WHAT'S DIFFERENT ABOUT TEXAS AUTO BODY?
                  </span>
                  <h4 className="font-heading font-black text-2xl text-white uppercase">
                    We Are Family Owned.
                  </h4>
                  <p className="font-heading font-black text-xl text-crimson-gradient uppercase">
                    We Do Twice The Work For Half The Money.
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-steel-300 leading-relaxed text-center">
                  Unlike corporate collision conglomerates with multiple layers of management and exorbitant overhead, we are an independent Texas family business. We pass those savings directly to you with better craftsmanship, personalized service, and deductible savings coupons.
                </p>

                <div className="pt-2 border-t border-steel-800 space-y-2.5 text-xs text-steel-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-crimson-500 shrink-0" />
                    <span>Free appointments for both mobile & shop-based repairs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-crimson-500 shrink-0" />
                    <span>Open 7 days a week: Mon–Sun 7am–5pm + 24/7 on-call</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-crimson-500 shrink-0" />
                    <span>50-Mile radius service around Arlington & DFW</span>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => onOpenEstimate()}
                    className="w-full inline-flex items-center justify-center gap-2 bg-crimson-600 hover:bg-crimson-500 text-white font-black text-xs uppercase py-3.5 rounded-xl shadow-crimson-glow tracking-wider transition"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Request Free Consultation</span>
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Real Master Tech & Shop Craftsmanship Feature */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="card-metallic rounded-3xl overflow-hidden border border-steel-750 group hover:border-crimson-500/60 transition shadow-2xl">
            <div className="relative h-64 sm:h-72 overflow-hidden bg-navy-900">
              <img
                src="/images/04_dent_repair_technician.jpg"
                alt="Texas Auto Body Certified Master Technician"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
              <div className="absolute top-4 left-4 bg-crimson-600/90 text-white text-xs font-black uppercase px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
                Master Craftsman
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="font-heading font-black text-xl text-white uppercase">
                  Master Technician Hands-On Attention
                </h4>
                <p className="text-xs text-steel-300 mt-1">
                  Every vehicle is inspected and repaired by master technicians with over two decades of metal shaping and structural expertise.
                </p>
              </div>
            </div>
          </div>

          <div className="card-metallic rounded-3xl overflow-hidden border border-steel-750 group hover:border-crimson-500/60 transition shadow-2xl">
            <div className="relative h-64 sm:h-72 overflow-hidden bg-navy-900">
              <img
                src="/images/06_auto_body_sanding.jpg"
                alt="Precision Sanding and Surface Prep"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
              <div className="absolute top-4 left-4 bg-navy-900/90 text-steel-200 text-xs font-black uppercase px-3 py-1 rounded-full border border-steel-700 backdrop-blur-sm">
                Arlington Shop Facility
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="font-heading font-black text-xl text-white uppercase">
                  Precision Surface Preparation
                </h4>
                <p className="text-xs text-steel-300 mt-1">
                  Meticulous multi-grit feather-sanding and primer curing ensures your new paint never peels, ripples, or loses its luster.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Metrics Banner Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="card-metallic rounded-2xl p-5 text-center">
            <div className="font-heading font-black text-3xl sm:text-4xl text-white">25+</div>
            <div className="text-xs font-bold text-crimson-400 uppercase mt-1">Years Experience</div>
            <p className="text-[11px] text-steel-400 mt-1">Master auto body technicians</p>
          </div>

          <div className="card-metallic rounded-2xl p-5 text-center">
            <div className="font-heading font-black text-3xl sm:text-4xl text-white">7 Days</div>
            <div className="text-xs font-bold text-crimson-400 uppercase mt-1">Weekly Schedule</div>
            <p className="text-[11px] text-steel-400 mt-1">7:00 AM – 5:00 PM Daily</p>
          </div>

          <div className="card-metallic rounded-2xl p-5 text-center">
            <div className="font-heading font-black text-3xl sm:text-4xl text-white">50 Mi</div>
            <div className="text-xs font-bold text-crimson-400 uppercase mt-1">DFW Coverage</div>
            <p className="text-[11px] text-steel-400 mt-1">Mobile units dispatched daily</p>
          </div>

          <div className="card-metallic rounded-2xl p-5 text-center">
            <div className="font-heading font-black text-3xl sm:text-4xl text-white">24 Hr</div>
            <div className="text-xs font-bold text-crimson-400 uppercase mt-1">Minor Turnaround</div>
            <p className="text-[11px] text-steel-400 mt-1">Quick bumper & paint restoration</p>
          </div>
        </div>

      </div>
    </section>
  );
};
