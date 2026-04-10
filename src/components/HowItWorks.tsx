"use client";

import React from "react";
import { Search, MapPin, ClipboardCheck, PackageCheck } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Get a Quote",
    desc: "Fill in your pickup and delivery details to see instant, transparent pricing.",
    icon: Search
  },
  {
    title: "Schedule Pickup",
    desc: "Choose a time slot that works for you. Same-day collection is available.",
    icon: MapPin
  },
  {
    title: "Real-Time Tracking",
    desc: "Follow your shipment with live GPS updates until it reaches its destination.",
    icon: ClipboardCheck
  },
  {
    title: "Safe Delivery",
    desc: "Your shipment arrives securely, and you receive digital proof of delivery.",
    icon: PackageCheck
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-white">
      {/* Subtle radial glow from top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 space-y-24 relative z-10">
        
        {/* Title Block */}
        <div className="text-center space-y-6 flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-white border border-border shadow-sm rounded-full">
            <PackageCheck size={14} className="text-accent" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#0D1B3E]">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-[#0F172A] max-w-3xl leading-[1.1]">
            Let us take the stress out of <br className="hidden md:block" />
            <span className="text-accent">your move.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative mt-24">
          {/* Connecting dotted line passing exactly through the horizontal center of the pill row */}
          {/* We position it around 220px from top, which is roughly center of pills on desktop. Adjust logically. */}
          <div className="hidden lg:block absolute top-[190px] left-[12.5%] right-[12.5%] border-t-[1.5px] border-dotted border-[#3B82F6] opacity-50 z-0" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              {/* Icon Top */}
              <div className="h-24 w-24 rounded-3xl bg-zinc-50 border border-black/5 shadow-sm flex items-center justify-center mb-10 text-accent group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                <step.icon size={40} strokeWidth={1.5} />
              </div>
              
              {/* Title */}
              <h3 className="text-[22px] font-bold text-[#0F172A] mb-8 lg:h-14 flex items-center justify-center">{step.title}</h3>
              
              {/* Step Pill */}
              <div className="bg-[#F0F9FF] border border-[#3B82F6]/20 px-6 py-2 rounded-full text-accent text-xs font-bold tracking-widest uppercase relative z-10 mb-8 shadow-sm">
                Step 0{i+1}
              </div>

              {/* Description */}
              <p className="text-[15px] text-[#64748B] leading-relaxed font-medium px-4 max-w-[280px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
