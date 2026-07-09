/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageTransition, FadeIn } from './PageTransition';
import { Sparkles, Heart, Compass, ShieldCheck } from 'lucide-react';

export const AboutView: React.FC = () => {
  return (
    <PageTransition>
      {/* Title Banner */}
      <section className="bg-[#E6DCD6]/30 py-16 px-6 text-center border-b border-black/5">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-mono tracking-[0.3em] text-[#055734] uppercase block mb-3 font-semibold">OUR GENESIS</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">
            The Story of <span className="italic text-[#055734] font-medium">MÈSI Lagos</span>
          </h1>
          <p className="text-sm font-sans text-black/80 leading-relaxed max-w-xl mx-auto font-medium">
            Born out of a desire to create a deliberate pause in Africa’s most ambitious city. MÈSI is a celebration of unhurried mornings and shared twilight tables.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <FadeIn>
            <span className="text-xs font-mono tracking-widest text-[#055734] uppercase block mb-2 font-semibold">THE NAME</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-black tracking-tight mb-4">
              “MÈSI” — An Expression of Intention
            </h2>
            <p className="text-sm font-sans text-black/80 leading-relaxed font-medium">
              Derived loosely from expressions of appreciation and slow elegance, MÈSI represents the social ritual of gathering. It is our promise to make space. Space for long, uninterrupted laughter over steaming shakshuka; space to feel the heavy bass line of a highlife vinyl; space to connect deeply.
            </p>
          </FadeIn>
          <div className="p-1.5 border border-black/5 bg-white rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600" 
              alt="MÈSI Slow Pour Espresso" 
              className="w-full h-80 object-cover rounded-sm grayscale-[10%]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Pillars bento grid */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-widest text-black/40 uppercase block mb-2 font-semibold">OPERATING ETHOS</span>
            <h2 className="font-serif text-3xl font-bold text-black tracking-tight">Our Core Columns</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-stone-50 border border-black/5 p-8 flex flex-col gap-4">
              <Compass className="w-8 h-8 text-[#055734]" />
              <h3 className="font-serif text-lg font-bold text-black">Aesthetic Sincerity</h3>
              <p className="text-xs font-sans text-black/80 leading-relaxed font-medium">
                Our materials are raw and architectural: hand-combed plaster walls, solid ash-wood dining booths, and unvarnished brass fittings that age gracefully over seasons.
              </p>
            </div>
            <div className="bg-stone-50 border border-black/5 p-8 flex flex-col gap-4">
              <Heart className="w-8 h-8 text-[#055734]" />
              <h3 className="font-serif text-lg font-bold text-black">Pristine Sourcing</h3>
              <p className="text-xs font-sans text-black/80 leading-relaxed font-medium">
                We partner with community-centered micro-grocers across Southwest Nigeria. Our heirloom tomatoes, spicy scotch bonnets, and fresh coastal shellfish are harvested under fair wages and organic cycles.
              </p>
            </div>
            <div className="bg-stone-50 border border-black/5 p-8 flex flex-col gap-4">
              <Sparkles className="w-8 h-8 text-[#055734]" />
              <h3 className="font-serif text-lg font-bold text-black">Curated Intimacy</h3>
              <p className="text-xs font-sans text-black/80 leading-relaxed font-medium">
                No buzzing notification terminals, no harsh industrial sirens. Our service is soft-spoken, accommodating individual pacing and unhurried culinary flights.
              </p>
            </div>
          </div>
        </div>

        {/* The Chef Story */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 p-1.5 border border-black/5 bg-white rounded-sm md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600" 
              alt="Culinary Sourcing" 
              className="w-full h-[360px] object-cover rounded-sm grayscale-[15%]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:col-span-7 flex flex-col gap-6 md:order-1">
            <span className="text-xs font-mono tracking-widest text-[#055734] uppercase block font-semibold">THE KITCHEN DIVINITY</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-black tracking-tight">
              Culinary Art with Hand-selected Ingredients
            </h2>
            <p className="text-sm font-sans text-black/80 leading-relaxed font-medium">
              Our culinary division focuses heavily on "Chronos-culinary" progression: adapting recipes based on temperature and local daylight behavior. In the morning, appreciate bright citrus-lime reductions and feather-light croissants. As Lekki cools into dusk, our pans yield rich red-wine reductions, braised oxtail stews, and slow-seared rib lamb chops.
            </p>
            <p className="text-xs font-sans text-[#055734] tracking-wider uppercase font-bold">
              "We cook with patience because we want you to dine with patience."
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
