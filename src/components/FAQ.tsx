"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, ArrowUp, Package } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "How fast can you collect my shipment?",
    answer: "For same-day delivery requests within our core service areas, we can typically collect your shipment within 45-60 minutes of booking confirmation."
  },
  {
    question: "Are my goods insured during transit?",
    answer: "Yes, all shipments with Eben Logistics are fully insured. We provide Goods in Transit cover and Public Liability insurance as standard for total peace of mind."
  },
  {
    question: "Which areas do you cover?",
    answer: "We operate a nationwide network across the United Kingdom, covering all major cities including London, Manchester, Birmingham, Leeds, and Glasgow."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Our current core focus is on high-priority domestic logistics across the UK. However, we can arrange international shipping through our partner networks for established corporate accounts."
  },
  {
    question: "Can I track my delivery in real-time?",
    answer: "Absolutely. Once your order is dispatched, you'll receive a live tracking link that provides real-time GPS updates and an estimated arrival time."
  }
];

const stats = [
  { metric: "500+", label: "Deliveries Completed", sub: "Since launch" },
  { metric: "20+", label: "UK Cities Covered", sub: "Nationwide Network" },
  { metric: "99%", label: "On-Time Success Rate", sub: "Premium Punctuality" },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full flex flex-col pt-24 bg-white">
      {/* Dynamic Blue Stats Banner from Screenshot 1 */}
      <div className="w-full bg-accent rounded-br-[6rem] lg:rounded-br-[10rem] py-16 px-6 lg:px-24 mb-0 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col text-white">
              <div className="flex items-center space-x-4 mb-2">
                <ArrowUp size={32} strokeWidth={1} className="text-white/80" />
                <span className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">{stat.metric}</span>
              </div>
              <p className="text-white/80 text-[11px] font-bold uppercase tracking-widest mt-4">
                {stat.label} - {stat.sub}
              </p>
              <div className="w-full h-px bg-white/20 mt-6" />
            </div>
          ))}
        </div>
      </div>

      {/* Dark Navy FAQ Section */}
      <section className="bg-[#050C23] py-24 md:py-32 px-6 lg:px-24 -mt-16 pt-32 lg:pt-40 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Map & Title */}
          <div className="w-full lg:w-5/12 flex flex-col space-y-8">
            <div className="inline-flex items-center space-x-2 w-fit">
              <Package size={14} className="text-accent" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white">Questions & answers</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              We <span className="text-accent">Work Worldwide</span> for you Since 1980
            </h2>

            <div className="relative w-full aspect-video mt-12 opacity-40">
              <Image src="/globe.svg" alt="World Map" fill className="object-contain" />
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="w-full lg:w-7/12 flex flex-col">
            <div className="space-y-0 w-full border-t border-white/10">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-white/10 overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between py-8 text-left group"
                  >
                    <div className="flex items-center space-x-6 text-white font-bold">
                      <span className="text-base tracking-widest">0{i+1}.</span>
                      <span className="text-lg md:text-xl tracking-tight group-hover:text-accent transition-colors">{faq.question}</span>
                    </div>
                    {openIndex === i ? <ChevronUp size={24} className="text-accent" /> : <ChevronDown size={24} className="text-white/40 group-hover:text-white transition-colors" />}
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="pb-8 pl-14 text-sm text-white/50 leading-relaxed font-medium max-w-2xl">
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
  );
};

export default FAQ;
