import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="px-4 py-2 bg-black">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" size={18} />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Buscar pratos..."
          className="w-full bg-zinc-900 text-white pl-10 pr-4 py-2 rounded-lg border border-zinc-700 focus:outline-none focus:border-red-600 transition-colors"
        />
      </div>
    </div>
  );
}
