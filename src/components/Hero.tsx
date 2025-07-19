import React, { useState, useEffect } from 'react';
import { ChevronDown, Zap, Code, Cpu } from 'lucide-react';
import GlowButton from './ui/GlowButton';

const Hero = () => {
  const [logoRevealed, setLogoRevealed] = useState(false);
  const [textRevealed, setTextRevealed] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setLogoRevealed(true), 500);
    const timer2 = setTimeout(() => setTextRevealed(true), 1500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1a0a2e] to-[#0A0A0A]"></div>
      
      {/* Floating tech elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 animate-float">
          <Cpu className="text-[#39FF14] w-8 h-8 opacity-30" />
        </div>
        <div className="absolute top-40 right-32 animate-float-delayed">
          <Code className="text-[#00FFFF] w-6 h-6 opacity-40" />
        </div>
        <div className="absolute bottom-32 left-1/3 animate-float-slow">
          <Zap className="text-[#FF1493] w-10 h-10 opacity-25" />
        </div>
      </div>

      {/* Main content */}
      <div className="text-center z-10 max-w-6xl mx-auto px-6">
        {/* Logo reveal */}
        <div className={`mb-8 transition-all duration-2000 ${logoRevealed ? 'opacity-100 scale-100' : 'opacity-0 scale-150'}`}>
          <h1 className="text-6xl md:text-6xl font-black bg-gradient-to-r from-[#39FF14] via-[#00FFFF] to-[#FF1493] bg-clip-text text-transparent mb-4 glitch-text">
            FUTURE TECHNOLOGY <br /> IS HERE
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#39FF14] to-[#00FFFF] mx-auto glowing-line"></div>
        </div>

        {/* Text reveal */}
        <div className={`transition-all duration-1500 delay-500 ${textRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xl md:text-2xl text-gray-300 mb-2 font-light">
            Pioneering Tomorrow's Technology Today
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Where Hardware Meets Software Excellence • Engineering the Impossible
          </p>

          <GlowButton
            variant="primary"
            size="large"
            className="mb-16"
          >
            ENTER THE FUTURE
          </GlowButton>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#39FF14] opacity-60" />
        </div>
      </div>

      {/* Particle overlay */}
      <div className="absolute inset-0 particle-field"></div>
    </section>
  );
};

export default Hero;