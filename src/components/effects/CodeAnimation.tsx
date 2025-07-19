import React, { useEffect, useRef } from 'react';

const CodeAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const codeSnippets = [
    'const quantum = new QuantumProcessor();',
    'await neural.train(dataset);',
    'blockchain.mine(block);',
    'ai.learn(experience);',
    'robot.execute(task);',
    'iot.connect(devices);',
    'cloud.scale(demand);',
    'security.encrypt(data);'
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createCodeLine = () => {
      const line = document.createElement('div');
      line.className = 'absolute text-[#39FF14] font-mono text-sm opacity-30 whitespace-nowrap animate-code-flow';
      line.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      line.style.left = Math.random() * 100 + '%';
      line.style.top = Math.random() * 100 + '%';
      line.style.animationDelay = Math.random() * 5 + 's';
      container.appendChild(line);

      setTimeout(() => {
        if (container.contains(line)) {
          container.removeChild(line);
        }
      }, 8000);
    };

    const interval = setInterval(createCodeLine, 2000);

    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden" />;
};

export default CodeAnimation;