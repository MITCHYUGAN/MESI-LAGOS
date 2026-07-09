/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, ArrowRight, Music, Sunrise, Sun, ShieldCheck } from 'lucide-react';
import { EXPERIENCES } from '../data';
import { PageTransition, FadeIn } from './PageTransition';

interface ExperiencesViewProps {
  setActiveTab: (tab: string) => void;
}

export const ExperiencesView: React.FC<ExperiencesViewProps> = ({ setActiveTab }) => {
  const icons = [
    <Sunrise className="w-5 h-5 text-[#055734]" />,
    <Sparkles className="w-5 h-5 text-[#055734]" />,
    <Sun className="w-5 h-5 text-[#055734]" />,
    <Music className="w-5 h-5 text-[#055734]" />
  ];

  return (
    <PageTransition>
      {/* Editorial Title Banner */}
      <section className="bg-[#E6DCD6]/30 py-16 px-6 text-center border-b border-black/5">
        <div className="max-w-3xl mx-auto">
          <span className="text-[11px] font-mono tracking-[0.3em] text-[#055734] uppercase block mb-3">SOCIAL RITUALS</span>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-black tracking-tight mb-4">
            Curated <span className="italic text-[#055734] font-medium">Dining Chapters</span>
          </h1>
          <p className="text-sm font-serif text-black/60 leading-relaxed max-w-xl mx-auto">
            At MÈSI, we operate in circadian rhythms. Every segment of the day is customized with a specific acoustic level, lighting balance, and culinary pace.
          </p>
        </div>
      </section>

      {/* Chapters Detailed Showcase */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-24">
          {EXPERIENCES.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <FadeIn key={exp.id}>
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}>
                  
                  {/* Left or Right Image (Alternate layouts) */}
                  <div className={`lg:col-span-6 overflow-hidden bg-stone-100 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}>
                    <div className="h-[400px] overflow-hidden group border border-black/5 p-1.5 bg-white">
                      <img 
                        src={exp.image} 
                        alt={exp.title}
                        className="w-full h-full object-cover grayscale-[10%] group-hover:scale-102 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Editorial Copy */}
                  <div className={`lg:col-span-6 flex flex-col gap-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#E6DCD6]/40 flex items-center justify-center rounded-full">
                        {icons[index % icons.length]}
                      </div>
                      <span className="text-[11px] font-mono tracking-[0.25em] text-[#055734] uppercase">
                        {exp.subtitle}
                      </span>
                    </div>

                    <h2 className="font-serif text-3xl md:text-4xl font-light text-black tracking-tight">
                      {exp.title}
                    </h2>

                    <div className="h-[1.5px] w-16 bg-[#055734]/30" />

                    <p className="text-sm md:text-base font-serif text-black/60 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="grid grid-cols-2 gap-6 bg-[#E6DCD6]/10 border border-black/5 p-5 mt-2 rounded-sm text-xs">
                      <div>
                        <span className="font-mono text-[9px] text-black/40 tracking-widest block uppercase mb-1">RECOMMENDED HOUR</span>
                        <span className="font-serif font-bold text-black">{exp.timeSlot}</span>
                      </div>
                      <div>
                        <span className="font-mono text-[9px] text-black/40 tracking-widest block uppercase mb-1">DRESS CODE</span>
                        <span className="font-serif font-bold text-[#055734]">Smart Editorial</span>
                      </div>
                    </div>

                    <div className="flex gap-4 mt-4">
                      <button
                        onClick={() => {
                          setActiveTab('reservations');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="bg-[#055734] text-white hover:bg-black px-6 py-3.5 text-xs font-mono tracking-widest uppercase transition-colors flex items-center gap-2"
                      >
                        <span>BOOK THIS CHAPTER</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* Acoustic & Atmosphere highlight section */}
      <section className="bg-[#E6DCD6]/20 py-20 px-6 border-t border-b border-black/5 text-center">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="inline-flex items-center gap-2 mb-4 font-mono text-[10px] tracking-widest text-[#055734]">
              <Music className="w-4 h-4 animate-bounce" />
              <span>SOUNDSCAPE CURATION</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-black tracking-tight mb-6">
              Vibration and Acoustic Integrity
            </h2>
            <p className="text-sm font-serif text-black/60 leading-relaxed max-w-2xl mx-auto mb-8">
              At MÈSI, music is not background noise. We partner with acoustic designers and African vinyl curators to coordinate low-frequency soundscapes. In the morning, appreciate warm acoustic jazz; at sunset, we slowly ease into ambient deep soul and atmospheric Afro-lounge.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left font-serif text-xs">
              <div className="p-4 bg-white border border-black/5">
                <p className="font-mono text-[9px] text-black/40 tracking-widest mb-1">MORNING SESSION</p>
                <p className="font-semibold text-black">Acoustic, Soft Bossa, Lo-fi Soul</p>
              </div>
              <div className="p-4 bg-white border border-black/5">
                <p className="font-mono text-[9px] text-black/40 tracking-widest mb-1">AFTERNOON SESSION</p>
                <p className="font-semibold text-black">Retro Highlife, Vocal Jazz, Dub</p>
              </div>
              <div className="p-4 bg-white border border-black/5">
                <p className="font-semibold text-black">Deep Ambient House, Afro-Vibe</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
};
