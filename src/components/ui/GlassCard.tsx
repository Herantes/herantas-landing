import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  glowColor,
  onClick 
}) => {
  const baseClasses = `
    relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl
    hover:bg-white/15 transition-all duration-300 cursor-pointer
    shadow-lg hover:shadow-2xl
  `;

  const glowStyle = glowColor ? {
    boxShadow: `0 0 30px ${glowColor}20, inset 0 0 30px ${glowColor}10`
  } : {};

  return (
    <div 
      className={`${baseClasses} ${className}`}
      style={glowStyle}
      onClick={onClick}
    >
      {glowColor && (
        <div 
          className="absolute inset-0 rounded-xl opacity-20 blur-xl -z-10"
          style={{ backgroundColor: glowColor }}
        />
      )}
      {children}
    </div>
  );
};

export default GlassCard;