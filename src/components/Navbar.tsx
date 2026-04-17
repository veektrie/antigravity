"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Rocket } from "lucide-react";

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
    <div className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'top-2 md:top-4' : 'top-4 md:top-6 lg:top-8'} px-4 md:px-8 lg:px-12`}>
      <nav
        className={`w-full max-w-[1400px] mx-auto rounded-full transition-all duration-500 px-6 lg:px-10 border ${
          scrolled 
            ? "bg-white/95 backdrop-blur-xl border-zinc-200 shadow-xl py-3" 
            : "bg-white/80 backdrop-blur-md border-[#1e2b4d]/10 shadow-sm py-4 lg:py-5"
        }`}
      >
        <div className="flex justify-between items-center h-12">
          {/* Logo - Left */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <Rocket className={`h-6 w-6 transition-transform group-hover:rotate-12 text-[#ea580c]`} />
              <span className={`text-xl font-bold tracking-tighter uppercase whitespace-nowrap text-[#1e2b4d]`}>
                Eben Logistics
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
                    ? "text-[#ea580c]" 
                    : "text-[#1e2b4d]/60 hover:text-[#ea580c]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action - Right */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-5 py-2.5 font-bold text-[10.5px] uppercase flex items-center gap-2 rounded-full transition-all bg-[#ea580c] text-white hover:bg-[#1e2b4d] shadow-lg shadow-[#ea580c]/20"
            >
              <span>Get quote</span>
              <span className="text-lg leading-none -mt-0.5">↗</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors text-[#1e2b4d]`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-border mt-4 animate-in slide-in-from-top-4 duration-200">
          <div className="px-6 py-12 space-y-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-xs font-bold uppercase tracking-[0.2em] ${
                  pathname === link.href ? "text-accent" : "text-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block flex items-center justify-center gap-2 w-full py-4 bg-accent text-white font-bold text-[11px] uppercase tracking-wider rounded-full shadow-lg shadow-blue-500/20"
            >
              <span>Get quote</span>
              <span className="text-lg leading-none -mt-0.5">↗</span>
            </Link>
          </div>
        </div>
      )}
      </nav>
    </div>
  );
};

export default Navbar;
