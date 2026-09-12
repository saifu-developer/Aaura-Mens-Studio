import React from 'react';
import { Crown, Check, ArrowRight, Calendar } from 'lucide-react';
import { groomPackages } from '../../data/packages';
import Container from '../../components/ui/Container';
import SectionHeading from '../../components/ui/SectionHeading';
import ScrollReveal from '../../components/ui/ScrollReveal';
import Button from '../../components/ui/Button';
import TiltCard from '../../components/ui/TiltCard';

export const GroomPackagesSection = () => {
  return (
    <section className="py-24 sm:py-28 bg-obsidian relative overflow-hidden border-t border-white/5">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-glow pointer-events-none blur-3xl opacity-20" />

      <Container className="relative z-10">
        <SectionHeading
          badge="EXCLUSIVE RITUALS"
          title="Groom & Luxury Packages"
          subtitle="Comprehensive multi-step grooming treatments tailored for weddings, milestones, and executive rejuvenation."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
          {groomPackages.map((pkg, index) => (
            <ScrollReveal key={pkg.id} delay={index * 0.15}>
              <TiltCard
                maxTilt={6}
                glow={true}
                elevate={true}
                animatedBorder={true}
                className="glass-panel p-8 sm:p-9 h-full flex flex-col justify-between border-white/10 hover:border-champagne/50 bg-obsidian-card/85 shadow-luxury rounded-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
                    <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.25em] font-mono uppercase text-champagne">
                      <Crown className="w-3.5 h-3.5 text-champagne" />
                      {pkg.tier}
                    </span>
                    <span className="text-[10px] font-mono text-ivory-muted tracking-widest">
                      {pkg.duration}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-ivory mb-2 group-hover:text-champagne transition-colors">
                    {pkg.name}
                  </h3>
                  <p className="text-xs font-serif italic text-champagne-light mb-5">
                    "{pkg.tagline}"
                  </p>

                  <div className="p-3.5 bg-obsidian/60 border border-white/5 mb-6 flex items-baseline justify-between">
                    <span className="text-[9px] font-mono tracking-widest text-ivory-muted uppercase">RATE</span>
                    <span className="font-serif text-3xl text-champagne font-semibold tracking-tight">
                      {pkg.formattedPrice}
                    </span>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    {pkg.includes.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-ivory-muted">
                        <Check className="w-3.5 h-3.5 text-champagne shrink-0" />
                        <span className="line-clamp-1">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-3 mt-auto">
                  <Button to={`/book?package=${pkg.id}`} variant="primary" size="sm" icon={Calendar} className="w-full">
                    RESERVE
                  </Button>
                  <Button to="/packages" variant="ghost" size="sm" icon={ArrowRight} className="shrink-0 text-xs text-ivory-muted hover:text-champagne">
                    VIEW DETAILS
                  </Button>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button to="/packages" variant="outline" size="md" icon={ArrowRight}>
            VIEW PACKAGE COMPARISON MATRIX
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default GroomPackagesSection;
