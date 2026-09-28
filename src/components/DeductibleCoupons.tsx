import React, { useState } from 'react';
import { Tag, Sparkles, CheckCircle2, Copy, Check, Phone } from 'lucide-react';

interface DeductibleCouponsProps {
  onOpenEstimate: (service?: string) => void;
}

export const DeductibleCoupons: React.FC<DeductibleCouponsProps> = ({ onOpenEstimate }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [claimed, setClaimed] = useState(false);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setClaimed(true);
    setTimeout(() => setCopiedCode(null), 3000);
  };

  return (
    <section id="coupons" className="py-16 sm:py-24 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 relative border-b border-steel-800/80">
      
      {/* Red accent glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-crimson-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-crimson-400 bg-crimson-950/80 px-4 py-1.5 rounded-full border border-crimson-600/30">
            SAVE MONEY ON YOUR REPAIR
          </span>
          <h2 className="mt-4 font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            Quality Repair Doesn't Have <br />
            <span className="text-crimson-gradient">to Break the Bank</span>
          </h2>
          <p className="mt-3 text-steel-300 text-base sm:text-lg">
            Ask about our available coupons and promotional savings for qualifying repairs — including deductible assistance!
          </p>
        </div>

        {/* Coupon Voucher & Information Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Digital Coupon Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl p-1 bg-gradient-to-r from-crimson-600 via-steel-400 to-crimson-600 shadow-2xl">
              <div className="rounded-[22px] bg-navy-950 p-6 sm:p-8 relative overflow-hidden border border-steel-800">
                
                {/* Coupon Scalloped Edge / Perforation Indicator */}
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-navy-950 border-r border-steel-700 hidden sm:block" />
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-navy-950 border-l border-steel-700 hidden sm:block" />

                {/* Header inside coupon */}
                <div className="flex items-center justify-between border-b border-dashed border-steel-700 pb-5 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-crimson-600 flex items-center justify-center text-white font-bold shadow-md">
                      <Tag className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-heading font-black text-sm text-white tracking-wider uppercase">
                        TEXAS AUTO BODY
                      </div>
                      <div className="text-[11px] text-steel-400 uppercase font-semibold">
                        Official Customer Savings Voucher
                      </div>
                    </div>
                  </div>

                  <span className="text-[11px] font-black uppercase text-crimson-400 bg-crimson-950/80 px-2.5 py-1 rounded-md border border-crimson-700/60">
                    Active Offer
                  </span>
                </div>

                {/* Main Offer Content */}
                <div className="space-y-3 mb-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-crimson-400">
                    DEDUCTIBLE ASSISTANCE PROGRAM
                  </div>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase leading-tight">
                    Save On Your <br className="hidden sm:inline" />
                    <span className="text-crimson-gradient">Insurance Deductible</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-steel-300 leading-relaxed">
                    Have an insurance claim? Don't let a high deductible keep your car damaged. Present this voucher when booking to apply promotional savings towards your qualifying deductible.
                  </p>
                </div>

                {/* Coupon Code Box */}
                <div className="bg-navy-900 border-2 border-dashed border-crimson-600/60 rounded-xl p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 mb-5">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-steel-400 block">Promo Code</span>
                    <span className="font-mono font-black text-lg text-white tracking-widest">
                      TEXAS-DEDUCTIBLE-SAVINGS
                    </span>
                  </div>

                  <button
                    onClick={() => handleCopyCode('TEXAS-DEDUCTIBLE-SAVINGS')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-steel-800 hover:bg-steel-700 text-white text-xs font-bold px-3.5 py-2 rounded-lg transition"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span>Code Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-steel-300" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>

                {claimed && (
                  <div className="mb-4 p-2.5 rounded-lg bg-green-950/80 border border-green-600/40 text-green-300 text-xs font-medium text-center">
                    ✓ Code copied to clipboard! Mention this code when we give your estimate.
                  </div>
                )}

                {/* Claim Button */}
                <button
                  onClick={() => onOpenEstimate('Insurance Claim / Deductible Coupon')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-crimson-600 via-crimson-500 to-crimson-700 hover:from-crimson-500 hover:to-crimson-600 text-white font-black text-sm uppercase py-3.5 rounded-xl shadow-crimson-glow tracking-wider transition"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>CLAIM COUPON & REQUEST ESTIMATE</span>
                </button>

                <div className="mt-4 text-center">
                  <span className="text-[11px] text-steel-400 italic">
                    *Offers and eligibility may vary. Valid on qualifying collision and body repairs.
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Insurance Explanation */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-wider text-crimson-400">
                STRESS-FREE CLAIMS
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase leading-tight">
                Your Insurance Claim <br />
                <span className="text-steel-200">Doesn't Have to Be Complicated.</span>
              </h3>
              <p className="text-steel-300 text-base leading-relaxed">
                After an accident, you have enough on your plate. Dealing with insurance adjusters, repair estimates, and out-of-pocket deductibles shouldn't be another headache.
              </p>
            </div>

            <div className="space-y-3.5">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-navy-900 border border-steel-800">
                <CheckCircle2 className="w-5 h-5 text-crimson-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Full Claim Guidance</h4>
                  <p className="text-xs text-steel-400 mt-0.5">
                    We work directly with major insurance companies to expedite approvals and handle estimates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-navy-900 border border-steel-800">
                <CheckCircle2 className="w-5 h-5 text-crimson-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Reduce Out-Of-Pocket Costs</h4>
                  <p className="text-xs text-steel-400 mt-0.5">
                    Ask us about our promotional deductible discounts designed to help lower your net expenses.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-navy-900 border border-steel-800">
                <CheckCircle2 className="w-5 h-5 text-crimson-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Mobile or Shop Appraisal</h4>
                  <p className="text-xs text-steel-400 mt-0.5">
                    We can inspect the damage at your home, workplace, or at our Arlington shop facility.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Call Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-navy-900 to-navy-850 border border-steel-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs text-steel-400 uppercase font-semibold">One Call Gets You Started</div>
                <div className="font-heading font-black text-xl text-white">+1 817-820-9773</div>
              </div>
              <a
                href="tel:+18178209773"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-crimson-600 hover:bg-crimson-500 text-white font-bold text-xs uppercase px-5 py-3 rounded-xl transition shadow"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
