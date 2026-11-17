import React from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { CartItem } from '../types';
import { CAFE_INFO } from '../data/menuData';
import { useLanguage } from '../context/LanguageContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onProceedToCheckout,
}) => {
  const { t, getDishName, formatPrice } = useLanguage();

  if (!isOpen) return null;

  const totalAmount = cart.reduce((sum, item) => sum + item.dish.price * item.quantity, 0);
  const freeDeliveryThreshold = CAFE_INFO.freeDeliveryMin;
  const remainingForFree = Math.max(0, freeDeliveryThreshold - totalAmount);
  const deliveryProgress = Math.min(100, (totalAmount / freeDeliveryThreshold) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="w-screen max-w-md bg-stone-900 border-l border-stone-800 text-stone-100 flex flex-col shadow-2xl"
        >
          {/* Cart Header */}
          <div className="p-5 sm:p-6 border-b border-stone-800 flex items-center justify-between bg-stone-950/40">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold font-serif">{t.cartTitle}</h2>
                <p className="text-xs text-stone-400">
                  {cart.length > 0
                    ? `${cart.reduce((s, i) => s + i.quantity, 0)} ${t.checkoutItemsCount}`
                    : t.cartEmptyTitle}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {cart.length > 0 && (
                <button
                  onClick={onClearCart}
                  title={t.cartClearAll}
                  className="p-2 text-stone-400 hover:text-red-400 rounded-xl hover:bg-stone-800 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
              <button
                id="close-cart-btn"
                onClick={onClose}
                aria-label={t.close}
                className="p-2 text-stone-400 hover:text-white rounded-xl hover:bg-stone-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Free Delivery Bar */}
          {cart.length > 0 && (
            <div className="px-5 py-3 bg-stone-950/60 border-b border-stone-800/80">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-stone-300">
                  {remainingForFree > 0 ? (
                    <>
                      {t.cartFreeDeliveryProgress}{' '}
                      <span className="text-amber-400 font-bold">{formatPrice(remainingForFree)}</span>
                    </>
                  ) : (
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      {t.cartFreeDeliveryUnlocked}
                    </span>
                  )}
                </span>
                <span className="text-stone-400 font-mono text-[11px]">{Math.round(deliveryProgress)}%</span>
              </div>
              <div className="w-full h-2 bg-stone-800 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${
                    remainingForFree === 0 ? 'bg-emerald-500' : 'bg-gradient-to-r from-amber-500 to-orange-500'
                  }`}
                  style={{ width: `${deliveryProgress}%` }}
                />
              </div>
            </div>
          )}

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-20 h-20 rounded-3xl bg-stone-850 flex items-center justify-center text-stone-600">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-stone-200">{t.cartEmptyTitle}</h3>
                  <p className="text-xs text-stone-400 max-w-xs">
                    {t.cartEmptySub}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="mt-2 bg-stone-800 hover:bg-stone-750 text-amber-400 font-bold px-6 py-2.5 rounded-xl text-xs transition-colors cursor-pointer"
                >
                  {t.cartEmptyBtn}
                </button>
              </div>
            ) : (
              cart.map((item) => {
                const dishName = getDishName(item.dish);
                return (
                  <div
                    key={item.dish.id}
                    className="flex gap-3.5 bg-stone-950/60 border border-stone-800/80 p-3 rounded-2xl"
                  >
                    <img
                      src={item.dish.image}
                      alt={dishName}
                      className="w-18 h-18 rounded-xl object-cover shrink-0"
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-sm font-bold text-stone-100 line-clamp-1 font-serif">
                            {dishName}
                          </h4>
                          <span className="text-[11px] text-stone-400">
                            {formatPrice(item.dish.price)}
                          </span>
                          {item.notes && (
                            <p className="text-[10px] text-amber-400/90 italic line-clamp-1">
                              💬 {item.notes}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.dish.id)}
                          className="text-stone-500 hover:text-red-400 p-1 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Quantity row */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2 bg-stone-900 border border-stone-800 rounded-lg p-1">
                          <button
                            onClick={() => onUpdateQuantity(item.dish.id, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center rounded-md hover:bg-stone-800 text-stone-300 transition-colors cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-5 text-center text-xs font-bold text-stone-100">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.dish.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center rounded-md hover:bg-stone-800 text-stone-300 transition-colors cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="text-sm font-extrabold text-amber-400 font-serif">
                          {formatPrice(item.dish.price * item.quantity)}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Cart Footer */}
          {cart.length > 0 && (
            <div className="p-5 sm:p-6 border-t border-stone-800 bg-stone-950/80 space-y-4">
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-stone-400">
                  <span>{t.cartSubtotal}</span>
                  <span className="font-semibold text-stone-200">{formatPrice(totalAmount)}</span>
                </div>
                <div className="flex items-center justify-between text-stone-400">
                  <span>{t.cartDeliveryFee}</span>
                  <span className="font-semibold text-emerald-400">
                    {totalAmount >= freeDeliveryThreshold ? t.cartDeliveryFree : '150 ' + t.dishCurrency}
                  </span>
                </div>
                <div className="flex items-center justify-between text-base font-extrabold text-stone-100 pt-2 border-t border-stone-800">
                  <span>{t.cartTotal}</span>
                  <span className="text-xl text-amber-400 font-serif">
                    {formatPrice(totalAmount + (totalAmount >= freeDeliveryThreshold ? 0 : 150))}
                  </span>
                </div>
              </div>

              <button
                id="cart-checkout-btn"
                onClick={onProceedToCheckout}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-stone-950 font-extrabold py-4 rounded-2xl text-sm transition-all shadow-xl shadow-amber-500/25 active:scale-98 cursor-pointer"
              >
                <span>{t.cartCheckoutBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
