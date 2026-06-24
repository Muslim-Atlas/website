import type { Metadata } from 'next';
import { Inter, Syne } from 'next/font/google';
import './globals.css';
import { GlobalDecorations } from '@/components/GlobalDecorations';
import { GlobalToasters } from '@/components/GlobalToasters';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://muslimatlas.app'),
  title: 'Muslim Atlas — Find Mosques, Halal Food & Prayer Times',
  description:
    'Muslim Atlas is the all-in-one companion app for Muslims. Find nearby mosques, discover halal restaurants, and get accurate prayer times powered by AI — all in one place. Download the Android Alpha today.',
  keywords: ['mosque finder', 'halal food', 'prayer times', 'muslim app', 'quran', 'qibla', 'islamic app'],
  openGraph: {
    title: 'Muslim Atlas — Mosques, Halal Food & Prayer Times',
    description:
      'The Muslim community companion app. Find mosques, halal food, accurate prayer times and more. Free, no ads. Android Alpha available now.',
    url: 'https://muslimatlas.app',
    siteName: 'Muslim Atlas',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muslim Atlas — Mosques, Halal Food & Prayer Times',
    description: 'The all-in-one companion app for Muslims. Free, no ads. Android Alpha available now.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${syne.variable} antialiased`} suppressHydrationWarning>
        <GlobalDecorations />
        <main id="main-content">{children}</main>
        <GlobalToasters />
      </body>
    </html>
  );
}
