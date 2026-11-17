import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Dish, Category, Promo } from '../types';
import { TRANSLATIONS, Translations } from '../data/translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
  getDishName: (dish: Dish) => string;
  getDishDescription: (dish: Dish) => string;
  getDishIngredients: (dish: Dish) => string[];
  getCategoryName: (cat: Category) => string;
  formatPrice: (amount: number) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('maezo_lang') as Language;
      if (saved && (saved === 'kg' || saved === 'ru' || saved === 'en')) {
        return saved;
      }
    } catch {
      // fallback
    }
    return 'kg';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('maezo_lang', newLang);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.kg;

  const getDishName = (dish: Dish): string => {
    if (lang === 'ru' && dish.nameRu) return dish.nameRu;
    if (lang === 'en' && dish.nameEn) return dish.nameEn;
    if (lang === 'kg' && dish.nameKg) return dish.nameKg;
    return dish.name;
  };

  const getDishDescription = (dish: Dish): string => {
    if (lang === 'ru' && dish.descriptionRu) return dish.descriptionRu;
    if (lang === 'en' && dish.descriptionEn) return dish.descriptionEn;
    if (lang === 'kg' && dish.descriptionKg) return dish.descriptionKg;
    return dish.description;
  };

  const getDishIngredients = (dish: Dish): string[] => {
    if (lang === 'ru' && dish.ingredientsRu && dish.ingredientsRu.length > 0) return dish.ingredientsRu;
    if (lang === 'en' && dish.ingredientsEn && dish.ingredientsEn.length > 0) return dish.ingredientsEn;
    if (lang === 'kg' && dish.ingredientsKg && dish.ingredientsKg.length > 0) return dish.ingredientsKg;
    return dish.ingredients;
  };

  const getCategoryName = (cat: Category): string => {
    if (lang === 'ru' && cat.nameRu) return cat.nameRu;
    if (lang === 'en' && cat.nameEn) return cat.nameEn;
    if (lang === 'kg' && cat.nameKg) return cat.nameKg;
    return cat.name;
  };

  const formatPrice = (amount: number): string => {
    return `${amount} ${t.dishCurrency}`;
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t,
        getDishName,
        getDishDescription,
        getDishIngredients,
        getCategoryName,
        formatPrice,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
