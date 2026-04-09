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
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-border py-4" : "bg-white border-b border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex justify-between items-center h-12">
          {/* Logo - Left */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <Rocket className="h-6 w-6 text-accent group-hover:rotate-12 transition-transform" />
              <span className="text-xl font-bold tracking-tighter uppercase whitespace-nowrap">
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
                className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors hover:text-accent ${
                  pathname === link.href ? "text-accent" : "text-zinc-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action - Right */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="px-6 py-3 bg-accent text-white font-bold text-[10px] uppercase tracking-widest rounded-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/10"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
              className="block w-full py-4 bg-accent text-white font-bold text-[10px] uppercase tracking-widest rounded-lg shadow-lg shadow-orange-500/10"
            >
              Get a Quote Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
