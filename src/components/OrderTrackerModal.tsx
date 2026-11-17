import React, { useState } from 'react';
import { X, Search, CheckCircle2, ChefHat, Bike, Clock, PackageCheck, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { Order, OrderStatus } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface OrderTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
  orders: Order[];
  initialOrderId?: string;
}

export const OrderTrackerModal: React.FC<OrderTrackerModalProps> = ({
  isOpen,
  onClose,
  orders,
  initialOrderId,
}) => {
  const { t, getDishName, formatPrice } = useLanguage();
  const [searchId, setSearchId] = useState(initialOrderId || '');
  const [activeOrder, setActiveOrder] = useState<Order | null>(() => {
    if (initialOrderId) {
      return orders.find((o) => o.id === initialOrderId) || orders[0] || null;
    }
    return orders[0] || null;
  });

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchId.trim().toUpperCase();
    const found = orders.find((o) => o.id.toUpperCase() === query || o.phone.includes(query));
    if (found) {
      setActiveOrder(found);
    }
  };

  const steps: { status: OrderStatus; label: string; desc: string; icon: React.ReactNode }[] = [
    {
      status: 'pending',
      label: t.trackerStep1,
      desc: t.trackerStep1Desc,
      icon: <Clock className="w-5 h-5" />,
    },
    {
      status: 'cooking',
      label: t.trackerStep2,
      desc: t.trackerStep2Desc,
      icon: <ChefHat className="w-5 h-5" />,
    },
    {
      status: 'delivering',
      label: t.trackerStep3,
      desc: t.trackerStep3Desc,
      icon: <Bike className="w-5 h-5" />,
    },
    {
      status: 'completed',
      label: t.trackerStep4,
      desc: t.trackerStep4Desc,
      icon: <PackageCheck className="w-5 h-5" />,
    },
  ];

  const getStepIndex = (status: OrderStatus) => {
    switch (status) {
      case 'pending': return 0;
      case 'cooking': return 1;
      case 'delivering': return 2;
      case 'completed': return 3;
      default: return 0;
    }
  };

  const currentStepIndex = activeOrder ? getStepIndex(activeOrder.status) : 0;

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
          <div>
            <h2 className="text-xl font-bold font-serif text-stone-50">{t.trackerTitle}</h2>
            <p className="text-xs text-stone-400">{t.trackerSubtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-xl hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Search bar for order ID */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder={t.trackerInputPlaceholder}
                className="w-full bg-stone-950 border border-stone-800 rounded-2xl pl-10 pr-4 py-3 text-xs sm:text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500 uppercase font-mono"
              />
            </div>
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-5 rounded-2xl text-xs transition-colors cursor-pointer"
            >
              {t.trackerSearchBtn}
            </button>
          </form>

          {/* Active Order Details */}
          {activeOrder ? (
            <div className="space-y-6">
              
              {/* Order quick metadata badge */}
              <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-stone-400">{t.successOrderNumber}</span>
                  <div className="text-base font-black text-amber-400 font-mono">{activeOrder.id}</div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-stone-400">{t.checkoutFinalTotal}</span>
                  <div className="text-base font-extrabold text-stone-100 font-serif">
                    {formatPrice(activeOrder.totalAmount)}
                  </div>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="space-y-4 pt-2">
                <h3 className="text-xs uppercase font-extrabold tracking-wider text-stone-400">
                  {t.trackerOrderProgress}
                </h3>

                <div className="space-y-4 relative before:absolute before:top-3 before:bottom-3 before:left-5 before:w-0.5 before:bg-stone-800">
                  {steps.map((step, idx) => {
                    const isDone = idx <= currentStepIndex;
                    const isCurrent = idx === currentStepIndex;

                    return (
                      <div key={step.status} className="relative flex items-start gap-4">
                        <div
                          className={`relative z-10 w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
                            isCurrent
                              ? 'bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/30 scale-110 font-bold'
                              : isDone
                              ? 'bg-emerald-500 text-stone-950'
                              : 'bg-stone-800 text-stone-500 border border-stone-700'
                          }`}
                        >
                          {isDone && !isCurrent ? <CheckCircle2 className="w-5 h-5 stroke-[2.5]" /> : step.icon}
                        </div>

                        <div className="flex-1 pt-1">
                          <div className="flex items-center justify-between">
                            <h4
                              className={`text-sm font-bold ${
                                isCurrent
                                  ? 'text-amber-400 font-serif'
                                  : isDone
                                  ? 'text-stone-100'
                                  : 'text-stone-500'
                              }`}
                            >
                              {step.label}
                            </h4>
                            {isCurrent && (
                              <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded-full font-bold animate-pulse">
                                {t.trackerCurrent}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-stone-400 mt-0.5">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Items in this order */}
              <div className="p-4 rounded-2xl bg-stone-950/60 border border-stone-800 space-y-2 text-xs">
                <span className="font-bold text-stone-300">{t.dishComposition}:</span>
                <div className="space-y-1 text-stone-400">
                  {activeOrder.items.map((it) => (
                    <div key={it.dish.id} className="flex justify-between">
                      <span>• {getDishName(it.dish)} x{it.quantity}</span>
                      <span className="font-medium text-stone-200">{formatPrice(it.dish.price * it.quantity)}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ) : (
            <div className="p-8 text-center space-y-2 bg-stone-950/50 rounded-2xl border border-stone-800">
              <AlertCircle className="w-8 h-8 text-stone-600 mx-auto" />
              <p className="text-xs text-stone-400">
                {t.trackerNotFound}
              </p>
            </div>
          )}

          {/* Quick List of Recent Orders */}
          {orders.length > 1 && (
            <div className="space-y-2 pt-2 border-t border-stone-800">
              <span className="text-xs font-bold text-stone-400">{t.trackerRecentOrders}:</span>
              <div className="flex flex-wrap gap-2">
                {orders.map((o) => (
                  <button
                    key={o.id}
                    onClick={() => {
                      setActiveOrder(o);
                      setSearchId(o.id);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-colors cursor-pointer ${
                      activeOrder?.id === o.id
                        ? 'bg-amber-500 text-stone-950'
                        : 'bg-stone-950 text-stone-400 hover:text-white border border-stone-800'
                    }`}
                  >
                    {o.id}
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>
      </motion.div>
    </div>
  );
};
