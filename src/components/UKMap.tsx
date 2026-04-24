"use client";

import React, { useState } from "react";

interface CityDot {
  name: string;
  cx: number;
  cy: number;
  region: string;
}

const cities: CityDot[] = [
  { name: "London", cx: 348, cy: 430, region: "South East" },
  { name: "Birmingham", cx: 290, cy: 330, region: "Midlands" },
  { name: "Manchester", cx: 265, cy: 245, region: "North West" },
  { name: "Liverpool", cx: 238, cy: 255, region: "North West" },
  { name: "Leeds", cx: 298, cy: 228, region: "Yorkshire" },
  { name: "Sheffield", cx: 295, cy: 260, region: "Yorkshire" },
  { name: "Bristol", cx: 233, cy: 405, region: "South West" },
  { name: "Cardiff", cx: 208, cy: 390, region: "Wales" },
  { name: "Glasgow", cx: 215, cy: 105, region: "Scotland" },
  { name: "Edinburgh", cx: 248, cy: 120, region: "Scotland" },
  { name: "Newcastle", cx: 295, cy: 175, region: "North East" },
  { name: "Belfast", cx: 140, cy: 155, region: "N. Ireland" },
  { name: "Nottingham", cx: 310, cy: 295, region: "Midlands" },
  { name: "Southampton", cx: 275, cy: 445, region: "South" },
];

const UKMap = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 bg-white flex justify-center overflow-hidden border-y border-blue-50">
      <div className="max-w-[1400px] w-full px-6 md:px-12 lg:px-16 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 border border-blue-200 rounded-full bg-blue-50">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-900">Nationwide Network</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-blue-950 leading-[0.95]">
            Delivering Across the <br className="hidden md:block" />
            <span className="text-blue-600">United Kingdom</span>
          </h2>
          <p className="text-blue-900/40 text-lg font-medium leading-relaxed max-w-xl mx-auto">
            From local same-day couriers to nationwide logistics, our network covers every major city and region.
          </p>
        </div>

        {/* Map + Stats Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Stats Column */}
          <div className="space-y-6">
            {[
              { value: "14+", label: "Major Cities Covered", color: "text-blue-950" },
              { value: "500+", label: "Deliveries Daily", color: "text-blue-600" },
              { value: "24/7", label: "Operations", color: "text-blue-950" },
              { value: "99.9%", label: "On-Time Success", color: "text-blue-600" },
            ].map((s) => (
              <div key={s.label} className="bg-blue-50/50 rounded-3xl p-8 border border-blue-100 shadow-sm hover:bg-blue-50 transition-all">
                <p className={`text-4xl font-black tracking-tighter ${s.color}`}>{s.value}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-blue-900/30 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Map Column */}
          <div className="lg:col-span-2 relative bg-blue-50/30 rounded-[3rem] p-10 md:p-16 border border-blue-100 shadow-2xl">
            <svg viewBox="0 0 500 600" className="w-full h-auto max-h-[550px]">
              <g fill="#dbeafe" stroke="white" strokeWidth="1.5" strokeLinejoin="round">
                <path d="M 195,480 L 188,472 L 175,468 L 168,460 L 162,448 L 158,435 L 162,422 L 170,415 L 178,408 L 182,396 L 178,384 L 172,376 L 168,366 L 165,352 L 168,340 L 175,330 L 180,320 L 178,308 L 172,298 L 165,288 L 160,276 L 162,264 L 168,254 L 178,246 L 192,240 L 205,236 L 218,232 L 232,228 L 248,226 L 265,228 L 280,232 L 295,238 L 308,246 L 318,256 L 325,268 L 328,280 L 326,292 L 320,302 L 315,315 L 318,328 L 325,340 L 332,352 L 336,366 L 334,378 L 328,390 L 320,402 L 315,416 L 318,430 L 326,442 L 335,452 L 342,460 L 348,468 L 352,478 L 350,488 L 342,494 L 330,496 L 316,495 L 302,492 L 288,490 L 272,490 L 258,492 L 244,495 L 232,496 L 218,494 L 206,490 L 198,484 Z" />
                <path d="M 165,352 L 155,345 L 142,340 L 132,335 L 125,328 L 122,318 L 125,308 L 132,300 L 140,294 L 150,290 L 160,288 L 165,298 L 162,310 L 162,322 L 162,335 L 165,345 Z" />
                <path d="M 195,480 L 182,478 L 168,476 L 155,472 L 142,465 L 132,456 L 126,445 L 128,434 L 136,426 L 148,420 L 158,418 L 162,428 L 162,440 L 162,450 L 168,458 L 175,464 L 184,470 Z" />
                <path d="M 192,240 L 185,230 L 178,220 L 175,208 L 175,196 L 178,184 L 182,174 L 186,164 L 188,154 L 186,144 L 182,136 L 178,126 L 180,116 L 186,108 L 195,102 L 205,98 L 218,96 L 232,97 L 245,100 L 256,106 L 264,115 L 268,126 L 265,138 L 258,148 L 252,158 L 250,170 L 252,182 L 258,192 L 264,202 L 268,212 L 268,224 L 265,234 L 258,240 L 248,244 L 238,244 L 228,242 L 218,240 L 208,240 Z" />
                <path d="M 178,184 L 165,180 L 155,175 L 148,168 L 148,158 L 154,150 L 162,146 L 170,148 L 175,156 L 175,166 L 175,176 Z" />
                <path d="M 256,106 L 268,100 L 280,96 L 292,94 L 302,98 L 308,108 L 306,120 L 298,128 L 288,132 L 278,128 L 270,120 L 264,112 Z" />
              </g>
              <path d="M 100,148 L 88,142 L 78,138 L 70,145 L 68,155 L 72,165 L 80,172 L 90,175 L 100,172 L 108,165 L 110,155 Z" fill="#dbeafe" stroke="white" strokeWidth="1.5" />
              {cities.map((city) => (
                <g key={city.name}>
                  {hovered === city.name && <circle cx={city.cx} cy={city.cy} r="14" fill="rgba(37,99,235,0.15)" />}
                  <circle
                    cx={city.cx} cy={city.cy} r={hovered === city.name ? 7 : 5}
                    fill={hovered === city.name ? "#2563eb" : "#1e40af"}
                    stroke="white" strokeWidth="2" className="cursor-pointer transition-all duration-200"
                    onMouseEnter={() => setHovered(city.name)} onMouseLeave={() => setHovered(null)}
                  />
                </g>
              ))}
              <g>
                <circle cx={310} cy={295} r="10" fill="#2563eb" stroke="white" strokeWidth="3" style={{ filter: "drop-shadow(0 0 10px rgba(37,99,235,0.5))" }} />
                <circle cx={310} cy={295} r="4" fill="white" />
              </g>
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UKMap;
