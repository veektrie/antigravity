"use client";

import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

// Free, fast CDN for standard world map topology
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const CITIES = [
  { name: "London", coordinates: [-0.1276, 51.5072], region: "London & South" },
  { name: "Manchester", coordinates: [-2.2426, 53.4808], region: "North West Hub" },
  { name: "Birmingham", coordinates: [-1.8904, 52.4862], region: "Midlands Hub" },
  { name: "Edinburgh", coordinates: [-3.1883, 55.9533], region: "Scotland Hub" },
  { name: "Belfast", coordinates: [-5.9301, 54.5973], region: "Northern Ireland" },
  { name: "Cardiff", coordinates: [-3.1791, 51.4816], region: "Wales Hub" },
];

export default function InteractiveMap() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  return (
    <div className="relative w-full aspect-square md:aspect-video lg:aspect-square mt-8 flex items-center justify-center overflow-hidden rounded-3xl bg-[#0b0c10] border border-[#1a56ff]/20 shadow-[0_0_50px_rgba(26,86,255,0.05)]">
      
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[#1a56ff]/10 blur-[100px] pointer-events-none" />

      {/* 
        Center is [Longitude, Latitude]. 
        Great Britain is roughly around [-2, 54.5].
        Scale 3200 focuses tightly on the UK on standard 800x600 SVG.
      */}
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 4000,
          center: [-3, 54.5] // Centered perfectly over the UK
        }}
        className="w-full h-full max-h-[600px] relative z-10 scale-[1.1] sm:scale-100"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              // Highlight the UK slightly differently from the rest of the world if desired
              const isUK = geo.properties.name === "United Kingdom";
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: isUK ? "#1a56ff" : "#1f2937",
                      fillOpacity: isUK ? 0.3 : 0.8,
                      stroke: "rgba(255,255,255,0.1)",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    hover: {
                      fill: isUK ? "#1a56ff" : "#374151",
                      fillOpacity: isUK ? 0.5 : 0.8,
                      stroke: "rgba(255,255,255,0.3)",
                      strokeWidth: 1,
                      outline: "none",
                      transition: "all 250ms"
                    },
                    pressed: {
                      fill: "#1a56ff",
                      outline: "none",
                    },
                  }}
                />
              )
            })
          }
        </Geographies>

        {/* Placing Interactive Markers */}
        {CITIES.map((city) => (
          <Marker 
            key={city.name} 
            coordinates={city.coordinates as [number, number]}
            onMouseEnter={() => setHoveredCity(city.name)}
            onMouseLeave={() => setHoveredCity(null)}
          >
            {/* Pulse effect */}
            {hoveredCity === city.name && (
              <circle r={12} fill="rgba(255, 255, 255, 0.3)" className="animate-ping" />
            )}
            {/* Solid marker dot */}
            <circle 
              r={hoveredCity === city.name ? 6 : 4} 
              fill={hoveredCity === city.name ? "#ffffff" : "#1a56ff"} 
              stroke="#ffffff"
              strokeWidth={hoveredCity === city.name ? 2 : 1}
              className="cursor-pointer transition-all duration-300"
            />
            {/* Tooltip implementation inside SVG */}
            {hoveredCity === city.name && (
              <g className="animate-in fade-in zoom-in duration-200 pointer-events-none">
                <rect 
                  x={-50} 
                  y={-45} 
                  width={100} 
                  height={34} 
                  rx={6} 
                  fill="#ffffff" 
                  filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))" 
                />
                <text x={0} y={-30} textAnchor="middle" fill="#0b0c10" fontSize={11} fontWeight="bold" fontFamily="sans-serif">
                  {city.name}
                </text>
                <text x={0} y={-18} textAnchor="middle" fill="#1a56ff" fontSize={9} fontWeight="bold" fontFamily="sans-serif">
                  {city.region}
                </text>
                <polygon points={"-5,-11 5,-11 0,-6"} fill="#ffffff" />
              </g>
            )}
          </Marker>
        ))}
      </ComposableMap>
      
      <div className="absolute bottom-6 left-6 inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 z-20 pointer-events-none">
        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-white">Live Tracking Network</span>
      </div>
    </div>
  );
}
