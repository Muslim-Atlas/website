'use client';

import { Heart, Coffee, Globe, Compass, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const BUY_ME_A_COFFEE = 'https://buymeacoffee.com/muslimatlas';

export const SupportSection = () => {
  return (
    <section id="support" className="relative pt-12 pb-24 md:pt-16 md:pb-32 xl:pt-24 xl:pb-32 2xl:py-0 xl:min-h-[85vh] 2xl:min-h-[95vh] xl:flex xl:items-center px-6 border-t border-black/5 bg-white/40 z-10">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16 items-center">
        
        {/* Left Column: Cost Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 flex flex-col items-start text-left w-full"
        >
          <span className="text-[10px] 2xl:text-xs font-mono font-semibold uppercase tracking-wider text-emerald-700 mb-3 block w-full text-center lg:text-left">
            Community Supported
          </span>

          <h2 className="text-2xl md:text-4xl 2xl:text-5xl font-bold text-emerald-950 tracking-tight mb-6 leading-tight font-unbounded w-full text-center lg:text-left">
            Built for the community, sustained by you.
          </h2>

          <div className="text-emerald-900/80 text-xs sm:text-sm 2xl:text-base leading-relaxed flex flex-col gap-4 max-w-xl 2xl:max-w-2xl mb-8 2xl:mb-10 font-sans font-medium">
            <p>
              Muslim Atlas is an independent project dedicated to providing the best possible experience for your daily needs. We believe in keeping the app completely free of advertisements and intrusive tracking.
            </p>
            <p>
              To offer highly accurate local data, we utilize premium services like Mapbox for seamless mapping and Google Places for comprehensive halal food searches.
            </p>
            <p>
              These necessary integrations require ongoing support. Your contributions directly fund the server costs and API limits, ensuring the platform remains fast, reliable, and accessible for everyone.
            </p>
          </div>

          {/* Support Actions (Desktop only) */}
          <div className="hidden lg:flex flex-wrap items-center gap-3 w-full">
            <a
              href={BUY_ME_A_COFFEE}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-primary text-xs py-2.5 2xl:text-sm 2xl:py-3.5 2xl:px-8"
            >
              <Coffee className="fill-white w-3.5 h-3.5 2xl:w-4 2xl:h-4" />
              Support Project (Buy Me a Coffee)
            </a>
          </div>
        </motion.div>

        {/* Right Column: Community Ethos Glass Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-5 flex flex-col items-center gap-12 2xl:gap-16 w-full"
        >
          <div className="glass-panel w-full max-w-md 2xl:max-w-lg p-8 2xl:p-10 flex flex-col gap-6 2xl:gap-8 text-center items-center">
            
            <div className="w-12 h-12 2xl:w-16 2xl:h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
              <Users className="w-5 h-5 2xl:w-7 2xl:h-7" />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg 2xl:text-xl font-bold text-emerald-950 font-unbounded">100% Free. No Ads.</h3>
              <p className="text-xs 2xl:text-sm text-emerald-900/70 leading-relaxed font-sans font-medium">
                Designed to serve our ummah. Free from advertisements and paywalls. Funded directly by users to cover essential operational costs.
              </p>
            </div>

            <div className="w-full border-t border-black/5 pt-4 flex flex-col gap-3 2xl:gap-4 text-left">
              <div className="flex items-center gap-3 text-xs 2xl:text-sm text-emerald-800 font-medium">
                <Globe className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 text-emerald-600" />
                <span>Mapbox infrastructure for fast maps</span>
              </div>
              <div className="flex items-center gap-3 text-xs 2xl:text-sm text-emerald-800 font-medium">
                <Compass className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 text-emerald-600" />
                <span>Google Places database integrations</span>
              </div>
            </div>

            <p className="text-[10px] 2xl:text-xs text-emerald-700 font-mono italic">
              &ldquo;JazakAllah khair for your continued support.&rdquo;
            </p>

          </div>

          {/* Support Actions (Mobile only) */}
          <div className="flex lg:hidden flex-wrap justify-center gap-3 w-full">
            <a
              href={BUY_ME_A_COFFEE}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-primary text-xs py-2.5"
            >
              <Coffee size={14} className="fill-white" />
              Support Project (Buy Me a Coffee)
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
