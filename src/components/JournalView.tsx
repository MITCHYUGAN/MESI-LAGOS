/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { JOURNAL_POSTS } from '../data';
import { JournalPost } from '../types';
import { PageTransition, FadeIn } from './PageTransition';
import { ArrowLeft, Clock, Calendar, ArrowRight, Share2, Sparkles, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const JournalView: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<JournalPost | null>(null);

  const handleShare = (post: JournalPost) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      }).catch(console.error);
    } else {
      alert(`Link to "${post.title}" copied to your clipboard.`);
    }
  };

  return (
    <PageTransition>
      {/* Title Banner */}
      <section className="bg-[#E6DCD6]/30 py-16 px-6 text-center border-b border-black/5">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-mono tracking-[0.3em] text-[#055734] uppercase block mb-3 font-semibold">SLOW LIVING STORIES</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">
            The MÈSI <span className="italic text-[#055734] font-semibold">Journal</span>
          </h1>
          <p className="text-sm font-sans text-black/80 leading-relaxed max-w-xl mx-auto font-medium">
            An editorial canvas for slow thoughts, culinary notes, cocktail pairings, architectural inspirations, and interviews with the creative soul of Lagos.
          </p>
        </div>
      </section>

      {/* Main Blog List */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_POSTS.map((post, idx) => (
            <FadeIn key={post.id} delay={idx * 0.1}>
              <div 
                onClick={() => setSelectedPost(post)}
                className="group cursor-pointer bg-white border border-black/5 p-1.5 rounded-sm flex flex-col justify-between h-[520px] hover:shadow-md transition-shadow duration-300"
              >
                <div>
                  <div className="h-52 overflow-hidden bg-stone-100 mb-6">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover grayscale-[10%] group-hover:scale-101 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="px-4">
                    <div className="flex items-center gap-3 text-[10px] font-mono tracking-widest text-black/40 mb-3 uppercase">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="font-serif text-xl font-bold text-black tracking-tight mb-3 group-hover:text-[#055734] transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-xs font-sans text-black/80 leading-relaxed line-clamp-4 font-medium">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-4 pb-4 pt-4 border-t border-black/5 flex items-center justify-between text-[11px] font-mono tracking-widest text-black/50">
                  <span>{post.date}</span>
                  <div className="flex items-center gap-1.5 text-[#055734] font-bold group-hover:translate-x-1 transition-transform">
                    <span>READ ENTRY</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* IMMERSIVE MAGAZINE READING VIEW (Full Overlay Pane) */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white overflow-y-auto"
          >
            {/* Top Minimal Editorial Control Bar */}
            <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-black/5 py-4 px-6 sm:px-12 flex justify-between items-center z-10">
              <button
                onClick={() => setSelectedPost(null)}
                className="flex items-center gap-2 text-xs font-mono tracking-widest text-black/70 hover:text-black transition-colors"
              >
                <ArrowLeft className="w-4 h-4 text-[#055734]" />
                <span>RETURN TO JOURNAL</span>
              </button>

              <div className="flex flex-col items-center">
                <span className="font-serif text-sm tracking-[0.25em] text-black font-semibold">MÈSI JOURNAL</span>
                <span className="text-[7px] font-mono tracking-[0.4em] text-black/40 uppercase mt-0.5">EST. 2026</span>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleShare(selectedPost)}
                  className="p-2 border border-black/10 hover:border-black/20 text-black transition-colors rounded-full"
                  aria-label="Share story"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-xs font-mono tracking-widest text-black/60 hover:text-black border border-black/15 px-3 py-1.5"
                >
                  CLOSE
                </button>
              </div>
            </div>

            {/* Immersive Layout Container */}
            <article className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
              
              {/* Category, Date & Read Time metadata */}
              <div className="flex items-center justify-center gap-3 text-[11px] font-mono tracking-[0.3em] text-[#055734] uppercase mb-6">
                <span>{selectedPost.category}</span>
                <span>•</span>
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-center font-bold text-black tracking-tight leading-[1.1] mb-12">
                {selectedPost.title}
              </h1>

              {/* Cover Image Block */}
              <div className="p-2 border border-black/5 bg-white mb-16 shadow-sm">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  className="w-full h-[450px] object-cover grayscale-[10%]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Body Text Pane (Sophisticated dropcap, beautiful spacing) */}
              <div className="font-serif text-base sm:text-lg text-black/90 leading-relaxed space-y-8 max-w-2xl mx-auto font-medium">
                {selectedPost.content.map((paragraph, index) => {
                  if (index === 0) {
                    const firstLetter = paragraph.charAt(0);
                    const restText = paragraph.slice(1);
                    return (
                      <p key={index} className="first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-[#055734] first-letter:font-semibold first-letter:mt-1">
                        {restText}
                      </p>
                    );
                  }
                  return (
                    <p key={index}>
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Bottom Editorial Signoff */}
              <div className="mt-20 pt-12 border-t border-black/10 flex flex-col items-center gap-4 max-w-2xl mx-auto">
                <div className="flex flex-col items-center">
                  <BookOpen className="w-6 h-6 text-[#055734]" />
                  <span className="font-serif text-sm italic text-black/40 mt-2">Finis.</span>
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="mt-4 bg-stone-100 hover:bg-[#E6DCD6]/30 text-black px-8 py-3.5 text-xs font-mono tracking-widest uppercase transition-colors"
                >
                  BACK TO STORIES
                </button>
              </div>

            </article>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};
