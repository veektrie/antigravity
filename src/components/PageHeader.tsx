import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-50 border-b border-border">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase italic">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm md:text-base font-bold uppercase tracking-widest text-muted max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
