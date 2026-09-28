import React, { useState } from 'react';
import { MapPin, Phone, CheckCircle2, Search, Compass } from 'lucide-react';

interface ServiceAreaMapProps {
  onOpenEstimate: (service?: string) => void;
}

export const ServiceAreaMap: React.FC<ServiceAreaMapProps> = ({ onOpenEstimate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<string | null>(null);

  const primaryCities = [
    { name: 'Arlington', isHub: true, note: 'Primary Hub & Main Shop' },
    { name: 'Pantego', isHub: false, note: 'Full Mobile Coverage' },
    { name: 'Dalworthington Gardens', isHub: false, note: 'Full Mobile Coverage' },
    { name: 'Mansfield', isHub: false, note: 'Mobile & Shop Service' },
    { name: 'Grand Prairie', isHub: false, note: 'Mobile & Shop Service' },
    { name: 'Kennedale', isHub: false, note: 'Full Mobile Coverage' },
    { name: 'Fort Worth', isHub: false, note: 'Mobile & Shop Service' },
    { name: 'Hurst', isHub: false, note: 'Full Mobile Coverage' },
    { name: 'Euless', isHub: false, note: 'Full Mobile Coverage' },
    { name: 'Bedford', isHub: false, note: 'Full Mobile Coverage' },
    { name: 'Everman', isHub: false, note: 'Full Mobile Coverage' },
    { name: 'Forest Hill', isHub: false, note: 'Full Mobile Coverage' },
  ];

  const handleCheckArea = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const query = searchQuery.trim().toLowerCase();
    
    // Check if query matches listed or general DFW / 50-mile radius keywords
    const matches = primaryCities.some(c => c.name.toLowerCase().includes(query)) ||
      ['dallas', 'dfw', 'tarrant', 'irving', 'north richland hills', 'southlake', 'colleyville', 'grapevine', 'benbrook', 'burleson', 'cedar hill', 'duncanville', '760', '761', '750', '752'].some(k => query.includes(k));

    if (matches) {
      setSearchResult(`Great news! "${searchQuery}" is within our 50-mile DFW service radius. Mobile & shop service is available!`);
    } else {
      setSearchResult(`You may still be covered! Call us at +1 817-820-9773 to confirm mobile dispatch to "${searchQuery}".`);
    }
  };

  return (
    <section id="service-area" className="py-16 sm:py-24 bg-navy-950 relative border-b border-steel-800/80">
      
      {/* Background accents */}
      <div className="absolute left-10 top-1/3 w-80 h-80 bg-crimson-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-crimson-400 bg-crimson-950/80 px-4 py-1.5 rounded-full border border-crimson-600/30">
            SERVING THE DFW AREA
          </span>
          <h2 className="mt-4 font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            Auto Body Repair <br />
            <span className="text-crimson-gradient">Near You — 50-Mile Radius</span>
          </h2>
          <p className="mt-3 text-steel-300 text-base sm:text-lg">
            Texas Auto Body serves vehicle owners throughout Arlington and surrounding communities within approximately a <strong>50-mile service radius</strong>.
          </p>
        </div>

        {/* 12 Named Communities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 mb-12">
          {primaryCities.map((city) => (
            <div
              key={city.name}
              className={`p-4 sm:p-5 rounded-2xl flex flex-col justify-between transition-all duration-300 card-metallic ${
                city.isHub
                  ? 'border-crimson-500 shadow-crimson-glow ring-1 ring-crimson-500/40 bg-gradient-to-br from-navy-850 to-navy-900'
                  : 'border-steel-800 hover:border-steel-600'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-navy-900 border border-steel-700 flex items-center justify-center text-crimson-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  {city.isHub && (
                    <span className="text-[10px] font-black uppercase text-white bg-crimson-600 px-2 py-0.5 rounded-full">
                      Primary Hub
                    </span>
                  )}
                </div>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                  {city.name}
                </h3>
                <p className="text-xs text-steel-400 mt-1">
                  {city.note}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-steel-800/80 flex items-center gap-1.5 text-[11px] font-semibold text-crimson-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Mobile Dispatch Ready</span>
              </div>
            </div>
          ))}
        </div>

        {/* Radius Check & "Don't See Your City?" Box */}
        <div className="card-metallic rounded-3xl p-7 sm:p-10 border-steel-700/80 bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Interactive ZIP/City Checker */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase text-crimson-400 tracking-wider">
                <Compass className="w-4 h-4" />
                CHECK YOUR SERVICE LOCATION
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase">
                Don't See Your City Listed?
              </h3>
              <p className="text-sm text-steel-300 leading-relaxed">
                If you are within approximately 50 miles of Arlington, Texas, you are likely inside our mobile service area. Check your city or ZIP code below:
              </p>

              <form onSubmit={handleCheckArea} className="flex flex-col sm:flex-row gap-2.5 max-w-lg">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-steel-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter city or ZIP (e.g. 76010, Irving)"
                    className="w-full bg-navy-950 text-white placeholder-steel-500 pl-10 pr-4 py-3 rounded-xl border border-steel-700 focus:border-crimson-500 focus:outline-none text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-crimson-600 hover:bg-crimson-500 text-white font-bold text-xs uppercase px-5 py-3 rounded-xl tracking-wider transition shrink-0"
                >
                  Verify Coverage
                </button>
              </form>

              {searchResult && (
                <div className="p-3.5 rounded-xl bg-navy-950 border border-crimson-600/50 text-xs sm:text-sm text-steel-200">
                  {searchResult}
                </div>
              )}
            </div>

            {/* Right: Direct Dispatch Call Box */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-navy-950 border border-steel-700/80 text-center space-y-4">
              <span className="text-xs font-bold text-steel-400 uppercase tracking-widest">
                Speak to Local Dispatch
              </span>
              <div className="font-heading font-black text-2xl sm:text-3xl text-white">
                +1 817-820-9773
              </div>
              <p className="text-xs text-steel-300">
                Give us a quick call. We can immediately confirm travel time to your driveway or workplace.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 pt-1">
                <a
                  href="tel:+18178209773"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-navy-850 hover:bg-navy-800 text-white py-3 rounded-xl border border-steel-700 font-bold text-xs uppercase transition"
                >
                  <Phone className="w-4 h-4 text-crimson-400" />
                  Call Now
                </a>
                <button
                  onClick={() => onOpenEstimate()}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-crimson-600 hover:bg-crimson-500 text-white py-3 rounded-xl font-bold text-xs uppercase transition shadow-md"
                >
                  Book Mobile Unit
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
