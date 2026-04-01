import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 px-5">
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
              value="+32 400 00 00 00"
            />
            <ContactDetail
              Icon={Mail}
              title="E-mail"
              value="info@elektro-bedrijf.be"
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

          <div className="bg-[#FFD300] p-8 md:p-10 rounded-4xl shadow-lg shadow-[#FFD300]/20">
            <form className="space-y-4">
              <div>
                <label className="block text-black font-bold uppercase text-sm mb-1 ml-1">
                  Naam
                </label>
                <input
                  type="text"
                  placeholder="Uw volledige naam"
                  className="w-full p-4 rounded-2xl border-none bg-white text-black placeholder-gray-500 focus:ring-4 focus:ring-black/10 outline-none"
                />
              </div>
              <div>
                <label className="block text-black font-bold uppercase text-sm mb-1 ml-1">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="uw@email.com"
                  className="w-full p-4 rounded-2xl border-none bg-white text-black placeholder-gray-500 focus:ring-4 focus:ring-black/10 outline-none"
                />
              </div>
              <div>
                <label className="block text-black font-bold uppercase text-sm mb-1 ml-1">
                  Bericht
                </label>
                <textarea
                  rows={4}
                  placeholder="Hoe kunnen we u helpen?"
                  className="w-full p-4 rounded-2xl border-none bg-white text-black placeholder-gray-500 focus:ring-4 focus:ring-black/10 outline-none resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white font-black uppercase py-4 rounded-2xl 
                           hover:bg-white hover:text-black transition-colors duration-300 tracking-widest mt-4"
              >
                Verstuur Bericht
              </button>
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
