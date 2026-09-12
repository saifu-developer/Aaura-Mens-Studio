import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Check, Sparkles, Calendar, Phone, ArrowRight, Shield } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import TiltCard from '../components/ui/TiltCard';
import { groomPackages } from '../data/packages';
import { salonInfo } from '../data/salonInfo';

export const Packages = () => {
  return (
    <PageTransition>
      <div className="pt-32 sm:pt-36 pb-28 bg-obsidian min-h-screen text-ivory">
        {/* Background Ambient Glows */}
        <div className="absolute top-28 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-gold-glow pointer-events-none rounded-full blur-[140px] opacity-20" />

        <Container className="relative z-10">
          <SectionHeading
            badge="ROYAL CEREMONIES"
            title="Groom & Luxury Packages"
            subtitle="Curated multi-tier grooming rituals designed for weddings, momentous occasions, and total masculine rejuvenation."
          />

          {/* Luxury Package Membership Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
            {groomPackages.map((pkg, index) => {
              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="h-full flex"
                >
                  <TiltCard
                    maxTilt={6}
                    glow={true}
                    elevate={true}
                    animatedBorder={true}
                    className="glass-panel p-8 sm:p-10 h-full flex flex-col justify-between border-white/10 hover:border-champagne/50 bg-obsidian-card/85 shadow-luxury relative rounded-sm"
                  >
                    {/* Top Tier Insignia & Corner Accent */}
                    <div>
                      <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <Crown className="w-4 h-4 text-champagne" />
                          <span className="text-[10px] tracking-[0.3em] font-mono uppercase text-champagne font-semibold">
                            {pkg.tier} TIER
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-ivory-muted tracking-widest uppercase">
                          {pkg.duration}
                        </span>
                      </div>

                      {/* Package Name & Tagline */}
                      <h3 className="font-serif text-3xl sm:text-4xl text-ivory mb-2 group-hover:text-champagne transition-colors">
                        {pkg.name}
                      </h3>
                      <p className="text-xs font-serif italic text-champagne-light tracking-wide mb-6">
                        "{pkg.tagline}"
                      </p>

                      {/* Price Presentation */}
                      <div className="p-4 bg-obsidian/60 border border-white/5 mb-8 flex items-baseline justify-between">
                        <div>
                          <span className="text-[9px] font-mono tracking-widest text-ivory-muted block uppercase">
                            PACKAGE RATE
                          </span>
                          <span className="font-serif text-4xl text-champagne font-semibold tracking-tight">
                            {pkg.formattedPrice}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-champagne/80 border border-champagne/30 px-2 py-0.5 uppercase">
                          ALL-INCLUSIVE
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-ivory-muted font-light leading-relaxed mb-8">
                        {pkg.description}
                      </p>

                      {/* Inclusions Checklist */}
                      <div className="mb-8">
                        <h4 className="text-[10px] tracking-[0.25em] font-mono text-champagne uppercase mb-4 flex items-center gap-2">
                          <Sparkles className="w-3 h-3 text-champagne" />
                          <span>Included In This Ritual:</span>
                        </h4>
                        <ul className="space-y-3">
                          {pkg.includes.map((inc, i) => (
                            <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-ivory font-light">
                              <div className="w-4 h-4 rounded-full bg-champagne/15 border border-champagne/40 flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-2.5 h-2.5 text-champagne" />
                              </div>
                              <span className="leading-snug">{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom CTA Action */}
                    <div className="pt-6 border-t border-white/10 space-y-3 mt-auto">
                      <Button
                        to={`/book?package=${pkg.id}`}
                        variant="primary"
                        size="md"
                        className="w-full"
                        icon={Calendar}
                      >
                        RESERVE PACKAGE
                      </Button>
                      <Button
                        href={`tel:${salonInfo.phoneRaw}`}
                        variant="ghost"
                        size="sm"
                        className="w-full text-xs text-ivory-muted hover:text-champagne"
                        icon={Phone}
                      >
                        INQUIRE VIA CALL
                      </Button>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>

          {/* Multi-Tier Comparison Table */}
          <div className="mt-24 max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-champagne">
                TRANSPARENT COMPARISON
              </span>
              <h3 className="font-serif text-3xl text-ivory mt-2">
                Ritual Inclusions Matrix
              </h3>
            </div>

            <div className="overflow-x-auto glass-panel border-gold-subtle rounded-none">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/10 bg-obsidian-deep/80 text-[11px] font-mono uppercase tracking-widest text-champagne">
                    <th className="p-4 sm:p-5">Service Inclusions</th>
                    <th className="p-4 sm:p-5 text-center">Groom Essential (₹899)</th>
                    <th className="p-4 sm:p-5 text-center">Groom Elegance (₹1,999)</th>
                    <th className="p-4 sm:p-5 text-center">Groom Royal (₹2,799)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs text-ivory-muted">
                  <tr>
                    <td className="p-4 sm:p-5 text-ivory font-medium">Premium Haircut</td>
                    <td className="p-4 sm:p-5 text-center"><Check className="w-4 h-4 text-champagne mx-auto" /></td>
                    <td className="p-4 sm:p-5 text-center"><Check className="w-4 h-4 text-champagne mx-auto" /></td>
                    <td className="p-4 sm:p-5 text-center"><Check className="w-4 h-4 text-champagne mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 text-ivory font-medium">Beard Trim</td>
                    <td className="p-4 sm:p-5 text-center"><Check className="w-4 h-4 text-champagne mx-auto" /></td>
                    <td className="p-4 sm:p-5 text-center"><Check className="w-4 h-4 text-champagne mx-auto" /></td>
                    <td className="p-4 sm:p-5 text-center"><Check className="w-4 h-4 text-champagne mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 text-ivory font-medium">Detan Botanical Treatment</td>
                    <td className="p-4 sm:p-5 text-center"><Check className="w-4 h-4 text-champagne mx-auto" /></td>
                    <td className="p-4 sm:p-5 text-center"><Check className="w-4 h-4 text-champagne mx-auto" /></td>
                    <td className="p-4 sm:p-5 text-center"><Check className="w-4 h-4 text-champagne mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 text-ivory font-medium">Head Massage</td>
                    <td className="p-4 sm:p-5 text-center"><Check className="w-4 h-4 text-champagne mx-auto" /></td>
                    <td className="p-4 sm:p-5 text-center text-white/20">—</td>
                    <td className="p-4 sm:p-5 text-center text-white/20">—</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 text-ivory font-medium">Hair Spa Treatment</td>
                    <td className="p-4 sm:p-5 text-center text-white/20">—</td>
                    <td className="p-4 sm:p-5 text-center"><Check className="w-4 h-4 text-champagne mx-auto" /></td>
                    <td className="p-4 sm:p-5 text-center"><Check className="w-4 h-4 text-champagne mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 text-ivory font-medium">Fruit Facial Therapy</td>
                    <td className="p-4 sm:p-5 text-center text-white/20">—</td>
                    <td className="p-4 sm:p-5 text-center"><Check className="w-4 h-4 text-champagne mx-auto" /></td>
                    <td className="p-4 sm:p-5 text-center text-white/20">—</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 text-ivory font-medium">Premium Facial Therapy</td>
                    <td className="p-4 sm:p-5 text-center text-white/20">—</td>
                    <td className="p-4 sm:p-5 text-center text-white/20">—</td>
                    <td className="p-4 sm:p-5 text-center"><Check className="w-4 h-4 text-champagne mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 text-ivory font-medium">Foot Massage Reflexology</td>
                    <td className="p-4 sm:p-5 text-center text-white/20">—</td>
                    <td className="p-4 sm:p-5 text-center text-white/20">—</td>
                    <td className="p-4 sm:p-5 text-center"><Check className="w-4 h-4 text-champagne mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Wedding / Event Consultation Banner */}
          <div className="mt-20 glass-card p-8 sm:p-12 border-gold-subtle text-center max-w-3xl mx-auto">
            <Shield className="w-8 h-8 text-champagne mx-auto mb-4" />
            <h3 className="font-serif text-3xl text-ivory mb-3">Planning a Wedding or Special Event?</h3>
            <p className="text-xs sm:text-sm text-ivory-muted leading-relaxed font-light mb-8 max-w-xl mx-auto">
              Our studio welcomes grooms and wedding parties for customized pre-wedding grooming sessions. Contact our studio directly for group reservations and schedule alignment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={`tel:${salonInfo.phoneRaw}`} variant="primary" size="md" icon={Phone}>
                CALL STUDIO: {salonInfo.phone}
              </Button>
              <Button to="/contact" variant="outline" size="md" icon={ArrowRight}>
                FIND OUR LOCATION
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </PageTransition>
  );
};

export default Packages;
