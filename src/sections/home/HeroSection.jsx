import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ChevronDown, Calendar, Sparkles, Phone, ArrowRight, Shield } from 'lucide-react';
import { salonInfo } from '../../data/salonInfo';
import Button from '../../components/ui/Button';
import Container from '../../components/ui/Container';
import TextReveal from '../../components/ui/TextReveal';

/**
 * HeroSection: Cinematic Luxury Men's Studio Hero
 * Architectural lighting, authentic 3D floating Aaura medallion,
 * editorial typography, and magnetic interactions.
 */
export const HeroSection = () => {
  const [isFinePointer, setIsFinePointer] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  });

  // Mouse coords normalized (-1 to 1) for fluid 3D parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for 3D medallion tilt and background depth
  const springTiltX = useSpring(mouseY, { stiffness: 90, damping: 20 });
  const springTiltY = useSpring(mouseX, { stiffness: 90, damping: 20 });
  const parallaxX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const parallaxY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const fineMedia = window.matchMedia('(hover: hover) and (pointer: fine)');
    const handler = (e) => setIsFinePointer(e.matches);
    fineMedia.addEventListener('change', handler);
    return () => fineMedia.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = (e) => {
    if (!isFinePointer) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;

    // Medallion tilts toward cursor
    mouseX.set(nx * 18);
    mouseY.set(-ny * 18);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100svh] pt-32 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden bg-obsidian-deep text-ivory select-none"
    >
      {/* 1. Architectural Fluted Wall Pattern on Margins (matching studio wall) */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_48px,rgba(255,255,255,0.015)_49px,transparent_50px)] pointer-events-none opacity-40" />

      {/* 2. Warm Architectural Cove Lighting Halo (matching the studio backlit panel) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[650px] sm:h-[850px] bg-[radial-gradient(circle,rgba(212,175,55,0.22)_0%,rgba(212,175,55,0.08)_35%,rgba(10,10,12,0.8)_70%,transparent_100%)] pointer-events-none blur-[90px] sm:blur-[130px]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-champagne-light/10 pointer-events-none rounded-full blur-[80px]" />

      {/* 3. Subtle Film Grain & Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(6,6,8,0.7)_80%,rgba(6,6,8,0.95)_100%)] pointer-events-none" />

      <Container className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: Editorial Brand Narrative & Magnetic CTAs */}
          <motion.div
            style={isFinePointer ? { x: parallaxX, y: parallaxY } : undefined}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-20"
          >
            {/* Top Architectural Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-champagne/30 bg-champagne/10 backdrop-blur-md mb-6 sm:mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-champagne" />
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.3em] uppercase text-champagne font-medium">
                BESPOKE MEN'S STUDIO · JIGANI, BENGALURU
              </span>
            </motion.div>

            {/* Dramatic Editorial Headline: "UNLEASH YOUR AURA" */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mb-4"
            >
              <span className="block text-xs sm:text-sm font-mono tracking-[0.45em] uppercase text-champagne-light/80 mb-2">
                THE RITUAL OF DISTINCTION
              </span>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-ivory tracking-tight leading-[0.96]">
                <TextReveal delay={0.2}>Unleash Your</TextReveal>{' '}
                <span className="text-gold-gradient italic font-normal inline-block">
                  <TextReveal delay={0.35}>Aura</TextReveal>
                </span>
              </h1>
            </motion.div>

            {/* Official Brand Identity Callout */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-3 my-3"
            >
              <span className="h-px w-10 bg-champagne/40" />
              <span className="font-serif text-xl sm:text-2xl tracking-[0.25em] text-champagne uppercase font-light">
                {salonInfo.name}
              </span>
              <span className="h-px w-10 bg-champagne/40" />
            </motion.div>

            {/* Narrative Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-sm sm:text-base md:text-lg text-ivory-muted max-w-xl font-light leading-relaxed mb-8 sm:mb-10"
            >
              An unhurried dark luxury sanctuary engineered for modern gentlemen. Master haircut architecture, straight-razor beard sculpting, and restorative skin rejuvenation.
            </motion.p>

            {/* Magnetic Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto mb-8"
            >
              <Button
                to={salonInfo.primaryCta.path}
                variant="primary"
                size="lg"
                icon={Calendar}
                magnetic={true}
                className="w-full sm:w-auto shadow-[0_0_30px_rgba(212,175,55,0.35)]"
              >
                RESERVE APPOINTMENT
              </Button>

              <Button
                to="/services"
                variant="outline"
                size="lg"
                icon={ArrowRight}
                magnetic={true}
                className="w-full sm:w-auto"
              >
                VIEW SERVICES MENU
              </Button>
            </motion.div>

            {/* Direct Studio Phone & Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center gap-4 text-xs text-ivory-muted/80 font-mono"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
                <span className="tracking-wider">OPEN DAILY: 09:00 AM — 09:00 PM</span>
              </div>
              <span className="text-white/20">|</span>
              <a
                href={`tel:${salonInfo.phoneRaw}`}
                className="inline-flex items-center gap-1.5 text-champagne hover:text-champagne-light transition-colors"
              >
                <Phone className="w-3 h-3" />
                <span>{salonInfo.phone}</span>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: 3D Mouse-Reactive Authentic Aaura Medallion */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            
            {/* Concentric Architectural Rings with Subtle Rotation */}
            <div className="absolute w-[360px] sm:w-[460px] h-[360px] sm:h-[460px] rounded-full border border-champagne/15 pointer-events-none animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[420px] sm:w-[540px] h-[420px] sm:h-[540px] rounded-full border border-dashed border-champagne/10 pointer-events-none animate-[spin_90s_linear_infinite_reverse]" />
            
            {/* Medallion Card with Realistic 3D Tilt & Specular Light */}
            <motion.div
              style={{
                rotateX: isFinePointer ? springTiltX : 0,
                rotateY: isFinePointer ? springTiltY : 0,
                transformPerspective: 1200,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-[300px] sm:w-[380px] md:w-[420px] aspect-[498/542] flex items-center justify-center transition-transform duration-100 ease-out"
            >
              {/* Medallion Floating Ambient Shadow & Golden Aura */}
              <div className="absolute inset-4 rounded-full bg-gold-glow blur-2xl opacity-40 transform scale-95 pointer-events-none" />
              
              {/* Authentic Emblem Image with 3D Depth */}
              <div className="relative w-full h-full p-2 flex items-center justify-center filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] group">
                <img
                  src="/aaura-logo.png"
                  alt="AAURA MEN'S STUDIO Official Medallion Logo"
                  className="w-full h-full object-contain select-none filter drop-shadow-[0_0_25px_rgba(212,175,55,0.45)] transition-transform duration-700 group-hover:scale-102"
                />

                {/* Subtle Dynamic Specular Glint Sheen over the Medallion */}
                <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Floating Quality Assurance Pill Tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute -bottom-4 right-4 sm:right-6 px-3.5 py-1.5 bg-obsidian-card/90 backdrop-blur-xl border border-champagne/35 text-[10px] font-mono tracking-widest text-champagne uppercase shadow-luxury flex items-center gap-2"
              >
                <Shield className="w-3 h-3 text-champagne" />
                <span>OFFICIAL STUDIO SEAL</span>
              </motion.div>
            </motion.div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="hidden md:flex flex-col items-center justify-center mt-12 sm:mt-16 text-ivory-muted/60 hover:text-champagne transition-colors cursor-pointer select-none"
          onClick={() => {
            const nextSection = document.getElementById('intro-section');
            if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[9px] font-mono tracking-[0.35em] uppercase mb-1.5">DISCOVER THE EXPERIENCE</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-champagne" />
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroSection;
