import React from 'react';
import { Sparkles, HeartHandshake, Smile, ArrowRight } from 'lucide-react';

interface PhilosophyHumorProps {
  onOpenEstimate: (service?: string) => void;
}

export const PhilosophyHumor: React.FC<PhilosophyHumorProps> = ({ onOpenEstimate }) => {
  return (
    <section id="philosophy" className="py-16 sm:py-24 bg-navy-950 relative border-b border-steel-800/80 overflow-hidden">
      
      {/* Decorative Gradients */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-crimson-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Our Philosophy */}
          <div className="lg:col-span-6 card-metallic rounded-3xl p-8 sm:p-10 flex flex-col justify-between border-steel-700/80">
            <div>
              <div className="inline-flex items-center gap-2 bg-crimson-950/80 text-crimson-400 border border-crimson-600/40 text-xs font-black uppercase px-3 py-1 rounded-full mb-4">
                <HeartHandshake className="w-3.5 h-3.5" />
                OUR PHILOSOPHY
              </div>

              <h2 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase tracking-tight mb-4">
                Twice the Work. <br />
                <span className="text-crimson-gradient">Half the Hassle.</span>
              </h2>

              <p className="text-steel-300 text-base leading-relaxed mb-6">
                We believe vehicle owners in Texas deserve more. When your car gets damaged, you shouldn't have to fight for honest pricing or wait weeks for simple updates.
              </p>

              {/* 4 Pillars of More */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { label: 'More Attention', desc: 'Direct access to your technician' },
                  { label: 'More Communication', desc: 'Clear updates at every step' },
                  { label: 'More Value', desc: 'Twice the work for half the money' },
                  { label: 'More Effort', desc: 'Mobile or shop, we do whatever it takes' },
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-navy-900 border border-steel-800">
                    <div className="text-xs font-black uppercase text-crimson-400 mb-1">
                      {item.label}
                    </div>
                    <div className="text-[11px] text-steel-400 leading-snug">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-navy-900 to-navy-850 border border-steel-700 text-xs text-steel-200">
              <strong className="text-white block uppercase tracking-wider mb-1">Our Core Commitment:</strong>
              Do More Work. Create More Value. Make the Repair Easier. That's how we approach every customer and every vehicle.
            </div>
          </div>

          {/* Right Column: We Aim High + The Miracles Joke */}
          <div className="lg:col-span-6 card-metallic rounded-3xl p-8 sm:p-10 flex flex-col justify-between border-crimson-600/40 relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900">
            
            {/* Background subtle star outline */}
            <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none text-white">
              <svg width="280" height="280" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-crimson-600/20 text-crimson-400 border border-crimson-500/40 text-xs font-black uppercase px-3 py-1 rounded-full mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                WE AIM HIGH
              </div>

              <h2 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase tracking-tight mb-6">
                Sensational? Absolutely. <br />
                Incredible? We'll Try. <br />
                <span className="text-crimson-gradient">Unbelievable? That's The Goal.</span>
              </h2>

              {/* The Famous Client Humor Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-navy-950/90 border-2 border-crimson-600/60 shadow-xl space-y-3 mb-6 relative">
                <div className="flex items-center gap-2 text-crimson-400 font-black text-lg sm:text-xl uppercase">
                  <Smile className="w-6 h-6 text-crimson-400 shrink-0" />
                  <span>Miracles?</span>
                </div>
                
                <p className="text-white text-base sm:text-lg font-bold italic leading-relaxed">
                  "We can't do miracles. We tried, it didn't work. :)"
                </p>

                <p className="text-steel-300 text-xs sm:text-sm leading-relaxed border-t border-steel-800 pt-3">
                  But we can promise to show up on time, do the work right the first time, and give your vehicle our absolute best craftsmanship.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenEstimate()}
                className="w-full inline-flex items-center justify-center gap-2 bg-crimson-600 hover:bg-crimson-500 text-white font-extrabold text-xs sm:text-sm uppercase py-4 rounded-xl shadow-crimson-glow tracking-wider transition transform hover:scale-[1.02]"
              >
                <span>LET'S GET YOUR VEHICLE LOOKING RIGHT AGAIN</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
