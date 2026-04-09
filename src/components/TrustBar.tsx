"use client";

import React from "react";
import { ShieldCheck, Truck, Globe, Award } from "lucide-react";
import { motion } from "framer-motion";

const trustItems = [
  { icon: ShieldCheck, text: "Fully Insured" },
  { icon: Truck, text: "Goods in Transit Cover" },
  { icon: Award, text: "Public Liability" },
  { icon: Globe, text: "Nationwide Network" },
];

const TrustBar = () => {
  return (
    <section className="bg-zinc-50 border-b border-border py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
          {trustItems.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-muted whitespace-nowrap"
            >
              <item.icon size={16} className="text-accent" />
              <span className="text-[10px] font-bold uppercase tracking-widest">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
