import React from "react";
import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="About Eben Logistics" 
        subtitle="Reliable, responsive, and trusted logistics infrastructure."
      />
      
      <section className="section-padding max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <div className="space-y-8">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-muted">Philosophy</h2>
            <p className="text-xl md:text-2xl font-bold tracking-tight leading-relaxed italic uppercase">
              "Traditional logistics is reactive. We've built Eben Logistics to be proactive and precise."
            </p>
            <p className="text-muted text-sm leading-loose font-medium">
              Eben Logistics Ltd has spent years mastering the movement of goods across the UK. We focus on absolute punctuality and safety, ensuring your high-priority shipments are handled with the care they deserve.
            </p>
          </div>
          
          <div className="lg:p-12 border-l border-border italic text-muted text-sm leading-relaxed space-y-6">
            <p>
              Based in Derby, our network operates 24/7, providing the backbone for businesses that require speed and reliability.
            </p>
            <p>
              By treating every package like it matters, we deliver more than just logistics; we deliver peace of mind.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
