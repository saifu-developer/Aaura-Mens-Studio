import React from 'react';
import PageTransition from '../components/ui/PageTransition';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import { salonInfo } from '../data/salonInfo';

export const About = () => {
  return (
    <PageTransition>
      <div className="pt-36 pb-24 bg-obsidian min-h-screen">
        <Container>
          <SectionHeading
            badge="OUR ESSENCE"
            title={`About ${salonInfo.name}`}
            subtitle={`Located in Jigani, Bengaluru, ${salonInfo.name} was established with a singular vision: to deliver bespoke grooming experiences in an unhurried, luxury setting.`}
          />

          <div className="mt-16 max-w-4xl mx-auto space-y-12">
            <ScrollReveal>
              <div className="glass-panel p-8 sm:p-12 border-gold-subtle">
                <h3 className="font-serif text-3xl text-champagne mb-4">The Aaura Standard</h3>
                <p className="text-sm sm:text-base text-ivory-muted leading-relaxed font-light mb-6">
                  We believe that grooming is an essential extension of personal identity. Our studio combines precision hair sculpting, hot towel beard care, and targeted skin therapy inside an ambient dark luxury space designed for absolute comfort.
                </p>
                <div className="pt-6 border-t border-white/10 text-xs font-mono text-champagne/80 tracking-wider">
                  LOCATION: {salonInfo.address.full}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </div>
    </PageTransition>
  );
};

export default About;
