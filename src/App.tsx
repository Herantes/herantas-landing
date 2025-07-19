import React from 'react';
import Hero from './components/Hero';
import TechnologyShowcase from './components/TechnologyShowcase';
import HardwareDivision from './components/HardwareDivision';
import SoftwareEcosystem from './components/SoftwareEcosystem';
import InnovationLab from './components/InnovationLab';
import GlobalImpact from './components/GlobalImpact';
import MatrixRain from './components/effects/MatrixRain';
import CustomCursor from './components/effects/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden relative">
      <MatrixRain />
      <CustomCursor />
      
      <Hero />
      <TechnologyShowcase />
      <HardwareDivision />
      <SoftwareEcosystem />
      <InnovationLab />
      <GlobalImpact />
      
      {/* Floating geometric elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#39FF14] rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#00FFFF] rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-[#FF1493] rounded-full animate-bounce opacity-50"></div>
      </div>
    </div>
  );
}

export default App;