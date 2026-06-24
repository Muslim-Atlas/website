import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { WaitlistSection } from '@/components/WaitlistSection';
import { FooterSection } from '@/components/FooterSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <WaitlistSection />
      <FooterSection />
    </>
  );
}
