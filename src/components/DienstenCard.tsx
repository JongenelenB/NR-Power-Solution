import type { LucideIcon } from "lucide-react";

interface DienstenCardProps {
  title: string;
  imgUrl: string;
  description: string;
  icon: LucideIcon;
}

export default function DienstenCards({
  title,
  imgUrl,
  description,
  icon: Icon,
}: DienstenCardProps) {
  return (
    // Voeg 'group' toe aan de buitenste div om hover-events door te geven naar binnen
    <div className="relative max-w-lg group cursor-pointer">
      {/* Icoon Cirkel met hover: draait een beetje en schaalt op */}
      <div
        className="absolute -top-4 -right-4 bg-white rounded-full w-20 h-20 z-10 
                  flex items-center justify-center shadow-lg border-4 border-[#121212]
                  transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
      >
        <Icon color="black" size={36} strokeWidth={2.5} />
      </div>

      {/* De Kaart zelf: komt omhoog en krijgt een diepere schaduw */}
      <div
        className="bg-[#FFD300] rounded-4xl overflow-hidden shadow-md
                  transition-all duration-300 
                  group-hover:-translate-y-2 group-hover:shadow-2xl shadow-lg shadow-[#FFD300] hover:bg-white"
      >
        <img
          className="rounded-t-[inherit] w-full h-80 object-cover"
          src={imgUrl}
          alt={title}
        />

        <div className="py-6 px-2">
          <h3 className="text-black mx-4 font-bold text-3xl uppercase tracking-tighter">
            {title}
          </h3>
          <p className="m-5 text-black font-medium text-justify leading-snug">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
