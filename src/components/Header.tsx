import { Instagram, Clock } from "lucide-react";

export default function Header() {
  const hour = new Date().getHours();
  // Open 18:00 to 23:00
  const isOpen = hour >= 18 && hour < 23;

  return (
    <header className="relative bg-black text-white p-4 flex flex-col items-center border-b border-red-600">
      <a
        href="https://www.instagram.com/ikigaisushiam/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
      >
        <Instagram size={20} />
      </a>
      
      <img
        src="https://i.imgur.com/rFsL9aG.png"
        alt="IKIGAI SUSHI Logo"
        className="w-[110px] h-[110px] object-contain"
      />
      
      <p className="text-zinc-300 text-xs mt-2 text-center font-light">
        A verdadeira experiência da culinária japonesa 🍣
      </p>
      
      <div className="flex items-center gap-1.5 text-xs text-zinc-400 mt-1.5">
        <Clock size={12} /> 
        Seg a Dom · 18h às 23h
      </div>

      <div className="flex items-center gap-1.5 text-[10px] mt-1 uppercase tracking-wider font-semibold">
        <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'}`} />
        {isOpen ? 'Aberto agora' : 'Fechado'}
      </div>
    </header>
  );
}
