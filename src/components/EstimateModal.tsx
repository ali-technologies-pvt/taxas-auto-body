import React, { useState, useEffect } from 'react';
import { X, Sparkles, Phone, CheckCircle2 } from 'lucide-react';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceSelected?: string;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({
  isOpen,
  onClose,
  serviceSelected,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [service, setService] = useState(serviceSelected || 'Bumper Repair');
  const [preference, setPreference] = useState('Mobile Service (Driveway/Workplace)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (serviceSelected) {
      setService(serviceSelected);
    }
  }, [serviceSelected]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl rounded-3xl bg-navy-950 border border-steel-700/80 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-navy-900 border border-steel-700 text-steel-300 hover:text-white hover:bg-crimson-600 transition"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-crimson-600/20 border border-crimson-500 flex items-center justify-center text-crimson-400 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-black text-2xl text-white uppercase">
              Request Received!
            </h3>
            <p className="text-sm text-steel-300">
              Thank you, <strong className="text-white">{fullName}</strong>. A technician will call you shortly at <strong className="text-white">{phone}</strong>.
            </p>
            <div className="pt-2">
              <a
                href="tel:+18178209773"
                className="inline-flex items-center gap-2 bg-crimson-600 hover:bg-crimson-500 text-white font-bold px-6 py-3 rounded-xl uppercase text-xs tracking-wider"
              >
                <Phone className="w-4 h-4" />
                Call Directly: +1 817-820-9773
              </a>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-black uppercase tracking-widest text-crimson-400 bg-crimson-950/80 px-2.5 py-1 rounded border border-crimson-600/30">
                100% Free Estimate
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase mt-2">
                Quick Repair Estimate
              </h3>
              <p className="text-xs sm:text-sm text-steel-400 mt-1">
                Tell us about your vehicle and we'll provide straightforward options.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-steel-300 mb-1">
                  Service
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-navy-900 text-white rounded-xl border border-steel-700 px-3.5 py-2.5 text-sm focus:border-crimson-500 focus:outline-none"
                >
                  <option value="Bumper Repair">Bumper Repair (Mobile & Shop)</option>
                  <option value="Dent Repair">Dent Repair & Evaluation</option>
                  <option value="Paintless Dent Repair (PDR)">Paintless Dent Repair (PDR)</option>
                  <option value="Collision Repair">Insurance Collision Repair</option>
                  <option value="Paint Matching">Paint Matching & Blending</option>
                  <option value="Paint Correction">Paint Correction</option>
                  <option value="Deductible Assistance">Deductible Coupon Assistance</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-steel-300 mb-1">
                  Where would you like the service?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPreference('Mobile Service (Driveway/Workplace)')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold border transition ${
                      preference.includes('Mobile')
                        ? 'bg-crimson-600 text-white border-crimson-500'
                        : 'bg-navy-900 text-steel-300 border-steel-700'
                    }`}
                  >
                    Mobile (Driveway/Work)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreference('Shop Service (Arlington)')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold border transition ${
                      preference.includes('Shop')
                        ? 'bg-crimson-600 text-white border-crimson-500'
                        : 'bg-navy-900 text-steel-300 border-steel-700'
                    }`}
                  >
                    Shop (Arlington)
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-steel-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Smith"
                    className="w-full bg-navy-900 text-white rounded-xl border border-steel-700 px-3 py-2.5 text-sm focus:border-crimson-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-steel-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(817) 000-0000"
                    className="w-full bg-navy-900 text-white rounded-xl border border-steel-700 px-3 py-2.5 text-sm focus:border-crimson-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-steel-300 mb-1">
                  Vehicle Make & Model
                </label>
                <input
                  type="text"
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  placeholder="e.g. 2020 Honda Accord"
                  className="w-full bg-navy-900 text-white rounded-xl border border-steel-700 px-3 py-2.5 text-sm focus:border-crimson-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-steel-300 mb-1">
                  Damage Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Briefly describe the damage..."
                  className="w-full bg-navy-900 text-white rounded-xl border border-steel-700 px-3 py-2 text-sm focus:border-crimson-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-crimson-600 hover:bg-crimson-500 text-white font-black text-sm uppercase py-3.5 rounded-xl shadow-crimson-glow tracking-wider transition"
              >
                <Sparkles className="w-4 h-4" />
                Submit Estimate Request
              </button>

              <div className="text-center pt-1">
                <a
                  href="tel:+18178209773"
                  className="text-xs text-steel-400 hover:text-white transition inline-flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5 text-crimson-400" />
                  Or call directly: +1 817-820-9773
                </a>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
