"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-white flex justify-center">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="relative mb-8">
            <div className="absolute -top-2 -left-4 w-3 h-3 border-t-2 border-l-2 border-blue-400" />
            <div className="absolute -bottom-2 -right-4 w-3 h-3 border-b-2 border-r-2 border-blue-400" />
            <span className="text-[11px] font-bold text-blue-900/40 uppercase tracking-[0.2em] px-2">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 tracking-tight leading-[1.1] mb-4">
            Results that speak volume
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-blue-900/20">
            Real success stories
          </p>
          <p className="mt-8 text-blue-900/40 font-medium text-sm">
            See what our clients say about our service.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[minmax(300px,auto)]">
          
          {/* Main Large Testimonial */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 bg-blue-50/30 rounded-[2.5rem] p-10 md:p-12 flex flex-col justify-between border border-blue-100/50"
          >
            <div className="space-y-6">
              <h3 className="text-7xl font-bold text-blue-900 tracking-tighter">10X</h3>
              <p className="text-xl font-bold text-blue-950 mb-8">Increase in delivery speed</p>
              <Quote className="text-blue-600" size={32} fill="currentColor" />
              <p className="text-lg md:text-xl text-blue-900/70 font-medium leading-relaxed">
                "We needed a reliable partner for our urgent deliveries. The team at Eben Logistics has been incredible. They are fast, professional, and always on time. We've seen a massive improvement in our operations since we started working with them."
              </p>
            </div>
            <div className="mt-12 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 overflow-hidden">
                  <img src="https://i.pravatar.cc/150?u=david2" alt="David" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-blue-950">David Callahan</p>
                  <p className="text-xs font-bold text-blue-900/40 uppercase tracking-widest">Operations Manager, Spotify</p>
                </div>
              </div>
              <div className="text-blue-900/10 font-black text-2xl tracking-tighter">SPOTIFY</div>
            </div>
          </motion.div>

          {/* Right Column Stack */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-6">
            
            {/* Top Right Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50/30 rounded-[2.5rem] p-10 flex flex-col justify-between border border-blue-100/50"
            >
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-blue-950 tracking-tight">100% Satisfaction Rate</h3>
                <Quote className="text-blue-600" size={24} fill="currentColor" />
                <p className="text-blue-900/70 font-medium leading-relaxed italic">
                  "Every delivery is handled with care. The communication is clear and the service is excellent. Highly recommend for any business needing reliable logistics."
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?u=sarah3" alt="Sarah" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-blue-950 text-sm">Sarah Mitchel</p>
                    <p className="text-[10px] font-bold text-blue-900/40 uppercase tracking-widest">Director, Google UK</p>
                  </div>
                </div>
                <div className="text-blue-900/10 font-black text-xl tracking-tighter">GOOGLE</div>
              </div>
            </motion.div>

            {/* Bottom Two Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-blue-50/30 rounded-[2.5rem] p-8 border border-blue-100/50 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <Quote className="text-blue-600" size={20} fill="currentColor" />
                  <p className="text-blue-900/70 text-sm font-medium leading-relaxed">
                    "Professional service from start to finish. They truly understand our business needs."
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?u=tom2" alt="Tom" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-blue-950 text-xs">Tom Becker</p>
                    <p className="text-[8px] font-bold text-blue-900/40 uppercase tracking-widest">Founder, PulseCore</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-blue-950 rounded-[2.5rem] p-8 border border-white/5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <Quote className="text-blue-400" size={20} fill="currentColor" />
                  <p className="text-white/80 text-sm font-medium leading-relaxed">
                    "Fast turnaround and incredible attention to detail. The best logistics partner we've had."
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-900 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?u=sarah4" alt="Sarah" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-xs">Sarah Mitchel</p>
                    <p className="text-[8px] font-bold text-white/40 uppercase tracking-widest">Director, Google</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
