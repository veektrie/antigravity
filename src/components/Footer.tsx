"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Globe, Share2, MessageSquare } from "lucide-react";
import { BRAND } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0c10] pt-24 pb-12 w-full max-w-[1920px] mx-auto overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Newsletter Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 pb-20 border-b border-white/10">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Subscribe to Our <br />
              <span className="text-[#1a56ff]">Newsletter</span>
            </h2>
          </div>
          <div className="w-full md:w-auto flex-grow max-w-lg md:ml-auto">
            <form className="relative flex items-center">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-5 pl-8 pr-40 text-white placeholder-white/40 focus:outline-none focus:border-[#1a56ff] transition-all text-sm font-medium"
              />
              <button 
                type="submit" 
                className="absolute right-2 top-2 bottom-2 bg-[#1a56ff] hover:bg-blue-700 text-white px-8 rounded-full font-bold text-[10px] uppercase tracking-widest transition-colors flex items-center gap-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 py-20 border-b border-white/10">
          
          {/* Col 1: Brand & Social */}
          <div className="space-y-8 pr-0 lg:pr-8">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="h-8 w-8 bg-[#1a56ff] flex items-center justify-center" style={{ clipPath: 'polygon(0 0, 70% 0, 100% 30%, 100% 100%, 0 100%)' }}>
                <div className="h-3 w-3 bg-white" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white uppercase">
                {BRAND.name}
              </span>
            </Link>
            <p className="text-[#9ca3af] text-sm leading-relaxed font-medium">
              We empower UK businesses with high-priority courier infrastructure. Reliable, responsive, and truly professional logistics.
            </p>
            <div className="flex space-x-3">
              {[Globe, Share2, MessageSquare].map((Icon, i) => (
                <Link key={i} href="#" className="h-10 w-10 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#1a56ff] hover:border-[#1a56ff] transition-all">
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Col 2: Useful Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-8 tracking-tight">Useful Links</h3>
            <ul className="grid grid-cols-2 gap-y-4">
              {["Home", "About Us", "Services", "Pricing", "Testimonials", "Contact", "F.A.Q", "Careers"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-[#9ca3af] text-sm hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Working Hours */}
          <div>
            <h3 className="text-white font-bold text-lg mb-8 tracking-tight">Working Hours</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-[#9ca3af] text-sm font-medium">Mon - Fri</span>
                <span className="text-white text-sm font-bold">8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-[#9ca3af] text-sm font-medium">Saturday</span>
                <span className="text-white text-sm font-bold">9:00 AM - 3:00 PM</span>
              </li>
              <li className="flex justify-between items-center pb-4">
                <span className="text-[#9ca3af] text-sm font-medium">Sunday</span>
                <span className="text-[#1a56ff] text-sm font-bold uppercase tracking-widest text-[10px]">On-Call Operations</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Say Hello */}
          <div>
            <h3 className="text-white font-bold text-lg mb-8 tracking-tight">Say Hello</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="mt-1 text-[#1a56ff]">
                  <MapPin size={20} />
                </div>
                <p className="text-[#9ca3af] text-sm leading-relaxed">
                  {BRAND.address}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-[#1a56ff]">
                  <Mail size={20} />
                </div>
                <Link href={`mailto:${BRAND.email}`} className="text-white font-bold text-base hover:text-[#1a56ff] transition-colors decoration-white/30 underline underline-offset-4">
                  {BRAND.email}
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-[#1a56ff]">
                  <Phone size={20} />
                </div>
                <Link href={`tel:${BRAND.phone}`} className="text-white font-bold text-base hover:text-[#1a56ff] transition-colors decoration-white/30 underline underline-offset-4">
                  {BRAND.phone}
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-[#9ca3af] font-medium">
          <p>
            &copy; {currentYear} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
