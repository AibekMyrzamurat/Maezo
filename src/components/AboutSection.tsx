import React from 'react';
import { Heart, Sparkles, Award, Star, Quote } from 'lucide-react';
import { REVIEWS } from '../data/menuData';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-14 sm:py-20 bg-stone-950 text-stone-100 border-b border-stone-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full text-xs font-bold text-amber-400">
              <Heart className="w-3.5 h-3.5" />
              <span>{t.aboutBadge}</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black font-serif text-stone-50 leading-tight">
              {t.aboutTitle1}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                {t.aboutTitleHighlight}
              </span>{' '}
              {t.aboutTitle2}
            </h2>

            <p className="text-sm text-stone-300 leading-relaxed">
              {t.aboutParagraph1}
            </p>

            <p className="text-sm text-stone-300 leading-relaxed">
              {t.aboutParagraph2}
            </p>

            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-stone-900 border border-stone-800 text-center">
                <div className="text-xl sm:text-2xl font-black text-amber-400 font-serif">100%</div>
                <div className="text-[11px] text-stone-400 font-medium">{t.aboutStatHalal}</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-stone-900 border border-stone-800 text-center">
                <div className="text-xl sm:text-2xl font-black text-amber-400 font-serif">12+</div>
                <div className="text-[11px] text-stone-400 font-medium">{t.aboutStatExperience}</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-stone-900 border border-stone-800 text-center">
                <div className="text-xl sm:text-2xl font-black text-amber-400 font-serif">4.9★</div>
                <div className="text-[11px] text-stone-400 font-medium">{t.aboutStatReviews}</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border-2 border-stone-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
                alt="MAEZO Cafe Interior"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-stone-900/90 backdrop-blur-md border border-stone-800">
                <p className="text-xs font-bold text-amber-300 font-serif">
                  {t.aboutBannerQuote}
                </p>
                <span className="text-[11px] text-stone-400">
                  {t.aboutBannerSub}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Guest Reviews Section */}
        <div className="space-y-6 pt-4">
          <div className="text-center space-y-1">
            <h3 className="text-2xl font-bold font-serif text-stone-100">
              {t.aboutGuestReviewsTitle}
            </h3>
            <p className="text-xs text-stone-400">
              {t.aboutGuestReviewsSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="p-5 rounded-3xl bg-stone-900/90 border border-stone-800 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-stone-500">{rev.date}</span>
                  </div>

                  <p className="text-xs text-stone-300 italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-800 text-xs font-bold text-stone-200">
                  {rev.author}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
