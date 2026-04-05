import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Verzenden....");

    // Haalt automatisch alle data uit de formulier-velden (dankzij de 'name' attributen)
    const formData = new FormData(event.target);
    // Jouw Web3Forms Access Key
    formData.append("access_key", "4e3c61b2-23b2-48e3-b6d2-bec4c075340f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Bericht succesvol verzonden!");
        event.target.reset(); // Maakt de velden weer leeg

        // Verberg succesbericht na 5 seconden
        setTimeout(() => setResult(""), 5000);
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
    <section id="Contact" className="py-20 px-5">
      {/* Header */}
      <div className="flex flex-col items-center mb-16">
        <span className="text-[#FFD300] text-sm uppercase tracking-[0.3em] font-bold mb-2">
          Heeft u vragen?
        </span>
        <h2 className="relative text-5xl md:text-6xl font-black text-white uppercase text-center">
          Contacteer Ons
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-2 bg-[#FFD300] rounded-full shadow-[0_0_15px_#FFD300]"></span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Links: Contact Informatie */}
        <div className="space-y-8">
          <p className="text-white text-lg max-w-md">
            Wilt u een offerte aanvragen of heeft u een technisch probleem? Vul
            het formulier in of neem direct contact met ons op via onderstaande
            gegevens.
          </p>

          <div className="space-y-6">
            <ContactDetail
              Icon={Phone}
              title="Telefoon"
              value="+32 495 35 05 58"
            />
            <ContactDetail
              Icon={Mail}
              title="E-mail"
              value="info@nrpowersolutions.be"
            />
            <ContactDetail
              Icon={MapPin}
              title="Locatie"
              value="Antwerpen, België"
            />
          </div>
        </div>

        {/* Rechts: Contact Formulier */}
        <div className="relative group">
          <div
            className="absolute -top-4 -right-4 bg-white rounded-full w-20 h-20 z-10 
                       flex items-center justify-center shadow-lg border-4 border-[#121212]
                       transition-all duration-300 group-hover:rotate-12"
          >
            <Send color="black" size={32} />
          </div>

          <div className="bg-[#FFD300] p-8 md:p-10 rounded-4xl shadow-lg shadow-[#FFD300]/20 relative border-4 border-black/5">
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-black font-black uppercase text-sm mb-1 ml-1">
                  Naam *
                </label>
                <input
                  type="text"
                  name="name" // Belangrijk voor FormData
                  required
                  placeholder="Uw volledige naam"
                  className="w-full p-4 rounded-2xl border-none bg-white text-black font-bold outline-none focus:ring-4 focus:ring-black/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-black font-black uppercase text-sm mb-1 ml-1">
                  E-mail *
                </label>
                <input
                  type="email"
                  name="email" // Belangrijk voor FormData
                  required
                  placeholder="uw@email.com"
                  className="w-full p-4 rounded-2xl border-none bg-white text-black font-bold outline-none focus:ring-4 focus:ring-black/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-black font-black uppercase text-sm mb-1 ml-1">
                  Bericht *
                </label>
                <textarea
                  name="message" // Belangrijk voor FormData
                  required
                  rows={4}
                  placeholder="Hoe kunnen we u helpen?"
                  className="w-full p-4 rounded-2xl border-none bg-white text-black font-bold outline-none resize-none focus:ring-4 focus:ring-black/10 transition-all"
                ></textarea>
              </div>

              {/* Verzendknop & Statusbericht */}
              <div className="space-y-3 mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-black text-[#FFD300] font-black uppercase py-5 rounded-2xl 
                             hover:bg-white hover:text-black transition-all duration-300 tracking-[0.2em] shadow-xl flex items-center justify-center gap-2 group
                             ${isSubmitting ? "opacity-50 cursor-not-allowed" : "cursor-pointer active:scale-95"}`}
                >
                  {isSubmitting ? "Bezig..." : "Verstuur Bericht"}
                  {!isSubmitting && (
                    <Send
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  )}
                </button>

                {result && (
                  <p className="text-center text-black font-black uppercase text-xs tracking-tighter animate-pulse mt-2">
                    {result}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactDetail({ Icon, title, value }) {
  return (
    <div className="flex items-center gap-5">
      <div className="bg-[#FFD300] p-4 rounded-2xl">
        <Icon size={24} className="text-black" />
      </div>
      <div>
        <h4 className="text-gray-400 uppercase text-xs font-bold tracking-widest">
          {title}
        </h4>
        <p className="text-white text-xl font-bold">{value}</p>
      </div>
    </div>
  );
}
