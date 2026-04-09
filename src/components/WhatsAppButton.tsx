"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/constants";

const WhatsAppButton = () => {
  return (
    <a
      href={BRAND.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group lg:flex items-center space-x-3"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} fill="currentColor" />
      <span className="hidden lg:block text-[10px] font-bold uppercase tracking-widest">Chat with us</span>
      
      {/* Tooltip for mobile/tablet */}
      <span className="lg:hidden absolute bottom-full right-0 mb-2 whitespace-nowrap bg-zinc-900/80 backdrop-blur-md text-white text-[8px] font-bold uppercase tracking-widest px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
        WhatsApp Now
      </span>
    </a>
  );
};

export default WhatsAppButton;
