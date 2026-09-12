import React, { useRef, useState, useEffect } from 'react';

/**
 * TiltCard: Hyper-realistic 3D Tilt & Lighting Component
 * Features realistic dynamic specular reflection, cursor spotlight, 3D elevation,
 * and optional animated luxury gold border.
 * Automatically disabled/simplified on touch devices for maximum mobile performance.
 */
export const TiltCard = ({
  children,
  className = '',
  maxTilt = 7,
  glow = true,
  elevate = true,
  animatedBorder = false,
  onClick,
  ...rest
}) => {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  });
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const fineMedia = window.matchMedia('(hover: hover) and (pointer: fine)');
    const fineHandler = (e) => setIsFinePointer(e.matches);
    fineMedia.addEventListener('change', fineHandler);

    const motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
    const motionHandler = (e) => setReducedMotion(e.matches);
    motionMedia.addEventListener('change', motionHandler);

    return () => {
      fineMedia.removeEventListener('change', fineHandler);
      motionMedia.removeEventListener('change', motionHandler);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!isFinePointer || reducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    setCoords({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0.5, y: 0.5 });
  };

  // 3D Tilt calculation
  const canTilt = isFinePointer && !reducedMotion;
  const tiltX = isHovered && canTilt ? (coords.y - 0.5) * -maxTilt * 2 : 0;
  const tiltY = isHovered && canTilt ? (coords.x - 0.5) * maxTilt * 2 : 0;
  const translateY = isHovered && elevate ? -6 : 0;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: canTilt
          ? `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateY(${translateY}px)`
          : `translateY(${translateY}px)`,
        transformStyle: 'preserve-3d',
        transition: isHovered
          ? 'transform 0.12s cubic-bezier(0.2, 0, 0.3, 1), box-shadow 0.4s ease'
          : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease',
      }}
      className={`relative overflow-hidden transition-all duration-500 group select-none ${
        isHovered && elevate
          ? 'shadow-[0_24px_50px_-12px_rgba(0,0,0,0.85),0_0_25px_rgba(212,175,55,0.18)]'
          : 'shadow-lg'
      } ${className}`}
      {...rest}
    >
      {/* Optional Animated Gold Border Beam */}
      {animatedBorder && (
        <div
          className={`pointer-events-none absolute -inset-[1px] rounded-[inherit] transition-opacity duration-700 z-0 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: `conic-gradient(from ${(coords.x + coords.y) * 180}deg, #d4af37 0%, transparent 25%, #f4e4a6 50%, transparent 75%, #d4af37 100%)`,
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor',
            padding: '1px',
          }}
        />
      )}

      {/* Realistic Cursor-Follow Specular Lighting Spotlight */}
      {glow && canTilt && (
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
          style={{
            opacity: isHovered ? 0.4 : 0,
            background: `radial-gradient(420px circle at ${coords.x * 100}% ${coords.y * 100}%, rgba(244, 228, 166, 0.22) 0%, rgba(212, 175, 55, 0.08) 40%, transparent 75%)`,
          }}
        />
      )}

      {/* Dynamic Directional Glare Line Sheen */}
      {glow && canTilt && (
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
          style={{
            opacity: isHovered ? 0.15 : 0,
            background: `linear-gradient(${((coords.x - 0.5) * 60 + 135).toFixed(1)}deg, rgba(255, 255, 255, 0.3) 0%, transparent 45%, transparent 55%, rgba(212, 175, 55, 0.2) 100%)`,
          }}
        />
      )}

      {/* Base Elegant Gold Hairline Border */}
      <div
        className={`pointer-events-none absolute inset-0 z-20 transition-colors duration-500 border ${
          isHovered
            ? 'border-champagne/45'
            : 'border-white/10'
        }`}
      />

      {/* Card Content with 3D Depth */}
      <div
        style={{
          transform: canTilt && isHovered ? 'translateZ(15px)' : 'translateZ(0px)',
          transition: 'transform 0.3s ease',
        }}
        className="relative z-10 w-full h-full flex flex-col justify-between"
      >
        {children}
      </div>
    </div>
  );
};

export default TiltCard;
