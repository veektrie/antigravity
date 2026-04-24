"use client";

import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { BRAND } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-white flex flex-col items-center">
      {/* Pre-footer CTA Block - Updated to Template */}
      <div className="w-full max-w-[1400px] px-6 md:px-12 lg:px-16 relative z-20 -mb-32">
        <div className="bg-blue-950 rounded-[3rem] p-12 md:p-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 relative overflow-hidden shadow-2xl border border-white/5">
          
          {/* Left Content */}
          <div className="relative z-10 space-y-8 max-w-2xl">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] uppercase">
              Ready to get <br />
              started?
            </h2>
            <div className="space-y-2">
              <p className="text-blue-200/60 text-lg md:text-xl font-medium">
                Join hundreds of businesses trusting {BRAND.name}.
              </p>
              <p className="text-blue-200/40 text-sm font-medium">
                Have doubts? <Link href="#faq" className="text-white underline underline-offset-4 decoration-blue-600">Check our FAQ here.</Link>
              </p>
            </div>
            <Link href="#quote-form" className="inline-block">
              <button className="bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 flex items-center gap-2">
                Get quote <span>→</span>
              </button>
            </Link>
          </div>

          {/* Right Features List */}
          <div className="relative z-10 space-y-6 lg:border-l lg:border-white/10 lg:pl-16">
            {[
              "Delivery in 24 hours",
              "Real-time GPS tracking",
              "No hidden fees or setup"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-4 text-white">
                <Check size={20} className="text-blue-400" />
                <span className="text-lg md:text-xl font-medium tracking-tight">{feature}</span>
              </div>
            ))}
          </div>

          {/* Subtle Ambient Background */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
        </div>
      </div>

      {/* Main Footer Section */}
      <footer className="w-full bg-black pt-52 pb-12 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 pb-20">
            
            {/* Brand & Contact Column */}
            <div className="lg:col-span-5 space-y-12">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-600 rotate-45" />
                <span className="text-2xl font-bold text-white tracking-tighter uppercase">
                  {BRAND.name}
                </span>
              </div>
              
              <div className="space-y-2 text-gray-500 font-medium text-sm leading-relaxed max-w-xs">
                <p>205 Regent Street</p>
                <p>4th Floor Office</p>
                <p>London, England W1B 4HB</p>
                <p>United Kingdom</p>
              </div>

              <div className="flex flex-wrap gap-12">
                <div className="space-y-2">
                  <p className="text-gray-600 text-xs font-bold uppercase tracking-widest">Phone</p>
                  <p className="text-white font-bold">{BRAND.phone}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600 text-xs font-bold uppercase tracking-widest">Email</p>
                  <p className="text-white font-bold">{BRAND.email}</p>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12">
              <div className="space-y-6">
                <h3 className="text-gray-600 text-xs font-bold uppercase tracking-widest">Quick links</h3>
                <ul className="space-y-4">
                  {["Pricing", "Resources", "About us", "FAQ", "Contact us"].map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-white/60 hover:text-blue-400 transition-colors text-sm font-medium">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-gray-600 text-xs font-bold uppercase tracking-widest">Social</h3>
                <ul className="space-y-4">
                  {["Facebook", "Instagram", "LinkedIn", "Twitter", "Youtube"].map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-white/60 hover:text-blue-400 transition-colors text-sm font-medium">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-gray-600 text-xs font-bold uppercase tracking-widest">Legal</h3>
                <ul className="space-y-4">
                  {["Terms of service", "Privacy policy", "Cookie policy"].map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-white/60 hover:text-blue-400 transition-colors text-sm font-medium">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Copyright Bar */}
          <div className="pt-12 border-t border-white/5 flex justify-center">
            <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em]">
              © {currentYear} {BRAND.name}. All rights reserved.
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;
