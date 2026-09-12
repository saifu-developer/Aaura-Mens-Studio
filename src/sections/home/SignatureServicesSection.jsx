import React from 'react';
import { ArrowRight, Scissors, Clock } from 'lucide-react';
import { services } from '../../data/services';
import Container from '../../components/ui/Container';
import SectionHeading from '../../components/ui/SectionHeading';
import ScrollReveal from '../../components/ui/ScrollReveal';
import Button from '../../components/ui/Button';
import TiltCard from '../../components/ui/TiltCard';

export const SignatureServicesSection = () => {
  // Select 4 iconic signature services across different categories
  const signatureItems = services
    .filter((s) => s.signature)
    .slice(0, 4);

  return (
    <section className="py-24 sm:py-28 bg-obsidian-deep relative overflow-hidden border-t border-white/5">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-gold-glow pointer-events-none rounded-full blur-[130px] opacity-15" />

      <Container className="relative z-10">
        <SectionHeading
          badge="CURATED CRAFTSMANSHIP"
          title="Signature Services"
          subtitle="Engineered with artistic precision, sterile surgical instruments, and luxury formulations for an uncompromised experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {signatureItems.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.12}>
              <TiltCard
                maxTilt={5}
                glow={true}
                className="glass-card p-7 h-full flex flex-col justify-between border-white/10 hover:border-champagne/40 bg-obsidian-card/80"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[9px] tracking-[0.25em] font-mono uppercase text-champagne border border-champagne/20 px-2 py-0.5 bg-champagne/5">
                      {service.category}
                    </span>
                    <Scissors className="w-3.5 h-3.5 text-champagne/40 group-hover:text-champagne transition-colors" />
                  </div>

                  <h3 className="font-serif text-xl text-ivory mb-2.5 group-hover:text-champagne transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-xs text-ivory-muted leading-relaxed font-light mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                  <div>
                    {service.startingFrom && (
                      <span className="block text-[8px] font-mono text-champagne/80 uppercase">FROM</span>
                    )}
                    <span className="font-serif text-xl text-champagne-light font-medium">
                      {service.formattedPrice}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-mono text-ivory-muted/70">
                    <Clock className="w-3 h-3 text-champagne/60" />
                    <span>{service.duration}</span>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA to full Services Page */}
        <div className="mt-14 text-center">
          <Button to="/services" variant="outline" size="md" icon={ArrowRight}>
            VIEW FULL 25-SERVICE MENU
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default SignatureServicesSection;
