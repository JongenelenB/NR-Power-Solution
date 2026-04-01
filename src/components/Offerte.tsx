import React, { useState, useEffect } from "react";
import { Send, X, Upload } from "lucide-react";

export default function OfferteModal({ isOpen, onClose }) {
  // Twee states om de animatie te beheren
  const [isRendered, setIsRendered] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      // Een kleine vertraging zorgt ervoor dat de DOM is bijgewerkt
      // voordat we de opacity naar 100 zetten (triggert de animatie)
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      // Wacht tot de animatie (300ms) klaar is voordat we het component verwijderen
      setTimeout(() => setIsRendered(false), 300);
    }
  }, [isOpen]);

  // Render niets als het component niet gerenderd hoeft te worden
  if (!isRendered) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Bedankt! Uw aanvraag is verzonden.");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Achtergrond Overlay */}
      <div
        className={`absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>

      {/* Modal Container met Fade & Scale animatie */}
      <div
        className={`relative w-full max-w-4xl transition-all duration-300 ease-out shadow-2xl ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="bg-[#FFD300] rounded-4xl p-6 md:p-10 relative border-4 border-black/5">
          {/* Sluitknop */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-black hover:scale-110 transition-transform duration-200 z-50 cursor-pointer"
          >
            <X size={36} strokeWidth={3} />
          </button>

          <div className="mb-8">
            <h2 className="text-black text-4xl font-black uppercase tracking-tighter leading-none">
              Offerte Aanvragen
            </h2>
            <p className="text-black font-bold mt-2 uppercase tracking-tight opacity-80">
              Snel en vrijblijvend een voorstel op maat
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5"
          >
            {/* Kolom 1: Contact & Adres */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-black font-black uppercase text-sm ml-1">
                    Naam *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Uw naam"
                    className="w-full p-4 rounded-2xl border-none bg-white text-black font-bold outline-none focus:ring-4 focus:ring-black/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-black font-black uppercase text-sm ml-1">
                    Telefoon *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="04..."
                    className="w-full p-4 rounded-2xl border-none bg-white text-black font-bold outline-none focus:ring-4 focus:ring-black/10 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-black font-black uppercase text-sm ml-1">
                  E-mailadres *
                </label>
                <input
                  required
                  type="email"
                  placeholder="naam@voorbeeld.be"
                  className="w-full p-4 rounded-2xl border-none bg-white text-black font-bold outline-none focus:ring-4 focus:ring-black/10 transition-all"
                />
              </div>

              {/* Adres Sectie */}
              <div className="grid grid-cols-4 gap-3 pt-2">
                <div className="col-span-3 space-y-2">
                  <label className="block text-black font-black uppercase text-sm ml-1">
                    Straat *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full p-4 rounded-2xl border-none bg-white text-black font-bold outline-none focus:ring-4 focus:ring-black/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-black font-black uppercase text-sm ml-1">
                    Nr *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full p-4 rounded-2xl border-none bg-white text-black font-bold outline-none focus:ring-4 focus:ring-black/10 transition-all"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-black font-black uppercase text-sm ml-1">
                    Postcode *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full p-4 rounded-2xl border-none bg-white text-black font-bold outline-none focus:ring-4 focus:ring-black/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-black font-black uppercase text-sm ml-1">
                    Stad *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full p-4 rounded-2xl border-none bg-white text-black font-bold outline-none focus:ring-4 focus:ring-black/10 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Kolom 2: Radio Buttons, Project & Bestanden */}
            <div className="space-y-5 flex flex-col">
              {/* Moderne Radio Buttons */}
              <div className="space-y-2">
                <label className="block text-black font-black uppercase text-sm ml-1">
                  Wat wenst u? *
                </label>
                <div className="flex gap-3">
                  <label className="flex-1 cursor-pointer group">
                    <input
                      type="radio"
                      name="type"
                      value="prijs"
                      required
                      className="hidden peer"
                      defaultChecked
                    />
                    <div
                      className="w-full py-4 text-center rounded-2xl font-black uppercase text-xs tracking-widest transition-all
                                  bg-white/40 text-black border-2 border-transparent
                                  peer-checked:bg-black peer-checked:text-white peer-checked:scale-[1.02]
                                  group-hover:bg-white/60"
                    >
                      Prijs Offerte
                    </div>
                  </label>
                  <label className="flex-1 cursor-pointer group">
                    <input
                      type="radio"
                      name="type"
                      value="bezoek"
                      className="hidden peer"
                    />
                    <div
                      className="w-full py-4 text-center rounded-2xl font-black uppercase text-xs tracking-widest transition-all
                                  bg-white/40 text-black border-2 border-transparent
                                  peer-checked:bg-black peer-checked:text-white peer-checked:scale-[1.02]
                                  group-hover:bg-white/60"
                    >
                      Plaatsbezoek
                    </div>
                  </label>
                </div>
              </div>

              <div className="flex-grow space-y-2">
                <label className="block text-black font-black uppercase text-sm ml-1">
                  Omschrijving Project *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Beschrijf kort de gewenste werken..."
                  className="w-full p-4 rounded-2xl border-none bg-white text-black font-bold outline-none resize-none focus:ring-4 focus:ring-black/10 h-[120px] transition-all"
                ></textarea>
              </div>

              {/* upload files 

              <div className="space-y-2">
                <label className="block text-black font-black uppercase text-sm ml-1">
                  Bijlagen (Foto's/Plannen)
                </label>
                <div className="relative group">
                  <input
                    type="file"
                    multiple
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="w-full p-4 border-2 border-dashed border-black/30 rounded-2xl bg-white/30 flex items-center justify-center gap-3 group-hover:bg-white/50 transition-colors">
                    <Upload size={20} className="text-black" />
                    <span className="font-black text-black text-xs uppercase tracking-tighter">
                      Bestanden uploaden
                    </span>
                  </div>
                </div>
              </div>
                */}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-[#FFD300] font-black uppercase py-5 rounded-2xl 
                           hover:bg-white hover:text-black transition-all duration-300 tracking-[0.2em] shadow-xl flex items-center justify-center gap-2 group"
              >
                Verzenden{" "}
                <Send
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
