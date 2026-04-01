import React from "react";
import aboutImg from "/images/Banner.png"; // De gegenereerde banner
import { CheckCircle2 } from "lucide-react";

export default function AboutMe() {
  const USP = [
    "Gecertificeerde techniekers",
    "24/7 Noodhulp beschikbaar",
    "Transparante prijsstelling",
    "Duurzame energie-oplossingen",
  ];

  return (
    <section className="w-full bg-[#121212] px-6 lg:px-16 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Banner Afbeelding - In dezelfde stijl als de Hero */}
        <div className="relative mb-20 rounded-[2.5rem] overflow-hidden border-8 border-gray-800/50 shadow-2xl">
          <img
            src={aboutImg}
            alt="NR Power team aan het werk"
            className="w-full h-[300px] lg:h-[500px] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
          />
          {/* Subtiele overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Linkerkant: Grote Titel */}
          <div>
            <span className="text-[#FFD300] text-sm uppercase tracking-widest font-semibold mb-4 block">
              — Wie wij zijn
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Gedreven door <br />
              <span className="text-[#FFD300]">Vakmanschap</span>
            </h2>
          </div>

          {/* Rechterkant: Tekst & USP's */}
          <div className="flex flex-col gap-6">
            <p className="text-gray-400 text-lg leading-relaxed">
              Bij <strong>NR Power Solutions</strong> bouwen we aan de
              infrastructuur van morgen. Wat ooit begon als een passie voor
              elektrotechniek, is uitgegroeid tot een referentie in de regio
              voor zowel particuliere woningbouw als complexe industriële
              projecten.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              Onze missie is simpel: veilige, innovatieve en energiezuinige
              oplossingen bieden die generaties lang meegaan. Net zoals in de
              afbeelding te zien is, dragen wij onze kennis en passie over met
              oog voor de toekomst.
            </p>

            {/* USP Lijst */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {USP.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#FFD300]" size={20} />
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#onze-aanpak"
                className="inline-block border-2 border-white/20 text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300 uppercase text-xs tracking-widest"
              >
                Ontdek onze aanpak
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
