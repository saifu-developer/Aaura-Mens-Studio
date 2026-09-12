import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { salonInfo } from '../../data/salonInfo';
import Button from '../ui/Button';
import ScrollProgress from '../ui/ScrollProgress';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar at the Top */}
      <ScrollProgress />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-obsidian-deep/90 backdrop-blur-2xl border-b border-champagne/20 shadow-[0_15px_35px_rgba(0,0,0,0.85),0_0_15px_rgba(212,175,55,0.08)]'
            : 'py-6 bg-gradient-to-b from-obsidian-deep/90 via-obsidian-deep/40 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Authentic Aaura Brand Logo with Gold Emblem */}
          <Link to="/" className="group flex items-center gap-3 focus:outline-none select-none">
            <div className="relative w-10 h-11 sm:w-11 sm:h-12 shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/aaura-logo-nav.png"
                alt="AAURA MEN'S STUDIO Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.35)]"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-serif text-lg sm:text-xl tracking-[0.25em] font-light text-ivory group-hover:text-champagne transition-colors duration-300 leading-tight">
                {salonInfo.shortName}
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.38em] uppercase text-champagne/90 font-medium font-sans group-hover:text-champagne-light transition-colors duration-300 mt-0.5">
                {salonInfo.subtitle}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {salonInfo.navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 relative py-1 ${
                    isActive
                      ? 'text-champagne font-semibold'
                      : 'text-ivory-muted hover:text-ivory'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{link.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-champagne-light via-champagne to-champagne-muted shadow-[0_0_8px_rgba(212,175,55,0.8)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Primary CTA (Magnetic) */}
          <div className="hidden lg:flex items-center space-x-5">
            <a
              href={`tel:${salonInfo.phoneRaw}`}
              className="flex items-center gap-2 text-xs tracking-wider text-ivory-muted hover:text-champagne transition-colors px-3 py-2"
            >
              <Phone className="w-3.5 h-3.5 text-champagne" />
              <span className="font-mono text-xs">{salonInfo.phone}</span>
            </a>
            <Button
              to={salonInfo.primaryCta.path}
              variant="primary"
              size="sm"
              magnetic={true}
            >
              {salonInfo.primaryCta.label}
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-ivory hover:text-champagne focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-champagne" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden bg-obsidian-deep/98 backdrop-blur-2xl border-b border-champagne/20 overflow-hidden"
            >
              <div className="px-6 pt-6 pb-8 space-y-5 flex flex-col items-center text-center">
                {salonInfo.navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-sm tracking-[0.25em] uppercase transition-colors ${
                        isActive ? 'text-champagne font-semibold' : 'text-ivory-muted hover:text-ivory'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}

                <div className="pt-4 border-t border-white/10 w-full flex flex-col items-center gap-4">
                  <a
                    href={`tel:${salonInfo.phoneRaw}`}
                    className="flex items-center gap-2 text-xs tracking-wider text-ivory-muted hover:text-champagne"
                  >
                    <Phone className="w-3.5 h-3.5 text-champagne" />
                    <span className="font-mono">{salonInfo.phone}</span>
                  </a>
                  <Button
                    to={salonInfo.primaryCta.path}
                    onClick={() => setMobileMenuOpen(false)}
                    variant="primary"
                    size="md"
                    className="w-full max-w-xs"
                    magnetic={false}
                  >
                    {salonInfo.primaryCta.label}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
