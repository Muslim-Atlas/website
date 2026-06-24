import type { Metadata } from 'next';
import { Syne, Unbounded } from 'next/font/google';
import './globals.css';
import { GlobalDecorations } from '@/components/GlobalDecorations';
import { GlobalToasters } from '@/components/GlobalToasters';
import Script from 'next/script';

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
  title: 'Muslim Atlas - Find Mosques, Halal Food & Prayer Times',
  description:
    'Muslim Atlas is the all-in-one app for Muslims. Find nearby mosques, discover halal restaurants, and get accurate prayer times powered by AI - all in one place. Download the Android Alpha today.',
  keywords: ['mosque finder', 'halal food', 'prayer times', 'muslim app', 'quran', 'qibla', 'islamic app'],
  openGraph: {
    title: 'Muslim Atlas - Mosques, Halal Food & Prayer Times',
    description:
      'The Muslim community app. Find mosques, halal food, accurate prayer times and more. Free, no ads. Android Alpha available now.',
    url: 'https://muslimatlas.app',
    siteName: 'Muslim Atlas',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muslim Atlas - Mosques, Halal Food & Prayer Times',
    description: 'The all-in-one app for Muslims. Free, no ads. Android Alpha available now.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${unbounded.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {/* Google Analytics */}
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

        <GlobalDecorations />
        <main id="main-content">{children}</main>
        <GlobalToasters />
      </body>
    </html>
  );
}
