import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Navigation, Sparkles, CheckCircle2 } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import Button from '../components/ui/Button';
import { salonInfo } from '../data/salonInfo';

export const Contact = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `AAURA MEN'S STUDIO, ${salonInfo.address.full}`
  )}`;

  const embedMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    `AAURA MEN'S STUDIO, ${salonInfo.address.line1}, ${salonInfo.address.line2}, Jigani, Bengaluru, Karnataka 560105`
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <PageTransition>
      <div className="pt-32 sm:pt-36 pb-28 bg-obsidian min-h-screen text-ivory">
        {/* Subtle Ambient Background Lighting */}
        <div className="absolute top-28 left-1/4 w-96 h-96 bg-gold-glow pointer-events-none rounded-full blur-[130px] opacity-15" />
        <div className="absolute top-96 right-10 w-80 h-80 bg-champagne-glow pointer-events-none rounded-full blur-[110px] opacity-10" />

        <Container className="relative z-10">
          <SectionHeading
            badge="CONNECT WITH US"
            title="Studio Contact & Location"
            subtitle="Step into our luxury sanctuary in Jigani or connect with us directly to reserve your grooming chair."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mt-16 max-w-6xl mx-auto items-stretch">
            
            {/* LEFT COLUMN: Studio Information & Direct Actions */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <ScrollReveal>
                <div className="glass-panel p-8 sm:p-10 h-full border-gold-subtle flex flex-col justify-between space-y-8 bg-obsidian-card/80">
                  <div>
                    <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.25em] uppercase text-champagne bg-champagne/10 border border-champagne/30 px-3 py-1 mb-6">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>THE STUDIO LOCATION</span>
                    </div>

                    <h3 className="font-serif text-3xl text-ivory mb-6">
                      {salonInfo.name}
                    </h3>

                    <div className="space-y-6 text-sm text-ivory-muted">
                      {/* Address Item with Direct Google Maps Link */}
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-none bg-champagne/10 border border-champagne/30 flex items-center justify-center shrink-0 mt-0.5">
                          <MapPin className="w-5 h-5 text-champagne" />
                        </div>
                        <div>
                          <h4 className="text-ivory font-medium text-base mb-1">Studio Address</h4>
                          <p className="text-ivory-muted leading-relaxed font-light">
                            {salonInfo.address.line1},<br />
                            {salonInfo.address.line2},<br />
                            {salonInfo.address.line3},<br />
                            {salonInfo.address.city} – {salonInfo.address.pincode}
                          </p>
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

                      {/* Direct Line */}
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-none bg-champagne/10 border border-champagne/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Phone className="w-5 h-5 text-champagne" />
                        </div>
                        <div>
                          <h4 className="text-ivory font-medium text-base mb-0.5">Telephone Reservations</h4>
                          <a
                            href={`tel:${salonInfo.phoneRaw}`}
                            className="font-mono text-base text-champagne hover:text-champagne-light transition-colors"
                          >
                            {salonInfo.phone}
                          </a>
                          <span className="block text-[11px] text-ivory-muted/70 font-mono mt-0.5">
                            Direct line to reception
                          </span>
                        </div>
                      </div>

                      {/* Operating Hours */}
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-none bg-champagne/10 border border-champagne/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Clock className="w-5 h-5 text-champagne" />
                        </div>
                        <div>
                          <h4 className="text-ivory font-medium text-base mb-1">Studio Hours</h4>
                          {salonInfo.hours.map((h, i) => (
                            <p key={i} className="text-xs font-light">
                              {h.days}: <span className="font-mono text-champagne font-medium">{h.time}</span>
                            </p>
                          ))}
                          <span className="inline-flex items-center gap-1 text-[11px] text-champagne/80 font-mono mt-1">
                            <CheckCircle2 className="w-3 h-3 text-champagne" />
                            <span>Open 7 Days a Week</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="pt-6 border-t border-white/10 space-y-3">
                    <Button
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="md"
                      icon={Navigation}
                      className="w-full"
                    >
                      GET GOOGLE MAPS DIRECTIONS
                    </Button>
                    <Button
                      href={`tel:${salonInfo.phoneRaw}`}
                      variant="secondary"
                      size="md"
                      icon={Phone}
                      className="w-full"
                    >
                      CALL STUDIO: {salonInfo.phone}
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT COLUMN: Interactive Google Maps Embed with Direct Redirect */}
            <div className="lg:col-span-7 flex flex-col">
              <ScrollReveal delay={0.2}>
                <div className="glass-panel p-6 sm:p-8 h-full border-gold-subtle flex flex-col justify-between bg-obsidian-card/85">
                  <div>
                    {/* Header with Direct Maps Link */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
                      <div>
                        <h3 className="font-serif text-2xl sm:text-3xl text-ivory">
                          Google Maps Location
                        </h3>
                        <p className="text-xs text-ivory-muted font-mono mt-1">
                          Tent Bus Stop, 7th Main Road, Jigani, Bengaluru
                        </p>
                      </div>

                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-champagne/15 hover:bg-champagne/25 border border-champagne/40 text-champagne text-xs font-mono tracking-wider uppercase transition-colors shrink-0"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>OPEN IN GOOGLE MAPS</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    {/* Interactive Google Map Embed Container */}
                    <div className="relative w-full h-[320px] sm:h-[380px] rounded-sm overflow-hidden border border-white/15 bg-obsidian-deep group">
                      <iframe
                        title="AAURA MEN'S STUDIO Google Maps Location"
                        src={embedMapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1) invert(0.9) hue-rotate(180deg)' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-95"
                      />

                      {/* Floating Direct Tap Banner on Mobile / Hover overlay on desktop */}
                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 flex items-center gap-2 px-4 py-2 bg-obsidian-deep/95 border border-champagne/50 backdrop-blur-md text-xs font-mono text-champagne hover:text-champagne-light shadow-luxury group-hover:border-champagne transition-all"
                        aria-label="Redirect to Google Maps application"
                      >
                        <MapPin className="w-4 h-4 text-champagne animate-bounce" />
                        <span className="font-semibold tracking-wider">TAP FOR GOOGLE MAPS NAVIGATION</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Landmark & Parking Amenities Summary */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-white/10 text-xs">
                    <div className="p-3 bg-obsidian/60 border border-white/5 text-center">
                      <span className="text-[10px] font-mono text-champagne uppercase block mb-0.5">LANDMARK</span>
                      <span className="text-ivory font-light">Tent Bus Stop</span>
                    </div>
                    <div className="p-3 bg-obsidian/60 border border-white/5 text-center">
                      <span className="text-[10px] font-mono text-champagne uppercase block mb-0.5">PARKING</span>
                      <span className="text-ivory font-light">Ample Space Available</span>
                    </div>
                    <div className="p-3 bg-obsidian/60 border border-white/5 text-center">
                      <span className="text-[10px] font-mono text-champagne uppercase block mb-0.5">ACCESS</span>
                      <span className="text-ivory font-light">Ground Floor, GNS Complex</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </Container>
      </div>
    </PageTransition>
  );
};

export default Contact;
