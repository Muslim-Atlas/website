'use client';

import { useState } from 'react';
import { Download, ChevronDown, ChevronUp } from 'lucide-react';
import { WaitlistForm } from './WaitlistForm';
import { motion, AnimatePresence } from 'framer-motion';

const GITHUB_RELEASES = 'https://github.com/YusufQuresh1/Muslim-Atlas/releases';

export const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<'download' | 'waitlist'>('download');

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-24 lg:pt-32 lg:pb-32 overflow-hidden z-10 bg-gradient-to-b from-white/60 to-transparent border-b border-black/5"
    >
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mt-4 lg:mt-8">
        
        {/* Left Column: Product Value Proposition */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Release Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-emerald-500/20 text-emerald-800 mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Android Build Available
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-emerald-950 leading-[1.1] mb-6 max-w-2xl font-unbounded">
            Find mosques, halal food, and prayer times<br />
            <span className="text-emerald-600">all in one place.</span>
          </h1>

          {/* Subheading */}
          <p className="text-emerald-800 text-xs sm:text-sm md:text-base max-w-xl leading-relaxed font-sans font-medium">
            Muslim Atlas is built for your daily islamic routines. Fast, secure, and distraction-free. Free of advertisements and full of features including Quran, Prayer Tracker, and AI Assistant.
          </p>
        </motion.div>

        {/* Right Column: Unified CTAs Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="lg:col-span-5 flex justify-center w-full"
        >
          <div id="hero-waitlist-card" className="w-full max-w-md px-4 py-4 lg:p-6 lg:md:p-8 flex flex-col gap-4 transition-all duration-500 rounded-3xl border border-transparent lg:border-white/80 lg:bg-white/65 lg:backdrop-blur-md lg:shadow-[0_12px_40px_rgba(0,0,0,0.05)]">
            
            {/* Download Section (Get the App) */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setActiveTab('download')}
                className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                aria-expanded={activeTab === 'download'}
              >
                <div className="flex flex-col">
                  <h3 className="text-sm font-semibold text-emerald-950 font-unbounded group-hover:text-emerald-700 transition-colors">
                    Get the App
                  </h3>
                  {activeTab === 'download' && (
                    <p className="text-[11px] text-emerald-800 font-medium mt-0.5">
                      Install the app on your Android device.
                    </p>
                  )}
                </div>
                <div className="text-emerald-700 flex-shrink-0">
                  {activeTab === 'download' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </button>
              
              <AnimatePresence initial={false}>
                {activeTab === 'download' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pt-2 flex flex-col gap-2.5">
                      <a
                        id="hero-download-btn"
                        href={GITHUB_RELEASES}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-pill-primary w-full text-xs py-2.5"
                      >
                        <Download size={14} />
                        Download Android APK
                      </a>
                      <p className="text-[9px] text-emerald-700 text-center font-mono">
                        Version 1.0.0
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Technical Separator */}
            <div className="border-t border-emerald-900/10 my-1"></div>

            {/* Waitlist Section (Join the Waitlist) */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setActiveTab('waitlist')}
                className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                aria-expanded={activeTab === 'waitlist'}
              >
                <div className="flex flex-col">
                  <h3 className="text-sm font-semibold text-emerald-950 font-unbounded group-hover:text-emerald-700 transition-colors">
                    Join the Waitlist
                  </h3>
                  {activeTab === 'waitlist' && (
                    <p className="text-[11px] text-emerald-800 font-medium mt-0.5">
                      Get notified when the iOS app and public builds launch.
                    </p>
                  )}
                </div>
                <div className="text-emerald-700 flex-shrink-0">
                  {activeTab === 'waitlist' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {activeTab === 'waitlist' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pt-2">
                      <WaitlistForm compact />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Unique Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-mono font-semibold tracking-widest text-emerald-900/60 uppercase">
          Explore
        </span>
        <div className="w-5 h-9 border border-emerald-900/25 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ 
              y: [0, 14, 0],
              opacity: [1, 0.4, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.8, 
              ease: "easeInOut" 
            }}
            className="w-1 h-2 bg-emerald-600 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
