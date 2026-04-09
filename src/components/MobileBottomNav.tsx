"use client";

import React from "react";
import { Phone, FileText } from "lucide-react";
import { BRAND } from "@/lib/constants";
import Link from "next/link";

const MobileBottomNav = () => {
  return (
    <div className="sticky-mobile-nav">
      <a
        href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
        className="flex items-center justify-center space-x-2 bg-zinc-900 text-white rounded-lg py-3 active:scale-95 transition-transform"
      >
        <Phone size={16} />
        <span className="text-[10px] font-bold uppercase tracking-widest">Call Now</span>
      </a>
      <Link
        href="/contact"
        className="flex items-center justify-center space-x-2 bg-accent text-white rounded-lg py-3 active:scale-95 transition-transform shadow-lg shadow-orange-500/20"
      >
        <FileText size={16} />
        <span className="text-[10px] font-bold uppercase tracking-widest">Get a Quote</span>
      </Link>
    </div>
  );
};

export default MobileBottomNav;
