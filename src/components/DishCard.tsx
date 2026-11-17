import React from 'react';
import { Plus, Check, Flame, Sparkles, Clock, Leaf } from 'lucide-react';
import { Dish } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface DishCardProps {
  dish: Dish;
  cartQuantity: number;
  onAddToCart: (dish: Dish) => void;
  onOpenDetails: (dish: Dish) => void;
}

export const DishCard: React.FC<DishCardProps> = ({
  dish,
  cartQuantity,
  onAddToCart,
  onOpenDetails,
}) => {
  const { t, getDishName, getDishDescription, formatPrice } = useLanguage();

  const name = getDishName(dish);
  const description = getDishDescription(dish);

  return (
    <div
      id={`dish-card-${dish.id}`}
      className="group flex flex-col justify-between bg-stone-900/90 rounded-3xl border border-stone-800 overflow-hidden hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300"
    >
      {/* Image Container */}
      <div
        className="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-950 cursor-pointer"
        onClick={() => onOpenDetails(dish)}
      >
        <img
          src={dish.image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />

        {/* Badges on Top */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {dish.isPopular && (
            <span className="flex items-center gap-1 bg-amber-500 text-stone-950 text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-md">
              <Flame className="w-3 h-3 fill-stone-950" />
              <span>{t.dishBadgePopular}</span>
            </span>
          )}
          {dish.isNew && (
            <span className="flex items-center gap-1 bg-emerald-500 text-stone-950 text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-md">
              <Sparkles className="w-3 h-3" />
              <span>{t.dishBadgeNew}</span>
            </span>
          )}
          {dish.isSpicy && (
            <span className="flex items-center gap-1 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md">
              🌶️ {t.dishBadgeSpicy}
            </span>
          )}
        </div>

        {/* Halal badge top right */}
        {dish.isHalal && (
          <div className="absolute top-3 right-3 bg-stone-900/90 backdrop-blur-md text-emerald-400 border border-emerald-500/30 text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-md">
            {t.dishBadgeHalal}
          </div>
        )}

        {/* Bottom weight on image */}
        <div className="absolute bottom-2.5 left-3 text-[11px] font-medium text-stone-300 bg-stone-950/70 backdrop-blur-xs px-2 py-0.5 rounded-md">
          {dish.weight}
        </div>
      </div>

      {/* Body Info */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-start justify-between gap-2">
            <h3
              onClick={() => onOpenDetails(dish)}
              className="text-base sm:text-lg font-bold text-stone-100 group-hover:text-amber-400 transition-colors line-clamp-1 cursor-pointer font-serif"
            >
              {name}
            </h3>
          </div>

          <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Preparation time & calories if any */}
        <div className="flex items-center gap-3 text-[11px] text-stone-400 pt-1">
          {dish.preparationTime && (
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-amber-500" />
              <span>{dish.preparationTime}</span>
            </span>
          )}
          {dish.calories && (
            <span>• {dish.calories} {t.dishKcal}</span>
          )}
        </div>

        {/* Price & Add to Cart button */}
        <div className="flex items-center justify-between pt-2 border-t border-stone-800/80">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg sm:text-xl font-extrabold text-stone-50 font-serif">
                {formatPrice(dish.price)}
              </span>
              {dish.oldPrice && (
                <span className="text-xs text-stone-400 line-through">
                  {dish.oldPrice}
                </span>
              )}
            </div>
            {dish.oldPrice && (
              <span className="text-[10px] text-emerald-400 font-bold">
                -{Math.round(((dish.oldPrice - dish.price) / dish.oldPrice) * 100)}%
              </span>
            )}
          </div>

          <button
            id={`add-to-cart-${dish.id}`}
            onClick={() => onAddToCart(dish)}
            className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
              cartQuantity > 0
                ? 'bg-emerald-500 hover:bg-emerald-600 text-stone-950 shadow-md shadow-emerald-500/20'
                : 'bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-md shadow-amber-500/20 active:scale-95'
            }`}
          >
            {cartQuantity > 0 ? (
              <>
                <Check className="w-4 h-4 stroke-[3]" />
                <span>{cartQuantity} ✓</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4 stroke-[3]" />
                <span>{t.dishAddToCart}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
