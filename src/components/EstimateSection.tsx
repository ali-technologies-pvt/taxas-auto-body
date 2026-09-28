import React, { useState } from 'react';
import { Sparkles, Phone, Camera, CheckCircle2, MapPin, Clock } from 'lucide-react';

interface EstimateSectionProps {
  initialService?: string;
}

export const EstimateSection: React.FC<EstimateSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    cityOrZip: '',
    vehicleYear: '',
    vehicleMakeModel: '',
    serviceType: initialService || 'Bumper Repair',
    serviceLocation: 'Mobile Service (Come to My Driveway/Workplace)',
    damageDescription: '',
    hasPhotos: false,
    useDeductibleCoupon: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [estimateId, setEstimateId] = useState('');

  const servicesList = [
    'Bumper Repair (Mobile & Shop)',
    'Dent Repair (Evaluation)',
    'Paintless Dent Repair (PDR)',
    'Insurance Collision Repair',
    'Paint Matching',
    'Paint Correction',
    'Deductible Assistance / Coupon',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    
    const randomId = 'TAB-' + Math.floor(100000 + Math.random() * 900000);
    setEstimateId(randomId);
    setSubmitted(true);
  };

  return (
    <section id="estimate-form" className="py-16 sm:py-24 bg-navy-950 relative border-b border-steel-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-crimson-400 bg-crimson-950/80 px-4 py-1.5 rounded-full border border-crimson-600/30">
            READY WHEN YOU ARE
          </span>
          <h2 className="mt-4 font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            Let's Get Your Vehicle <br />
            <span className="text-crimson-gradient">Looking Right Again.</span>
          </h2>
          <p className="mt-3 text-steel-300 text-base sm:text-lg">
            Whether it's a small dent, damaged bumper, collision repair, paint issue, or PDR job, Texas Auto Body is ready to help.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-xs sm:text-sm font-semibold text-steel-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-crimson-500" />
              Free Estimates
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-crimson-500" />
              Mobile & Shop-Based Service
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-crimson-500" />
              25+ Years of Experience
            </span>
          </div>
        </div>

        {/* Main Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Card */}
          <div className="lg:col-span-8 card-metallic rounded-3xl p-6 sm:p-10 border-steel-700/80">
            
            {submitted ? (
              <div className="py-10 text-center space-y-5 animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 rounded-full bg-crimson-600/20 border-2 border-crimson-500 flex items-center justify-center text-crimson-400 mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs uppercase font-black tracking-widest text-crimson-400">
                    Estimate Request Received!
                  </span>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-sm text-steel-300 max-w-md mx-auto">
                    Your request ID is <strong className="text-white font-mono">{estimateId}</strong>. Our Arlington tech team is reviewing your vehicle details and will contact you promptly.
                  </p>
                </div>

                {formData.useDeductibleCoupon && (
                  <div className="p-4 rounded-xl bg-navy-900 border border-crimson-600/60 max-w-md mx-auto text-xs text-crimson-300">
                    🎉 Promotional Deductible Coupon Attached to Request ID <strong>{estimateId}</strong>.
                  </div>
                )}

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="tel:+18178209773"
                    className="inline-flex items-center gap-2 bg-crimson-600 hover:bg-crimson-500 text-white font-extrabold px-6 py-3.5 rounded-xl uppercase text-xs tracking-wider shadow-lg"
                  >
                    <Phone className="w-4 h-4" />
                    Call For Faster Dispatch: (817) 820-9773
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 bg-steel-800 hover:bg-steel-700 text-steel-200 px-5 py-3 rounded-xl text-xs font-bold transition"
                  >
                    Submit Another Vehicle
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Step 1: Service & Repair Location Selection */}
                <div>
                  <label htmlFor="serviceType" className="block text-xs font-bold uppercase tracking-wider text-steel-300 mb-2">
                    1. Select Service Needed *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-navy-900 text-white rounded-xl border border-steel-700 px-4 py-3.5 text-sm focus:border-crimson-500 focus:outline-none"
                    required
                  >
                    {servicesList.map((srv) => (
                      <option key={srv} value={srv}>
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Repair Preference: Mobile vs Shop */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-steel-300 mb-2">
                    2. Service Preference *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label
                      className={`p-3.5 rounded-xl border cursor-pointer flex items-center gap-3 transition ${
                        formData.serviceLocation.includes('Mobile')
                          ? 'bg-navy-850 border-crimson-500 ring-1 ring-crimson-500/50'
                          : 'bg-navy-900 border-steel-700 hover:border-steel-600'
                      }`}
                    >
                      <input
                        type="radio"
                        name="serviceLocation"
                        value="Mobile Service (Come to My Driveway/Workplace)"
                        checked={formData.serviceLocation.includes('Mobile')}
                        onChange={(e) => setFormData({ ...formData, serviceLocation: e.target.value })}
                        className="text-crimson-600 focus:ring-crimson-500"
                      />
                      <div>
                        <div className="text-xs font-bold text-white uppercase">Mobile Service</div>
                        <div className="text-[11px] text-steel-400">We come to your driveway/workplace</div>
                      </div>
                    </label>

                    <label
                      className={`p-3.5 rounded-xl border cursor-pointer flex items-center gap-3 transition ${
                        formData.serviceLocation.includes('Shop')
                          ? 'bg-navy-850 border-crimson-500 ring-1 ring-crimson-500/50'
                          : 'bg-navy-900 border-steel-700 hover:border-steel-600'
                      }`}
                    >
                      <input
                        type="radio"
                        name="serviceLocation"
                        value="Shop-Based Service (Drop off at Arlington Shop)"
                        checked={formData.serviceLocation.includes('Shop')}
                        onChange={(e) => setFormData({ ...formData, serviceLocation: e.target.value })}
                        className="text-crimson-600 focus:ring-crimson-500"
                      />
                      <div>
                        <div className="text-xs font-bold text-white uppercase">Shop Service</div>
                        <div className="text-[11px] text-steel-400">Drop off at our Arlington shop</div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Vehicle Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="vehicleYear" className="block text-xs font-bold uppercase tracking-wider text-steel-300 mb-1.5">
                      Vehicle Year
                    </label>
                    <input
                      type="text"
                      id="vehicleYear"
                      name="vehicleYear"
                      placeholder="e.g. 2021"
                      value={formData.vehicleYear}
                      onChange={(e) => setFormData({ ...formData, vehicleYear: e.target.value })}
                      className="w-full bg-navy-900 text-white placeholder-steel-500 rounded-xl border border-steel-700 px-4 py-3 text-sm focus:border-crimson-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="vehicleMakeModel" className="block text-xs font-bold uppercase tracking-wider text-steel-300 mb-1.5">
                      Vehicle Make & Model *
                    </label>
                    <input
                      type="text"
                      id="vehicleMakeModel"
                      name="vehicleMakeModel"
                      placeholder="e.g. Ford F-150 / Toyota Camry"
                      value={formData.vehicleMakeModel}
                      onChange={(e) => setFormData({ ...formData, vehicleMakeModel: e.target.value })}
                      className="w-full bg-navy-900 text-white placeholder-steel-500 rounded-xl border border-steel-700 px-4 py-3 text-sm focus:border-crimson-500 focus:outline-none"
                      required
                    />
                  </div>
                </div>

                {/* Damage Description */}
                <div>
                  <label htmlFor="damageDescription" className="block text-xs font-bold uppercase tracking-wider text-steel-300 mb-1.5">
                    Describe Damage
                  </label>
                  <textarea
                    id="damageDescription"
                    name="damageDescription"
                    rows={3}
                    placeholder="Tell us what happened (e.g. cracked rear bumper, dent on passenger door, collision claim...)"
                    value={formData.damageDescription}
                    onChange={(e) => setFormData({ ...formData, damageDescription: e.target.value })}
                    className="w-full bg-navy-900 text-white placeholder-steel-500 rounded-xl border border-steel-700 p-3.5 text-sm focus:border-crimson-500 focus:outline-none"
                  />
                </div>

                {/* Photo Upload Simulation Box */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-steel-300 mb-1.5">
                    Attach Damage Photos (Optional - Speeds Up Estimate)
                  </label>
                  <div
                    onClick={() => setFormData({ ...formData, hasPhotos: !formData.hasPhotos })}
                    className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition ${
                      formData.hasPhotos
                        ? 'border-green-500 bg-green-950/20 text-green-300'
                        : 'border-steel-700 hover:border-crimson-500 bg-navy-900/60 text-steel-400'
                    }`}
                  >
                    <Camera className="w-6 h-6 mx-auto mb-1.5 text-crimson-400" />
                    {formData.hasPhotos ? (
                      <p className="text-xs font-bold text-green-400">
                        ✓ 2 photos attached for review (Click to remove)
                      </p>
                    ) : (
                      <p className="text-xs">
                        Click to simulate uploading damage photos from your phone or camera
                      </p>
                    )}
                  </div>
                </div>

                {/* Customer Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-steel-800">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-steel-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      autoComplete="name"
                      placeholder="John Smith"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-navy-900 text-white placeholder-steel-500 rounded-xl border border-steel-700 px-4 py-3 text-sm focus:border-crimson-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-steel-300 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      placeholder="(817) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-navy-900 text-white placeholder-steel-500 rounded-xl border border-steel-700 px-4 py-3 text-sm focus:border-crimson-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="cityOrZip" className="block text-xs font-bold uppercase tracking-wider text-steel-300 mb-1.5">
                      City or ZIP (DFW Area) *
                    </label>
                    <input
                      type="text"
                      id="cityOrZip"
                      name="cityOrZip"
                      autoComplete="postal-code"
                      placeholder="e.g. Arlington, 76010"
                      value={formData.cityOrZip}
                      onChange={(e) => setFormData({ ...formData, cityOrZip: e.target.value })}
                      className="w-full bg-navy-900 text-white placeholder-steel-500 rounded-xl border border-steel-700 px-4 py-3 text-sm focus:border-crimson-500 focus:outline-none"
                      required
                    />
                  </div>
                </div>

                {/* Deductible Coupon Checkbox */}
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-navy-900 border border-steel-800">
                  <input
                    type="checkbox"
                    id="deductibleCheckbox"
                    checked={formData.useDeductibleCoupon}
                    onChange={(e) => setFormData({ ...formData, useDeductibleCoupon: e.target.checked })}
                    className="w-4 h-4 rounded text-crimson-600 focus:ring-crimson-500"
                  />
                  <label htmlFor="deductibleCheckbox" className="text-xs text-steel-200 cursor-pointer">
                    Apply available <strong className="text-crimson-400">Deductible Coupon / Promotional Discount</strong> to this estimate inquiry.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-crimson-600 via-crimson-500 to-crimson-700 hover:from-crimson-500 hover:to-crimson-600 text-white font-black text-base uppercase py-4 rounded-xl shadow-crimson-glow tracking-wider transition transform hover:scale-[1.01]"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>SUBMIT FOR FREE ESTIMATE</span>
                </button>

                <p className="text-center text-[11px] text-steel-400">
                  🔒 100% Free Consultation. No obligation. Your information is confidential.
                </p>

              </form>
            )}

          </div>

          {/* Right Column: Direct Contact & Schedule Info */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Phone Card */}
            <div className="card-metallic rounded-2xl p-6 sm:p-7 border-crimson-600/50 text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-crimson-600/20 border border-crimson-500/40 flex items-center justify-center text-crimson-400 mx-auto">
                <Phone className="w-7 h-7" />
              </div>
              <h4 className="font-heading font-black text-xl text-white uppercase">
                Prefer to Call Now?
              </h4>
              <p className="text-xs text-steel-300">
                Speak directly with an experienced technician for an immediate verbal assessment.
              </p>
              <a
                href="tel:+18178209773"
                className="w-full inline-flex items-center justify-center gap-2 bg-crimson-600 hover:bg-crimson-500 text-white font-extrabold text-sm uppercase py-3.5 rounded-xl shadow-crimson-glow transition"
              >
                +1 817-820-9773
              </a>
            </div>

            {/* Operating Hours Card */}
            <div className="card-metallic rounded-2xl p-6 border-steel-700/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase text-crimson-400">
                <Clock className="w-4 h-4" />
                WEEKLY SCHEDULE
              </div>
              
              <div className="border-b border-steel-800 pb-3">
                <div className="text-sm font-bold text-white flex justify-between">
                  <span>Monday to Sunday:</span>
                  <span className="text-crimson-400">7:00 AM – 5:00 PM</span>
                </div>
                <div className="text-xs text-steel-400 mt-1">Open 7 Days a week for your convenience</div>
              </div>

              <div>
                <div className="text-sm font-bold text-white flex justify-between">
                  <span>24/7 Availability:</span>
                  <span className="text-green-400 font-semibold">On-Call</span>
                </div>
                <div className="text-xs text-steel-400 mt-1">Need help outside regular hours? Contact us anytime.</div>
              </div>
            </div>

            {/* Coverage Summary Card */}
            <div className="card-metallic rounded-2xl p-6 border-steel-700/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-black uppercase text-crimson-400">
                <MapPin className="w-4 h-4" />
                DFW SERVICE COVERAGE
              </div>
              <p className="text-xs text-steel-300 leading-relaxed">
                Serving Arlington, Pantego, Dalworthington Gardens, Mansfield, Grand Prairie, Kennedale, Fort Worth, Hurst, Euless, Bedford, Everman, Forest Hill, and the 50-mile surrounding area.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
