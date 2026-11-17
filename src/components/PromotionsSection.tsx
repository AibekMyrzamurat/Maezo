import React, { useState } from 'react';
import { Tag, Copy, Check, ArrowRight, Sparkles, Percent } from 'lucide-react';
import { PROMOTIONS } from '../data/menuData';
import { useLanguage } from '../context/LanguageContext';

interface PromotionsSectionProps {
  onApplyPromo: (code: string, discount: number) => void;
  onSelectCategoryFilter: (catId: string) => void;
}

export const PromotionsSection: React.FC<PromotionsSectionProps> = ({
  onApplyPromo,
  onSelectCategoryFilter,
}) => {
  const { t } = useLanguage();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string, discount: number) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(code);
    onApplyPromo(code, discount);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section id="promotions" className="py-14 sm:py-20 bg-stone-950 text-stone-100 border-b border-stone-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-bold text-amber-400">
              <Percent className="w-3.5 h-3.5" />
              <span>{t.promosBadge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-serif text-stone-50">
              {t.promosTitle}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-400 max-w-md">
            {t.promosSubtitle}
          </p>
        </div>

        {/* Promo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROMOTIONS.map((promo) => (
            <div
              key={promo.id}
              className="relative group flex flex-col justify-between bg-stone-900/90 rounded-3xl border border-stone-800 p-5 overflow-hidden hover:border-amber-500/40 hover:shadow-xl transition-all"
            >
              {/* Top info */}
              <div className="space-y-3 relative z-10">
                <span className="inline-block bg-amber-500 text-stone-950 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                  {promo.badge}
                </span>
                
                <h3 className="text-lg font-bold text-stone-100 font-serif leading-snug">
                  {promo.title}
                </h3>
                
                <p className="text-xs text-stone-400 leading-relaxed">
                  {promo.description}
                </p>
              </div>

              {/* Promo Code & Apply action */}
              <div className="pt-6 mt-4 border-t border-stone-800/80 space-y-2 relative z-10">
                <div className="flex items-center justify-between bg-stone-950 p-2 rounded-2xl border border-stone-800">
                  <div className="flex items-center gap-1.5 pl-2">
                    <Tag className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-xs font-black text-amber-400 font-mono tracking-wider">
                      {promo.code}
                    </span>
                  </div>

                  <button
                    onClick={() => handleCopy(promo.code, 15)}
                    className="flex items-center gap-1 bg-stone-850 hover:bg-amber-500 hover:text-stone-950 text-stone-300 text-[11px] font-bold px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
                  >
                    {copiedCode === promo.code ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>{t.promoApplied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>{t.promoCopy}</span>
                      </>
                    )}
                  </button>
                </div>

                {promo.categoryTrigger && (
                  <button
                    onClick={() => onSelectCategoryFilter(promo.categoryTrigger!)}
                    className="w-full text-center text-[11px] text-stone-400 hover:text-amber-300 transition-colors py-1 cursor-pointer"
                  >
                    {t.promosViewCategory} →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
