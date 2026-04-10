"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, ArrowUp, Package } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { question: "How fast can you collect my shipment?", answer: "For same-day delivery requests within our core service areas, we can typically collect your shipment within 45-60 minutes of booking confirmation." },
  { question: "Are my goods insured during transit?", answer: "Yes, all shipments with Eben Logistics are fully insured. We provide Goods in Transit cover and Public Liability insurance as standard for total peace of mind." },
  { question: "Which areas do you cover?", answer: "We operate a nationwide network across the United Kingdom, covering all major cities including London, Manchester, Birmingham, Leeds, and Glasgow." },
  { question: "Do you offer international shipping?", answer: "Our current core focus is on high-priority domestic logistics across the UK. However, we can arrange international shipping through our partner networks for established corporate accounts." },
  { question: "Can I track my delivery in real-time?", answer: "Absolutely. Once your order is dispatched, you'll receive a live tracking link that provides real-time GPS updates and an estimated arrival time." }
];

const stats = [
  { metric: "500+", label: "Deliveries Completed", sub: "Since launch" },
  { metric: "20+", label: "UK Cities Covered", sub: "Nationwide Network" },
  { metric: "99%", label: "On-Time Success Rate", sub: "Premium Punctuality" },
];

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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="w-full flex flex-col py-16 bg-[#f9f9fb] px-4 md:px-12 lg:px-16 max-w-[1920px] mx-auto overflow-hidden">
      
      {/* Singular Rounded Dark Container mimicking Delivar Template */}
      <div className="w-full max-w-[1400px] mx-auto bg-[#0b0c10] rounded-[2.5rem] lg:rounded-[3rem] flex flex-col shadow-[0_20px_60px_rgba(0,0,0,0.08)] relative z-10 border border-white/5">
        
        {/* Dynamic Blue Stats Ribbon */}
        <div className="w-full bg-[#1a56ff] py-16 px-8 lg:px-20 relative z-20 rounded-t-[2.5rem] lg:rounded-t-[3rem] shadow-lg">
          {/* Subtle noise/texture overlay for premium look */}
          <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(circle at center, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col text-white">
                <div className="flex items-center space-x-3 mb-2">
                  <ArrowUp size={28} strokeWidth={2} className="text-white/90" />
                  <span className="text-5xl lg:text-7xl font-bold tracking-tighter leading-none">{stat.metric}</span>
                </div>
                <p className="text-white/90 text-xs font-bold uppercase tracking-widest mt-4">
                  {stat.label} - <span className="text-white/60">{stat.sub}</span>
                </p>
                <div className="w-full h-[1px] bg-white/20 mt-6" />
              </div>
            ))}
          </div>
        </div>

        {/* 50/50 Split Section: Map vs FAQ */}
        <section className="py-20 lg:py-32 px-8 lg:px-20 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 w-full">
            
            {/* Left Column: Worldwide Network & Map */}
            <div className="w-full lg:w-1/2 flex flex-col space-y-10">
              <div className="inline-flex items-center space-x-3 w-fit">
                <div className="h-6 w-6 bg-[#1a56ff]/20 flex items-center justify-center rounded-md">
                  <Package size={12} className="text-[#1a56ff]" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">Questions & answers</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                We <span className="text-[#1a56ff]">Work Nationwide</span> for you since 1980
              </h2>

              {/* Extracted UK Map Render logic configured for Dark Theme */}
              <div className="relative w-full aspect-square md:aspect-video lg:aspect-square mt-8 flex items-center justify-center overflow-visible">
                {/* Ambient map glow */}
                <div className="absolute inset-0 bg-[#1a56ff]/5 blur-[100px] rounded-full pointer-events-none" />

                <svg viewBox="0 0 500 600" className="w-full h-full max-h-[500px] overflow-visible relative z-10">
                  <g fill="#1f2937" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" strokeLinejoin="round">
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
                    <path d="M 165,352 L 155,345 L 142,340 L 132,335 L 125,328 L 122,318 L 125,308 L 132,300 L 140,294 L 150,290 L 160,288 L 165,298 L 162,310 L 162,322 L 162,335 L 165,345 Z" />
                    <path d="M 195,480 L 182,478 L 168,476 L 155,472 L 142,465 L 132,456 L 126,445 L 128,434 L 136,426 L 148,420 L 158,418 L 162,428 L 162,440 L 162,450 L 168,458 L 175,464 L 184,470 Z" />
                    <path d="M 192,240 L 185,230 L 178,220 L 175,208 L 175,196 L 178,184 L 182,174 L 186,164 L 188,154 L 186,144 L 182,136 L 178,126 L 180,116 L 186,108 L 195,102 L 205,98 L 218,96 L 232,97 L 245,100 L 256,106 L 264,115 L 268,126 L 265,138 L 258,148 L 252,158 L 250,170 L 252,182 L 258,192 L 264,202 L 268,212 L 268,224 L 265,234 L 258,240 L 248,244 L 238,244 L 228,242 L 218,240 L 208,240 Z" />
                    <ellipse cx="282" cy="68" rx="14" ry="9" />
                    <ellipse cx="300" cy="58" rx="9" ry="6" />
                    <ellipse cx="265" cy="72" rx="7" ry="5" />
                    <ellipse cx="318" cy="38" rx="8" ry="12" />
                  </g>
                  <path d="M 100,148 L 88,142 L 78,138 L 70,145 L 68,155 L 72,165 L 80,172 L 90,175 L 100,172 L 108,165 L 110,155 Z" fill="#1f2937" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />

                  {/* Golden dashed connection network lines */}
                  <path d="M 348 430 Q 300 350 265 245" fill="none" stroke="#facc15" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                  <path d="M 265 245 Q 240 180 248 120" fill="none" stroke="#facc15" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                  <path d="M 215 105 Q 180 120 140 155" fill="none" stroke="#facc15" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />

                  {/* Interactive City Dots */}
                  {cities.map((city) => (
                    <g key={city.name}>
                      <circle
                        cx={city.cx}
                        cy={city.cy}
                        r={hovered === city.name ? 8 : 5}
                        fill="#1a56ff"
                        stroke={hovered === city.name ? "rgba(26,86,255,0.3)" : "none"}
                        strokeWidth={hovered === city.name ? 6 : 0}
                        className="cursor-pointer transition-all duration-300"
                        onMouseEnter={() => setHovered(city.name)}
                        onMouseLeave={() => setHovered(null)}
                      />
                      {hovered === city.name && (
                        <g className="animate-in fade-in zoom-in duration-200">
                          <rect x={city.cx - 50} y={city.cy - 48} width="100" height="36" rx="6" fill="#ffffff" />
                          <text x={city.cx} y={city.cy - 33} textAnchor="middle" fill="#0b0c10" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                            {city.name}
                          </text>
                          <text x={city.cx} y={city.cy - 20} textAnchor="middle" fill="#1a56ff" fontSize="9" fontWeight="bold" fontFamily="sans-serif">
                            {city.region}
                          </text>
                          <polygon points={`${city.cx - 5},${city.cy - 12} ${city.cx + 5},${city.cy - 12} ${city.cx},${city.cy - 6}`} fill="#ffffff" />
                        </g>
                      )}
                    </g>
                  ))}
                </svg>
              </div>
            </div>

            {/* Right Column: FAQ Accordion */}
            <div className="w-full lg:w-1/2 flex flex-col pt-8">
              <div className="space-y-0 w-full border-t border-white/10">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-white/10 overflow-hidden">
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="w-full flex items-center justify-between py-8 text-left group"
                    >
                      <div className="flex items-start space-x-6 text-white font-bold max-w-[90%]">
                        <span className="text-base tracking-widest text-[#1a56ff] mt-1 lg:mt-0">0{i+1}.</span>
                        <span className="text-lg md:text-xl tracking-tight leading-snug group-hover:text-[#1a56ff] transition-colors">{faq.question}</span>
                      </div>
                      <div className={`shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-colors ${openIndex === i ? "bg-[#1a56ff]" : "bg-white/5 group-hover:bg-white/10"}`}>
                        <ChevronDown size={14} className={`text-white transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
                      </div>
                    </button>
                    <AnimatePresence>
                      {openIndex === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="pb-10 pl-14 text-[15px] text-zinc-400 font-medium leading-[1.8] max-w-lg">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQ;
