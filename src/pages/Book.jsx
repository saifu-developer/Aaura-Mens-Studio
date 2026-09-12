import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calendar, Phone, CheckCircle, Crown, MapPin } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import Button from '../components/ui/Button';
import { salonInfo } from '../data/salonInfo';
import { groomPackages } from '../data/packages';

export const Book = () => {
  const [searchParams] = useSearchParams();
  const packageParam = searchParams.get('package');
  const selectedPackage = packageParam ? groomPackages.find(p => p.id === packageParam) : null;

  return (
    <PageTransition>
      <div className="pt-36 pb-24 bg-obsidian min-h-screen">
        <Container>
          <SectionHeading
            badge="RESERVE YOUR RITUAL"
            title="Book an Appointment"
            subtitle="Select your preferred grooming session or contact our studio directly for reservations."
          />

          <div className="max-w-3xl mx-auto mt-16">
            <ScrollReveal>
              <div className="glass-panel p-8 sm:p-12 border-gold-subtle text-center">
                {/* Selected Package Badge if navigated from Packages */}
                {selectedPackage && (
                  <div className="mb-8 p-4 bg-champagne/10 border border-champagne/40 max-w-md mx-auto text-left flex items-start gap-3">
                    <Crown className="w-5 h-5 text-champagne shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-champagne block">
                        SELECTED PACKAGE RITUAL
                      </span>
                      <h4 className="font-serif text-xl text-ivory">
                        {selectedPackage.name} — {selectedPackage.formattedPrice}
                      </h4>
                      <p className="text-xs text-ivory-muted font-light mt-0.5">
                        {selectedPackage.includes.join(', ')}
                      </p>
                    </div>
                  </div>
                )}

                <div className="w-16 h-16 rounded-full bg-champagne/10 border border-champagne/30 flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-champagne" />
                </div>

                <h3 className="font-serif text-3xl text-ivory mb-4">Direct Appointment Reservation</h3>
                <p className="text-sm text-ivory-muted max-w-lg mx-auto font-light leading-relaxed mb-8">
                  To ensure personalized attention, private chair reservation, and an unhurried luxury experience, please call our studio directly to confirm your desired time slot.
                </p>

                <div className="glass-card p-6 max-w-md mx-auto mb-8 text-left space-y-3">
                  <div className="flex items-center gap-3 text-xs text-ivory">
                    <CheckCircle className="w-4 h-4 text-champagne shrink-0" />
                    <span>Guaranteed reserved chair time — Zero waiting line</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-ivory">
                    <CheckCircle className="w-4 h-4 text-champagne shrink-0" />
                    <span>Personalized consultation on hair & beard sculpting</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-ivory">
                    <CheckCircle className="w-4 h-4 text-champagne shrink-0" />
                    <span>Operating daily from 09:00 AM to 09:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-ivory">
                    <MapPin className="w-4 h-4 text-champagne shrink-0" />
                    <span>Jigani TMC, Jigani, Bengaluru</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button href={`tel:${salonInfo.phoneRaw}`} variant="primary" size="lg" icon={Phone}>
                    CALL TO BOOK: {salonInfo.phone}
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </div>
    </PageTransition>
  );
};

export default Book;
