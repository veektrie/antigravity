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
    <section className="bg-white border-y border-blue-50 py-8 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-12">
          {trustItems.map((item, i) => (
            <div 
              key={i} 
              className="flex items-center space-x-3 text-blue-950/40 whitespace-nowrap"
            >
              <item.icon size={18} className="text-blue-600" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
