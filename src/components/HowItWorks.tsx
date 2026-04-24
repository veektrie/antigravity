"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Edit3, UserPlus, PackageCheck, ArrowRight, CheckCircle2, Zap, MapPin, ShieldCheck, Crosshair } from "lucide-react";
import Link from "next/link";

const HowItWorks = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      title: "Tell us what you need",
      icon: Edit3,
      desc: "Simply tell us what you're sending and where it needs to go.",
      details: [
        "Pick from our easy services",
        "Set your own priority",
        "Choose pickup & drop-off",
        "See your price instantly"
      ]
    },
    {
      title: "We're on our way",
      icon: Crosshair,
      desc: "We find the best driver for you and get them moving in seconds.",
      details: [
        "Pickup within the hour",
        "Direct chat with your driver",
        "Watch your delivery live",
        "Safe and secure handling"
      ]
    },
    {
      title: "Safe and sound",
      icon: PackageCheck,
      desc: "Your items arrive safely with a professional handover and proof.",
      details: [
        "Digital signature on arrival",
        "Real-time text updates",
        "Photo proof of delivery",
        "Instant confirmation email"
      ]
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white flex justify-center overflow-hidden border-y border-zinc-100">
      <div className="w-full max-w-[1400px] mx-auto space-y-16 md:space-y-20">
        
        {/* Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto px-6">
          <div className="inline-flex px-5 py-2 rounded-full border border-blue-100 bg-blue-50/50">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">3 Simple Steps</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-blue-950 tracking-tighter uppercase leading-none">
            How it <span className="text-blue-600">works.</span>
          </h2>
          <p className="text-blue-900/40 text-lg font-medium leading-relaxed">
            Shipping with Eben is simple. Follow our 3-step process to get your items moving without the headache.
          </p>
        </div>

        {/* Scroll Indicator (Mobile only) */}
        <div className="lg:hidden flex items-center justify-center gap-2 px-6">
           {steps.map((_, i) => (
             <div 
               key={i}
               className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === i ? "w-8 bg-blue-950" : "w-2 bg-blue-100"}`}
             />
           ))}
        </div>

        {/* Dynamic Expansion / Horizontal Scroll Container */}
        <div 
          ref={scrollContainerRef}
          onScroll={(e) => {
            if (window.innerWidth < 1024) {
              const scrollLeft = e.currentTarget.scrollLeft;
              const width = e.currentTarget.offsetWidth;
              const newIndex = Math.round(scrollLeft / (width * 0.85));
              if (newIndex !== activeIndex) setActiveIndex(newIndex);
            }
          }}
          className="flex flex-row overflow-x-auto lg:overflow-visible gap-6 px-6 lg:px-16 items-stretch lg:min-h-[700px] no-scrollbar snap-x snap-mandatory lg:snap-none"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => {
                if (window.innerWidth >= 1024) setActiveIndex(i);
              }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-[3rem] p-8 md:p-12 flex flex-col justify-between overflow-hidden border transition-all duration-700 ease-[0.16, 1, 0.3, 1] cursor-pointer snap-center shrink-0 
                w-[85vw] sm:w-[500px] lg:w-auto
                ${
                activeIndex === i 
                  ? "lg:flex-[3] border-blue-900 bg-blue-950 shadow-2xl shadow-blue-900/30 lg:scale-[1.02] z-10" 
                  : "lg:flex-[1] border-zinc-200 bg-zinc-50 opacity-50 grayscale-[0.5] hover:opacity-100 hover:grayscale-0 lg:scale-[0.98] z-0"
              }`}
            >
              {/* Abstract Background for Active Card */}
              {activeIndex === i && (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15)_0%,transparent_60%)] pointer-events-none" />
              )}

              <div className="space-y-8 relative z-10 w-full">
                <div className="flex items-center gap-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    activeIndex === i ? "bg-blue-600 text-white shadow-xl shadow-blue-600/30 rotate-6" : "bg-white text-blue-400 shadow-sm border border-zinc-200"
                  }`}>
                    <step.icon size={28} />
                  </div>
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-[0.3em] transition-colors ${activeIndex === i ? "text-blue-400" : "text-blue-900/30"}`}>
                      Step 0{i + 1}
                    </span>
                    <h3 className={`text-2xl md:text-3xl font-bold tracking-tight leading-none uppercase mt-1 transition-colors ${
                      activeIndex === i ? "text-white" : "text-blue-950"
                    }`}>
                      {step.title}
                    </h3>
                  </div>
                </div>
                
                <div className={`space-y-8 transition-all duration-700 ${
                  activeIndex === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none lg:block lg:opacity-0"
                }`}>
                  <p className={`text-lg leading-relaxed font-medium max-w-md ${
                    activeIndex === i ? "text-blue-100/70" : "text-blue-900/60"
                  }`}>
                    {step.desc}
                  </p>
                  
                  {/* Detailed Feature List */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {step.details.map((detail, idx) => (
                      <motion.div 
                        key={idx}
                        animate={{ 
                          opacity: activeIndex === i ? 1 : 0,
                          x: activeIndex === i ? 0 : -10
                        }}
                        transition={{ delay: idx * 0.05 }}
                        className={`flex items-start gap-3 text-[10px] font-bold uppercase tracking-widest p-3 rounded-2xl border backdrop-blur-sm ${
                          activeIndex === i ? "bg-white/5 border-white/10 text-white" : "bg-white border-zinc-200 text-blue-950"
                        }`}
                      >
                        <CheckCircle2 size={14} className={activeIndex === i ? "text-blue-400 shrink-0" : "text-blue-600 shrink-0"} />
                        {detail}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Polished B2B UI Mockup Placeholder */}
              <div className={`mt-12 relative h-64 sm:h-80 w-full rounded-[2rem] border overflow-hidden shadow-2xl transition-all duration-700 ${
                activeIndex === i 
                  ? "border-white/10 bg-white/5 shadow-black/50 scale-100 opacity-100" 
                  : "border-zinc-200 bg-white scale-95 opacity-0 hidden lg:block"
              }`}>
                {/* Mockup 1: Command Center Routing */}
                {i === 0 && (
                  <div className="absolute inset-0 p-6 sm:p-10 space-y-6 flex flex-col justify-center">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                    
                    <div className="flex justify-between items-center bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 relative z-10">
                       <span className="text-[10px] font-bold text-blue-200/50 uppercase tracking-[0.2em]">Vehicle Class</span>
                       <span className="text-xs font-bold text-blue-950 bg-blue-400 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(96,165,250,0.5)]">Dedicated LCV</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 relative z-10">
                      <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-3">
                         <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                         <span className="text-xs font-bold text-white uppercase tracking-widest">Cleared</span>
                      </div>
                      <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                         <span className="text-xs font-bold text-white uppercase tracking-widest">ETA</span>
                         <span className="text-xs font-bold text-blue-400">45 MIN</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Mockup 2: Live Tracking Dashboard */}
                {i === 1 && (
                  <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-center gap-8">
                    {/* Abstract Map Line */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                       <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M50 150 C 100 150, 150 50, 200 50 S 300 150, 350 150" stroke="#60A5FA" strokeWidth="4" strokeDasharray="8 8" />
                       </svg>
                    </div>

                    <div className="flex items-center gap-6 relative z-10 bg-white/5 backdrop-blur-md p-5 rounded-3xl border border-white/10">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                           <MapPin size={20} className="text-white" />
                        </div>
                        <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <div className="flex justify-between items-end">
                           <span className="text-[10px] font-bold text-blue-200/50 uppercase tracking-widest">Live Status</span>
                           <span className="text-[10px] font-bold text-blue-400 tracking-widest">78 MPH</span>
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div 
                            animate={{ x: ["-100%", "0%"] }}
                            transition={{ duration: 10, ease: "linear" }}
                            className="w-full h-full bg-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Mockup 3: Secure Digital POD */}
                {i === 2 && (
                  <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-center gap-6">
                    <div className="flex items-center gap-4 bg-emerald-500/10 border border-emerald-500/20 p-5 rounded-2xl">
                      <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                        <ShieldCheck size={24} />
                      </div>
                      <div>
                        <span className="text-lg font-bold text-emerald-400 uppercase tracking-tight">Chain Secured</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="h-14 w-full bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center px-6 justify-between">
                         <span className="text-[10px] font-bold text-blue-200/50 uppercase tracking-widest">Digital Signature</span>
                         <div className="h-6 w-24 bg-white/20 rounded opacity-50 block" style={{ clipPath: 'polygon(10% 40%, 30% 60%, 50% 30%, 70% 80%, 90% 40%, 100% 50%, 100% 100%, 0 100%)' }} />
                      </div>
                      <div className="h-14 w-full bg-blue-600 hover:bg-blue-500 transition-colors rounded-2xl flex items-center justify-center cursor-pointer shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                         <span className="text-[10px] font-bold text-white uppercase tracking-[0.4em]">Download Audit PDF</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center pt-8 px-6">
          <Link href="/contact" className="w-full sm:w-auto px-12 py-6 bg-blue-950 text-white rounded-full font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-blue-900 transition-all shadow-xl shadow-blue-900/20">
            Book your delivery <ArrowRight size={18} />
          </Link>
        </div>

      </div>
      
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
