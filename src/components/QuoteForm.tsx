"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { BRAND } from "@/lib/constants";

const QuoteForm = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden" id="quote-form">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          
          {/* Left Column: Contact & Information */}
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-3">
                <div className="h-1 w-12 bg-[#1a56ff]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a56ff]">Engagement Portal</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] text-[#0b0c10]">
                CONNECT <br/>
                WITH OUR <br/>
                <span className="text-[#1a56ff]">LOGISTICS</span> <br/>
                EXPERTS.
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed max-w-md font-medium">
                Our team is standing by to architect your mission-critical delivery strategy. Experience the next generation of logistics infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="space-y-3">
                <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Global HQ</h4>
                <p className="text-sm font-bold text-[#0b0c10] leading-relaxed uppercase tracking-tight">
                  {BRAND.address}
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Direct Line</h4>
                <p className="text-sm font-bold text-[#0b0c10] tracking-tight truncate">
                  {BRAND.phone}
                </p>
                <p className="text-[10px] text-[#1a56ff] font-bold uppercase tracking-widest">24/7 Priority Support</p>
              </div>
            </div>
          </div>

          {/* Right Column: Minimalist Refined Form */}
          <div className="lg:col-span-1" /> {/* Spacer */}

          <div className="lg:col-span-6">
             <form className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  <div className="group relative">
                    <label className="absolute -top-6 left-0 text-[10px] font-bold uppercase tracking-widest text-zinc-400 trasition-all group-focus-within:text-[#1a56ff]">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter full name" 
                      className="w-full bg-transparent border-b border-zinc-200 py-4 focus:outline-none focus:border-[#1a56ff] transition-all duration-500 text-sm font-bold placeholder:text-zinc-300 placeholder:font-normal" 
                    />
                  </div>
                  <div className="group relative">
                    <label className="absolute -top-6 left-0 text-[10px] font-bold uppercase tracking-widest text-zinc-400 transition-all group-focus-within:text-[#1a56ff]">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="corporate@email.com" 
                      className="w-full bg-transparent border-b border-zinc-200 py-4 focus:outline-none focus:border-[#1a56ff] transition-all duration-500 text-sm font-bold placeholder:text-zinc-300 placeholder:font-normal" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  <div className="group relative">
                    <label className="absolute -top-6 left-0 text-[10px] font-bold uppercase tracking-widest text-zinc-400 transition-all group-focus-within:text-[#1a56ff]">Mobile Number</label>
                    <input 
                      type="tel" 
                      placeholder="+44 000 000 0000" 
                      className="w-full bg-transparent border-b border-zinc-200 py-4 focus:outline-none focus:border-[#1a56ff] transition-all duration-500 text-sm font-bold placeholder:text-zinc-300 placeholder:font-normal" 
                    />
                  </div>
                  <div className="group relative">
                    <label className="absolute -top-6 left-0 text-[10px] font-bold uppercase tracking-widest text-zinc-400 transition-all group-focus-within:text-[#1a56ff]">Infrastructure Need</label>
                    <select className="w-full bg-transparent border-b border-zinc-200 py-4 focus:outline-none focus:border-[#1a56ff] transition-all duration-500 text-sm font-bold appearance-none cursor-pointer">
                       <option>Select required service...</option>
                       <option>Urgent Priority</option>
                       <option>Business Accounts</option>
                       <option>Document & Legal</option>
                       <option>Van & Removals</option>
                       <option>Collection Only</option>
                       <option>Out-of-Hours Delivery</option>
                    </select>
                  </div>
                </div>
                
                <div className="group relative">
                   <label className="absolute -top-6 left-0 text-[10px] font-bold uppercase tracking-widest text-zinc-400 transition-all group-focus-within:text-[#1a56ff]">Project Particulars</label>
                   <textarea 
                     rows={4} 
                     placeholder="Describe your logistical requirements..." 
                     className="w-full bg-transparent border-b border-zinc-200 py-4 focus:outline-none focus:border-[#1a56ff] transition-all duration-500 text-sm font-bold resize-none placeholder:text-zinc-300 placeholder:font-normal" 
                   />
                </div>

                <div className="pt-4">
                  <button type="submit" className="group relative w-full lg:w-auto min-w-[280px] bg-[#0b0c10] text-white font-bold py-6 px-12 overflow-hidden transition-all duration-500 rounded-sm hover:-translate-y-1 hover:shadow-2xl">
                    <div className="absolute inset-0 w-0 bg-[#1a56ff] transition-all duration-500 group-hover:w-full" />
                    <span className="relative z-10 text-[11px] uppercase tracking-[0.4em] flex items-center justify-center gap-4">
                      Deploy Mission
                      <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
                    </span>
                  </button>
                  <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-widest mt-6 flex items-center gap-2">
                    <ShieldCheck size={12} className="text-[#1a56ff]" />
                    Encrypted SSL secure portal · Priority response enabled
                  </p>
                </div>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
