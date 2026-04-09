"use client";

import React, { useState } from "react";
import { MessageSquare } from "lucide-react";

interface CityDot {
  name: string;
  x: string;
  y: string;
  region: string;
  color: string;
}

const UKMap = () => {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const dots: CityDot[] = [
    { name: "Glasgow", x: "42%", y: "45%", region: "Scotland", color: "#312e81" },
    { name: "Edinburgh", x: "46%", y: "46%", region: "Scotland", color: "#312e81" },
    { name: "Newcastle", x: "53%", y: "55%", region: "North East", color: "#3730a3" },
    { name: "Manchester", x: "48%", y: "68%", region: "North West", color: "#3730a3" },
    { name: "Liverpool", x: "45%", y: "69%", region: "North West", color: "#3730a3" },
    { name: "Birmingham", x: "49%", y: "76%", region: "Midlands", color: "#4338ca" },
    { name: "London", x: "58%", y: "85%", region: "South East", color: "#4f46e5" },
    { name: "Bristol", x: "45%", y: "85%", region: "South West", color: "#4f46e5" },
    { name: "Cardiff", x: "41%", y: "84%", region: "Wales", color: "#1e1b4b" },
    { name: "Belfast", x: "28%", y: "64%", region: "Northern Ireland", color: "#1e3a8a" },
  ];

  const regions = [
    { id: "scotland", name: "Scotland", path: "M40,20 L45,15 L50,18 L55,25 L58,35 L52,45 L40,40 L35,35 Z", gradient: "grad-indigo" },
    { id: "wales", name: "Wales", path: "M41,84 L43,80 L40,75 L38,72 L36,75 L35,80 L38,85 Z", gradient: "grad-blue-dark" },
    { id: "northern-ireland", name: "Northern Ireland", path: "M25,60 L20,65 L15,70 L18,80 L25,85 L30,80 L28,70 L25,60 Z", gradient: "grad-blue" },
    { id: "north-england", name: "North England", path: "M52,45 L58,35 L62,55 L55,65 L48,65 L52,45 Z", gradient: "grad-indigo-light" },
    { id: "midlands", name: "Midlands", path: "M48,65 L55,65 L60,75 L55,80 L45,80 L48,65 Z", gradient: "grad-blue-light" },
    { id: "south-england", name: "South England", path: "M45,80 L55,80 L60,75 L68,75 L65,85 L60,95 L50,95 L40,85 Z", gradient: "grad-indigo-vibrant" },
  ];

  return (
    <section className="section-padding union-jack-bg border-y border-border overflow-hidden">
      <style jsx>{`
        @keyframes ping-vibrant {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(3); opacity: 0; }
        }
        .ping-anim {
          animation: ping-vibrant 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 border border-blue-200 rounded-full bg-blue-50/50 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-800">Nationwide Network</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase italic">
            DELIVERING ACROSS THE <br className="hidden md:block" />
            <span className="text-indigo-950 not-italic">UNITED KINGDOM</span>
          </h2>
          <p className="text-muted text-sm font-medium uppercase tracking-widest leading-loose">
            Strategically positioned hubs across major UK regions ensuring <br className="hidden md:block" />
            <span className="text-[#0D1B3E] font-bold">maximum responsiveness and zero delay.</span>
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto aspect-[4/3] glass-container rounded-[3rem] flex items-center justify-center p-8 md:p-16 overflow-hidden">
          {/* Subtle background gradient on the card itself */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-indigo-50/20 pointer-events-none" />

          <div className="relative w-full h-full">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full transition-all duration-700 drop-shadow-2xl"
            >
              <defs>
                <linearGradient id="grad-indigo" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#312e81" />
                  <stop offset="100%" stopColor="#1e1b4b" />
                </linearGradient>
                <linearGradient id="grad-blue-dark" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e1b4b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
                <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e3a8a" />
                  <stop offset="100%" stopColor="#172554" />
                </linearGradient>
                <linearGradient id="grad-indigo-light" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3730a3" />
                  <stop offset="100%" stopColor="#312e81" />
                </linearGradient>
                <linearGradient id="grad-blue-light" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4338ca" />
                  <stop offset="100%" stopColor="#3730a3" />
                </linearGradient>
                <linearGradient id="grad-indigo-vibrant" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4f46e5" />
                  <stop offset="100%" stopColor="#3730a3" />
                </linearGradient>
                
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Regional Paths */}
              {regions.map((region) => (
                <path
                  key={region.id}
                  d={region.path}
                  fill={`url(#${region.gradient})`}
                  className={`transition-all duration-500 cursor-pointer ${
                    hoveredRegion === region.id ? "brightness-125 scale-[1.02]" : "brightness-100"
                  }`}
                  style={{ transformOrigin: "center" }}
                  onMouseEnter={() => setHoveredRegion(region.id)}
                  onMouseLeave={() => setHoveredRegion(null)}
                />
              ))}

              {/* Decorative extra paths (Islands/Shadows) */}
              <circle cx="20" cy="30" r="1.5" fill="url(#grad-indigo)" opacity="0.4" />
              <circle cx="25" cy="25" r="1" fill="url(#grad-indigo)" opacity="0.4" />
            </svg>

            {/* Interactive Dots */}
            {dots.map((dot) => (
              <div
                key={dot.name}
                style={{ left: dot.x, top: dot.y }}
                className="absolute flex items-center justify-center group pointer-events-auto"
                onMouseEnter={() => setHoveredCity(dot.name)}
                onMouseLeave={() => setHoveredCity(null)}
              >
                {/* Radar Ping for active/hovered city */}
                <div className={`absolute h-8 w-8 rounded-full bg-orange-500/30 ping-anim ${
                  hoveredCity === dot.name ? "visible" : "invisible"
                }`} />

                {/* Main Dot */}
                <div 
                  className={`relative h-3.5 w-3.5 rounded-full cursor-pointer transition-all duration-300 border-2 border-white shadow-lg ${
                    hoveredCity === dot.name 
                      ? "bg-orange-500 scale-150 ring-4 ring-orange-500/20" 
                      : "bg-white group-hover:bg-orange-500"
                  }`} 
                />
                
                {/* Enhanced Tooltip */}
                {hoveredCity === dot.name && (
                  <div className="absolute bottom-full mb-4 bg-[#0D1B3E] text-white px-5 py-3 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-in fade-in zoom-in-95 duration-200 z-50 min-w-[140px] border border-blue-400/20 backdrop-blur-sm">
                    <p className="text-[10px] text-blue-300 font-bold uppercase tracking-[0.2em] mb-1">{dot.region}</p>
                    <p className="text-sm font-bold tracking-tight">{dot.name}</p>
                    <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between">
                       <span className="text-[8px] font-bold uppercase tracking-widest text-green-400">Hub Active</span>
                       <div className="h-1 w-1 rounded-full bg-green-400" />
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#0D1B3E]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Floating Indicators */}
          <div className="absolute bottom-12 left-12 space-y-4 hidden md:block">
            <div className="flex items-center space-x-3 text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-900">
               <div className="h-0.5 w-6 bg-indigo-900" />
               <span>Logistics Reach</span>
            </div>
            <div className="bg-white/40 backdrop-blur-md p-4 rounded-2xl border border-white/50 space-y-2 shadow-sm">
               <p className="text-[10px] font-bold uppercase tracking-widest text-[#0D1B3E]">Coverage stats</p>
               <div className="flex space-x-4">
                  <div>
                    <p className="text-xl font-bold tracking-tighter text-[#0D1B3E]">12</p>
                    <p className="text-[8px] text-muted font-bold uppercase">Regions</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold tracking-tighter text-[#0D1B3E]">24/7</p>
                    <p className="text-[8px] text-muted font-bold uppercase">Network</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Chat Visual (Bottom Right) */}
          <div className="absolute bottom-12 right-12 group">
            <div className="bg-indigo-950 text-white p-5 rounded-full shadow-2xl cursor-pointer hover:bg-indigo-900 transition-all flex items-center justify-center relative ring-4 ring-indigo-950/20 active:scale-95">
               <MessageSquare size={24} />
               <div className="absolute -top-1 -right-1 h-5 w-5 bg-orange-500 rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white">1</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UKMap;
