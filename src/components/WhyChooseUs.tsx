"use client";

import React from "react";
import { ShieldCheck, Globe, Zap, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Reliable",
    desc: "We deliver on time, every time. You can count on our professional drivers.",
    icon: Globe
  },
  {
    title: "Responsive",
    desc: "We respond to your requests immediately with 24/7 support.",
    icon: Zap
  },
  {
    title: "Nationwide",
    desc: "We cover all of the UK with a large, modern fleet of vehicles.",
    icon: MapPin
  },
  {
    title: "Fully Insured",
    desc: "Your goods are protected with comprehensive insurance on every trip.",
    icon: ShieldCheck
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 md:py-32 bg-white flex justify-center">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Left Content */}
          <div className="lg:w-1/3 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex px-5 py-2 border border-blue-100 rounded-full text-[11px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50"
            >
              Why Eben Logistics
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 tracking-tight leading-[1.1]">
                Simple, Reliable <br />
                Logistics
              </h2>
              <p className="text-blue-900/40 text-lg md:text-xl font-medium leading-relaxed">
                We simplify your supply chain with direct communication and professional service across the UK.
              </p>
            </motion.div>
          </div>

          {/* Right Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-blue-50/30 p-10 rounded-[2.5rem] space-y-6 hover:bg-blue-50 transition-colors border border-blue-100/50"
              >
                <div className="w-12 h-12 flex items-center justify-center text-blue-600">
                  <feature.icon size={32} strokeWidth={1.5} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-blue-900 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-blue-900/60 text-sm leading-relaxed font-medium">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
