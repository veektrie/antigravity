"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import CitySelect from "@/components/CitySelect";
import ServiceSelect from "@/components/ServiceSelect";
import { 
  ArrowRight, 
  Check, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Package, 
  Truck, 
  Star
} from "lucide-react";
import { motion } from "framer-motion";

// Components
import TrustBar from "@/components/TrustBar";

import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import UKMap from "@/components/UKMap";
import QuoteForm from "@/components/QuoteForm";
import { BRAND, SERVICES } from "@/lib/constants";

export default function HomePage() {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [serviceType, setServiceType] = useState("Same Day");
  const [hoveredService, setHoveredService] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Hero Section */}
      <section
        className="relative w-full h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/hero-truck.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
          {/* Dark overlays */}
          <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to bottom, rgba(5,12,35,0.70) 0%, rgba(5,12,35,0.40) 40%, rgba(5,12,35,0.85) 100%)" }} />

          <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 text-white text-left flex flex-col pt-32 min-h-full justify-end pb-16 md:pb-24 lg:pb-32 mt-auto">

          {/* Main Hero Elements Centered */}
          <div className="relative z-20 flex flex-col items-center justify-center text-center gap-8 mt-12 w-full max-w-5xl mx-auto px-6">
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-[5.5rem] lg:text-[7.5rem] font-bold tracking-tight leading-[1] max-w-4xl text-white drop-shadow-2xl"
            >
              Reliable <br /> Logistics
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/90 text-base md:text-xl font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md"
            >
              Professional courier infrastructure built for speed, reliability, and scale. 
              Eben Logistics delivers across every region of the United Kingdom with absolute precision.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mt-4"
            >
              <Link href="#quote-form" className="px-8 py-4 bg-[#1a56ff] text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-[#0b0c10] transition-all shadow-xl shadow-blue-500/20">
                Book now
              </Link>
              <Link href="#quote-form" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-[#0b0c10] transition-all">
                Get quote
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-[#0b0c10] transition-all">
                Track delivery
              </Link>
            </motion.div>
          </div>

          {/* Quote Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl mt-16 max-w-5xl mx-auto overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-4">
              <div className="px-5 py-6 border-b md:border-b-0 md:border-r border-white/10">
                <CitySelect label="From" value={fromCity} onChange={setFromCity} placeholder="Pick city" />
              </div>
              <div className="px-5 py-6 border-b md:border-b-0 md:border-r border-white/10">
                <CitySelect label="To" value={toCity} onChange={setToCity} placeholder="Pick city" />
              </div>
              <div className="px-5 py-6 border-b md:border-b-0 md:border-r border-white/10">
                <ServiceSelect value={serviceType} onChange={setServiceType} />
              </div>
              <button className="bg-[#1a56ff] text-white font-bold py-6 hover:bg-blue-700 active:scale-95 transition-all text-xs uppercase tracking-widest">
                Calculate Quote
              </button>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 text-center w-full mt-4"
          >
            We respond within 47 minutes · 24/7 support available
          </motion.p>
        </div>
      </section>

      {/* 2. Trust Module */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden">
        {/* Full-width Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/twilight-logistics.png" 
            alt="Logistics Network" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0b0c10]/80 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 text-center lg:text-left">
            <div className="space-y-8 max-w-3xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Why Businesses <br className="hidden md:block" />
                <span className="text-[#1a56ff]">Trust Us</span>
              </h2>
              <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed italic border-l-4 border-[#1a56ff] pl-6 py-2">
                "{BRAND.philosophy}"
              </p>
            </div>
            
            <div className="flex flex-col items-center lg:items-end gap-6">
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/10">
                <div className="h-14 w-14 rounded-full bg-[#1a56ff] text-white flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Phone size={24} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">Call Us Anytime</p>
                  <p className="text-lg font-bold text-white">{BRAND.phone}</p>
                </div>
              </div>
              <Link href="/about" className="px-10 py-5 bg-[#1a56ff] text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-[#0b0c10] transition-all flex items-center gap-2 shadow-xl shadow-blue-500/20">
                <span>Our Story</span>
                <span className="text-lg leading-none -mt-0.5">↗</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {/* Stat 1 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[2.5rem] flex flex-col items-center text-center group hover:bg-[#1a56ff]/10 transition-all duration-500">
              <div className="h-16 w-16 bg-[#1a56ff]/20 rounded-2xl flex items-center justify-center mb-6 text-[#1a56ff] group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-white text-2xl font-bold mb-4">Fully Insured</h3>
              <p className="text-white/60 text-sm leading-relaxed">Comprehensive transit and liability cover for absolute peace of mind.</p>
            </div>
            {/* Stat 2 */}
            <div className="bg-[#1a56ff] p-10 rounded-[2.5rem] flex flex-col items-center text-center shadow-2xl shadow-blue-500/20 transform hover:-translate-y-2 transition-all">
              <div 
                className="text-7xl font-bold leading-none tracking-tighter text-white mb-4"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
              >
                100%
              </div>
              <h3 className="text-white text-2xl font-bold mb-2">Reliability</h3>
              <p className="text-white/80 text-sm leading-relaxed">No excuses, no delays. We deliver on our promise Every. Single. Time.</p>
            </div>
            {/* Stat 3 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[2.5rem] flex flex-col items-center text-center group hover:bg-[#1a56ff]/10 transition-all duration-500">
              <div className="h-16 w-16 bg-[#1a56ff]/20 rounded-2xl flex items-center justify-center mb-6 text-[#1a56ff] group-hover:scale-110 transition-transform">
                <Clock size={32} />
              </div>
              <h3 className="text-white text-2xl font-bold mb-4">24/7 Operations</h3>
              <p className="text-white/60 text-sm leading-relaxed">Our infrastructure never sleeps, ensuring your goods move around the clock.</p>
            </div>
          </div>
        </div>

        {/* Full-width Blue Navigation Ribbon */}
        <div className="w-full bg-[#1a56ff] mt-24 py-6 flex whitespace-nowrap overflow-hidden relative z-10">
          <div className="animate-marquee flex items-center shrink-0">
             {[...Array(8)].map((_, i) => (
                <React.Fragment key={i}>
                  <span className="text-white font-bold uppercase tracking-[0.25em] text-sm mx-10">Regent Street, London</span>
                  <span className="text-white/30 text-xl font-light">•</span>
                  <span className="text-white font-bold uppercase tracking-[0.25em] text-sm mx-10">Nationwide Coverage</span>
                  <span className="text-white/30 text-xl font-light">•</span>
                  <span className="text-white font-bold uppercase tracking-[0.25em] text-sm mx-10">Same-Day Priority</span>
                  <span className="text-white/30 text-xl font-light">•</span>
                </React.Fragment>
             ))}
          </div>
        </div>
      </section>
      {/* 5. Services Ecosystem (Symmetrical Grid) */}
      <section className="py-24 md:py-32 bg-[#0b0c10] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col items-center text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-white/10 border border-white/10 shadow-sm rounded-full">
              <Package size={14} className="text-[#1a56ff]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white">The Services Ecosystem</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl">
              Professional Logistics <br />
              <span className="text-[#1a56ff]">Powering Your Growth</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative bg-[#1c1d22] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-[#1a56ff]/30 transition-all duration-300"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1d22] to-transparent opacity-60" />
                </div>
                <div className="p-10 space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold text-[#1a56ff] uppercase tracking-[0.2em] bg-[#1a56ff]/10 px-3 py-1 rounded-full">0{i+1} Priority</span>
                    <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 group-hover:bg-[#1a56ff] group-hover:text-white transition-all transform group-hover:rotate-45">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#1a56ff] transition-colors">{service.title}</h3>
                  <p className="text-[#9ca3af] text-sm leading-relaxed">{service.desc}</p>
                </div>
                <Link href={service.link} className="absolute inset-0 z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Old HowItWorks Location - Relocated to position 3 */}

      {/* Old Experience Block Location - Relocated to position 2 */}


      {/* 9. Testimonials (Minimalist) */}
      <section className="py-24 md:py-32 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mt-8 mb-8">
        <div className="flex flex-col items-center text-center space-y-6 mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-zinc-50 shadow-sm rounded-full">
            <Star size={14} className="text-[#1a56ff]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#0D1B3E]">Client Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0D1B3E]">
            Excellence in <span className="text-[#1a56ff]">Motion</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {[
            { name: "Robert Jhonson", role: "MD, Retail Focus", text: "Delivered 200 units to our Manchester store in under 4 hours. Absolute game changer." },
            { name: "Marko Daniel", role: "Ops, HealthConnect", text: "Finally found a courier that understands urgency and medical sensitivity. Flawless execution." },
            { name: "Jake Nicholson", role: "Chef, Green Table", text: "The same-day ingredient delivery is flawless. Never missed a dinner service because of them." },
          ].map((quote, i) => (
            <div key={i} className="flex flex-col space-y-8 group">
              <div className="text-[#1a56ff] opacity-20 group-hover:opacity-100 transition-opacity duration-300" style={{ fontSize: "5rem", lineHeight: "0" }}>
                "
              </div>
              <p className="text-xl md:text-2xl font-medium tracking-tight leading-relaxed text-[#111827] mt-8">
                {quote.text}
              </p>
              <div className="pt-8 mt-auto flex items-center space-x-4 border-t border-black/5">
                <div className="h-12 w-12 rounded-full overflow-hidden relative shadow-sm border border-black/5">
                  <Image src={i % 2 === 0 ? "/hero-truck.jpg" : "/svc-contract.jpg"} alt={quote.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-bold text-[#111827]">{quote.name}</p>
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{quote.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials section was here, moving FAQ below it */}
      
      {/* Testimonials already exists above */}

      {/* 13. Contact / Quote Form Section */}
      <section id="quote-form" className="bg-white">
        <QuoteForm />
      </section>

      {/* FAQ moved to bottom, just above footer */}
      <FAQ />

    </div>
  );
}
