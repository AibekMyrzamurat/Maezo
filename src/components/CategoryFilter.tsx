import React from 'react';
import { Category } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  const { getCategoryName } = useLanguage();

  return (
    <div className="sticky top-20 z-30 bg-stone-950/95 backdrop-blur-md py-3.5 border-b border-stone-850 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const displayName = getCategoryName(cat);
            return (
              <button
                key={cat.id}
                id={`cat-filter-${cat.id}`}
                onClick={() => onSelectCategory(cat.id)}
                className={`whitespace-nowrap flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/25 scale-102'
                    : 'bg-stone-900/90 text-stone-300 hover:bg-stone-850 hover:text-white border border-stone-800'
                }`}
              >
                <span className="text-base">{cat.emoji}</span>
                <span>{displayName}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
