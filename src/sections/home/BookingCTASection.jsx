import React from 'react';
import { Calendar, Phone, MapPin, Sparkles } from 'lucide-react';
import { salonInfo } from '../../data/salonInfo';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import ScrollReveal from '../../components/ui/ScrollReveal';

export const BookingCTASection = () => {
  return (
    <section className="py-24 bg-obsidian relative overflow-hidden border-t border-champagne/20">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-gold-glow pointer-events-none blur-3xl opacity-20" />

      <Container>
        <ScrollReveal>
          <div className="glass-panel p-10 sm:p-16 text-center relative overflow-hidden border-gold-subtle shadow-luxury">
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-champagne border border-champagne/30 bg-champagne/10 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-champagne" />
                <span>EXCLUSIVITY AWAITS</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-ivory tracking-tight mb-6 leading-tight">
                Reserve Your Grooming Session
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-ivory-muted font-light max-w-2xl mb-10 leading-relaxed">
                Step into a sanctuary of dark luxury and precision care. Experience the signature standards of AAURA MEN'S STUDIO.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto mb-10">
                <Button to={salonInfo.primaryCta.path} variant="primary" size="lg" icon={Calendar} className="w-full sm:w-auto">
                  {salonInfo.primaryCta.label}
                </Button>
                <Button href={`tel:${salonInfo.phoneRaw}`} variant="secondary" size="lg" icon={Phone} className="w-full sm:w-auto">
                  CALL {salonInfo.phone}
                </Button>
              </div>

              {/* Verified Location Summary */}
              <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-ivory-muted">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-champagne" />
                  <span>Jigani TMC, Jigani, Bengaluru – 560105</span>
                </div>
                <span className="hidden sm:inline text-white/20">|</span>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-champagne" />
                  <span className="font-mono">{salonInfo.phone}</span>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};

export default BookingCTASection;
