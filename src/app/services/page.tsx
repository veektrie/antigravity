import React from "react";
import PageHeader from "@/components/PageHeader";
import { Clock, Briefcase, FileText, Truck, Layers, RotateCw, Moon, ArrowRight } from "lucide-react";
import Link from "next/link";

const serviceList = [
  {
    title: "Urgent Delivery",
    label: "PRIORITY",
    desc: "Immediate pickup and direct transport for critical items. No waiting, no stops.",
    icon: Clock
  },
  {
    title: "Business Accounts",
    label: "COMMERCIAL",
    desc: "Tailored logistics infrastructure for high-volume corporate partners.",
    icon: Briefcase
  },
  {
    title: "Legal & Documents",
    label: "CONFIDENTIAL",
    desc: "Secure handling for sensitive legal paperwork and digital media.",
    icon: FileText
  },
  {
    title: "Man with a Van",
    label: "REMOVALS",
    desc: "Professional relocation services for offices and premium residential units.",
    icon: Truck
  },
  {
    title: "Multi-drop Routes",
    label: "OPTIMIZATION",
    desc: "High-density delivery maps designed to save time and reduce carbon.",
    icon: Layers
  },
  {
    title: "Collection Only",
    label: "EASY PICKUP",
    desc: "Need something picked up and held? Our nationwide network of hubs is ready.",
    icon: RotateCw
  },
  {
    title: "24/7 / Weekend",
    label: "ALWAYS READY",
    desc: "Logistics that don't sleep. Full weekend and evening capacity.",
    icon: Moon
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive logistics infrastructure engineered for professional scale."
      />
      
      <section className="section-padding max-w-7xl mx-auto space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => (
            <div 
              key={index}
              className="card-border p-8 space-y-8 flex flex-col justify-between group hover:border-accent transition-all"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="h-10 w-10 bg-zinc-50 border border-border rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted italic">{service.label}</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight uppercase italic text-[#0D1B3E]">{service.title}</h3>
                <p className="text-xs text-muted leading-relaxed font-medium capitalize italic">{service.desc}</p>
              </div>
              
              <div className="pt-6 border-t border-border flex justify-end">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-accent hover:translate-x-1 transition-transform"
                >
                  <span>Book Now</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
          
          <div className="p-8 bg-zinc-950 text-white rounded-2xl flex flex-col items-center justify-center text-center space-y-8 border border-white/10">
             <h3 className="text-2xl font-bold tracking-tighter uppercase italic italic">Bespoke Solutions.</h3>
             <p className="text-[10px] text-white/60 leading-relaxed font-bold uppercase px-4 truncate">Custom logistics map integration available.</p>
             <Link 
               href="/contact" 
               className="px-8 py-3 bg-accent text-white font-bold text-[10px] uppercase tracking-widest rounded-lg shadow-lg shadow-orange-500/10 hover:bg-orange-600 transition-all"
             >
               Enquire Now
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
