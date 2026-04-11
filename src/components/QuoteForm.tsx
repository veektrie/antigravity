"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck } from "lucide-react";
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
             <form className="space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                  <div className="group relative">
                    <label className="absolute -top-7 left-0 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400 transition-all duration-500 group-focus-within:text-[#1a56ff] group-focus-within:-top-8">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter full name" 
                      className="w-full bg-transparent border-b border-zinc-100 py-5 focus:outline-none focus:border-[#1a56ff] transition-all duration-700 text-sm font-bold placeholder:text-zinc-200 placeholder:font-normal" 
                    />
                  </div>
                  <div className="group relative">
                    <label className="absolute -top-7 left-0 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400 transition-all duration-500 group-focus-within:text-[#1a56ff] group-focus-within:-top-8">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="corporate@email.com" 
                      className="w-full bg-transparent border-b border-zinc-100 py-5 focus:outline-none focus:border-[#1a56ff] transition-all duration-700 text-sm font-bold placeholder:text-zinc-200 placeholder:font-normal" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                  <div className="group relative">
                    <label className="absolute -top-7 left-0 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400 transition-all duration-500 group-focus-within:text-[#1a56ff] group-focus-within:-top-8">Mobile Number</label>
                    <input 
                      type="tel" 
                      placeholder="+44 000 000 0000" 
                      className="w-full bg-transparent border-b border-zinc-100 py-5 focus:outline-none focus:border-[#1a56ff] transition-all duration-700 text-sm font-bold placeholder:text-zinc-200 placeholder:font-normal" 
                    />
                  </div>
                  <div className="group relative">
                    <label className="absolute -top-7 left-0 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400 transition-all duration-500 group-focus-within:text-[#1a56ff] group-focus-within:-top-8">Infrastructure Need</label>
                    <select className="w-full bg-transparent border-b border-zinc-100 py-5 focus:outline-none focus:border-[#1a56ff] transition-all duration-700 text-sm font-bold appearance-none cursor-pointer">
                       <option>Select required service...</option>
                       <option>Urgent Priority</option>
                       <option>Business Accounts</option>
                       <option>Document & Legal</option>
                       <option>Van & Removals</option>
                       <option>Collection Only</option>
                       <option>Out-of-Hours Delivery</option>
                    </select>
                    <div className="absolute right-0 bottom-6 pointer-events-none opacity-20">
                      <Clock size={14} />
                    </div>
                  </div>
                </div>
                
                <div className="group relative">
                   <label className="absolute -top-7 left-0 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400 transition-all duration-500 group-focus-within:text-[#1a56ff] group-focus-within:-top-8">Project Particulars</label>
                   <textarea 
                     rows={3} 
                     placeholder="Describe your logistical requirements..." 
                     className="w-full bg-transparent border-b border-zinc-100 py-5 focus:outline-none focus:border-[#1a56ff] transition-all duration-700 text-sm font-bold resize-none placeholder:text-zinc-200 placeholder:font-normal" 
                   />
                </div>

                <div className="pt-8">
                  <button type="submit" className="group relative w-full lg:w-auto min-w-[320px] bg-[#0b0c10] text-white font-bold py-7 px-14 overflow-hidden transition-all duration-700 rounded-sm hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
                    <div className="absolute inset-0 w-0 bg-[#1a56ff] transition-all duration-700 ease-in-out group-hover:w-full" />
                    <span className="relative z-10 text-[10px] uppercase tracking-[0.5em] flex items-center justify-center gap-6">
                      DEPLOY MISSION
                      <ArrowRight size={18} className="group-hover:translate-x-3 transition-transform duration-700" />
                    </span>
                  </button>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-10">
                    <p className="text-[8px] text-zinc-300 font-bold uppercase tracking-[0.25em] flex items-center gap-2">
                      <ShieldCheck size={12} className="text-[#1a56ff]" />
                      ENCRYPTED SSL SECURE PORTAL
                    </p>
                    <div className="hidden sm:block h-px w-8 bg-zinc-100" />
                    <p className="text-[8px] text-zinc-300 font-bold uppercase tracking-[0.25em]">
                      PRIORITY RESPONSE ENABLED
                    </p>
                  </div>
                </div>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
