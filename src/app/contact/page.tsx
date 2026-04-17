import React from "react";
import PageHeader from "@/components/PageHeader";
import QuoteForm from "@/components/QuoteForm";
import NetworkVisual from "@/components/NetworkVisual";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9f9fb]">
      <PageHeader 
        title="Get in Touch" 
        subtitle="Our team is available 24/7 for priority logistics across the UK."
      />

      {/* Bespoke Contact Module */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="bg-white rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-black/5 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Visual Info Section */}
          <div className="w-full lg:w-5/12 bg-[#1e2b4d] p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ea580c]/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10 space-y-12">
              <div>
                <h3 className="text-3xl font-bold tracking-tight text-white mb-4">Let's coordinate your next move.</h3>
                <p className="text-[#9ca3af] leading-relaxed">Reach out directly to our central dispatch unit. We ensure priority handling for all corporate logistics inquiries.</p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 bg-[#ea580c]/20 rounded-full flex items-center justify-center border border-[#ea580c]/30">
                    <span className="text-lg">📍</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#ea580c] uppercase tracking-widest mb-1">Corporate HQ</p>
                    <p className="font-medium text-white/90 leading-relaxed max-w-[200px]">4TH FLOOR OFFICE, 205 REGENT STREET, LONDON, ENGLAND, W1B 4HB</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 bg-[#ea580c]/20 rounded-full flex items-center justify-center border border-[#ea580c]/30">
                    <span className="text-lg">📞</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#ea580c] uppercase tracking-widest mb-1">24/7 Dispatch</p>
                    <p className="font-bold text-xl tracking-tight text-white/90">07344916194</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-20 relative z-10 w-full opacity-30 invert mix-blend-screen overflow-hidden mt-12 rounded-2xl h-40">
               <div className="absolute inset-0 bg-[#ea580c]/10 z-10"></div>
               <img src="/hero-truck.jpg" alt="London Operations" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Bespoke Form Section */}
          <div className="w-full lg:w-7/12 p-12 lg:p-20 bg-white flex flex-col justify-center">
            <h4 className="text-2xl font-bold text-[#0D1B3E] mb-8">Send a Message</h4>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Your Name</label>
                  <input type="text" className="w-full border-b border-zinc-200 py-3 bg-transparent focus:outline-none focus:border-[#ea580c] transition-colors text-[#1e2b4d] font-medium" placeholder="Jane Doe" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Email Address</label>
                  <input type="email" className="w-full border-b border-zinc-200 py-3 bg-transparent focus:outline-none focus:border-[#ea580c] transition-colors text-[#1e2b4d] font-medium" placeholder="jane@company.com" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Subject / Service Needed</label>
                <input type="text" className="w-full border-b border-zinc-200 py-3 bg-transparent focus:outline-none focus:border-[#ea580c] transition-colors text-[#1e2b4d] font-medium" placeholder="e.g. Urgent Priority Delivery" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Message</label>
                <textarea rows={4} className="w-full border-b border-zinc-200 py-3 bg-transparent focus:outline-none focus:border-[#ea580c] transition-colors text-[#1e2b4d] font-medium resize-none" placeholder="Provide tracking numbers or dispatch details..."></textarea>
              </div>
              <button type="button" className="inline-flex items-center gap-3 px-10 py-5 bg-[#ea580c] text-white font-bold text-[11px] uppercase tracking-[0.1em] rounded-full hover:bg-[#1e2b4d] transition-all shadow-xl shadow-[#ea580c]/20 active:scale-95">
                <span>Submit Transmission</span>
                <span className="text-lg leading-none -mt-0.5">↗</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Embedded Live UK Map Component on Dark Canvas for Contact Context */}
      <section className="py-12 pb-32 max-w-[1920px] mx-auto w-full px-6 md:px-12 lg:px-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto bg-[#1e2b4d] rounded-[40px] md:rounded-[60px] p-8 md:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ea580c]/10 rounded-full blur-[150px] pointer-events-none" />
           
           <div className="w-full lg:w-1/2 space-y-8 relative z-10 hidden md:block">
              <div className="inline-flex items-center space-x-2">
                <span className="h-2 w-2 bg-[#ea580c] rounded-full"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">National Control Center</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] text-white">
                Watching over the <br /> <span className="text-[#ea580c]">entire UK Network.</span>
              </h2>
              <p className="text-[#9ca3af] text-lg font-medium max-w-sm">
                Our operations coordinate from Regent Street, ensuring our logistical tracking covers every single major hub in the nation instantly.
              </p>
           </div>
           
           <div className="w-full lg:w-1/2 relative z-10">
              <NetworkVisual />
           </div>
        </div>
      </section>
    </div>
  );
}
