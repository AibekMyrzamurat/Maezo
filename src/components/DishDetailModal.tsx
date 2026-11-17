import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Clock, Flame, ShieldCheck, Sparkles, Check, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Dish } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface DishDetailModalProps {
  dish: Dish | null;
  onClose: () => void;
  onAddToCart: (dish: Dish, quantity: number, notes?: string) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  dish,
  onClose,
  onAddToCart,
}) => {
  const { t, getDishName, getDishDescription, getDishIngredients, formatPrice } = useLanguage();
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');
  const [addedAnimation, setAddedAnimation] = useState(false);

  if (!dish) return null;

  const name = getDishName(dish);
  const description = getDishDescription(dish);
  const ingredients = getDishIngredients(dish);

  const handleAdd = () => {
    onAddToCart(dish, quantity, notes.trim() ? notes : undefined);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      onClose();
    }, 450);
  };

  const totalPrice = dish.price * quantity;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/80 backdrop-blur-md overflow-y-auto">
        
        {/* Backdrop click */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl z-10 my-8 text-stone-100"
        >
          {/* Close button */}
          <button
            id="close-dish-detail-btn"
            onClick={onClose}
            aria-label={t.close}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-white backdrop-blur-md border border-stone-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Dish Header Image */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-stone-950">
            <img
              src={dish.image}
              alt={name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-transparent" />

            {/* Badges */}
            <div className="absolute bottom-4 left-6 flex flex-wrap gap-2">
              {dish.isPopular && (
                <span className="flex items-center gap-1 bg-amber-500 text-stone-950 text-xs font-black uppercase px-3 py-1 rounded-full shadow-md">
                  <Flame className="w-3.5 h-3.5 fill-stone-950" />
                  <span>{t.dishBadgePopular}</span>
                </span>
              )}
              {dish.isHalal && (
                <span className="flex items-center gap-1 bg-stone-900/90 border border-emerald-500/40 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.dishBadgeHalal}</span>
                </span>
              )}
              {dish.isSpicy && (
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  🌶️ {t.dishBadgeSpicy}
                </span>
              )}
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-stone-800 pb-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-stone-50 font-serif">
                  {name}
                </h2>
                <span className="text-xs text-stone-400 font-medium">
                  {dish.weight} • {dish.calories ? `${dish.calories} ${t.dishKcal}` : ''}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-serif">
                {formatPrice(dish.price)}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="text-xs uppercase font-extrabold tracking-wider text-stone-400">
                {t.dishComposition}
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Ingredients list */}
            {ingredients && ingredients.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-xs uppercase font-extrabold tracking-wider text-stone-400">
                  {t.dishIngredients}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="bg-stone-800 border border-stone-700/60 text-stone-200 text-xs px-3 py-1.5 rounded-xl font-medium"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Special Request Notes */}
            <div className="space-y-2">
              <label htmlFor="dish-notes-input" className="block text-xs uppercase font-extrabold tracking-wider text-stone-400">
                {t.dishNotesLabel}
              </label>
              <input
                id="dish-notes-input"
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={t.dishNotesPlaceholder}
                className="w-full bg-stone-950 border border-stone-800 rounded-2xl px-4 py-3 text-xs sm:text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* Actions Bar: Quantity + Add button */}
            <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Quantity selector */}
              <div className="flex items-center gap-3 bg-stone-950 border border-stone-800 p-1.5 rounded-2xl">
                <button
                  id="qty-decrease-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease"
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors cursor-pointer"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-bold text-base text-stone-100">
                  {quantity}
                </span>
                <button
                  id="qty-increase-btn"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase"
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Add to Cart Submit */}
              <button
                id="modal-add-to-cart-btn"
                onClick={handleAdd}
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-stone-950 font-extrabold px-6 py-3.5 rounded-2xl text-sm transition-all shadow-xl shadow-amber-500/20 active:scale-98 cursor-pointer"
              >
                {addedAnimation ? (
                  <>
                    <Check className="w-5 h-5 stroke-[3]" />
                    <span>{t.dishAddedSuccess}</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    <span>{t.dishAddToCartTotal} • {formatPrice(totalPrice)}</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
