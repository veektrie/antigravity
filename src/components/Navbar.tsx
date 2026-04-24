"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Rocket } from "lucide-react";
import { BRAND } from "@/lib/constants";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? 'top-0 md:top-4' : 'top-0 md:top-6 lg:top-8'} px-0 md:px-8 lg:px-12`}>
      <nav
        className={`w-full max-w-[1400px] mx-auto transition-all duration-500 px-6 lg:px-10 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-xl border-b border-blue-900/10 md:border md:rounded-full shadow-md md:shadow-xl py-4" 
            : "bg-white/90 md:bg-white/80 backdrop-blur-md border-b border-blue-900/10 md:border md:rounded-full py-6 lg:py-8"
        }`}
      >
        <div className="flex justify-between items-center h-12">
          {/* Logo - Left */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-8 h-8 bg-blue-600 rotate-45 flex items-center justify-center">
                <div className="w-3 h-3 bg-white -rotate-45" />
              </div>
              <span className={`text-xl font-bold tracking-tighter uppercase whitespace-nowrap text-blue-900`}>
                {BRAND.name}
              </span>
            </Link>
          </div>

          {/* Desktop Menu - Center */}
          <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[10.5px] font-bold uppercase tracking-[0.1em] transition-colors ${
                  pathname === link.href 
                    ? "text-blue-600" 
                    : "text-blue-900/60 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action - Right */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="#quote-form"
              className="px-6 py-2.5 font-bold text-[10.5px] uppercase flex items-center gap-2 rounded-full transition-all bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20"
            >
              <span>Get quote</span>
              <span className="text-lg leading-none -mt-0.5">↗</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors text-blue-900`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
    </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-blue-950 z-50 transition-transform duration-500 lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-8 md:p-12 relative overflow-y-auto">
          <div className="flex justify-between items-center mb-16">
            <span className="text-white font-bold tracking-tighter uppercase text-lg">
              Menu.
            </span>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-3 bg-white/5 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              <X size={24} />
            </button>
          </div>

          <div className="space-y-8 mt-4">
             {navLinks.map((link, i) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center group"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className={`text-4xl md:text-5xl font-semibold tracking-tight transition-all duration-300 ${
                    pathname === link.href ? "text-white translate-x-2" : "text-white/60 group-hover:text-white group-hover:translate-x-3"
                  }`}>
                    {link.name}
                  </span>
                </Link>
              ))}
          </div>

          <div className="mt-auto pt-20 pb-8 space-y-10">
            <div className="h-px w-full bg-white/10" />
            
            <div className="flex flex-col gap-6">
              <div className="space-y-1">
                 <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">24/7 Dispatch</p>
                 <p className="text-2xl font-bold text-white tracking-tight">{BRAND.phone}</p>
              </div>
              
              <Link
                href="#quote-form"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-between px-6 py-5 bg-blue-600 text-white font-bold text-xs uppercase tracking-widest rounded-2xl active:scale-95 transition-transform"
              >
                <span>Get Quote</span>
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-lg leading-none -mt-0.5">↗</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
