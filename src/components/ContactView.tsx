/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageTransition, FadeIn } from './PageTransition';
import { Mail, Phone, MapPin, CheckCircle, ArrowRight, ShieldCheck, Car } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      alert('Please complete all contact query fields.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <PageTransition>
      {/* Title Banner */}
      <section className="bg-[#E6DCD6]/30 py-16 px-6 text-center border-b border-black/5">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-mono tracking-[0.3em] text-[#055734] uppercase block mb-3 font-semibold">GET IN TOUCH</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">
            Connect with <span className="italic text-[#055734] font-medium">MÈSI Lagos</span>
          </h1>
          <p className="text-sm font-sans text-black/80 leading-relaxed max-w-xl mx-auto font-medium">
            Do you have questions about custom dietary options, corporate collaborations, or general directions? Reach out below.
          </p>
        </div>
      </section>

      {/* Grid Content */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Detail & Map */}
          <div className="lg:col-span-6 flex flex-col gap-10">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#055734] uppercase block mb-2 font-semibold">CRITERIA</span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-black tracking-tight">Visit the social house</h2>
              <p className="text-xs font-sans text-black/85 mt-1 leading-relaxed font-medium">
                MÈSI is located on a quiet residential-turned-retail avenue in Lekki Phase 1, Lagos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 border border-black/5 rounded-sm bg-stone-50">
                <span className="text-[10px] font-mono tracking-widest text-black/40 block mb-2 uppercase">ADDRESS</span>
                <p className="text-sm font-sans text-black/85 leading-relaxed font-medium">
                  5 Ayinde Akinmade St,<br />
                  Lekki Phase 1, Lagos,<br />
                  Nigeria
                </p>
                <div className="flex gap-2 items-center text-[#055734] font-mono text-[11px] tracking-wider mt-4 font-bold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>OPEN IN GOOGLE MAPS</span>
                </div>
              </div>

              <div className="p-6 border border-black/5 rounded-sm bg-stone-50">
                <span className="text-[10px] font-mono tracking-widest text-black/40 block mb-2 uppercase">CONCIERGE CONTACTS</span>
                <p className="text-sm font-sans text-black/85 leading-relaxed font-medium">
                  WhatsApp: +234 915 999 9368<br />
                  Call: +234 915 999 9368<br />
                  Email: info@mesilagos.com
                </p>
              </div>
            </div>

            {/* Parking Detail */}
            <div className="p-6 bg-[#E6DCD6]/25 border border-black/5 rounded-sm flex gap-4 items-start">
              <Car className="w-5 h-5 text-[#055734] shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-base font-bold text-black">Arrival & Valet Instructions</h3>
                <p className="text-xs font-sans text-black/80 leading-relaxed mt-1 font-medium">
                  Complimentary valet parking is available at our gates starting at 05:00 PM daily. Street parking during slow morning sessions is patrolled by our private security wardens.
                </p>
              </div>
            </div>

            {/* Premium Hand-drawn Vector Map Block */}
            <div className="border border-black/5 p-4 rounded-sm bg-stone-50 h-64 relative overflow-hidden flex flex-col justify-between">
              {/* Abstract Map Background Grids */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                {/* Horizontal & vertical layout grid */}
                <div className="absolute top-1/3 left-0 right-0 h-[1.5px] bg-black" />
                <div className="absolute top-2/3 left-0 right-0 h-[1.5px] bg-black" />
                <div className="absolute top-0 bottom-0 left-1/4 w-[1.5px] bg-black" />
                <div className="absolute top-0 bottom-0 left-3/4 w-[1.5px] bg-black" />
                <div className="absolute top-0 bottom-0 left-1/2 w-[1.5px] bg-black" />
                {/* Diagonal curve road */}
                <div className="absolute -top-10 -left-10 w-96 h-96 border-[3px] border-black rounded-full" />
              </div>

              <div className="z-10 bg-white/95 backdrop-blur-sm p-4 border border-black/5 inline-self-start self-start rounded-sm max-w-[200px]">
                <h4 className="font-serif text-xs font-bold text-black">MÈSI LAGOS</h4>
                <p className="text-[9px] font-mono text-black/50 tracking-wide mt-1">5 Ayinde Akinmade St</p>
              </div>

              {/* Pin indicator */}
              <div className="absolute left-[52%] top-[45%] z-20 flex flex-col items-center">
                <div className="w-3.5 h-3.5 rounded-full bg-[#055734] border border-white shadow-lg animate-ping absolute" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#055734] border-2 border-white shadow-md z-10" />
                <span className="font-mono text-[8px] bg-black text-white px-2 py-0.5 mt-1 tracking-widest uppercase">WE ARE HERE</span>
              </div>

              <div className="z-10 text-[10px] font-mono text-black/40 tracking-wider">
                LEKKI NEIGHBORHOOD MAP GUIDE
              </div>
            </div>
          </div>

          {/* Right Side: Inquiry Contact Form */}
          <div className="lg:col-span-6 bg-white border border-black/5 p-8 rounded-sm shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <span className="text-xs font-mono tracking-widest text-[#055734] uppercase block mb-1 font-semibold">GENERAL ENQUIRY</span>
                  <h3 className="font-serif text-2xl font-bold text-black tracking-tight">Direct Message Pane</h3>
                  <p className="text-xs font-sans text-black/80 mt-1 leading-relaxed font-medium">
                    Have any comments, feedback, or custom requests? Send us an inquiry directly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[9px] font-mono tracking-widest text-black/40 block mb-1.5 uppercase">YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="NAME"
                      className="w-full border border-black/10 rounded-sm py-2.5 px-3.5 text-xs font-mono uppercase text-black focus:outline-none focus:border-[#055734] placeholder:text-black/20"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] font-mono tracking-widest text-black/40 block mb-1.5 uppercase">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="EMAIL"
                      className="w-full border border-black/10 rounded-sm py-2.5 px-3.5 text-xs font-mono text-black focus:outline-none focus:border-[#055734] placeholder:text-black/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[9px] font-mono tracking-widest text-black/40 block mb-1.5 uppercase">SUBJECT / INTEREST *</label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="E.G. BRUNCH COLLABORATION, FEEDBACK..."
                    className="w-full border border-black/10 rounded-sm py-2.5 px-3.5 text-xs font-mono text-black focus:outline-none focus:border-[#055734] placeholder:text-black/20 uppercase"
                  />
                </div>

                <div>
                  <label className="text-[9px] font-mono tracking-widest text-black/40 block mb-1.5 uppercase">YOUR MESSAGE *</label>
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="ENTER YOUR THOUGHTS OR QUESTIONS HERE..."
                    className="w-full border border-black/10 rounded-sm p-4 text-xs font-mono text-black focus:outline-none focus:border-[#055734] placeholder:text-black/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#055734] text-white hover:bg-black py-4 text-xs font-mono tracking-widest uppercase transition-colors flex items-center justify-center gap-2 font-semibold"
                >
                  <span>SEND INQUIRY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="text-center py-16 flex flex-col items-center gap-5">
                <CheckCircle className="w-16 h-16 text-[#055734]" />
                <div>
                  <h3 className="font-serif text-2xl font-light text-black tracking-tight mb-2">Message Sent</h3>
                  <p className="text-xs font-serif text-black/50 leading-relaxed max-w-sm mx-auto">
                    We appreciate your outreach, {name.split(' ')[0]}. Your message has been queued for our team. We usually respond within a few hours.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                  }}
                  className="mt-2 text-xs font-mono text-[#055734] uppercase tracking-widest border-b border-[#055734] pb-0.5"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            )}
          </div>

        </div>
      </section>
    </PageTransition>
  );
};
