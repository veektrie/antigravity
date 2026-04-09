"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Truck } from "lucide-react";

const SERVICES = [
  { label: "Same Day", description: "Pickup & delivery today" },
  { label: "Next Day", description: "Overnight UK mainland" },
  { label: "Pallet / Freight", description: "Large or bulk shipments" },
  { label: "Contract", description: "Recurring business model" },
];

interface ServiceSelectProps {
  value: string;
  onChange: (service: string) => void;
}

const ServiceSelect: React.FC<ServiceSelectProps> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selected = SERVICES.find((s) => s.label === value) ?? null;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const select = (label: string) => {
    onChange(label);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative flex flex-col space-y-1.5">
      {/* Label */}
      <span className="text-[8px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-1">
        <Truck size={8} className="text-accent" />
        Service
      </span>

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between gap-2 outline-none w-full"
      >
        <span className={`text-sm font-bold truncate ${selected ? "text-white" : "text-white/30"}`}>
          {selected ? selected.label : "Select service"}
        </span>
        <ChevronDown
          size={14}
          className={`text-white/40 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div
          className="absolute left-0 top-full mt-2 z-[200] w-56 rounded-2xl overflow-hidden shadow-2xl"
          style={{
            background: "rgba(13, 27, 62, 0.97)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {SERVICES.map((svc) => (
            <button
              key={svc.label}
              type="button"
              onClick={() => select(svc.label)}
              className={`w-full text-left px-4 py-3 transition-all hover:bg-white/10 flex flex-col gap-0.5 ${
                value === svc.label ? "bg-white/5" : ""
              }`}
            >
              <span className={`text-xs font-bold ${value === svc.label ? "text-accent" : "text-white/90"}`}>
                {svc.label}
              </span>
              <span className="text-[9px] text-white/35 font-medium">{svc.description}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceSelect;
