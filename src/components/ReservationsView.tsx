/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Calendar as CalendarIcon, Clock, Users, Sofa, User, CheckCircle, ArrowRight, MessageCircle, AlertCircle, ShoppingBag, X } from 'lucide-react';
import { MenuItem } from '../types';
import { PageTransition } from './PageTransition';
import { motion } from 'motion/react';

interface ReservationsViewProps {
  setActiveTab: (tab: string) => void;
  preSelectedItems: { item: MenuItem; quantity: number; selectedOption?: string }[];
  setPreSelectedItems: React.Dispatch<React.SetStateAction<{ item: MenuItem; quantity: number; selectedOption?: string }[]>>;
}

export const ReservationsView: React.FC<ReservationsViewProps> = ({ 
  setActiveTab, 
  preSelectedItems, 
  setPreSelectedItems 
}) => {
  const [step, setStep] = useState<number>(1);
  const [seatingArea, setSeatingArea] = useState<string>('Glass-Roof Conservatory');
  const [date, setDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('11:00 AM');
  const [guests, setGuests] = useState<number>(2);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [occasion, setOccasion] = useState<string>('Social Dining');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [isBooked, setIsBooked] = useState<boolean>(false);
  const [bookingCode, setBookingCode] = useState<string>('');

  const seatingAreas = [
    {
      id: 'conservatory',
      name: 'Glass-Roof Conservatory',
      description: 'Sun-drenched skylights, surrounded by lush flora. Ideal for slow mornings and signature weekend brunch.',
      capacity: '1 — 6 Guests',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 'booth',
      name: 'Intimate Candlelit Booth',
      description: 'Deep velvet banquettes, low acoustic levels, and custom ambient dimmers. Perfect for dinner dates.',
      capacity: '2 — 4 Guests',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 'lounge',
      name: 'Low-Seated Lounge & Fireplace',
      description: 'Relaxed hand-woven ash-wood armchairs, low tables, and cozy atmosphere. Perfect for coffee or cocktails.',
      capacity: '2 — 8 Guests',
      image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 'bar',
      name: 'Artisanal Bar Counter',
      description: 'High barstools facing our botanical liquor cabinets. Interact directly with our creative mixologists.',
      capacity: '1 — 2 Guests',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=400'
    }
  ];

  const times = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:30 PM', '07:00 PM', '08:30 PM', '10:00 PM'
  ];

  const feastTotal = useMemo(() => {
    return preSelectedItems.reduce((sum, current) => sum + (current.item.price * current.quantity), 0);
  }, [preSelectedItems]);

  const handleNextStep = () => {
    if (step === 1 && !seatingArea) return;
    if (step === 2 && !date) {
      alert('Please select a preferred date for your dining experience.');
      return;
    }
    setStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) {
      alert('Please fill out all required contact fields.');
      return;
    }

    // Generate simulated confirmation details
    const randomCode = 'MSI-' + Math.floor(100000 + Math.random() * 900000);
    setBookingCode(randomCode);
    setIsBooked(true);
  };

  const handleWhatsAppSync = () => {
    const itemsText = preSelectedItems.length > 0 
      ? `\n🍽️ *Attached Social Feast:* \n${preSelectedItems.map(p => `  - ${p.quantity}x ${p.item.name} ${p.selectedOption ? `(${p.selectedOption})` : ''}`).join('\n')}\n  *Estimated Total:* $${feastTotal}`
      : '\n(No pre-selected menu items attached)';

    const text = `Hello MÈSI Lagos,

I would like to confirm my table reservation:
*Confirmation Code:* ${bookingCode}
*Guest Name:* ${fullName}
*Seating Area:* ${seatingArea}
*Date:* ${date}
*Time Slot:* ${timeSlot}
*Guests:* ${guests} People
*Occasion:* ${occasion}
${specialRequests ? `*Special Requests:* ${specialRequests}` : ''}
${itemsText}

Please let me know if any pre-payment is required. Looking forward to slow dining!`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/2349159999368?text=${encodedText}`, '_blank');
  };

  return (
    <PageTransition>
      {/* Editorial Title banner */}
      <section className="bg-[#E6DCD6]/30 py-16 px-6 text-center border-b border-black/5">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-mono tracking-[0.3em] text-[#055734] uppercase block mb-3 font-semibold">SECURE A TABLE</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">
            Reserve Your <span className="italic text-[#055734] font-semibold">Lekki Sanctuary</span>
          </h1>
          <p className="text-sm font-sans text-black/80 leading-relaxed max-w-xl mx-auto font-medium">
            Bookings are open up to 30 days in advance. Follow our simple, interactive guide to customize your atmosphere and pre-select your social feast.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto">
        {!isBooked ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT SIDE: Step Indicator and Interactive Form */}
            <div className="lg:col-span-8 bg-white border border-black/5 p-8 rounded-sm shadow-sm">
              {/* Step Badges */}
              <div className="flex justify-between items-center pb-8 border-b border-black/5 mb-8">
                {[
                  { num: 1, label: 'ATMOSPHERE' },
                  { num: 2, label: 'DATE & TIME' },
                  { num: 3, label: 'GUEST DETAILS' }
                ].map(s => (
                  <div key={s.num} className="flex items-center gap-2">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-all ${
                      step >= s.num 
                        ? 'bg-[#055734] text-white' 
                        : 'bg-stone-100 text-black/30 border border-black/5'
                    }`}>
                      {s.num}
                    </span>
                    <span className={`text-[9px] font-mono tracking-widest hidden sm:inline ${
                      step === s.num ? 'text-black font-semibold' : 'text-black/30'
                    }`}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Step 1: Atmosphere & Seating selection */}
              {step === 1 && (
                <div className="flex flex-col gap-6">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-black tracking-tight mb-2">Select Your Seating Area</h2>
                    <p className="text-xs font-sans text-black/80 font-medium">Each zone inside MÈSI features a unique lighting setup and tactile atmosphere.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {seatingAreas.map(area => (
                      <div
                        key={area.id}
                        id={`seating-${area.id}`}
                        onClick={() => setSeatingArea(area.name)}
                        className={`border rounded-sm overflow-hidden cursor-pointer transition-all flex flex-col justify-between ${
                          seatingArea === area.name 
                            ? 'border-[#055734] ring-1 ring-[#055734] bg-[#E6DCD6]/10' 
                            : 'border-black/5 hover:border-black/20'
                        }`}
                      >
                        <div className="h-40 overflow-hidden relative bg-stone-100">
                          <img 
                            src={area.image} 
                            alt={area.name} 
                            className="w-full h-full object-cover" 
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-center mb-1">
                            <h3 className="font-serif text-base font-semibold text-black">{area.name}</h3>
                            <span className="font-mono text-[9px] text-[#055734] tracking-widest bg-[#E6DCD6] px-2 py-0.5 rounded-sm uppercase">
                              {area.capacity}
                            </span>
                          </div>
                          <p className="text-xs font-serif text-black/60 leading-relaxed">
                            {area.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleNextStep}
                    className="w-full bg-[#055734] text-white hover:bg-black py-4 text-xs font-mono tracking-widest uppercase transition-colors flex items-center justify-center gap-2 mt-4"
                  >
                    <span>CONTINUE TO DETAILS</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Step 2: Date & Time Setup */}
              {step === 2 && (
                <div className="flex flex-col gap-6">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-black tracking-tight mb-2">Select Date & Dining Size</h2>
                    <p className="text-xs font-sans text-black/80 font-medium">Help us prepare the table setting for you and your guests.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Date Selector */}
                    <div>
                      <label className="text-[10px] font-mono tracking-widest text-black/40 uppercase block mb-2">PREFERRED DATE</label>
                      <div className="relative">
                        <input
                          type="date"
                          required
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full border border-black/10 rounded-sm py-3 px-4 text-xs font-mono text-black focus:outline-none focus:border-[#055734]"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                    </div>

                    {/* Guests Selector */}
                    <div>
                      <label className="text-[10px] font-mono tracking-widest text-black/40 uppercase block mb-2">GUEST COUNT</label>
                      <div className="flex items-center border border-black/10 rounded-sm p-1">
                        {[1, 2, 3, 4, 5, 6, '7+'].map(g => (
                          <button
                            key={g}
                            type="button"
                            onClick={() => setGuests(typeof g === 'number' ? g : 8)}
                            className={`flex-1 py-2 text-center text-xs font-mono font-semibold transition-all ${
                              (guests === g || (g === '7+' && guests >= 7))
                                ? 'bg-[#055734] text-white rounded-sm'
                                : 'text-black/60 hover:bg-stone-50'
                            }`}
                          >
                            {g}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hour Slots */}
                  <div>
                    <label className="text-[10px] font-mono tracking-widest text-black/40 uppercase block mb-3">PREFERRED HOUR SLOT</label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {times.map(t => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTimeSlot(t)}
                          className={`py-3 text-center text-xs font-mono border rounded-sm transition-all ${
                            timeSlot === t 
                              ? 'border-[#055734] bg-[#E6DCD6]/20 text-[#055734] font-semibold' 
                              : 'border-black/10 text-black/70 hover:border-black/35'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 mt-4">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="flex-1 border border-black/20 text-black hover:border-black py-4 text-xs font-mono tracking-widest uppercase transition-colors"
                    >
                      BACK
                    </button>
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="flex-1 bg-[#055734] text-white hover:bg-black py-4 text-xs font-mono tracking-widest uppercase transition-colors flex items-center justify-center gap-2"
                    >
                      <span>ENTER DETAILS</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact & Personal Details Form */}
              {step === 3 && (
                <form onSubmit={handleBookingSubmit} className="flex flex-col gap-6">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-black tracking-tight mb-2">Guest Information</h2>
                    <p className="text-xs font-sans text-black/80 font-medium">Your reservation details will be sent immediately to this contact node.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] font-mono tracking-widest text-black/40 uppercase block mb-2">FULL NAME *</label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="E.G. OPEOLUWA TAYLOR"
                          className="w-full border border-black/10 rounded-sm py-3 px-10 text-xs font-mono uppercase text-black focus:outline-none focus:border-[#055734] placeholder:text-black/20"
                        />
                        <User className="absolute left-3.5 top-3.5 w-4 h-4 text-black/30" />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-mono tracking-widest text-black/40 uppercase block mb-2">EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E.G. NAME@DOMAIN.COM"
                        className="w-full border border-black/10 rounded-sm py-3 px-4 text-xs font-mono text-black focus:outline-none focus:border-[#055734] placeholder:text-black/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] font-mono tracking-widest text-black/40 uppercase block mb-2">PHONE NUMBER *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="E.G. +234 915 999 9368"
                        className="w-full border border-black/10 rounded-sm py-3 px-4 text-xs font-mono text-black focus:outline-none focus:border-[#055734] placeholder:text-black/20"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono tracking-widest text-black/40 uppercase block mb-2">DINING OCCASION</label>
                      <select
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        className="w-full border border-black/10 rounded-sm py-3 px-4 text-xs font-mono text-black bg-white focus:outline-none focus:border-[#055734]"
                      >
                        <option value="Social Dining">SOCIAL DINING</option>
                        <option value="Romantic Date">ROMANTIC DATE</option>
                        <option value="Business Power Lunch">BUSINESS LUNCH</option>
                        <option value="Birthday Celebration">BIRTHDAY CELEBRATION</option>
                        <option value="Bridal/Baby Shower">BRIDAL / BABY SHOWER</option>
                        <option value="Lekki Creative Hangout">CREATIVE HANGOUT</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono tracking-widest text-black/40 uppercase block mb-2">SPECIAL REQUESTS / DIETARY NOTES</label>
                    <textarea
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      rows={3}
                      placeholder="E.G. GLUTEN INTOLERANCE, PREFER WINDOW SEAT, BRINGING A BOTTLE (CORKAGE APPLIES)..."
                      className="w-full border border-black/10 rounded-sm p-4 text-xs font-mono text-black focus:outline-none focus:border-[#055734] placeholder:text-black/20"
                    />
                  </div>

                  <div className="flex gap-4 mt-4">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="flex-1 border border-black/20 text-black hover:border-black py-4 text-xs font-mono tracking-widest uppercase transition-colors"
                    >
                      BACK
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-[#055734] text-white hover:bg-black py-4 text-xs font-mono tracking-widest uppercase transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Reserve My Table</span>
                      <CheckCircle className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* RIGHT SIDE: Summary / Feast Selection Attachment widget */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-6">
              {/* Table Booking Overview Card */}
              <div className="bg-[#E6DCD6]/20 border border-black/5 p-6 rounded-sm">
                <span className="text-[10px] font-mono tracking-widest text-black/40 uppercase block mb-4">RESERVATION CRITERIA</span>
                
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <Sofa className="w-4 h-4 text-[#055734] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] font-mono text-black/40 tracking-wider">ATMOSPHERE</p>
                      <p className="text-sm font-serif font-semibold text-black">{seatingArea}</p>
                    </div>
                  </div>

                  {date && (
                    <div className="flex items-start gap-3">
                      <CalendarIcon className="w-4 h-4 text-[#055734] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-[10px] font-mono text-black/40 tracking-wider">DATE</p>
                        <p className="text-sm font-serif font-semibold text-black">{date}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#055734] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] font-mono text-black/40 tracking-wider">TIME SLOT</p>
                      <p className="text-sm font-serif font-semibold text-black">{timeSlot}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-4 h-4 text-[#055734] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] font-mono text-black/40 tracking-wider">GUESTS</p>
                      <p className="text-sm font-serif font-semibold text-black">{guests} Guests</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-black/10 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-[#055734] shrink-0 mt-0.5" />
                  <p className="text-[10px] font-sans text-black/60 leading-relaxed">
                    Reservations are held for up to 15 minutes. Please coordinate adjustments via our WhatsApp concierge line directly.
                  </p>
                </div>
              </div>

              {/* Attached Feast widget */}
              <div className="bg-white border border-black/5 p-6 rounded-sm shadow-sm flex flex-col gap-4">
                <div className="flex justify-between items-center pb-2 border-b border-black/5">
                  <span className="text-[10px] font-mono tracking-widest text-[#055734] uppercase font-semibold">ATTACHED FEAST</span>
                  <ShoppingBag className="w-4 h-4 text-black/30" />
                </div>

                {preSelectedItems.length === 0 ? (
                  <div className="text-center py-6">
                    <p className="text-xs font-serif text-black/50 leading-relaxed mb-4">
                      No menu pre-selections attached. You can browse the digital menu and select items to compile your dream feast.
                    </p>
                    <button
                      onClick={() => { setActiveTab('menu'); window.scrollTo({ top: 0 }); }}
                      className="text-xs font-mono text-[#055734] tracking-widest uppercase border-b border-[#055734] pb-0.5"
                    >
                      BROWSE MENU & ATTACH
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-3 max-h-[180px] overflow-y-auto pr-1">
                      {preSelectedItems.map(p => (
                        <div key={p.item.id} className="flex justify-between items-start text-xs font-serif text-black/80">
                          <div>
                            <span className="font-semibold">{p.quantity}x</span> {p.item.name}
                            {p.selectedOption && <p className="text-[9px] font-mono text-black/40">({p.selectedOption})</p>}
                          </div>
                          <span className="font-mono text-[10px] text-black/50 shrink-0">₦{(p.item.price * p.quantity).toLocaleString()}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-black/15 flex justify-between items-center text-xs font-mono font-semibold">
                      <span className="text-black/50">FEAST TOTAL:</span>
                      <span className="text-[#055734]">₦{feastTotal.toLocaleString()}</span>
                    </div>

                    <button
                      onClick={() => setPreSelectedItems([])}
                      className="text-center text-[9px] font-mono tracking-widest text-red-500 hover:underline uppercase"
                    >
                      DETACH ALL ITEMS
                    </button>
                  </div>
                )}
              </div>
            </div>

          </div>
        ) : (
          /* STEP 4: SUCCESS RECEIPT AND TICKET (Pristine Luxury Visual Card) */
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto bg-[#E6DCD6]/10 border border-black/10 p-8 sm:p-12 relative shadow-lg overflow-hidden text-center"
          >
            {/* Ticket Cutouts for authenticity of design */}
            <div className="absolute top-1/2 left-0 w-4 h-8 bg-white border-r border-black/10 rounded-r-full -translate-y-1/2" />
            <div className="absolute top-1/2 right-0 w-4 h-8 bg-white border-l border-black/10 rounded-l-full -translate-y-1/2" />

            <div className="flex flex-col items-center gap-6 pb-8 border-b border-dashed border-black/20">
              <CheckCircle className="w-16 h-16 text-[#055734]" />
              <div>
                <span className="text-[11px] font-mono tracking-[0.3em] text-[#055734] uppercase block mb-1">TABLE PROVISIONALLY RESERVED</span>
                <h2 className="font-serif text-3xl font-bold text-black tracking-tight">Your MÈSI Ticket is Ready</h2>
              </div>
              <div className="bg-[#E6DCD6] text-[#055734] font-mono text-sm tracking-[0.2em] font-semibold px-6 py-2.5 rounded-sm">
                CODE: {bookingCode}
              </div>
            </div>

            <div className="py-8 grid grid-cols-2 gap-y-6 text-left border-b border-dashed border-black/20 font-serif text-sm">
              <div>
                <span className="font-mono text-[10px] text-black/40 tracking-widest block uppercase mb-1">GUEST NAME</span>
                <span className="font-semibold text-black uppercase">{fullName}</span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-black/40 tracking-widest block uppercase mb-1">OCCASION</span>
                <span className="font-semibold text-black">{occasion}</span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-black/40 tracking-widest block uppercase mb-1">ZONE / ATMOSPHERE</span>
                <span className="font-semibold text-[#055734]">{seatingArea}</span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-black/40 tracking-widest block uppercase mb-1">DINERS COUNT</span>
                <span className="font-semibold text-black">{guests} Guests</span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-black/40 tracking-widest block uppercase mb-1">RESERVATION DATE</span>
                <span className="font-semibold text-black">{date}</span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-black/40 tracking-widest block uppercase mb-1">TIME SLOT</span>
                <span className="font-semibold text-black">{timeSlot}</span>
              </div>
            </div>

            {preSelectedItems.length > 0 && (
              <div className="py-8 border-b border-dashed border-black/20 text-left">
                <span className="font-mono text-[10px] text-black/40 tracking-widest block uppercase mb-4">ATTACHED FEAST DETAILS</span>
                <div className="flex flex-col gap-2">
                  {preSelectedItems.map(p => (
                    <div key={p.item.id} className="flex justify-between text-xs font-serif text-black/80">
                      <span>{p.quantity}x {p.item.name} {p.selectedOption ? `(${p.selectedOption})` : ''}</span>
                      <span className="font-mono text-black/50">₦{(p.item.price * p.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="flex justify-between font-mono text-xs font-bold text-[#055734] pt-3 mt-1 border-t border-black/5">
                    <span>ESTIMATED FEAST TOTAL:</span>
                    <span>₦{feastTotal.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-8 flex flex-col gap-4">
              <p className="text-xs font-serif text-black/60 leading-relaxed max-w-md mx-auto">
                To guarantee your reservation and sync your selection with our live concierge kitchen, click below to establish direct contact with us on WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center mt-2">
                <button
                  onClick={handleWhatsAppSync}
                  className="bg-[#055734] text-white hover:bg-[#055734]/90 px-8 py-4 text-xs font-mono tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Sync with WhatsApp</span>
                </button>
                <button
                  onClick={() => {
                    setIsBooked(false);
                    setStep(1);
                    setPreSelectedItems([]);
                    setActiveTab('home');
                  }}
                  className="border border-black/25 text-black hover:border-black px-8 py-4 text-xs font-mono tracking-[0.2em] uppercase transition-colors"
                >
                  DONE
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </PageTransition>
  );
};
