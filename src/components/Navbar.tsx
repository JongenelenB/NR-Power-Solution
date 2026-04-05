import React, { useState } from "react";
import logoImg from "/images/NR Power Solutions.png";
import OfferteModal from "./Offerte";

const navItems = [
  { id: "Home", label: "Home" },
  { id: "Diensten", label: "Diensten" },
  { id: "About Me", label: "Over ons" },
  { id: "Contact", label: "Contact" },
  { id: "Vraag een offerte", label: "Vraag een offerte" },
];

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-50 w-full flex items-center justify-between py-4 px-4 md:px-8 bg-zinc-900/90 backdrop-blur-md shadow-md">
        <div className="flex-shrink-0">
          {/* Gewikkeld in een <a> tag voor de automatische smooth scroll naar boven */}
          <a href="#Home" className="block">
            <img
              src={logoImg}
              alt="NR Power Solutions"
              className="h-20 w-auto object-contain cursor-pointer"
            />
          </a>
        </div>

        <nav className="ml-auto flex items-center gap-4 lg:gap-8">
          {navItems.map((navItem) => {
            if (navItem.label === "Vraag een offerte") {
              return (
                <button
                  key={navItem.id}
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3 bg-[#FFD300] text-black font-bold rounded-full shadow-lg hover:bg-white hover:scale-105 transition-all duration-300 whitespace-nowrap uppercase text-sm cursor-pointer border-none"
                >
                  {navItem.label}
                </button>
              );
            }

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

      <OfferteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
