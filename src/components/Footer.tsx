import { Zap } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#121212] py-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Eén compacte rij op desktop */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          {/* Links: Logo & BTW */}
          <div className="flex flex-col">
            <span className="text-white font-black tracking-widest uppercase text-sm">
              NR Power Solutions
            </span>
            <span className="text-gray-600 text-[9px] tracking-widest uppercase">
              BTW BE1011.866.584
            </span>
          </div>

          {/* Midden: Compacte slogan */}
          <div className="flex items-center gap-2 text-gray-500 text-xs py-2 md:py-0 border-y border-white/5 md:border-none w-full md:w-auto justify-center">
            Gemaakt met
            <Zap
              size={14}
              className="text-[#FFD300] fill-[#FFD300] animate-pulse"
            />
            door Bjorn Jongenelen
          </div>

          {/* Rechts: Partners & Copyright gecombineerd */}
          <div className="flex flex-col items-center md:items-end gap-1">
            <div className="flex items-center gap-3 text-gray-400 font-bold text-[10px] uppercase tracking-tighter">
              <span className="hover:text-white transition-colors">SNIGG</span>
              <span className="text-white/10 text-xs">|</span>
              <span className="hover:text-white transition-colors">ENERCO</span>
            </div>
            <p className="text-gray-600 text-[10px] tracking-wide">
              &copy; {currentYear} — Alle rechten voorbehouden
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
