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
      
      <section
        className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#f8fafc]"
      >
          {/* Background Image — grayscale right side */}
          <div className="absolute inset-0 z-0">
             <Image 
                src="/hero-truck.jpg"
                fill
                sizes="100vw"
                className="object-cover opacity-15 grayscale"
                alt="Logistics background"
                priority
             />
          </div>
          {/* Left-dominant gradient */}
          <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(115deg, rgba(248,250,252,1) 0%, rgba(248,250,252,0.97) 40%, rgba(248,250,252,0.6) 65%, rgba(248,250,252,0.1) 100%)" }} />
          {/* Subtle bottom border */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e2b4d]/15 to-transparent z-20" />

          <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col justify-center py-40 md:py-48">

          {/* Main Hero Elements */}
          <div className="relative z-20 flex flex-col items-start justify-center gap-8 w-full max-w-3xl">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ea580c]/20 bg-[#ea580c]/5 text-[10px] font-bold text-[#ea580c] uppercase tracking-[0.2em]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] animate-pulse" />
                UK Logistics — Built on Trust
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-[5.5rem] lg:text-[7rem] font-black tracking-tighter leading-[0.92] text-[#1e2b4d]"
            >
              Every Delivery.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] to-amber-400">Done Right.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#1e2b4d]/65 text-xl md:text-2xl font-normal leading-relaxed max-w-xl"
            >
              Reliability, responsiveness, trust — built into everything we do. No delays. No excuses. <strong className="font-semibold text-[#1e2b4d]/90">Just getting the job done, properly.</strong>
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-start gap-4 mt-4"
            >
              <Link href="#quote-form" className="px-10 py-5 bg-[#ea580c] text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-[#1e2b4d] transition-all duration-300 shadow-xl shadow-[#ea580c]/25 flex items-center gap-3">
                Get a Quote <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="px-10 py-5 bg-white border border-[#1e2b4d]/10 text-[#1e2b4d] font-bold text-xs uppercase tracking-widest rounded-full hover:bg-[#1e2b4d] hover:text-white hover:border-[#1e2b4d] transition-all duration-300 shadow-sm">
                Track Your Delivery
              </Link>
            </motion.div>

            {/* Metrics strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-10 pt-8 border-t border-[#1e2b4d]/10 mt-4 w-full"
            >
              {[
                { value: "14k+", label: "Deliveries/mo" },
                { value: "45min", label: "Avg. Pickup" },
                { value: "99.9%", label: "On-Time Rate" },
                { value: "24/7", label: "Live Support" },
              ].map((m, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl font-black tracking-tight text-[#1e2b4d]">{m.value}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1e2b4d]/40 mt-0.5">{m.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Trust Module */}
      {/* Section divider with accent */}
      <div className="w-full flex items-center gap-4 px-6 md:px-12 lg:px-24 py-0">
        <div className="h-px flex-1 bg-[#1e2b4d]/8" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
        <div className="h-px w-12 bg-[#ea580c]/30" />
      </div>

      <section className="relative w-full py-24 md:py-32 bg-[#f8fafc] flex flex-col">
        {/* Full-width Background Image - Subtle Light Blend */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/twilight-logistics.png" 
            alt="Logistics Network" 
            fill 
            sizes="100vw"
            className="object-cover opacity-[0.03] grayscale"
          />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 w-full">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 text-center lg:text-left">
            <div className="space-y-8 max-w-3xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1e2b4d] leading-[1.1]">
                Why Businesses <br className="hidden md:block" />
                <span className="text-[#ea580c]">Trust Us</span>
              </h2>
              <p className="text-[#1e2b4d]/70 text-lg md:text-xl font-medium leading-relaxed italic border-l-4 border-[#ea580c] pl-6 py-2">
                "{BRAND.philosophy}"
              </p>
            </div>
            
            <div className="flex flex-col items-center lg:items-end gap-6">
              <div className="flex items-center gap-4 bg-white p-4 rounded-3xl border border-[#1e2b4d]/10 shadow-sm">
                <div className="h-14 w-14 rounded-full bg-[#1e2b4d] text-white flex items-center justify-center shadow-lg shadow-[#1e2b4d]/20">
                  <Phone size={24} />
                </div>
                <div className="text-left pr-4">
                  <p className="text-[10px] font-bold text-[#1e2b4d]/50 uppercase tracking-widest mb-1">Call Us Anytime</p>
                  <p className="text-lg font-bold text-[#1e2b4d]">{BRAND.phone}</p>
                </div>
              </div>
              <Link href="/about" className="px-10 py-5 bg-[#ea580c] text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-[#1e2b4d] transition-all flex items-center gap-2 shadow-xl shadow-orange-500/20">
                <span>Our Story</span>
                <span className="text-lg leading-none -mt-0.5">↗</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 mt-24">
            {/* Stat 1: Fully Insured */}
            <div className="group flex flex-col md:border-l border-[#1e2b4d]/10 md:pl-8 hover:border-[#ea580c] transition-colors duration-500">
              <div className="text-[#ea580c] mb-6 group-hover:-translate-y-1 transition-transform duration-300">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-2xl font-bold text-[#1e2b4d] mb-4">Fully Assured</h3>
              <p className="text-[#1e2b4d]/70 text-sm leading-relaxed">
                Your assets are protected by our comprehensive transit and liability insurance. We provide absolute security for high-value consignments, legal documents, and mission-critical inventory with zero-gap coverage.
              </p>
            </div>

            {/* Stat 2: Reliability */}
            <div className="group flex flex-col md:border-l border-[#1e2b4d]/10 md:pl-8 hover:border-[#ea580c] transition-colors duration-500">
              <div 
                className="text-6xl font-bold leading-none tracking-tighter text-[#1e2b4d] mb-4 group-hover:-translate-y-1 transition-transform duration-300"
              >
                100%
              </div>
              <h3 className="text-2xl font-bold text-[#1e2b4d] mb-4">Precision Execution</h3>
              <p className="text-[#1e2b4d]/70 text-sm leading-relaxed">
                Reliability is our baseline. We operate with a "no excuses" protocol, ensuring your deliveries arrive precisely as scheduled. Our infrastructure is engineered to absorb delays and maintain perfect punctuality.
              </p>
            </div>

            {/* Stat 3: 24/7 Operations */}
            <div className="group flex flex-col md:border-l border-[#1e2b4d]/10 md:pl-8 hover:border-[#ea580c] transition-colors duration-500">
              <div className="text-[#ea580c] mb-6 group-hover:-translate-y-1 transition-transform duration-300">
                <Clock size={40} />
              </div>
              <h3 className="text-2xl font-bold text-[#1e2b4d] mb-4">Always Live</h3>
              <p className="text-[#1e2b4d]/70 text-sm leading-relaxed">
                Our logistics network never sleeps. From mid-day urgent dispatches to out-of-hours weekend support, we provide continuous operational live-tracking and response times that set the industry standard.
              </p>
            </div>
          </div>
        </div>

        {/* Full-width Navigation Ribbon */}
        <div className="w-full bg-white border-y border-[#1e2b4d]/10 mt-24 py-6 flex whitespace-nowrap overflow-hidden relative z-10 shadow-sm">
          <div className="animate-marquee flex items-center shrink-0">
             {[...Array(8)].map((_, i) => (
                <React.Fragment key={i}>
                  <span className="text-[#1e2b4d] font-bold uppercase tracking-[0.25em] text-sm mx-10">Regent Street, London</span>
                  <span className="text-[#1e2b4d]/20 text-xl font-light">•</span>
                  <span className="text-[#1e2b4d] font-bold uppercase tracking-[0.25em] text-sm mx-10">Nationwide Coverage</span>
                  <span className="text-[#1e2b4d]/20 text-xl font-light">•</span>
                  <span className="text-[#1e2b4d] font-bold uppercase tracking-[0.25em] text-sm mx-10">Same-Day Priority</span>
                  <span className="text-[#1e2b4d]/20 text-xl font-light">•</span>
                </React.Fragment>
              ))}
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="w-full flex items-center gap-4 px-6 md:px-12 lg:px-24">
        <div className="h-px flex-1 bg-[#1e2b4d]/8" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
        <div className="h-px w-12 bg-[#ea580c]/30" />
      </div>

      {/* 5. Services Ecosystem (Hover Image Split) */}
      <section className="py-24 md:py-32 bg-white border-b border-[#1e2b4d]/5 relative overflow-hidden">
        {/* Subtle decorative background element */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#ea580c]/[0.025] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1e2b4d]/[0.02] rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-[#f8fafc] border border-[#1e2b4d]/10 shadow-sm rounded-full mb-6">
                <Package size={14} className="text-[#ea580c]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1e2b4d]">The Services Ecosystem</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1e2b4d]">
                Professional Logistics <br />
                <span className="text-[#ea580c]">Powering Your Growth</span>
              </h2>
            </div>
            <div className="hidden md:block">
              <Link href="/services" className="inline-flex items-center gap-2 text-[#ea580c] font-bold hover:text-[#1e2b4d] transition-colors uppercase tracking-widest text-sm">
                View All Services <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start border-t border-[#1e2b4d]/10 pt-16">
            
            {/* Left: Dynamic Image (Desktop only) — refined frame */}
            <div className="hidden lg:block lg:col-span-5 relative h-[640px] w-full sticky top-28">
              {/* Outer frame border detail */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#ea580c]/40 z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#ea580c]/40 z-20 pointer-events-none" />
              <div className="overflow-hidden rounded-2xl h-full shadow-2xl shadow-[#1e2b4d]/10 relative">
              {SERVICES.map((service, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${hoveredService === i ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}
                >
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e2b4d]/95 via-[#1e2b4d]/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-10">
                    <div className="inline-flex items-center gap-2 bg-[#ea580c] px-4 py-1.5 rounded-full text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                      0{i + 1} — Service
                    </div>
                    <h4 className="text-3xl font-bold text-white">{service.title}</h4>
                    <p className="text-white/70 text-sm font-medium mt-2 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
              </div>
            </div>

            {/* Right: Service List — elevated style */}
            <div className="flex flex-col lg:col-span-7">
              {SERVICES.map((service, i) => (
                <Link
                  key={i}
                  href={service.link}
                  onMouseEnter={() => setHoveredService(i)}
                  className={`group flex items-center gap-6 py-7 border-b transition-all duration-300 cursor-pointer ${
                    hoveredService === i
                      ? "border-[#ea580c]/40 bg-gradient-to-r from-[#ea580c]/[0.03] to-transparent"
                      : "border-[#1e2b4d]/5 hover:border-[#ea580c]/20"
                  }`}
                >
                  {/* Number badge */}
                  <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xs font-black tracking-widest transition-all duration-300 border ${
                    hoveredService === i ? "bg-[#ea580c] border-[#ea580c] text-white shadow-lg shadow-[#ea580c]/30" : "bg-white border-[#1e2b4d]/10 text-[#1e2b4d]/40"
                  }`}>
                    0{i+1}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                      hoveredService === i ? "text-[#ea580c]" : "text-[#1e2b4d] group-hover:text-[#ea580c]"
                    }`}>
                      {service.title}
                    </h3>
                    <p className="text-sm font-medium text-[#1e2b4d]/50 leading-relaxed mt-1 line-clamp-2">
                      {service.desc}
                    </p>
                    {/* Mobile image */}
                    <div className="mt-4 lg:hidden w-full h-40 relative overflow-hidden rounded-xl border border-[#1e2b4d]/10">
                      <Image src={service.image} alt={service.title} fill sizes="100vw" className="object-cover" />
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className={`shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    hoveredService === i ? "bg-[#ea580c] border-[#ea580c] text-white translate-x-1" : "bg-white border-[#1e2b4d]/10 text-[#1e2b4d]/30"
                  }`}>
                    <ArrowRight size={16} />
                  </div>
                </Link>
              ))}

              {/* Mobile View All */}
              <div className="lg:hidden mt-10">
                <Link href="/services" className="inline-flex w-full items-center justify-center gap-2 text-[#ea580c] font-bold uppercase tracking-widest text-xs bg-[#ea580c]/5 px-6 py-4 border border-[#ea580c]/20 rounded-full hover:bg-[#ea580c] hover:text-white transition-all">
                  View All Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Old HowItWorks Location - Relocated to position 3 */}

      {/* Old Experience Block Location - Relocated to position 2 */}


      {/* Section divider */}
      <div className="w-full flex items-center gap-4 px-6 md:px-12 lg:px-24">
        <div className="h-px flex-1 bg-[#1e2b4d]/8" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
        <div className="h-px w-12 bg-[#ea580c]/30" />
      </div>

      {/* 9. Testimonials (Minimalist) */}
      <section className="py-24 md:py-32 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-8 relative">
        <div className="flex flex-col items-center text-center space-y-6 mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-[#f8fafc] border border-[#1e2b4d]/10 shadow-sm rounded-full">
            <Star size={14} className="text-[#ea580c]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1e2b4d]">Client Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1e2b4d]">
            Excellence in <span className="text-[#ea580c]">Motion</span>
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
                  <Image src={i % 2 === 0 ? "/hero-truck.jpg" : "/svc-contract.jpg"} alt={quote.name} fill sizes="48px" className="object-cover" />
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

      {/* 12. FAQ Section */}
      <FAQ />

      {/* 13. Contact / Quote Form Section */}
      <section id="quote-form" className="bg-white">
        <QuoteForm />
      </section>

    </div>
  );
}
