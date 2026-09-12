import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react';
import { salonInfo } from '../../data/salonInfo';
import Container from '../ui/Container';

export const Footer = () => {
  return (
    <footer className="bg-obsidian-deep text-ivory-muted border-t border-champagne/15 pt-16 pb-12 relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-glow pointer-events-none blur-3xl opacity-20" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/" className="inline-flex items-center gap-3.5 group mb-5">
                <div className="w-12 h-13 shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="/aaura-logo-nav.png"
                    alt="AAURA MEN'S STUDIO Logo"
                    className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.35)]"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl tracking-[0.25em] text-ivory group-hover:text-champagne transition-colors leading-tight">
                    {salonInfo.shortName}
                  </h3>
                  <p className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-champagne font-medium mt-0.5">
                    {salonInfo.subtitle}
                  </p>
                </div>
              </Link>

              <p className="font-serif italic text-lg text-champagne-light mb-6 tracking-wide">
                "{salonInfo.tagline}"
              </p>

              <p className="text-xs sm:text-sm text-ivory-muted max-w-md font-light leading-relaxed mb-6">
                An exclusive men's studio engineered for modern gentlemen who value precision craftsmanship, high-end grooming rituals, and unmistakable refinement.
              </p>
            </div>

            <div className="text-xs tracking-widest text-champagne/70 font-mono">
              AAURA MEN'S STUDIO &copy; {new Date().getFullYear()}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-ivory mb-6 pb-2 border-b border-champagne/20">
              EXPLORE STUDIO
            </h4>
            <ul className="space-y-3 text-xs tracking-widest uppercase">
              {salonInfo.navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="inline-flex items-center gap-1.5 hover:text-champagne transition-colors py-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-champagne" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to={salonInfo.primaryCta.path}
                  className="inline-flex items-center gap-1.5 text-champagne font-semibold hover:text-champagne-light transition-colors py-1"
                >
                  <span>Book Appointment</span>
                  <ArrowUpRight className="w-3 h-3 text-champagne" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-ivory mb-6 pb-2 border-b border-champagne/20">
              LOCATION & CONTACT
            </h4>

            {/* Address */}
            <div className="flex items-start gap-3.5 text-xs text-ivory-muted leading-relaxed">
              <MapPin className="w-4 h-4 text-champagne shrink-0 mt-1" />
              <div>
                <p className="text-ivory font-medium mb-1">{salonInfo.address.line1}</p>
                <p>{salonInfo.address.line2}</p>
                <p>{salonInfo.address.line3}, {salonInfo.address.city} – {salonInfo.address.pincode}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3.5 text-xs">
              <Phone className="w-4 h-4 text-champagne shrink-0" />
              <a
                href={`tel:${salonInfo.phoneRaw}`}
                className="font-mono text-ivory hover:text-champagne transition-colors"
              >
                {salonInfo.phone}
              </a>
            </div>

            {/* Operating Hours */}
            <div className="flex items-start gap-3.5 text-xs text-ivory-muted">
              <Clock className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
              <div>
                <p className="text-ivory font-medium mb-0.5">Operating Hours</p>
                {salonInfo.hours.map((h, i) => (
                  <p key={i}>{h.days}: <span className="font-mono text-champagne-light">{h.time}</span></p>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-ivory-dark font-light tracking-wider">
          <p>Jigani, Bengaluru · Premium Luxury Men's Grooming</p>
          <p className="text-champagne/50">Designed with cinematic elegance</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
