/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';
import { PageTransition } from './PageTransition';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, ArrowRight } from 'lucide-react';

interface GalleryViewProps {
  setActiveTab: (tab: string) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ setActiveTab }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filters = ['All', 'Ambiance', 'Plating', 'Lifestyle', 'Chef'];

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter(item => item.category === activeFilter.toLowerCase());
  }, [activeFilter]);

  return (
    <PageTransition>
      {/* Editorial Title Banner */}
      <section className="bg-[#E6DCD6]/30 py-16 px-6 text-center border-b border-black/5">
        <div className="max-w-3xl mx-auto">
          <span className="text-[11px] font-mono tracking-[0.3em] text-[#055734] uppercase block mb-3">VISUAL ESSAYS</span>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-black tracking-tight mb-4">
            Atmospheric <span className="italic text-[#055734] font-medium">Gallery</span>
          </h1>
          <p className="text-sm font-serif text-black/60 leading-relaxed max-w-xl mx-auto">
            A slow gaze into MÈSI Lagos. Explore our sun-drenched conservatory, delicate culinary plating techniques, and creative lifestyle moments.
          </p>
        </div>
      </section>

      {/* Grid Controls */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="flex justify-center items-center gap-2 mb-12 overflow-x-auto pb-2 scrollbar-none">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-[11px] font-mono tracking-widest px-5 py-2 border rounded-full uppercase transition-all ${
                activeFilter === filter 
                  ? 'bg-black text-white border-black font-semibold' 
                  : 'border-black/10 text-black/60 hover:border-black/25 bg-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Masonry Columns (Responsive Bento/Flex Grid) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="break-inside-avoid bg-white border border-black/5 p-1.5 rounded-sm relative group cursor-pointer hover:shadow-md transition-shadow duration-300"
              >
                <div className="overflow-hidden bg-stone-100 relative">
                  <img 
                    src={item.url} 
                    alt={item.caption}
                    className="w-full h-auto object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      <Maximize2 className="w-4 h-4 text-black" />
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <span className="text-[9px] font-mono tracking-widest text-[#055734] uppercase font-semibold block mb-1">
                    {item.category}
                  </span>
                  <p className="text-xs font-serif text-black/70 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* HIGH RESOLUTION LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              className="bg-white max-w-4xl w-full border border-white/10 relative z-10 flex flex-col md:flex-row overflow-hidden shadow-2xl"
            >
              {/* Image Pane */}
              <div className="flex-1 max-h-[75vh] md:max-h-[85vh] bg-stone-950 flex items-center justify-center overflow-hidden">
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.caption}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Detail Pane */}
              <div className="w-full md:w-80 p-8 flex flex-col justify-between bg-white shrink-0 border-t md:border-t-0 md:border-l border-black/10">
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-center border-b border-black/5 pb-4">
                    <span className="text-[10px] font-mono tracking-widest text-[#055734] font-semibold uppercase">
                      CAT: {selectedImage.category}
                    </span>
                    <button 
                      onClick={() => setSelectedImage(null)}
                      className="p-1.5 text-black hover:text-[#055734] border border-black/10 hover:border-black/20"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-sm font-serif text-black/85 leading-relaxed italic">
                    “{selectedImage.caption}”
                  </p>

                  <p className="text-xs font-serif text-black/50 leading-relaxed">
                    This photographic essay documents the unhurried rituals that formulate our daily service loop in Lekki Phase 1, Lagos.
                  </p>
                </div>

                <div className="pt-6 border-t border-black/5 flex flex-col gap-3">
                  <button
                    onClick={() => {
                      setSelectedImage(null);
                      setActiveTab('reservations');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full bg-[#055734] text-white hover:bg-black py-3 text-center text-xs font-mono tracking-widest uppercase font-semibold flex items-center justify-center gap-1.5"
                  >
                    <span>RESERVE TABLE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="w-full border border-black/25 text-black hover:border-black py-3 text-center text-xs font-mono tracking-widest uppercase"
                  >
                    RETURN TO GALLERY
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};
