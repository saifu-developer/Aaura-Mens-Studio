import React from 'react';
import { MapPin, Clock, Phone, Navigation, Sparkles, ExternalLink } from 'lucide-react';
import { salonInfo } from '../../data/salonInfo';
import Container from '../../components/ui/Container';
import SectionHeading from '../../components/ui/SectionHeading';
import ScrollReveal from '../../components/ui/ScrollReveal';
import Button from '../../components/ui/Button';

export const VisitSection = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `AAURA MEN'S STUDIO, ${salonInfo.address.full}`
  )}`;

  const embedMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    `AAURA MEN'S STUDIO, ${salonInfo.address.line1}, ${salonInfo.address.line2}, Jigani, Bengaluru, Karnataka 560105`
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="visit-section" className="py-24 sm:py-28 bg-obsidian relative overflow-hidden border-t border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold-glow pointer-events-none rounded-full blur-[140px] opacity-15" />

      <Container className="relative z-10">
        <SectionHeading
          badge="STUDIO SANCTUARY"
          title="Visit Aaura / Location"
          subtitle="Conveniently situated in Jigani, Bengaluru. Step inside our tranquil dark luxury space designed for unhurried grooming."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-16 items-stretch">
          {/* Location & Contact Details Card */}
          <div className="lg:col-span-6">
            <ScrollReveal>
              <div className="glass-panel p-8 sm:p-10 h-full flex flex-col justify-between border-gold-subtle bg-obsidian-card/85">
                <div>
                  <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.25em] uppercase text-champagne bg-champagne/10 border border-champagne/30 px-3 py-1 mb-6">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>CENTRAL JIGANI CONVENIENCE</span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-ivory mb-6">
                    {salonInfo.name}
                  </h3>

                  {/* Address Block */}
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-none bg-champagne/10 border border-champagne/30 flex items-center justify-center shrink-0 mt-1">
                        <MapPin className="w-5 h-5 text-champagne" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-ivory-muted/70 block mb-1">
                          STUDIO ADDRESS
                        </span>
                        <p className="text-sm sm:text-base text-ivory font-light leading-relaxed">
                          {salonInfo.address.line1}, {salonInfo.address.line2},<br />
                          {salonInfo.address.line3}, {salonInfo.address.city} – {salonInfo.address.pincode}
                        </p>
                        <span className="text-xs text-champagne/80 font-mono mt-1 block">
                          Landmark: Near Tent Bus Stop
                        </span>
                        <a
                          href={googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-champagne hover:text-champagne-light font-mono mt-2 transition-colors group"
                        >
                          <span>Open in Google Maps</span>
                          <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      </div>
                    </div>

                    {/* Hours Block */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-none bg-champagne/10 border border-champagne/30 flex items-center justify-center shrink-0 mt-1">
                        <Clock className="w-5 h-5 text-champagne" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-ivory-muted/70 block mb-1">
                          OPERATING HOURS
                        </span>
                        <p className="text-sm sm:text-base text-ivory font-light">
                          Monday – Sunday
                        </p>
                        <p className="text-xs font-mono text-champagne mt-0.5">
                          09:00 AM – 09:00 PM
                        </p>
                      </div>
                    </div>

                    {/* Contact Direct */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-none bg-champagne/10 border border-champagne/30 flex items-center justify-center shrink-0 mt-1">
                        <Phone className="w-5 h-5 text-champagne" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-ivory-muted/70 block mb-1">
                          TELEPHONE RESERVATIONS
                        </span>
                        <a
                          href={`tel:${salonInfo.phoneRaw}`}
                          className="text-base sm:text-lg font-mono text-champagne hover:text-champagne-light transition-colors"
                        >
                          {salonInfo.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
                  <Button
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="md"
                    icon={Navigation}
                    className="w-full sm:w-auto"
                  >
                    GET GOOGLE MAPS DIRECTIONS
                  </Button>
                  <Button
                    href={`tel:${salonInfo.phoneRaw}`}
                    variant="secondary"
                    size="md"
                    icon={Phone}
                    className="w-full sm:w-auto"
                  >
                    CALL STUDIO
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Interactive Google Map Preview Panel with Direct Redirection */}
          <div className="lg:col-span-6">
            <ScrollReveal delay={0.2}>
              <div className="glass-panel p-6 sm:p-8 h-full flex flex-col justify-between border-white/15 relative overflow-hidden bg-obsidian-card/90">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-white/10">
                    <div>
                      <span className="text-[10px] font-mono tracking-[0.25em] text-champagne uppercase block">
                        INTERACTIVE NAVIGATION
                      </span>
                      <h4 className="font-serif text-xl sm:text-2xl text-ivory">
                        Find Us on Google Maps
                      </h4>
                    </div>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-champagne/10 hover:bg-champagne/20 border border-champagne/30 text-champagne text-xs font-mono uppercase transition-colors shrink-0"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>MAPS</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Google Maps Embed with Overlay */}
                  <div className="relative w-full h-[280px] sm:h-[320px] rounded-sm overflow-hidden border border-white/15 bg-obsidian-deep group mb-5">
                    <iframe
                      title="AAURA MEN'S STUDIO Google Maps Embed"
                      src={embedMapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1) invert(0.9) hue-rotate(180deg)' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-95"
                    />

                    {/* Floating Tap to Open Google Maps Banner */}
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-3 right-3 z-20 flex items-center gap-2 px-3.5 py-1.5 bg-obsidian-deep/95 border border-champagne/50 backdrop-blur-md text-xs font-mono text-champagne hover:text-champagne-light shadow-luxury transition-all"
                      aria-label="Redirect to Google Maps application"
                    >
                      <MapPin className="w-3.5 h-3.5 text-champagne animate-bounce" />
                      <span className="font-medium tracking-wide">TAP FOR DIRECTIONS</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="space-y-2.5">
                    <div className="p-2.5 bg-obsidian/60 border border-white/5 flex items-center justify-between text-xs">
                      <span className="text-ivory">Ample Parking Available</span>
                      <span className="text-champagne font-mono text-[10px]">CONVENIENT</span>
                    </div>
                    <div className="p-2.5 bg-obsidian/60 border border-white/5 flex items-center justify-between text-xs">
                      <span className="text-ivory">Ground Floor, GNS Complex</span>
                      <span className="text-champagne font-mono text-[10px]">TENT BUS STOP</span>
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-white/10 text-center">
                  <Button to="/contact" variant="ghost" size="sm" className="w-full text-xs text-champagne">
                    VIEW COMPLETE STUDIO CONTACT PAGE
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VisitSection;
