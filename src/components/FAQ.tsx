"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-zinc-50 border-y border-border">
      <div className="max-w-3xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter italic uppercase text-[#0D1B3E]">Got <span className="not-italic text-accent">Questions?</span></h2>
          <p className="text-muted text-sm font-medium uppercase tracking-widest leading-loose">
            Everything you need to know about our courier infrastructure.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-[#0D1B3E]">{faq.question}</span>
                {openIndex === i ? <ChevronUp size={18} className="text-accent" /> : <ChevronDown size={18} className="text-muted" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-6 text-xs text-muted leading-relaxed font-medium capitalize italic">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
