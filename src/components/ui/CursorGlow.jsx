import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * CursorGlow: Ambient mouse-follow champagne glow
 * Provides a cinematic dark luxury lighting aura that tracks the mouse
 * Automatically disabled on touch / mobile devices to maximize performance
 */
export const CursorGlow = () => {
  const [isEnabled] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    const hasPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return hasPointer && !prefersReducedMotion;
  });
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  // Smooth spring physics for fluid movement
  const springX = useSpring(mouseX, { stiffness: 120, damping: 24, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 24, mass: 0.6 });

  useEffect(() => {
    if (!isEnabled) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isEnabled, mouseX, mouseY]);

  if (!isEnabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      className="pointer-events-none fixed top-0 left-0 w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.07)_0%,rgba(212,175,55,0.02)_40%,transparent_70%)] blur-[90px] z-30 transition-opacity duration-700"
    />
  );
};

export default CursorGlow;
