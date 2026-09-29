import React from 'react';
import { Home, Briefcase, MapPin, Truck, Check, Sparkles, Phone, ShieldCheck } from 'lucide-react';

interface MobileConvenienceProps {
  onOpenEstimate: (service?: string) => void;
}

export const MobileConvenience: React.FC<MobileConvenienceProps> = ({ onOpenEstimate }) => {
  return (
    <section id="mobile-convenience" className="py-16 sm:py-24 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 relative border-b border-steel-800/80 overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-crimson-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-crimson-400 bg-crimson-950/80 px-4 py-1.5 rounded-full border border-crimson-600/30">
            WE COME TO YOU
          </span>
          <h2 className="mt-4 font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            Your Driveway. Your Workplace. <br />
            <span className="text-crimson-gradient">Your Schedule.</span>
          </h2>
          <p className="mt-4 text-base sm:text-xl text-steel-300 font-medium">
            Why spend your day sitting in a dusty waiting room?
          </p>
          <p className="mt-2 text-sm sm:text-base text-steel-400 max-w-2xl mx-auto">
            For qualifying repairs, our fully equipped mobile service comes directly to you. And when a repair requires heavy shop machinery, our Arlington facility has you covered.
          </p>
        </div>

        {/* 3 Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          
          {/* Card 1: Home */}
          <div className="card-metallic rounded-2xl p-7 relative group hover:border-crimson-500/60 transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-navy-900 border border-steel-700 flex items-center justify-center text-crimson-500 mb-6 group-hover:bg-crimson-600 group-hover:text-white transition shadow-lg">
              <Home className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-black text-2xl text-white mb-2 uppercase">
              Home
            </h3>
            <p className="text-sm font-bold text-crimson-400 mb-3">
              Right In Your Driveway
            </p>
            <p className="text-steel-300 text-sm leading-relaxed">
              Stay in the comfort of your living room, spend time with family, or relax while our technicians carry out professional repairs on your driveway.
            </p>
            <ul className="mt-5 space-y-2 text-xs text-steel-400">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-crimson-500" />
                Zero waiting room boredom
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-crimson-500" />
                Weekend & evening friendly
              </li>
            </ul>
          </div>

          {/* Card 2: Work */}
          <div className="card-metallic rounded-2xl p-7 relative group hover:border-crimson-500/60 transition-all duration-300 transform hover:-translate-y-1 border-crimson-600/30">
            <div className="absolute top-4 right-4 bg-crimson-600 text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">
              Most Popular
            </div>
            <div className="w-14 h-14 rounded-xl bg-navy-900 border border-steel-700 flex items-center justify-center text-crimson-500 mb-6 group-hover:bg-crimson-600 group-hover:text-white transition shadow-lg">
              <Briefcase className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-black text-2xl text-white mb-2 uppercase">
              Work
            </h3>
            <p className="text-sm font-bold text-crimson-400 mb-3">
              Your Workplace Parking Lot
            </p>
            <p className="text-steel-300 text-sm leading-relaxed">
              No need to take time off work or arrange expensive rideshares. Park at your office in the morning, and leave at 5 PM with your car restored.
            </p>
            <ul className="mt-5 space-y-2 text-xs text-steel-400">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-crimson-500" />
                No time taken off your workday
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-crimson-500" />
                Zero disruption to your schedule
              </li>
            </ul>
          </div>

          {/* Card 3: Safe Accessible Location */}
          <div className="card-metallic rounded-2xl p-7 relative group hover:border-crimson-500/60 transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-navy-900 border border-steel-700 flex items-center justify-center text-crimson-500 mb-6 group-hover:bg-crimson-600 group-hover:text-white transition shadow-lg">
              <MapPin className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-black text-2xl text-white mb-2 uppercase">
              Anywhere Safe
            </h3>
            <p className="text-sm font-bold text-crimson-400 mb-3">
              Safely Accessible in DFW
            </p>
            <p className="text-steel-300 text-sm leading-relaxed">
              Wherever your vehicle is parked safely within our 50-mile Arlington & DFW service area, our mobile auto body unit can meet you there.
            </p>
            <ul className="mt-5 space-y-2 text-xs text-steel-400">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-crimson-500" />
                50-Mile radius coverage
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-crimson-500" />
                Commercial or residential lots
              </li>
            </ul>
          </div>

        </div>

        {/* Mobile vs Shop Real Facility Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {/* Mobile Dispatch Card */}
          <div className="card-metallic rounded-3xl overflow-hidden border border-steel-750 group hover:border-crimson-500/60 transition shadow-2xl">
            <div className="relative h-60 sm:h-64 overflow-hidden bg-navy-900">
              <img
                src="/images/16_auto_paint_spray_white.jpg"
                alt="Texas Auto Body Mobile Repair Unit in Action"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
              <div className="absolute top-4 left-4 bg-crimson-600 text-white text-xs font-black uppercase px-3 py-1 rounded-full shadow">
                Option 1: Mobile Fleet Dispatch
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="font-heading font-black text-xl text-white uppercase">
                  Mobile Driveway & Workplace Service
                </h4>
                <p className="text-xs text-steel-300 mt-1">
                  On-site bumper repair, paintless dent repair (PDR), paint touch-ups, and minor scuffs completed right outside your home or office.
                </p>
              </div>
            </div>
          </div>

          {/* Shop Facility Card */}
          <div className="card-metallic rounded-3xl overflow-hidden border border-steel-750 group hover:border-crimson-500/60 transition shadow-2xl">
            <div className="relative h-60 sm:h-64 overflow-hidden bg-navy-900">
              <img
                src="/images/07_auto_body_frame_repair.jpg"
                alt="Arlington Texas Auto Body Shop Heavy Frame Machinery"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
              <div className="absolute top-4 left-4 bg-navy-900/90 text-steel-200 border border-steel-700 text-xs font-black uppercase px-3 py-1 rounded-full shadow backdrop-blur-sm">
                Option 2: Arlington Shop Facility
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="font-heading font-black text-xl text-white uppercase">
                  Heavy Structural Frame Machinery
                </h4>
                <p className="text-xs text-steel-300 mt-1">
                  Chassis unibody realignment, heavy collision rebuilds, structural welding, and factory downdraft baking booths in our Arlington center.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Two-Way Model Banner */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 rounded-3xl p-6 sm:p-10 border border-steel-700/80 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-black text-crimson-400 uppercase tracking-widest bg-crimson-950/80 px-3 py-1 rounded-full border border-crimson-600/40">
                <Truck className="w-4 h-4" />
                Mobile Service + Shop-Based Service
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                One Auto Body Shop. <br className="sm:hidden" />
                <span className="text-steel-200">Two Convenient Ways to Get Fixed.</span>
              </h3>
              <p className="text-steel-300 text-sm sm:text-base leading-relaxed">
                Whether you need a quick mobile repair on your bumper or paint, or heavy collision repair at our fully equipped Arlington shop, Texas Auto Body guarantees the same 25+ years of craftsmanship and unbeatable prices.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-steel-300 pt-1">
                <span className="flex items-center gap-1.5 text-steel-100">
                  <ShieldCheck className="w-4 h-4 text-crimson-500" />
                  Free Appointment for Mobile & Shop
                </span>
                <span className="flex items-center gap-1.5 text-steel-100">
                  <ShieldCheck className="w-4 h-4 text-crimson-500" />
                  Free Instant Estimates
                </span>
                <span className="flex items-center gap-1.5 text-steel-100">
                  <ShieldCheck className="w-4 h-4 text-crimson-500" />
                  Twice the Work for Half the Money
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={() => onOpenEstimate('Mobile Service')}
                className="w-full inline-flex items-center justify-center gap-2 bg-crimson-600 hover:bg-crimson-500 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-crimson-glow text-sm uppercase tracking-wider transition transform hover:scale-105"
              >
                <Sparkles className="w-4 h-4" />
                Book Free Mobile Service
              </button>
              <a
                href="tel:+18178209773"
                className="w-full inline-flex items-center justify-center gap-2 bg-navy-950 hover:bg-navy-800 text-white font-bold px-6 py-3.5 rounded-xl border border-steel-700 text-sm transition"
              >
                <Phone className="w-4 h-4 text-crimson-400" />
                Call +1 817-820-9773
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
