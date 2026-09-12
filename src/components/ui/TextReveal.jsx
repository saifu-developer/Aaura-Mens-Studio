import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * TextReveal: Editorial masked text reveal animation
 * Splits string into individual words that slide up smoothly on viewport entry
 */
export const TextReveal = ({
  children,
  className = '',
  as: Component = 'span',
  delay = 0,
  stagger = 0.035,
  once = true,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (typeof children !== 'string' || shouldReduceMotion) {
    return <Component className={className}>{children}</Component>;
  }

  const words = children.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { y: '110%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Component className={`inline-block ${className}`}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: '-40px' }}
        className="inline-flex flex-wrap gap-x-[0.25em]"
      >
        {words.map((word, index) => (
          <span key={index} className="inline-block overflow-hidden py-0.5">
            <motion.span variants={wordVariants} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
};

export default TextReveal;
