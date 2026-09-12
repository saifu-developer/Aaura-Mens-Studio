import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useSpring } from 'framer-motion';

/**
 * Button: Luxury Magnetic CTA Component
 * Features subtle cursor attraction physics, directional light sweep, and smooth haptic scaling.
 * Safely degrades on touch/mobile devices.
 */
export const Button = ({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  icon: Icon,
  iconPosition = 'right',
  disabled = false,
  magnetic = true,
  ...props
}) => {
  const buttonRef = useRef(null);
  const [isFinePointer, setIsFinePointer] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  });
  const [shineCoords, setShineCoords] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  // Spring physics for magnetic pull
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const magneticX = useSpring(0, springConfig);
  const magneticY = useSpring(0, springConfig);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const handler = (e) => setIsFinePointer(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = (e) => {
    if (!magnetic || !isFinePointer || disabled || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const pullStrength = 0.22;
    const offsetX = (e.clientX - centerX) * pullStrength;
    const offsetY = (e.clientY - centerY) * pullStrength;

    magneticX.set(offsetX);
    magneticY.set(offsetY);

    // Directional shine reflection inside the button
    const shineX = ((e.clientX - rect.left) / rect.width) * 100;
    const shineY = ((e.clientY - rect.top) / rect.height) * 100;
    setShineCoords({ x: shineX, y: shineY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    magneticX.set(0);
    magneticY.set(0);
  };

  const baseStyles =
    'relative inline-flex items-center justify-center font-medium tracking-wider uppercase transition-colors duration-300 rounded-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-champagne overflow-hidden select-none';

  const sizeStyles = {
    sm: 'px-5 py-2.5 text-xs tracking-widest',
    md: 'px-7 py-3.5 text-xs sm:text-sm tracking-widest',
    lg: 'px-9 py-4 text-sm sm:text-base tracking-widest',
  };

  const variantStyles = {
    primary:
      'bg-gold-gradient text-obsidian font-semibold shadow-gold-subtle hover:shadow-gold-intense hover:brightness-105 border border-champagne-light/40',
    secondary:
      'bg-obsidian-card text-ivory border border-champagne/30 hover:border-champagne hover:bg-obsidian-card/90 hover:text-champagne-light',
    outline:
      'bg-transparent text-champagne border border-champagne/50 hover:bg-champagne/10 hover:border-champagne',
    ghost:
      'bg-transparent text-ivory-muted hover:text-champagne hover:bg-white/5 border border-transparent hover:border-white/10',
    glass:
      'glass-panel text-ivory border-gold-subtle hover:border-champagne/50 hover:bg-white/10 text-gold-gradient',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  const content = (
    <>
      {/* Dynamic Specular Light Sweep Overlay */}
      {isFinePointer && !disabled && (
        <span
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.35 : 0,
            background: `radial-gradient(120px circle at ${shineCoords.x}% ${shineCoords.y}%, rgba(255, 255, 255, 0.4), transparent 70%)`,
          }}
        />
      )}

      {/* Button Content */}
      <span className="relative z-20 flex items-center justify-center gap-2">
        {Icon && iconPosition === 'left' && (
          <Icon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
        )}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && (
          <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
    </>
  );

  const motionWrapperProps = {
    ref: buttonRef,
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    style: isFinePointer && magnetic ? { x: magneticX, y: magneticY } : undefined,
    whileHover: disabled ? {} : { scale: 1.02 },
    whileTap: disabled ? {} : { scale: 0.98 },
    className: 'inline-block',
  };

  if (to) {
    return (
      <motion.div {...motionWrapperProps}>
        <Link to={to} className={`group ${combinedClasses}`} {...props}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionWrapperProps}>
        <a href={href} className={`group ${combinedClasses}`} {...props}>
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div {...motionWrapperProps}>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`group ${combinedClasses}`}
        {...props}
      >
        {content}
      </button>
    </motion.div>
  );
};

export default Button;
