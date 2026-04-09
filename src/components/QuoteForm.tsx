"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { BRAND } from "@/lib/constants";

const QuoteForm = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="h-px w-8 bg-accent" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Contact Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none text-[#0D1B3E] uppercase italic">
                GET IN TOUCH WITH <br className="hidden md:block" />
                <span className="not-italic text-[#0D1B3E]">OUR EXPERTS</span>
              </h2>
              <p className="text-muted text-sm leading-relaxed max-w-md">
                Ready to streamline your logistics? Reach out to our team for a personalized quote or to discuss how we can help your business grow.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="h-10 w-10 border border-border rounded-full flex items-center justify-center shrink-0 bg-white group-hover:border-accent transition-colors">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                   <h4 className="text-sm font-bold text-[#0D1B3E]">Our Location</h4>
                   <p className="text-xs text-muted leading-relaxed uppercase">
                     {BRAND.address}
                   </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="h-10 w-10 border border-border rounded-full flex items-center justify-center shrink-0 bg-white group-hover:border-accent transition-colors">
                  <Phone size={18} className="text-accent" />
                </div>
                <div>
                   <h4 className="text-sm font-bold text-[#0D1B3E]">Call Us Anytime</h4>
                   <p className="text-xs text-muted font-bold tracking-tight px-1 uppercase leading-relaxed">
                     {BRAND.phone}<br />
                     <span className="font-normal normal-case italic">24/7 dedicated support</span>
                   </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="h-10 w-10 border border-border rounded-full flex items-center justify-center shrink-0 bg-white group-hover:border-accent transition-colors">
                  <Mail size={18} className="text-accent" />
                </div>
                <div>
                   <h4 className="text-sm font-bold text-[#0D1B3E]">Email Address</h4>
                   <p className="text-xs text-muted leading-relaxed lowercase font-medium">
                     {BRAND.email}<br />
                     <span className="font-normal normal-case italic">We typically reply within 1 hour</span>
                   </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="h-10 w-10 border border-border rounded-full flex items-center justify-center shrink-0 bg-white group-hover:border-accent transition-colors">
                  <Clock size={18} className="text-accent" />
                </div>
                <div>
                   <h4 className="text-sm font-bold text-[#0D1B3E]">Working Hours</h4>
                   <p className="text-xs text-muted leading-relaxed uppercase font-bold">
                     Mon - Fri: 8:00 AM - 6:00 PM<br />
                     Sat & Sun: On-call operations
                   </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Form Card */}
          <div className="lg:col-span-7 bg-[#F7F9FC] rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-border relative overflow-hidden">
             {/* Simple decorative circle from screenshot */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#FEE4D6]/50 rounded-full -mr-12 -mt-12" />
             
             <h3 className="text-2xl font-bold text-[#0D1B3E] mb-10 uppercase tracking-tighter italic">REQUEST A FREE QUOTE</h3>
             
             <form className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0D1B3E]">Full Name *</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-white border border-border rounded-xl py-4 px-6 focus:outline-none focus:border-orange-500 transition-all text-xs" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0D1B3E]">Email Address *</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-white border border-border rounded-xl py-4 px-6 focus:outline-none focus:border-orange-500 transition-all text-xs" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0D1B3E]">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+44 161 123 4567" 
                      className="w-full bg-white border border-border rounded-xl py-4 px-6 focus:outline-none focus:border-orange-500 transition-all text-xs" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0D1B3E]">Service Required *</label>
                    <select className="w-full bg-white border border-border rounded-xl py-4 px-6 focus:outline-none focus:border-orange-500 transition-all text-xs appearance-none">
                       <option>Select a service...</option>
                       <option>Urgent Delivery</option>
                       <option>Business Account</option>
                       <option>Large Removals</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0D1B3E]">Additional Details</label>
                   <textarea 
                     rows={5} 
                     placeholder="Tell us about the shipment size, destination, timeline, etc." 
                     className="w-full bg-white border border-border rounded-xl py-4 px-6 focus:outline-none focus:border-orange-500 transition-all text-xs" 
                   />
                </div>

                {/* Security Check Mockup */}
                <div className="p-4 bg-white border border-border rounded-xl flex items-center justify-between">
                   <div className="flex items-center space-x-3">
                      <div className="h-5 w-5 border-2 border-border rounded flex items-center justify-center">
                        <div className="h-2 w-2 bg-green-500 rounded-full" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold">Standard reCAPTCHA protection</p>
                        <button type="button" className="text-[10px] text-blue-600 underline">Privacy Path</button>
                      </div>
                   </div>
                   <div className="text-right">
                      <p className="text-[8px] font-bold tracking-tighter uppercase italic">GOOGLE</p>
                      <p className="text-[6px] text-muted uppercase">Terms • Privacy</p>
                   </div>
                </div>
                
                <button type="submit" className="w-full bg-[#FFA07A] text-white font-bold py-5 rounded-xl hover:bg-orange-500 transition-all active:scale-95 text-sm uppercase tracking-widest shadow-lg shadow-orange-500/20">
                   Submit Request
                </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
