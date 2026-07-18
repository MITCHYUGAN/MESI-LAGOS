/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X, Minus, Plus, ArrowRight, MessageCircle } from 'lucide-react';
import { MenuItem } from '../types';

interface TableDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedItems: { item: MenuItem; quantity: number; selectedOption?: string }[];
  addToFeast: (item: MenuItem, option?: string) => void;
  removeFromFeast: (item: MenuItem, option?: string) => void;
  clearItemFromFeast: (itemId: string, option?: string) => void;
  feastTotal: number;
  onContinueToReservation: () => void;
  onInquireWhatsApp: () => void;
}

export const TableDrawer: React.FC<TableDrawerProps> = ({
  isOpen,
  onClose,
  preSelectedItems,
  addToFeast,
  removeFromFeast,
  clearItemFromFeast,
  feastTotal,
  onContinueToReservation,
  onInquireWhatsApp
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/65 backdrop-blur-sm"
          />
          
          {/* Drawer Body */}
          <div className="absolute inset-y-0 right-0 max-w-lg w-full flex">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
              className="w-full bg-white border-l border-black/10 shadow-2xl flex flex-col justify-between"
            >
              {/* Header */}
              <div className="p-6 border-b border-black/10 flex justify-between items-center bg-[#E6DCD6]/30">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#055734]" />
                  <span className="font-serif text-lg font-bold text-black tracking-tight">My Table ⭐</span>
                </div>
                <button 
                  onClick={onClose}
                  className="text-black/60 hover:text-black font-mono text-[10px] tracking-widest border border-black/15 px-2.5 py-1 transition-colors"
                >
                  CLOSE
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6">
                {preSelectedItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center px-4">
                    <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center mb-4 border border-black/5">
                      <ShoppingBag className="w-5 h-5 text-black/35" />
                    </div>
                    <h3 className="font-serif text-base font-semibold text-black mb-2">Your Table is Unselected</h3>
                    <p className="text-xs font-serif text-black/50 leading-relaxed max-w-xs">
                      Explore our digital menu, select exquisite dishes, and attach them here to curate your premium dining experience.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {preSelectedItems.map((p, idx) => (
                      <div key={`${p.item.id}-${p.selectedOption || idx}`} className="flex justify-between items-start gap-4 pb-6 border-b border-black/5 last:border-0 last:pb-0">
                        <div className="flex-1">
                          <h4 className="font-serif text-sm font-semibold text-black">{p.item.name}</h4>
                          {p.selectedOption && (
                            <span className="inline-block mt-1 text-[9px] font-mono tracking-widest text-[#055734] bg-[#E6DCD6]/30 px-2 py-0.5 rounded-sm">
                              OPTION: {p.selectedOption}
                            </span>
                          )}
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-[10px] font-mono text-black/50">₦{p.item.price.toLocaleString()} each</span>
                            <span className="text-[10px] font-mono text-black/30">•</span>
                            <span className="text-[10px] font-mono text-[#055734] font-semibold">₦{(p.item.price * p.quantity).toLocaleString()} total</span>
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-2 shrink-0">
                          <div className="flex items-center bg-stone-100 rounded-sm px-1.5 py-0.5 border border-black/5">
                            <button
                              onClick={() => removeFromFeast(p.item, p.selectedOption)}
                              className="p-1 text-black/50 hover:text-black transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-mono text-xs font-semibold px-2 min-w-[16px] text-center">{p.quantity}</span>
                            <button
                              onClick={() => addToFeast(p.item, p.selectedOption)}
                              className="p-1 text-black/50 hover:text-black transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => clearItemFromFeast(p.item.id, p.selectedOption)}
                            className="text-[10px] font-mono text-red-500 hover:underline tracking-wider"
                          >
                            REMOVE
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer Controls */}
              {preSelectedItems.length > 0 && (
                <div className="p-6 border-t border-black/10 bg-stone-50 flex flex-col gap-4">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-black/50 tracking-wider">TOTAL ESTIMATED SUM</span>
                    <span className="text-lg font-bold text-[#055734] font-mono">₦{feastTotal.toLocaleString()}</span>
                  </div>

                  <p className="text-[11px] font-serif text-black/50 leading-relaxed italic">
                    Attach this selection to your table reservation. Our kitchen will note your preferences, making your arrival seamless.
                  </p>

                  <div className="flex flex-col gap-2 mt-2">
                    <button
                      onClick={onContinueToReservation}
                      className="w-full bg-[#055734] text-white hover:bg-black py-4 text-center text-xs font-mono tracking-widest uppercase font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <span>ATTACH TO RESERVATION</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={onInquireWhatsApp}
                      className="w-full border border-black/35 hover:border-black text-black py-4 text-center text-xs font-mono tracking-widest uppercase flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-[#055734]" />
                      <span>INQUIRE VIA WHATSAPP CONCIERGE</span>
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
