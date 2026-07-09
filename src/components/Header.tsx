/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'The Menu' },
    { id: 'reservations', label: 'Reservations' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'private-dining', label: 'Private Dining' },
    { id: 'about', label: 'Our Story' },
    { id: 'journal', label: 'Journal' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Editorial Announcement Bar */}
      <div className="w-full bg-[#E6DCD6] text-[#055734] py-2.5 px-6 text-center text-xs font-mono tracking-[0.15em] uppercase border-b border-black/5 flex justify-center items-center gap-2 font-medium">
        <span>SLOW SOCIAL DINING IN LEKKI PHASE 1</span>
        <span className="hidden sm:inline">•</span>
        <span className="hidden sm:inline">RESERVATIONS NOW OPEN FOR JULY</span>
      </div>

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/5 w-full">
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between gap-4">
          
          {/* Top Left Brand Logotype */}
          <button 
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')} 
            className="flex flex-col items-start justify-center cursor-pointer group shrink-0"
          >
            <span className="font-serif text-2xl md:text-3xl tracking-[0.15em] text-black font-bold leading-none group-hover:text-[#055734] transition-colors duration-300">
              MÈSI
            </span>
            <span className="text-[9px] font-mono tracking-[0.25em] text-black/40 uppercase mt-1 leading-none group-hover:text-[#9DA79A] transition-colors duration-300">
              LAGOS
            </span>
          </button>

          {/* Right Navigation Group (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <nav className="flex items-center gap-3.5 xl:gap-5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`nav-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-[13px] font-sans tracking-wide transition-colors duration-300 relative py-2 ${
                    activeTab === link.id 
                      ? 'text-[#055734] font-semibold' 
                      : 'text-black/70 hover:text-black font-medium'
                  }`}
                >
                  {link.label}
                  {activeTab === link.id && (
                    <motion.div 
                      layoutId="header-active-pill" 
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#055734]" 
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>
            
            <button
              id="cta-reserve"
              onClick={() => handleNavClick('reservations')}
              className="ml-2 bg-[#055734] text-white hover:bg-black px-4 py-2.5 text-xs font-mono tracking-wider uppercase transition-all duration-300 flex items-center gap-1 border border-[#055734] hover:shadow-sm font-semibold"
            >
              <span>RESERVE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              id="mobile-nav-contact"
              onClick={() => handleNavClick('contact')}
              className="text-[10px] font-mono tracking-[0.15em] border-b border-black/20 pb-0.5"
            >
              LOCATE
            </button>
            <button
              id="mobile-nav-reserve"
              onClick={() => handleNavClick('reservations')}
              className="bg-[#055734] text-white px-3 py-1.5 text-[10px] font-mono tracking-[0.15em] uppercase font-semibold"
            >
              RESERVE
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-black p-1 hover:text-[#055734] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[112px] z-40 bg-white border-t border-black/5 flex flex-col justify-between overflow-y-auto"
          >
            <div className="px-8 py-10 flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left text-lg font-serif tracking-widest py-2 border-b border-black/5 flex items-center justify-between ${
                    activeTab === link.id ? 'text-[#055734] font-medium' : 'text-black/80'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className={`w-4 h-4 opacity-40 ${activeTab === link.id ? 'text-[#055734] opacity-100' : ''}`} />
                </button>
              ))}
            </div>

            <div className="bg-[#E6DCD6] p-8 border-t border-black/10 flex flex-col gap-4">
              <span className="text-[10px] font-mono tracking-widest text-black/50">MÈSI LAGOS ALL DAY SOCIAL DINING</span>
              <p className="text-xs text-black/70 leading-relaxed font-serif">
                5 Ayinde Akinmade St, Lekki Phase 1, Lagos
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a 
                  href="https://wa.me/2349159999368"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#055734] text-white px-5 py-3 text-center text-xs font-mono tracking-widest uppercase flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Concierge</span>
                </a>
                <a 
                  href="tel:+2349159999368"
                  className="border border-[#055734] text-[#055734] px-5 py-3 text-center text-xs font-mono tracking-widest uppercase"
                >
                  Call +234 915 999 9368
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
