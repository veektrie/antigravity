"use client";

import React from "react";
import Image from "next/image";

const NODES = [
  { name: "London", top: "78%", left: "54%", delay: "0s" },
  { name: "Manchester", top: "62%", left: "48%", delay: "0.5s" },
  { name: "Birmingham", top: "70%", left: "50%", delay: "1s" },
  { name: "Edinburgh", top: "42%", left: "45%", delay: "1.5s" },
  { name: "Glasgow", top: "44%", left: "42%", delay: "2s" },
  { name: "Cardiff", top: "75%", left: "40%", delay: "2.5s" },
  { name: "Belfast", top: "55%", left: "30%", delay: "3s" },
];

const NetworkVisual = () => {
  return (
    <div className="relative w-full aspect-square md:aspect-video lg:aspect-square mt-8 flex items-center justify-center overflow-hidden rounded-[3rem] bg-[#0b0c10] border border-[#1a56ff]/20 shadow-[0_0_50px_rgba(26,86,255,0.05)] group">
      
      {/* Background Image: The stylized Network Map */}
      <Image 
        src="/network-map.png" 
        alt="UK Logistics Network"
        fill
        className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-[10s] ease-linear"
        priority
      />

      {/* Blue Ambient Glows matching the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-[#1a56ff]/20 to-transparent blur-[100px] pointer-events-none" />

      {/* Static Overlay for "Digital Grid" feel */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90(deg), #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Animated Hub Markers */}
      <div className="absolute inset-0 z-10">
        {NODES.map((node) => (
          <div 
            key={node.name}
            className="absolute flex items-center justify-center"
            style={{ top: node.top, left: node.left }}
          >
            {/* Pulsing ring */}
            <div 
              className="absolute h-8 w-8 rounded-full border border-[#1a56ff]/50 animate-ping"
              style={{ animationDelay: node.delay, animationDuration: '3s' }}
            />
            {/* Glowing core */}
            <div className="h-3 w-3 rounded-full bg-[#1a56ff] shadow-[0_0_15px_#1a56ff]" />
            
            {/* Label - visible on hover or slightly dimmed by default */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[9px] font-bold text-white uppercase tracking-tighter border border-white/10">
              {node.name}
            </div>
          </div>
        ))}
      </div>

      {/* Live Status Tag */}
      <div className="absolute bottom-8 left-8 inline-flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 z-20 pointer-events-none">
        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#f9f9fb]">Network Active - 24/7 Monitoring</span>
      </div>

      {/* Decorative Bevel Cut - matching Delivar Section logic */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-[#0b0c10] rotate-45 translate-x-1/2 -translate-y-1/2 border-l border-white/5 shadow-inner" />
    </div>
  );
};

export default NetworkVisual;
