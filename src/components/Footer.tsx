import React from "react";
import { Zap } from "lucide-react";

export default function Footer() {
  // Haalt automatisch het huidige jaartal op
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#121212] py-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-4 text-center">
        {/* Leuke tekst met een elektrisch icoontje */}
        <p className="text-gray-400 text-sm md:text-base flex items-center justify-center gap-2">
          Gemaakt met volop energie{" "}
          <Zap
            size={16}
            className="text-[#FFD300] fill-[#FFD300] animate-pulse"
          />{" "}
          en vakmanschap.
        </p>

        {/* Copyright en bedrijfsnaam */}
        <div className="text-gray-500 text-xs md:text-sm font-medium tracking-widest uppercase">
          &copy; {currentYear}{" "}
          <span className="text-white font-black ml-1">NR Power Solutions</span>
          <span className="mx-2 opacity-50">|</span>
          Alle rechten voorbehouden.
        </div>

        {/* Developer Credits */}
        <div className="text-gray-600 text-xs tracking-wider mt-2">
          Website ontwikkeld door{" "}
          <span className="text-gray-400 font-bold hover:text-[#FFD300] transition-colors duration-300 cursor-default">
            Bjorn Jongenelen
          </span>
        </div>
      </div>
    </footer>
  );
}
