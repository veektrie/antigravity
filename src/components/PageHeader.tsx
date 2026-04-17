import React from "react";
import Image from "next/image";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, image = "/hero-truck.jpg" }) => {
  return (
    <section className="relative w-full overflow-hidden" style={{ borderRadius: '0 0 48px 48px' }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src={image} alt="background" fill sizes="100vw" className="object-cover grayscale opacity-20" priority />
      </div>
      {/* Brand navy gradient */}
      <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(115deg, rgba(30,43,77,0.98) 0%, rgba(30,43,77,0.93) 50%, rgba(30,43,77,0.80) 100%)" }} />
      {/* Orange accent glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-[#ea580c]/10 rounded-full blur-[120px] pointer-events-none z-10" />
      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#ea580c]/60 to-transparent z-20" />

      <div className="pt-[160px] pb-24 md:pt-[200px] md:pb-32 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto relative z-20 space-y-6 md:space-y-8 text-left">
        <div className="inline-flex items-center gap-2 bg-[#ea580c]/10 border border-[#ea580c]/20 px-4 py-2 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ea580c]">Eben Logistics Ltd</span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter leading-none text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg lg:text-xl font-medium text-white/60 max-w-2xl leading-relaxed border-l-2 border-[#ea580c]/40 pl-5">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
