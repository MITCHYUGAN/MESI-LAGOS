/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Clock, MapPin, Sparkles, Quote, Calendar, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { EXPERIENCES, MENU_ITEMS, TESTIMONIALS } from '../data';
import { FadeIn, PageTransition } from './PageTransition';

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setActiveTab }) => {
  // Highlight a few key items
  const featuredItems = MENU_ITEMS.filter(item => 
    item.tags?.includes('Signature') || 
    item.tags?.includes('Chef Special') || 
    item.tags?.includes('Guest Favorite')
  ).slice(0, 3);

  const handleNav = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PageTransition>
      {/* 1. HERO SECTION (Editorial Layout with beautiful offset margins) */}
      <section id="home-hero" className="relative bg-white min-h-[85vh] flex items-center pt-8 pb-16 px-6 overflow-hidden border-b border-black/5">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Text */}
          <div className="lg:col-span-6 flex flex-col justify-center z-10">
            <div className="inline-flex items-center gap-2 mb-6 font-mono text-[10px] tracking-[0.3em] uppercase text-[#055734] bg-[#E6DCD6] px-3.5 py-1.5 self-start">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>LEKKI PHASE 1, LAGOS</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl font-bold text-black tracking-tight leading-[1.05] mb-6">
              A sanctuary for <br />
              <span className="italic text-[#055734] font-medium">slow social dining</span>.
            </h1>
            
            <p className="text-base md:text-lg font-sans text-black/80 leading-relaxed max-w-lg mb-8 font-medium">
              MÈSI Lagos is an editorial social house designed for slow sunlit mornings, long power lunches, cozy candlelit dinner dates, and curated acoustic rhythms.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-reserve-btn"
                onClick={() => handleNav('reservations')}
                className="bg-[#055734] text-white hover:bg-[#055734]/90 px-8 py-4 text-xs font-mono tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 border border-[#055734] hover:shadow-md"
              >
                <span>BOOK A TABLE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="hero-menu-btn"
                onClick={() => handleNav('menu')}
                className="border border-black/25 text-black hover:border-[#055734] hover:text-[#055734] px-8 py-4 text-xs font-mono tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>EXPLORE MENU</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Micro Status Line */}
            <div className="mt-12 pt-8 border-t border-black/5 grid grid-cols-2 gap-6 text-[11px] font-mono tracking-widest text-black/50">
              <div className="flex gap-2 items-center">
                <Clock className="w-4 h-4 text-[#055734]" />
                <span>OPEN TUE — SUN, 9AM — LATE</span>
              </div>
              <div className="flex gap-2 items-center">
                <MapPin className="w-4 h-4 text-[#055734]" />
                <span>5 AYINDE AKINMADE ST</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Asset (Luxury Collage) */}
          <div className="lg:col-span-6 relative w-full h-[50vh] md:h-[65vh] flex justify-center items-center">
            {/* Main Image Block */}
            <div className="absolute inset-0 w-[85%] h-[85%] border border-black/5 bg-[#E6DCD6] p-2 rotate-[-2deg] shadow-lg transition-transform hover:rotate-0 duration-700">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200"
                alt="MÈSI Lagos Atmosphere"
                className="w-full h-full object-cover grayscale-[15%] brightness-[95%] hover:scale-[1.02] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Small Floating Dessert Image */}
            <div className="absolute right-[-10px] bottom-4 w-[45%] h-[45%] border border-black/5 bg-white p-1.5 rotate-[6deg] shadow-xl hidden sm:block">
              <img 
                src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600"
                alt="Slow Coffee Brew"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. THE PHILOSOPHY (Beautiful Quote and Editorial Copy) */}
      <section className="py-24 bg-white px-6 border-b border-black/5">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="text-xs font-mono tracking-[0.3em] text-[#055734] uppercase mb-4 block font-semibold">THE PHILOSOPHY</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-black tracking-tight leading-tight mb-8">
              “True luxury in modern Lagos isn’t just about fine ingredients—it’s about <span className="italic font-medium text-[#055734]">time itself</span>.”
            </h2>
            <div className="h-[1px] w-24 bg-[#9DA79A] mx-auto mb-8" />
            <p className="text-base md:text-lg font-sans text-black/80 leading-relaxed max-w-2xl mx-auto font-medium">
              We live in a beautiful, relentless, high-velocity city. MÈSI Lagos was designed as an architectural pause. A sun-drenched sanctuary of double-height glass conservatory roofing, hand-woven lounge seating, and sensory menus where every dish has space to breathe. Here, you are invited to linger.
            </p>
            <button
              onClick={() => handleNav('about')}
              className="mt-8 inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#055734] font-semibold border-b border-[#055734] pb-1 hover:text-black hover:border-black transition-colors"
            >
              READ OUR BRAND STORY
            </button>
          </FadeIn>
        </div>
      </section>

      {/* 3. EXPERIENCES / THE SOCIAL CALENDAR (Bento Style Grid) */}
      <section className="py-24 bg-[#E6DCD6]/30 px-6 border-b border-black/5">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <span className="text-xs font-mono tracking-[0.3em] text-[#055734] uppercase mb-2 block font-semibold">CURATED RITUALS</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-black">
                The Rhythm of <span className="italic text-[#055734] font-medium">MÈSI Lagos</span>
              </h2>
            </div>
            <button
              onClick={() => handleNav('experiences')}
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-black font-semibold border-b border-black pb-1 hover:text-[#055734] hover:border-[#055734] transition-colors"
            >
              VIEW SOCIAL CALENDAR
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPERIENCES.map((exp, index) => (
              <FadeIn key={exp.id} delay={index * 0.1}>
                <div 
                  onClick={() => handleNav('experiences')}
                  className="group bg-white border border-black/5 overflow-hidden flex flex-col justify-between h-[450px] cursor-pointer hover:shadow-md transition-all duration-500"
                >
                  <div className="relative h-[220px] overflow-hidden">
                    <img 
                      src={exp.image} 
                      alt={exp.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[9px] font-mono tracking-widest text-black uppercase">
                      {exp.timeSlot.includes('Saturday') ? 'WEEKEND' : 'DAILY'}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono tracking-[0.2em] text-[#055734] uppercase block mb-1">
                        {exp.subtitle}
                      </span>
                      <h3 className="font-serif text-xl font-medium text-black tracking-tight mb-2 group-hover:text-[#055734] transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-xs font-serif text-black/60 leading-relaxed line-clamp-4">
                        {exp.description}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-black/5 flex items-center justify-between text-[10px] font-mono tracking-widest text-black/50">
                      <span>{exp.timeSlot}</span>
                      <ArrowRight className="w-4 h-4 text-[#055734] group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {/* 4. THE EDITORIAL PREVIEW MENU (Luxurious Slider) */}
      <section className="py-24 bg-white px-6 border-b border-black/5">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono tracking-[0.3em] text-[#055734] uppercase mb-2 block font-semibold">SIGNATURE GASTRONOMY</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-black mb-6">
                Culinary art made for <br />
                <span className="italic text-[#055734] font-medium">unhurried plates</span>
              </h2>
              <p className="text-sm font-sans text-black/80 leading-relaxed mb-6 font-medium">
                Our kitchen balances traditional French culinary technique with the vibrant seasonal pantry of Lekki and coastal West Africa. From slow-simmered rich stews to delicate, hand-rolled pastas and cold-pressed elixirs.
              </p>
              <button
                onClick={() => handleNav('menu')}
                className="bg-[#055734] text-white hover:bg-[#055734]/90 px-6 py-3.5 text-xs font-mono tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-2"
              >
                <span>EXPLORE FULL MENU</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Featured Plates Preview Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredItems.map((item, index) => (
                <FadeIn key={item.id} delay={index * 0.15}>
                  <div 
                    onClick={() => handleNav('menu')}
                    className="bg-[#E6DCD6]/20 border border-black/5 p-6 flex flex-col justify-between h-[360px] cursor-pointer hover:bg-[#E6DCD6]/30 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags?.map(t => (
                          <span key={t} className="bg-[#055734] text-white text-[8px] font-mono tracking-widest px-2 py-0.5 uppercase">
                            {t}
                          </span>
                        ))}
                      </div>
                      <span className="font-mono text-sm text-[#055734] font-semibold">₦{item.price.toLocaleString()}</span>
                    </div>

                    <div className="my-6">
                      <h3 className="font-serif text-lg font-medium text-black tracking-tight mb-2">
                        {item.name}
                      </h3>
                      <p className="text-xs font-serif text-black/60 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-black/5 flex justify-between items-center text-[10px] font-mono tracking-widest text-black/40">
                      <span>PRE-SELECT AVAILABLE</span>
                      <span className="text-[#055734] hover:underline flex items-center gap-0.5">ADD TO FEAST <ArrowUpRight className="w-3 h-3" /></span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. GUEST REVIEWS (Elegant slider cards) */}
      <section className="py-24 bg-[#E6DCD6]/25 px-6 border-b border-black/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono tracking-[0.3em] text-[#055734] uppercase mb-2 block font-semibold">REVIEWS</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-black">
              What the guests say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <FadeIn key={t.id} delay={idx * 0.1}>
                <div className="bg-white border border-black/5 p-8 flex flex-col justify-between h-full relative">
                  <Quote className="absolute right-6 top-6 w-8 h-8 text-[#055734]/10" />
                  <div>
                    <div className="flex gap-1 text-[#055734] mb-4">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <span key={i} className="text-sm">★</span>
                      ))}
                    </div>
                    <p className="text-sm font-serif text-black/75 leading-relaxed italic mb-6">
                      “{t.quote}”
                    </p>
                  </div>
                  <div className="pt-4 border-t border-black/5">
                    <p className="font-serif text-sm font-semibold text-black leading-none">{t.name}</p>
                    <p className="font-mono text-[9px] tracking-widest text-black/40 mt-1.5 uppercase">{t.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RESERVATIONS TEASER */}
      <section className="py-28 bg-white px-6 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-[#E6DCD6]/20 blur-3xl -z-10" />
        
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="text-xs font-mono tracking-[0.3em] text-[#055734] uppercase mb-4 block font-semibold">TABLE BOOKINGS</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
              Create a memory with <span className="italic text-[#055734] font-medium">MÈSI</span>
            </h2>
            <p className="text-sm md:text-base font-sans text-black/80 leading-relaxed max-w-xl mx-auto mb-8 font-medium">
              We recommend reserving your table in advance, particularly for our glass-roof conservatory weekend brunches and intimate candlelight dinners.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={() => handleNav('reservations')}
                className="bg-[#055734] text-white hover:bg-[#055734]/90 px-8 py-4 text-xs font-mono tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK RESERVATION</span>
              </button>
              <a
                href="https://wa.me/2349159999368"
                target="_blank"
                rel="noreferrer"
                className="border border-black/25 text-black hover:border-[#055734] hover:text-[#055734] px-8 py-4 text-xs font-mono tracking-[0.2em] uppercase transition-all duration-300"
              >
                WHATSAPP CONCIERGE
              </a>
            </div>
            <p className="text-[11px] font-mono tracking-widest text-black/40 mt-6 uppercase">
              NO RESERVATION FEE • CANCEL UP TO 2 HOURS PRIOR
            </p>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
};
