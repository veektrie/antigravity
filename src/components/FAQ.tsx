"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, ArrowUp, Package } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import InteractiveMap from './InteractiveMap';
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const stats = [
    { metric: "14k", label: "Deliveries", sub: "Monthly" },
    { metric: "45min", label: "Collection", sub: "Average" },
    { metric: "99.9%", label: "Success", sub: "Rate" }
  ];

  const faqs = [
    {
      question: "How fast can you collect a same-day shipment?",
      answer: "Our network allows us to dispatch a vehicle to most UK mainland locations within 45 to 60 minutes of your booking confirmation. Collection times may vary slightly based on remote locations or severe traffic conditions."
    },
    {
      question: "Do you offer dedicated vehicles for sensitive goods?",
      answer: "Yes. We provide dedicated A-to-B courier services meaning your goods are the only items on board. This is highly recommended for medical supplies, legal documents, and fragile or high-value items."
    },
    {
      question: "What is the maximum weight you can transport?",
      answer: "We operate a diverse fleet ranging from small vans (up to 400kg) to articulated lorries (up to 28,000kg). Regardless of your shipment size, we have the appropriate vehicle for the job."
    },
    {
      question: "Is cross-border shipping available to the EU?",
      answer: "Absolutely. We manage European freight and direct dedicated transport into the EU. We also assist with all necessary customs documentation to ensure smooth border transitions."
    }
  ];

  return (
    <div className="w-full flex flex-col py-16 bg-[#f9f9fb] px-4 md:px-8 lg:px-16 max-w-[1920px] mx-auto overflow-hidden">
      
      {/* Singular Rounded Dark Container mimicking Delivar Template */}
      <div className="w-full max-w-[1400px] mx-auto bg-[#0b0c10] rounded-[2.5rem] lg:rounded-[3rem] flex flex-col shadow-[0_20px_60px_rgba(0,0,0,0.08)] relative z-10 overflow-hidden">
        
        {/* Dynamic Blue Stats Ribbon */}
        <div className="w-full bg-[#1a56ff] py-16 px-8 lg:px-20 relative z-20 shadow-lg">
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
        <section className="py-20 lg:py-32 px-6 lg:px-20 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 w-full items-start">
            
            {/* Left Column: Worldwide Network & Map */}
            <div className="w-full lg:w-1/2 flex flex-col space-y-10">
              <div className="inline-flex items-center space-x-3 w-fit">
                <div className="h-6 w-6 bg-[#1a56ff]/20 flex items-center justify-center rounded-md">
                  <Package size={12} className="text-[#1a56ff]" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#f9f9fb]">Questions & answers</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                We <span className="text-[#1a56ff]">Work Nationwide</span> for you since 1980
              </h2>

              {/* Visually Appealing Interactive TopoJSON Map */}
              <InteractiveMap />
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
