import React, { useState, useEffect } from "react";
import { Send, X, Upload } from "lucide-react";

export default function OfferteModal({ isOpen, onClose }) {
  const [isRendered, setIsRendered] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      setResult(""); // Reset status bij openen
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      setTimeout(() => setIsRendered(false), 300);
    }
  }, [isOpen]);

  if (!isRendered) return null;

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Verzenden....");

    const formData = new FormData(event.target);
    formData.append("access_key", "4e3c61b2-23b2-48e3-b6d2-bec4c075340f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Formulier succesvol verzonden!");
        event.target.reset();
        // Sluit de modal automatisch na 2 seconden bij succes
        setTimeout(() => onClose(), 2000);
      } else {
        console.log("Error", data);
        setResult(data.message || "Er is een fout opgetreden.");
      }
    } catch (error) {
      setResult("Netwerkfout, probeer het later opnieuw.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className={`absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>

      <div
        className={`relative w-full max-w-4xl transition-all duration-300 ease-out shadow-2xl ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="bg-[#FFD300] rounded-4xl p-6 md:p-10 relative border-4 border-black/5">
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
            onSubmit={onSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5"
          >
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-black font-black uppercase text-sm ml-1">
                    Naam *
                  </label>
                  <input
                    required
                    name="name"
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
                    name="phone"
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
                  name="email"
                  type="email"
                  placeholder="naam@voorbeeld.be"
                  className="w-full p-4 rounded-2xl border-none bg-white text-black font-bold outline-none focus:ring-4 focus:ring-black/10 transition-all"
                />
              </div>

              <div className="grid grid-cols-4 gap-3 pt-2">
                <div className="col-span-3 space-y-2">
                  <label className="block text-black font-black uppercase text-sm ml-1">
                    Straat *
                  </label>
                  <input
                    required
                    name="street"
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
                    name="house_number"
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
                    name="zipcode"
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
                    name="city"
                    type="text"
                    className="w-full p-4 rounded-2xl border-none bg-white text-black font-bold outline-none focus:ring-4 focus:ring-black/10 transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-5 flex flex-col">
              <div className="space-y-2">
                <label className="block text-black font-black uppercase text-sm ml-1">
                  Wat wenst u? *
                </label>
                <div className="flex gap-3">
                  <label className="flex-1 cursor-pointer group">
                    <input
                      type="radio"
                      name="request_type"
                      value="Prijs Offerte"
                      className="hidden peer"
                      defaultChecked
                    />
                    <div className="w-full py-4 text-center rounded-2xl font-black uppercase text-xs tracking-widest transition-all bg-white/40 text-black border-2 border-transparent peer-checked:bg-black peer-checked:text-white peer-checked:scale-[1.02] group-hover:bg-white/60">
                      Prijs Offerte
                    </div>
                  </label>
                  <label className="flex-1 cursor-pointer group">
                    <input
                      type="radio"
                      name="request_type"
                      value="Plaatsbezoek"
                      className="hidden peer"
                    />
                    <div className="w-full py-4 text-center rounded-2xl font-black uppercase text-xs tracking-widest transition-all bg-white/40 text-black border-2 border-transparent peer-checked:bg-black peer-checked:text-white peer-checked:scale-[1.02] group-hover:bg-white/60">
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
                  name="message"
                  rows={4}
                  placeholder="Beschrijf kort de gewenste werken..."
                  className="w-full p-4 rounded-2xl border-none bg-white text-black font-bold outline-none resize-none focus:ring-4 focus:ring-black/10 h-[120px] transition-all"
                ></textarea>
              </div>

              <div className="space-y-2">
                <label className="block text-black font-black uppercase text-sm ml-1">
                  Bijlagen (Foto's/Plannen)
                </label>
                <div className="relative group">
                  <input
                    type="file"
                    name="attachment"
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

              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-black text-[#FFD300] font-black uppercase py-5 rounded-2xl 
                             hover:bg-white hover:text-black transition-all duration-300 tracking-[0.2em] shadow-xl flex items-center justify-center gap-2 group
                             ${isSubmitting ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                >
                  {isSubmitting ? "Bezig..." : "Verzenden"}
                  {!isSubmitting && (
                    <Send
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  )}
                </button>

                {result && (
                  <p className="text-center text-black font-black uppercase text-xs tracking-tighter animate-pulse">
                    {result}
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
