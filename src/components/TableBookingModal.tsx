import React, { useState } from 'react';
import { X, Calendar as CalendarIcon, Clock, Users, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { TableBooking } from '../types';
import { CAFE_INFO } from '../data/menuData';
import { useLanguage } from '../context/LanguageContext';

interface TableBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookingComplete: (booking: TableBooking) => void;
}

export const TableBookingModal: React.FC<TableBookingModalProps> = ({
  isOpen,
  onClose,
  onBookingComplete,
}) => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+996 ');
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('18:00');
  const [guestsCount, setGuestsCount] = useState(2);
  const [occasion, setOccasion] = useState('');
  const [wishes, setWishes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = t.checkoutNameRequired;
    if (!phone || phone.replace(/\D/g, '').length < 9) errs.phone = t.checkoutPhoneRequired;
    if (!date) errs.date = t.bookingDate;
    if (!time) errs.time = t.bookingTime;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const booking: TableBooking = {
      id: `TB-${Math.floor(1000 + Math.random() * 9000)}`,
      name: name.trim(),
      phone: phone.trim(),
      date,
      time,
      guests: guestsCount,
      guestsCount,
      occasion: occasion.trim() || undefined,
      wishes: wishes.trim() || undefined,
      createdAt: new Date().toISOString(),
      status: 'confirmed',
    };

    onBookingComplete(booking);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/80 backdrop-blur-md overflow-y-auto">
      <div className="fixed inset-0" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-xl bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl z-10 my-8 text-stone-100"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-stone-800 flex items-center justify-between bg-stone-950/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-serif">{t.bookingTitle}</h2>
              <p className="text-xs text-stone-400">{t.bookingSubtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-xl hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="mx-auto w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-bold font-serif text-stone-50">{t.bookingConfirmedTitle}</h3>
              <p className="text-sm text-stone-300">
                {t.bookingConfirmedText} <span className="font-semibold text-amber-400">{phone}</span> {t.bookingConfirmedPost}
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 text-xs text-stone-300 space-y-1 text-left max-w-sm mx-auto">
              <div className="flex justify-between">
                <span className="text-stone-400">{t.bookingDate}:</span>
                <span className="font-bold">{date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">{t.bookingTime}:</span>
                <span className="font-bold">{time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">{t.bookingGuests}:</span>
                <span className="font-bold">{guestsCount} {t.bookingPerson}</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-8 py-3 rounded-xl text-sm transition-colors cursor-pointer"
            >
              {t.bookingClose}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-8 space-y-4 max-h-[75vh] overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-300">
                  {t.checkoutName} <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  placeholder={t.checkoutNamePlaceholder}
                  className={`w-full bg-stone-950 border rounded-2xl px-4 py-3 text-xs sm:text-sm text-stone-200 placeholder-stone-500 focus:outline-none ${
                    errors.name ? 'border-red-500' : 'border-stone-800 focus:border-amber-500'
                  }`}
                />
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
                  placeholder="+996 708 087 608"
                  className={`w-full bg-stone-950 border rounded-2xl px-4 py-3 text-xs sm:text-sm text-stone-200 placeholder-stone-500 focus:outline-none ${
                    errors.phone ? 'border-red-500' : 'border-stone-800 focus:border-amber-500'
                  }`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-300 flex items-center gap-1">
                  <CalendarIcon className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.bookingDate}</span>
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-2xl px-3 py-2.5 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-300 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.bookingTime}</span>
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-2xl px-3 py-2.5 text-xs text-stone-200 focus:outline-none focus:border-amber-500 cursor-pointer"
                >
                  {['10:30', '12:00', '13:30', '15:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'].map((tm) => (
                    <option key={tm} value={tm}>{tm}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-300 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.bookingGuests}</span>
                </label>
                <select
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(Number(e.target.value))}
                  className="w-full bg-stone-950 border border-stone-800 rounded-2xl px-3 py-2.5 text-xs text-stone-200 focus:outline-none focus:border-amber-500 cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15].map((num) => (
                    <option key={num} value={num}>{num} {t.bookingPerson}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-300">
                {t.bookingOccasion}
              </label>
              <input
                type="text"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                placeholder={t.bookingOccasionPlaceholder}
                className="w-full bg-stone-950 border border-stone-800 rounded-2xl px-4 py-3 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-300">
                {t.bookingWishes}
              </label>
              <textarea
                value={wishes}
                onChange={(e) => setWishes(e.target.value)}
                rows={2}
                placeholder={t.bookingWishesPlaceholder}
                className="w-full bg-stone-950 border border-stone-800 rounded-2xl px-4 py-2.5 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500 resize-none"
              />
            </div>

            <div className="p-3.5 rounded-2xl bg-stone-950 border border-stone-850 text-xs text-stone-400 space-y-1">
              <div className="flex items-center gap-2 text-stone-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-semibold">{CAFE_INFO.name} • {CAFE_INFO.address}</span>
              </div>
              <p className="text-[11px]">{t.bookingInfoNote}</p>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-stone-950 font-extrabold py-4 rounded-2xl text-sm transition-all shadow-xl shadow-amber-500/25 active:scale-98 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{t.bookingSubmitBtn}</span>
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};
