"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Briefcase, 
  FileText, 
  Truck, 
  RotateCw, 
  Moon, 
  ArrowRight,
  Zap,
  CheckCircle2,
  Package,
  Building2,
  TrendingUp,
  MapPin,
  ShieldCheck,
  LayoutGrid,
  ArrowUpRight,
  Users
} from "lucide-react";
import { motion } from "framer-motion";
import HowItWorks from "@/components/HowItWorks";

const services = [
  {
    title: "Express Delivery",
    desc: "Immediate point-to-point transport for your most urgent consignments across the UK.",
    icon: Zap,
  },
  {
    title: "E-commerce Logistics",
    desc: "Scalable delivery networks designed to support growing brands and online stores.",
    icon: TrendingUp,
  },
  {
    title: "B2B Distribution",
    desc: "Reliable movement of bulk goods between suppliers, hubs, and your end clients.",
    icon: LayoutGrid,
  },
  {
    title: "Corporate Relocations",
    desc: "Minimal-downtime office moves and premium residential relocations with full protection.",
    icon: Building2,
  },
  {
    title: "Specialist Courier",
    desc: "Confidential handling for legal, medical, and sensitive digital assets with POD.",
    icon: FileText,
  },
  {
    title: "Network Support",
    desc: "Continuous logistics management that works as a 24/7 extension of your team.",
    icon: Moon,
  }
];

const sectors = [
  { 
    name: "Retail & E-commerce", 
    icon: Package,
    desc: "High-volume delivery networks for national retailers and fast-growing brands."
  },
  { 
    name: "Legal & Professional", 
    icon: ShieldCheck,
    desc: "Secure, chain-of-custody handling for time-sensitive legal and financial documents."
  },
  { 
    name: "Industrial & Mfg", 
    icon: Building2,
    desc: "Robust transport solutions for manufacturing parts, bulk goods, and supplies."
  },
  { 
    name: "Health & Pharma", 
    icon: Zap,
    desc: "Priority transport for medical supplies and sensitive healthcare equipment."
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-hidden text-blue-950">
      
      {/* Hero Section */}
      <section className="relative w-full pt-48 pb-16 md:pt-64 md:pb-24 bg-white flex justify-center">
        <div className="max-w-[1400px] w-full px-6 md:px-12 lg:px-16 relative z-10 text-center space-y-12">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] uppercase"
          >
            Capabilities <br />
            <span className="text-blue-600">Without Limits.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-blue-900/40 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-tight tracking-tight"
          >
            Eben architects every mile, from time-critical express to complex nationwide supply chain management.
          </motion.p>
        </div>
      </section>

      {/* NEW SERVICE GRID TEMPLATE (Split Feature Layout) */}
      <section className="py-24 md:py-32 flex justify-center bg-zinc-50/50 border-y border-blue-50">
        <div className="max-w-[1400px] w-full px-6 md:px-12 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            
            {/* Left Column: Heading & Pill */}
            <div className="lg:w-1/3 space-y-10 lg:sticky lg:top-48">
               <div className="space-y-6">
                  <div className="inline-flex px-5 py-2 rounded-full border border-blue-100 bg-white shadow-sm">
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">Tailored to Deliver</span>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight uppercase">
                    Ecosystem-Driven <br />
                    Logistics
                  </h2>
               </div>
               <p className="text-blue-900/50 text-lg font-medium leading-relaxed max-w-sm">
                 Revolutionizing package delivery—connect, move, and grow within an unwavering national network.
               </p>
               <Link href="/contact" className="inline-flex items-center gap-3 text-blue-600 font-bold uppercase tracking-widest text-xs hover:gap-5 transition-all">
                 Inquire about services <ArrowRight size={18} />
               </Link>
            </div>

            {/* Right Column: 2-Column Grid of Cards */}
            <div className="lg:w-2/3">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((service, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white rounded-[3rem] p-10 space-y-8 border border-blue-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all group"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                        {React.createElement(service.icon, { size: 24 })}
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold uppercase tracking-tight">{service.title}</h3>
                        <p className="text-blue-900/50 text-sm font-medium leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sector Expertise Section */}
      <section className="py-24 md:py-32 flex justify-center bg-white">
        <div className="max-w-[1400px] w-full px-6 md:px-12 lg:px-16">
          <div className="bg-blue-950 rounded-[4rem] p-10 md:p-20 space-y-20 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.1)_0%,transparent_50%)] pointer-events-none" />
             
             <div className="space-y-6 max-w-2xl relative z-10">
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 bg-blue-400 rounded-full" />
                   <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.3em]">Specialized Solutions</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.05] uppercase">
                  Who We <br />
                  <span className="text-blue-400 text-opacity-80">Serve.</span>
                </h2>
                <p className="text-blue-100/40 text-lg font-medium leading-relaxed max-w-lg">
                  Our infrastructure is engineered to meet the unique, time-critical demands of Britain's most essential sectors.
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {sectors.map((sector, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[400px] group hover:bg-white/10 transition-all"
                  >
                    <div className="space-y-8">
                      <div className="flex justify-between items-start">
                         <p className="text-blue-400/40 font-bold text-xl tracking-tight">0{i+1}.</p>
                         <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-400">
                           {React.createElement(sector.icon, { size: 20 })}
                         </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white uppercase tracking-tight leading-tight group-hover:text-blue-400 transition-colors">
                        {sector.name.split(' & ')[0]} <br />
                        <span className="opacity-60">{sector.name.includes('&') ? `& ${sector.name.split('&')[1]}` : ''}</span>
                      </h3>
                    </div>
                    <p className="text-blue-100/40 text-xs leading-relaxed font-bold uppercase tracking-widest">
                       {sector.desc}
                    </p>
                  </motion.div>
                ))}
             </div>

             <div className="bg-white/5 border border-white/10 rounded-full p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                <div className="flex items-center gap-6 px-4">
                   <div className="flex -space-x-3">
                      {[1,2,3,4].map(n => (
                        <div key={n} className="w-10 h-10 rounded-full border-2 border-blue-950 bg-blue-900 overflow-hidden">
                           <div className="w-full h-full bg-blue-600/20 flex items-center justify-center">
                              <Users size={16} className="text-blue-400" />
                           </div>
                        </div>
                      ))}
                   </div>
                   <p className="text-sm font-bold text-white uppercase tracking-widest hidden sm:block">
                     Join the Sectors that <span className="text-blue-400">Trust Eben</span>
                   </p>
                </div>
                
                <Link href="/contact" className="bg-white text-blue-950 px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-4 hover:bg-blue-50 transition-all shadow-xl">
                  Get Industry Quote <ArrowUpRight size={18} />
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <HowItWorks />

    </div>
  );
}
