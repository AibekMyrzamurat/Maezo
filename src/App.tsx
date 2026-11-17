import React, { useState, useEffect, useMemo } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { DishCard } from './components/DishCard';
import { DishDetailModal } from './components/DishDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { DeliverySection } from './components/DeliverySection';
import { PromotionsSection } from './components/PromotionsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { TableBookingModal } from './components/TableBookingModal';
import { OrderTrackerModal } from './components/OrderTrackerModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Footer } from './components/Footer';
import { DISHES, CATEGORIES } from './data/menuData';
import { Dish, CartItem, Order, TableBooking } from './types';
import { Search, Sparkles, Filter, CheckCircle2 } from 'lucide-react';

function AppContent() {
  const { t, getDishName, getDishDescription } = useLanguage();

  // --- PERSISTED STATE ---
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('maezo_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem('maezo_orders');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // --- UI FILTER STATE ---
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeFilterTag, setActiveFilterTag] = useState<'all' | 'popular' | 'spicy' | 'halal' | 'new'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('hero');

  // --- MODALS STATE ---
  const [selectedDishDetails, setSelectedDishDetails] = useState<Dish | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);
  const [lastPlacedOrder, setLastPlacedOrder] = useState<Order | null>(null);
  const [trackingOrderId, setTrackingOrderId] = useState<string | undefined>(undefined);

  // Promo Code Discount
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; discount: number } | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Save cart
  useEffect(() => {
    try {
      localStorage.setItem('maezo_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  // Save orders
  useEffect(() => {
    try {
      localStorage.setItem('maezo_orders', JSON.stringify(orders));
    } catch {
      // ignore
    }
  }, [orders]);

  // Auto-toast helper
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'menu', 'promotions', 'delivery', 'about', 'contacts'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- CALCULATIONS ---
  const cartCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  const cartTotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.dish.price * item.quantity, 0);
  }, [cart]);

  const activeOrderCount = useMemo(() => {
    return orders.filter((o) => o.status !== 'completed').length;
  }, [orders]);

  // Filtered dishes
  const filteredDishes = useMemo(() => {
    return DISHES.filter((dish) => {
      // Category match
      if (selectedCategory !== 'all' && dish.category !== selectedCategory) {
        return false;
      }
      // Tag filter
      if (activeFilterTag === 'popular' && !dish.isPopular) return false;
      if (activeFilterTag === 'spicy' && !dish.isSpicy) return false;
      if (activeFilterTag === 'halal' && !dish.isHalal) return false;
      if (activeFilterTag === 'new' && !dish.isNew) return false;

      // Search match across multiple languages
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const nameKg = (dish.nameKg || dish.name).toLowerCase();
        const nameRu = (dish.nameRu || '').toLowerCase();
        const nameEn = (dish.nameEn || '').toLowerCase();
        const descKg = (dish.descriptionKg || dish.description).toLowerCase();
        const descRu = (dish.descriptionRu || '').toLowerCase();
        const descEn = (dish.descriptionEn || '').toLowerCase();
        const matchesName = nameKg.includes(query) || nameRu.includes(query) || nameEn.includes(query);
        const matchesDesc = descKg.includes(query) || descRu.includes(query) || descEn.includes(query);
        
        if (!matchesName && !matchesDesc) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, activeFilterTag, searchQuery]);

  // --- CART ACTIONS ---
  const handleAddToCart = (dish: Dish, quantity: number = 1, notes?: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.dish.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.dish.id === dish.id
            ? { ...item, quantity: item.quantity + quantity, notes: notes || item.notes }
            : item
        );
      }
      return [...prev, { dish, quantity, notes }];
    });
    showToast(`✓ ${getDishName(dish)} ${t.dishAddedSuccess}`);
  };

  const handleUpdateQuantity = (dishId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(dishId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.dish.id === dishId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (dishId: string) => {
    setCart((prev) => prev.filter((item) => item.dish.id !== dishId));
  };

  const handleClearCart = () => {
    setCart([]);
    setAppliedPromo(null);
  };

  const handleApplyPromo = (code: string, discount: number) => {
    setAppliedPromo({ code, discount });
    showToast(`🎁 ${code} - ${t.promoApplied}`);
  };

  const handleOrderComplete = (order: Order) => {
    setOrders((prev) => [order, ...prev]);
    setCart([]);
    setAppliedPromo(null);
    setIsCheckoutOpen(false);
    setLastPlacedOrder(order);
  };

  const handleBookingComplete = (booking: TableBooking) => {
    showToast(`📅 ${t.bookingConfirmedTitle}`);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 selection:bg-amber-500 selection:text-stone-950 font-sans pb-16 lg:pb-0">
      
      {/* Toast popup */}
      {toastMessage && (
        <div className="fixed top-24 right-4 z-50 bg-stone-900 border border-amber-500/50 text-amber-300 text-xs sm:text-sm font-bold px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Header with Language Switcher */}
      <Header
        cartCount={cartCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenTracker={() => {
          setTrackingOrderId(undefined);
          setIsTrackerOpen(true);
        }}
        activeOrderCount={activeOrderCount}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* 2. Hero Section */}
      <Hero
        onExploreMenu={() => handleNavigate('menu')}
        onQuickOrder={() => {
          handleNavigate('menu');
          setActiveFilterTag('popular');
        }}
        onOpenPromo={() => handleNavigate('promotions')}
      />

      {/* 3. Interactive Category Filter (Sticky) */}
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* 4. Menu Section */}
      <section id="menu" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-stone-850">
        
        {/* Menu Section Header & Tags */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.menuSectionBadge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-stone-50">
              {t.menuSectionTitle}
            </h2>
            <p className="text-xs sm:text-sm text-stone-400">
              {t.menuSectionSub}
            </p>
          </div>

          {/* Quick Filter Tags (All / Popular / Halal / Spicy / New) */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {[
              { id: 'all', label: t.menuFilterAll },
              { id: 'popular', label: `🔥 ${t.dishBadgePopular}` },
              { id: 'halal', label: `✓ ${t.dishBadgeHalal}` },
              { id: 'spicy', label: `🌶️ ${t.dishBadgeSpicy}` },
              { id: 'new', label: `✨ ${t.dishBadgeNew}` },
            ].map((tag) => (
              <button
                key={tag.id}
                onClick={() => setActiveFilterTag(tag.id as any)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeFilterTag === tag.id
                    ? 'bg-amber-500 text-stone-950 font-black shadow-md'
                    : 'bg-stone-900 border border-stone-800 text-stone-400 hover:text-white'
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search Notice if Active */}
        {searchQuery && (
          <div className="mb-6 flex items-center justify-between bg-stone-900/80 border border-stone-800 px-4 py-3 rounded-2xl text-xs text-stone-300">
            <span>
              {t.searchPlaceholder}: <strong className="text-amber-400">"{searchQuery}"</strong> ({filteredDishes.length})
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-amber-400 font-bold hover:underline cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}

        {/* Dishes Grid */}
        {filteredDishes.length === 0 ? (
          <div className="bg-stone-900/60 border border-stone-800 rounded-3xl p-12 text-center space-y-4 max-w-md mx-auto my-8">
            <Search className="w-10 h-10 mx-auto text-stone-600" />
            <div>
              <h3 className="font-bold text-base text-stone-200">{t.dishNotFoundTitle}</h3>
              <p className="text-xs text-stone-400 mt-1">
                {t.dishNotFoundDesc}
              </p>
            </div>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setActiveFilterTag('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 bg-amber-500 text-stone-950 text-xs font-bold rounded-xl hover:bg-amber-400 transition-colors cursor-pointer"
            >
              {t.categoryAll}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {filteredDishes.map((dish) => {
              const inCart = cart.find((i) => i.dish.id === dish.id);
              return (
                <DishCard
                  key={dish.id}
                  dish={dish}
                  cartQuantity={inCart ? inCart.quantity : 0}
                  onAddToCart={(d) => handleAddToCart(d, 1)}
                  onOpenDetails={(d) => setSelectedDishDetails(d)}
                />
              );
            })}
          </div>
        )}

      </section>

      {/* 5. Promotions Section */}
      <PromotionsSection
        onApplyPromo={(code, discount) => {
          handleApplyPromo(code, discount);
          setIsCartOpen(true);
        }}
        onSelectCategoryFilter={(catId) => {
          setSelectedCategory(catId);
          handleNavigate('menu');
        }}
      />

      {/* 6. Delivery Information Section */}
      <DeliverySection />

      {/* 7. About Maezo Café & Reviews */}
      <AboutSection />

      {/* 8. Contacts & Feedback */}
      <ContactSection />

      {/* 9. Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* 10. Mobile Bottom Sticky Navigation */}
      <MobileBottomNav
        activeSection={activeSection}
        cartCount={cartCount}
        cartTotal={cartTotal}
        onNavigate={handleNavigate}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenTracker={() => {
          setTrackingOrderId(undefined);
          setIsTrackerOpen(true);
        }}
        activeOrderCount={activeOrderCount}
      />

      {/* --- POPUP MODALS --- */}
      {/* Dish Detail Modal */}
      <DishDetailModal
        dish={selectedDishDetails}
        onClose={() => setSelectedDishDetails(null)}
        onAddToCart={(dish, qty, notes) => handleAddToCart(dish, qty, notes)}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        appliedDiscount={appliedPromo ? appliedPromo.discount : 0}
        promoCode={appliedPromo ? appliedPromo.code : undefined}
        onOrderComplete={handleOrderComplete}
      />

      {/* Order Success Modal */}
      <OrderSuccessModal
        order={lastPlacedOrder}
        onClose={() => setLastPlacedOrder(null)}
        onTrackOrder={(orderId) => {
          setTrackingOrderId(orderId);
          setIsTrackerOpen(true);
        }}
      />

      {/* Table Booking Modal */}
      <TableBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        onBookingComplete={handleBookingComplete}
      />

      {/* Order Tracker Modal */}
      <OrderTrackerModal
        isOpen={isTrackerOpen}
        onClose={() => setIsTrackerOpen(false)}
        orders={orders}
        initialOrderId={trackingOrderId}
      />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
