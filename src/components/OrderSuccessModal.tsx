import React from 'react';
import { CheckCircle2, MessageSquare, MessageCircle, Phone, Clock, MapPin, ArrowRight, Copy, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { Order } from '../types';
import { CAFE_INFO } from '../data/menuData';
import { useLanguage } from '../context/LanguageContext';

interface OrderSuccessModalProps {
  order: Order | null;
  onClose: () => void;
  onTrackOrder: (orderId: string) => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({
  order,
  onClose,
  onTrackOrder,
}) => {
  const { t, getDishName, formatPrice } = useLanguage();
  const [copied, setCopied] = React.useState(false);

  if (!order) return null;

  const copyOrderId = () => {
    navigator.clipboard?.writeText(order.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const generateOrderText = () => {
    const itemsList = order.items
      .map((i) => `• ${getDishName(i.dish)} x${i.quantity} — ${i.dish.price * i.quantity} сом`)
      .join('%0A');

    return `*Жаңы буйрутма: ${order.id}*%0A%0A` +
      `👤 Кардар: ${order.customerName}%0A` +
      `📞 Телефон: ${order.phone}%0A` +
      `📍 Дарек: ${order.address}%0A` +
      `🚚 Түрү: ${order.orderType === 'delivery' ? 'Жеткирүү' : 'Кафеден алып кетүү'}%0A` +
      `💳 Төлөм: ${order.paymentMethod}%0A%0A` +
      `📋 *Тамактар:*%0A${itemsList}%0A%0A` +
      `💰 *Жалпы сумма: ${order.totalAmount} сом*` +
      (order.notes ? `%0A💬 Кошумча: ${order.notes}` : '') +
      `%0A🌐 ${CAFE_INFO.websiteUrl}`;
  };

  // WhatsApp order summary message
  const generateWhatsAppMessage = () => {
    return `https://wa.me/${CAFE_INFO.whatsappClean}?text=${generateOrderText()}`;
  };

  // SMS order summary link
  const generateSmsLink = () => {
    return `sms:${CAFE_INFO.smsClean}?body=${generateOrderText()}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-lg bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl z-10 my-8 text-stone-100 p-6 sm:p-8 space-y-6 text-center"
      >
        {/* Animated Success Icon */}
        <div className="mx-auto w-20 h-20 rounded-3xl bg-emerald-500/20 border-2 border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-500/20">
          <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
        </div>

        {/* Heading */}
        <div className="space-y-1.5">
          <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400">
            {t.successBadge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-50 font-serif">
            {t.successTitle}
          </h2>
          <p className="text-xs sm:text-sm text-stone-300">
            {t.successSubtitle}
          </p>
        </div>

        {/* Order Info Card */}
        <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-3 text-left">
          <div className="flex items-center justify-between border-b border-stone-850 pb-2.5">
            <span className="text-xs text-stone-400">{t.successOrderNumber}:</span>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-black text-amber-400 font-mono">{order.id}</span>
              <button
                onClick={copyOrderId}
                className="text-stone-400 hover:text-white p-1 rounded hover:bg-stone-800 cursor-pointer"
                title="Көчүрүү"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-stone-300">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.successEstTime}:</span>
            </span>
            <span className="font-bold text-stone-100">{t.successEstDuration}</span>
          </div>

          <div className="flex items-center justify-between text-xs text-stone-300">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.checkoutAddress}:</span>
            </span>
            <span className="font-medium text-stone-100 truncate max-w-[200px] text-right">
              {order.address}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs font-bold text-stone-100 pt-1 border-t border-stone-850">
            <span>{t.checkoutFinalTotal}:</span>
            <span className="text-base text-amber-400 font-serif font-black">{formatPrice(order.totalAmount)}</span>
          </div>
        </div>

        {/* WhatsApp, SMS & Call Fast Confirmation CTA */}
        <div className="space-y-2">
          <a
            href={generateWhatsAppMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-2xl text-xs sm:text-sm transition-colors shadow-lg shadow-emerald-600/20"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>{t.successWhatsAppBtn}</span>
          </a>
          <div className="grid grid-cols-2 gap-2">
            <a
              href={generateSmsLink()}
              className="flex items-center justify-center gap-1.5 bg-sky-600/20 hover:bg-sky-600/30 border border-sky-500/30 text-sky-300 font-bold py-2.5 px-3 rounded-xl text-xs transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{t.contactSendSms}</span>
            </a>
            <a
              href={`tel:${CAFE_INFO.phoneClean}`}
              className="flex items-center justify-center gap-1.5 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 font-bold py-2.5 px-3 rounded-xl text-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{t.contactFastCall}</span>
            </a>
          </div>
          <p className="text-[11px] text-stone-400">
            {t.successWhatsAppNote}
          </p>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row gap-2.5 pt-2 border-t border-stone-800">
          <button
            onClick={() => {
              onClose();
              onTrackOrder(order.id);
            }}
            className="flex-1 flex items-center justify-center gap-2 bg-stone-800 hover:bg-stone-750 text-amber-400 font-bold py-3 rounded-xl text-xs transition-colors cursor-pointer"
          >
            <span>{t.successTrackOrderBtn}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onClose}
            className="flex-1 bg-stone-950 hover:bg-stone-900 text-stone-300 font-semibold py-3 rounded-xl text-xs transition-colors cursor-pointer"
          >
            {t.successBackToMenu}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
