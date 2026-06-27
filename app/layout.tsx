import type { Metadata } from 'next';
import { Syne, Unbounded } from 'next/font/google';
import './globals.css';
import { GlobalDecorations } from '@/components/GlobalDecorations';
import { GlobalToasters } from '@/components/GlobalToasters';
import { CookieBanner } from '@/components/CookieBanner';

const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
});

const unbounded = Unbounded({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-unbounded',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://muslimatlas.app'),
  title: 'Muslim Atlas - Mosque Finder, Halal Near Me & Accurate Prayer Times',
  description:
    'Muslim Atlas is the ultimate private, ad-free app for Muslims. Find mosques near me, discover halal food near me, locate halal restaurants, and calculate accurate local prayer times.',
  keywords: [
    'mosque finder',
    'mosques near me',
    'halal near me',
    'halal food near me',
    'halal restaurants near me',
    'prayer times near me',
    'accurate prayer times',
    'muslim app',
    'masjid finder',
    'local mosques',
    'adhan times app',
    'islamic app',
    'ad-free prayer times',
    'quran app'
  ],
  openGraph: {
    title: 'Muslim Atlas - Mosque Finder, Halal Near Me & Accurate Prayer Times',
    description:
      'The ultimate private, ad-free app for Muslims. Find mosques near me, discover halal food near me, get accurate local prayer times, and use our Qibla finder.',
    url: 'https://muslimatlas.app',
    siteName: 'Muslim Atlas',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muslim Atlas - Mosque Finder, Halal Near Me & Accurate Prayer Times',
    description: 'The ultimate private, ad-free app for Muslims. Find mosques near me, halal restaurants near me, and accurate local prayer times.',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MobileApplication",
      "@id": "https://muslimatlas.app/#application",
      "name": "Muslim Atlas",
      "url": "https://muslimatlas.app",
      "image": "https://muslimatlas.app/logo.png",
      "operatingSystem": "Android, iOS",
      "applicationCategory": "UtilitiesApplication, LifestyleApplication",
      "description": "Muslim Atlas is a private, ad-free app for Muslims to find nearby mosques, discover halal food directories, and calculate accurate local prayer times.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "author": {
        "@type": "Organization",
        "name": "Muslim Atlas",
        "url": "https://github.com/Muslim-Atlas"
      },
      "featureList": [
        "Mosque Finder: Find mosques near me with precise prayer and jamat times.",
        "Halal Food Finder: Discover nearby verified halal restaurants and food places.",
        "Accurate Prayer Times: Custom local calculations (Hanafi/Shafi'i) based on exact coordinates.",
        "Private & Ad-Free: Built distraction-free with zero ads or user tracking.",
        "Qibla Compass: Find the exact direction to the Kaaba from anywhere.",
        "Quran Reader: Ad-free Quran access with translations."
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://muslimatlas.app/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I find mosques near me with exact prayer times?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Muslim Atlas uses live geographical databases and high-performance maps to locate nearby mosques. It provides exact transit times, direct driving/walking directions, and approximate prayer start times, serving as an all-in-one mosque finder and prayer compass to help you pray in congregation wherever you are."
          }
        },
        {
          "@type": "Question",
          "name": "How does the halal food map help me locate halal restaurants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The built-in Halal Food Finder filters Google Places data to show you verified halal restaurants and food places near your coordinates. You can toggle between map view and distance-prioritized lists to compare reviews, ratings, walking distances, and travel times, ensuring you can quickly find halal food near me."
          }
        },
        {
          "@type": "Question",
          "name": "How does Muslim Atlas ensure accurate prayer times?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our app calculates prayer times locally using precise coordinates (latitude/longitude), rather than general city approximations. You can customize calculation configurations—including high-latitude guidelines, Hanafi/Shafi'i Asr time rules, and localized twilight angles—making it the most accurate ad-free prayer times calculation tool available."
          }
        },
        {
          "@type": "Question",
          "name": "Is Muslim Atlas an ad-free Islamic app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Muslim Atlas is 100% free of advertisements, paywalls, and intrusive tracking. We believe that basic daily Islamic utility apps (like Quran readers, mosque finders, and prayer trackers) should be distraction-free. The project is funded directly by community donations to cover server, database, and map API operational costs."
          }
        },
        {
          "@type": "Question",
          "name": "When is the iOS version launching and where can I download the Android APK?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Android Alpha build is available today and can be downloaded directly from our official GitHub releases page. We are currently developing the iOS app. You can join the email waitlist on our home screen to be notified the moment the iOS version launches and public testing begins."
          }
        },
        {
          "@type": "Question",
          "name": "Does Muslim Atlas show jamat (congregation) times for nearby mosques?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Muslim Atlas displays approximate or community-sourced jamat times for mosques in your vicinity. Users can log in to contribute and update local masjid jamat times directly, keeping the congregation schedule accurate for everyone in the neighborhood."
          }
        },
        {
          "@type": "Question",
          "name": "Does the app include a Qibla finder compass?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Muslim Atlas features a high-precision Qibla direction finder compass. By using your device's geographical coordinates and compass sensors, it calculates and displays the exact angle pointing toward the Holy Kaaba in Makkah, ensuring you can pray in the correct direction anywhere in the world."
          }
        },
        {
          "@type": "Question",
          "name": "Can I read the Quran on Muslim Atlas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Muslim Atlas includes an offline-capable, ad-free Quran reader. You can read the Quran with clear Arabic script and access translations in multiple languages, making it a distraction-free tool for your daily Quran recitation."
          }
        },
        {
          "@type": "Question",
          "name": "How does the route planning feature help me pray on time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our unique route planning calculates travel duration to a selected mosque and cross-references it with live prayer times. It alerts you if you are likely to arrive after the adhan or miss the jamat, helping you plan your commutes with your salah schedule in mind."
          }
        },
        {
          "@type": "Question",
          "name": "Does Muslim Atlas track or store my location data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, privacy is a core pillar of Muslim Atlas. The app calculates your local prayer times and Qibla direction directly on your device. Your precise location coordinates are never stored on our servers, and we never share your data with third parties, offering a completely private Islamic utility app experience."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${unbounded.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GlobalDecorations />
        <main id="main-content">{children}</main>
        <GlobalToasters />
        <CookieBanner />
      </body>
    </html>
  );
}
