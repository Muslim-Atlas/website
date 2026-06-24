'use client';

import Script from 'next/script';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export const CookieBanner = () => {
  const [consent, setConsent] = useState<'granted' | 'denied' | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('cookie-consent');
    if (stored === 'granted' || stored === 'denied') {
      setConsent(stored);
    }
  }, []);

  const handleConsent = (choice: 'granted' | 'denied') => {
    localStorage.setItem('cookie-consent', choice);
    setConsent(choice);
  };

  // Prevent server-client hydration mismatch
  if (!mounted) return null;

  const showBanner = consent === null;

  return (
    <>
      {/* Conditionally load Google Analytics script only if consent is granted */}
      {consent === 'granted' && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-9E6BJ9R0HX"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9E6BJ9R0HX');
            `}
          </Script>
        </>
      )}

      {/* Consent Banner overlay */}
      {showBanner && (
        <div 
          id="cookie-consent-banner" 
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-sm z-[90] bg-white/95 backdrop-blur-md border border-emerald-500/20 shadow-2xl p-5 rounded-2xl flex flex-col gap-4 text-left"
        >
          <p className="text-[11px] text-emerald-950 leading-relaxed font-sans font-medium">
            We use cookies and Google Analytics to understand website traffic and improve your experience. By clicking &ldquo;Agree&rdquo;, you consent to our use of these tracking technologies. Read our <Link href="/privacy" className="underline hover:text-emerald-700">Privacy Policy</Link>.
          </p>
          <div className="flex gap-2.5 w-full">
            <button
              onClick={() => handleConsent('granted')}
              className="btn-pill-primary text-xs py-2 px-5 flex-1 cursor-pointer"
            >
              Agree
            </button>
            <button
              onClick={() => handleConsent('denied')}
              className="btn-pill-secondary text-xs py-2 px-5 flex-1 cursor-pointer"
            >
              Disagree
            </button>
          </div>
        </div>
      )}
    </>
  );
};
