'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Download } from 'lucide-react';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Waitlist', href: '#waitlist' },
  { label: 'Support Us', href: '#support' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#waitlist') {
      e.preventDefault();
      setMobileOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        const card = document.getElementById('hero-waitlist-card');
        const input = document.getElementById('hero-email-input') as HTMLInputElement | null;
        
        if (card) {
          card.style.backgroundColor = '#a7f3d0'; // bg-emerald-200
          card.style.borderColor = '#059669'; // border-emerald-600
          card.classList.add('ring-8', 'ring-emerald-500/30', 'shadow-[0_0_40px_rgba(5,150,105,0.5)]', 'scale-[1.03]');
          setTimeout(() => {
            card.style.backgroundColor = '';
            card.style.borderColor = '';
            card.classList.remove('ring-8', 'ring-emerald-500/30', 'shadow-[0_0_40px_rgba(5,150,105,0.5)]', 'scale-[1.03]');
          }, 1500);
        }
        
        if (input) {
          input.focus();
        }
      }, 450);
    } else if (href.startsWith('#')) {
      e.preventDefault();
      setMobileOpen(false);
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ${
        mobileOpen
          ? 'bg-white border-b border-zinc-200'
          : scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-zinc-200'
            : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav
        className={`max-w-6xl mx-auto px-6 flex items-center justify-between transition-all duration-250 relative z-50 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-200 group-hover:border-zinc-300 transition-colors shadow-sm">
            <Image
              src="/logo.png"
              alt="Muslim Atlas logo"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-emerald-950 font-unbounded font-semibold text-sm tracking-tight">
            Muslim Atlas
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-xs font-semibold text-zinc-600 hover:text-emerald-800 transition-colors duration-150 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a href="https://github.com/YusufQuresh1/Muslim-Atlas/releases" target="_blank" rel="noopener noreferrer" className="btn-pill-primary py-2 px-5 text-[10px] uppercase tracking-wider font-semibold">
            <Download size={14} className="mr-1.5" />
            Download
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          id="navbar-mobile-toggle"
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden p-2 rounded-lg text-emerald-900 hover:bg-emerald-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Full-screen Flyout Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-white flex flex-col px-6 py-5 h-screen w-screen overflow-hidden">
          {/* Header inside Flyout */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setMobileOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-200 shadow-sm">
                <Image
                  src="/logo.png"
                  alt="Muslim Atlas logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-emerald-950 font-unbounded font-semibold text-sm tracking-tight">
                Muslim Atlas
              </span>
            </a>

            {/* Close button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg text-emerald-900 hover:bg-emerald-100 transition-colors"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          {/* Stacked and Centered Navigation Links + Download Button */}
          <div className="flex-1 flex flex-col justify-center w-full max-w-xs mx-auto gap-8">
            <div className="w-full">
              {navLinks.map((link, idx) => (
                <div key={link.label} className="w-full">
                  {idx === 0 && <div className="border-t border-zinc-100 w-full" />}
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-emerald-950 hover:text-emerald-600 transition-colors text-center block py-4.5 text-base font-unbounded font-semibold"
                  >
                    {link.label}
                  </a>
                  <div className="border-b border-zinc-100 w-full" />
                </div>
              ))}
            </div>

            <a
              href="https://github.com/YusufQuresh1/Muslim-Atlas/releases"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="btn-pill-primary text-xs w-full py-3.5 justify-center flex items-center"
            >
              <Download size={16} className="mr-2" />
              Download Android APK
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
