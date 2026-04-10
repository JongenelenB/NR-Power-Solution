import DienstenCards from "./DienstenCard";
import {
  Lightbulb,
  Zap,
  // Smartphone,
  //  Sun,
  Factory,
  Network,
} from "lucide-react";

const serivces = [
  {
    id: "huis-installaties",
    title: "Huisinstallaties",
    imgUrl: "/images/Huis Instalatie.png",
    icon: Lightbulb,
    description:
      "Van het plaatsen van nieuwe verlichting tot het volledig vernieuwen van uw zekeringkast. Wij zorgen voor een veilige en moderne elektrische installatie in uw woning.",
  },
  {
    id: "laadpalen", // gecertificieerd bij zetten
    title: "Laadpalen",
    imgUrl: "/images/Laadpaal.png",
    icon: Zap,
    description:
      "Klaar voor elektrisch rijden? Als gecertificeerd installateur plaatsen wij zowel wandmodellen als staande laadstations bij u thuis of op de zaak, volledig gekeurd en gebruiksklaar.",
  },
  // {
  //   id: "domotica",
  //   title: "Domotica",
  //   imgUrl: "/images/Domotica.png",
  //   icon: Smartphone,
  //   description:
  //     "Maak uw woning slim met onze domotica-oplossingen. Bedien verlichting, verwarming en beveiliging eenvoudig via één centraal smart panel of uw smartphone.",
  // },
  // {
  //   id: "zonnepanelen",
  //   title: "Zonnepanelen",
  //   imgUrl: "/images/zonnenpaneel.png",
  //   icon: Sun,
  //   description:
  //     "Verlaag uw energiefactuur en investeer in de toekomst. Wij plaatsen hoogrendementspanelen die perfect zijn afgestemd op uw dak en energieverbruik.",
  // },
  {
    id: "Industrieel",
    title: "Industrieel",
    imgUrl: "/images/Industrieel.png",
    icon: Factory,
    description:
      "Specialist in complexe installaties, bordenbouw en onderhoud voor KMO's en industrie. Wij garanderen bedrijfscontinuïteit met veilige en krachtige stroomoplossingen op maat.",
  },

  {
    id: "Data",
    title: "Data bekabeling",
    imgUrl: "/images/Datakabel.png",
    icon: Network,
    description:
      "Specialist in Databekabeling & Netwerkbeheer. Wij leggen gecertificeerde koper- en glasvezelnetwerken aan (Cat6a, Cat7, Fiber) volgens de hoogste normen. Altijd grondig getest voor minimale latency en maximale uptime van uw netwerk.",
  },
];

export default function Diensten() {
  return (
    <div>
      <div className="flex flex-col items-center mb-16 mt-5">
        <span className="text-[#FFD300] text-sm uppercase tracking-[0.3em] font-bold mb-2">
          Wat wij doen
        </span>
        <h2 className="relative text-5xl md:text-6xl font-black text-white uppercase">
          Diensten
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-2 bg-[#FFD300] rounded-full shadow-[0_0_15px_#FFD300]"></span>
        </h2>
      </div>
      <div className="flex flex-wrap gap-10 m-5  justify-center">
        {serivces.map((service) => (
          <DienstenCards
            key={service.id}
            imgUrl={service.imgUrl}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
}
