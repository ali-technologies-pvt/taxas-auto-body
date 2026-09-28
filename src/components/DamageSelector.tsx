import React from 'react';
import { Sparkles, ArrowRight, ShieldAlert, Car, AlertOctagon, Disc, Paintbrush } from 'lucide-react';

interface DamageSelectorProps {
  onSelectDamage: (damageType: string) => void;
}

export const DamageSelector: React.FC<DamageSelectorProps> = ({ onSelectDamage }) => {
  const commonDamages = [
    {
      id: 'dented-door',
      title: 'A Dented Door',
      description: 'Side swipes, door dings, and crease dents fixed seamlessly with PDR or precision repair.',
      icon: Car,
      tag: 'Mobile or Shop',
    },
    {
      id: 'cracked-bumper',
      title: 'A Cracked Bumper',
      description: 'Scuffs, cracks, dents, and plastic tears restored. Don’t pay for an expensive replacement yet!',
      icon: ShieldAlert,
      tag: 'Bumper Specialists',
    },
    {
      id: 'parking-lot-ding',
      title: 'A Parking Lot Ding',
      description: 'Small shopping cart or car door impacts quickly smoothed out without ruining factory paint.',
      icon: AlertOctagon,
      tag: 'Fast PDR',
    },
    {
      id: 'collision-damage',
      title: 'Collision Damage',
      description: 'Accident repairs, structural panel alignment, and stress-free insurance claim guidance.',
      icon: Disc,
      tag: 'Insurance Assistance',
    },
    {
      id: 'paint-mismatch',
      title: "Paint That Doesn't Match",
      description: 'Factory-grade paint matching, blending, and paint correction to erase swirl marks and flaws.',
      icon: Paintbrush,
      tag: 'Computerized Match',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-navy-950 relative border-b border-steel-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-crimson-400 bg-crimson-950/60 px-3 py-1 rounded-full border border-crimson-600/30">
            Need Auto Body Repair?
          </span>
          <h2 className="mt-3 font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            Don't Let a Damaged Car <br className="hidden sm:inline" />
            <span className="text-crimson-gradient">Slow You Down</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-steel-300 leading-relaxed">
            Whatever happened, <strong className="text-white">Texas Auto Body</strong> is ready to help. With mobile and shop-based repair options, we make getting your vehicle repaired simple, convenient, and affordable.
          </p>
        </div>

        {/* 5 Common Damage Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {commonDamages.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onSelectDamage(item.title)}
                className="group relative cursor-pointer card-metallic rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-navy-900 border border-steel-700/80 flex items-center justify-center text-crimson-500 group-hover:text-white group-hover:bg-crimson-600 transition-colors shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-steel-800/80 text-steel-300 group-hover:text-white transition">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-lg text-white group-hover:text-crimson-400 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-steel-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-steel-800/60 flex items-center justify-between text-xs font-bold text-steel-300 group-hover:text-crimson-400">
                  <span>Get Estimate</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout & CTA */}
        <div className="mt-12 text-center">
          <p className="text-steel-300 text-sm sm:text-base mb-4">
            No long waiting lists. No hassle. Tell us what happened and let our 25+ years of experience take care of the rest.
          </p>
          <button
            onClick={() => onSelectDamage('General Auto Body Repair')}
            className="inline-flex items-center gap-2 bg-crimson-600 hover:bg-crimson-500 text-white font-black text-sm uppercase px-6 py-3.5 rounded-xl shadow-crimson-glow tracking-wider transition transform hover:scale-105"
          >
            <Sparkles className="w-4 h-4" />
            <span>GET A FREE ESTIMATE TODAY</span>
          </button>
        </div>

      </div>
    </section>
  );
};
