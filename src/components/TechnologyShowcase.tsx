import React from 'react';
import { Brain, Atom, Wifi, Shield, Bot, Sparkles } from 'lucide-react';
import GlassCard from './ui/GlassCard';

const TechnologyShowcase = () => {
  const technologies = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Advanced neural networks and deep learning algorithms powering intelligent automation and predictive analytics.',
      color: '#39FF14',
      features: ['Neural Networks', 'Predictive Analytics', 'Computer Vision', 'NLP Processing']
    },
    {
      icon: Bot,
      title: 'AI Agents',
      description: 'Autonomous intelligent agents that learn, adapt, and execute complex tasks with human-like reasoning.',
      color: '#00FFFF',
      features: ['Autonomous Decision Making', 'Multi-Agent Systems', 'Conversational AI', 'Task Automation']
    },
    {
      icon: Atom,
      title: 'Quantum Computing',
      description: 'Breakthrough quantum processors solving impossibly complex problems at unprecedented speeds.',
      color: '#FF1493',
      features: ['Quantum Algorithms', 'Error Correction', 'Quantum Supremacy', 'Cryptography']
    },
    {
      icon: Wifi,
      title: 'IoT Ecosystem',
      description: 'Seamlessly connected smart devices creating intelligent environments and data-driven insights.',
      color: '#FFD700',
      features: ['Edge Computing', 'Smart Sensors', 'Real-time Analytics', 'Device Management']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Next-generation security protocols protecting against emerging threats with AI-powered defense systems.',
      color: '#FF6B35',
      features: ['Zero Trust Architecture', 'Threat Intelligence', 'Behavioral Analysis', 'Quantum Encryption']
    },
    {
      icon: Sparkles,
      title: 'Future Tech',
      description: 'Cutting-edge research into emerging technologies that will define the next decade of innovation.',
      color: '#9D4EDD',
      features: ['Holographic Displays', 'Brain-Computer Interface', 'Nano Technology', 'Space Computing']
    }
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#39FF14] to-[#00FFFF] bg-clip-text text-transparent">
            Technology Showcase
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover our revolutionary technologies that are reshaping industries and defining the future of innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <GlassCard
              key={index}
              className="group hover:scale-105 transition-all duration-500"
              glowColor={tech.color}
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br from-${tech.color}20 to-transparent border border-${tech.color}30`}>
                    <tech.icon className="w-8 h-8" style={{ color: tech.color }} />
                  </div>
                  <h3 className="text-2xl font-bold ml-4 group-hover:text-white transition-colors">
                    {tech.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {tech.description}
                </p>

                <div className="space-y-2">
                  {tech.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-400">
                      <div className={`w-2 h-2 rounded-full mr-3`} style={{ backgroundColor: tech.color }}></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-lg border border-white/10">
                  <button 
                    className="w-full text-center font-medium text-white/80 hover:text-white transition-colors"
                    style={{ textShadow: `0 0 10px ${tech.color}` }}
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyShowcase;