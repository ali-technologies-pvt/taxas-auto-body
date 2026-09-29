import React, { useState } from 'react';
import { Sparkles, Eye, X, ArrowRight } from 'lucide-react';

interface PhotoItem {
  id: string;
  category: 'bumper' | 'dent' | 'collision' | 'paint' | 'finish';
  title: string;
  subtitle: string;
  image: string;
  tag: string;
}

interface WorkGalleryProps {
  onOpenEstimate: (service?: string) => void;
}

export const WorkGallery: React.FC<WorkGalleryProps> = ({ onOpenEstimate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const photos: PhotoItem[] = [
    // 1-4: Dent & PDR
    {
      id: '01',
      category: 'dent',
      title: 'Precision Dent Assessment',
      subtitle: 'Detailing body line crease and impact depth for repair',
      image: '/images/01_dent_repair_detail.jpg',
      tag: 'Dent Repair',
    },
    {
      id: '02',
      category: 'dent',
      title: 'Paintless Dent Repair (PDR)',
      subtitle: 'Massaging dents from behind panel to preserve factory clear coat',
      image: '/images/02_dent_repair_panel.jpg',
      tag: 'PDR Service',
    },
    {
      id: '03',
      category: 'dent',
      title: 'Finished Body Panel Restoration',
      subtitle: 'Laser-straight reflection with zero panel distortion',
      image: '/images/03_dent_repair_finished.jpg',
      tag: 'Restored OEM Shape',
    },
    {
      id: '04',
      category: 'dent',
      title: 'Certified Master Tech at Work',
      subtitle: 'Over 25 years of hands-on automotive repair experience in Texas',
      image: '/images/04_dent_repair_technician.jpg',
      tag: 'Master Craftsman',
    },

    // 5-8: Collision & Structural
    {
      id: '05',
      category: 'collision',
      title: 'Full Collision Structural Alignment',
      subtitle: 'Frame alignment and structural rebuild following accident',
      image: '/images/05_auto_body_collision_repair.jpg',
      tag: 'Collision Repair',
    },
    {
      id: '06',
      category: 'collision',
      title: 'Precision Surface Sanding',
      subtitle: 'Dual-action sanding preparing primer coat for factory-smooth paint',
      image: '/images/06_auto_body_sanding.jpg',
      tag: 'Prep & Sanding',
    },
    {
      id: '07',
      category: 'collision',
      title: 'Heavy Frame Repair & Measurement',
      subtitle: 'Arlington shop heavy equipment returning chassis to safety specs',
      image: '/images/07_auto_body_frame_repair.jpg',
      tag: 'Frame Machine',
    },
    {
      id: '08',
      category: 'collision',
      title: 'Structural Steel & MIG Welding',
      subtitle: 'High-strength quarter panel and reinforcement welding',
      image: '/images/08_auto_body_welding.jpg',
      tag: 'MIG Welding',
    },

    // 9-12: Paint Spray & Matching
    {
      id: '09',
      category: 'paint',
      title: 'Downdraft Booth Basecoat Spray',
      subtitle: 'Applying premium red automotive basecoat in dust-free booth',
      image: '/images/09_auto_paint_spray_red.jpg',
      tag: 'Paint Booth',
    },
    {
      id: '10',
      category: 'finish',
      title: 'Finished Deep Crimson Gloss',
      subtitle: 'High-solids clear coat baked and cured to showroom mirror shine',
      image: '/images/10_auto_paint_finished_red.jpg',
      tag: 'Deep Gloss Clear',
    },
    {
      id: '11',
      category: 'paint',
      title: 'Spectrophotometer Color Match',
      subtitle: 'Computerized shade matching ensuring invisible panel blend',
      image: '/images/11_auto_paint_color_matching.jpg',
      tag: 'Exact Color Match',
    },
    {
      id: '12',
      category: 'paint',
      title: 'Metallic Blue Clear Spraying',
      subtitle: 'Precision HVLP gun atomization for uniform metallic flake lay',
      image: '/images/12_auto_paint_spray_blue.jpg',
      tag: 'HVLP Spraying',
    },

    // 13-16: Finish & Polishing
    {
      id: '13',
      category: 'finish',
      title: 'Glossy Metallic Blue Finish',
      subtitle: 'Flawless reflections under high-intensity shop inspection lights',
      image: '/images/13_auto_paint_glossy_blue.jpg',
      tag: 'Showroom Finish',
    },
    {
      id: '14',
      category: 'finish',
      title: 'Multi-Stage Paint Correction Buffer',
      subtitle: 'Removing micro-swirls, oxidation, and scratches for deep depth',
      image: '/images/14_auto_body_polishing.jpg',
      tag: 'Rotary Polish',
    },
    {
      id: '15',
      category: 'finish',
      title: 'Flawless Curved Panel Reflection',
      subtitle: 'Mirror clarity on contoured bodylines after final detailing',
      image: '/images/15_auto_paint_glossy_red.jpg',
      tag: 'Mirror Reflection',
    },
    {
      id: '16',
      category: 'paint',
      title: 'Clean White Panel Spray',
      subtitle: 'Clean factory-grade white respray with zero orange peel',
      image: '/images/16_auto_paint_spray_white.jpg',
      tag: 'Factory Respray',
    },

    // 17-20: Bumper Specialists
    {
      id: '17',
      category: 'bumper',
      title: 'Bumper Assembly & Clip Alignment',
      subtitle: 'Aligning bumper brackets, parking sensors, and fog light bezels',
      image: '/images/17_bumper_replacement.jpg',
      tag: 'Bumper Alignment',
    },
    {
      id: '18',
      category: 'bumper',
      title: 'Plastic Bumper Scuff Preparation',
      subtitle: 'Repairing bumper scrapes, scratches, and gouges without replacing',
      image: '/images/18_bumper_preparation.jpg',
      tag: 'Plastic Prep',
    },
    {
      id: '19',
      category: 'bumper',
      title: 'Bumper Crack Welding & Repair',
      subtitle: 'Thermal plastic welding restoring cracked bumpers in driveway or shop',
      image: '/images/19_bumper_repair.jpg',
      tag: 'Plastic Welding',
    },
    {
      id: '20',
      category: 'bumper',
      title: 'Finished Repaired Front Bumper',
      subtitle: 'Seamless fit, perfect paint blend, ready to hit the DFW roads',
      image: '/images/20_bumper_finished_blue.jpg',
      tag: 'Completed Bumper',
    },
  ];

  const filteredPhotos = activeCategory === 'all'
    ? photos
    : photos.filter((p) => p.category === activeCategory);

  return (
    <section id="gallery" className="py-18 sm:py-24 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 relative border-b border-steel-800/80">
      
      {/* Decorative ambient lights */}
      <div className="absolute left-1/3 top-10 w-96 h-96 bg-crimson-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-10 bottom-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-crimson-400 bg-crimson-950/80 px-4 py-1.5 rounded-full border border-crimson-600/30">
            PROVEN CRAFTSMANSHIP
          </span>
          <h2 className="mt-4 font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            Our Work in Action — <br />
            <span className="text-crimson-gradient">20 Real Texas Auto Body Restorations</span>
          </h2>
          <p className="mt-3 text-steel-300 text-base sm:text-lg">
            From mobile bumper welding in your driveway to full frame realignment and showroom paint correction in our Arlington shop.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All 20 Photos' },
              { id: 'bumper', label: 'Bumper Repairs (4)' },
              { id: 'dent', label: 'Dent & PDR (4)' },
              { id: 'collision', label: 'Collision & Frame (4)' },
              { id: 'paint', label: 'Paint Matching & Spray (4)' },
              { id: 'finish', label: 'Mirror Finish & Polish (4)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeCategory === tab.id
                    ? 'bg-crimson-600 text-white shadow-crimson-glow'
                    : 'bg-navy-900 text-steel-300 hover:text-white hover:bg-navy-850 border border-steel-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 20 Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredPhotos.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group cursor-pointer card-metallic rounded-2xl overflow-hidden border-steel-800 hover:border-crimson-500/70 transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex flex-col justify-between"
            >
              <div className="relative aspect-square overflow-hidden bg-navy-950">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-crimson-600/90 px-3 py-1 rounded-lg backdrop-blur-sm">
                    <Eye className="w-3.5 h-3.5" />
                    Click to Enlarge
                  </span>
                </div>

                <div className="absolute top-3 left-3 bg-navy-950/85 backdrop-blur-sm text-crimson-400 text-[10px] font-black uppercase px-2.5 py-0.5 rounded border border-crimson-600/40">
                  {item.tag}
                </div>
              </div>

              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-crimson-400 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-steel-400 mt-1 line-clamp-2 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-steel-800/80 flex items-center justify-between text-[11px] font-semibold text-steel-400 group-hover:text-white">
                  <span>Photo #{item.id}</span>
                  <span className="text-crimson-400 flex items-center gap-1">
                    View <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-steel-700/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-black uppercase text-crimson-400 tracking-wider">
              SEE SOMETHING SIMILAR ON YOUR VEHICLE?
            </span>
            <h3 className="font-heading font-black text-xl sm:text-2xl text-white uppercase">
              Get an Honest, No-Obligation Repair Estimate Today
            </h3>
            <p className="text-xs sm:text-sm text-steel-300">
              Mobile dispatch to your driveway/workplace or full repairs in our Arlington shop facility.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => onOpenEstimate()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-crimson-600 hover:bg-crimson-500 text-white font-extrabold text-xs uppercase px-6 py-3.5 rounded-xl shadow-crimson-glow tracking-wider transition transform hover:scale-105"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Free Estimate</span>
            </button>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-navy-950 rounded-3xl border border-steel-700 p-4 sm:p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-navy-900 border border-steel-700 text-steel-300 hover:text-white hover:bg-crimson-600 transition"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden bg-black border border-steel-800">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <div className="inline-block bg-crimson-950 border border-crimson-600/50 text-crimson-400 text-[10px] font-black uppercase px-2.5 py-0.5 rounded mb-1.5">
                {selectedPhoto.tag}
              </div>
              <h3 className="font-heading font-black text-xl text-white">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-steel-300 mt-1">
                {selectedPhoto.subtitle}
              </p>
            </div>

            <div className="pt-3 border-t border-steel-800 flex items-center justify-between">
              <span className="text-xs text-steel-400">
                Texas Auto Body • Arlington, TX
              </span>
              <button
                onClick={() => {
                  setSelectedPhoto(null);
                  onOpenEstimate(selectedPhoto.tag);
                }}
                className="bg-crimson-600 hover:bg-crimson-500 text-white text-xs font-bold uppercase px-4 py-2.5 rounded-xl transition"
              >
                Inquire About This Service
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
