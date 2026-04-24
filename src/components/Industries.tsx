"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const INDUSTRIES = [
  { id: "01", name: "Commercial Construction", category: "INFRASTRUCTURE", image: "/hero-truck.jpeg" },
  { id: "02", name: "Medical & Healthcare", category: "CRITICAL CARE", image: "/hero-truck.jpeg" },
  { id: "03", name: "Retail & E-Commerce", category: "SUPPLY CHAIN", image: "/hero-truck.jpeg" },
  { id: "04", name: "Event Management", category: "TIME SENSITIVE", image: "/hero-truck.jpeg" },
  { id: "05", name: "Aviation Parts", category: "AOG SUPPORT", image: "/hero-truck.jpeg" },
  { id: "06", name: "Manufacturing", category: "INDUSTRIAL", image: "/hero-truck.jpeg" }
];

const Industries = () => {
  return (
    <section className="bg-blue-50/30 py-24 md:py-32 w-full max-w-[1920px] mx-auto overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 space-y-16">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="space-y-6 max-w-3xl text-center md:text-left">
            <div className="inline-flex items-center space-x-2 w-fit mx-auto md:mx-0">
              <span className="h-2 w-2 bg-blue-600 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-900/40">Every Sector</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-blue-950 leading-[1.05]">
              We Serve Businesses <br className="hidden md:block" />
              <span className="text-blue-600">Across Every Industry</span>
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-3 px-8 py-4 border-2 border-blue-900/10 rounded-full font-bold text-xs uppercase tracking-widest text-blue-900 hover:border-blue-600 transition-colors">
            View All Sectors <ArrowRight size={16} />
          </button>
        </div>

        {/* 3-Column Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative h-[450px] lg:h-[500px] w-full bg-blue-950 overflow-hidden rounded-[2.5rem] shadow-2xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-60 group-hover:opacity-80" />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-blue-950 via-blue-950/80 to-transparent" />

              {/* Content Structure */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-4 inline-flex items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/5">
                    {item.id} {item.category}
                  </span>
                </div>

                <div className="flex items-end justify-between w-full">
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug w-[80%] transition-transform duration-500 group-hover:-translate-y-2">
                    {item.name}
                  </h3>
                  
                  <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 -rotate-45 group-hover:rotate-0 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                    <ArrowRight size={20} className="text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
