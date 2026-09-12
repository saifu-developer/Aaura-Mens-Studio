import React from 'react';
import { motion } from 'framer-motion';
import TextReveal from './TextReveal';

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={`flex flex-col ${alignClasses[align] || alignClasses.center} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-champagne border border-champagne/25 bg-champagne/5 mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
          {badge}
        </motion.div>
      )}

      {title && (
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-ivory leading-tight">
          <TextReveal delay={0.1}>{title}</TextReveal>
        </h2>
      )}

      {/* Elegant Gold Hairline Divider */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="w-20 h-px bg-gradient-to-r from-transparent via-champagne to-transparent my-5 origin-center"
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="max-w-2xl text-sm sm:text-base md:text-lg text-ivory-muted font-light leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
