import React, { useState } from 'react';
import { Sparkles, Shield, Paintbrush, Disc, Car, Check, ArrowRight, Phone } from 'lucide-react';

interface ServicesGridProps {
  onOpenEstimate: (service?: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenEstimate }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'dents' | 'collision' | 'paint'>('all');

  const services = [
    {
      id: 'dent-repair',
      category: 'dents',
      badge: 'SMALL DENT? BIG PROBLEM?',
      headline: 'Not Necessarily.',
      subhead: 'Straightforward damage evaluation with zero pressure.',
      description:
        'That parking lot dent may be repairable. That door ding may be repairable. That bumper damage may be repairable. Our team will inspect the damage and help you understand your best, most affordable options. No guessing. No pressure. Just a straightforward repair estimate.',
      bullets: [
        'Parking lot dents & crease repairs',
        'Door dings & shopping cart impacts',
        'Straightforward, honest repair estimates',
        'Mobile or shop evaluation',
      ],
      ctaText: 'GET MY FREE ESTIMATE',
      icon: Car,
    },
    {
      id: 'pdr',
      category: 'dents',
      badge: 'PAINTLESS DENT REPAIR (PDR)',
      headline: 'Keep Your Original Paint When Possible.',
      subhead: 'Preserve the Paint. Restore the Shape.',
      description:
        'Paintless Dent Repair, or PDR, can repair certain dents without repainting the damaged panel. By utilizing specialized metal manipulation tools, we push dents out from the backside, keeping your factory finish 100% intact.',
      bullets: [
        'Door dings & parking lot dents',
        'Small dents & minor panel damage',
        'Hail damage restoration',
        'Zero repainting — preserves factory warranty & resale value',
      ],
      ctaText: 'REQUEST PDR ESTIMATE',
      icon: Shield,
    },
    {
      id: 'collision-repair',
      category: 'collision',
      badge: 'INSURANCE COLLISION REPAIR',
      headline: 'Had an Accident? Let Us Help You Get Back on the Road.',
      subhead: 'Accidents are stressful enough. Your repair shouldn’t add more stress.',
      description:
        'Texas Auto Body provides professional insurance collision repair for qualifying vehicle damage. We will evaluate the damage, explain all repair options, and help guide you through the next steps smoothly.',
      bullets: [
        'Full structural panel alignment & fitment',
        'Insurance claim assistance & paperwork help',
        'Coupons available for your deductibles',
        'Transparent updates every step of the way',
      ],
      ctaText: 'START COLLISION ESTIMATE',
      icon: Disc,
    },
    {
      id: 'paint-matching',
      category: 'paint',
      badge: 'PRECISION PAINT MATCHING',
      headline: "A Repair Shouldn't Look Like a Repair.",
      subhead: 'Better Match. Better Finish. Better Look.',
      description:
        'Getting the shape right is only part of the job — the finish matters just as much. Our computerized paint-matching service is designed to help repaired areas blend seamlessly with the surrounding factory finish.',
      bullets: [
        'Spectrophotometer computer color formulation',
        'Flawless blending into adjacent panels',
        'Premium UV-resistant clear coats',
        'No visible paint transitions or halos',
      ],
      ctaText: 'GET A FREE ESTIMATE',
      icon: Paintbrush,
    },
    {
      id: 'paint-correction',
      category: 'paint',
      badge: 'PAINT CORRECTION',
      headline: 'Bring Back the Shine.',
      subhead: 'Make Your Car Look Better Again.',
      description:
        'Swirls. Oxidation. Water spots. Light surface imperfections. Your vehicle’s paint takes a beating from the harsh Texas sun and road debris. Our multi-stage paint correction restores depth, clarity, and gloss to qualifying finishes.',
      bullets: [
        'Swirl mark and scratch removal',
        'Oxidation and sun fading restoration',
        'Hard water spot elimination',
        'Deep mirror-finish gloss enhancement',
      ],
      ctaText: 'LEARN MORE & BOOK',
      icon: Sparkles,
    },
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-16 sm:py-24 bg-navy-950 relative border-b border-steel-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-crimson-400 bg-crimson-950/80 px-4 py-1.5 rounded-full border border-crimson-600/30">
            COMPREHENSIVE SERVICES
          </span>
          <h2 className="mt-4 font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            Expert Craftsmanship for <br className="hidden sm:inline" />
            <span className="text-crimson-gradient">Every Dent, Scratch & Collision</span>
          </h2>
          <p className="mt-3 text-steel-300 text-base sm:text-lg">
            Mobile service to your location or full repair at our Arlington shop. 25+ years of automotive excellence.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'dents', label: 'Dent & PDR' },
              { id: 'collision', label: 'Collision Repair' },
              { id: 'paint', label: 'Paint Match & Correction' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-crimson-600 text-white shadow-crimson-glow'
                    : 'bg-navy-900 text-steel-300 hover:text-white hover:bg-navy-850 border border-steel-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="card-metallic rounded-3xl p-7 sm:p-9 flex flex-col justify-between border-steel-700/80 hover:border-crimson-500/60 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-black uppercase text-crimson-400 bg-crimson-950/90 px-3 py-1 rounded-full border border-crimson-700/40">
                      {service.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-navy-900 border border-steel-700 flex items-center justify-center text-crimson-500 group-hover:text-white group-hover:bg-crimson-600 transition shadow">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white mb-2 leading-tight">
                    {service.headline}
                  </h3>

                  <p className="text-sm font-semibold text-crimson-400 mb-4">
                    {service.subhead}
                  </p>

                  <p className="text-sm text-steel-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6 pt-2 border-t border-steel-800/80">
                    {service.bullets.map((b, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-steel-300">
                        <Check className="w-4 h-4 text-crimson-500 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-steel-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    onClick={() => onOpenEstimate(service.badge)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-crimson-600 hover:bg-crimson-500 text-white font-extrabold text-xs uppercase px-5 py-3 rounded-xl tracking-wider transition shadow-md"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="tel:+18178209773"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs text-steel-300 hover:text-white py-2 px-3 rounded-lg hover:bg-navy-800 transition"
                  >
                    <Phone className="w-3.5 h-3.5 text-crimson-400" />
                    <span>Questions? (817) 820-9773</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Collision & Claim Assistance Strip */}
        <div className="mt-12 bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 rounded-2xl p-6 sm:p-8 border border-steel-700/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="text-xs font-black uppercase text-crimson-400 tracking-wider">
              INSURANCE CLAIMS MADE SIMPLE
            </div>
            <h4 className="font-heading font-black text-xl sm:text-2xl text-white uppercase">
              Your Insurance Claim Doesn't Have to Be Complicated.
            </h4>
            <p className="text-xs sm:text-sm text-steel-300 max-w-xl">
              After an accident, you have enough to deal with. Texas Auto Body coordinates with your insurance and provides deductible coupons for qualifying claims.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href="tel:+18178209773"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-navy-950 hover:bg-navy-800 text-white px-5 py-3 rounded-xl border border-steel-700 text-xs font-bold transition"
            >
              <Phone className="w-4 h-4 text-crimson-400" />
              Call +1 817-820-9773
            </a>
            <button
              onClick={() => onOpenEstimate('Insurance Collision Claim')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-crimson-600 hover:bg-crimson-500 text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider shadow-crimson-glow transition"
            >
              Get My Free Estimate
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
