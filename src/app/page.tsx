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
      <section className="relative w-full min-h-screen bg-white flex flex-col items-center justify-start pt-32 md:pt-48 overflow-hidden">
        {/* Cinematic Background Accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center space-y-12">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-9xl lg:text-[10rem] font-bold tracking-[-0.06em] text-blue-950 leading-[0.85]"
          >
            Every Delivery.<br />
            <span className="text-blue-600">Done Right.</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-10"
          >
            <p className="text-xl md:text-3xl text-blue-900/40 font-medium max-w-2xl mx-auto leading-tight tracking-tight">
              Direct, dedicated transport across the UK. <br />
              Reliability built into every mile.
            </p>

            <Link href="#quote-form" className="inline-flex px-12 py-6 bg-blue-600 text-white rounded-full font-bold text-sm uppercase tracking-widest items-center gap-4 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
              Get quote
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* Overlapping Grounded Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.05, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[1400px] mt-12 md:mt-20 px-6 h-[400px] md:h-[600px] lg:h-[700px]"
        >
          <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border border-blue-100 group">
            <Image 
              src="/svc-same-day.jpg" 
              alt="Professional Logistics Delivery Car" 
              fill
              quality={100}
              priority
              className="object-cover object-[15%_center] md:object-[10%_center] transition-transform duration-1000 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent" />
          </div>
          
          {/* Decorative tag on image */}
          <div className="absolute bottom-12 left-12 md:bottom-16 md:left-20">
            <div className="px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-xl flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-900">Delivery in Progress</span>
            </div>
          </div>
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
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-900">The Services Ecosystem</span>
              </div>
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
                <div className="inline-flex items-center space-x-2 px-4 py-2 border border-blue-900/10 rounded-full">
                  <div className="w-2 h-2 rounded-full border border-blue-600 flex items-center justify-center">
                    <div className="w-1 h-1 bg-blue-600 rounded-full" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-900">Request a quote</span>
                </div>
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
