import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, MessageCircle, Clock, Send, Instagram, CheckCircle2 } from 'lucide-react';
import { CAFE_INFO } from '../data/menuData';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [feedbackName, setFeedbackName] = useState('');
  const [feedbackPhone, setFeedbackPhone] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackName.trim() || !feedbackPhone.trim()) return;

    setFeedbackSent(true);
    setTimeout(() => {
      setFeedbackName('');
      setFeedbackPhone('');
      setFeedbackMessage('');
    }, 2000);
  };

  return (
    <section id="contacts" className="py-14 sm:py-20 bg-stone-900/50 text-stone-100 border-b border-stone-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full text-xs font-bold text-amber-400">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.contactBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-serif text-stone-50">
            {t.contactTitle}
          </h2>
          <p className="text-xs sm:text-sm text-stone-400">
            {t.contactSubtitle}
          </p>
        </div>

        {/* Contact Info & Feedback Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Address */}
            <div className="p-5 rounded-3xl bg-stone-900 border border-stone-800 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs uppercase font-extrabold text-stone-400 tracking-wider">
                  {t.contactOurAddress}
                </h4>
                <p className="text-sm font-bold text-stone-100">{CAFE_INFO.address}</p>
                <p className="text-xs text-stone-400">{t.contactAddressLandmark}</p>
              </div>
            </div>

            {/* Phone, SMS, WhatsApp & Instagram */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`tel:${CAFE_INFO.phoneClean}`}
                className="p-5 rounded-3xl bg-stone-900 border border-stone-800 hover:border-amber-500/50 flex items-start gap-3.5 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-[11px] uppercase font-extrabold text-stone-400">
                    {t.contactPhone}
                  </h4>
                  <p className="text-xs font-bold text-stone-100">{CAFE_INFO.phone}</p>
                  <span className="text-[10px] text-amber-400 font-semibold">{t.contactFastCall}</span>
                </div>
              </a>

              <a
                href={`https://wa.me/${CAFE_INFO.whatsappClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-3xl bg-stone-900 border border-stone-800 hover:border-emerald-500/50 flex items-start gap-3.5 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-[11px] uppercase font-extrabold text-stone-400">
                    {t.contactWhatsApp}
                  </h4>
                  <p className="text-xs font-bold text-stone-100">{CAFE_INFO.whatsapp}</p>
                  <span className="text-[10px] text-emerald-400 font-semibold">{t.contactOnlineChat}</span>
                </div>
              </a>

              <a
                href={`sms:${CAFE_INFO.smsClean}`}
                className="p-5 rounded-3xl bg-stone-900 border border-stone-800 hover:border-sky-500/50 flex items-start gap-3.5 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center text-sky-400 shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-[11px] uppercase font-extrabold text-stone-400">
                    {t.contactSms}
                  </h4>
                  <p className="text-xs font-bold text-stone-100">{CAFE_INFO.phone}</p>
                  <span className="text-[10px] text-sky-400 font-semibold">{t.contactSendSms}</span>
                </div>
              </a>

              <a
                href={CAFE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-3xl bg-stone-900 border border-stone-800 hover:border-pink-500/50 flex items-start gap-3.5 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-[11px] uppercase font-extrabold text-stone-400">
                    {t.contactInstagram}
                  </h4>
                  <p className="text-xs font-bold text-stone-100">{CAFE_INFO.instagram}</p>
                  <span className="text-[10px] text-pink-400 font-semibold">{t.contactInstagramFollow}</span>
                </div>
              </a>
            </div>

            {/* Working Hours */}
            <div className="p-5 rounded-3xl bg-stone-900 border border-stone-800 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs uppercase font-extrabold text-stone-400 tracking-wider">
                  {t.contactWorkHoursTitle}
                </h4>
                <p className="text-sm font-bold text-stone-100">{t.contactWorkHoursDaily}</p>
                <p className="text-xs text-stone-400">{t.contactKitchenClose}</p>
              </div>
            </div>

          </div>

          {/* Right Direct Message Form */}
          <div className="lg:col-span-6 bg-stone-900 border border-stone-800 p-6 sm:p-8 rounded-3xl space-y-4">
            <div className="space-y-1">
              <h3 className="text-xl font-bold font-serif text-stone-50">
                {t.contactFormTitle}
              </h3>
              <p className="text-xs text-stone-400">
                {t.contactFormSubtitle}
              </p>
            </div>

            {feedbackSent ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-emerald-300">{t.contactFormSuccessTitle}</h4>
                <p className="text-xs text-stone-300">{t.contactFormSuccessDesc}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitFeedback} className="space-y-3.5">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-300">{t.checkoutName}</label>
                  <input
                    type="text"
                    required
                    value={feedbackName}
                    onChange={(e) => setFeedbackName(e.target.value)}
                    placeholder={t.checkoutNamePlaceholder}
                    className="w-full bg-stone-950 border border-stone-800 rounded-2xl px-4 py-3 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-300">{t.checkoutPhone}</label>
                  <input
                    type="tel"
                    required
                    value={feedbackPhone}
                    onChange={(e) => setFeedbackPhone(e.target.value)}
                    placeholder="+996 708 087 608"
                    className="w-full bg-stone-950 border border-stone-800 rounded-2xl px-4 py-3 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-300">{t.contactFormMsgLabel}</label>
                  <textarea
                    rows={3}
                    value={feedbackMessage}
                    onChange={(e) => setFeedbackMessage(e.target.value)}
                    placeholder={t.contactFormMsgPlaceholder}
                    className="w-full bg-stone-950 border border-stone-800 rounded-2xl px-4 py-2.5 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-stone-950 font-extrabold py-3.5 rounded-2xl text-xs sm:text-sm transition-all shadow-xl shadow-amber-500/20 active:scale-98 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.contactFormSubmit}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
