import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <section className="bg-[#0b0c10] w-full max-w-[1920px] mx-auto overflow-hidden relative" style={{ borderRadius: '0 0 60px 60px' }}>
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1a56ff]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="pt-[160px] pb-24 md:pt-[200px] md:pb-32 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto relative z-10 space-y-6 md:space-y-8 text-center md:text-left flex flex-col items-center md:items-start text-white">
        <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter leading-none">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg lg:text-xl font-medium text-[#9ca3af] max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
