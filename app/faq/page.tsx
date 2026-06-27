import { Navbar } from '@/components/Navbar';
import { FAQSection } from '@/components/FAQSection';
import { FooterSection } from '@/components/FooterSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ) - Muslim Atlas',
  description: 'Find answers to common questions about Muslim Atlas. Learn how to locate mosques, find halal restaurants near me, calculate accurate local prayer times, and use our private, ad-free Islamic app.',
  keywords: [
    'muslim atlas faq',
    'mosques near me',
    'halal food near me',
    'mosque finder app help',
    'accurate prayer times instructions',
    'qibla compass directions'
  ]
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      {/* Visual spacer to prevent content overlapping with the fixed navbar */}
      <div className="pt-20 lg:pt-24 bg-[#082619]/5"></div>
      <FAQSection />
      <FooterSection />
    </>
  );
}
