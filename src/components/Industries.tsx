"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const INDUSTRIES_DELIVAR = [
  { id: "01", name: "Commercial Construction", category: "INFRASTRUCTURE", image: "/hero-truck.jpg" },
  { id: "02", name: "Medical & Healthcare", category: "CRITICAL CARE", image: "/svc-contract.jpg" },
  { id: "03", name: "Retail & E-Commerce", category: "SUPPLY CHAIN", image: "/hero-truck.jpg" },
  { id: "04", name: "Event Management", category: "TIME SENSITIVE", image: "/svc-contract.jpg" },
  { id: "05", name: "Aviation Parts", category: "AOG SUPPORT", image: "/hero-truck.jpg" },
  { id: "06", name: "Manufacturing", category: "INDUSTRIAL", image: "/svc-contract.jpg" }
];

const Industries = () => {
  return (
    <section className="bg-[#f9f9fb] py-24 md:py-32 w-full max-w-[1920px] mx-auto overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 space-y-16">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="space-y-6 max-w-3xl">
            <div className="inline-flex items-center space-x-2 w-fit">
              <span className="h-2 w-2 bg-[#1a56ff] rounded-full"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0b0c10]/50">Every Sector</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight text-[#0b0c10] leading-[1.05]">
              We Serve Businesses <br className="hidden md:block" />
              <span className="text-[#1a56ff]">Across Every Industry</span>
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-3 px-8 py-4 border-2 border-[#0b0c10]/10 rounded-full font-bold text-xs uppercase tracking-widest text-[#0b0c10] hover:border-[#0b0c10] transition-colors">
            View All Sectors <ArrowRight size={16} />
          </button>
        </div>

        {/* 3-Column Delivar Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {INDUSTRIES_DELIVAR.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative h-[450px] lg:h-[500px] w-full bg-[#0b0c10] overflow-hidden"
              style={{
                borderRadius: '40px',
                clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)'
              }}
            >
              {/* Background Image Image scaling on hover */}
              <div className="absolute inset-0 w-full h-full">
                <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-100" />
              </div>

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/80 to-transparent" />

              {/* Content Structure */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Category Pill */}
                <div className="mb-4 inline-flex items-center space-x-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1a56ff] bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/5">
                    {item.id} {item.category}
                  </span>
                </div>

                <div className="flex items-end justify-between w-full">
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug w-[80%] transition-transform duration-500 group-hover:-translate-y-2">
                    {item.name}
                  </h3>
                  
                  {/* Delivar standard circular arrow button */}
                  <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 -rotate-45 group-hover:rotate-0 group-hover:bg-[#1a56ff] group-hover:border-[#1a56ff] transition-all duration-300">
                    <ArrowRight size={20} className="text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex md:hidden justify-center mt-8 cursor-pointer">
          <button className="flex items-center gap-3 px-8 py-4 border-2 border-[#0b0c10]/10 rounded-full font-bold text-xs uppercase tracking-widest text-[#0b0c10] hover:border-[#0b0c10] transition-colors w-full justify-center">
            View All Sectors <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Industries;
