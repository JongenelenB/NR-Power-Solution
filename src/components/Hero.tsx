import heroImg from "/images/Heros.png";
import logoImg from "/images/NR logo.png";
import { PhoneCall, Star } from "lucide-react";

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

          <div className="mt-10 flex flex-col items-start gap-8">
            {/* CTA Knoppen Rij */}
            <div className="flex flex-wrap items-center gap-8">
              <a
                href="#diensten"
                className="px-8 py-4 bg-[#FFD300] text-black font-bold rounded-full hover:bg-white transition-all duration-300 shadow-lg shadow-[#FFD300]/20 uppercase text-sm tracking-wider"
              >
                Contacteer ons
              </a>

              <a
                href="tel:0495350558"
                className="flex items-center gap-4 text-white hover:text-[#FFD300] transition-colors group"
              >
                <div className="p-3 bg-gray-800 rounded-full group-hover:bg-[#FFD300] group-hover:text-black transition-all duration-300">
                  <PhoneCall size={20} strokeWidth={2.5} />
                </div>
                <span className="font-bold text-lg text-white">
                  04 95 35 05 58
                </span>
              </a>
            </div>

            {/* Google Review Card - White Rounded Box */}
            <a
              href="https://www.google.com/search?sca_esv=bdb61428d65a36dc&sxsrf=ANbL-n4FeujpH-hPcoBrasLEW25x9aj56g:1770634681422&q=nr+power+solutions&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOWjMur-fSETY8PDrOnM5RRLxbplymxxcD0Yd82CceHLN8a4MU9S2mei_2BdlGaifcj7oJSI%3D&uds=ALYpb_myr09fc72P8O-r9Qptxpsdf7ApY0W_B-Jf-QpBlfQhhcvhRyC-3s9U5MDO3fnZe_Tl5SlR3H--aiCJu4GXdfCtZI2SlH3V4VGIS8zSpXXV4OIjD4g&sa=X&ved=2ahUKEwjogdqZoMySAxUpzwIHHV2hGlEQ3PALegQIGRAE&biw=1718&bih=574&dpr=1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-3 pr-6 flex items-center gap-4 shadow-xl shadow-black/50 hover:scale-[1.02] transition-transform duration-300 cursor-pointer max-w-md"
            >
              {/* Google 'G' Logo SVG */}
              <div className="bg-white p-2 rounded-full shadow-sm border border-gray-100">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </div>

              {/* Text & Stars */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1 mb-0.5">
                  <span className="font-bold text-gray-900 text-sm">5.0</span>
                  <div className="flex text-[#FBBC05]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-xs font-medium text-gray-500">
                  Bekijk onze reviews op Google
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Rechterkant: Afbeelding */}
        <div className="order-1 lg:order-2 relative">
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
            <div className="bg-[#121212] p-6 rounded-xl shadow-2xl">
              <img src={logoImg} className="h-12" alt="Logo" />
            </div>
          </div>

          <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-gray-800/50 shadow-2xl">
            <img
              src={heroImg}
              alt="Elektricien aan het werk"
              className="w-full h-[350px] lg:h-[550px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
