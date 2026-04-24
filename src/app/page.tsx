"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import FAQ from "@/components/FAQ";
import QuoteForm from "@/components/QuoteForm";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import { BRAND, SERVICES } from "@/lib/constants";

export default function HomePage() {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="flex flex-col min-h-screen">

      {/* 1. Hero Section */}
      <section className="relative w-full bg-white pt-28 md:pt-36 pb-0 flex flex-col items-center overflow-hidden">
        {/* Cinematic Background Accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="text-center z-10 px-4 max-w-4xl mx-auto flex flex-col items-center relative z-20">
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[7rem] font-extrabold tracking-[-0.04em] text-blue-950 leading-[0.9]"
          >
            Every Delivery.<br />
            <span className="text-blue-600">Done Right.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-6 space-y-6 relative z-20"
          >
            <p className="text-lg md:text-2xl text-blue-900/60 font-medium max-w-2xl mx-auto leading-tight tracking-tight">
              Direct, dedicated transport across the UK. <br />
              Reliability built into every mile.
            </p>
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="-mt-16 md:-mt-48 w-full max-w-[1600px] px-4 relative z-0 flex justify-center -mb-10 md:-mb-24"
        >
          <img
            src="/hero-2.png"
            alt="Eben Logistics Fleet"
            className="w-full h-auto max-h-[600px] md:max-h-[850px] object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] lg:scale-110"
            fetchPriority="high"
          />
        </motion.div>

      </section>

      {/* 2. Trust Signals */}
      <TrustBar />

      {/* 3. Services Ecosystem */}
      <section id="services" className="py-24 md:py-32 bg-white flex justify-center overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 space-y-20">
          
          {/* Header Block */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <div className="space-y-6 max-w-3xl">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-blue-950 leading-[1.05] uppercase">
                Professional Logistics <br />
                <span className="text-blue-600">Powering Your Growth</span>
              </h2>
            </div>
            <Link href="/services" className="flex items-center gap-3 text-blue-600 font-bold text-xs uppercase tracking-widest pb-2 border-b-2 border-blue-600 hover:text-blue-800 hover:border-blue-800 transition-all">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start pt-10">
            
            {/* Left Column: Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[600px] rounded-[3rem] overflow-hidden bg-blue-50 border border-blue-100 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image 
                      src={SERVICES[activeService].image} 
                      alt={SERVICES[activeService].title} 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/20 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 p-12 space-y-6">
                      <div className="inline-block px-4 py-1.5 bg-blue-600 text-white rounded-full text-[10px] font-bold uppercase tracking-widest">
                        0{activeService + 1} — Service
                      </div>
                      <h3 className="text-4xl font-bold text-white tracking-tight uppercase leading-none">
                        {SERVICES[activeService].title}
                      </h3>
                      <p className="text-white/60 text-lg leading-relaxed max-w-sm">
                        {SERVICES[activeService].desc}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Decorative accent lines */}
              <div className="absolute -bottom-4 -right-4 w-64 h-64 border-b-2 border-r-2 border-blue-600/20 rounded-[3rem] -z-10" />
            </div>

            {/* Right Column: Interactive List */}
            <div className="lg:col-span-7 flex flex-col divide-y divide-blue-900/10">
              {SERVICES.map((service, i) => (
                <button
                  key={i}
                  onClick={() => setActiveService(i)}
                  className="group py-10 flex items-center justify-between text-left transition-all relative overflow-hidden"
                >
                  <div className="flex items-center gap-8 relative z-10">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border text-sm font-bold transition-all ${
                      activeService === i ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/30" : "bg-white border-blue-900/10 text-blue-900/40 group-hover:border-blue-600 group-hover:text-blue-600"
                    }`}>
                      0{i + 1}
                    </div>
                    <div className="space-y-1">
                      <h4 className={`text-xl md:text-2xl font-bold uppercase tracking-tight transition-all ${
                        activeService === i ? "text-blue-600" : "text-blue-950 group-hover:text-blue-600"
                      }`}>
                        {service.title}
                      </h4>
                      <p className={`text-sm max-w-md transition-all ${
                        activeService === i ? "text-blue-900/60" : "text-blue-900/30 group-hover:text-blue-900/60"
                      }`}>
                        {service.desc}
                      </p>
                    </div>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all relative z-10 ${
                    activeService === i ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-blue-900/10 text-blue-900/20 group-hover:border-blue-600 group-hover:text-blue-600"
                  }`}>
                    <ArrowRight size={18} />
                  </div>
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>
      
      {/* 4. How It Works - Billo Template */}
      <HowItWorks />

      {/* 4. Value Prop ("Why Us") */}
      <WhyChooseUs />

      {/* 5. Social Proof */}
      <Testimonials />

      {/* 6. FAQ */}
      <FAQ />

      {/* 7. Contact / Quote Form - Reverted to Requested Template */}
      <section id="quote-form" className="py-24 md:py-32 bg-white flex justify-center overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-blue-950 leading-[1.05] uppercase">
                  Connect with our <br />
                  <span className="text-blue-600">Logistics</span> <br />
                  experts.
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
            <div className="lg:col-span-7">
              <QuoteForm />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
