"use client";

import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { BRAND } from "@/lib/constants";

const pricingTiers = [
  {
    name: "Small Parcel",
    price: "From £35",
    desc: "Perfect for documents and small packages under 2kg.",
    features: ["Dedicated courier", "Real-time tracking", "Digital POD", "Insurance included"],
    cta: "Book Now"
  },
  {
    name: "Large Van",
    price: "From £85",
    desc: "Ideal for bulky items, furniture, or multiple pallet loads.",
    features: ["Large load capacity", "Expert tail-lift help", "Priority support", "Same-day collection"],
    cta: "Request Quote",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Bespoke",
    desc: "Fixed monthly rates for recurring business contracts.",
    features: ["Custom delivery map", "Dedicated account manager", "Volume discounts", "API integration"],
    cta: "Enquire Now"
  }
];

const Pricing = () => {
  return (
    <section className="py-24 md:py-32 bg-white flex justify-center" id="pricing">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 space-y-20">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full">
            <span className="text-[10px] font-bold text-blue-900 uppercase tracking-widest">Transparent Rates</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-blue-950 tracking-tighter leading-[0.95]">
            Simple, Honest <br />
            <span className="text-blue-600">Pricing Model</span>
          </h2>
          <p className="text-blue-900/40 text-lg md:text-xl font-medium tracking-tight max-w-2xl">
            No hidden fees. Just professional, reliable logistics at competitive market rates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-[2.5rem] p-10 flex flex-col justify-between transition-all border ${
                tier.popular ? "border-blue-600 bg-blue-50/30 ring-8 ring-blue-600/5" : "border-blue-100 bg-white"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-blue-600/20">
                  Most Popular
                </div>
              )}
              
              <div className="space-y-10">
                <div className="space-y-4">
                   <h3 className="text-xs font-bold uppercase tracking-widest text-blue-900/40">{tier.name}</h3>
                   <div className="flex items-baseline space-x-2">
                      <span className="text-5xl font-bold tracking-tighter text-blue-950">{tier.price}</span>
                      {tier.price !== "Bespoke" && <span className="text-sm text-blue-900/40 font-bold uppercase tracking-widest">/ del</span>}
                   </div>
                   <p className="text-sm text-blue-900/60 leading-relaxed font-medium pt-2">{tier.desc}</p>
                </div>

                <ul className="space-y-5">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-4">
                      <div className="h-6 w-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                        <Check size={14} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wide text-blue-900/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-12">
                <button
                  className={`flex items-center justify-center w-full py-5 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all ${
                    tier.popular 
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-600/20" 
                      : "bg-blue-50 text-blue-900 hover:bg-blue-100 border border-blue-100"
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
