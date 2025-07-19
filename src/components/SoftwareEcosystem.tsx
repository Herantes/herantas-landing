import React from 'react';
import { Cloud, Smartphone, Database, Link2 } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import CodeAnimation from './effects/CodeAnimation';

const SoftwareEcosystem = () => {
  const solutions = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure cloud platforms with global reach and 99.99% uptime guarantee',
      color: '#00FFFF',
      metrics: ['99.99% Uptime', '50+ Data Centers', 'Auto-Scaling', 'Edge Computing']
    },
    {
      icon: Smartphone,
      title: 'Enterprise Applications',
      description: 'Mission-critical business applications built for performance and reliability',
      color: '#39FF14',
      metrics: ['Real-time Sync', 'Advanced Analytics', 'Custom Workflows', 'API Integration']
    },
    {
      icon: Database,
      title: 'Mobile-First Solutions',
      description: 'Next-generation mobile experiences with seamless cross-platform functionality',
      color: '#FF1493',
      metrics: ['Native Performance', 'Offline Support', 'Push Notifications', 'Biometric Auth']
    },
    {
      icon: Link2,
      title: 'Blockchain Technology',
      description: 'Secure, transparent blockchain solutions for decentralized applications',
      color: '#FFD700',
      metrics: ['Smart Contracts', 'DeFi Protocols', 'NFT Platforms', 'Crypto Wallets']
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background code animation */}
      <div className="absolute inset-0 opacity-10">
        <CodeAnimation />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#00FFFF] to-[#FF1493] bg-clip-text text-transparent">
            Software Ecosystem
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive software solutions that drive digital transformation and accelerate business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <GlassCard
              key={index}
              className="group hover:scale-105 transition-all duration-500 overflow-hidden"
              glowColor={solution.color}
            >
              <div className="p-8 relative">
                <div className="flex items-center mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-white/20 to-transparent border border-white/20 mr-4">
                    <solution.icon className="w-8 h-8" style={{ color: solution.color }} />
                  </div>
                  <h3 className="text-2xl font-bold">{solution.title}</h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {solution.metrics.map((metric, i) => (
                    <div key={i} className="p-3 bg-gradient-to-r from-white/5 to-transparent rounded-lg border border-white/10">
                      <div className="text-sm font-medium">{metric}</div>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <button className="flex-1 py-3 px-6 bg-gradient-to-r from-white/10 to-transparent border border-white/20 rounded-lg hover:bg-white/20 transition-all font-medium">
                    Learn More
                  </button>
                  <button 
                    className="flex-1 py-3 px-6 rounded-lg font-medium text-black transition-all hover:scale-105"
                    style={{ backgroundColor: solution.color }}
                  >
                    Get Started
                  </button>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:animate-border-flow" 
                     style={{ background: `linear-gradient(45deg, transparent, ${solution.color}20, transparent)` }}></div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Platform Integration */}
        <GlassCard className="p-12 text-center" glowColor="#9D4EDD">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#39FF14] to-[#9D4EDD] bg-clip-text text-transparent">
            Unified Platform Integration
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            All our software solutions work seamlessly together, creating a unified ecosystem that scales with your business needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">API-First Architecture</span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">Microservices</span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">Real-time Analytics</span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">Enterprise Security</span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">Global CDN</span>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default SoftwareEcosystem;