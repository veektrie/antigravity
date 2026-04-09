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
    <section className="section-padding bg-zinc-50 border-y border-border">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter italic uppercase text-[#0D1B3E]">Simple, Efficient <br className="hidden md:block" />
          <span className="not-italic text-accent">ProcessMap</span></h2>
          <p className="text-muted text-sm font-medium uppercase tracking-widest leading-loose">
            A frictionless workflow designed to take the stress out of logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[2.25rem] left-[10%] right-[10%] h-[1px] bg-border z-0" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center space-y-6"
            >
              <div className="h-12 w-12 bg-white border border-border rounded-full flex items-center justify-center shadow-sm group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all ring-8 ring-zinc-50">
                <step.icon size={20} className="text-accent group-hover:text-white" />
              </div>
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">Step 0{i+1}</span>
                <h3 className="text-sm font-bold uppercase tracking-widest">{step.title}</h3>
                <p className="text-xs text-muted leading-relaxed font-medium">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
