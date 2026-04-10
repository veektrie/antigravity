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
    <div className="flex flex-col min-h-screen bg-[#f9f9fb]">
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive logistics infrastructure engineered for professional scale."
      />
      
      <section className="py-24 md:py-32 w-full max-w-[1920px] mx-auto overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {serviceList.map((service, index) => (
              <div 
                key={index}
                className="group relative p-8 lg:p-10 flex flex-col justify-between bg-[#0b0c10] shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 h-[380px]"
                style={{
                  borderRadius: '40px',
                  clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)'
                }}
              >
                <div className="space-y-8 relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="h-14 w-14 rounded-full bg-[#1a56ff]/10 flex items-center justify-center group-hover:bg-[#1a56ff] group-hover:text-white text-[#1a56ff] transition-colors duration-500">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 border border-white/10 px-3 py-1 rounded-full">{service.label}</span>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold tracking-tight text-white">{service.title}</h3>
                    <p className="text-[#9ca3af] text-sm leading-relaxed font-medium">{service.desc}</p>
                  </div>
                </div>
                
                <div className="relative z-10 mt-auto pt-8 flex items-center justify-between border-t border-white/5 transition-opacity opacity-70 group-hover:opacity-100">
                  <span className="text-[10px] uppercase tracking-widest text-[#1a56ff] font-bold">Discover More</span>
                  <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#1a56ff] group-hover:bg-[#1a56ff] transition-all duration-300 -rotate-45 group-hover:rotate-0">
                    <ArrowRight size={16} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
            
            {/* CTA Unique Custom Tile matching styling */}
            <div 
              className="group relative p-8 lg:p-10 flex flex-col justify-center items-center text-center bg-[#1a56ff] shadow-lg transition-all duration-500 hover:-translate-y-2 h-[380px]"
              style={{
                borderRadius: '40px',
                clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)'
              }}
            >
               <h3 className="text-3xl lg:text-4xl font-bold tracking-tighter text-white leading-tight mb-4">Bespoke <br/>Solutions.</h3>
               <p className="text-xs text-white/80 leading-relaxed font-medium uppercase tracking-widest px-4 mb-8">Custom logistics map integration available.</p>
               <Link 
                 href="/contact" 
                 className="px-8 py-4 bg-white text-[#0b0c10] font-bold text-xs uppercase tracking-widest rounded-full hover:bg-black hover:text-white transition-all shadow-xl"
               >
                 Enquire Now
               </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
