import React, { useState } from 'react';
import { FiShoppingCart, FiCheck } from 'react-icons/fi';
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
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_ITEM',
      payload: item,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className={`group inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 transition-all duration-300
  ${added ? 'bg-amber-500 text-white' : 'bg-primary text-white hover:bg-primary/90 active:bg-primary/95'}
        hover:no-underline ${className}`}
      disabled={added}
      aria-live="polite"
    >
      {added ? (
        <FiCheck className="mr-2 h-5 w-5 transition-transform duration-300 scale-110 text-white" />
      ) : (
        <FiShoppingCart className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:text-amber-300" />
      )}
      {added ? 'Added!' : children}
    </button>
  );
};

export default AddToCartButton;
