"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CitySelect from "@/components/CitySelect";
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

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Hero Section */}
      <section
        className="relative w-full flex items-center overflow-hidden"
        style={{
          minHeight: "100vh",
          backgroundImage: "url('/hero-truck.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Multi-layered dark overlay for readability */}
        <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(105deg, rgba(13,27,62,0.92) 0%, rgba(13,27,62,0.75) 45%, rgba(0,0,0,0.45) 100%)" }} />
        <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 w-full text-white py-32 md:py-48">
          <div className="max-w-3xl space-y-10">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center space-x-2 px-3 py-1.5 border border-white/20 rounded-full bg-white/10 backdrop-blur-md w-fit"
              >
                <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">Available for same-day delivery</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.95] italic uppercase"
              >
                Reliable <br />
                <span className="not-italic text-accent">Logistics.</span> <br /> 
                <span className="text-white/80 not-italic">Local Speed.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/65 text-sm md:text-base font-medium uppercase tracking-[0.2em] leading-relaxed max-w-lg"
              >
                High-priority shipments handled with precision. Professional courier infrastructure across the United Kingdom.
              </motion.p>
            </div>

            {/* Inline Mini Quote Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl max-w-2xl overflow-visible"
            >
              <div className="grid grid-cols-1 md:grid-cols-4">
                {/* FROM — Searchable City Dropdown */}
                <div className="px-5 py-4 border-b md:border-b-0 md:border-r border-white/10">
                  <CitySelect
                    label="From"
                    value={fromCity}
                    onChange={setFromCity}
                    placeholder="Pick city"
                  />
                </div>
                {/* TO — Searchable City Dropdown */}
                <div className="px-5 py-4 border-b md:border-b-0 md:border-r border-white/10">
                  <CitySelect
                    label="To"
                    value={toCity}
                    onChange={setToCity}
                    placeholder="Pick city"
                  />
                </div>
                {/* SERVICE */}
                <div className="flex flex-col px-5 py-4 space-y-1.5 border-b md:border-b-0 md:border-r border-white/10">
                  <span className="text-[8px] font-bold uppercase tracking-widest text-white/40">Service</span>
                  <select className="text-sm font-bold outline-none bg-transparent appearance-none text-white/90">
                    <option className="text-black bg-white">Same Day</option>
                    <option className="text-black bg-white">Next Day</option>
                    <option className="text-black bg-white">Pallet / Freight</option>
                    <option className="text-black bg-white">Contract</option>
                  </select>
                </div>
                <button className="bg-accent text-white font-bold py-5 hover:bg-orange-600 active:scale-95 transition-all text-xs uppercase tracking-widest shadow-xl shadow-orange-800/30 rounded-b-2xl md:rounded-b-none md:rounded-r-2xl">
                  Get Quote
                </button>
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 italic"
            >
              Same-day slots available · We respond within 47 minutes
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Stats Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { metric: "500+", label: "Deliveries Completed", sub: "Since launch" },
            { metric: "20+", label: "UK Cities Covered", sub: "Nationwide Network" },
            { metric: "99%", label: "On-Time Success Rate", sub: "Premium Punctuality" },
          ].map((stat, i) => (
            <div key={i} className="metric-card border-accent/20">
              <span className="text-5xl md:text-7xl font-bold tracking-tighter italic text-accent">{stat.metric}</span>
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#0D1B3E]">{stat.label}</span>
                <p className="text-[9px] text-muted font-bold uppercase tracking-widest opacity-60">{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Industries Section */}
      <Industries />

      {/* 5. Services Section */}
      <section className="section-padding bg-zinc-50 border-y border-border">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter italic uppercase text-[#0D1B3E]">Premium Logistics <br className="hidden md:block" />
            <span className="not-italic text-accent">Built for Scale</span></h2>
            <p className="text-muted text-sm font-medium uppercase tracking-widest leading-loose max-w-2xl mx-auto">
                Comprehensive courier infrastructure engineered for efficiency and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <div key={i} className="bg-white border border-border rounded-2xl overflow-hidden group hover:shadow-xl transition-all">
                <div className="relative h-48 w-full">
                  <Image src={service.image} alt={service.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                </div>
                <div className="p-8 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold uppercase tracking-widest">{service.title}</h3>
                    <p className="text-xs text-muted leading-relaxed font-medium capitalize italic">{service.desc}</p>
                  </div>
                  <Link href={service.link} className="inline-flex items-center space-x-2 text-[10px] font-bold text-accent uppercase tracking-widest group/btn">
                    <span>Learn More</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. How It Works */}
      <HowItWorks />

      {/* 7. Why Choose Us (Existing Features refactored) */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter italic uppercase text-[#0D1B3E]">Why Businesses <br className="hidden md:block" />
              <span className="not-italic text-accent">Trust Us</span></h2>
              <p className="text-muted text-sm font-medium uppercase tracking-widest leading-loose max-w-lg">
                We combine modern technology with traditional reliability to provide an elite delivery experience.
              </p>
            </div>
            <Link href="/about" className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent border-b-2 border-accent/20 hover:border-accent transition-all pb-2 mb-4">
              Our Full Story
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Real-Time Tracking", desc: "Know exactly where your shipment is at any moment with live GPS updates.", icon: Package },
              { title: "Fully Assured", desc: "Your goods are protected. We carry comprehensive transit and liability cover.", icon: ShieldCheck },
              { title: "Expert Support", desc: "Dedicated logistics managers available 24/7 to solve your complex challenges.", icon: Phone },
            ].map((feature, i) => (
              <div key={i} className="card-border p-10 space-y-6 group hover:border-accent transition-colors">
                <feature.icon className="h-6 w-6 text-accent" />
                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-widest">{feature.title}</h3>
                  <p className="text-xs text-muted leading-relaxed font-medium">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Pricing Transparency */}
      <Pricing />

      {/* 9. Testimonials */}
      <section className="section-padding bg-zinc-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter italic uppercase">What Our <span className="not-italic text-accent">Clients Say</span></h2>
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
                   <p className="text-sm font-bold tracking-tight italic leading-relaxed">"{quote.text}"</p>
                </div>
                <div className="flex items-center space-x-3">
                   <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-[10px] font-bold">{quote.name.charAt(0)}</span>
                   </div>
                   <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest">{quote.name}</p>
                      <p className="text-[8px] text-zinc-500 uppercase font-bold italic">{quote.role}</p>
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
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none italic uppercase">
            Ready to move your <br /> <span className="not-italic text-indigo-950">Business Forward?</span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium">
            Collection available as early as today. Experience the Eben Logistics difference.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="px-12 py-5 bg-indigo-950 text-white font-bold rounded-lg hover:bg-[#0D1B3E] transition-all active:scale-95 text-xs uppercase tracking-widest shadow-2xl">
              Book a Delivery
            </Link>
            <Link href={`tel:${BRAND.phone}`} className="px-12 py-5 border-2 border-indigo-950 text-indigo-950 font-bold rounded-lg hover:bg-indigo-950 hover:text-white transition-all active:scale-95 text-xs uppercase tracking-widest italic">
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
