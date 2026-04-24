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
  CheckCircle2
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
    ]
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
    ]
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full"
          >
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-900">The Services Ecosystem</span>
          </motion.div>
          
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

      {/* Services Grid Section */}
      <section className="py-24 md:py-32 flex justify-center bg-zinc-50/50">
        <div className="max-w-[1400px] w-full px-6 md:px-12 lg:px-16 space-y-32">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <div 
                key={i}
                className="group relative flex flex-col bg-white border border-blue-100 rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/5 hover:-translate-y-2 transition-all duration-500 min-h-[600px]"
              >
                {/* Service Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-blue-950/20" />
                  <div className="absolute top-6 left-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-blue-600 px-4 py-2 rounded-full shadow-lg">
                      {service.label}
                    </span>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-10 flex flex-col flex-1">
                  <div className="space-y-8 flex-1">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                        <service.icon size={20} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-blue-950 tracking-tight leading-none uppercase">
                        {service.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-blue-900/60 text-base leading-relaxed font-medium">
                        {service.desc}
                      </p>
                      <ul className="space-y-3">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-blue-900/50 font-semibold uppercase tracking-tight">
                            <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link 
                    href="/contact" 
                    className="flex items-center justify-between pt-8 mt-10 border-t border-blue-50 group/btn"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Request Service details</span>
                    <div className="w-12 h-12 rounded-full border border-blue-100 flex items-center justify-center group-hover/btn:bg-blue-600 group-hover/btn:text-white group-hover/btn:border-blue-600 transition-all -rotate-45 group-hover/btn:rotate-0">
                      <ArrowRight size={20} />
                    </div>
                  </Link>
                </div>
              </div>
            ))}

            {/* Bespoke CTA Card */}
            <div className="relative p-12 bg-blue-950 rounded-[3rem] flex flex-col justify-center items-center text-center space-y-8 overflow-hidden min-h-[600px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -mr-32 -mt-32" />
              <div className="w-20 h-20 rounded-[2rem] bg-blue-600 flex items-center justify-center text-white shadow-2xl shadow-blue-600/30">
                <Layers size={40} />
              </div>
              <h3 className="text-4xl font-bold text-white tracking-tight uppercase leading-none">
                Need a <br />
                <span className="text-blue-400">Bespoke</span> <br />
                Plan?
              </h3>
              <p className="text-blue-200/40 text-sm font-medium leading-relaxed max-w-[200px] uppercase tracking-widest">
                Custom infrastructure architecture available on request for complex logistical needs.
              </p>
              <Link 
                href="/contact" 
                className="px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-blue-950 transition-all shadow-xl shadow-blue-600/20"
              >
                Request Quote
              </Link>
            </div>
          </div>

          {/* Process Section - Replaced with HowItWorks */}
          <HowItWorks />

        </div>
      </section>

    </div>
  );
}
