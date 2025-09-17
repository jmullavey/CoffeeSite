import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
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

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_ITEM',
      payload: item,
    });
  };

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className={`group inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 hover:no-underline active:bg-primary/95 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 transition-all duration-300 ${className}`}
    >
  <FiShoppingCart className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:text-amber-300" />
      {children}
    </button>
  );
};

export default AddToCartButton;
