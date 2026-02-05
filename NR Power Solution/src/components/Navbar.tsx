import logoImg from "/images/NR Power Solutions.png";

const navItems = [
  { id: "Home", label: "Home" },
  { id: "Over ons", label: "Over ons" },
  { id: "Diensten", label: "Diensten" },
  { id: "Referenties", label: "Referenties" },
  { id: "Contact", label: "Contact" },
  { id: "Vraag een offerte", label: "Vraag een offerte" },
];

export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-between py-4 px-4 md:px-8">
      {/* Logo: flex-grow-0 zorgt dat het niet onnodig ruimte inneemt */}
      <div className="flex-shrink-0">
        <img
          src={logoImg}
          alt="NR Power Solutions"
          className="h-20 w-auto object-contain"
        />
      </div>

      {/* Navigatie: ml-auto is een extra 'force' om alles naar rechts te duwen */}
      <nav className="ml-auto flex items-center gap-4 lg:gap-8">
        {navItems.map((navItem) => (
          <a
            key={navItem.id}
            href={`#${navItem.id}`}
            className={
              navItem.label === "Vraag een offerte"
                ? "px-6 py-3 bg-[#FFD300] text-black font-bold rounded-full shadow-lg hover:bg-white hover:scale-105 transition-all duration-300 whitespace-nowrap uppercase text-sm"
                : "px-3 py-2 text-gray-300 transition-all duration-300 font-medium rounded-lg hover:bg-[#FFD300] hover:text-black whitespace-nowrap"
            }
          >
            {navItem.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
