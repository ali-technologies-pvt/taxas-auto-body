import React from 'react';
import { Award, Clock, DollarSign, Wrench, Smile, Calendar, CheckCircle2, Sparkles, HeartHandshake } from 'lucide-react';

interface ExperiencePillarsProps {
  onOpenEstimate: (service?: string) => void;
}

export const ExperiencePillars: React.FC<ExperiencePillarsProps> = ({ onOpenEstimate }) => {
  const differentiators = [
    {
      number: '01',
      isMain: true,
      tag: 'NUMBER ONE — THE MAIN ONE',
      title: 'Only Shop in DFW for Mobile & Shop Bumper Repair',
      description:
        'Texas Auto Body is the ONLY body shop in the entire Dallas-Fort Worth area that provides full mobile bumper repair right in your driveway, as well as comprehensive shop-based repair.',
      icon: Wrench,
      highlight: 'Exclusive DFW Capability',
    },
    {
      number: '02',
      isMain: false,
      tag: 'OPEN 7 DAYS A WEEK',
      title: 'Open 7 Days a Week + 24/7 Availability',
      description:
        'Texas Auto Body is the only body shop in Dallas-Fort Worth open Monday through Sunday, 7:00 AM – 5:00 PM. Plus, our 24/7 availability ensures you never get left stranded after-hours.',
      icon: Calendar,
      highlight: 'Mon – Sun 7am–5pm + 24/7',
    },
    {
      number: '03',
      isMain: false,
      tag: 'UNBEATABLE VALUE',
      title: 'Twice the Work for Half the Money',
      description:
        'We are family-owned and committed to true Texan value. We give you twice the work for half the money with transparent quotes and coupons available for your insurance deductibles.',
      icon: DollarSign,
      highlight: 'Family Owned & Fair Pricing',
    },
    {
      number: '04',
      isMain: false,
      tag: 'FAST EXECUTION',
      title: '24-Hour Turnaround On Minor Works',
      description:
        'Need your car back fast? For minor dents, scratch repair, and bumper fixes, we can complete repairs and have you driving within 24 hours.',
      icon: Clock,
      highlight: 'Get Back On The Road Fast',
    },
    {
      number: '05',
      isMain: false,
      tag: 'HONEST CRAFTSMANSHIP',
      title: 'Sensational. Incredible. Unbelievable.',
      description:
        'We could do sensational. We could do incredible. We could do unbelievable. Can we do miracles? :) We can’t do miracles, we tried it didn’t work. :) But we promise to show up, do the work, and give your vehicle our absolute best.',
      icon: Smile,
      highlight: 'We Tried It Didn’t Work :)',
    },
    {
      number: '06',
      isMain: false,
      tag: 'ZERO RISK',
      title: '100% Free Appointments & Estimates',
      description:
        'Free appointment for mobile services and shop-based services. Know exactly what your repair will cost before any work begins — no guesswork, no pressure.',
      icon: Award,
      highlight: 'Free Mobile & Shop Consultations',
    },
  ];

  return (
    <section id="differentiators" className="py-16 sm:py-24 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 relative border-b border-steel-800/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Segment: 25+ Years Experience Story */}
        <div className="card-metallic rounded-3xl p-8 sm:p-12 mb-16 sm:mb-20 border-steel-700/80 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-crimson-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-crimson-950/80 text-crimson-400 border border-crimson-600/40 text-xs font-black uppercase px-3.5 py-1.5 rounded-full">
                <Award className="w-4 h-4" />
                25+ YEARS OF EXPERIENCE
              </div>

              <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-tight">
                Experience Matters When Your Car Gets Damaged.
              </h2>

              <p className="text-steel-300 text-base sm:text-lg leading-relaxed">
                For more than <strong>25 years</strong>, Texas Auto Body has been helping vehicle owners across Arlington and the Dallas-Fort Worth area get their cars looking right again.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-navy-950/90 border border-steel-800 text-center">
                  <div className="text-crimson-400 font-black text-lg">Good Work</div>
                  <div className="text-xs text-steel-400 mt-0.5">Top-tier craftsmanship</div>
                </div>
                <div className="p-3.5 rounded-xl bg-navy-950/90 border border-steel-800 text-center">
                  <div className="text-crimson-400 font-black text-lg">Fair Pricing</div>
                  <div className="text-xs text-steel-400 mt-0.5">Twice the work, half the money</div>
                </div>
                <div className="p-3.5 rounded-xl bg-navy-950/90 border border-steel-800 text-center">
                  <div className="text-crimson-400 font-black text-lg">Clear Communication</div>
                  <div className="text-xs text-steel-400 mt-0.5">No surprises or hidden fees</div>
                </div>
              </div>

              <p className="text-steel-400 text-sm italic pt-1">
                "We know auto body repair. We know what customers want. And we don't believe you should have to choose between convenience and quality."
              </p>
            </div>

            {/* Right: Badge Summary */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl bg-gradient-to-b from-navy-900 to-navy-950 p-6 border border-steel-600/60 text-center shadow-xl">
                <HeartHandshake className="w-12 h-12 text-crimson-500 mx-auto mb-3" />
                <div className="font-heading font-black text-xl text-white uppercase">
                  Family Owned & Operated
                </div>
                <p className="text-xs text-steel-300 mt-2 leading-relaxed">
                  We treat every customer like a neighbor and every car like our own. Proudly serving Texans for over a quarter century.
                </p>
                <div className="mt-4 pt-4 border-t border-steel-800 text-xs font-bold text-crimson-400">
                  Serving Arlington, Fort Worth & 50-Mile Radius
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Section Header: What Makes Us Different */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-crimson-400 bg-crimson-950/80 px-4 py-1.5 rounded-full border border-crimson-600/30">
            WHAT MAKES US DIFFERENT?
          </span>
          <h2 className="mt-4 font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            More Than Just <br className="hidden sm:inline" />
            <span className="text-crimson-gradient">Another Body Shop</span>
          </h2>
          <p className="mt-3 text-steel-300 text-base sm:text-lg">
            Here is why vehicle owners across the Dallas-Fort Worth area trust Texas Auto Body over anyone else:
          </p>
        </div>

        {/* 6 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 card-metallic ${
                  item.isMain
                    ? 'border-crimson-500/80 shadow-crimson-glow relative ring-1 ring-crimson-500/30'
                    : 'border-steel-700/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black uppercase tracking-wider text-crimson-400 bg-crimson-950 px-2.5 py-1 rounded border border-crimson-700/50">
                      {item.tag}
                    </span>
                    <span className="font-heading font-black text-2xl text-steel-500">
                      {item.number}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-navy-900 border border-steel-700 flex items-center justify-center text-crimson-500 mb-4 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-steel-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-steel-800/80 flex items-center justify-between text-xs font-semibold text-crimson-400">
                  <span>{item.highlight}</span>
                  <CheckCircle2 className="w-4 h-4 text-crimson-500 shrink-0" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenEstimate()}
            className="inline-flex items-center gap-2 bg-crimson-600 hover:bg-crimson-500 text-white font-extrabold px-8 py-4 rounded-xl shadow-crimson-glow text-base uppercase tracking-wider transition transform hover:scale-105"
          >
            <Sparkles className="w-5 h-5" />
            <span>EXPERIENCE THE DIFFERENCE — GET FREE ESTIMATE</span>
          </button>
        </div>

      </div>
    </section>
  );
};
