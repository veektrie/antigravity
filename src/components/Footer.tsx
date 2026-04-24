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
        <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 relative overflow-hidden shadow-2xl shadow-blue-900/20 border border-blue-500">
          
          {/* Left Content */}
          <div className="relative z-10 space-y-8 max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Let's get your delivery sorted.
            </h2>
            <div className="space-y-4">
              <p className="text-blue-100 text-lg md:text-xl font-medium">
                Join hundreds of people and businesses who trust {BRAND.name} every day.
              </p>
              <p className="text-blue-200/80 text-sm font-medium">
                Still have questions? <Link href="#faq" className="text-white font-bold underline underline-offset-4 hover:text-blue-100 transition-colors">Read our FAQ.</Link>
              </p>
            </div>
            <Link href="#quote-form" className="inline-block">
              <button className="bg-white text-blue-950 px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/10 flex items-center gap-4">
                Get a free quote <span>→</span>
              </button>
            </Link>
          </div>

          {/* Right Features List */}
          <div className="relative z-10 space-y-6 lg:border-l lg:border-white/20 lg:pl-16">
            {[
              "Delivered within 24 hours",
              "Track your driver live",
              "Zero hidden fees"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-4 text-white">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Check size={16} className="text-white" />
                </div>
                <span className="text-lg md:text-xl font-medium tracking-tight">{feature}</span>
              </div>
            ))}
          </div>

          {/* Subtle Ambient Background */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -mr-64 -mt-64 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/50 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none" />
        </div>
      </div>

      {/* Main Footer Section */}
      <footer className="w-full bg-blue-950 pt-52 pb-12 relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.05)_0%,transparent_60%)] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 pb-20">
            
            {/* Brand & Contact Column */}
            <div className="lg:col-span-5 space-y-12">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-900/50">
                  <div className="w-3 h-3 bg-white rounded-sm rotate-45" />
                </div>
                <span className="text-2xl font-extrabold text-white tracking-tighter uppercase">
                  {BRAND.name}
                </span>
              </div>
              
              <div className="space-y-1 text-blue-200/50 font-medium text-sm leading-relaxed max-w-xs">
                <p>205 Regent Street, 4th Floor</p>
                <p>London, W1B 4HB</p>
                <p>United Kingdom</p>
              </div>

              <div className="flex flex-wrap gap-12">
                <div className="space-y-2">
                  <p className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">Priority Line</p>
                  <p className="text-white font-bold tracking-tight">{BRAND.phone}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">Dispatch Email</p>
                  <p className="text-white font-bold tracking-tight">{BRAND.email}</p>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12">
              <div className="space-y-8">
                <h3 className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">Platform</h3>
                <ul className="space-y-4">
                  {[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: "About Us", href: "/about" },
                    { label: "Contact", href: "/contact" },
                  ].map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-blue-100/70 hover:text-white hover:translate-x-1 inline-block transition-all text-sm font-medium">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                <h3 className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">Network</h3>
                <ul className="space-y-4">
                  {[
                    { label: "LinkedIn", href: "#" },
                    { label: "X (Twitter)", href: "#" },
                    { label: "Instagram", href: "#" }
                  ].map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-blue-100/70 hover:text-white hover:translate-x-1 inline-block transition-all text-sm font-medium">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                <h3 className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">Legal</h3>
                <ul className="space-y-4">
                  {[
                    { label: "Terms of Service", href: "#" },
                    { label: "Privacy Policy", href: "#" },
                    { label: "Cookie Policy", href: "#" }
                  ].map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-blue-100/70 hover:text-white hover:translate-x-1 inline-block transition-all text-sm font-medium">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Copyright Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-blue-200/40 text-[10px] font-bold uppercase tracking-[0.2em]">
              © {currentYear} {BRAND.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-blue-200/40 text-[10px] font-bold uppercase tracking-widest">All systems operational</span>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;
