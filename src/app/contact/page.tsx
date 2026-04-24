"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import { BRAND } from "@/lib/constants";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. Page Header (Clean Hero) */}
      <section className="relative w-full pt-48 pb-16 md:pt-64 md:pb-24 bg-white flex justify-center">
        <div className="max-w-[1400px] w-full px-6 md:px-12 lg:px-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 text-blue-950">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] uppercase max-w-4xl"
            >
              Contact <br />
              <span className="text-blue-600">The Experts.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-blue-900/40 text-sm md:text-base font-bold uppercase tracking-widest max-w-xs text-right leading-relaxed"
            >
              Get in touch with Eben Logistics for mission-critical delivery strategies and bespoke transport solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Contact Section (Homepage Template) */}
      <section className="py-24 md:py-32 bg-zinc-50/50 flex justify-center overflow-hidden border-y border-blue-50">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-blue-950 leading-[1.05] uppercase">
                  Let's Build <br />
                  <span className="text-blue-600">Your Route.</span>
                </h2>
                <p className="text-blue-900/40 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
                  Our team is standing by to architect your mission-critical delivery strategy. Experience the next generation of logistics infrastructure.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <h4 className="text-[10px] font-bold text-blue-900/30 uppercase tracking-[0.2em]">Global HQ</h4>
                  <p className="text-blue-950 font-bold leading-relaxed text-sm">
                    {BRAND.address}
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-[10px] font-bold text-blue-900/30 uppercase tracking-[0.2em]">Direct Line</h4>
                  <p className="text-blue-950 font-bold text-xl">{BRAND.phone}</p>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
                    <span className="text-[9px] font-bold text-blue-600 uppercase tracking-widest">24/7 Priority Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[3rem] border border-blue-100 shadow-2xl shadow-blue-900/5">
              <QuoteForm />
            </div>

          </div>
        </div>
      </section>

      {/* 3. FAQ Section (Added as requested) */}
      <FAQ />



    </div>
  );
}
