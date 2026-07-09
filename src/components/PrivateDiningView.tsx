/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageTransition, FadeIn } from './PageTransition';
import { Calendar, Users, Mail, ArrowRight, CheckCircle, Gift, Sparkles, Home } from 'lucide-react';

export const PrivateDiningView: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState('Bridal Shower');
  const [guestsCount, setGuestsCount] = useState(15);
  const [eventDate, setEventDate] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const spaces = [
    {
      id: 'skylight',
      name: 'The Skylight Conservatory Room',
      description: 'Our full glass conservatory can be isolated for private gatherings. Drenched in warm sunlight, surrounded by lush potted plants. Ideal for bridal showers, slow brunches, or premium creative product rollouts.',
      capacity: 'Up to 35 guests seated',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'chef',
      name: "The Intimate Chef's Table",
      description: 'Tucked behind our cocktail cabinets, experience an exclusive private table in close proximity to our culinary director. Features custom 5-course tasting menus curated in collaboration with our sommeliers.',
      capacity: 'Up to 12 guests seated',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'full',
      name: 'Full Restaurant Buyout',
      description: 'Unlock the complete physical environment of MÈSI Lagos for premium private events, creative agency takeovers, elite high-life milestones, or brand activations in Lekki Phase 1.',
      capacity: 'Up to 90 guests standing/cocktail',
      image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !eventDate) {
      alert('Please fill out all required contact fields and preferred date.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <PageTransition>
      {/* Title Banner */}
      <section className="bg-[#E6DCD6]/30 py-16 px-6 text-center border-b border-black/5">
        <div className="max-w-3xl mx-auto">
          <span className="text-[11px] font-mono tracking-[0.3em] text-[#055734] uppercase block mb-3">EXCLUSIVE OCCASIONS</span>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-black tracking-tight mb-4">
            Private Dining & <span className="italic text-[#055734] font-medium">Bespoke Events</span>
          </h1>
          <p className="text-sm font-serif text-black/60 leading-relaxed max-w-xl mx-auto">
            From bridal showers to executive boards, partner with us to design a tailored atmosphere, custom menu flight pairings, and beautiful floral table scapes.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Spaces showcase */}
          <div className="lg:col-span-7 flex flex-col gap-16">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#055734] uppercase block mb-2">CURATED ENVIRONMENTS</span>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-black tracking-tight">Our Private Sanctuary Spaces</h2>
              <p className="text-sm font-serif text-black/50 mt-1 leading-relaxed">
                MÈSI features three isolated areas customizable for creative or formal layouts.
              </p>
            </div>

            <div className="flex flex-col gap-12">
              {spaces.map(space => (
                <FadeIn key={space.id}>
                  <div className="bg-white border border-black/5 p-2 rounded-sm group hover:shadow-sm transition-shadow duration-300">
                    <div className="h-56 overflow-hidden bg-stone-100 mb-6">
                      <img 
                        src={space.image} 
                        alt={space.name} 
                        className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="px-4 pb-4">
                      <div className="flex justify-between items-start gap-4 mb-3">
                        <h3 className="font-serif text-xl font-medium text-black">{space.name}</h3>
                        <span className="font-mono text-[9px] text-[#055734] tracking-widest bg-[#E6DCD6] px-3 py-1 rounded-sm uppercase shrink-0 font-semibold">
                          {space.capacity}
                        </span>
                      </div>
                      <p className="text-xs font-serif text-black/60 leading-relaxed">
                        {space.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right Side: Inquiry Form */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            {!submitted ? (
              <div className="bg-[#E6DCD6]/20 border border-black/10 p-8 rounded-sm">
                <div className="mb-6">
                  <span className="text-[10px] font-mono tracking-widest text-[#055734] uppercase block mb-1">CONNECT WITH AN ORGANIZER</span>
                  <h3 className="font-serif text-2xl font-light text-black tracking-tight">Plan Your Event</h3>
                  <p className="text-xs font-serif text-black/50 mt-1 leading-relaxed">
                    Submit your basic criteria, and our events division will contact you within 24 hours to schedule a walkthrough.
                  </p>
                </div>

                <form onSubmit={handleInquirySubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="text-[9px] font-mono tracking-widest text-black/40 block mb-1.5 uppercase">YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="E.G. CHIDINMA OKAFOR"
                      className="w-full bg-white border border-black/10 rounded-sm py-2.5 px-3.5 text-xs font-mono uppercase text-black focus:outline-none focus:border-[#055734] placeholder:text-black/20"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[9px] font-mono tracking-widest text-black/40 block mb-1.5 uppercase">EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E.G. OKAFOR@MIND.COM"
                        className="w-full bg-white border border-black/10 rounded-sm py-2.5 px-3.5 text-xs font-mono text-black focus:outline-none focus:border-[#055734] placeholder:text-black/20"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] font-mono tracking-widest text-black/40 block mb-1.5 uppercase">PHONE NUMBER *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="E.G. +234..."
                        className="w-full bg-white border border-black/10 rounded-sm py-2.5 px-3.5 text-xs font-mono text-black focus:outline-none focus:border-[#055734] placeholder:text-black/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[9px] font-mono tracking-widest text-black/40 block mb-1.5 uppercase">EVENT TYPE</label>
                      <select
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className="w-full bg-white border border-black/10 rounded-sm py-2.5 px-3.5 text-xs font-mono text-black focus:outline-none focus:border-[#055734]"
                      >
                        <option value="Bridal Shower">BRIDAL SHOWER</option>
                        <option value="Birthday Dinner">BIRTHDAY DINNER</option>
                        <option value="Corporate Offsite">CORPORATE OFFSITE</option>
                        <option value="Product Launch">PRODUCT LAUNCH</option>
                        <option value="Brand Activation">BRAND TAKE-OVER</option>
                        <option value="Other Milestone">OTHER MILESTONE</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[9px] font-mono tracking-widest text-black/40 block mb-1.5 uppercase">EXPECTED GUESTS</label>
                      <input
                        type="number"
                        min={5}
                        max={100}
                        value={guestsCount}
                        onChange={(e) => setGuestsCount(parseInt(e.target.value) || 10)}
                        className="w-full bg-white border border-black/10 rounded-sm py-2.5 px-3.5 text-xs font-mono text-black focus:outline-none focus:border-[#055734]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[9px] font-mono tracking-widest text-black/40 block mb-1.5 uppercase">PREFERRED EVENT DATE *</label>
                    <input
                      type="date"
                      required
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full bg-white border border-black/10 rounded-sm py-2.5 px-3.5 text-xs font-mono text-black focus:outline-none focus:border-[#055734]"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div>
                    <label className="text-[9px] font-mono tracking-widest text-black/40 block mb-1.5 uppercase">COLLABORATIVE BRIEF / DETAILS</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                      placeholder="TELL US ABOUT THE VIBE, PREFERRED DISHES, AUDIO SELECTIONS, AND DECORATIVE LAYOUTS..."
                      className="w-full bg-white border border-black/10 rounded-sm p-3.5 text-xs font-mono text-black focus:outline-none focus:border-[#055734] placeholder:text-black/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#055734] text-white hover:bg-black py-3.5 text-xs font-mono tracking-widest uppercase transition-colors flex items-center justify-center gap-2 mt-2 font-semibold"
                  >
                    <span>SUBMIT INQUIRY</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-white border border-black/10 p-8 rounded-sm shadow-md text-center flex flex-col items-center gap-5">
                <CheckCircle className="w-16 h-16 text-[#055734]" />
                <div>
                  <h3 className="font-serif text-2xl font-light text-black tracking-tight mb-2">Inquiry Lodged Successfully</h3>
                  <p className="text-xs font-serif text-black/50 leading-relaxed max-w-sm mx-auto">
                    Thank you, {name.split(' ')[0]}. We have generated a private booking ID for your milestone brief. Our events concierge will email you within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setPhone('');
                    setEventDate('');
                    setMessage('');
                  }}
                  className="mt-2 text-xs font-mono text-[#055734] uppercase tracking-widest border-b border-[#055734] pb-0.5"
                >
                  SEND ANOTHER ENQUIRY
                </button>
              </div>
            )}
          </div>

        </div>
      </section>
    </PageTransition>
  );
};
