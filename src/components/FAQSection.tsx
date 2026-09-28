import React, { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does your mobile auto body repair service work?',
      a: 'For qualifying repairs (such as bumper scuffs, dents, scratches, and PDR), our mobile repair technicians come directly to your driveway, office parking lot, or any safe location within our 50-mile DFW radius. We bring all professional tools, prep materials, and computerized paint equipment so you never have to sit in a waiting room.',
    },
    {
      q: 'Is my damaged bumper really repairable instead of buying a new one?',
      a: 'In many cases, YES! Dealerships frequently force customers to replace plastic bumper covers because it is faster and more profitable for them. At Texas Auto Body, we specialize in plastic welding, dent reshuffling, scuff removal, and precision repainting. We repair whenever possible to save you hundreds of dollars while preserving your OEM fit.',
    },
    {
      q: 'How do the deductible coupons work?',
      a: 'We offer promotional coupons and savings credits that can be applied toward your out-of-pocket insurance deductible on qualifying collision and body repairs. Simply mention our promo code or select the deductible option on our estimate form, and we will calculate your maximum allowable savings.',
    },
    {
      q: 'Can you really complete minor work in 24 hours?',
      a: 'Yes! For minor dents, bumper scuffs, and paint touch-ups, our streamlined process allows us to complete repairs within a 24-hour window so you get back on the road without unnecessary delay.',
    },
    {
      q: 'What are your operating hours and what does 24/7 availability mean?',
      a: 'Our main shop and dispatch center operates 7 days a week, Monday through Sunday from 7:00 AM to 5:00 PM. In addition, our on-call phone line (+1 817-820-9773) is active 24/7 so you can reach us after hours, on weekends, or following late-night roadside incidents.',
    },
    {
      q: 'What is Paintless Dent Repair (PDR)?',
      a: 'Paintless Dent Repair (PDR) is a specialized technique that massages dents out from the underside of the panel using custom precision metal rods. Because the original factory clear coat is undisturbed, your car maintains its factory finish, warranty, and maximum resale value.',
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 relative border-b border-steel-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-crimson-400 bg-crimson-950/80 px-4 py-1.5 rounded-full border border-crimson-600/30">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="mt-4 font-heading font-black text-3xl sm:text-4xl text-white tracking-tight uppercase">
            Got Questions? <span className="text-crimson-gradient">We've Got Answers.</span>
          </h2>
          <p className="mt-3 text-steel-300 text-sm sm:text-base">
            Everything you need to know about our mobile service, bumper restoration, and insurance assistance.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="card-metallic rounded-2xl border-steel-700/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-white pr-4">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-full bg-navy-900 border border-steel-700 text-crimson-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-crimson-600 text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-steel-300 text-sm sm:text-base leading-relaxed border-t border-steel-800/60 pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have other questions callout */}
        <div className="mt-10 p-6 rounded-2xl bg-navy-900 border border-steel-700/80 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-heading font-bold text-white text-base">Have a question not listed here?</h4>
            <p className="text-xs text-steel-400 mt-0.5">Call our Arlington shop anytime — we are open 7 days a week.</p>
          </div>
          <a
            href="tel:+18178209773"
            className="inline-flex items-center gap-2 bg-crimson-600 hover:bg-crimson-500 text-white text-xs font-black uppercase px-5 py-3 rounded-xl shadow transition"
          >
            <Phone className="w-4 h-4" />
            +1 817-820-9773
          </a>
        </div>

      </div>
    </section>
  );
};
