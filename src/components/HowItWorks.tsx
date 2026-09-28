import React from 'react';
import { PhoneCall, SearchCheck, CheckCircle2, Sparkles } from 'lucide-react';

interface HowItWorksProps {
  onOpenEstimate: (service?: string) => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenEstimate }) => {
  const steps = [
    {
      step: '01',
      title: 'Call or Request an Estimate',
      description: 'Tell us what happened with your vehicle. Send us a few photos or give us a quick call at +1 817-820-9773.',
      icon: PhoneCall,
      action: 'Quick 2-minute request',
    },
    {
      step: '02',
      title: 'We Check the Damage',
      description: 'We will inspect the damage — either at your driveway/workplace or at our shop — and determine the smartest, most affordable repair options.',
      icon: SearchCheck,
      action: 'Honest evaluation, no pressure',
    },
    {
      step: '03',
      title: 'Get Back on the Road',
      description: 'Choose mobile or shop-based service and get your repair underway. Minor repairs can be turned around within 24 hours!',
      icon: CheckCircle2,
      action: '24-hour turnaround on minor works',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 relative border-b border-steel-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-crimson-400 bg-crimson-950/80 px-4 py-1.5 rounded-full border border-crimson-600/30">
            HOW IT WORKS
          </span>
          <h2 className="mt-4 font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            Three Simple Steps. <br />
            <span className="text-crimson-gradient">Simple. Straightforward. Done.</span>
          </h2>
          <p className="mt-3 text-steel-300 text-base sm:text-lg">
            No complicated procedures, no sitting around for weeks. Getting your car fixed in DFW has never been easier.
          </p>
        </div>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Subtle connection line on desktop */}
          <div className="hidden md:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-crimson-700 via-steel-700 to-crimson-700 -translate-y-8 z-0 pointer-events-none opacity-40" />

          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="card-metallic rounded-3xl p-7 sm:p-8 flex flex-col justify-between border-steel-700/80 hover:border-crimson-500/60 transition-all duration-300 relative z-10 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading font-black text-4xl text-crimson-500 group-hover:scale-110 transition-transform">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-navy-900 border border-steel-700 flex items-center justify-center text-white group-hover:bg-crimson-600 transition shadow">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-heading font-black text-xl sm:text-2xl text-white mb-3 uppercase leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-steel-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-steel-800/80 text-xs font-bold text-crimson-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-crimson-500" />
                  <span>{item.action}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenEstimate()}
            className="inline-flex items-center gap-2 bg-crimson-600 hover:bg-crimson-500 text-white font-extrabold px-8 py-4 rounded-xl shadow-crimson-glow text-base uppercase tracking-wider transition transform hover:scale-105"
          >
            <Sparkles className="w-5 h-5" />
            <span>START STEP 01 — GET FREE ESTIMATE</span>
          </button>
        </div>

      </div>
    </section>
  );
};
