"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Clock, Globe, Target, Zap, ShieldCheck, MapPin, BarChart, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import HowItWorks from "@/components/HowItWorks";

export default function AboutPage() {
  const values = [
    {
      title: "Reliability",
      desc: "Our word is our bond. When we commit to a delivery, we ensure it arrives safely and on time, every time.",
      icon: Shield
    },
    {
      title: "Efficiency",
      desc: "We leverage advanced logistics infrastructure to minimize delays and maximize throughput for our clients.",
      icon: Clock
    },
    {
      title: "Scale",
      desc: "With a nationwide network operating 24/7, we provide the backbone for businesses that never stop growing.",
      icon: Globe
    },
    {
      title: "Precision",
      desc: "Logistics is a game of inches. We track every detail to provide pinpoint accuracy for critical consignments.",
      icon: Target
    }
  ];

  const pillars = [
    {
      title: "Nationwide Infrastructure",
      desc: "Our network spans the entire UK, anchored by our central hub in Regent Street, London. We maintain a fleet of modern, GPS-tracked vehicles ready for immediate dispatch.",
      icon: MapPin
    },
    {
      title: "Transparent Technology",
      desc: "Every client gets real-time visibility. From automated status updates to digital proof of delivery (POD), we bring absolute transparency to every mile.",
      icon: BarChart
    },
    {
      title: "Elite Fleet Standards",
      desc: "Our vehicles are maintained to the highest safety and performance standards. We use Euro 6 compliant engines to ensure efficiency and environmental responsibility.",
      icon: ShieldCheck
    },
    {
      title: "Sustainable Logistics",
      desc: "We are committed to reducing our carbon footprint through optimized route planning and the gradual integration of electric vehicles into our city operations.",
      icon: Leaf
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full pt-48 pb-32 md:pt-64 md:pb-48 bg-white flex justify-center border-b border-blue-50">
        <div className="max-w-[1400px] w-full px-6 md:px-12 lg:px-16 relative z-10">
          <div className="max-w-4xl space-y-12">
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] text-blue-950 uppercase"
            >
              Building the <br />
              <span className="text-blue-600">Infrastructure</span> <br />
              of Trust.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-blue-900/40 text-xl md:text-2xl font-medium max-w-2xl leading-tight tracking-tight"
            >
              Eben Logistics isn't just a courier service. We are a dedicated logistics partner built on a foundation of proactive architecture and unwavering reliability.
            </motion.p>
          </div>
        </div>
        
        {/* Ambient background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 translate-x-1/4 pointer-events-none" />
      </section>

      {/* Main Philosophy Section with Image */}
      <section className="py-24 md:py-32 flex justify-center">
        <div className="max-w-[1400px] w-full px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 order-2 lg:order-1">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-blue-950 leading-[1.1] uppercase">
                Logistics is reactive. <br />
                We are <span className="text-blue-600">proactive.</span>
              </h2>
              <div className="space-y-6 text-blue-900/60 text-lg leading-relaxed font-medium">
                <p>
                  Most logistics providers wait for a problem to solve it. At Eben Logistics, we architect our delivery strategies to prevent problems before they occur. This "Infrastructure First" mindset allows us to maintain a 99.9% success rate across our operations.
                </p>
                <p>
                  Operating out of Regent Street, London, our network operates 24/7, providing the backbone for businesses across the UK that require absolute precision and uncompromised speed. Whether it's a critical legal document or a large-scale commercial relocation, we bring the same level of architectural precision to every project.
                </p>
              </div>
              <div className="pt-6">
                <Link href="/contact" className="inline-flex px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-xs uppercase tracking-widest items-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
                  Join our network <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl order-1 lg:order-2 border border-blue-100">
              <Image 
                src="/logistics_office_hq_1777032416859.png" 
                alt="Eben Logistics HQ" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-blue-950/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Operational Pillars Section - NEW */}
      <section className="py-24 md:py-32 bg-zinc-50/50 flex justify-center border-y border-blue-50">
        <div className="max-w-[1400px] w-full px-6 md:px-12 lg:px-16 space-y-24">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-blue-950 tracking-tighter uppercase leading-none">
              Operational <br />
              <span className="text-blue-600">Excellence.</span>
            </h2>
            <p className="text-blue-900/40 text-lg font-medium leading-relaxed">
              We've invested heavily in the pillars that make logistics reliable: Nationwide infrastructure, transparent technology, and elite standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {pillars.map((pillar, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="w-16 h-16 rounded-[2rem] bg-white border border-blue-100 flex items-center justify-center text-blue-600 shadow-xl shadow-blue-900/5 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <pillar.icon size={28} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-blue-950 uppercase tracking-tight">{pillar.title}</h3>
                  <p className="text-blue-900/60 text-base leading-relaxed font-medium">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - NEW */}
      <HowItWorks />

      {/* Core Values Section */}
      <section className="py-24 md:py-32 bg-blue-950 flex justify-center">
        <div className="max-w-[1400px] w-full px-6 md:px-12 lg:px-16 space-y-20">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase">
              Our Core <span className="text-blue-400">Values.</span>
            </h2>
            <p className="text-blue-200/40 text-lg md:text-xl font-medium tracking-tight">
              The principles that drive every single delivery we make across the nation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 space-y-8 hover:bg-white/10 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-600/20 group-hover:scale-110 transition-transform">
                  <value.icon size={24} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white tracking-tight">{value.title}</h3>
                  <p className="text-blue-100/40 text-sm leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 md:py-32 flex justify-center border-t border-blue-50">
        <div className="max-w-[1400px] w-full px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              { label: "Year Established", value: "2018" },
              { label: "Deliveries Completed", value: "50K+" },
              { label: "Operations Live", value: "24/7" },
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

    </div>
  );
}
