import React from 'react';
import { Phone, Sparkles, CheckCircle2, AlertTriangle } from 'lucide-react';

interface UrgencyActionProps {
  onOpenEstimate: (service?: string) => void;
}

export const UrgencyAction: React.FC<UrgencyActionProps> = ({ onOpenEstimate }) => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-navy-950 via-crimson-950 to-navy-950 relative border-b border-crimson-700/50 overflow-hidden">
      
      {/* Background glow and subtle mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-crimson-600/20 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-black uppercase tracking-widest text-crimson-300 bg-crimson-900/80 px-4 py-1.5 rounded-full border border-crimson-500/50 mb-4">
          <AlertTriangle className="w-4 h-4 text-amber-300" />
          WHY WAIT?
        </span>

        <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-tight">
          Your Car Isn't Going <br />
          <span className="text-crimson-400">To Fix Itself.</span>
        </h2>

        {/* 3 Realities Quotes */}
        <div className="my-8 max-w-2xl mx-auto space-y-2.5 text-base sm:text-xl text-steel-200 font-semibold">
          <p className="bg-navy-900/80 border border-steel-800/80 py-2.5 px-4 rounded-xl">
            ❌ That dent isn't getting smaller.
          </p>
          <p className="bg-navy-900/80 border border-steel-800/80 py-2.5 px-4 rounded-xl">
            ❌ That bumper isn't getting less damaged.
          </p>
          <p className="bg-navy-900/80 border border-steel-800/80 py-2.5 px-4 rounded-xl">
            ❌ That paint isn't going to match itself.
          </p>
        </div>

        <p className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-wider mb-8">
          Let's Get It Fixed.
        </p>

        {/* 5 Core Checklist Items */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 mb-10 text-xs sm:text-sm font-bold text-steel-200">
          <span className="flex items-center gap-1.5 bg-navy-900/90 px-3 py-1.5 rounded-lg border border-steel-700">
            <CheckCircle2 className="w-4 h-4 text-crimson-500" />
            FREE ESTIMATE
          </span>
          <span className="flex items-center gap-1.5 bg-navy-900/90 px-3 py-1.5 rounded-lg border border-steel-700">
            <CheckCircle2 className="w-4 h-4 text-crimson-500" />
            MOBILE SERVICE
          </span>
          <span className="flex items-center gap-1.5 bg-navy-900/90 px-3 py-1.5 rounded-lg border border-steel-700">
            <CheckCircle2 className="w-4 h-4 text-crimson-500" />
            SHOP SERVICE
          </span>
          <span className="flex items-center gap-1.5 bg-navy-900/90 px-3 py-1.5 rounded-lg border border-steel-700">
            <CheckCircle2 className="w-4 h-4 text-crimson-500" />
            7 DAYS A WEEK
          </span>
          <span className="flex items-center gap-1.5 bg-navy-900/90 px-3 py-1.5 rounded-lg border border-steel-700">
            <CheckCircle2 className="w-4 h-4 text-crimson-500" />
            25+ YEARS OF EXPERIENCE
          </span>
        </div>

        {/* Big Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+18178209773"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-steel-100 text-navy-950 font-black text-lg px-8 py-4 rounded-xl shadow-2xl transition transform hover:scale-105"
          >
            <Phone className="w-5 h-5 text-crimson-600 animate-pulse" />
            <span>CALL +1 817-820-9773</span>
          </a>

          <button
            onClick={() => onOpenEstimate()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-crimson-600 hover:bg-crimson-500 text-white font-black text-lg px-8 py-4 rounded-xl shadow-crimson-glow uppercase tracking-wider transition transform hover:scale-105"
          >
            <Sparkles className="w-5 h-5" />
            <span>GET MY FREE ESTIMATE</span>
          </button>
        </div>

      </div>
    </section>
  );
};
