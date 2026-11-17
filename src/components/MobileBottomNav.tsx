import React from 'react';
import { UtensilsCrossed, Percent, ShoppingBag, Calendar, Bike } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface MobileBottomNavProps {
  activeSection: string;
  cartCount: number;
  cartTotal: number;
  onNavigate: (sectionId: string) => void;
  onOpenCart: () => void;
  onOpenBooking: () => void;
  onOpenTracker: () => void;
  activeOrderCount: number;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeSection,
  cartCount,
  cartTotal,
  onNavigate,
  onOpenCart,
  onOpenBooking,
  onOpenTracker,
  activeOrderCount,
}) => {
  const { t, formatPrice } = useLanguage();

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-stone-900/95 backdrop-blur-md border-t border-stone-800 lg:hidden px-3 py-2 flex items-center justify-around shadow-2xl">
      
      {/* Menu Nav Button */}
      <button
        onClick={() => onNavigate('menu')}
        className={`flex flex-col items-center gap-1 text-[10px] font-bold p-1 cursor-pointer ${
          activeSection === 'menu' ? 'text-amber-400' : 'text-stone-400 hover:text-stone-200'
        }`}
      >
        <UtensilsCrossed className="w-5 h-5" />
        <span>{t.mobileNavMenu}</span>
      </button>

      {/* Promos */}
      <button
        onClick={() => onNavigate('promotions')}
        className={`flex flex-col items-center gap-1 text-[10px] font-bold p-1 cursor-pointer ${
          activeSection === 'promotions' ? 'text-amber-400' : 'text-stone-400 hover:text-stone-200'
        }`}
      >
        <Percent className="w-5 h-5" />
        <span>{t.mobileNavPromos}</span>
      </button>

      {/* Table Booking */}
      <button
        onClick={onOpenBooking}
        className="flex flex-col items-center gap-1 text-[10px] font-bold text-stone-400 hover:text-stone-200 p-1 cursor-pointer"
      >
        <Calendar className="w-5 h-5 text-amber-400/90" />
        <span>{t.mobileNavBooking}</span>
      </button>

      {/* Order Tracker */}
      <button
        onClick={onOpenTracker}
        className="relative flex flex-col items-center gap-1 text-[10px] font-bold text-stone-400 hover:text-stone-200 p-1 cursor-pointer"
      >
        <div className="relative">
          <Bike className="w-5 h-5" />
          {activeOrderCount > 0 && (
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
          )}
        </div>
        <span>{t.mobileNavOrders}</span>
      </button>

      {/* Cart floating trigger */}
      <button
        onClick={onOpenCart}
        className="relative flex flex-col items-center gap-1 text-[10px] font-bold text-stone-950 bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1.5 rounded-xl shadow-md cursor-pointer"
      >
        <div className="relative">
          <ShoppingBag className="w-4 h-4 text-stone-950 stroke-[2.5]" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-stone-950 text-amber-400 text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-amber-400">
              {cartCount}
            </span>
          )}
        </div>
        <span className="font-extrabold">{cartTotal > 0 ? formatPrice(cartTotal) : t.navCart}</span>
      </button>

    </div>
  );
};
