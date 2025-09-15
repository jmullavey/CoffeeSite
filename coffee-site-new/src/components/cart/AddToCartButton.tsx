import React from 'react';
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
      className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default AddToCartButton;
