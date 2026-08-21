/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { Instagram } from 'lucide-react';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import SearchBar from './components/SearchBar';
import MenuItem from './components/MenuItem';
import { MENU_DATA, CATEGORIES } from './data';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    if (searchQuery.trim() !== "") {
      // Global search
      return Object.values(MENU_DATA).flat().filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    // Category search
    return MENU_DATA[selectedCategory as keyof typeof MENU_DATA];
  }, [selectedCategory, searchQuery]);

  const displayTitle = searchQuery.trim() !== "" ? "Resultados da Busca" : selectedCategory;

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <CategoryNav 
        selectedCategory={selectedCategory} 
        onSelect={(cat) => {
          setSelectedCategory(cat);
          setSearchQuery("");
        }} 
      />
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <main className="p-4 space-y-4">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-red-600 pb-2">{displayTitle}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <MenuItem key={item.name} name={item.name} price={item.price} image={item.image} />
          ))}
        </div>
      </main>
      <footer className="p-6 mt-8 border-t border-red-600 text-center text-sm text-zinc-400">
        <a 
          href="https://www.instagram.com/ikigaisushiam/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex justify-center mb-4 text-white hover:text-red-500 transition-colors"
        >
          <Instagram size={32} />
        </a>
        <p>De segunda a domingo das 18h às 23h</p>
        <p>Av. Morcy Barroso, Ipixuna - AM</p>
      </footer>
    </div>
  );
}

