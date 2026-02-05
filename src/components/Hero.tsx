import heroImg from "/images/Hero.png";
import logoImg from "/images/NR logo.png";

export default function Hero() {
  return (
    <section className="w-full min-h-[80vh] flex items-center bg-[#121212] px-6 lg:px-16 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Linkerkant: Tekst & Content */}
        <div className="order-2 lg:order-1">
          <span className="text-[#FFD300] text-sm uppercase tracking-widest font-semibold mb-4 block">
            — Uw partner in elektrotechniek
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
            Energie voor vandaag
          </h1>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#FFD300] mt-2">
            Klaar voor morgen
          </h2>

          <p className="text-gray-400 mt-6 text-lg max-w-lg">
            Van noodherstellingen tot complete renovaties en industriële
            installaties. Wij bieden veilige en efficiënte stroomoplossingen.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-8">
            {/* Onze Diensten Button als A-tag */}
            <a
              href="#diensten"
              className="px-8 py-4 bg-[#FFD300] text-black font-bold rounded-full hover:bg-white transition-all duration-300 shadow-lg shadow-[#FFD300]/20 uppercase text-sm tracking-wider"
            >
              Onze Diensten
            </a>

            {/* Telefoon Sectie */}
            <a
              href="tel:0495350558"
              className="flex items-center gap-3 text-white hover:text-[#FFD300] transition-colors group"
            >
              <div className="p-3 bg-gray-800 rounded-full group-hover:bg-[#FFD300] group-hover:text-black transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.143-7.143c-.155-.441.01-.928.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <span className="font-bold text-lg text-white">
                04 95 35 05 58
              </span>
            </a>
          </div>
        </div>

        {/* Rechterkant: Afbeelding */}
        <div className="order-1 lg:order-2 relative">
          {/* Het gele icoon overlay uit het ontwerp */}
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
            <div className="bg-[#121212] p-6 rounded-xl shadow-2xl">
              <img src={logoImg} className="h-13" />
            </div>
          </div>

          <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-gray-800/50 shadow-2xl">
            <img
              src={heroImg}
              alt="Elektricien aan het werk"
              className="w-full h-full object-cover min-h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
