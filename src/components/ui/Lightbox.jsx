import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';

export const Lightbox = ({
  isOpen,
  item,
  items = [],
  currentIndex = 0,
  onClose,
  onNext,
  onPrev
}) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && onNext) {
        onNext();
      } else if (e.key === 'ArrowLeft' && onPrev) {
        onPrev();
      }
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian-deep/95 backdrop-blur-xl p-4 sm:p-6 md:p-10"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Image preview lightbox"
      >
        {/* Top Control Bar */}
        <div
          className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-30 pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3">
            <span className="text-[10px] tracking-[0.3em] font-mono uppercase text-champagne bg-champagne/10 border border-champagne/30 px-3 py-1">
              {item.category}
            </span>
            {items.length > 0 && (
              <span className="text-xs font-mono text-ivory-muted">
                {currentIndex + 1} / {items.length}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-champagne/50 hover:bg-champagne/10 text-ivory hover:text-champagne transition-all duration-300 focus:outline-none"
            aria-label="Close image preview (Escape)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Previous Navigation Button */}
        {items.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-obsidian-card/80 border border-white/10 hover:border-champagne/50 hover:bg-champagne/15 text-ivory hover:text-champagne transition-all duration-300 z-30 focus:outline-none pointer-events-auto"
            aria-label="Previous image (Left arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Navigation Button */}
        {items.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-obsidian-card/80 border border-white/10 hover:border-champagne/50 hover:bg-champagne/15 text-ivory hover:text-champagne transition-all duration-300 z-30 focus:outline-none pointer-events-auto"
            aria-label="Next image (Right arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Center Image Container */}
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative overflow-hidden rounded-sm border border-champagne/25 shadow-luxury bg-obsidian-card max-h-[70vh]">
            <img
              src={item.imageUrl}
              alt={item.alt || item.title}
              className="w-auto h-auto max-h-[70vh] object-contain select-none"
              loading="lazy"
            />
          </div>

          {/* Caption & Disclaimer */}
          <div className="mt-4 text-center max-w-2xl px-4">
            <h3 className="font-serif text-xl sm:text-2xl text-ivory tracking-wide">
              {item.title}
            </h3>
            {item.caption && (
              <p className="text-xs sm:text-sm text-ivory-muted font-light mt-1.5 leading-relaxed">
                {item.caption}
              </p>
            )}
            <div className="mt-2.5 inline-flex items-center gap-1.5 text-[10px] text-ivory-muted/70 font-mono tracking-wider">
              <Info className="w-3 h-3 text-champagne/60" />
              <span>{item.demoNote || 'Editorial Demonstration Preview — Studio photography coming soon'}</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
