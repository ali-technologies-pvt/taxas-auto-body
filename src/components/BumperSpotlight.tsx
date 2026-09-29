import React from 'react';
import { CheckCircle2, Clock, Sparkles, Phone, Wrench } from 'lucide-react';

interface BumperSpotlightProps {
  onOpenEstimate: (service?: string) => void;
}

export const BumperSpotlight: React.FC<BumperSpotlightProps> = ({ onOpenEstimate }) => {
  const repairableDamageTypes = [
    { title: 'Dents & Creases', desc: 'Pushing out dented contours back to OEM aerodynamic profile.' },
    { title: 'Scratches & Scuffs', desc: 'Removing curb rash, paint transfers, and deep surface scratches.' },
    { title: 'Cracks & Tears', desc: 'Plastic welding and high-strength polymer bonding that prevents spreading.' },
    { title: 'Plastic Damage', desc: 'Restoring distorted, warped, or cracked plastic covers and brackets.' },
    { title: 'Minor Impact Damage', desc: 'Straightening minor bumper reinforcement and clip reattachment.' },
    { title: 'Paint Damage', desc: 'Computerized basecoat and clearcoat respray seamlessly blended.' },
  ];

  return (
    <section id="bumper-repair" className="py-16 sm:py-24 bg-navy-950 relative border-b border-steel-800/80">
      
      {/* Decorative Automotive Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-80 bg-crimson-600/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Flagship Exclusive Banner */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-crimson-900 via-crimson-700 to-crimson-900 border border-crimson-500 text-white text-xs sm:text-sm font-black uppercase px-4 py-1.5 rounded-full shadow-lg mb-4">
            <Sparkles className="w-4 h-4 text-amber-300" />
            #1 DFW Exclusive Service
          </div>
          
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight">
            Don't Replace It Yet — <br />
            <span className="text-crimson-gradient">Your Bumper May Be Repairable.</span>
          </h2>

          <div className="mt-4 p-4 bg-navy-900/90 border border-crimson-600/50 rounded-2xl max-w-3xl mx-auto">
            <p className="text-base sm:text-lg font-bold text-white leading-snug">
              Texas Auto Body is the <span className="text-crimson-400 underline decoration-crimson-500 decoration-2 underline-offset-4">ONLY</span> body shop in the Dallas-Fort Worth area that offers both <span className="text-white font-black">mobile and shop-based</span> professional Bumper Repair!
            </p>
          </div>

          <p className="mt-4 text-steel-300 text-base sm:text-lg max-w-2xl mx-auto">
            A damaged bumper doesn't always mean buying a new one and spending thousands. Before you pay for an expensive replacement, let Texas Auto Body inspect it.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: The Philosophy & Turnaround Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-metallic rounded-3xl p-7 sm:p-8 border-steel-700/80 shadow-2xl space-y-5">
              
              <div className="space-y-2">
                <span className="text-xs font-black uppercase text-crimson-400 tracking-widest">
                  Our Bumper Motto
                </span>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                  Repair When Possible. <br />
                  <span className="text-crimson-500">Replace When Necessary.</span>
                </h3>
              </div>

              <p className="text-steel-300 text-sm sm:text-base leading-relaxed">
                Dealerships and big collision chains often push for brand-new bumpers with huge markups. At Texas Auto Body, our certified plastic technicians repair bumpers that others discard, saving you hundreds of dollars while keeping your original factory fit.
              </p>

              {/* 24-Hour turnaround callout */}
              <div className="p-4 bg-gradient-to-r from-navy-950 to-navy-900 rounded-xl border border-steel-700 flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-crimson-600/20 border border-crimson-500/40 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-crimson-400" />
                </div>
                <div>
                  <div className="text-sm font-black text-white uppercase">
                    24-Hour Turnaround On Minor Works
                  </div>
                  <div className="text-xs text-steel-400">
                    Get back on the road the very next day.
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => onOpenEstimate('Bumper Repair')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-crimson-600 to-crimson-700 hover:from-crimson-500 hover:to-crimson-600 text-white font-extrabold px-6 py-4 rounded-xl shadow-crimson-glow text-sm sm:text-base uppercase tracking-wider transition transform hover:scale-[1.02]"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>GET A FREE BUMPER ESTIMATE</span>
                </button>
                <a
                  href="tel:+18178209773"
                  className="w-full inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-850 text-steel-200 hover:text-white font-bold px-6 py-3 rounded-xl border border-steel-700 text-xs sm:text-sm transition"
                >
                  <Phone className="w-4 h-4 text-crimson-400" />
                  <span>Talk to Bumper Tech: (817) 820-9773</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right: Damage Types Covered Grid */}
          <div className="lg:col-span-7">
            <div className="mb-4">
              <h3 className="font-heading font-black text-xl sm:text-2xl text-white uppercase tracking-tight">
                Qualifying Bumper Damage We Repair
              </h3>
              <p className="text-xs sm:text-sm text-steel-400">
                Front and rear bumpers for all vehicle makes and models across Dallas-Fort Worth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {repairableDamageTypes.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-navy-900/90 border border-steel-800 hover:border-crimson-600/50 transition-all duration-300 card-metallic"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-crimson-950/80 border border-crimson-600/30 flex items-center justify-center text-crimson-400 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-white text-base">
                        {item.title}
                      </h4>
                      <p className="text-xs text-steel-300 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Guarantee Banner */}
            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-steel-700 text-xs text-steel-300 flex items-center gap-3">
              <Wrench className="w-5 h-5 text-crimson-400 shrink-0" />
              <span>
                <strong>Factory Color Matching Guaranteed:</strong> All repaired bumpers receive precise computerized paint blending to match your vehicle's factory clear coat.
              </span>
            </div>
          </div>

        </div>

        {/* 4-Step Real Bumper Restoration Process Showcase */}
        <div className="mt-14 pt-10 border-t border-steel-800/80">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-black uppercase text-crimson-400 tracking-wider">
              REAL REPAIR PROCESS
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mt-1">
              How We Save Your Bumper — In 4 Steps
            </h3>
            <p className="text-xs sm:text-sm text-steel-400 mt-1">
              Actual photos from our mobile and Arlington shop bumper restorations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: '01',
                title: 'Surface Scuff Prep',
                desc: 'Feather-edging scratches, gouges, and parking scrapes.',
                image: '/images/18_bumper_preparation.jpg',
                tag: 'Prep & Sand',
              },
              {
                step: '02',
                title: 'Thermal Plastic Welding',
                desc: 'Melting high-tensile polymer rods into tears and cracks.',
                image: '/images/19_bumper_repair.jpg',
                tag: 'Structural Weld',
              },
              {
                step: '03',
                title: 'Sensor & Clip Alignment',
                desc: 'Precision fitment of parking sensors, grilles, and clips.',
                image: '/images/17_bumper_replacement.jpg',
                tag: 'OEM Fitment',
              },
              {
                step: '04',
                title: 'Showroom Finish',
                desc: 'Seamless paint match and high-gloss clear coat baked to perfection.',
                image: '/images/20_bumper_finished_blue.jpg',
                tag: 'Completed',
              },
            ].map((process, pIdx) => (
              <div
                key={pIdx}
                className="card-metallic rounded-2xl overflow-hidden border border-steel-800 hover:border-crimson-500/60 transition group shadow-lg"
              >
                <div className="relative h-44 overflow-hidden bg-navy-900">
                  <img
                    src={process.image}
                    alt={process.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-black/30" />
                  
                  {/* Step Badge */}
                  <div className="absolute top-3 left-3 bg-crimson-600 text-white font-mono font-black text-xs px-2.5 py-1 rounded-md shadow">
                    STEP {process.step}
                  </div>

                  {/* Tag */}
                  <div className="absolute top-3 right-3 bg-navy-950/80 backdrop-blur-sm text-steel-200 text-[10px] font-bold uppercase px-2 py-0.5 rounded border border-steel-700/80">
                    {process.tag}
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="font-heading font-black text-base text-white group-hover:text-crimson-400 transition-colors">
                    {process.title}
                  </h4>
                  <p className="text-xs text-steel-400 mt-1 leading-relaxed">
                    {process.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
