"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Briefcase, 
  FileText, 
  Truck, 
  Layers, 
  RotateCw, 
  Moon, 
  ArrowRight,
  Zap,
  CheckCircle2,
  Quote
} from "lucide-react";
import { motion } from "framer-motion";
import HowItWorks from "@/components/HowItWorks";

const services = [
  {
    title: "Urgent Delivery",
    label: "PRIORITY",
    desc: "Immediate pickup and direct transport for critical items. No waiting, no stops.",
    icon: Zap,
    image: "/svc-same-day.jpg",
    details: [
      "Average pickup within 60 minutes",
      "Dedicated vehicle for every consignment",
      "Real-time GPS tracking link",
      "Direct drive – no stops or consolidations"
    ],
    stat: "10X",
    statDesc: "Faster than standard couriers"
  },
  {
    title: "Business Accounts",
    label: "COMMERCIAL",
    desc: "Tailored logistics infrastructure for high-volume corporate partners.",
    icon: Briefcase,
    image: "/svc-contract.jpg",
    details: [
      "Customized billing and reporting",
      "Dedicated account management",
      "Priority vehicle availability",
      "API integration for order management"
    ],
    stat: "100%",
    statDesc: "Uptime for partners"
  },
  {
    title: "Legal & Documents",
    label: "CONFIDENTIAL",
    desc: "Secure handling for sensitive legal paperwork and digital media.",
    icon: FileText,
    image: "/svc-specialist.jpg",
    details: [
      "Chain of custody documentation",
      "Enhanced DBS-cleared drivers",
      "Tamper-proof security seals",
      "Proof of delivery with electronic signatures"
    ]
  },
  {
    title: "Man with a Van",
    label: "REMOVALS",
    desc: "Professional relocation services for offices and premium residential units.",
    icon: Truck,
    image: "/svc-removals.png",
    details: [
      "Multi-crew teams for heavy lifting",
      "Protective packing and wrapping",
      "Specialist equipment for large items",
      "Secure transit insurance included"
    ]
  },
  {
    title: "Collection Only",
    label: "EASY PICKUP",
    desc: "Need something picked up and held? Our nationwide network of hubs is ready.",
    icon: RotateCw,
    image: "/svc-warehouse.jpg",
    details: [
      "Secure short-term storage",
      "Timed pickup windows",
      "Item inspection on collection",
      "Cross-docking for onward transit"
    ]
  },
  {
    title: "24/7 Support",
    label: "ALWAYS READY",
    desc: "Logistics that don't sleep. Full weekend and evening capacity.",
    icon: Moon,
    image: "/hero-truck.jpeg",
    details: [
      "Round-the-clock dispatch team",
      "Evening and weekend pickups",
      "Bank holiday coverage",
      "Emergency out-of-hours contact"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full pt-48 pb-32 md:pt-64 md:pb-48 bg-white flex justify-center border-b border-blue-50">
        <div className="max-w-[1400px] w-full px-6 md:px-12 lg:px-16 relative z-10 text-center space-y-12">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] text-blue-950 uppercase"
          >
            Solutions <br />
            <span className="text-blue-600">Built to Scale.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-900/40 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-tight tracking-tight"
          >
            Detailed logistics infrastructure engineered for professional scale, precision, and absolute reliability.
          </motion.p>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_70%)] pointer-events-none" />
      </section>

      {/* Services Bento Grid Section - NEW Testimonial-Style Template */}
      <section className="py-24 md:py-32 flex justify-center bg-zinc-50/50">
        <div className="max-w-[1400px] w-full px-6 md:px-12 lg:px-16 space-y-32">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 auto-rows-auto">
            
            {/* 1. Main Large Service (Urgent Delivery) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white rounded-[3rem] p-10 md:p-16 flex flex-col justify-between border border-blue-100 shadow-2xl shadow-blue-900/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -mr-32 -mt-32 transition-transform group-hover:scale-110" />
              <div className="space-y-12 relative z-10">
                <div className="space-y-4">
                  <h3 className="text-8xl font-black text-blue-600 tracking-tighter leading-none">{services[0].stat}</h3>
                  <p className="text-xl font-bold text-blue-950 uppercase tracking-widest">{services[0].statDesc}</p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white">
                      {React.createElement(services[0].icon, { size: 24 })}
                    </div>
                    <h2 className="text-4xl font-bold text-blue-950 uppercase tracking-tight">{services[0].title}</h2>
                  </div>
                  <p className="text-blue-900/60 text-xl leading-relaxed font-medium max-w-xl">
                    {services[0].desc}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                    {services[0].details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-blue-950 font-bold uppercase tracking-tight">
                        <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-blue-50 flex items-center justify-between">
                <Link href="/contact" className="px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
                  Book Priority
                </Link>
                <div className="text-blue-900/5 font-black text-4xl tracking-tighter">URGENT</div>
              </div>
            </motion.div>

            {/* 2. Top Right Service (Business Accounts) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 bg-blue-950 rounded-[3rem] p-10 md:p-12 flex flex-col justify-between border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl -mb-24 -mr-24" />
              <div className="space-y-10 relative z-10">
                <div className="flex justify-between items-start">
                   <h3 className="text-3xl font-bold text-white tracking-tight uppercase leading-none">{services[1].title}</h3>
                   <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-blue-400">
                     {React.createElement(services[1].icon, { size: 24 })}
                   </div>
                </div>
                <p className="text-blue-200/60 text-lg leading-relaxed font-medium italic">
                  "{services[1].desc}"
                </p>
                <div className="space-y-3">
                  {services[1].details.slice(0, 3).map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs text-blue-300 font-bold uppercase tracking-widest">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-12 flex items-center justify-between">
                 <div className="space-y-1">
                   <p className="text-3xl font-bold text-white">{services[1].stat}</p>
                   <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">{services[1].statDesc}</p>
                 </div>
                 <Link href="/contact" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-blue-950 transition-all">
                   <ArrowRight size={20} />
                 </Link>
              </div>
            </motion.div>

            {/* 3. Legal & Documents (Small Card) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 bg-white rounded-[2.5rem] p-10 border border-blue-100 shadow-xl shadow-blue-900/5 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  {React.createElement(services[2].icon, { size: 20 })}
                </div>
                <h4 className="text-xl font-bold text-blue-950 uppercase tracking-tight">{services[2].title}</h4>
                <p className="text-blue-900/50 text-sm font-medium leading-relaxed">{services[2].desc}</p>
              </div>
              <Link href="/contact" className="mt-8 flex items-center justify-between text-blue-600 font-bold text-[10px] uppercase tracking-widest hover:translate-x-2 transition-transform">
                Secure Request <ArrowRight size={14} />
              </Link>
            </motion.div>

            {/* 4. Man with a Van (Small Card) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 bg-white rounded-[2.5rem] p-10 border border-blue-100 shadow-xl shadow-blue-900/5 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  {React.createElement(services[3].icon, { size: 20 })}
                </div>
                <h4 className="text-xl font-bold text-blue-950 uppercase tracking-tight">{services[3].title}</h4>
                <p className="text-blue-900/50 text-sm font-medium leading-relaxed">{services[3].desc}</p>
              </div>
              <Link href="/contact" className="mt-8 flex items-center justify-between text-blue-600 font-bold text-[10px] uppercase tracking-widest hover:translate-x-2 transition-transform">
                Book Removals <ArrowRight size={14} />
              </Link>
            </motion.div>

            {/* 5. 24/7 Support (Dark Theme Contrast Card) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 bg-blue-600 rounded-[2.5rem] p-10 flex flex-col justify-between text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mt-16 -mr-16" />
              <div className="space-y-6 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  {React.createElement(services[5].icon, { size: 20 })}
                </div>
                <h4 className="text-xl font-bold uppercase tracking-tight">{services[5].title}</h4>
                <p className="text-white/70 text-sm font-medium leading-relaxed">{services[5].desc}</p>
              </div>
              <div className="mt-8 flex items-center justify-between relative z-10">
                 <span className="text-[10px] font-bold uppercase tracking-widest">Always Active</span>
                 <div className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center">
                   <ArrowRight size={16} />
                 </div>
              </div>
            </motion.div>

          </div>

          {/* Process Section - Replaced with HowItWorks */}
          <HowItWorks />

        </div>
      </section>

    </div>
  );
}
