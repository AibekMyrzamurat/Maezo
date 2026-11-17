import React, { useState } from 'react';
import { ShoppingBag, Search, Phone, Clock, Menu, X, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CAFE_INFO } from '../data/menuData';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderProps {
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  onOpenBooking: () => void;
  onOpenTracker: () => void;
  activeOrderCount: number;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  cartTotal,
  onOpenCart,
  onOpenBooking,
  onOpenTracker,
  activeOrderCount,
  searchQuery,
  onSearchChange,
  activeSection,
  onNavigate,
}) => {
  const { t, formatPrice } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const navLinks = [
    { id: 'hero', label: t.navHome },
    { id: 'menu', label: t.navMenu },
    { id: 'promotions', label: t.navPromos },
    { id: 'delivery', label: t.navDelivery },
    { id: 'about', label: t.navAbout },
    { id: 'contacts', label: t.navContacts },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100 transition-all shadow-lg">
      {/* Top micro announcement bar with language selector */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-stone-950 text-xs font-semibold py-1.5 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Announcement text */}
          <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
            <span className="bg-stone-950 text-amber-400 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-bold">
              MAEZO
            </span>
            <span className="truncate text-xs sm:text-sm font-medium">
              ⚡ {t.topDeliveryFree} • ⏱️ 30-45 min
            </span>
          </div>

          {/* Right info & Top Language Switcher */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden lg:flex items-center gap-4 text-xs font-medium">
              <a href={`tel:${CAFE_INFO.phoneClean}`} className="flex items-center gap-1 hover:text-stone-900 transition-colors">
                <Phone className="w-3.5 h-3.5" />
                <span>{CAFE_INFO.phone}</span>
              </a>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{t.topOpenHours}</span>
              </div>
            </div>

            {/* Micro compact language switcher on top bar for small screens */}
            <div className="sm:hidden">
              <LanguageSwitcher compact={true} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2 sm:gap-4">
          {/* Brand Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none shrink-0"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-stone-950 font-black text-2xl tracking-tighter shadow-md group-hover:scale-105 transition-transform">
              M
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-2xl sm:text-3xl tracking-wider text-stone-50 font-serif">
                  MAEZO
                </span>
                <span className="text-[10px] uppercase font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 px-1.5 py-0.5 rounded">
                  Кафе
                </span>
              </div>
              <p className="text-[11px] text-stone-400 font-medium tracking-wide hidden sm:block">
                {t.aboutBannerSub}
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all relative cursor-pointer ${
                    isActive
                      ? 'text-amber-400 font-semibold'
                      : 'text-stone-300 hover:text-white hover:bg-stone-800/60'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-amber-500 rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Search, Language Switcher, Reservation, Cart */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search toggler / input */}
            <div className="relative">
              {showSearchInput ? (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 200 }}
                  exit={{ opacity: 0, width: 0 }}
                  className="flex items-center bg-stone-800 border border-stone-700 rounded-full pl-3 pr-2 py-1.5"
                >
                  <Search className="w-4 h-4 text-stone-400 mr-2 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder={t.searchPlaceholder}
                    autoFocus
                    className="w-full bg-transparent text-xs text-stone-100 placeholder-stone-400 focus:outline-none"
                  />
                  <button
                    onClick={() => {
                      onSearchChange('');
                      setShowSearchInput(false);
                    }}
                    className="text-stone-400 hover:text-white p-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              ) : (
                <button
                  id="search-toggle-btn"
                  onClick={() => setShowSearchInput(true)}
                  aria-label={t.searchPlaceholder}
                  className="p-2.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Prominent Language Switcher at Top-Right (Desktop & Tablet) */}
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>

            {/* Active order tracker badge if any */}
            {activeOrderCount > 0 && (
              <button
                id="active-orders-btn"
                onClick={onOpenTracker}
                className="hidden xl:flex items-center gap-1.5 bg-emerald-950/80 border border-emerald-600/50 text-emerald-300 text-xs px-3 py-2 rounded-full hover:bg-emerald-900/80 transition-colors animate-pulse cursor-pointer"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-semibold">{t.trackerTitle} ({activeOrderCount})</span>
              </button>
            )}

            {/* Table booking button */}
            <button
              id="reserve-table-btn"
              onClick={onOpenBooking}
              className="hidden md:flex items-center gap-1.5 text-xs font-semibold bg-stone-800 hover:bg-stone-700 border border-stone-700 text-amber-300 px-3.5 py-2.5 rounded-xl transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>{t.navBookTable}</span>
            </button>

            {/* Cart Button */}
            <button
              id="header-cart-btn"
              onClick={onOpenCart}
              className="relative flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-stone-950 font-bold px-3.5 sm:px-4 py-2.5 rounded-xl transition-all shadow-md shadow-amber-500/20 active:scale-95 cursor-pointer"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-stone-950" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2.5 bg-stone-950 text-amber-400 text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-amber-500 animate-bounce">
                    {cartCount}
                  </span>
                )}
              </div>
              <div className="hidden sm:flex flex-col text-left leading-none">
                <span className="text-[10px] text-stone-900/80 font-medium">{t.navCart}</span>
                <span className="text-xs font-extrabold">{formatPrice(cartTotal)}</span>
              </div>
            </button>

            {/* Mobile menu toggle */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-stone-800 text-stone-300 hover:text-white cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-stone-900 border-b border-stone-800 px-4 pt-2 pb-6 space-y-4"
          >
            {/* Mobile language selector row */}
            <div className="flex items-center justify-between pb-3 border-b border-stone-800">
              <span className="text-xs text-stone-400 font-medium">Тил тандоо / Язык / Language:</span>
              <LanguageSwitcher compact={false} />
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    activeSection === link.id
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      : 'bg-stone-800/60 text-stone-300 hover:bg-stone-800'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-stone-800 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 bg-stone-800 border border-amber-500/30 text-amber-400 font-semibold py-2.5 rounded-xl text-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.navBookTable}</span>
              </button>

              {activeOrderCount > 0 && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTracker();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-950 border border-emerald-600/50 text-emerald-300 font-semibold py-2.5 rounded-xl text-sm"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{t.trackerTitle} ({activeOrderCount})</span>
                </button>
              )}

              <div className="bg-stone-950 p-3 rounded-xl text-xs text-stone-400 space-y-1">
                <div className="flex items-center gap-2 text-stone-200">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{CAFE_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                  <span>{t.topOpenHours}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
