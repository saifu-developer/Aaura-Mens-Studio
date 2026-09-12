import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * ScrollProgress: Thin champagne-gold hairline progress bar
 * Renders at the top of the viewport with smooth spring easing
 */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-transparent">
      <motion.div
        style={{ scaleX }}
        className="w-full h-full bg-gradient-to-r from-champagne-light via-champagne to-champagne-muted origin-left shadow-[0_0_10px_rgba(212,175,55,0.6)]"
      />
    </div>
  );
};

export default ScrollProgress;
