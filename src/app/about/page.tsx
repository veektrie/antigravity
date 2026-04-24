"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Shield, 
  Clock, 
  ShieldCheck, 
  Users,
  Eye,
  Rocket,
  CheckCircle2,
  Globe,
  ArrowDown,
  Settings,
  ArrowUpRight
} from "lucide-react";
import { motion } from "framer-motion";
import HowItWorks from "@/components/HowItWorks";

export default function AboutPage() {
  const values = [
    {
      title: "Trust & Integrity",
      desc: "We operate with total transparency. No hidden costs, no vague promises—just honest, straightforward UK logistics support you can bank on.",
      icon: Shield
    },
    {
      title: "Unwavering Reliability",
      desc: "We understand that your reputation travels with every shipment. We deliver on time, every time, protecting your business promises.",
      icon: Clock
    },
    {
      title: "Safety & Compliance",
      desc: "We strictly adhere to UK transport regulations and DVSA standards. Safety is never compromised for speed, ensuring a compliant supply chain.",
      icon: ShieldCheck
    },
    {
      title: "Customer-Centricity",
      desc: "We don't offer cookie-cutter solutions. We listen, adapt, and build transport strategies that fit your specific business needs perfectly.",
      icon: Users
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-hidden">
      
      {/* 1. Hero Template */}
      <section className="relative w-full pt-48 pb-16 md:pt-64 md:pb-24 bg-white flex justify-center">
        <div className="max-w-[1400px] w-full px-6 md:px-12 lg:px-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none text-blue-950 uppercase max-w-4xl"
            >
              Our Story, Vision, <br />
              and Values
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-blue-900/40 text-sm md:text-base font-bold uppercase tracking-widest max-w-xs text-right leading-relaxed"
            >
              Learn about our commitment to excellence, innovation, and the principles that guide our work every day.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Visual Template Section */}
      <section className="pb-32 flex justify-center">
        <div className="max-w-[1400px] w-full px-6 md:px-12 lg:px-16 space-y-20">
          


          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-7 space-y-12">
               <div className="space-y-8">
                  <div className="text-6xl font-serif text-blue-100 leading-none h-8">“</div>
                  <p className="text-2xl md:text-3xl font-medium text-blue-950 leading-[1.4] tracking-tight">
                    Our team of experts works tirelessly to bring your vision to life, ensuring every project we undertake not only meets but exceeds expectations. We are dedicated to transforming your logistics into impactful competitive advantages.
                  </p>
               </div>
               
               <div className="relative h-64 w-full rounded-[3rem] overflow-hidden border border-blue-100">
                  <Image 
                    src="/svc-contract.jpg" 
                    alt="Abstract Professional" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-950/10" />
               </div>
            </div>

            <div className="lg:col-span-5 bg-blue-700 rounded-[3rem] p-10 md:p-14 text-white shadow-2xl shadow-blue-900/20 space-y-10 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mt-16 -mr-16" />
               <div className="flex justify-between items-center relative z-10">
                  <span className="text-xs font-bold uppercase tracking-[0.3em]">ABOUT US</span>
                  <Settings className="text-blue-200 animate-spin-slow" size={24} />
               </div>
               <div className="space-y-8 relative z-10">
                  <p className="text-lg leading-relaxed font-medium text-white/90">
                    We believe in the power of collaboration and creativity. By partnering closely with our clients, we gain a deep understanding of their unique needs and goals, allowing us to deliver customized solutions that truly make a difference.
                  </p>
                  <p className="text-lg leading-relaxed font-medium text-white/90">
                    By staying ahead of the curve and embracing the latest trends and technologies, we ensure that we provide cutting-edge solutions that anticipate future opportunities.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Template - NEW (Based on provided image) */}
      <section className="py-24 md:py-32 flex justify-center bg-white">
        <div className="max-w-[1400px] w-full px-6 md:px-12 lg:px-16">
          <div className="bg-blue-950 rounded-[4rem] p-10 md:p-20 space-y-20 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.1)_0%,transparent_50%)] pointer-events-none" />
             
             {/* Header */}
             <div className="space-y-6 max-w-2xl relative z-10">
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 bg-blue-400 rounded-full" />
                   <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.3em]">4 Core Values</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.05] uppercase">
                  Principles that <br />
                  <span className="text-blue-400 text-opacity-80">Drive Delivery.</span>
                </h2>
             </div>

             {/* Values Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {values.map((value, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[400px] group hover:bg-white/10 transition-all"
                  >
                    <div className="space-y-8">
                      <p className="text-blue-400/40 font-bold text-xl tracking-tight">0{i+1}.</p>
                      <h3 className="text-3xl font-bold text-white uppercase tracking-tight leading-tight group-hover:text-blue-400 transition-colors">
                        {value.title.split(' ')[0]} <br />
                        <span className="opacity-60">{value.title.split(' ').slice(1).join(' ')}</span>
                      </h3>
                    </div>
                    <p className="text-blue-100/40 text-sm leading-relaxed font-medium">
                       {value.desc}
                    </p>
                  </motion.div>
                ))}
             </div>

             {/* Action Bar */}
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
                     Align with Partners who <span className="text-blue-400">Choose Quality</span>
                   </p>
                </div>
                
                <Link href="/contact" className="bg-white text-blue-950 px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-4 hover:bg-blue-50 transition-all shadow-xl">
                  Start Now <ArrowUpRight size={18} />
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Methodology */}
      <HowItWorks />

      {/* 5. Metrics Strip */}
      <section className="py-24 md:py-32 flex justify-center bg-white">
        <div className="max-w-[1400px] w-full px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              { label: "Established", value: "2018" },
              { label: "Deliveries", value: "50K+" },
              { label: "Support", value: "24/7" },
              { label: "Success Rate", value: "99.9%" }
            ].map((metric, i) => (
              <div key={i} className="space-y-4 text-center lg:text-left">
                <p className="text-blue-600 text-6xl md:text-7xl font-bold tracking-tighter leading-none">{metric.value}</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-900/30">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>

    </div>
  );
}
