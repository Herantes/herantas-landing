import React from 'react';

interface GlowButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'cyan' | 'purple';
  size?: 'medium' | 'large';
  className?: string;
  onClick?: () => void;
}

const GlowButton: React.FC<GlowButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  className = '',
  onClick 
}) => {
  const variants = {
    primary: {
      background: 'linear-gradient(45deg, #39FF14, #00FFFF, #FF1493)',
      shadow: '0 0 30px rgba(57, 255, 20, 0.5)',
      hoverShadow: '0 0 50px rgba(57, 255, 20, 0.8)'
    },
    cyan: {
      background: 'linear-gradient(45deg, #00FFFF, #0080FF)',
      shadow: '0 0 30px rgba(0, 255, 255, 0.5)',
      hoverShadow: '0 0 50px rgba(0, 255, 255, 0.8)'
    },
    purple: {
      background: 'linear-gradient(45deg, #9D4EDD, #FF6B35)',
      shadow: '0 0 30px rgba(157, 78, 221, 0.5)',
      hoverShadow: '0 0 50px rgba(157, 78, 221, 0.8)'
    }
  };

  const sizes = {
    medium: 'px-8 py-4 text-lg',
    large: 'px-12 py-6 text-xl'
  };

  const currentVariant = variants[variant];
  const currentSize = sizes[size];

  return (
    <button
      className={`
        relative font-bold text-black rounded-full transition-all duration-300
        hover:scale-105 hover:brightness-110 active:scale-95
        ${currentSize} ${className}
      `}
      style={{
        background: currentVariant.background,
        boxShadow: currentVariant.shadow
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = currentVariant.hoverShadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = currentVariant.shadow;
      }}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
    </button>
  );
};

export default GlowButton;