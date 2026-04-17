"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, ArrowUp, Package } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NetworkVisual from './NetworkVisual';
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
    <section className="bg-white py-24 md:py-32 w-full max-w-[1920px] mx-auto relative overflow-hidden" id="faq">
      {/* Decorative lighting - simplified for white theme */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#ea580c]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 space-y-16 relative z-10">
        
        {/* Extracted Header to give it room to breathe */}
        <div className="w-full space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 border border-[#1e2b4d]/10 rounded-full bg-[#f8fafc]">
            <div className="h-6 w-6 rounded-full bg-white shadow-sm flex items-center justify-center">
              <Package size={12} className="text-[#ea580c]" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1e2b4d]">Questions & answers</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1e2b4d] leading-[1.1]">
            Your Questions, <span className="text-[#ea580c]">Answered.</span>
          </h2>
        </div>

        <div className="bg-[#f8fafc] border border-[#1e2b4d]/5 p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-16 lg:gap-24 shadow-xl" style={{ borderRadius: '40px' }}>
          
          {/* Left Column: Interactive Map Space */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {/* High-Fidelity Network Dashboard Visual */}
            <NetworkVisual />
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="space-y-0 w-full border-t border-[#1e2b4d]/10">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-[#1e2b4d]/10 overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between py-8 text-left group"
                  >
                    <div className="flex items-start space-x-6 text-[#1e2b4d] font-bold max-w-[90%]">
                      <span className="text-base tracking-widest text-[#ea580c] mt-1 lg:mt-0">0{i+1}.</span>
                      <span className="text-lg md:text-xl tracking-tight leading-snug group-hover:text-[#ea580c] transition-colors">{faq.question}</span>
                    </div>
                    <div className={`shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-colors ${openIndex === i ? "bg-[#ea580c]" : "bg-white border border-[#1e2b4d]/10 group-hover:border-[#ea580c]"}`}>
                      <ChevronDown size={14} className={`transition-transform duration-300 ${openIndex === i ? "text-white rotate-180" : "text-[#1e2b4d]"}`} />
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
                        <div className="pb-10 pl-14 text-[15px] text-[#1e2b4d]/70 font-medium leading-[1.8] max-w-lg">
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
      </div>
    </section>
  );
};

export default FAQ;
