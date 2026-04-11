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
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive logistics infrastructure engineered for professional scale."
      />
      
      <section className="py-24 md:py-32 bg-zinc-50/50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {serviceList.map((service, index) => (
              <div 
                key={index}
                className="group relative p-10 flex flex-col justify-between bg-white border border-zinc-100 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(0,0,0,0.05)] h-[420px]"
              >
                <div className="space-y-8 relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="h-16 w-16 rounded-2xl bg-[#1a56ff]/5 flex items-center justify-center text-[#1a56ff] group-hover:bg-[#1a56ff] group-hover:text-white transition-all duration-500">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 border border-zinc-100 px-4 py-1.5 rounded-full">{service.label}</span>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold tracking-tight text-[#0b0c10]">{service.title}</h3>
                    <p className="text-zinc-500 text-base leading-relaxed font-medium">{service.desc}</p>
                  </div>
                </div>
                
                <div className="relative z-10 mt-auto pt-8 flex items-center justify-between border-t border-zinc-50 transition-all duration-500 group-hover:border-zinc-100">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#1a56ff] font-bold">Inquiry Details</span>
                  <div className="h-12 w-12 rounded-full border border-zinc-100 flex items-center justify-center group-hover:border-[#1a56ff] group-hover:bg-[#1a56ff] transition-all duration-500 -rotate-45 group-hover:rotate-0">
                    <ArrowRight size={20} className="text-zinc-300 group-hover:text-white transition-colors" />
                  </div>
                </div>

                <Link href="/contact" className="absolute inset-0 z-20" />
              </div>
            ))}
            
            {/* CTA Card */}
            <div 
              className="group relative p-10 flex flex-col justify-center items-center text-center bg-[#0b0c10] rounded-[2.5rem] shadow-2xl transition-all duration-500 hover:-translate-y-2 h-[420px]"
            >
               <div className="absolute inset-0 bg-[#1a56ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <h3 className="text-3xl lg:text-4xl font-bold tracking-tighter text-white leading-tight mb-6">Need a <br/>Bespoke <br/>Plan?</h3>
               <p className="text-[10px] text-white/40 leading-relaxed font-bold uppercase tracking-[0.3em] px-4 mb-10">Custom infrastructure architecture available on request.</p>
               <Link 
                 href="/contact" 
                 className="relative z-10 px-10 py-5 bg-[#1a56ff] text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-[#0b0c10] transition-all shadow-xl shadow-blue-500/20"
               >
                 Request Quote
               </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
