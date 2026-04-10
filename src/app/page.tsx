"use client";

import React, { useState } from "react";
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
import Industries from "@/components/Industries";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import UKMap from "@/components/UKMap";
import QuoteForm from "@/components/QuoteForm";
import { BRAND, SERVICES } from "@/lib/constants";

export default function HomePage() {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [serviceType, setServiceType] = useState("Same Day");

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Hero Section wrapper with Premium Framed Gutter */}
      <div className="w-full bg-zinc-50 p-2 md:p-4 lg:p-6 min-h-screen flex flex-col">
        
        <section
          className="relative w-full flex-grow flex items-center justify-center overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] lg:rounded-[3rem] shadow-2xl border border-black/5"
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

          <div className="flex flex-col lg:flex-row justify-between items-end w-full gap-12 lg:gap-24 relative">
            
            {/* Left Box: Pill and Headline */}
            <div className="flex flex-col space-y-6 lg:w-7/12">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center px-6 py-2 border border-white/50 rounded-full bg-transparent w-fit"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Same-day slots available across the UK</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05] max-w-4xl"
              >
                Reliable <br /> Logistics
              </motion.h1>
            </div>

            {/* Right Box: Subtext and Button */}
            <div className="flex flex-col space-y-8 lg:w-4/12 relative pb-4">
              {/* Subtle line decoration from reference */}
              <div className="absolute left-0 top-2 h-full w-[1px] bg-white/20 hidden lg:block -ml-6" />
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/90 text-sm md:text-base font-medium leading-loose pl-0 lg:pl-2"
              >
                Professional courier infrastructure built for speed, reliability, and scale.
                Eben Logistics delivers across every region of the United Kingdom.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4 pl-0 lg:pl-2"
              >
                <Link
                  href="#quote-form"
                  className="px-8 py-4 bg-accent text-white font-bold flex items-center gap-3 rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
                >
                  <span className="uppercase text-xs tracking-widest text-[11px]">Get a Quote</span>
                  <span className="text-xl leading-none -mt-0.5 font-normal">↗</span>
                </Link>
              </motion.div>
            </div>
            
            {/* Vertical Pagination Dots on Far Right Edge */}
            <div className="hidden lg:flex flex-col space-y-3 absolute right-[-4rem] top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md px-3 py-6 rounded-full border border-white/20">
              <div className="w-2 h-2 rounded-full bg-white transition-all shadow-[0_0_10px_2px_rgba(255,255,255,0.4)]" />
              <div className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition-all cursor-pointer" />
              <div className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition-all cursor-pointer" />
            </div>

          </div>

          {/* Quote Form visually disconnected directly below the top layout to preserve content flow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden mt-16 max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-4">
              {/* FROM */}
              <div className="px-5 py-4 border-b md:border-b-0 md:border-r border-white/10">
                <CitySelect
                  label="From"
                  value={fromCity}
                  onChange={setFromCity}
                  placeholder="Pick city"
                />
              </div>
              {/* TO */}
              <div className="px-5 py-4 border-b md:border-b-0 md:border-r border-white/10">
                <CitySelect
                  label="To"
                  value={toCity}
                  onChange={setToCity}
                  placeholder="Pick city"
                />
              </div>
              {/* SERVICE */}
              <div className="px-5 py-4 border-b md:border-b-0 md:border-r border-white/10">
                <ServiceSelect value={serviceType} onChange={setServiceType} />
              </div>
              <button className="bg-accent text-white font-bold py-6 hover:bg-blue-700 active:scale-95 transition-all text-[11px] uppercase tracking-widest shadow-xl shadow-blue-800/30">
                Get Quote
              </button>
            </div>
          </motion.div>

          {/* Urgency line */}
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
      </div>

      {/* 2. Our Experience (Redesigned matching Delivar layout) */}
      <section className="bg-[#f7f7f7] py-24 md:py-32 overflow-hidden w-full max-w-[1920px] mx-auto rounded-[3rem] mt-8">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 space-y-16">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-white shadow-sm rounded-full">
                <ShieldCheck size={14} className="text-accent" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#0D1B3E]">Our Experience</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0D1B3E] max-w-3xl leading-[1.1]">
                Why Businesses <br className="hidden md:block" />
                <span className="text-accent">Trust Us</span>
              </h2>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-accent text-white flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">Call Us Anytime</p>
                  <p className="text-lg font-bold text-[#0D1B3E]">{BRAND.phone}</p>
                </div>
              </div>
              <Link href="/about" className="hidden md:flex flex-row px-8 py-4 bg-[#0D1B3E] text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-black transition-all items-center gap-2">
                <span>Know More</span>
                <span className="text-lg leading-none -mt-0.5">↗</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto lg:h-[450px]">
            {/* Tile 1: Visual Anchor */}
            <div className="relative rounded-[3rem] overflow-hidden group h-[380px] lg:h-full shadow-lg">
              <Image src="/hero-truck.jpg" alt="Tracking" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute top-6 left-6 inline-flex items-center space-x-2 px-5 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full">
                <Package size={14} className="text-white" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Real-Time Tracking</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-8 pt-24 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <p className="text-white/90 text-sm md:text-base font-medium leading-relaxed max-w-xs">
                  Know exactly where your shipment is at any moment with live GPS updates.
                </p>
              </div>
            </div>

            {/* Tile 2: Statistics Card */}
            <div className="bg-[#1a56ff] rounded-[3rem] p-10 flex flex-col justify-center items-center text-white shadow-xl h-[380px] lg:h-full relative overflow-hidden group text-center">
              <ShieldCheck size={120} className="absolute -right-4 -top-4 opacity-5" />
              <div 
                className="text-[6rem] md:text-[8.5rem] font-bold leading-none tracking-tighter"
                style={{ WebkitTextStroke: "2px rgba(255,255,255,0.7)", color: "transparent" }}
              >
                100%
              </div>
              <h3 className="text-2xl font-bold mt-4 mb-2">Fully Assured</h3>
              <p className="text-white/90 text-[13px] font-medium leading-relaxed max-w-[220px]">
                Your goods are protected. We carry comprehensive transit and liability cover.
              </p>
            </div>

            {/* Tile 3: Trust Card */}
            <div className="bg-white rounded-[3rem] p-10 flex flex-col justify-between shadow-lg border border-black/5 h-[380px] lg:h-full relative overflow-hidden group">
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at center, #000 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-zinc-100 rounded-full text-[#0D1B3E]">
                  <Star size={14} className="text-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#0D1B3E]">Expert Support</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0D1B3E] leading-[1.3] max-w-sm">
                  Dedicated managers available 24/7 to solve your complex challenges.
                </h3>
              </div>
              
              <div className="relative z-10 flex border border-black/5 rounded-[2rem] p-4 bg-zinc-50/80 backdrop-blur-sm mt-auto items-center gap-4 group-hover:bg-white transition-colors">
                 <div className="h-12 w-12 rounded-full overflow-hidden relative">
                    <Image src="/svc-contract.jpg" alt="Expert" fill className="object-cover grayscale" />
                 </div>
                 <div>
                    <p className="text-sm font-bold text-[#0D1B3E]">Sarah Jenkins</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted font-bold">24/7 Operations Team</p>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Slanted Ticker (Marquee) */}
        <div className="w-full bg-[#1a56ff] mt-24 py-5 -rotate-[2deg] scale-105 shadow-xl flex whitespace-nowrap overflow-hidden relative z-10">
          <div className="animate-marquee flex items-center shrink-0">
             {[...Array(6)].map((_, i) => (
                <React.Fragment key={i}>
                  <span className="text-white font-bold uppercase tracking-[0.2em] text-sm md:text-base mx-8">Same-Day Courier</span>
                  <span className="text-white/40 text-sm">↗</span>
                  <span className="text-white font-bold uppercase tracking-[0.2em] text-sm md:text-base mx-8">Freight Forwarding</span>
                  <span className="text-white/40 text-sm">↗</span>
                  <span className="text-white font-bold uppercase tracking-[0.2em] text-sm md:text-base mx-8">Medical Logistics</span>
                  <span className="text-white/40 text-sm">↗</span>
                  <span className="text-white font-bold uppercase tracking-[0.2em] text-sm md:text-base mx-8">Warehouse Solutions</span>
                  <span className="text-white/40 text-sm">↗</span>
                </React.Fragment>
             ))}
          </div>
        </div>
      </section>

      {/* 3. How It Works (Process Module migrated from below based on request) */}
      <HowItWorks />

      {/* 4. Trust Bar */}
      <TrustBar />

      {/* Stats Section Moved to FAQ component overlay */}

      {/* 4. Industries Section */}
      <Industries />

      {/* 5. Services Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Large Image */}
          <div className="w-full lg:w-5/12 sticky top-32">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-zinc-50 border border-border shadow-sm rounded-full mb-6">
              <Package size={14} className="text-accent" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#0D1B3E]">Our Services</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0D1B3E] mb-8">
              Premium Logistics <br className="hidden md:block" />
              <span className="text-accent">Built for Scale</span>
            </h2>

            <div className="relative h-[400px] md:h-[600px] w-full rounded-[2rem] rounded-br-[6rem] overflow-hidden shadow-2xl">
              {/* Use the first service image as the hero image for this section */}
              {SERVICES.length > 0 && (
                <Image src={SERVICES[0].image} alt="Logistics Service" fill className="object-cover" />
              )}
            </div>
          </div>

          {/* Right Accordion / List */}
          <div className="w-full lg:w-7/12 flex flex-col pt-12 lg:pt-24">
            <p className="text-muted text-sm font-medium uppercase tracking-widest leading-loose max-w-lg mb-12">
              Comprehensive courier infrastructure engineered for efficiency and security. We combine modern technology with traditional reliability to provide an elite delivery experience.
            </p>

            <div className="flex flex-col w-full">
              {SERVICES.map((service, i) => (
                <Link 
                  key={i} 
                  href={service.link}
                  className="flex items-center justify-between py-10 border-b border-border group hover:pl-6 transition-all duration-300"
                >
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">0{i+1} Category</span>
                    <h3 className="text-3xl lg:text-4xl font-bold text-[#0D1B3E] group-hover:text-accent transition-colors">{service.title}</h3>
                  </div>
                  <div className="h-16 w-16 min-w-[64px] rounded-full border border-border flex items-center justify-center text-muted group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all ml-4">
                    <ArrowRight size={24} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Old HowItWorks Location - Relocated to position 3 */}

      {/* Old Experience Block Location - Relocated to position 2 */}

      {/* 8. Pricing Transparency */}
      <Pricing />

      {/* 9. Testimonials */}
      <section className="section-padding bg-zinc-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase">What Our <span className="text-accent">Clients Say</span></h2>
              <div className="inline-flex items-center space-x-3 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                 <div className="flex items-center">
                    {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="#f59e0b" className="text-accent" />)}
                 </div>
                 <span className="text-[10px] font-bold uppercase tracking-widest">4.9★ Rated on Google</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "John Smith", role: "MD, Retail Focus", text: "Delivered 200 units to our Manchester store in under 4 hours. Absolute game changer." },
              { name: "Sarah Leigh", role: "Ops, HealthConnect", text: "Finally found a courier that understands urgency and medical sensitivity." },
              { name: "David Chen", role: "Chef, Green Table", text: "The same-day ingredient delivery is flawless. Never missed a dinner service." },
              { name: "Mike Ross", role: "Manager, BuildRight", text: "Heaviest load we've sent. Handled with care and arrived exactly on time." },
            ].map((quote, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6 flex flex-col justify-between hover:bg-white/10 transition-all">
                <div className="space-y-6">
                   <div className="flex">
                    {[1,2,3,4,5].map(s => <Star key={s} size={10} fill="#f59e0b" className="text-accent" />)}
                   </div>
                   <p className="text-sm font-bold tracking-tight leading-relaxed">"{quote.text}"</p>
                </div>
                <div className="flex items-center space-x-3">
                   <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-[10px] font-bold">{quote.name.charAt(0)}</span>
                   </div>
                   <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest">{quote.name}</p>
                      <p className="text-[8px] text-zinc-500 uppercase font-bold">{quote.role}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Coverage Map */}
      <UKMap />

      {/* 11. FAQ */}
      <FAQ />

      {/* 12. CTA Banner */}
      <section className="section-padding py-32 bg-accent text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-12">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none uppercase">
            Ready to move your <br /> <span className="text-indigo-950">Business Forward?</span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium">
            Collection available as early as today. Experience the Eben Logistics difference.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="px-12 py-5 bg-indigo-950 text-white font-bold rounded-lg hover:bg-[#0D1B3E] transition-all active:scale-95 text-xs uppercase tracking-widest shadow-2xl">
              Book a Delivery
            </Link>
            <Link href={`tel:${BRAND.phone}`} className="px-12 py-5 border-2 border-indigo-950 text-indigo-950 font-bold rounded-lg hover:bg-indigo-950 hover:text-white transition-all active:scale-95 text-xs uppercase tracking-widest">
              Call Us Now
            </Link>
          </div>
        </div>
      </section>

      {/* 13. Contact / Quote Form Section */}
      <section id="quote-form" className="bg-white">
        <QuoteForm />
      </section>
    </div>
  );
}
