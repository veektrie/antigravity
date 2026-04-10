import React from "react";
import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9f9fb]">
      <PageHeader 
        title="About Eben Logistics" 
        subtitle="Reliable, responsive, and trusted logistics infrastructure."
      />
      
      {/* Massive Delivar-style dark block */}
      <section className="py-24 md:py-32 w-full max-w-[1920px] mx-auto overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div 
            className="w-full bg-[#0b0c10] px-8 py-20 lg:p-24 relative overflow-hidden"
            style={{
              borderRadius: '60px',
              clipPath: 'polygon(0 0, calc(100% - 80px) 0, 100% 80px, 100% 100%, 0 100%)'
            }}
          >
            {/* Ambient Background Accents */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#1a56ff]/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1a56ff]/10 rounded-full blur-[150px] pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10 w-full">
              
              {/* Massive Philosophy Statement */}
              <div className="w-full lg:w-3/5 space-y-12">
                <div className="inline-flex items-center space-x-2">
                  <span className="h-2 w-2 bg-[#1a56ff] rounded-full"></span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Our Philosophy</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.05] text-white">
                  Traditional logistics is reactive. <br className="hidden md:block"/>
                  We built Eben to be <br/>
                  <span className="text-[#1a56ff]">proactive.</span>
                </h2>
              </div>
              
              {/* Refined textual context */}
              <div className="w-full lg:w-2/5 flex flex-col justify-end space-y-8 border-l border-white/10 pl-8 lg:pl-12 py-4">
                <p className="text-[#9ca3af] text-lg lg:text-xl leading-relaxed font-medium">
                  Eben Logistics Ltd has spent years mastering the movement of goods across the UK. We focus on absolute punctuality and safety, ensuring your high-priority shipments are handled with the care they deserve.
                </p>
                
                <p className="text-[#9ca3af] text-lg lg:text-xl leading-relaxed font-medium">
                  Based in Derby, our network operates 24/7, providing the backbone for businesses that require speed and reliability.
                </p>

                <p className="text-white text-xl font-bold tracking-tight">
                  We deliver more than just logistics; <span className="text-[#1a56ff]">we deliver peace of mind.</span>
                </p>

                <div className="pt-6">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#1a56ff] text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-[#0b0c10] transition-all shadow-xl shadow-blue-500/20"
                  >
                    <span>Enquire Now</span>
                    <span className="text-lg leading-none -mt-0.5">↗</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Metrics Footer below block */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 px-8">
             <div className="space-y-4">
               <p className="text-[#1a56ff] text-5xl font-bold tracking-tighter">1980</p>
               <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0b0c10]/50">Year Established</p>
             </div>
             <div className="space-y-4">
               <p className="text-[#1a56ff] text-5xl font-bold tracking-tighter">50K+</p>
               <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0b0c10]/50">Deliveries Completed</p>
             </div>
             <div className="space-y-4">
               <p className="text-[#1a56ff] text-5xl font-bold tracking-tighter">24/7</p>
               <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0b0c10]/50">Operations Live</p>
             </div>
             <div className="space-y-4">
               <p className="text-[#1a56ff] text-5xl font-bold tracking-tighter">99%</p>
               <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0b0c10]/50">Success Rate</p>
             </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
