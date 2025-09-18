import React, { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../../context/CartContext';

type AddToCartButtonProps = {
  item: {
    id: string;
    name: string;
    price: number;
    image?: string;
  };
  className?: string;
  children?: React.ReactNode;
};

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  item,
  className = '',
  children = 'Add to cart',
}) => {
  const { dispatch } = useCart();

  const [selected, setSelected] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_ITEM',
      payload: item,
    });
    setSelected(true);
    setTimeout(() => setSelected(false), 1200);
  };

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className={`group inline-flex items-center justify-center px-5 py-3 text-base font-semibold rounded-lg text-white bg-primary hover:bg-primary/90 active:bg-primary/95 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 transition-all duration-300 ${selected ? 'scale-105 bg-green-600' : ''} ${className}`}
      style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)', transition: 'transform 0.3s, background 0.3s' }}
      aria-pressed={selected}
    >
      <span className="mr-2">
        {selected ? (
          <Check className="transition-transform duration-300 ease-in-out will-change-transform transition-colors text-white scale-110" style={{ willChange: 'transform' }} aria-hidden="true" />
        ) : (
          <ShoppingCart
            className="transition-transform duration-300 ease-in-out will-change-transform transition-colors group-hover:-rotate-[18deg] group-hover:scale-110 text-white group-hover:text-amber-300"
            style={{ willChange: 'transform' }}
            aria-hidden="true"
          />
        )}
      </span>
      {selected ? 'Added!' : children}
    </button>
  );
};

export default AddToCartButton;
