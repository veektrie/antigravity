"use client";

import React from "react";
import { Utensils, ShoppingBag, Stethoscope, Ticket, HardHat, Store } from "lucide-react";
import { motion } from "framer-motion";
import { INDUSTRIES } from "@/lib/constants";

const iconMap: Record<string, any> = {
  Utensils,
  ShoppingBag,
  Stethoscope,
  Ticket,
  HardHat,
  Store,
};

const Industries = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter italic">
            WE SERVE BUSINESSES ACROSS <br className="hidden md:block" />
            <span className="not-italic text-accent">EVERY INDUSTRY</span>
          </h2>
          <p className="text-muted text-sm font-medium uppercase tracking-widest leading-loose max-w-2xl mx-auto">
            From critical healthcare supplies to site-ready construction materials, we handle the unique logistics challenges of every sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((industry, i) => {
            const Icon = iconMap[industry.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card-border p-8 hover:border-accent group transition-all"
              >
                <div className="h-12 w-12 bg-zinc-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-3">{industry.name}</h3>
                <p className="text-xs text-muted leading-relaxed font-medium capitalize italic">
                  {industry.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
