import React from 'react';
import { ArrowRight, Eye, Camera } from 'lucide-react';
import { galleryItems } from '../../data/gallery';
import Container from '../../components/ui/Container';
import SectionHeading from '../../components/ui/SectionHeading';
import ScrollReveal from '../../components/ui/ScrollReveal';
import Button from '../../components/ui/Button';

export const GalleryPreviewSection = () => {
  // Pick 4 diverse items from the centralized gallery data
  const previewItems = [
    galleryItems.find((i) => i.id === 'gallery-hair-1') || galleryItems[0],
    galleryItems.find((i) => i.id === 'gallery-ambience-1') || galleryItems[1],
    galleryItems.find((i) => i.id === 'gallery-beard-1') || galleryItems[2],
    galleryItems.find((i) => i.id === 'gallery-skin-1') || galleryItems[3],
  ];

  return (
    <section className="py-24 sm:py-28 bg-obsidian-deep relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-champagne-glow pointer-events-none rounded-full blur-[130px] opacity-15" />

      <Container className="relative z-10">
        <SectionHeading
          badge="VISUAL EDITORIAL"
          title="Studio Atmosphere & Artistry"
          subtitle="A glimpse into the refined ambiance, precision technique, and dark luxury aesthetic of AAURA MEN'S STUDIO."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {previewItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.12}>
              <div className="group relative h-84 overflow-hidden bg-obsidian-card border border-white/10 hover:border-champagne/45 transition-all duration-500 flex flex-col justify-between">
                {/* Background Image with Hover Zoom */}
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-obsidian-deep/50 to-transparent z-10" />
                <div className="absolute inset-0 bg-gold-glow opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none z-10" />

                {/* Top Category Badge */}
                <div className="relative z-20 p-5 flex items-center justify-between">
                  <span className="text-[9px] tracking-[0.25em] font-mono text-champagne uppercase border border-champagne/25 px-2.5 py-0.5 bg-obsidian-deep/80 backdrop-blur-md">
                    {item.category}
                  </span>
                  <Camera className="w-3.5 h-3.5 text-champagne/40 group-hover:text-champagne transition-colors" />
                </div>

                {/* Center Hover View Cue */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-obsidian/75 border border-champagne/40 backdrop-blur-md flex items-center justify-center">
                    <Eye className="w-4 h-4 text-champagne" />
                  </div>
                </div>

                {/* Bottom Title & Frame Info */}
                <div className="relative z-20 p-5">
                  <p className="font-serif text-lg text-ivory group-hover:text-champagne transition-colors mb-1 leading-snug">
                    {item.title}
                  </p>
                  <span className="text-[9px] font-mono text-ivory-muted/70 tracking-widest uppercase">
                    EDITORIAL ARCHIVE 0{index + 1}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button to="/gallery" variant="outline" size="md" icon={ArrowRight}>
            EXPLORE FULL GALLERY ARCHIVE
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default GalleryPreviewSection;
