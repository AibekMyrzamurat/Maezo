import React from 'react';
import { Heart, Phone, MapPin, Instagram, MessageSquare, MessageCircle, Clock, Globe } from 'lucide-react';
import { CAFE_INFO } from '../data/menuData';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const { t, lang, setLang } = useLanguage();

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-850 pt-16 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-stone-950 font-black text-xl">
                M
              </div>
              <span className="font-extrabold text-2xl tracking-wider text-stone-50 font-serif">
                MAEZO
              </span>
            </div>
            
            <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
              {t.footerDescription}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${CAFE_INFO.whatsappClean}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-stone-900 hover:bg-emerald-600 text-stone-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={CAFE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-stone-900 hover:bg-pink-600 text-stone-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`sms:${CAFE_INFO.smsClean}`}
                aria-label="SMS"
                className="w-9 h-9 rounded-xl bg-stone-900 hover:bg-sky-600 text-stone-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${CAFE_INFO.phoneClean}`}
                aria-label="Phone"
                className="w-9 h-9 rounded-xl bg-stone-900 hover:bg-amber-500 hover:text-stone-950 text-stone-300 flex items-center justify-center transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            {/* Language Switcher in Footer */}
            <div className="pt-3">
              <span className="text-[11px] text-stone-400 font-medium block mb-1.5">{t.footerLangTitle}:</span>
              <LanguageSwitcher compact={false} />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-stone-100">
              {t.footerQuickNav}
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  {t.navHome}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('menu')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  {t.navMenu}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('promotions')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  {t.navPromos}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('delivery')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  {t.navDelivery}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  {t.navAbout}
                </button>
              </li>
              <li>
                <button onClick={onOpenBooking} className="text-amber-400 font-semibold hover:underline cursor-pointer">
                  {t.navBookTable} →
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-stone-100">
              {t.navContacts}
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{CAFE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${CAFE_INFO.phoneClean}`} className="hover:text-white transition-colors">
                  {CAFE_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.contactWorkHoursDaily}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <a
                  href={CAFE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {CAFE_INFO.instagram}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={CAFE_INFO.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {CAFE_INFO.website}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-emerald-400 font-medium">
                ⚡ {t.topDeliveryFree}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-stone-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} MAEZO Cafe. {t.footerRights}</p>
          <p className="flex items-center gap-1">
            <span>{t.footerMadeWithLove}</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
