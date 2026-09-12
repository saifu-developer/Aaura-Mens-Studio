import React from 'react';
import { Scissors, Sparkles, Award } from 'lucide-react';
import Container from '../../components/ui/Container';
import SectionHeading from '../../components/ui/SectionHeading';
import ScrollReveal from '../../components/ui/ScrollReveal';

export const IntroSection = () => {
  const pillars = [
    {
      icon: Scissors,
      title: "Master Sculpting",
      description: "Tailored hair craftsmanship designed around individual bone structure, hair growth grain, and personal aesthetic."
    },
    {
      icon: Sparkles,
      title: "Luxury Sanctuary",
      description: "An unhurried dark luxury ambiance designed for ultimate masculine relaxation, privacy, and renewal."
    },
    {
      icon: Award,
      title: "Bespoke Care",
      description: "High-grade grooming formulations, hot towel conditioning rituals, and individualized skin revitalizing therapies."
    }
  ];

  return (
    <section id="intro-section" className="py-24 sm:py-28 bg-obsidian relative overflow-hidden border-t border-white/5">
      <Container>
        <SectionHeading
          badge="THE AAURA EXPERIENCE"
          title="Where Precision Meets Luxury"
          subtitle="AAURA MEN'S STUDIO is crafted for discerning gentlemen who view grooming not as a chore, but as a signature ritual of personal presence and self-appreciation."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.15} direction="up">
                <div className="glass-card p-8 h-full flex flex-col justify-between group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold-glow pointer-events-none rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    <div className="w-12 h-12 rounded-none bg-obsidian border border-champagne/30 flex items-center justify-center mb-6 group-hover:border-champagne group-hover:bg-champagne/10 transition-colors">
                      <Icon className="w-6 h-6 text-champagne" />
                    </div>

                    <h3 className="font-serif text-2xl text-ivory mb-3 font-normal group-hover:text-champagne transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-ivory-muted leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono tracking-widest text-champagne/60 uppercase">
                    <span>PILLAR 0{index + 1}</span>
                    <span className="w-8 h-px bg-champagne/30 group-hover:w-12 transition-all" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default IntroSection;
