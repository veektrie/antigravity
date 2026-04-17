"use client";

import React from "react";
import { ArrowRight, ShieldCheck, ChevronDown, MessageSquare } from "lucide-react";
import { BRAND } from "@/lib/constants";

const QuoteForm = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden" id="quote-form">
      {/* Subtle decorative glow */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#ea580c]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Contact & Information */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 border border-[#1e2b4d]/10 rounded-full bg-[#f8fafc]">
                <div className="h-6 w-6 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <MessageSquare size={12} className="text-[#ea580c]" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1e2b4d]">Request a Quote</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] text-[#1e2b4d]">
                CONNECT <br/>
                WITH OUR <br/>
                <span className="text-[#ea580c]">LOGISTICS</span> <br/>
                EXPERTS.
              </h2>
              <p className="text-[#1e2b4d]/60 text-lg leading-relaxed max-w-md font-medium">
                Our team is standing by to architect your mission-critical delivery strategy. Experience the next generation of logistics infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-4">
              <div className="space-y-3">
                <h4 className="text-[10px] font-bold text-[#1e2b4d]/40 uppercase tracking-widest">Global HQ</h4>
                <p className="text-sm font-bold text-[#1e2b4d] leading-relaxed uppercase tracking-tight">
                  {BRAND.address}
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-[10px] font-bold text-[#1e2b4d]/40 uppercase tracking-widest">Direct Line</h4>
                <p className="text-sm font-bold text-[#1e2b4d] tracking-tight">
                  {BRAND.phone}
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ea580c] animate-pulse" />
                  <p className="text-[10px] text-[#ea580c] font-bold uppercase tracking-widest">24/7 Priority Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Right Column: Minimalist Refined Form */}
          <div className="lg:col-span-6 bg-[#f8fafc] border border-[#1e2b4d]/5 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-xl shadow-black/[0.02]">
             <form className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  <div className="group relative">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1e2b4d]/40 mb-2 block transition-colors group-focus-within:text-[#ea580c]">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter full name" 
                      className="w-full bg-white border border-[#1e2b4d]/5 rounded-xl px-5 py-4 focus:outline-none focus:border-[#ea580c] focus:ring-4 focus:ring-[#ea580c]/5 transition-all text-base font-bold text-[#1e2b4d] shadow-sm" 
                    />
                  </div>
                  <div className="group relative">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1e2b4d]/40 mb-2 block transition-colors group-focus-within:text-[#ea580c]">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="corporate@email.com" 
                      className="w-full bg-white border border-[#1e2b4d]/5 rounded-xl px-5 py-4 focus:outline-none focus:border-[#ea580c] focus:ring-4 focus:ring-[#ea580c]/5 transition-all text-base font-bold text-[#1e2b4d] shadow-sm" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  <div className="group relative">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1e2b4d]/40 mb-2 block transition-colors group-focus-within:text-[#ea580c]">Mobile Number</label>
                    <input 
                      type="tel" 
                      placeholder="+44 000 000 0000" 
                      className="w-full bg-white border border-[#1e2b4d]/5 rounded-xl px-5 py-4 focus:outline-none focus:border-[#ea580c] focus:ring-4 focus:ring-[#ea580c]/5 transition-all text-base font-bold text-[#1e2b4d] shadow-sm" 
                    />
                  </div>
                  <div className="group relative">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1e2b4d]/40 mb-2 block transition-colors group-focus-within:text-[#ea580c]">Infrastructure Need</label>
                    <div className="relative">
                      <select className="w-full bg-white border border-[#1e2b4d]/5 rounded-xl pl-5 pr-12 py-4 focus:outline-none focus:border-[#ea580c] transition-all text-base font-bold text-[#1e2b4d] appearance-none cursor-pointer shadow-sm">
                        <option>Select required service...</option>
                        <option>Urgent Priority</option>
                        <option>Business Accounts</option>
                        <option>Document & Legal</option>
                        <option>Van & Removals</option>
                        <option>Collection Only</option>
                        <option>Out-of-Hours Delivery</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#ea580c]">
                        <ChevronDown size={18} />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="group relative">
                   <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1e2b4d]/40 mb-2 block transition-colors group-focus-within:text-[#ea580c]">Project Particulars</label>
                   <textarea 
                     rows={3} 
                     placeholder="Describe your logistical requirements..." 
                     className="w-full bg-white border border-[#1e2b4d]/5 rounded-xl px-5 py-4 focus:outline-none focus:border-[#ea580c] focus:ring-4 focus:ring-[#ea580c]/5 transition-all text-base font-bold text-[#1e2b4d] resize-none shadow-sm" 
                   />
                </div>

                <div className="pt-4">
                  <button type="submit" className="group relative w-full bg-[#1e2b4d] text-white font-bold py-6 rounded-xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-[#1e2b4d]/20 active:scale-[0.98]">
                    <div className="absolute inset-0 w-0 bg-[#ea580c] transition-all duration-500 ease-in-out group-hover:w-full" />
                    <span className="relative z-10 text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4">
                      Get instant quote
                      <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                    </span>
                  </button>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-10 opacity-40">
                    <p className="text-[8px] font-bold uppercase tracking-[0.25em] flex items-center gap-2 text-[#1e2b4d]">
                      <ShieldCheck size={12} className="text-[#ea580c]" />
                      ENCRYPTED SSL SECURE PORTAL
                    </p>
                    <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#1e2b4d]">
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
