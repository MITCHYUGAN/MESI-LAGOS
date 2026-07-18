/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { MenuView } from './components/MenuView';
import { ReservationsView } from './components/ReservationsView';
import { ExperiencesView } from './components/ExperiencesView';
import { GalleryView } from './components/GalleryView';
import { PrivateDiningView } from './components/PrivateDiningView';
import { AboutView } from './components/AboutView';
import { JournalView } from './components/JournalView';
import { ContactView } from './components/ContactView';
import { TableDrawer } from './components/TableDrawer';
import { MenuItem } from './types';
import { Calendar } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [preSelectedItems, setPreSelectedItems] = useState<{ item: MenuItem; quantity: number; selectedOption?: string }[]>([]);
  const [isTableDrawerOpen, setIsTableDrawerOpen] = useState<boolean>(false);

  // Sync scroll on tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [activeTab]);

  const addToFeast = (item: MenuItem, option?: string) => {
    setPreSelectedItems(prev => {
      const existingIndex = prev.findIndex(p => p.item.id === item.id && p.selectedOption === option);
      if (existingIndex > -1) {
        return prev.map((p, idx) => 
          idx === existingIndex 
            ? { ...p, quantity: p.quantity + 1 } 
            : p
        );
      } else {
        return [...prev, { item, quantity: 1, selectedOption: option }];
      }
    });
    setIsTableDrawerOpen(true);
  };

  const removeFromFeast = (item: MenuItem, option?: string) => {
    setPreSelectedItems(prev => {
      const existingIndex = prev.findIndex(p => 
        p.item.id === item.id && (option === undefined || p.selectedOption === option)
      );
      if (existingIndex > -1) {
        if (prev[existingIndex].quantity > 1) {
          return prev.map((p, idx) => 
            idx === existingIndex 
              ? { ...p, quantity: p.quantity - 1 } 
              : p
          );
        } else {
          return prev.filter((_, idx) => idx !== existingIndex);
        }
      }
      return prev;
    });
  };

  const clearItemFromFeast = (itemId: string, option?: string) => {
    setPreSelectedItems(prev => prev.filter(p => !(p.item.id === itemId && p.selectedOption === option)));
  };

  const feastTotal = preSelectedItems.reduce((sum, current) => sum + (current.item.price * current.quantity), 0);

  const handleContinueToReservation = () => {
    setIsTableDrawerOpen(false);
    setActiveTab('reservations');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInquireWhatsApp = () => {
    const listText = preSelectedItems.map(p => 
      `• ${p.quantity} × ${p.item.name}${p.selectedOption ? ` (${p.selectedOption})` : ''} — ₦${(p.item.price * p.quantity).toLocaleString()}`
    ).join('\n');
    const text = `Hello MÈSI Lagos,
I've selected a few dishes that caught my attention, I would love to place an order:

My Table Selections:
${listText}

Estimated Total: ₦${feastTotal.toLocaleString()}

Name: [Customer(YOU) fills this] 
Address: [Customer(YOU) fills this]

Thank you!`;
    const message = encodeURIComponent(text);
    window.open(`https://wa.me/2349159999368?text=${message}`, '_blank');
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView setActiveTab={setActiveTab} />;
      case 'menu':
        return (
          <MenuView 
            setActiveTab={setActiveTab} 
            preSelectedItems={preSelectedItems} 
            isFeastDrawerOpen={isTableDrawerOpen}
            setIsFeastDrawerOpen={setIsTableDrawerOpen}
            addToFeast={addToFeast}
            removeFromFeast={removeFromFeast}
          />
        );
      case 'reservations':
        return (
          <ReservationsView 
            setActiveTab={setActiveTab} 
            preSelectedItems={preSelectedItems} 
            setPreSelectedItems={setPreSelectedItems} 
          />
        );
      case 'experiences':
        return <ExperiencesView setActiveTab={setActiveTab} />;
      case 'gallery':
        return <GalleryView setActiveTab={setActiveTab} />;
      case 'private-dining':
        return <PrivateDiningView />;
      case 'about':
        return <AboutView />;
      case 'journal':
        return <JournalView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#E6DCD6] selection:text-[#055734] flex flex-col justify-between">
      <div>
        <Header 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          preSelectedCount={preSelectedItems.length}
          onOpenTableDrawer={() => setIsTableDrawerOpen(true)}
        />
        
        {/* Main Content Pane */}
        <main className="w-full relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderActiveView()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      <Footer setActiveTab={setActiveTab} />

      {/* Global Slide-out Selections Drawer */}
      <TableDrawer
        isOpen={isTableDrawerOpen}
        onClose={() => setIsTableDrawerOpen(false)}
        preSelectedItems={preSelectedItems}
        addToFeast={addToFeast}
        removeFromFeast={removeFromFeast}
        clearItemFromFeast={clearItemFromFeast}
        feastTotal={feastTotal}
        onContinueToReservation={handleContinueToReservation}
        onInquireWhatsApp={handleInquireWhatsApp}
      />

      {/* Floating Action Button (FAB) for Instant Reservation (visible except on booking view) */}
      <AnimatePresence>
        {activeTab !== 'reservations' && (
          <motion.button
            id="fab-reserve-button"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setActiveTab('reservations');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="fixed bottom-6 right-6 z-40 bg-[#055734] text-white hover:bg-black px-5 py-4 shadow-xl rounded-full flex items-center gap-2.5 text-xs font-mono tracking-widest uppercase font-semibold border border-[#055734]/10"
            aria-label="Book a table instantly"
          >
            <Calendar className="w-4 h-4" />
            <span className="hidden sm:inline">RESERVE TABLE</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
