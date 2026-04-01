import React, { useState } from "react"; // 1. Importeer useState
import logoImg from "/images/NR Power Solutions.png";
import OfferteModal from "./Offerte"; // 2. Importeer je Modal component

const navItems = [
  { id: "Home", label: "Home" },
  { id: "Over ons", label: "Over ons" },
  { id: "Diensten", label: "Diensten" },
  { id: "Referenties", label: "Referenties" },
  { id: "Contact", label: "Contact" },
  { id: "Vraag een offerte", label: "Vraag een offerte" },
];

export default function Navbar() {
  // 3. Maak de state aan
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-full flex items-center justify-between py-4 px-4 md:px-8">
        <div className="flex-shrink-0">
          <img
            src={logoImg}
            alt="NR Power Solutions"
            className="h-20 w-auto object-contain"
          />
        </div>

        <nav className="ml-auto flex items-center gap-4 lg:gap-8">
          {navItems.map((navItem) => {
            // 4. Controleer of het de offerte knop is
            if (navItem.label === "Vraag een offerte") {
              return (
                <button
                  key={navItem.id}
                  onClick={() => setIsModalOpen(true)} // 5. Open de modal bij klik
                  className="px-6 py-3 bg-[#FFD300] text-black font-bold rounded-full shadow-lg hover:bg-white hover:scale-105 transition-all duration-300 whitespace-nowrap uppercase text-sm cursor-pointer border-none"
                >
                  {navItem.label}
                </button>
              );
            }

            // Normale links
            return (
              <a
                key={navItem.id}
                href={`#${navItem.id}`}
                className="px-3 py-2 text-gray-300 transition-all duration-300 font-medium rounded-lg hover:bg-[#FFD300] hover:text-black whitespace-nowrap"
              >
                {navItem.label}
              </a>
            );
          })}
        </nav>
      </div>

      {/* 6. Plaats de Modal component buiten de navbar div maar binnen de fragment */}
      <OfferteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
