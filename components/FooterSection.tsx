import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const GITHUB_RELEASES = 'https://github.com/YusufQuresh1/Muslim-Atlas/releases';
const GITHUB_REPO = 'https://github.com/YusufQuresh1/Muslim-Atlas';
const BUY_ME_A_COFFEE = 'https://buymeacoffee.com/muslimatlas';

export const FooterSection = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-black/5 bg-emerald-50 py-16 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-zinc-200">
                <Image
                  src="/logo.png"
                  alt="Muslim Atlas logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-emerald-950 font-semibold text-base font-unbounded">
                Muslim Atlas
              </span>
            </div>
            <p className="text-xs text-emerald-800 leading-relaxed max-w-xs font-medium">
              A private, ad-free app for Muslims. Find mosques, halal places, and calculated prayer times. Free forever.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[10px] font-mono font-semibold uppercase tracking-wider text-emerald-600 mb-1">
              App
            </h4>
            <a
              href={GITHUB_RELEASES}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-emerald-900/70 hover:text-emerald-700 transition-colors font-medium"
            >
              Download Android Alpha
            </a>
            <a
              href="#features"
              className="text-xs text-emerald-900/70 hover:text-emerald-700 transition-colors font-medium"
            >
              Features
            </a>
            <a
              href="#waitlist"
              className="text-xs text-emerald-900/70 hover:text-emerald-700 transition-colors font-medium"
            >
              Join Waitlist
            </a>
            <a
              href="#support"
              className="text-xs text-emerald-900/70 hover:text-emerald-700 transition-colors font-medium"
            >
              Support Us
            </a>
            <a
              href="#contact"
              className="text-xs text-emerald-900/70 hover:text-emerald-700 transition-colors font-medium"
            >
              Contact
            </a>
            <Link
              href="/privacy"
              className="text-xs text-emerald-900/70 hover:text-emerald-700 transition-colors font-medium"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[10px] font-mono font-semibold uppercase tracking-wider text-emerald-600 mb-1">
              Developer Links
            </h4>
            <a
              href={GITHUB_REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-emerald-900/70 hover:text-emerald-700 transition-colors font-medium"
            >
              <ExternalLink size={12} />
              GitHub Repository
            </a>
            <a
              href={BUY_ME_A_COFFEE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-emerald-900/70 hover:text-emerald-700 transition-colors font-medium"
            >
              Support Project (Buy Me a Coffee)
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-black/5">
          <p className="text-[10px] font-mono text-emerald-800/70">
            © 2026 Muslim Atlas. All rights reserved.
          </p>
          <p className="text-[10px] font-mono text-emerald-800/70">
            Engineered By <a href="https://www.yqwebstudio.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-950 transition-colors font-bold">YQ Web Studio</a>
          </p>
        </div>

      </div>
    </footer>
  );
};
