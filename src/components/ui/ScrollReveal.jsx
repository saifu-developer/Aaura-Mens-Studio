import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  direction = "up",
  distance = 30,
  once = true,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const getInitialPosition = () => {
    switch (direction) {
      case "up": return { y: distance, x: 0 };
      case "down": return { y: -distance, x: 0 };
      case "left": return { x: distance, y: 0 };
      case "right": return { x: -distance, y: 0 };
      default: return { y: distance, x: 0 };
    }
  };

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...getInitialPosition(),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for high-end feel
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
