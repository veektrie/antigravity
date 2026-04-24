"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Edit3, UserPlus, PackageCheck, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

const HowItWorks = () => {
  // Default to the first card (index 0)
  const [activeIndex, setActiveIndex] = useState<number>(0);

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
      ],
      bg: "bg-blue-50/50"
    },
    {
      title: "We're on our way",
      icon: UserPlus,
      desc: "We find the best driver for you and get them moving in seconds.",
      details: [
        "Pickup within the hour",
        "Direct chat with your driver",
        "Watch your delivery live",
        "Safe and secure handling"
      ],
      bg: "bg-blue-50/50"
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
      ],
      bg: "bg-blue-50/50"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white flex justify-center overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 space-y-20">
        
        {/* Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full"
          >
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-900">Simple Process</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-blue-950 tracking-tighter uppercase leading-none">
            How it works
          </h2>
          <p className="text-blue-900/40 text-lg font-medium leading-relaxed">
            Shipping with Eben is simple. Follow our 3-step process to get your items moving.
          </p>
        </div>

        {/* Dynamic Expansion Flex Container */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch min-h-[650px]">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setActiveIndex(i)}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-[3rem] p-10 flex flex-col justify-between overflow-hidden border-2 transition-all duration-700 ease-[0.16, 1, 0.3, 1] cursor-pointer ${
                activeIndex === i 
                  ? "lg:flex-[3] border-blue-600 bg-white shadow-2xl shadow-blue-900/15 scale-[1.02] z-10" 
                  : "lg:flex-[1] border-blue-100/20 bg-blue-50/50 opacity-60 grayscale-[0.8] scale-[0.98] z-0"
              }`}
            >
              {/* Active Highlight Bar */}
              {activeIndex === i && (
                <motion.div 
                  layoutId="activeBar"
                  className="absolute top-0 left-0 right-0 h-1.5 bg-blue-600"
                />
              )}

              <div className="space-y-8 relative z-10 min-w-[320px]">
                <div className="flex items-center gap-6">
                  <div className={`w-14 h-14 rounded-[1.5rem] flex items-center justify-center transition-all duration-500 ${
                    activeIndex === i ? "bg-blue-600 text-white shadow-xl shadow-blue-600/30 rotate-6" : "bg-white text-blue-950 shadow-sm"
                  }`}>
                    <step.icon size={28} />
                  </div>
                  <h3 className={`text-2xl md:text-3xl font-bold text-blue-950 tracking-tight leading-none uppercase transition-all ${
                    activeIndex === i ? "scale-105 origin-left" : "text-blue-900/40"
                  }`}>
                    {step.title}
                  </h3>
                </div>
                
                <div className={`space-y-8 transition-all duration-500 ${
                  activeIndex === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none lg:block lg:opacity-20"
                }`}>
                  <p className={`text-lg leading-relaxed font-medium max-w-md ${
                    activeIndex === i ? "text-blue-900/60" : "text-blue-900/20"
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
                        className="flex items-start gap-3 text-[10px] font-bold text-blue-950 uppercase tracking-widest bg-white/50 backdrop-blur-sm p-3 rounded-2xl border border-blue-100/50 shadow-sm"
                      >
                        <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                        {detail}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* UI Mockup Placeholder */}
              <div className={`mt-12 relative h-80 w-full bg-white rounded-[2rem] border-2 shadow-2xl transition-all duration-700 ${
                activeIndex === i 
                  ? "border-blue-600/10 shadow-blue-900/10 scale-100 opacity-100" 
                  : "border-transparent scale-95 opacity-20"
              }`}>
                {/* Simulated UI elements for "Define your needs" */}
                {i === 0 && (
                  <div className="p-10 space-y-6">
                    <div className="flex justify-between items-center bg-blue-50/50 p-5 rounded-2xl border border-blue-100">
                       <span className="text-xs font-bold text-blue-900/30 uppercase tracking-[0.2em]">Service Type</span>
                       <span className="text-sm font-bold text-blue-950 bg-white px-4 py-2 rounded-full shadow-sm">Urgent Delivery</span>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100">
                         <span className="block text-[10px] font-bold text-blue-900/30 uppercase mb-2">Speed</span>
                         <span className="text-xs font-bold text-blue-600">Right Now</span>
                      </div>
                      <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100">
                         <span className="block text-[10px] font-bold text-blue-900/30 uppercase mb-2">Safety</span>
                         <span className="text-xs font-bold text-blue-950">Secure</span>
                      </div>
                    </div>
                    <div className="bg-blue-950 p-5 rounded-2xl shadow-xl shadow-blue-950/20 flex justify-between items-center">
                       <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Your Price</span>
                       <span className="text-white font-bold tracking-tighter text-lg">£45.00</span>
                    </div>
                  </div>
                )}
                {/* Simulated UI elements for "Connect" */}
                {i === 1 && (
                  <div className="p-10 space-y-8">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-full bg-blue-100 border-4 border-white shadow-lg flex items-center justify-center">
                         <UserPlus size={24} className="text-blue-600" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <div className="h-4 w-1/2 bg-blue-100 rounded-full" />
                        <div className="h-3 w-1/3 bg-blue-50 rounded-full" />
                      </div>
                      <div className="px-4 py-2 bg-blue-600 text-white rounded-full text-[10px] font-bold uppercase">Moving</div>
                    </div>
                    <div className="h-[1px] w-full bg-blue-100" />
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="h-3 w-32 bg-blue-50 rounded-full" />
                        <div className="h-3 w-12 bg-blue-50 rounded-full" />
                      </div>
                      <div className="w-full h-3 bg-blue-50 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                          className="w-1/2 h-full bg-blue-600"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center pt-4">
                       <div className="relative">
                          <div className="absolute inset-0 bg-blue-600/20 blur-xl rounded-full scale-150 animate-pulse" />
                          <div className="w-12 h-12 rounded-full bg-blue-600 shadow-2xl shadow-blue-600/50 flex items-center justify-center text-white">
                             <Zap size={20} className="fill-current" />
                          </div>
                       </div>
                    </div>
                  </div>
                )}
                {/* Simulated UI elements for "Complete" */}
                {i === 2 && (
                  <div className="p-10 flex flex-col md:flex-row gap-10">
                    <div className="w-full md:w-1/3 h-48 md:h-full bg-blue-50 rounded-[2rem] relative overflow-hidden border border-blue-100 group-hover:bg-blue-100 transition-colors">
                       <div className="absolute inset-0 flex items-center justify-center">
                         <PackageCheck size={80} className="text-blue-200" />
                       </div>
                    </div>
                    <div className="flex-1 space-y-8">
                       <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center text-white shadow-xl shadow-green-500/20">
                           <PackageCheck size={24} />
                         </div>
                         <div>
                            <span className="block text-[10px] font-bold text-blue-900/30 uppercase tracking-[0.2em]">All Done</span>
                            <span className="text-lg font-bold text-blue-950">Delivered Safely</span>
                         </div>
                       </div>
                       <div className="space-y-4">
                          <div className="h-14 w-full bg-blue-50 rounded-2xl border border-blue-100 flex items-center px-6 justify-between">
                             <div className="h-3 w-40 bg-blue-200 rounded-full" />
                             <ArrowRight size={18} className="text-blue-400" />
                          </div>
                          <motion.div 
                            whileHover={{ scale: 1.02 }}
                            className="h-16 w-full bg-blue-950 rounded-2xl shadow-2xl shadow-blue-950/20 flex items-center justify-center cursor-pointer group/pod"
                          >
                             <span className="text-xs font-bold text-white uppercase tracking-[0.4em] group-hover/pod:tracking-[0.5em] transition-all">Get Receipt</span>
                          </motion.div>
                       </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center pt-8">
          <Link href="/contact" className="px-12 py-6 bg-blue-600 text-white rounded-full font-bold text-sm uppercase tracking-widest flex items-center gap-4 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
            Book now <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
