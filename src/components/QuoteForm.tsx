"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    details: ""
  });

  const services = [
    "Urgent and priority delivery",
    "Business courier accounts",
    "Document and legal delivery",
    "Man with a van / Removals",
    "Collection-only service"
  ];

  return (
    <div className="w-full bg-[#F8F9FA] p-8 md:p-12 rounded-[3rem] border border-blue-900/5 shadow-inner">
      <form className="space-y-8">
        
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className="text-[9px] font-bold text-blue-900/40 uppercase tracking-widest block ml-4">
              Full Name
            </label>
            <input 
              type="text" 
              placeholder="Enter full name"
              className="w-full bg-white border border-blue-900/5 rounded-2xl px-6 py-4 text-blue-950 placeholder:text-blue-900/20 focus:outline-none focus:border-blue-600/20 focus:ring-4 focus:ring-blue-600/5 transition-all font-medium text-sm"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="space-y-3">
            <label className="text-[9px] font-bold text-blue-900/40 uppercase tracking-widest block ml-4">
              Email Address
            </label>
            <input 
              type="email" 
              placeholder="your@email.com"
              className="w-full bg-white border border-blue-900/5 rounded-2xl px-6 py-4 text-blue-950 placeholder:text-blue-900/20 focus:outline-none focus:border-blue-600/20 focus:ring-4 focus:ring-blue-600/5 transition-all font-medium text-sm"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>

        {/* Mobile Number */}
        <div className="space-y-3">
          <label className="text-[9px] font-bold text-blue-900/40 uppercase tracking-widest block ml-4">
            Mobile Number
          </label>
          <input 
            type="tel" 
            placeholder="+44 000 000 0000"
            className="w-full bg-white border border-blue-900/5 rounded-2xl px-6 py-4 text-blue-950 placeholder:text-blue-900/20 focus:outline-none focus:border-blue-600/20 focus:ring-4 focus:ring-blue-600/5 transition-all font-medium text-sm"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>

        {/* Service Select */}
        <div className="space-y-3">
          <label className="text-[9px] font-bold text-blue-900/40 uppercase tracking-widest block ml-4">
            What do you need?
          </label>
          <div className="relative group">
            <select 
              className="w-full bg-white border border-blue-900/5 rounded-2xl px-6 py-4 text-blue-950 focus:outline-none focus:border-blue-600/20 focus:ring-4 focus:ring-blue-600/5 transition-all font-medium text-sm appearance-none cursor-pointer"
              value={formData.service}
              onChange={(e) => setFormData({...formData, service: e.target.value})}
            >
              <option value="" disabled>Select a service...</option>
              {services.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-blue-600">
              <ChevronDown size={16} />
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-3">
          <label className="text-[9px] font-bold text-blue-900/40 uppercase tracking-widest block ml-4">
            Extra Details
          </label>
          <textarea 
            placeholder="Tell us a bit more about what you're sending..."
            rows={4}
            className="w-full bg-white border border-blue-900/5 rounded-2xl px-6 py-4 text-blue-950 placeholder:text-blue-900/20 focus:outline-none focus:border-blue-600/20 focus:ring-4 focus:ring-blue-600/5 transition-all font-medium text-sm resize-none"
            value={formData.details}
            onChange={(e) => setFormData({...formData, details: e.target.value})}
          />
        </div>

        {/* Submit Button */}
        <button 
          className="w-full py-6 bg-blue-950 text-white rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-blue-900 transition-all shadow-xl shadow-blue-950/20"
        >
          Get Instant Quote <span>→</span>
        </button>

        {/* Form Footer */}
        <div className="flex justify-between items-center px-4 pt-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border border-blue-600/30 flex items-center justify-center">
              <div className="w-1 h-1 bg-blue-600 rounded-full" />
            </div>
            <span className="text-[8px] font-bold text-blue-900/30 uppercase tracking-widest">Encrypted SSL Secure Portal</span>
          </div>
          <span className="text-[8px] font-bold text-blue-900/30 uppercase tracking-widest">Priority Response Enabled</span>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
