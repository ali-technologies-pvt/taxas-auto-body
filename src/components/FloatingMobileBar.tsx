import React from 'react';
import { Phone, Sparkles } from 'lucide-react';

interface FloatingMobileBarProps {
  onOpenEstimate: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ onOpenEstimate }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-navy-950/95 backdrop-blur-lg border-t border-steel-800 shadow-2xl lg:hidden">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href="tel:+18178209773"
          className="flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-850 text-white font-bold text-xs sm:text-sm py-3 px-3 rounded-xl border border-steel-700 shadow-sm active:scale-95 transition"
        >
          <Phone className="w-4 h-4 text-crimson-500 animate-pulse" />
          <span>Call Now</span>
        </a>

        <button
          onClick={onOpenEstimate}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-crimson-600 to-crimson-700 text-white font-black text-xs sm:text-sm py-3 px-3 rounded-xl shadow-crimson-glow uppercase tracking-wider active:scale-95 transition"
        >
          <Sparkles className="w-4 h-4" />
          <span>Free Estimate</span>
        </button>
      </div>
    </div>
  );
};
