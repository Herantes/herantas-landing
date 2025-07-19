import React, { useState } from 'react';
import { Lightbulb, Award, TrendingUp, Clock } from 'lucide-react';
import GlassCard from './ui/GlassCard';

const InnovationLab = () => {
  const [activeYear, setActiveYear] = useState(2024);

  const achievements = [
    { year: 2024, title: 'Quantum AI Breakthrough', description: 'First commercial quantum-AI hybrid processor', patents: 15 },
    { year: 2023, title: 'Neural Interface Technology', description: 'Direct brain-computer communication protocol', patents: 23 },
    { year: 2022, title: 'Holographic Computing', description: '3D volumetric display systems for enterprise', patents: 18 },
    { year: 2021, title: 'Autonomous Robotics', description: 'Self-learning robotic manufacturing systems', patents: 31 },
    { year: 2020, title: 'Edge AI Revolution', description: 'Ultra-efficient edge computing processors', patents: 27 }
  ];

  const researchAreas = [
    {
      icon: Lightbulb,
      title: 'Future Technologies',
      areas: ['Quantum Computing', 'Neural Networks', 'Biocomputing', 'Space Computing'],
      color: '#39FF14'
    },
    {
      icon: Award,
      title: 'Patent Portfolio',
      areas: ['114 Active Patents', '47 Pending Applications', '23 International Filings', '8 Breakthrough Innovations'],
      color: '#00FFFF'
    },
    {
      icon: TrendingUp,
      title: 'R&D Investment',
      areas: ['$2.4B Annual Budget', '340+ Research Scientists', '12 Global Labs', '156 Active Projects'],
      color: '#FF1493'
    }
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#1a0a2e] to-[#0A0A0A] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#39FF14] via-[#00FFFF] to-[#FF1493] bg-clip-text text-transparent">
            Innovation Lab
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Where breakthrough ideas become reality through cutting-edge research and development
          </p>
        </div>

        {/* Research Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {researchAreas.map((area, index) => (
            <GlassCard key={index} className="p-8 text-center" glowColor={area.color}>
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-white/20 to-transparent border border-white/30 flex items-center justify-center">
                  <area.icon className="w-8 h-8" style={{ color: area.color }} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-6">{area.title}</h3>
              <div className="space-y-3">
                {area.areas.map((item, i) => (
                  <div key={i} className="p-3 bg-white/5 rounded-lg border border-white/10 text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Innovation Timeline */}
        <GlassCard className="p-12" glowColor="#FFD700">
          <h3 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#FFD700] to-[#FF6B35] bg-clip-text text-transparent">
            Innovation Timeline
          </h3>

          <div className="flex justify-center mb-8">
            <div className="flex space-x-4 p-2 bg-white/5 rounded-xl border border-white/20">
              {achievements.map((achievement) => (
                <button
                  key={achievement.year}
                  onClick={() => setActiveYear(achievement.year)}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeYear === achievement.year
                      ? 'bg-[#FFD700] text-black font-bold'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {achievement.year}
                </button>
              ))}
            </div>
          </div>

          <div className="text-center">
            {achievements.filter(a => a.year === activeYear).map((achievement, index) => (
              <div key={index} className="max-w-3xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-[#FFD700] mr-3" />
                  <span className="text-[#FFD700] font-bold text-lg">{achievement.year}</span>
                </div>
                <h4 className="text-3xl font-bold mb-4">{achievement.title}</h4>
                <p className="text-xl text-gray-300 mb-6">{achievement.description}</p>
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#FFD700]/20 to-transparent border border-[#FFD700]/30 rounded-lg">
                  <span className="text-[#FFD700] font-bold">{achievement.patents} Patents Filed</span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Future Previews */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#9D4EDD] to-[#FF6B35] bg-clip-text text-transparent">
            Coming Soon: Next-Generation Breakthroughs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/20 rounded-xl hover:border-white/40 transition-all">
              <h4 className="text-xl font-bold mb-2">Consciousness Computing</h4>
              <p className="text-gray-400 text-sm">AI systems with human-like awareness and decision-making capabilities</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/20 rounded-xl hover:border-white/40 transition-all">
              <h4 className="text-xl font-bold mb-2">Molecular Manufacturing</h4>
              <p className="text-gray-400 text-sm">Atomic-level precision manufacturing for revolutionary materials</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/20 rounded-xl hover:border-white/40 transition-all">
              <h4 className="text-xl font-bold mb-2">Dimensional Computing</h4>
              <p className="text-gray-400 text-sm">Computing systems that operate across multiple dimensional spaces</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationLab;