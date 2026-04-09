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
    <section
      className="section-padding overflow-hidden border-y border-slate-100"
      style={{
        background: `
          radial-gradient(ellipse at 0% 0%, rgba(204, 30, 61, 0.10) 0%, transparent 45%),
          radial-gradient(ellipse at 100% 100%, rgba(1, 33, 105, 0.13) 0%, transparent 45%),
          linear-gradient(160deg, #f0f4ff 0%, #f9f9ff 40%, #fff5f7 70%, #f0f4ff 100%)
        `,
      }}
    >
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Header */}
        <div className="text-center space-y-5 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 border border-indigo-200/60 rounded-full bg-indigo-50/60 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-800">Nationwide Network</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase italic text-[#0D1B3E]">
            DELIVERING ACROSS THE <br className="hidden md:block" />
            <span className="not-italic text-accent">UNITED KINGDOM</span>
          </h2>
          <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-xl mx-auto">
            From local same-day couriers to nationwide scheduled deliveries, our
            network covers every major city and region across the UK.
          </p>
        </div>

        {/* Map + Stats Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Stats Column */}
          <div className="space-y-6 lg:pt-16">
            {[
              { value: "14+", label: "Major Cities Covered", color: "text-indigo-900" },
              { value: "500+", label: "Deliveries Completed", color: "text-accent" },
              { value: "24/7", label: "Network Operations", color: "text-indigo-900" },
              { value: "99%", label: "On-Time Success Rate", color: "text-accent" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white/70 backdrop-blur-md rounded-2xl p-5 border border-white/80 shadow-sm"
                style={{ boxShadow: "0 4px 20px rgba(1,33,105,0.06)" }}
              >
                <p className={`text-3xl font-extrabold tracking-tighter ${s.color}`}>{s.value}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Map Column */}
          <div className="lg:col-span-2">
            <div
              className="relative w-full rounded-3xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.55)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.8)",
                boxShadow: "0 24px 64px rgba(1,33,105,0.10), 0 1px 0 rgba(255,255,255,0.9) inset",
                padding: "2rem",
              }}
            >
              {/* Subtle union jack top bar accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl" style={{ background: "linear-gradient(90deg, rgba(204,30,61,0.5), rgba(255,255,255,0.2) 50%, rgba(1,33,105,0.5))" }} />

              <svg
                viewBox="0 0 500 600"
                className="w-full h-auto"
                style={{ maxHeight: "520px" }}
              >
                {/* Realistic UK outline paths */}
                <g fill="#c8cdd6" stroke="white" strokeWidth="1.5" strokeLinejoin="round">
                  {/* England + Wales main body */}
                  <path d="
                    M 195,480 L 188,472 L 175,468 L 168,460 L 162,448 L 158,435
                    L 162,422 L 170,415 L 178,408 L 182,396 L 178,384 L 172,376
                    L 168,366 L 165,352 L 168,340 L 175,330 L 180,320 L 178,308
                    L 172,298 L 165,288 L 160,276 L 162,264 L 168,254 L 178,246
                    L 192,240 L 205,236 L 218,232 L 232,228 L 248,226 L 265,228
                    L 280,232 L 295,238 L 308,246 L 318,256 L 325,268 L 328,280
                    L 326,292 L 320,302 L 315,315 L 318,328 L 325,340 L 332,352
                    L 336,366 L 334,378 L 328,390 L 320,402 L 315,416 L 318,430
                    L 326,442 L 335,452 L 342,460 L 348,468 L 352,478 L 350,488
                    L 342,494 L 330,496 L 316,495 L 302,492 L 288,490 L 272,490
                    L 258,492 L 244,495 L 232,496 L 218,494 L 206,490 L 198,484 Z
                  " />
                  {/* Wales peninsula */}
                  <path d="
                    M 165,352 L 155,345 L 142,340 L 132,335 L 125,328 L 122,318
                    L 125,308 L 132,300 L 140,294 L 150,290 L 160,288 L 165,298
                    L 162,310 L 162,322 L 162,335 L 165,345 Z
                  " />
                  {/* SW England (Cornwall/Devon) */}
                  <path d="
                    M 195,480 L 182,478 L 168,476 L 155,472 L 142,465 L 132,456
                    L 126,445 L 128,434 L 136,426 L 148,420 L 158,418 L 162,428
                    L 162,440 L 162,450 L 168,458 L 175,464 L 184,470 Z
                  " />

                  {/* Scotland main */}
                  <path d="
                    M 192,240 L 185,230 L 178,220 L 175,208 L 175,196 L 178,184
                    L 182,174 L 186,164 L 188,154 L 186,144 L 182,136 L 178,126
                    L 180,116 L 186,108 L 195,102 L 205,98 L 218,96 L 232,97
                    L 245,100 L 256,106 L 264,115 L 268,126 L 265,138 L 258,148
                    L 252,158 L 250,170 L 252,182 L 258,192 L 264,202 L 268,212
                    L 268,224 L 265,234 L 258,240 L 248,244 L 238,244 L 228,242
                    L 218,240 L 208,240 Z
                  " />
                  {/* Scottish West Coast indentations / peninsula */}
                  <path d="
                    M 178,184 L 165,180 L 155,175 L 148,168 L 148,158 L 154,150
                    L 162,146 L 170,148 L 175,156 L 175,166 L 175,176 Z
                  " />
                  {/* Scotland NE */}
                  <path d="
                    M 256,106 L 268,100 L 280,96 L 292,94 L 302,98 L 308,108
                    L 306,120 L 298,128 L 288,132 L 278,128 L 270,120 L 264,112 Z
                  " />

                  {/* Orkney-style top islands */}
                  <ellipse cx="282" cy="68" rx="14" ry="9" />
                  <ellipse cx="300" cy="58" rx="9" ry="6" />
                  <ellipse cx="265" cy="72" rx="7" ry="5" />

                  {/* Shetland analog */}
                  <ellipse cx="318" cy="38" rx="8" ry="12" />

                  {/* Outer Hebrides */}
                  <path d="M 130,98 L 122,106 L 118,118 L 120,130 L 126,136 L 132,132 L 134,120 L 132,108 Z" />
                  <path d="M 122,148 L 115,155 L 114,165 L 118,172 L 124,170 L 126,160 L 124,150 Z" />
                  <ellipse cx="120" cy="185" rx="6" ry="9" />

                  {/* Isle of Man */}
                  <ellipse cx="188" cy="216" rx="8" ry="12" transform="rotate(-15,188,216)" />

                  {/* Anglesey */}
                  <ellipse cx="155" cy="278" rx="12" ry="8" />
                </g>

                {/* Northern Ireland */}
                <path
                  d="M 100,148 L 88,142 L 78,138 L 70,145 L 68,155 L 72,165 L 80,172 L 90,175 L 100,172 L 108,165 L 110,155 Z"
                  fill="#c8cdd6" stroke="white" strokeWidth="1.5"
                />

                {/* City Dots */}
                {cities.map((city) => (
                  <g key={city.name}>
                    {/* Outer ring on hover */}
                    {hovered === city.name && (
                      <circle cx={city.cx} cy={city.cy} r="14" fill="rgba(245,158,11,0.2)" />
                    )}
                    {/* Dot */}
                    <circle
                      cx={city.cx}
                      cy={city.cy}
                      r={hovered === city.name ? 7 : 5}
                      fill={hovered === city.name ? "#f59e0b" : "#1e3a8a"}
                      stroke="white"
                      strokeWidth="2"
                      className="cursor-pointer transition-all duration-200"
                      onMouseEnter={() => setHovered(city.name)}
                      onMouseLeave={() => setHovered(null)}
                      style={{ filter: hovered === city.name ? "drop-shadow(0 0 6px rgba(245,158,11,0.8))" : "none" }}
                    />

                    {/* Tooltip */}
                    {hovered === city.name && (
                      <g>
                        <rect
                          x={city.cx - 50}
                          y={city.cy - 52}
                          width="100"
                          height="42"
                          rx="8"
                          fill="#0D1B3E"
                          opacity="0.95"
                        />
                        <text
                          x={city.cx}
                          y={city.cy - 33}
                          textAnchor="middle"
                          fill="white"
                          fontSize="10"
                          fontWeight="bold"
                          fontFamily="system-ui"
                        >
                          {city.name}
                        </text>
                        <text
                          x={city.cx}
                          y={city.cy - 19}
                          textAnchor="middle"
                          fill="#93c5fd"
                          fontSize="8"
                          fontFamily="system-ui"
                        >
                          {city.region}
                        </text>
                        {/* Arrow */}
                        <polygon
                          points={`${city.cx - 5},${city.cy - 10} ${city.cx + 5},${city.cy - 10} ${city.cx},${city.cy - 4}`}
                          fill="#0D1B3E"
                          opacity="0.95"
                        />
                      </g>
                    )}
                  </g>
                ))}

                {/* Eben HQ marker - Derby */}
                <g>
                  <circle cx={310} cy={295} r="9" fill="#f59e0b" stroke="white" strokeWidth="2.5"
                    style={{ filter: "drop-shadow(0 0 8px rgba(245,158,11,0.7))" }} />
                  <circle cx={310} cy={295} r="4" fill="white" />
                  <rect x={258} y={268} width="100" height="22" rx="5" fill="#f59e0b" opacity="0.95" />
                  <text x={308} y={283} textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="system-ui">
                    EBEN HQ — DERBY
                  </text>
                </g>
              </svg>

              {/* Hovered city info at bottom (mobile-friendly) */}
              <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center space-x-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-indigo-900" />
                  <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400">Delivery Hub</span>
                  <div className="h-2.5 w-2.5 rounded-full bg-accent ml-3" />
                  <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400">Head Office</span>
                </div>
                <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400">
                  Hover a city to explore
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UKMap;
