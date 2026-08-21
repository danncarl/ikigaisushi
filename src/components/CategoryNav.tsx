import { CATEGORIES } from "../data";

interface Props {
  selectedCategory: string;
  onSelect: (category: string) => void;
}

export default function CategoryNav({ selectedCategory, onSelect }: Props) {
  return (
    <nav className="sticky top-0 bg-black border-b border-red-600 overflow-x-auto whitespace-nowrap p-2 flex gap-2">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === category
              ? "bg-red-600 text-white"
              : "bg-black text-white border border-white hover:bg-white hover:text-black"
          }`}
        >
          {category}
        </button>
      ))}
    </nav>
  );
}
