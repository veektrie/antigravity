import React from "react";
import PageHeader from "@/components/PageHeader";
import QuoteForm from "@/components/QuoteForm";
import InteractiveMap from "@/components/InteractiveMap";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9f9fb]">
      <PageHeader 
        title="Get in Touch" 
        subtitle="Our team is available 24/7 for priority logistics across the UK."
      />

      {/* Main Quote / Contact module */}
      <QuoteForm />

      {/* Embedded Live UK Map Component on Dark Canvas for Contact Context */}
      <section className="py-24 max-w-[1920px] mx-auto w-full px-6 md:px-12 lg:px-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto bg-[#0b0c10] rounded-[40px] md:rounded-[60px] p-8 md:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1a56ff]/10 rounded-full blur-[150px] pointer-events-none" />
           
           <div className="w-full lg:w-1/2 space-y-8 relative z-10 hidden md:block">
              <div className="inline-flex items-center space-x-2">
                <span className="h-2 w-2 bg-[#1a56ff] rounded-full"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">National Control Center</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] text-white">
                Watching over the <br /> <span className="text-[#1a56ff]">entire UK Network.</span>
              </h2>
              <p className="text-[#9ca3af] text-lg font-medium max-w-sm">
                Our main offices are located in Derby, but our logistical tracking covers every single major hub in the nation instantly.
              </p>
           </div>
           
           <div className="w-full lg:w-1/2 relative z-10">
              <InteractiveMap />
           </div>
        </div>
      </section>
    </div>
  );
}
