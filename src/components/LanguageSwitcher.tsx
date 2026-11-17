import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  compact?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ compact = false }) => {
  const { lang, setLang } = useLanguage();

  const languages: { code: Language; label: string; short: string; flag: string }[] = [
    { code: 'kg', label: 'Кыргызча', short: 'KG', flag: '🇰🇬' },
    { code: 'ru', label: 'Русский', short: 'RU', flag: '🇷🇺' },
    { code: 'en', label: 'English', short: 'EN', flag: '🇬🇧' },
  ];

  if (compact) {
    return (
      <div className="flex items-center bg-stone-900 border border-stone-800 rounded-full p-0.5 shadow-inner">
        {languages.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            aria-label={`Switch to ${l.label}`}
            className={`px-2 py-1 rounded-full text-[11px] font-bold transition-all flex items-center gap-1 cursor-pointer ${
              lang === l.code
                ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                : 'text-stone-400 hover:text-stone-100'
            }`}
          >
            <span>{l.flag}</span>
            <span>{l.short}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div
      id="language-switcher"
      className="flex items-center bg-stone-900/90 backdrop-blur-md border border-stone-800/80 rounded-2xl p-1 shadow-md"
    >
      <div className="pl-1.5 pr-1 text-stone-400 hidden sm:flex items-center">
        <Globe className="w-3.5 h-3.5 text-amber-400/80" />
      </div>

      <div className="flex items-center gap-1">
        {languages.map((l) => {
          const isActive = lang === l.code;
          return (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              aria-label={`Switch to ${l.label}`}
              className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                isActive
                  ? 'bg-amber-500 text-stone-950 font-black shadow-md shadow-amber-500/25 scale-102'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800/60'
              }`}
            >
              <span className="text-xs">{l.flag}</span>
              <span>{l.short}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
