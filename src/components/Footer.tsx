import React from "react";
import { Zap } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#121212] py-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-6 text-center">

        {/* Leuke tekst met een elektrisch icoontje */}
        <p className="text-gray-400 text-sm md:text-base flex items-center justify-center gap-2">
          Gemaakt met volop energie{" "}
          <Zap
            size={16}
            className="text-[#FFD300] fill-[#FFD300] animate-pulse"
          />{" "}
          en vakmanschap.
        </p>

        {/* Partners Sectie */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] text-gray-600 uppercase tracking-[0.2em]">Onze Partners</span>
          <div className="flex items-center gap-6 text-gray-400 font-semibold text-sm">
            <span className="hover:text-white transition-colors duration-300 cursor-default">SNIGG</span>
            <div className="h-4 w-[1px] bg-white/10"></div>
            <span className="hover:text-white transition-colors duration-300 cursor-default">ENERCO</span>
          </div>
        </div>

        {/* Copyright en bedrijfsnaam */}
        <div className="flex flex-col gap-2 items-center">
          <div className="text-gray-500 text-xs md:text-sm font-medium tracking-widest uppercase">
            &copy; {currentYear}{" "}
            <span className="text-white font-black ml-1">NR Power Solutions</span>
            <span className="mx-2 opacity-50">|</span>
            Alle rechten voorbehouden.
          </div>

          {/* BTW Nummer */}
          <div className="text-gray-600 text-[10px] tracking-widest uppercase">
            BE1011.866.584 {/* Pas dit nummer aan indien nodig */}
          </div>
        </div>

        {/* Developer Credits */}
        <div className="text-gray-600 text-[11px] tracking-wider mt-2">
          Website ontwikkeld door{" "}
          <span className="text-gray-400 font-bold hover:text-[#FFD300] transition-colors duration-300 cursor-default">
            Bjorn Jongenelen
          </span>
        </div>
      </div>
    </footer>
  );
}