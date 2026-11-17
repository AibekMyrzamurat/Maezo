import React, { useState } from 'react';
import { X, Send, Truck, Store } from 'lucide-react';
import { motion } from 'motion/react';
import { CartItem, Order, OrderType, PaymentMethod } from '../types';
import { CAFE_INFO } from '../data/menuData';
import { useLanguage } from '../context/LanguageContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  appliedDiscount: number;
  promoCode?: string;
  onOrderComplete: (order: Order) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  appliedDiscount,
  promoCode,
  onOrderComplete,
}) => {
  const { t, formatPrice } = useLanguage();
  const [orderType, setOrderType] = useState<OrderType>('delivery');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('mbank');

  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('+996 ');
  const [street, setStreet] = useState('');
  const [house, setHouse] = useState('');
  const [apt, setApt] = useState('');
  const [floor, setFloor] = useState('');
  const [intercom, setIntercom] = useState('');
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const rawSubtotal = cart.reduce((sum, item) => sum + item.dish.price * item.quantity, 0);
  const discountAmount = appliedDiscount > 0 ? (rawSubtotal * appliedDiscount) / 100 : 0;
  const discountedSubtotal = rawSubtotal - discountAmount;
  
  // Delivery fee calculation
  const deliveryFee = orderType === 'delivery' ? (discountedSubtotal >= CAFE_INFO.freeDeliveryMin ? 0 : 150) : 0;
  const finalTotal = discountedSubtotal + deliveryFee;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!customerName.trim()) {
      errs.name = t.checkoutNameRequired;
    }
    if (!phone || phone.replace(/\D/g, '').length < 9) {
      errs.phone = t.checkoutPhoneRequired;
    }
    if (orderType === 'delivery' && !street.trim()) {
      errs.address = t.checkoutAddressRequired;
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const fullAddress = orderType === 'delivery'
      ? `${street.trim()} ${house.trim() ? `, д. ${house.trim()}` : ''}${apt.trim() ? `, кв. ${apt.trim()}` : ''}`
      : CAFE_INFO.address;

    const newOrder: Order = {
      id: `MZ-${Math.floor(100000 + Math.random() * 900000)}`,
      createdAt: new Date().toISOString(),
      items: [...cart],
      subtotal: rawSubtotal,
      deliveryFee,
      discount: discountAmount,
      total: finalTotal,
      totalAmount: finalTotal,
      orderType,
      customerName: customerName.trim(),
      phone: phone.trim(),
      address: fullAddress,
      apartment: apt.trim() || undefined,
      floor: floor.trim() || undefined,
      intercom: intercom.trim() || undefined,
      notes: comment.trim() || undefined,
      comment: comment.trim() || undefined,
      paymentMethod,
      status: 'pending',
      promoCode: promoCode || undefined,
    };

    setTimeout(() => {
      setIsSubmitting(false);
      onOrderComplete(newOrder);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/80 backdrop-blur-md overflow-y-auto">
      <div className="fixed inset-0" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-2xl bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl z-10 my-8 text-stone-100"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-stone-800 flex items-center justify-between bg-stone-950/40">
          <div>
            <h2 className="text-xl font-bold font-serif text-stone-50">{t.checkoutTitle}</h2>
            <p className="text-xs text-stone-400">{t.checkoutSubtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-xl hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Order Type Toggle */}
          <div className="space-y-2">
            <label className="text-xs uppercase font-extrabold tracking-wider text-stone-400">
              {t.checkoutPaymentMethod}
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setOrderType('delivery')}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                  orderType === 'delivery'
                    ? 'bg-amber-500 text-stone-950 border-amber-500 shadow-md shadow-amber-500/20'
                    : 'bg-stone-950 text-stone-300 border-stone-800 hover:bg-stone-850'
                }`}
              >
                <Truck className="w-4 h-4" />
                <span>{t.checkoutTypeDelivery}</span>
              </button>

              <button
                type="button"
                onClick={() => setOrderType('pickup')}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                  orderType === 'pickup'
                    ? 'bg-amber-500 text-stone-950 border-amber-500 shadow-md shadow-amber-500/20'
                    : 'bg-stone-950 text-stone-300 border-stone-800 hover:bg-stone-850'
                }`}
              >
                <Store className="w-4 h-4" />
                <span>{t.checkoutTypePickup}</span>
              </button>
            </div>
          </div>

          {/* Contact Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-300">
                {t.checkoutName} <span className="text-amber-400">*</span>
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => {
                  setCustomerName(e.target.value);
                  if (errors.name) setErrors({ ...errors, name: '' });
                }}
                placeholder={t.checkoutNamePlaceholder}
                className={`w-full bg-stone-950 border rounded-2xl px-4 py-3 text-xs sm:text-sm text-stone-200 placeholder-stone-500 focus:outline-none ${
                  errors.name ? 'border-red-500' : 'border-stone-800 focus:border-amber-500'
                }`}
              />
              {errors.name && <p className="text-[11px] text-red-400">{errors.name}</p>}
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-300">
                {t.checkoutPhone} <span className="text-amber-400">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (errors.phone) setErrors({ ...errors, phone: '' });
                }}
                placeholder={t.checkoutPhonePlaceholder}
                className={`w-full bg-stone-950 border rounded-2xl px-4 py-3 text-xs sm:text-sm text-stone-200 placeholder-stone-500 focus:outline-none ${
                  errors.phone ? 'border-red-500' : 'border-stone-800 focus:border-amber-500'
                }`}
              />
              {errors.phone && <p className="text-[11px] text-red-400">{errors.phone}</p>}
            </div>
          </div>

          {/* Address if delivery */}
          {orderType === 'delivery' ? (
            <div className="space-y-3 p-4 rounded-2xl bg-stone-950/60 border border-stone-800">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-300">
                  {t.checkoutStreet} <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  value={street}
                  onChange={(e) => {
                    setStreet(e.target.value);
                    if (errors.address) setErrors({ ...errors, address: '' });
                  }}
                  placeholder={t.checkoutStreetPlaceholder}
                  className={`w-full bg-stone-900 border rounded-2xl px-4 py-3 text-xs sm:text-sm text-stone-200 placeholder-stone-500 focus:outline-none ${
                    errors.address ? 'border-red-500' : 'border-stone-800 focus:border-amber-500'
                  }`}
                />
                {errors.address && <p className="text-[11px] text-red-400">{errors.address}</p>}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="space-y-1">
                  <label className="text-[11px] text-stone-400">{t.checkoutHouse}</label>
                  <input
                    type="text"
                    value={house}
                    onChange={(e) => setHouse(e.target.value)}
                    placeholder={t.checkoutHousePlaceholder}
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-200 focus:border-amber-500 focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] text-stone-400">{t.checkoutApt}</label>
                  <input
                    type="text"
                    value={apt}
                    onChange={(e) => setApt(e.target.value)}
                    placeholder="12"
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-200 focus:border-amber-500 focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] text-stone-400">{t.checkoutFloor}</label>
                  <input
                    type="text"
                    value={floor}
                    onChange={(e) => setFloor(e.target.value)}
                    placeholder="3"
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-200 focus:border-amber-500 focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] text-stone-400">{t.checkoutIntercom}</label>
                  <input
                    type="text"
                    value={intercom}
                    onChange={(e) => setIntercom(e.target.value)}
                    placeholder="12K"
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-200 focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300">
              <span className="font-bold">{t.checkoutTypePickup}</span>
              <p className="mt-1 text-stone-300">
                {t.checkoutPickupHint}
              </p>
            </div>
          )}

          {/* Payment Method */}
          <div className="space-y-2">
            <label className="text-xs uppercase font-extrabold tracking-wider text-stone-400">
              {t.checkoutPaymentMethod}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: 'mbank', label: t.checkoutPayMbank, desc: t.checkoutPayMbankDesc, icon: '📱' },
                { id: 'card_courier', label: t.checkoutPayCard, desc: t.checkoutPayCardDesc, icon: '🏧' },
                { id: 'cash', label: t.checkoutPayCash, desc: t.checkoutPayCashDesc, icon: '💵' },
                { id: 'qr', label: t.checkoutPayQr, desc: t.checkoutPayQrDesc, icon: '⚡' },
              ].map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPaymentMethod(p.id as PaymentMethod)}
                  className={`flex flex-col items-center text-center p-3 rounded-2xl border text-xs font-semibold transition-all cursor-pointer ${
                    paymentMethod === p.id
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-md'
                      : 'bg-stone-950 border-stone-800 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <span className="text-xl mb-1">{p.icon}</span>
                  <span className="leading-tight font-bold">{p.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Comment for kitchen or courier */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-stone-300">
              {t.checkoutComment}
            </label>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder={t.checkoutCommentPlaceholder}
              className="w-full bg-stone-950 border border-stone-800 rounded-2xl px-4 py-3 text-xs sm:text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Summary Details */}
          <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-2 text-xs">
            <div className="flex justify-between text-stone-400">
              <span>{t.cartSubtotal} ({cart.reduce((s, i) => s + i.quantity, 0)} {t.checkoutItemsCount}):</span>
              <span>{formatPrice(rawSubtotal)}</span>
            </div>
            {discountAmount > 0 && (
              <div className="flex justify-between text-emerald-400">
                <span>{t.cartDiscount} {promoCode ? `(${promoCode})` : ''}:</span>
                <span>-{formatPrice(discountAmount)}</span>
              </div>
            )}
            <div className="flex justify-between text-stone-400">
              <span>{t.cartDeliveryFee}:</span>
              <span>{deliveryFee === 0 ? t.cartDeliveryFree : formatPrice(deliveryFee)}</span>
            </div>
            <div className="flex justify-between text-base font-extrabold text-stone-100 pt-2 border-t border-stone-800">
              <span>{t.checkoutFinalTotal}:</span>
              <span className="text-amber-400 font-serif text-xl">{formatPrice(finalTotal)}</span>
            </div>
          </div>

          {/* Submit Order Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-stone-950 font-extrabold py-4 rounded-2xl text-sm transition-all shadow-xl shadow-amber-500/25 active:scale-98 cursor-pointer disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            <span>{t.checkoutSubmitBtn} • {formatPrice(finalTotal)}</span>
          </button>
        </form>
      </motion.div>
    </div>
  );
};
