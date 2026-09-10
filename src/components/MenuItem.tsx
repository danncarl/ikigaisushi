import { MessageCircle, UtensilsCrossed } from "lucide-react";
import { TELEFONE_WHATSAPP } from "../data";

interface Props {
  name: string;
  price: number;
  image?: string;
}

export default function MenuItem({ name, price, image }: Props) {
  const handleOrder = () => {
    const message = `Olá! Gostaria de fazer o seguinte pedido: ${name} - R$ ${price.toFixed(2)}`;
    const url = `https://wa.me/${TELEFONE_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-black border border-white rounded-lg overflow-hidden flex flex-col h-full">
      <div className="aspect-[4/5] bg-zinc-900 flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <UtensilsCrossed size={48} className="text-zinc-700" />
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-white font-medium text-sm mb-2 flex-grow">{name}</h3>
        <p className="text-red-500 font-bold mb-3">R$ {price.toFixed(2)}</p>
        <button
          onClick={handleOrder}
          className="bg-red-600 text-white w-full py-2 rounded flex items-center justify-center gap-2 hover:bg-red-700 transition-colors text-sm font-semibold"
        >
          <MessageCircle size={16} />
          Pedir
        </button>
      </div>
    </div>
  );
}
