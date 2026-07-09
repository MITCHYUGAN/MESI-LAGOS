/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, Instagram, Phone, MessageSquare, MapPin, Check } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 2000);
    }
  };

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-black/10 text-black pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-black/10">
          
          {/* Brand Philosophy column */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-[0.35em] text-black font-semibold">MÈSI</span>
              <span className="text-[9px] font-mono tracking-[0.5em] text-black/40 uppercase mt-1">LAGOS</span>
            </div>
            <p className="text-sm font-serif text-black/60 leading-relaxed max-w-sm">
              All Day Social Dining designed for slow mornings, long lunches, candlelit dinner dates, and curated acoustic rhythms. In Lekki Phase 1, we make space to slow down.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a 
                href="https://www.instagram.com/mesilagos/" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-black/60 hover:text-[#055734] hover:border-[#055734] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/2349159999368" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-black/60 hover:text-[#055734] hover:border-[#055734] transition-all"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-5">
            <span className="text-[11px] font-mono tracking-[0.25em] text-black/40 uppercase">EXPERIENCES</span>
            <div className="flex flex-col gap-3">
              {[
                { id: 'menu', label: 'THE MENU' },
                { id: 'reservations', label: 'BOOK A TABLE' },
                { id: 'experiences', label: 'OUR SOCIAL CALENDAR' },
                { id: 'private-dining', label: 'PRIVATE EVENTS' },
                { id: 'about', label: 'OUR PHILOSOPHY' },
                { id: 'journal', label: 'THE JOURNAL' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-left text-sm font-serif text-black/75 hover:text-[#055734] transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Location & Hours Column */}
          <div className="flex flex-col gap-5">
            <span className="text-[11px] font-mono tracking-[0.25em] text-black/40 uppercase">LOCATION & HOURS</span>
            <div className="flex flex-col gap-4 text-sm font-serif text-black/70 leading-relaxed">
              <div className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-[#055734] mt-0.5 shrink-0" />
                <span>5 Ayinde Akinmade St, Lekki Phase 1, Lagos, Nigeria</span>
              </div>
              <div className="flex gap-2.5 items-start">
                <Phone className="w-4 h-4 text-[#055734] mt-0.5 shrink-0" />
                <a href="tel:+2349159999368" className="hover:text-[#055734] transition-colors">+234 915 999 9368</a>
              </div>
              <div className="border-t border-black/5 pt-3 mt-1">
                <p className="font-mono text-[10px] tracking-widest text-black/50 mb-1.5">OPENING HOURS</p>
                <div className="grid grid-cols-2 gap-1 font-sans text-xs">
                  <span>Monday</span>
                  <span className="text-black/50 text-right">Closed</span>
                  <span>Tue — Thu</span>
                  <span className="text-right">09:00 AM — 10:00 PM</span>
                  <span>Fri — Sun</span>
                  <span className="text-right">09:00 AM — 11:30 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col gap-5">
            <span className="text-[11px] font-mono tracking-[0.25em] text-black/40 uppercase">SLOW LIVING JOURNAL</span>
            <p className="text-sm font-serif text-black/60 leading-relaxed">
              Subscribe to receive curated guides on slow living, sensory pairings, secret menu tasting events, and chef notes.
            </p>
            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR EMAIL"
                className="w-full bg-transparent border-b border-black/35 pb-2 text-sm font-mono focus:outline-none focus:border-[#055734] transition-colors pr-10 uppercase placeholder:text-black/30 text-black"
              />
              <button
                type="submit"
                className="absolute right-0 bottom-2 text-black hover:text-[#055734] transition-colors"
                aria-label="Subscribe"
                disabled={subscribed}
              >
                {subscribed ? <Check className="w-4 h-4 text-[#055734]" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
            {subscribed && (
              <p className="text-xs font-mono text-[#055734] tracking-wider uppercase transition-opacity duration-300">
                Welcome to MÈSI Circle.
              </p>
            )}
          </div>

        </div>

        {/* Footer Sub-Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-mono tracking-widest text-black/40">
          <span>© {new Date().getFullYear()} MÈSI LAGOS. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-6">
            <button onClick={() => handleNavClick('about')} className="hover:text-[#055734] transition-colors">PHILOSOPHY</button>
            <button onClick={() => handleNavClick('contact')} className="hover:text-[#055734] transition-colors">DIRECTIONS</button>
            <button onClick={() => handleNavClick('reservations')} className="hover:text-[#055734] transition-colors">RESERVATIONS</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
