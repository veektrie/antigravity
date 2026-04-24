"use client";

import React, { useState } from "react";
import { ChevronDown, Package, ShieldCheck, Clock, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How fast is collection?",
      answer: "We usually collect within 45 to 60 minutes of your booking. This depends on your location and traffic."
    },
    {
      question: "Do you offer dedicated vehicles?",
      answer: "Yes. Your goods will be the only items on the vehicle. This is the safest way to transport sensitive or valuable items."
    },
    {
      question: "What is the maximum weight?",
      answer: "We have vehicles for every size, from small vans (400kg) to large trucks (28,000kg)."
    },
    {
      question: "Do you deliver to Europe?",
      answer: "Yes. We provide direct transport into the EU and handle all the customs paperwork for you."
    }
  ];

  const stats = [
    { label: "Collection Speed", value: "45-60m", icon: Clock },
    { label: "Fleet Vehicles", value: "5,000+", icon: Package },
    { label: "On-time rate", value: "99.9%", icon: ShieldCheck },
    { label: "Years experience", value: "15+", icon: Award }
  ];

  return (
    <section className="bg-white py-24 md:py-32 w-full max-w-[1920px] mx-auto relative overflow-hidden" id="faq">
      {/* Decorative lighting */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 space-y-16 relative z-10">
        
        {/* Header */}
        <div className="w-full space-y-6 text-center lg:text-left">
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-blue-950 leading-[1.1]">
            Common <span className="text-blue-600">Questions.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Stats Section - Restored */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-blue-50/50 border border-blue-100 p-8 rounded-[2rem] space-y-4 hover:bg-blue-50 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                  <stat.icon size={20} />
                </div>
                <div>
                  <p className="text-2xl font-black text-blue-950 tracking-tighter">{stat.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-blue-900/40">{stat.label}</p>
                </div>
              </motion.div>
            ))}
            
            {/* CTA Box */}
            <div className="col-span-2 bg-blue-950 rounded-[2rem] p-8 mt-4 space-y-4">
              <p className="text-white font-bold tracking-tight">Still have questions?</p>
              <p className="text-blue-200/40 text-sm">Our support team is available 24/7 to assist with your logistical needs.</p>
              <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-blue-500 transition-all">
                Contact Support
              </button>
            </div>
          </div>

          {/* FAQ Accordion - Column 8 */}
          <div className="lg:col-span-8 bg-white border border-blue-100 p-8 md:p-12 lg:p-16 flex flex-col items-center shadow-xl" style={{ borderRadius: '40px' }}>
            <div className="w-full max-w-4xl flex flex-col justify-center">
              <div className="space-y-0 w-full border-t border-blue-900/10">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-blue-900/10 overflow-hidden">
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="w-full flex items-center justify-between py-8 text-left group"
                    >
                      <div className="flex items-start space-x-6 text-blue-950 font-bold max-w-[90%]">
                        <span className="text-base tracking-widest text-blue-600 mt-1 lg:mt-0">0{i+1}.</span>
                        <span className="text-lg md:text-xl tracking-tight leading-snug group-hover:text-blue-600 transition-colors">{faq.question}</span>
                      </div>
                      <div className={`shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-colors ${openIndex === i ? "bg-blue-600" : "bg-white border border-blue-900/10 group-hover:border-blue-600"}`}>
                        <ChevronDown size={14} className={`transition-transform duration-300 ${openIndex === i ? "text-white rotate-180" : "text-blue-950"}`} />
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
                          <div className="pb-10 pl-14 text-[15px] text-blue-900/70 font-medium leading-[1.8] max-w-2xl">
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
      </div>
    </section>
  );
};

export default FAQ;
