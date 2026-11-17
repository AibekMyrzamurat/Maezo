import React from 'react';
import { Truck, Clock, ShieldCheck, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import { CAFE_INFO } from '../data/menuData';
import { useLanguage } from '../context/LanguageContext';

export const DeliverySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="delivery" className="py-14 sm:py-20 bg-stone-900/50 text-stone-100 border-b border-stone-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full text-xs font-bold text-amber-400">
            <Truck className="w-3.5 h-3.5" />
            <span>{t.deliveryBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-serif text-stone-50">
            {t.deliveryTitle}
          </h2>
          <p className="text-xs sm:text-sm text-stone-400">
            {t.deliverySubtitle}
          </p>
        </div>

        {/* 3 Main Delivery Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-stone-900 border border-stone-800 space-y-3 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-serif text-stone-100">{t.deliveryFeat1Title}</h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              {t.deliveryFeat1Desc}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-stone-900 border border-stone-800 space-y-3 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-serif text-stone-100">{t.deliveryFeat2Title}</h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              {t.deliveryFeat2Desc}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-stone-900 border border-stone-800 space-y-3 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-serif text-stone-100">{t.deliveryFeat3Title}</h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              {t.deliveryFeat3Desc}
            </p>
          </div>
        </div>

        {/* Delivery Zones Info Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-stone-900 to-stone-950 border border-stone-800 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-serif text-stone-100">{t.deliveryZonesTitle}</h3>
            
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-100">{t.deliveryZone1Title}:</span> {t.deliveryZone1Desc}
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-100">{t.deliveryZone2Title}:</span> {t.deliveryZone2Desc}
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-100">{t.deliveryPickupTitle}:</span> {t.deliveryPickupDesc}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-stone-950 p-5 rounded-2xl border border-stone-850 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>{t.deliveryDispatchPoint}</span>
            </div>
            <p className="text-sm font-semibold text-stone-100">
              {CAFE_INFO.address}
            </p>
            <p className="text-xs text-stone-400">
              {t.deliveryScheduleNote}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
