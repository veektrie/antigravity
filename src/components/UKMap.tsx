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
    { name: "Glasgow", x: "42%", y: "24%", region: "Scotland", color: "#312e81" },
    { name: "Edinburgh", x: "50%", y: "28%", region: "Scotland", color: "#312e81" },
    { name: "Newcastle", x: "56%", y: "42%", region: "North East", color: "#3730a3" },
    { name: "Manchester", x: "49%", y: "55%", region: "North West", color: "#3730a3" },
    { name: "Liverpool", x: "44%", y: "56%", region: "North West", color: "#3730a3" },
    { name: "Birmingham", x: "52%", y: "65%", region: "Midlands", color: "#4338ca" },
    { name: "London", x: "60%", y: "78%", region: "South East", color: "#4f46e5" },
    { name: "Bristol", x: "45%", y: "75%", region: "South West", color: "#4f46e5" },
    { name: "Cardiff", x: "40%", y: "73%", region: "Wales", color: "#1e1b4b" },
    { name: "Belfast", x: "28%", y: "38%", region: "Northern Ireland", color: "#1e3a8a" },
  ];

  const regions = [
    { id: "scotland", name: "Scotland", path: "M38,5 L44,2 L52,4 L58,12 L60,22 L54,30 L42,28 L36,22 Z", gradient: "grad-scotland" },
    { id: "northern-ireland", name: "Northern Ireland", path: "M22,32 L18,40 L22,48 L30,46 L32,38 L28,30 Z", gradient: "grad-ni" },
    { id: "wales", name: "Wales", path: "M38,62 L44,58 L42,70 L38,76 L34,72 L33,64 Z", gradient: "grad-wales" },
    { id: "north-england", name: "North England", path: "M43,30 L54,30 L62,35 L62,50 L55,53 L44,52 L40,45 Z", gradient: "grad-north" },
    { id: "midlands", name: "Midlands", path: "M44,52 L55,53 L62,57 L60,68 L52,70 L42,66 L40,58 Z", gradient: "grad-midlands" },
    { id: "south-england", name: "South England", path: "M38,76 L42,66 L52,70 L60,68 L66,72 L68,82 L60,90 L50,92 L40,86 Z", gradient: "grad-south" },
  ];

  return (
    <section
      className="section-padding overflow-hidden border-y border-white/20"
      style={{
        background: `
          radial-gradient(ellipse at 0% 0%, rgba(204, 30, 61, 0.18) 0%, transparent 50%),
          radial-gradient(ellipse at 100% 100%, rgba(1, 33, 105, 0.20) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(1, 33, 105, 0.06) 0%, transparent 70%),
          linear-gradient(160deg, #f0f4ff 0%, #f8f8ff 40%, #fff5f7 70%, #f0f4ff 100%)
        `,
      }}
    >
      <style jsx>{`
        @keyframes ping-vibrant {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(3.5); opacity: 0; }
        }
        .ping-anim {
          animation: ping-vibrant 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 border border-indigo-200/60 rounded-full bg-indigo-50/60 backdrop-blur-sm mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-800">Nationwide Network</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase italic text-[#0D1B3E]">
            DELIVERING ACROSS THE <br className="hidden md:block" />
            <span className="not-italic text-accent">UNITED KINGDOM</span>
          </h2>
          <p className="text-muted text-sm font-medium uppercase tracking-widest leading-loose">
            Strategically positioned hubs across major UK regions ensuring{" "}
            <span className="text-[#0D1B3E] font-bold">maximum responsiveness and zero delay.</span>
          </p>
        </div>

        {/* Glassmorphic Map Container */}
        <div
          className="relative w-full max-w-4xl mx-auto aspect-[4/3] rounded-[3rem] flex items-center justify-center p-8 md:p-16 overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.45)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.7)",
            boxShadow: "0 32px 80px rgba(1,33,105,0.14), 0 2px 0 rgba(255,255,255,0.8) inset",
          }}
        >
          {/* Inner subtle red stripe top-left */}
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-[3rem]" style={{ background: "linear-gradient(90deg, rgba(204,30,61,0.4), rgba(204,30,61,0.1) 40%, transparent)" }} />

          <div className="relative w-full h-full">
            <svg viewBox="0 0 100 100" className="w-full h-full transition-all duration-700 drop-shadow-2xl">
              <defs>
                <linearGradient id="grad-scotland" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e3a8a" />
                  <stop offset="100%" stopColor="#312e81" />
                </linearGradient>
                <linearGradient id="grad-ni" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e3a8a" />
                  <stop offset="100%" stopColor="#1e40af" />
                </linearGradient>
                <linearGradient id="grad-wales" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e1b4b" />
                  <stop offset="100%" stopColor="#312e81" />
                </linearGradient>
                <linearGradient id="grad-north" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1d4ed8" />
                  <stop offset="100%" stopColor="#2e3cd1" />
                </linearGradient>
                <linearGradient id="grad-midlands" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3730a3" />
                  <stop offset="100%" stopColor="#4338ca" />
                </linearGradient>
                <linearGradient id="grad-south" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4f46e5" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {regions.map((region) => (
                <path
                  key={region.id}
                  d={region.path}
                  fill={`url(#${region.gradient})`}
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="0.5"
                  className="cursor-pointer transition-all duration-300"
                  style={{
                    filter: hoveredRegion === region.id ? "brightness(1.3) drop-shadow(0 0 6px rgba(79,70,229,0.6))" : "brightness(1)",
                  }}
                  onMouseEnter={() => setHoveredRegion(region.id)}
                  onMouseLeave={() => setHoveredRegion(null)}
                />
              ))}

              {/* Decorative Islands */}
              <circle cx="32" cy="10" r="2.5" fill="url(#grad-scotland)" opacity="0.5" />
              <circle cx="38" cy="8" r="1.5" fill="url(#grad-scotland)" opacity="0.4" />
            </svg>

            {/* Interactive City Dots */}
            {dots.map((dot) => (
              <div
                key={dot.name}
                style={{ left: dot.x, top: dot.y }}
                className="absolute flex items-center justify-center group pointer-events-auto -translate-x-1/2 -translate-y-1/2"
                onMouseEnter={() => setHoveredCity(dot.name)}
                onMouseLeave={() => setHoveredCity(null)}
              >
                {/* Radar Ping */}
                {hoveredCity === dot.name && (
                  <div className="absolute h-8 w-8 rounded-full bg-orange-500/30 ping-anim" />
                )}

                {/* Dot */}
                <div
                  className={`relative h-3 w-3 rounded-full cursor-pointer transition-all duration-300 border-2 border-white shadow-lg ${
                    hoveredCity === dot.name
                      ? "bg-accent scale-150 ring-4 ring-accent/30"
                      : "bg-indigo-200 group-hover:bg-accent"
                  }`}
                />

                {/* Tooltip */}
                {hoveredCity === dot.name && (
                  <div className="absolute bottom-full mb-4 bg-[#0D1B3E] text-white px-5 py-3 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.35)] z-50 min-w-[140px] border border-indigo-400/20 backdrop-blur-sm whitespace-nowrap">
                    <p className="text-[9px] text-indigo-300 font-bold uppercase tracking-[0.2em] mb-1">{dot.region}</p>
                    <p className="text-sm font-bold tracking-tight">{dot.name}</p>
                    <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[8px] font-bold uppercase tracking-widest text-emerald-400">Hub Active</span>
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#0D1B3E]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom-left coverage stats */}
          <div className="absolute bottom-10 left-10 space-y-3 hidden md:block">
            <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-900/70">
              <div className="h-px w-5 bg-indigo-900/40" />
              <span>Coverage</span>
            </div>
            <div
              className="p-4 rounded-2xl space-y-2"
              style={{
                background: "rgba(255,255,255,0.6)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.8)",
                boxShadow: "0 8px 24px rgba(1,33,105,0.08)",
              }}
            >
              <p className="text-[9px] font-bold uppercase tracking-widest text-[#0D1B3E]/60">Logistics Stats</p>
              <div className="flex space-x-5">
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

          {/* Bottom-right chat button */}
          <div className="absolute bottom-10 right-10 hidden md:block">
            <div
              className="text-white p-4 rounded-full shadow-2xl cursor-pointer flex items-center justify-center relative ring-4 ring-indigo-950/10 hover:scale-105 active:scale-95 transition-all"
              style={{ background: "linear-gradient(135deg, #0D1B3E, #1e3a8a)" }}
            >
              <MessageSquare size={22} />
              <div className="absolute -top-1 -right-1 h-5 w-5 bg-accent rounded-full flex items-center justify-center text-[9px] font-bold border-2 border-white">1</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UKMap;
