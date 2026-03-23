'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '#home';

      navItems.forEach((item) => {
        const element = document.querySelector(item.href);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom > 140) {
          currentSection = item.href;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="header-shell header-frame transition-all duration-300">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-7">
          <button
            type="button"
            onClick={() => handleNavClick('#home')}
            className="text-2xl font-semibold tracking-[0.35em] text-[#f5d17b]"
          >
            NP
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className={`group relative text-sm uppercase tracking-[0.24em] transition-colors duration-300 ${
                  activeSection === item.href
                    ? 'text-[#f5d17b]'
                    : 'text-zinc-300 hover:text-[#f5d17b]'
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-2 left-0 h-px bg-[#f59e0b] transition-all duration-300 ${
                    activeSection === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            className="text-zinc-100 md:hidden"
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="border-t border-[rgba(245,158,11,0.3)] px-5 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className={`text-left text-sm uppercase tracking-[0.22em] transition-colors duration-300 ${
                    activeSection === item.href
                      ? 'text-[#f5d17b]'
                      : 'text-zinc-300 hover:text-[#f5d17b]'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
}
