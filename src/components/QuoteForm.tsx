"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { BRAND } from "@/lib/constants";

const QuoteForm = () => {
  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden w-full max-w-[1920px] mx-auto">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Contact Typography & Details */}
          <div className="space-y-16">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2">
                <span className="h-2 w-2 bg-[#1a56ff] rounded-full"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0b0c10]/50">Contact Us</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tight leading-[1.05] text-[#0b0c10]">
                Get In Touch With <br />
                <span className="text-[#1a56ff]">Our Experts</span>
              </h2>
              <p className="text-[#64748b] text-base md:text-lg leading-relaxed max-w-lg font-medium">
                Ready to streamline your logistics? Reach out to our team for a personalized quote or to discuss how we can help your business grow.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full border border-[#e2e8f0] flex items-center justify-center text-[#1a56ff] mb-6">
                   <Phone size={20} />
                </div>
                <h4 className="text-xl font-bold text-[#0b0c10]">Call Us</h4>
                <Link href={`tel:${BRAND.phone}`} className="text-[#64748b] font-medium hover:text-[#1a56ff] transition-colors block">
                  {BRAND.phone}
                </Link>
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#1a56ff]">24/7 Support</p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full border border-[#e2e8f0] flex items-center justify-center text-[#1a56ff] mb-6">
                   <Mail size={20} />
                </div>
                <h4 className="text-xl font-bold text-[#0b0c10]">Email Us</h4>
                <Link href={`mailto:${BRAND.email}`} className="text-[#64748b] font-medium hover:text-[#1a56ff] transition-colors block">
                  {BRAND.email}
                </Link>
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#1a56ff]">Reply in 1hr</p>
              </div>
            </div>
          </div>

          {/* Right Column: Delivar Beveled Quote Form */}
          <div 
            className="bg-[#0b0c10] p-10 md:p-14 lg:p-16 relative w-full"
            style={{
              borderRadius: '40px',
              clipPath: 'polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 0 100%)'
            }}
          >
             <h3 className="text-3xl font-bold text-white mb-10 tracking-tight">Request a Quote</h3>
             
             <form className="space-y-6 relative z-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-white/40 focus:outline-none focus:border-[#1a56ff] transition-all font-medium" 
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-white/40 focus:outline-none focus:border-[#1a56ff] transition-all font-medium" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-white/40 focus:outline-none focus:border-[#1a56ff] transition-all font-medium" 
                    />
                  </div>
                  <div>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white/40 focus:text-white focus:outline-none focus:border-[#1a56ff] transition-all font-medium appearance-none">
                       <option value="" disabled selected>Service Required</option>
                       <option value="urgent" className="text-black">Urgent Delivery</option>
                       <option value="business" className="text-black">Business Account</option>
                       <option value="freight" className="text-black">Freight Forwarding</option>
                    </select>
                  </div>
                </div>
                
                <div>
                   <textarea 
                     rows={4} 
                     placeholder="Tell us about the shipment size, destination, and timeline..." 
                     className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-white/40 focus:outline-none focus:border-[#1a56ff] transition-all font-medium resize-none" 
                   />
                </div>
                
                <button type="submit" className="w-full bg-white text-[#0b0c10] font-bold py-5 rounded-full hover:bg-[#1a56ff] hover:text-white transition-all active:scale-95 flex items-center justify-center gap-3 mt-4">
                   <span className="uppercase text-[11px] tracking-widest">Submit Request</span>
                   <ArrowRight size={16} />
                </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
