import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Info, Sparkles } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Lightbox from '../components/ui/Lightbox';
import { galleryItems, galleryCategories } from '../data/gallery';

export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return galleryItems;
    return galleryItems.filter((item) => item.categoryId === selectedCategory);
  }, [selectedCategory]);

  const activeItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  const handleOpenLightbox = (index) => {
    setActiveLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handleNextLightbox = () => {
    setActiveLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrevLightbox = () => {
    setActiveLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <PageTransition>
      <div className="pt-32 sm:pt-36 pb-28 bg-obsidian min-h-screen text-ivory">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-28 right-10 w-96 h-96 bg-gold-glow pointer-events-none rounded-full blur-[130px] opacity-15" />
        <div className="absolute top-1/2 left-10 w-80 h-80 bg-champagne-glow pointer-events-none rounded-full blur-[120px] opacity-10" />

        <Container className="relative z-10">
          <SectionHeading
            badge="VISUAL ARCHIVE"
            title="Studio Artistry & Atmosphere"
            subtitle="An editorial visual curation representing our craft, precision technique, and dark luxury sanctuary."
          />

          {/* Demonstration Notice Badge */}
          <div className="mt-8 max-w-xl mx-auto flex items-center justify-center gap-2 px-4 py-2 bg-obsidian-card border border-champagne/20 text-[11px] font-mono text-ivory-muted/80">
            <Info className="w-3.5 h-3.5 text-champagne shrink-0" />
            <span>Curated editorial demonstration visuals — Official studio gallery releasing soon.</span>
          </div>

          {/* Category Filter Navigation */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mt-10 mb-14">
            {galleryCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative px-4 py-2 text-[11px] tracking-[0.25em] font-mono uppercase transition-all duration-300 border ${
                    isActive
                      ? 'border-champagne text-champagne bg-champagne/10 shadow-gold-subtle'
                      : 'border-white/10 text-ivory-muted hover:text-ivory hover:border-white/25 bg-obsidian-card/40'
                  }`}
                >
                  {cat.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeGalleryIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-champagne"
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Editorial Masonry Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => {
                return (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.25) }}
                    className={`group relative overflow-hidden bg-obsidian-card border border-white/10 hover:border-champagne/50 transition-all duration-500 cursor-pointer ${
                      index % 5 === 0 ? 'sm:col-span-2 lg:col-span-2' : 'col-span-1'
                    }`}
                    onClick={() => handleOpenLightbox(index)}
                  >
                    {/* Image with zoom on hover */}
                    <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/10] w-full">
                      <img
                        src={item.imageUrl}
                        alt={item.alt}
                        loading="lazy"
                        className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-obsidian-deep/30 to-transparent opacity-75 group-hover:opacity-60 transition-opacity duration-500" />
                      
                      {/* Gold sweep on hover */}
                      <div className="absolute inset-0 bg-gold-glow opacity-0 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none" />

                      {/* Top Category Badge */}
                      <div className="absolute top-4 left-4 z-20">
                        <span className="text-[9px] tracking-[0.25em] font-mono uppercase text-champagne bg-obsidian-deep/85 border border-champagne/30 px-2.5 py-1 backdrop-blur-md">
                          {item.category}
                        </span>
                      </div>

                      {/* Center View Icon on Hover */}
                      <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="w-12 h-12 rounded-full bg-obsidian/80 border border-champagne/50 backdrop-blur-md flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                          <Eye className="w-5 h-5 text-champagne" />
                        </div>
                      </div>

                      {/* Bottom Caption Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-20 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-ivory group-hover:text-champagne transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-xs text-ivory-muted/80 font-light mt-1 line-clamp-2">
                          {item.caption}
                        </p>
                      </div>

                      {/* Corner Accents */}
                      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-champagne/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-champagne/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Bottom Philosophy Stamp */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-2 text-champagne font-mono text-[10px] uppercase tracking-[0.3em] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE AAURA VISION</span>
            </div>
            <p className="font-serif text-xl sm:text-2xl text-ivory-muted italic max-w-xl mx-auto">
              "Every silhouette sculpted with purpose. Every ritual conducted in dark elegance."
            </p>
          </div>
        </Container>

        {/* Lightbox Modal */}
        <Lightbox
          isOpen={activeLightboxIndex !== null}
          item={activeItem}
          items={filteredItems}
          currentIndex={activeLightboxIndex ?? 0}
          onClose={handleCloseLightbox}
          onNext={handleNextLightbox}
          onPrev={handlePrevLightbox}
        />
      </div>
    </PageTransition>
  );
};

export default Gallery;
