'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, LogIn, Info, List, Map, Navigation, Settings, Utensils, Wifi, BatteryFull, Signal } from 'lucide-react';

type Slide = {
  id: string;
  tabLabel: string;
  icon: typeof Home;
  image: string;
  heading: string;
  description: string;
  tags: string[];
  statusBarTheme?: 'light' | 'dark';
};

const slides: Slide[] = [
  {
    id: 'home-page',
    tabLabel: 'Home Dashboard',
    icon: Home,
    image: '/screenshots/home-page.png',
    heading: 'Daily Muslim Dashboard',
    description:
      'Start from a focused home screen with daily local prayer times and quick access to the main app areas.',
    tags: ['Next prayer', 'Daily overview', 'Fast access'],
  },
  {
    id: 'mosque-map',
    tabLabel: 'Mosque Finder Map',
    icon: Map,
    image: '/screenshots/mosque-map.png',
    heading: 'Interactive Mosque Finder Map',
    description:
      'Locate nearby mosques on an interactive map.',
    tags: ['Interactive Maps', 'Directions', 'Live Search'],
  },
  {
    id: 'mosque-list',
    tabLabel: 'Mosque List',
    icon: List,
    image: '/screenshots/mosque-list.png',
    heading: 'Nearby Mosque List',
    description:
      'Switch from map to list view to compare nearby mosques by rating, travel time, and distance.',
    tags: ['List view', 'Ratings', 'Travel time'],
  },
  {
    id: 'mosque-details',
    tabLabel: 'Mosque Details',
    icon: Info,
    image: '/screenshots/mosque-info.png',
    heading: 'Mosque Details',
    description:
      'Open mosque profiles with ratings, address details, approximate prayer start times, nearby transport, parking, and directions.',
    tags: ['Prayer schedules', 'Transport info', 'Quick directions'],
  },
  {
    id: 'navigation',
    tabLabel: 'Navigation',
    icon: Navigation,
    image: '/screenshots/navigation.png',
    heading: 'Prayer-Aware Route Planning',
    description:
      'Compare driving, walking, and public transport routes with turn-by-turn navigation. See nearby parking, and check whether you will arrive before the next prayer.',
    tags: ['Drive/walk/transit', 'Nearby parking', 'Arrival context'],
  },
  {
    id: 'food-map',
    tabLabel: 'Halal Food Map',
    icon: Map,
    image: '/screenshots/food-map.png',
    heading: 'Halal Food Map Search',
    description:
      'Find halal restaurants visually on the map with food-specific markers and quick switching between mosque and food discovery.',
    tags: ['Food map', 'Nearby places', 'Map/list toggle'],
  },
  {
    id: 'food-list',
    tabLabel: 'Halal Food List',
    icon: List,
    image: '/screenshots/food-list.png',
    heading: 'Distance-Prioritized Halal Food',
    description:
      'Browse nearby halal restaurants in a clean list view with ratings, opening status, travel time, and distance from your selected start point.',
    tags: ['Distance-sorted list', 'Ratings', 'Opening status'],
  },
  {
    id: 'halal-food-details',
    tabLabel: 'Food Place Details',
    icon: Utensils,
    image: '/screenshots/food-info.png',
    heading: 'Halal Restaurant Profiles',
    description:
      'View restaurant photos, reviews, opening times, travel time, website links, and directions from one place.',
    tags: ['Place photos', 'Travel estimates', 'One-tap directions'],
  },
  {
    id: 'prayer-settings',
    tabLabel: 'Settings',
    icon: Settings,
    image: '/screenshots/settings.png',
    heading: 'Precise Prayer Calculation Controls',
    description:
      'Adjust dark theme, prayer time calculation method, and Hanafi Asr rules from the settings to match your local practice.',
    tags: ['Dark theme', 'Calculation method', 'Hanafi Asr toggle'],
    statusBarTheme: 'dark',
  },
  {
    id: 'login',
    tabLabel: 'User Login',
    icon: LogIn,
    image: '/screenshots/login.png',
    heading: 'User Account Login',
    description:
      'Log in to securely sync your settings across all your devices as well as being able to contribute to the platform by providing information on mosques.',
    tags: ['Account sync', 'Secure login'],
    statusBarTheme: 'dark',
  },
];

const FakeStatusBar = ({ theme = 'light' }: { theme?: 'light' | 'dark' }) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-zinc-950';
  const background = isDark ? 'bg-[#111827]' : 'bg-[#f8fafc]';

  return (
    <div
      className={`absolute left-0 right-0 top-0 z-40 flex h-7 items-center justify-between px-5 pt-1.5 text-[11px] font-medium font-sans tracking-tight ${textColor} ${background}`}
      aria-hidden="true"
    >
      <span>10:54</span>
      <div className="flex items-center gap-1.5">
        <Signal size={12} strokeWidth={2.5} />
        <Wifi size={12} strokeWidth={2.5} />
        <BatteryFull size={14} strokeWidth={2.5} className="ml-0.5" />
      </div>
    </div>
  );
};

export const FeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = slides[activeIndex];
  const midpoint = Math.ceil(slides.length / 2);
  const slideColumns = [slides.slice(0, midpoint), slides.slice(midpoint)];

  const renderFeatureCard = (slide: Slide, idx: number) => {
    const TabIcon = slide.icon;
    const isExpanded = idx === activeIndex;

    return (
      <div
        key={slide.id}
        className={`border rounded-xl transition-all duration-200 overflow-hidden ${
          isExpanded
            ? 'bg-white/80 border-emerald-500/30 shadow-sm'
            : 'bg-white/40 border-black/[0.04] hover:bg-white/60 hover:border-black/[0.08]'
        }`}
      >
        <button
          onClick={() => setActiveIndex(idx)}
          className="w-full flex items-center justify-between p-4 text-left transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-3.5">
            <TabIcon
              size={18}
              className={`transition-colors ${
                isExpanded ? 'text-emerald-700' : 'text-emerald-900/60'
              }`}
            />
            <span
              className={`text-sm transition-colors font-unbounded ${
                isExpanded ? 'text-emerald-800 font-semibold' : 'text-emerald-900/70 font-medium'
              }`}
            >
              {slide.tabLabel}
            </span>
          </div>
        </button>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-4 pb-5 pt-1 border-t border-black/[0.04]">
                <p className="text-emerald-900/80 text-xs sm:text-sm leading-relaxed mb-0">
                  {slide.description}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section id="features" className="relative py-16 md:py-20 px-6 border-t border-black/5 bg-[#082619]/10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 lg:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-emerald-950 max-w-2xl mx-auto leading-tight font-unbounded">
            Explore the app features.
          </h2>
          <p className="mt-4 text-emerald-800 text-sm md:text-base max-w-2xl mx-auto leading-relaxed hidden xl:block">
            Expand each feature below to read details and view the corresponding screen.
          </p>
        </motion.div>

        {/* Desktop-only Layout */}
        <div className="hidden xl:grid xl:grid-cols-[minmax(0,1fr)_240px_minmax(0,1fr)] 2xl:grid-cols-[minmax(0,1fr)_300px_minmax(0,1fr)] gap-6 xl:gap-8 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-3 order-1 xl:order-1"
          >
            {slideColumns[0].map((slide, idx) => renderFeatureCard(slide, idx))}
          </motion.div>
 
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center w-full xl:sticky xl:top-28 order-2 xl:order-2"
          >
            <div className="relative w-full xl:max-w-[220px] 2xl:max-w-[270px] aspect-[9/19.5] bg-zinc-950 xl:rounded-[30px] 2xl:rounded-[36px] xl:border-[4px] 2xl:border-[5px] border-zinc-900 shadow-2xl overflow-hidden flex flex-col justify-between">
              {/* Dynamic Island */}
              <div className="absolute xl:top-2 2xl:top-2.5 left-1/2 -translate-x-1/2 xl:w-[70px] 2xl:w-[85px] xl:h-[18px] 2xl:h-[22px] bg-black rounded-full z-20 flex items-center justify-end xl:px-2 2xl:px-2.5 shadow-sm">
                <div className="xl:w-1 2xl:w-1.5 xl:h-1 2xl:h-1.5 bg-[#080808] rounded-full border border-white/10 shadow-[inset_0_0_2px_rgba(255,255,255,0.2)]"></div>
              </div>

              <div className="relative flex-1 bg-zinc-950 flex flex-col overflow-hidden">
                <FakeStatusBar theme={activeSlide.statusBarTheme} />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide.id}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={activeSlide.image}
                      alt={activeSlide.heading}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-3 order-3"
          >
            {slideColumns[1].map((slide, idx) => renderFeatureCard(slide, idx + midpoint))}
          </motion.div>
        </div>

        {/* Mobile-only Layout */}
        <div className="xl:hidden flex flex-col items-center gap-6">
          {/* Phone Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center w-full"
          >
            <div className="relative w-full max-w-[220px] sm:max-w-[270px] aspect-[9/19.5] bg-zinc-950 rounded-[30px] sm:rounded-[36px] border-[4px] sm:border-[5px] border-zinc-900 shadow-2xl overflow-hidden flex flex-col justify-between">
              {/* Dynamic Island */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[70px] sm:w-[85px] h-[18px] sm:h-[22px] bg-black rounded-full z-20 flex items-center justify-end px-2 sm:px-2.5 shadow-sm">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#080808] rounded-full border border-white/10 shadow-[inset_0_0_2px_rgba(255,255,255,0.2)]"></div>
              </div>

              <div className="relative flex-1 bg-zinc-950 flex flex-col overflow-hidden">
                <FakeStatusBar theme={activeSlide.statusBarTheme} />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide.id}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={activeSlide.image}
                      alt={activeSlide.heading}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Description instructions below the phone */}
          <p className="text-emerald-800 text-sm md:text-base max-w-md text-center leading-relaxed px-4">
            Swipe the card below to read details and view the corresponding screen.
          </p>

          {/* Stacked Card Deck Carousel */}
          <div className="w-full max-w-sm px-4 relative h-[155px] overflow-visible">
            <div className="relative w-full h-full">
              <AnimatePresence initial={false}>
                {[2, 1, 0].map((depth) => {
                  const index = (activeIndex + depth) % slides.length;
                  const slide = slides[index];
                  const isTop = depth === 0;

                  return (
                    <motion.div
                      key={slide.id}
                      style={{
                        zIndex: 30 - depth,
                        transformOrigin: 'top center',
                      }}
                      initial={{
                        scale: 0.9,
                        y: 20,
                        opacity: 0,
                      }}
                      animate={{
                        scale: 1 - depth * 0.05,
                        y: depth * 10,
                        opacity: depth === 0 ? 1 : depth === 1 ? 0.8 : 0.4,
                      }}
                      exit={{
                        opacity: 0,
                        x: -150,
                        scale: 0.9,
                        rotate: -5,
                        transition: { duration: 0.2 }
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 25,
                      }}
                      className={`absolute inset-x-0 top-0 border rounded-xl bg-white border-emerald-500/30 shadow-md p-5 text-left flex flex-col gap-3 min-h-[135px] ${
                        isTop ? 'cursor-grab active:cursor-grabbing select-none touch-pan-y' : 'pointer-events-none'
                      }`}
                      drag={isTop ? 'x' : false}
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.6}
                      onDragEnd={(e, info) => {
                        if (!isTop) return;
                        const swipeThreshold = 50;
                        if (info.offset.x < -swipeThreshold) {
                          // Swipe Left -> Next (Circular)
                          setActiveIndex((prev) => (prev + 1) % slides.length);
                        } else if (info.offset.x > swipeThreshold) {
                          // Swipe Right -> Prev (Circular)
                          setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
                        }
                      }}
                    >
                      <div className="flex items-center gap-3">
                        {(() => {
                          const TabIcon = slide.icon;
                          return <TabIcon size={18} className="text-emerald-700" />;
                        })()}
                        <span className="text-sm font-unbounded text-emerald-950 font-semibold">
                          {slide.tabLabel}
                        </span>
                      </div>
                      <p className="text-emerald-900/80 text-xs leading-relaxed">
                        {slide.description}
                      </p>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Circular Pagination Indicators */}
            <div className="flex justify-center gap-2 mt-3 flex-wrap">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
                    idx === activeIndex
                      ? 'bg-emerald-600 scale-125'
                      : 'bg-emerald-900/20 hover:bg-emerald-900/40'
                  }`}
                  aria-label={`Go to feature ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Development Note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 lg:mt-16 max-w-xl mx-auto text-center px-6"
        >
          <p className="text-[10px] font-mono text-emerald-800/70 leading-relaxed uppercase tracking-wider">
            Early Active Development: We are building additional features to launch shortly, including a complete Quran reader, prayer trackers, configurable alerts, and push notifications.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
