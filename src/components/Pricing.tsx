"use client";

import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

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
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter italic uppercase text-[#0D1B3E]">Simple, Transparent <br className="hidden md:block" />
          <span className="not-italic text-accent">Pricing Model</span></h2>
          <p className="text-muted text-sm font-medium uppercase tracking-widest leading-loose">
            No hidden fees. No surprises. Just honest courier rates.
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
              className={`relative card-border p-8 flex flex-col justify-between hover:shadow-xl transition-all ${
                tier.popular ? "border-accent ring-4 ring-accent/5" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="space-y-8">
                <div className="space-y-2">
                   <h3 className="text-sm font-bold uppercase tracking-widest text-muted">{tier.name}</h3>
                   <div className="flex items-baseline space-x-1">
                      <span className="text-4xl font-bold tracking-tighter uppercase italic">{tier.price}</span>
                      {tier.price !== "Bespoke" && <span className="text-xs text-muted font-bold">/ delivery</span>}
                   </div>
                   <p className="text-xs text-muted leading-relaxed font-medium italic pt-2">{tier.desc}</p>
                </div>

                <ul className="space-y-4">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="h-5 w-5 bg-orange-50 text-accent rounded-full flex items-center justify-center shrink-0">
                        <Check size={12} />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wide text-[#0D1B3E]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-10">
                <Link
                  href="/contact"
                  className={`flex items-center justify-center w-full py-4 rounded-lg font-bold text-[10px] uppercase tracking-widest transition-all ${
                    tier.popular 
                      ? "bg-accent text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20" 
                      : "bg-zinc-50 text-[#0D1B3E] border border-border hover:bg-zinc-100"
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
            <Link href="/contact" className="text-xs font-bold uppercase tracking-widest text-[#0D1B3E] hover:text-accent border-b-2 border-accent/20 hover:border-accent transition-all pb-1">
                Get Your Custom Quote Directly
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
