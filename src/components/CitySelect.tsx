"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, MapPin } from "lucide-react";

export const UK_CITIES = [...new Set([
  // England — Major Cities
  "London", "Birmingham", "Manchester", "Leeds", "Sheffield", "Bradford",
  "Liverpool", "Bristol", "Leicester", "Coventry", "Nottingham", "Newcastle upon Tyne",
  "Sunderland", "Brighton", "Hull", "Plymouth", "Stoke-on-Trent", "Wolverhampton",
  "Derby", "Southampton", "Portsmouth", "Oxford", "Cambridge", "Exeter",
  "Reading", "Luton", "Milton Keynes", "Northampton", "Norwich", "Ipswich",
  "Peterborough", "Chelmsford", "Colchester", "Gloucester", "Swindon", "Bournemouth",
  "Poole", "Torquay", "Hastings", "Eastbourne", "Worthing", "Crawley",
  "Guildford", "Slough", "Watford", "St Albans", "Hemel Hempstead", "Stevenage",
  "Bedford", "Bury St Edmunds", "Kings Lynn", "Great Yarmouth", "Doncaster",
  "Rotherham", "Barnsley", "Wakefield", "Huddersfield", "Halifax", "Blackpool",
  "Preston", "Blackburn", "Bolton", "Wigan", "Oldham", "Rochdale", "Salford",
  "Stockport", "Warrington", "Crewe", "Chester", "Shrewsbury", "Worcester",
  "Hereford", "Telford", "Stafford", "Walsall", "Dudley", "Solihull",
  "Redditch", "Rugby", "Nuneaton", "Warwick", "Leamington Spa",
  "Stratford-upon-Avon", "Lichfield", "Tamworth", "Burton upon Trent",
  "Mansfield", "Chesterfield", "Lincoln", "Grimsby", "Scunthorpe", "Grantham",
  "Boston", "Skegness", "Loughborough", "Hinckley", "Kettering", "Corby",
  "Wellingborough", "Daventry", "Banbury", "Kidlington",
  // Scotland
  "Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Inverness", "Stirling",
  "Perth", "Falkirk", "Dunfermline", "Kirkcaldy", "Livingston", "Paisley",
  "East Kilbride", "Hamilton", "Kilmarnock", "Ayr", "Dumfries", "Fort William",
  // Wales
  "Cardiff", "Swansea", "Newport", "Wrexham", "Barry", "Pontypridd",
  "Merthyr Tydfil", "Rhondda", "Bangor", "Aberystwyth", "Carmarthen",
  // Northern Ireland
  "Belfast", "Londonderry", "Lisburn", "Newry", "Armagh", "Enniskillen",
  "Omagh", "Ballymena", "Coleraine",
])].sort();

interface CitySelectProps {
  label: string;
  value: string;
  onChange: (city: string) => void;
  placeholder?: string;
  className?: string;
}

const CitySelect: React.FC<CitySelectProps> = ({ label, value, onChange, placeholder = "Select city", className = "" }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const filtered = UK_CITIES.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase())
  );

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Focus search when opened
  useEffect(() => {
    if (open && searchRef.current) searchRef.current.focus();
  }, [open]);

  const select = (city: string) => {
    onChange(city);
    setOpen(false);
    setSearch("");
  };

  return (
    <div ref={containerRef} className={`relative flex flex-col space-y-1.5 ${className}`}>
      <span className="text-[8px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-1">
        <MapPin size={8} className="text-accent" /> {label}
      </span>

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between gap-2 outline-none w-full"
      >
        <span className={`text-sm font-bold truncate ${value ? "text-white" : "text-white/30"}`}>
          {value || placeholder}
        </span>
        <ChevronDown
          size={14}
          className={`text-white/40 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute left-0 top-full mt-2 z-[200] w-64 rounded-2xl overflow-hidden shadow-2xl"
          style={{
            background: "rgba(13, 27, 62, 0.97)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {/* Search */}
          <div className="p-2 border-b border-white/10">
            <div className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2">
              <Search size={12} className="text-white/40 shrink-0" />
              <input
                ref={searchRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search city..."
                className="flex-1 bg-transparent outline-none text-white text-xs font-medium placeholder:text-white/30 min-w-0"
              />
            </div>
          </div>

          {/* City list */}
          <div className="overflow-y-auto" style={{ maxHeight: "350px" }}>
            {filtered.length === 0 ? (
              <p className="text-center text-white/30 text-xs py-6 font-medium">No city found</p>
            ) : (
              filtered.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => select(city)}
                  className={`w-full text-left px-4 py-2.5 text-xs font-medium transition-all hover:bg-white/10 flex items-center gap-2 ${
                    value === city ? "text-accent font-bold bg-white/5" : "text-white/80"
                  }`}
                >
                  {value === city && <div className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />}
                  {city}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CitySelect;
