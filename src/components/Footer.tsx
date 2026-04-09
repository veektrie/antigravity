import React from "react";
import Link from "next/link";
import { Rocket, Mail, Phone, MapPin, Globe, Share2, MessageSquare } from "lucide-react";
import { BRAND } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border pt-24 pb-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2 group">
              <Rocket className="h-6 w-6 text-accent group-hover:rotate-12 transition-all" />
              <span className="text-xl font-bold tracking-tighter uppercase">
                {BRAND.name}
              </span>
            </Link>
            <p className="text-muted text-xs leading-relaxed font-medium capitalize italic">
              Empowering UK businesses with high-priority courier infrastructure. Reliable, responsive, and truly professional logistics.
            </p>
            <div className="flex space-x-4">
              {[Globe, Share2, MessageSquare].map((Icon, i) => (
                <Link key={i} href="#" className="h-8 w-8 border border-border rounded-lg flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all">
                  <Icon size={14} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#0D1B3E] mb-8">Navigation</h3>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                    className="text-[10px] font-bold uppercase tracking-widest text-muted hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Info */}
          <div className="space-y-8">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#0D1B3E]">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-xs text-muted font-medium italic">
                <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>{BRAND.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-xs text-muted font-bold">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <span>{BRAND.phone}</span>
              </li>
              <li className="flex items-center space-x-3 text-xs text-muted">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <span className="font-medium lowercase">{BRAND.email}</span>
              </li>
            </ul>
          </div>

          {/* Status & Trust */}
          <div className="space-y-8 text-right md:text-left">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#0D1B3E]">Status</h3>
            <div className="inline-flex items-center space-x-2 px-3 py-1 border border-border rounded-full bg-zinc-50">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-tighter text-foreground">Operational</span>
            </div>
            <p className="text-[10px] text-muted font-bold uppercase tracking-[0.2em] italic">
              Premium Courier Network
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
          <p>
            &copy; {currentYear} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <Link href="#" className="hover:text-accent">Policy</Link>
            <Link href="#" className="hover:text-accent">Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
