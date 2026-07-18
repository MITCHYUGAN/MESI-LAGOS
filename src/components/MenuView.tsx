/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, ShoppingBag, Plus, Minus, Check, ArrowRight, MessageCircle, SlidersHorizontal, Info, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';
import { PageTransition } from './PageTransition';

const CATEGORY_IMAGES: Record<string, string> = {
  'Breakfast': 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=1000',
  'Brunch': 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=1000',
  'Light Bites': 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=1000',
  'Pasta': 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=1000',
  'Burgers': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1000',
  'Salads': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000',
  'Mains': 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000',
  'Dessert': 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=1000',
  'Drinks': 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=1000',
};

const CATEGORY_TAGLINES: Record<string, string> = {
  'Breakfast': 'Slow, sunlit morning plates designed for lingering conversation.',
  'Brunch': 'Indulgent mid-day plates, fresh pastries, and social Lekki rhythms.',
  'Light Bites': 'Crispy appetizers and coastal-inspired small plates to share.',
  'Pasta': 'Hand-crafted pastas folded in rich, deeply flavored reductions.',
  'Burgers': 'Seasoned gourmet patties seared over open-flame grills.',
  'Salads': 'Crisp, refreshing harvest greens tossed in house infusions.',
  'Mains': 'Slow-braised Caribbean stews and premium grilled cuts.',
  'Dessert': 'Warm local twists and decadent sweet finishes.',
  'Drinks': 'Artisanal cocktails, zero-proof mocktails, and fresh botanicals.',
};

interface MenuViewProps {
  setActiveTab: (tab: string) => void;
  preSelectedItems: { item: MenuItem; quantity: number; selectedOption?: string }[];
  isFeastDrawerOpen: boolean;
  setIsFeastDrawerOpen: (open: boolean) => void;
  addToFeast: (item: MenuItem, option?: string) => void;
  removeFromFeast: (item: MenuItem, option?: string) => void;
}

export const MenuView: React.FC<MenuViewProps> = ({ 
  setActiveTab, 
  preSelectedItems,
  isFeastDrawerOpen,
  setIsFeastDrawerOpen,
  addToFeast,
  removeFromFeast
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [customizationItem, setCustomizationItem] = useState<MenuItem | null>(null);
  const [chosenOption, setChosenOption] = useState<string>('');

  const categories = [
    'All',
    'Breakfast',
    'Brunch',
    'Light Bites',
    'Pasta',
    'Burgers',
    'Salads',
    'Mains',
    'Dessert',
    'Drinks'
  ];

  const tags = [
    'All',
    'Signature',
    'Chef Special',
    'Spicy',
    'Vegetarian',
    'Luxury Seafood',
    'Indulgent'
  ];

  // Map category button click
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
  };

  // Filter items based on Category, Tag, and Search Query
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      // Category Match
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      
      // Tag Match
      const matchesTag = selectedTag === 'All' || item.tags?.some(t => t.toLowerCase().includes(selectedTag.toLowerCase()));
      
      // Search Match
      const matchesSearch = searchQuery === '' || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subCategory?.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesTag && matchesSearch;
    });
  }, [activeCategory, selectedTag, searchQuery]);

  // Feast selection helpers
  const feastTotal = useMemo(() => {
    return preSelectedItems.reduce((sum, current) => sum + (current.item.price * current.quantity), 0);
  }, [preSelectedItems]);

  const totalQuantity = useMemo(() => {
    return preSelectedItems.reduce((sum, current) => sum + current.quantity, 0);
  }, [preSelectedItems]);

  const handleOpenCustomizer = (item: MenuItem) => {
    if (item.options && item.options.length > 0) {
      const existing = preSelectedItems.find(p => p.item.id === item.id);
      if (existing) {
        addToFeast(item, existing.selectedOption);
      } else {
        setCustomizationItem(item);
        setChosenOption(item.options[0]);
      }
    } else {
      addToFeast(item);
    }
  };

  const handleApplyCustomization = () => {
    if (customizationItem) {
      addToFeast(customizationItem, chosenOption);
      setCustomizationItem(null);
      setChosenOption('');
    }
  };

  return (
    <PageTransition>
      {/* Header Banner */}
      <section className="bg-[#E6DCD6]/30 py-16 px-6 text-center border-b border-black/5">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-mono tracking-[0.3em] text-[#055734] uppercase block mb-3 font-semibold">COASTAL & CONTINENTAL</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">
            The Digital <span className="italic text-[#055734] font-medium">Menu Experience</span>
          </h1>
          <p className="text-sm font-sans text-black/80 leading-relaxed max-w-xl mx-auto font-medium">
            Browse our extensive collection. Pre-select your choices to craft a personalized brunch feast, then attach them directly to your reservation.
          </p>
        </div>
      </section>

      {/* Main Grid Wrapper */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDEBAR: Search, Categories & Tags */}
          <div className="lg:col-span-3 lg:sticky lg:top-28 flex flex-col gap-8 bg-white border border-black/5 p-6 rounded-sm shadow-sm">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search menu..."
                className="w-full bg-stone-100 border border-transparent rounded-sm py-2.5 pl-10 pr-4 text-xs font-mono uppercase tracking-wider focus:outline-none focus:border-[#055734] focus:bg-white transition-all placeholder:text-black/30"
              />
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-black/30" />
            </div>

            {/* Categories List */}
            <div>
              <span className="text-[10px] font-mono tracking-widest text-black/40 uppercase block mb-4">CATEGORIES</span>
              <div className="flex flex-row lg:flex-col gap-1.5 overflow-x-auto pb-3 lg:pb-0 scrollbar-none">
                {categories.map(cat => (
                  <button
                    key={cat}
                    id={`menu-cat-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                    onClick={() => handleCategoryChange(cat)}
                    className={`text-left text-[11px] font-mono tracking-widest px-4 py-2 rounded-sm uppercase transition-all whitespace-nowrap ${
                      activeCategory === cat 
                        ? 'bg-[#055734] text-white font-semibold' 
                        : 'text-black/70 hover:bg-stone-50'
                    }`}
                  >
                    {cat === 'All' ? 'ALL DISHES' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Premium Tags Filter */}
            <div>
              <span className="text-[10px] font-mono tracking-widest text-black/40 uppercase block mb-4">DIETARY & HIGHLIGHTS</span>
              <div className="flex flex-wrap gap-2">
                {tags.map(t => (
                  <button
                    key={t}
                    onClick={() => setSelectedTag(t)}
                    className={`text-[9px] font-mono tracking-widest px-3 py-1.5 border uppercase transition-all ${
                      selectedTag === t 
                        ? 'bg-black text-white border-black font-semibold' 
                        : 'border-black/10 text-black/60 hover:border-black/30'
                    }`}
                  >
                    {t === 'All' ? 'ANY' : t}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Interactive Floating "Pre-select Feast" Box */}
            <div className="border-t border-black/15 pt-6 flex flex-col gap-4">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-black/50 tracking-wider">YOUR SOCIAL FEAST</span>
                <span className="font-bold text-[#055734]">{totalQuantity} ITEMS</span>
              </div>
              <button
                id="view-feast-box-btn"
                onClick={() => setIsFeastDrawerOpen(true)}
                className="w-full bg-[#E6DCD6] hover:bg-[#E6DCD6]/85 text-[#055734] py-3 text-center text-xs font-mono tracking-widest uppercase font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>VIEW MY FEAST (${feastTotal})</span>
              </button>
            </div>
          </div>

          {/* RIGHT SIDEBAR / CONTENT GRID: Dishes Showcase */}
          <div className="lg:col-span-9">
            {/* Filter Summary */}
            <div className="flex justify-between items-center mb-12 pb-4 border-b border-black/5 text-[11px] font-mono text-black/50">
              <div className="tracking-widest uppercase font-semibold">
                {activeCategory === 'All' ? 'FULL MENU' : activeCategory} {selectedTag !== 'All' ? `/ ${selectedTag}` : ''} • {filteredItems.length} CREATIONS FOUND
              </div>
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="hover:text-[#055734] border-b border-dashed border-[#055734] pb-0.5 transition-colors font-bold text-xs"
                >
                  CLEAR SEARCH
                </button>
              )}
            </div>

            {filteredItems.length === 0 ? (
              <div className="text-center py-20 bg-stone-50 border border-dashed border-black/10 rounded-sm">
                <span className="text-3xl block mb-4">𓎩</span>
                <p className="font-serif text-sm text-black/60">No delicacies match your selected filters.</p>
                <button
                  onClick={() => { setActiveCategory('All'); setSelectedTag('All'); setSearchQuery(''); }}
                  className="mt-4 text-xs font-mono text-[#055734] uppercase tracking-widest border-b border-[#055734] pb-0.5 font-bold"
                >
                  RESET FILTER SELECTIONS
                </button>
              </div>
            ) : (
              <div className="space-y-24">
                {/* Dynamically list active categories that contain matching filtered items */}
                {categories
                  .filter(cat => cat !== 'All' && filteredItems.some(item => item.category === cat))
                  .map((cat) => {
                    const categoryItems = filteredItems.filter(item => item.category === cat);
                    
                    // Group category items by subCategory for elegant restaurant subheaders
                    const subCategories = Array.from(new Set(categoryItems.map(item => item.subCategory || 'Our Selections')));

                    return (
                      <div 
                        key={cat} 
                        className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start border-b border-black/10 pb-16 last:border-0 last:pb-0"
                      >
                        {/* LEFT COLUMN: Curated Editorial Visual Header for this Category */}
                        <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-4">
                          <div className="aspect-[4/3] lg:aspect-[3/4] overflow-hidden relative bg-stone-100 rounded-sm shadow-sm group">
                            <img 
                              src={CATEGORY_IMAGES[cat] || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600'} 
                              alt={cat}
                              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 grayscale-[10%]"
                              referrerPolicy="no-referrer"
                            />
                            {/* Visual decorative frame/badge overlay */}
                            <div className="absolute top-4 left-4">
                              <span className="bg-[#055734] text-white text-[9px] font-mono tracking-[0.2em] px-3 py-1 uppercase rounded-sm font-semibold shadow-sm">
                                {cat}
                              </span>
                            </div>
                          </div>
                          <div>
                            <h2 className="font-serif text-2xl font-bold text-black tracking-tight uppercase leading-none">
                              {cat}
                            </h2>
                            <p className="text-xs font-sans text-black/75 leading-relaxed mt-2 font-medium">
                              {CATEGORY_TAGLINES[cat] || 'Artfully prepared fresh dishes.'}
                            </p>
                          </div>
                        </div>

                        {/* RIGHT COLUMN: Elegant Double-Column Restaurant List of Dishes */}
                        <div className="lg:col-span-8 space-y-12">
                          {subCategories.map(sub => {
                            const subItems = categoryItems.filter(item => (item.subCategory || 'Our Selections') === sub);
                            
                            return (
                              <div key={sub} className="space-y-8">
                                {/* Sub Category Title */}
                                <div className="border-b border-black/5 pb-2">
                                  <h3 className="font-mono text-[10px] tracking-[0.35em] text-[#055734] uppercase font-bold">
                                    {sub}
                                  </h3>
                                </div>

                                <div className="space-y-8">
                                  {subItems.map(item => {
                                    const existingCount = preSelectedItems
                                      .filter(p => p.item.id === item.id)
                                      .reduce((acc, current) => acc + current.quantity, 0);

                                    return (
                                      <div 
                                        key={item.id} 
                                        className="group flex flex-col justify-between"
                                      >
                                        <div className="flex justify-between items-start gap-2">
                                          <div className="flex-1">
                                            {/* Item name and dotted leader line to price */}
                                            <div className="flex items-baseline justify-between gap-4">
                                              <h4 className="font-serif text-base font-bold text-black group-hover:text-[#055734] transition-colors leading-tight">
                                                {item.name}
                                              </h4>
                                              <div className="flex-1 border-b border-dashed border-black/15 mx-3 self-end h-[4px]" />
                                              <span className="font-mono text-sm text-[#055734] font-bold shrink-0">
                                                ₦{item.price.toLocaleString()}
                                              </span>
                                            </div>

                                            {/* Description */}
                                            <p className="text-xs font-sans text-black/70 leading-relaxed mt-2 font-medium max-w-xl">
                                              {item.description}
                                            </p>

                                            {/* Tags & Customize triggers */}
                                            <div className="flex flex-wrap items-center gap-2 mt-3">
                                              {item.tags?.map(t => (
                                                <span 
                                                  key={t} 
                                                  className="border border-[#055734]/15 bg-[#E6DCD6]/10 text-[#055734] text-[8px] font-mono tracking-widest px-2.5 py-0.5 uppercase rounded-full font-bold"
                                                >
                                                  {t}
                                                </span>
                                              ))}
                                              {item.options && (
                                                <span className="text-[8px] font-mono tracking-widest text-black/40 uppercase font-bold flex items-center gap-1">
                                                  • Options available
                                                </span>
                                              )}
                                            </div>
                                          </div>

                                          {/* Add to Feast Action buttons on the right side */}
                                          <div className="ml-4 shrink-0 self-center">
                                            {existingCount > 0 ? (
                                              <div className="flex items-center gap-2 bg-stone-100 p-1.5 rounded-sm shadow-sm border border-black/5">
                                                <button
                                                  onClick={() => removeFromFeast(item)}
                                                  className="p-1 text-black/50 hover:text-black hover:bg-stone-200 rounded-sm transition-colors"
                                                  aria-label="Decrease quantity"
                                                >
                                                  <Minus className="w-3 h-3" />
                                                </button>
                                                <span className="font-mono text-xs font-semibold px-1 text-black min-w-[14px] text-center">
                                                  {existingCount}
                                                </span>
                                                <button
                                                  onClick={() => handleOpenCustomizer(item)}
                                                  className="p-1 text-black/50 hover:text-[#055734] hover:bg-stone-200 rounded-sm transition-colors"
                                                  aria-label="Increase quantity"
                                                >
                                                  <Plus className="w-3 h-3" />
                                                </button>
                                              </div>
                                            ) : (
                                              <button
                                                onClick={() => handleOpenCustomizer(item)}
                                                className="bg-[#055734]/10 hover:bg-[#055734] text-[#055734] hover:text-white px-3.5 py-2 text-[9px] font-mono tracking-widest uppercase transition-all duration-300 rounded-sm flex items-center gap-1 font-bold border border-[#055734]/20 hover:border-[#055734]"
                                              >
                                                <span>ADD</span>
                                                <Plus className="w-3 h-3" />
                                              </button>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>

        </div>
      </section>

      {/* MODAL / BOTTOM SHEET: Customizer for dishes with options */}
      <AnimatePresence>
        {customizationItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCustomizationItem(null)}
              className="absolute inset-0 bg-black/65 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white max-w-md w-full p-8 border border-black/10 relative z-10 rounded-sm shadow-xl"
            >
              <span className="text-[10px] font-mono tracking-widest text-[#055734] uppercase block mb-1">CHOOSE YOUR PREFERENCE</span>
              <h3 className="font-serif text-2xl font-light text-black tracking-tight mb-4">{customizationItem.name}</h3>
              <p className="text-xs font-serif text-black/60 leading-relaxed mb-6">
                {customizationItem.description}
              </p>

              {customizationItem.options && (
                <div className="mb-8">
                  <span className="text-[10px] font-mono tracking-widest text-black/40 uppercase block mb-3">AVAILABLE PREFERENCES</span>
                  <div className="flex flex-col gap-2">
                    {customizationItem.options.map(opt => (
                      <label 
                        key={opt}
                        className={`flex items-center justify-between p-3 border rounded-sm cursor-pointer transition-all ${
                          chosenOption === opt 
                            ? 'border-[#055734] bg-[#E6DCD6]/15' 
                            : 'border-black/10 hover:border-black/25'
                        }`}
                      >
                        <span className="text-xs font-mono tracking-wide uppercase text-black">{opt}</span>
                        <input
                          type="radio"
                          name="preference-option"
                          checked={chosenOption === opt}
                          onChange={() => setChosenOption(opt)}
                          className="w-4 h-4 text-[#055734] border-black/10 focus:ring-[#055734]"
                        />
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-4">
                <button
                  onClick={() => setCustomizationItem(null)}
                  className="flex-1 border border-black/20 text-black hover:border-black py-3 text-xs font-mono tracking-widest uppercase transition-colors"
                >
                  CANCEL
                </button>
                <button
                  onClick={handleApplyCustomization}
                  className="flex-1 bg-[#055734] text-white hover:bg-black py-3 text-xs font-mono tracking-widest uppercase transition-colors"
                >
                  ADD TO FEAST
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </PageTransition>
  );
};
