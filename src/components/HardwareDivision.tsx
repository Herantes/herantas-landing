import React, { useState } from 'react';
import { Ship as Chip, Cog, Bot, Factory } from 'lucide-react';
import GlassCard from './ui/GlassCard';

const HardwareDivision = () => {
  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      icon: Chip,
      title: 'Custom Silicon Design',
      description: 'Revolutionary processors engineered for maximum performance and efficiency',
      color: '#39FF14',
      specs: ['7nm Architecture', '128-Core Processing', 'AI Acceleration', 'Ultra-Low Power']
    },
    {
      icon: Cog,
      title: 'Semiconductor Solutions',
      description: 'Advanced semiconductor technologies pushing the boundaries of computing',
      color: '#00FFFF',
      specs: ['Quantum Dots', 'Neural Chips', 'Photonic Integration', 'Flexible Electronics']
    },
    {
      icon: Bot,
      title: 'Advanced Robotics',
      description: 'Intelligent robotic systems with human-like dexterity and decision making',
      color: '#FF1493',
      specs: ['Autonomous Navigation', 'Machine Learning', 'Sensor Fusion', 'Cloud Connectivity']
    },
    {
      icon: Factory,
      title: 'Smart Manufacturing',
      description: 'Automated production systems with real-time optimization and quality control',
      color: '#FFD700',
      specs: ['Industry 4.0', 'Predictive Maintenance', 'Digital Twins', 'Zero Defect Manufacturing']
    }
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F0F23]/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#FF1493] to-[#39FF14] bg-clip-text text-transparent">
            Hardware Division
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cutting-edge hardware solutions that power the digital transformation of tomorrow
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product showcase */}
          <div className="space-y-6">
            {products.map((product, index) => (
              <GlassCard
                key={index}
                className={`cursor-pointer transition-all duration-500 ${
                  activeProduct === index ? 'scale-105 border-white/30' : 'hover:scale-102'
                }`}
                glowColor={activeProduct === index ? product.color : undefined}
                onClick={() => setActiveProduct(index)}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg mr-4 ${
                      activeProduct === index 
                        ? 'bg-gradient-to-br from-white/20 to-transparent' 
                        : 'bg-white/10'
                    }`}>
                      <product.icon 
                        className="w-6 h-6" 
                        style={{ color: activeProduct === index ? product.color : '#fff' }} 
                      />
                    </div>
                    <h3 className="text-xl font-bold">{product.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{product.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* 3D visualization area */}
          <div className="relative">
            <GlassCard className="aspect-square p-8" glowColor={products[activeProduct].color}>
              <div className="h-full flex flex-col items-center justify-center">
                {/* Declare the dynamic component */}
                {(() => {
                  const CurrentIcon = products[activeProduct].icon;
                  return (
                <div className="relative mb-8">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-white/20 to-transparent border border-white/30 flex items-center justify-center animate-spin-slow">
                    <CurrentIcon 
                      className="w-16 h-16" 
                      style={{ color: products[activeProduct].color }} 
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent to-white/10 animate-pulse"></div>
                </div>
                  );
                })()}

                <h4 className="text-2xl font-bold mb-4 text-center">
                  {products[activeProduct].title}
                </h4>

                <div className="space-y-3 w-full">
                  {products[activeProduct].specs.map((spec, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                      <span className="text-gray-300">{spec}</span>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: products[activeProduct].color }}></div>
                    </div>
                  ))}
                </div>

                <button className="mt-6 px-6 py-3 bg-gradient-to-r from-white/10 to-transparent border border-white/20 rounded-lg hover:bg-white/20 transition-all">
                  View Specifications
                </button>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HardwareDivision;