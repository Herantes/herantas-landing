import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', updatePosition);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: position.x - 10,
          top: position.y - 10,
          transform: `scale(${isHovering ? 2 : 1})`,
          transition: 'transform 0.2s ease'
        }}
      >
        <div className="w-5 h-5 rounded-full bg-white opacity-60"></div>
      </div>
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: position.x - 2,
          top: position.y - 2,
        }}
      >
        <div className="w-1 h-1 rounded-full bg-[#39FF14]"></div>
      </div>
    </>
  );
};

export default CustomCursor;