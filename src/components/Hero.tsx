import React from 'react';
import { ArrowRight, Clock, Star, Flame, ShieldCheck, Sparkles, ChevronRight, UtensilsCrossed } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onExploreMenu: () => void;
  onQuickOrder: () => void;
  onOpenPromo: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreMenu,
  onQuickOrder,
  onOpenPromo,
}) => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative overflow-hidden bg-stone-950 text-stone-100 py-12 sm:py-20 lg:py-24 border-b border-stone-850">
      {/* Background glow & subtle patterns */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-stone-900 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-400 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
              <span>{t.heroBadge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-serif tracking-tight text-stone-50 leading-[1.1]">
              {t.heroTitle1}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">
                {t.heroTitleHighlight}
              </span>{' '}
              {t.heroTitle2}
            </h1>

            {/* Subtitle */}
            <p className="text-stone-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t.heroSubtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 pt-2">
              <button
                id="hero-order-cta"
                onClick={onQuickOrder}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-stone-950 font-extrabold px-7 py-4 rounded-2xl text-sm sm:text-base shadow-xl shadow-amber-500/25 transition-all hover:scale-102 active:scale-98 cursor-pointer"
              >
                <span>{t.heroOrderBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-menu-cta"
                onClick={onExploreMenu}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-850 border border-stone-750 text-stone-100 font-bold px-7 py-4 rounded-2xl text-sm sm:text-base transition-all hover:border-stone-600 cursor-pointer"
              >
                <UtensilsCrossed className="w-4 h-4 text-amber-400" />
                <span>{t.heroMenuBtn}</span>
              </button>
            </div>

            {/* Trust Badges & Stats */}
            <div className="pt-6 border-t border-stone-850/80 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="p-3 rounded-2xl bg-stone-900/50 border border-stone-850">
                <div className="text-lg sm:text-xl font-black text-amber-400 font-serif">{t.heroStat1Value}</div>
                <div className="text-[11px] text-stone-400 font-medium">{t.heroStat1Label}</div>
              </div>
              <div className="p-3 rounded-2xl bg-stone-900/50 border border-stone-850">
                <div className="text-lg sm:text-xl font-black text-amber-400 font-serif">{t.heroStat2Value}</div>
                <div className="text-[11px] text-stone-400 font-medium">{t.heroStat2Label}</div>
              </div>
              <div className="p-3 rounded-2xl bg-stone-900/50 border border-stone-850">
                <div className="text-lg sm:text-xl font-black text-amber-400 font-serif">{t.heroStat3Value}</div>
                <div className="text-[11px] text-stone-400 font-medium">{t.heroStat3Label}</div>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Card & Promos */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Image Card */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-stone-800 bg-stone-900 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1000&q=80"
                  alt="MAEZO Premium Sushi & Ramen"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />

                {/* Floating promo banner overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-stone-900/90 backdrop-blur-md border border-stone-700/60 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                      {t.heroPromoBadge}
                    </span>
                    <h2 className="text-sm font-bold text-stone-100">
                      {t.heroPromoCardTitle}
                    </h2>
                    <p className="text-[11px] text-stone-400">
                      {t.heroPromoCardSub}
                    </p>
                  </div>
                  <button
                    onClick={onOpenPromo}
                    className="p-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-colors shrink-0 cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Floating floating badges around image */}
              <div className="absolute -top-4 -right-4 bg-stone-900 border border-emerald-500/40 text-emerald-400 px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-bold">{t.heroFeaturesHalal}</span>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-stone-900 border border-amber-500/40 text-amber-300 px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold">{t.heroFeaturesFresh}</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
