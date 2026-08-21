import { Instagram } from "lucide-react";

export default function Header() {
  return (
    <header className="relative flex flex-col items-center p-4 bg-black border-b border-red-600">
      <a
        href="https://www.instagram.com/ikigaisushiam/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-3 right-3 text-white hover:text-red-500 transition-colors"
      >
        <Instagram size={18} />
      </a>
      <img
        src="https://i.imgur.com/rFsL9aG.png"
        alt="IKIGAI SUSHI Logo"
        className="max-w-[180px] h-auto mb-2"
      />
      <img
        src="https://i.imgur.com/B76h1f4.png"
        alt="Cardápio IKIGAI SUSHI"
        className="max-w-[200px] h-auto"
      />
    </header>
  );
}
