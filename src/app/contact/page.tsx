import React from "react";
import PageHeader from "@/components/PageHeader";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="Get in Touch" 
        subtitle="Our team is available 24/7 for priority logistics across the UK."
      />

      <section className="section-padding max-w-7xl mx-auto space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12 shrink-0">
            <h2 className="text-3xl font-bold italic uppercase tracking-tighter leading-tight text-[#0D1B3E]">Fast. Reliable. <span className="not-italic text-accent">Professional Service.</span></h2>
            <div className="space-y-10 group">
              <div className="flex items-start space-x-6">
                <div className="h-10 w-10 border border-border rounded-lg flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-accent" />
                </div>
                <div>
                   <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted mb-2">HOTLINE</h4>
                   <p className="text-2xl font-bold tracking-tight text-[#0D1B3E]">{BRAND.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="h-10 w-10 border border-border rounded-lg flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-accent" />
                </div>
                <div>
                   <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted mb-2">ENQUIRIES</h4>
                   <p className="text-2xl font-bold tracking-tight text-[#0D1B3E] lowercase">{BRAND.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="h-10 w-10 border border-border rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted mb-2">HEAD OFFICE</h4>
                  <p className="text-lg font-bold tracking-tight uppercase leading-relaxed italic border-l border-accent/20 pl-4 py-2 text-[#0D1B3E]">
                    {BRAND.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-border p-10 md:p-16 space-y-12">
             <div className="space-y-4">
               <h3 className="text-xs font-bold uppercase tracking-widest italic text-muted">Briefing</h3>
               <p className="text-2xl font-bold tracking-tighter uppercase text-[#0D1B3E]">Send our team a message</p>
             </div>
             
             <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full border-b border-border py-4 focus:outline-none focus:border-accent transition-all uppercase text-[10px] font-bold tracking-widest bg-transparent" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Email</label>
                    <input type="email" placeholder="john@company.com" className="w-full border-b border-border py-4 focus:outline-none focus:border-accent transition-all lowercase text-[10px] font-bold tracking-widest bg-transparent" />
                  </div>
                </div>
                
                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Message Brief</label>
                   <textarea rows={4} placeholder="Describe your logistics requirements..." className="w-full border-b border-border py-4 focus:outline-none focus:border-accent transition-all resize-none uppercase text-[10px] font-bold tracking-widest leading-loose bg-transparent" />
                </div>
                
                <button type="submit" className="w-full btn-primary flex items-center justify-center space-x-3 group py-6">
                   <span>Post Briefing</span>
                   <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
             </form>
          </div>
        </div>
      </section>
    </div>
  );
}
