import { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { TELEFONE_WHATSAPP } from '../data';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  price: number;
}

const BASES = ['Arroz', 'Mix de Folhas'];
const PROTEINAS = ['Salmão em cubos 100g', 'Salmão maçaricado 100g', 'Salmão trufado 100g', 'Salmão Croc 100g', 'Salmão Grelhado 100g', 'Camarão Empanado 100g', 'Bolinho de Salmão'];
const ACOMPANHAMENTOS = ['Crispy de Couve', 'Crispy de Alho Poró', 'Crispy de Cenoura', 'Manga', 'Sunomono', 'Cebola Roxa', 'Abacaxi', 'Kani', 'Tomate Cereja'];

export default function PokeModal({ isOpen, onClose, price }: Props) {
  const [base, setBase] = useState(BASES[0]);
  const [protein, setProtein] = useState(PROTEINAS[0]);
  const [accompaniments, setAccompaniments] = useState<string[]>([]);

  if (!isOpen) return null;

  const toggleAccompaniment = (item: string) => {
    if (accompaniments.includes(item)) {
      setAccompaniments(accompaniments.filter(a => a !== item));
    } else if (accompaniments.length < 5) {
      setAccompaniments([...accompaniments, item]);
    }
  };

  const handleOrder = () => {
    const message = `Olá! Gostaria de montar meu Poke:
Base: ${base}
Proteína: ${protein}
Acompanhamentos: ${accompaniments.join(', ')}
Total: R$ ${price.toFixed(2)}`;
    const url = `https://wa.me/${TELEFONE_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-900 border border-red-600 rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-red-500">
          <X size={24} />
        </button>
        <h2 className="text-xl font-bold text-white mb-4">Monte Seu Poke</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">Base</label>
            <div className="grid grid-cols-2 gap-2">
              {BASES.map(b => (
                <button key={b} onClick={() => setBase(b)} className={`p-2 rounded text-sm ${base === b ? 'bg-red-600 text-white' : 'bg-zinc-800 text-zinc-300'}`}>{b}</button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">Proteína</label>
            <div className="space-y-1">
              {PROTEINAS.map(p => (
                <button key={p} onClick={() => setProtein(p)} className={`w-full p-2 rounded text-sm text-left ${protein === p ? 'bg-red-600 text-white' : 'bg-zinc-800 text-zinc-300'}`}>{p}</button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">Acompanhamentos (Escolha 5)</label>
            <div className="grid grid-cols-2 gap-2">
              {ACOMPANHAMENTOS.map(a => (
                <button key={a} onClick={() => toggleAccompaniment(a)} className={`p-2 rounded text-sm ${accompaniments.includes(a) ? 'bg-red-600 text-white' : 'bg-zinc-800 text-zinc-300'}`}>{a}</button>
              ))}
            </div>
          </div>
        </div>

        <button 
          onClick={handleOrder}
          disabled={accompaniments.length !== 5}
          className="mt-6 w-full bg-red-600 text-white py-3 rounded font-bold disabled:bg-zinc-700 disabled:text-zinc-500"
        >
          Pedir Poke (R$ {price.toFixed(2)})
        </button>
      </div>
    </div>
  );
}
