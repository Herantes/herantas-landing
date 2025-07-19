import React from 'react';
import { Globe, Building2, Leaf, Users } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import GlowButton from './ui/GlowButton';

const GlobalImpact = () => {
  const partnerships = [
    { company: 'Fortune 500 Leaders', count: '147 Companies', color: '#39FF14' },
    { company: 'Global Universities', count: '89 Research Partnerships', color: '#00FFFF' },
    { company: 'Government Agencies', count: '34 Countries', color: '#FF1493' },
    { company: 'Startup Accelerators', count: '256 Startups Supported', color: '#FFD700' }
  ];

  const projects = [
    {
      icon: Building2,
      title: 'Smart City Initiative',
      description: 'Transforming urban landscapes with intelligent infrastructure and IoT connectivity',
      locations: ['Tokyo', 'Singapore', 'Dubai', 'London'],
      color: '#39FF14'
    },
    {
      icon: Leaf,
      title: 'Sustainability Program',
      description: 'Carbon-neutral technology solutions for a sustainable future',
      metrics: ['50% Energy Reduction', 'Zero Waste Manufacturing', 'Green Data Centers'],
      color: '#00FFFF'
    },
    {
      icon: Users,
      title: 'Digital Inclusion',
      description: 'Bridging the digital divide with accessible technology for all',
      reach: '2.4M People Impacted',
      color: '#FF1493'
    }
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#00FFFF] to-[#39FF14] bg-clip-text text-transparent">
            Global Impact
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Creating positive change worldwide through technology innovation and strategic partnerships
          </p>
        </div>

        {/* World Map Visualization */}
        <GlassCard className="p-12 mb-20 text-center" glowColor="#39FF14">
          <div className="relative">
            <Globe className="w-32 h-32 mx-auto mb-8 text-[#39FF14] animate-spin-slow" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 border-2 border-[#39FF14]/30 rounded-full animate-ping"></div>
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-4">Worldwide Presence</h3>
          <p className="text-xl text-gray-300 mb-8">Operating across 67 countries with 1.2M+ daily users</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partnerships.map((partnership, index) => (
              <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/20">
                <div className="text-2xl font-bold mb-1" style={{ color: partnership.color }}>
                  {partnership.count}
                </div>
                <div className="text-sm text-gray-400">{partnership.company}</div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Impact Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <GlassCard key={index} className="p-8 hover:scale-105 transition-all duration-500" glowColor={project.color}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-white/20 to-transparent border border-white/30 flex items-center justify-center mb-4">
                  <project.icon className="w-8 h-8" style={{ color: project.color }} />
                </div>
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 text-center">{project.description}</p>
              
              {project.locations && (
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-400 mb-2">Active Locations:</div>
                  {project.locations.map((location, i) => (
                    <div key={i} className="flex items-center justify-between p-2 bg-white/5 rounded border border-white/10">
                      <span>{location}</span>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: project.color }}></div>
                    </div>
                  ))}
                </div>
              )}
              
              {project.metrics && (
                <div className="space-y-2">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="p-2 bg-white/5 rounded border border-white/10 text-sm text-center">
                      {metric}
                    </div>
                  ))}
                </div>
              )}
              
              {project.reach && (
                <div className="text-center p-4 bg-gradient-to-r from-white/10 to-transparent rounded-lg border border-white/20">
                  <div className="text-2xl font-bold" style={{ color: project.color }}>{project.reach}</div>
                </div>
              )}
            </GlassCard>
          ))}
        </div>

        {/* Call to Action */}
        <GlassCard className="p-16 text-center" glowColor="#9D4EDD">
          <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#9D4EDD] to-[#FF6B35] bg-clip-text text-transparent">
            Ready to Shape the Future Together?
          </h3>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join the technology revolution and be part of innovations that will define the next century
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center max-w-2xl mx-auto">
            <GlowButton variant="cyan" size="large" className="flex-1">
              REQUEST DEMO
            </GlowButton>
            <GlowButton variant="primary" size="large" className="flex-1">
              PARTNERSHIP INQUIRY
            </GlowButton>
            <GlowButton variant="purple" size="large" className="flex-1">
              TECHNOLOGY CONSULTATION
            </GlowButton>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-gray-400 mb-4">Connect with our innovation team</p>
            <div className="flex justify-center space-x-8 text-sm">
              <span className="text-[#39FF14]">innovation@herantes.com</span>
              <span className="text-[#00FFFF]">+1-800-FUTURE</span>
              <span className="text-[#FF1493]">Global Support 24/7</span>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default GlobalImpact;