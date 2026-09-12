import React from 'react';

export const Container = ({ children, className = "", size = "default" }) => {
  const sizeClasses = {
    small: "max-w-4xl",
    default: "max-w-7xl",
    large: "max-w-8xl",
    full: "max-w-full"
  };

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-12 ${sizeClasses[size] || sizeClasses.default} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
