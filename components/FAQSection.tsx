'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
  keywords: string; // Internal metadata context for crawler indexing
};

const faqItems: FAQItem[] = [
  {
    question: "How do I find mosques near me with exact prayer times?",
    answer: "Muslim Atlas uses live geographical databases and high-performance maps to locate nearby mosques. It provides exact transit times, direct driving/walking directions, and approximate prayer start times, serving as an all-in-one mosque finder and prayer compass to help you pray in congregation wherever you are.",
    keywords: "find mosques near me, mosque finder, masjid finder app, prayer times near me, local mosques"
  },
  {
    question: "How does the halal food map help me locate halal restaurants?",
    answer: "The built-in Halal Food Finder filters Google Places data to show you verified halal restaurants and food places near your coordinates. You can toggle between map view and distance-prioritized lists to compare reviews, ratings, walking distances, and travel times, ensuring you can quickly find halal food near me.",
    keywords: "halal food near me, halal restaurants near me, find halal food, halal food finder, halal place locator"
  },
  {
    question: "How does Muslim Atlas ensure accurate prayer times?",
    answer: "Our app calculates prayer times locally using precise coordinates (latitude/longitude), rather than general city approximations. You can customize calculation configurations—including high-latitude guidelines, Hanafi/Shafi'i Asr time rules, and localized twilight angles—making it the most accurate ad-free prayer times calculation tool available.",
    keywords: "accurate prayer times, prayer time calculator, exact adhan times, prayer tracking app"
  },
  {
    question: "Is Muslim Atlas an ad-free Islamic app?",
    answer: "Yes, Muslim Atlas is 100% free of advertisements, paywalls, and intrusive tracking. We believe that basic daily Islamic utility apps (like Quran readers, mosque finders, and prayer trackers) should be distraction-free. The project is funded directly by community donations to cover server, database, and map API operational costs.",
    keywords: "ad-free prayer times app, free quran app, community funded islamic app, private muslim app"
  },
  {
    question: "When is the iOS version launching and where can I download the Android APK?",
    answer: "The Android Alpha build is available today and can be downloaded directly from our official GitHub releases page. We are currently developing the iOS app. You can join the email waitlist on our home screen to be notified the moment the iOS version launches and public testing begins.",
    keywords: "download android apk, iOS waitlist, app launch notifications, github releases"
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-16 md:py-24 px-6 border-t border-black/5 bg-[#082619]/5 z-10">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-emerald-700 mb-3 block">
            FAQ & Discoverability
          </span>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-emerald-950 max-w-2xl mx-auto leading-tight font-unbounded">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-emerald-800 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Quick answers about finding mosques near me, locating halal food directories, calculating accurate prayer times, and downloading the app.
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-3">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white/80 border-emerald-500/30 shadow-sm'
                    : 'bg-white/40 border-black/[0.04] hover:bg-white/60'
                }`}
                // Dynamic metadata attribute to assist search crawls and LLM scrapers
                data-keywords={item.keywords}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-sm md:text-base font-semibold text-emerald-950 font-unbounded pr-4">
                    {item.question}
                  </h3>
                  <div className="text-emerald-700 flex-shrink-0">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 md:px-5 pb-5 pt-1 border-t border-black/[0.04]">
                        <p className="text-emerald-900/80 text-xs sm:text-sm leading-relaxed mb-0 font-medium">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
