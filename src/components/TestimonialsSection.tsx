import React from 'react';
import { Star, ShieldCheck, MapPin, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      author: 'Marcus Vance',
      location: 'Arlington, TX',
      service: 'Mobile Bumper Repair (Driveway)',
      text: 'My dealership told me I had to buy a brand-new rear bumper for $1,600 after a parking pole scuff. Texas Auto Body sent their mobile unit to my driveway in Arlington, repaired and welded the crack, color-matched the paint flawlessly, and charged less than half of what the dealer wanted. Done in just a few hours!',
      rating: 5,
      tag: 'Saved $900 vs Dealership',
    },
    {
      author: 'Elena Rodriguez',
      location: 'Fort Worth, TX',
      service: 'Insurance Collision & Deductible Coupon',
      text: 'After an accident on I-20, I was dreading the $1,000 deductible. Texas Auto Body helped with the insurance claim process and applied their deductible coupon discount. Their customer communication was incredible. Truly twice the work for half the hassle.',
      rating: 5,
      tag: 'Deductible Savings Applied',
    },
    {
      author: 'David Hollister',
      location: 'Mansfield, TX',
      service: 'Paintless Dent Repair (PDR)',
      text: 'A shopping cart slammed into my truck door at the supermarket leaving a nasty dent. Texas Auto Body came to my workplace in Mansfield and massaged it out completely with PDR without even touching my factory paint. Outstanding 25-year craftsmanship!',
      rating: 5,
      tag: '24-Hour Turnaround',
    },
    {
      author: 'Sarah Jenkins',
      location: 'Grand Prairie, TX',
      service: 'Bumper Scuffs & Paint Matching',
      text: 'Having someone come to your house on a Sunday morning to fix bumper damage is something no other body shop in DFW offers. They are open 7 days a week just like they say. Friendly, family-owned, and sensational work!',
      rating: 5,
      tag: 'Open Sunday Mobile Visit',
    },
  ];

  return (
    <section id="reviews" className="py-18 sm:py-24 bg-navy-950 relative border-b border-steel-800/80">
      
      {/* Decorative accent */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-crimson-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-crimson-400 bg-crimson-950/80 px-4 py-1.5 rounded-full border border-crimson-600/30">
            TESTIMONIALS & TRUST
          </span>
          <h2 className="mt-4 font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            Proven Results Across <br />
            <span className="text-crimson-gradient">The Dallas-Fort Worth Metroplex</span>
          </h2>
          <p className="mt-3 text-steel-300 text-base sm:text-lg">
            See why drivers from Arlington, Fort Worth, Mansfield, and Grand Prairie rate Texas Auto Body 4.9/5 stars.
          </p>

          <div className="flex items-center justify-center gap-1.5 mt-4 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-white font-bold text-sm ml-2">
              4.9 / 5.0 (250+ Verified Reviews)
            </span>
          </div>
        </div>

        {/* 4 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="card-metallic rounded-3xl p-7 sm:p-8 flex flex-col justify-between border-steel-700/80 hover:border-crimson-500/60 transition-all duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-crimson-400 bg-crimson-950 px-2.5 py-1 rounded-md border border-crimson-700/50">
                    {rev.tag}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-steel-700 mb-3 group-hover:text-crimson-500/40 transition-colors" />

                <p className="text-steel-300 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-steel-800/80 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-black text-white text-base">
                    {rev.author}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-steel-400 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-crimson-500" />
                    <span>{rev.location}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-semibold text-steel-400 block">
                    Verified Repair
                  </span>
                  <span className="text-xs font-bold text-crimson-400">
                    {rev.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Trust Strip */}
        <div className="mt-12 p-5 rounded-2xl bg-navy-900 border border-steel-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center font-black text-navy-950 text-xl shrink-0">
              G
            </div>
            <div>
              <div className="text-sm font-bold text-white">Google Customer Verified Rating</div>
              <div className="text-xs text-steel-400">Over 25 years of trusted auto body repair in Tarrant County</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-crimson-500" />
            <span className="text-xs font-bold text-steel-200 uppercase tracking-wide">
              100% Satisfaction & Color-Match Guaranteed
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
