import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartButton: React.FC = () => {
  const { dispatch, itemCount } = useCart();
  
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => dispatch({ type: 'TOGGLE_CART' })}
        className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400 transition-colors duration-200 hover:bg-primary/10 dark:hover:bg-primary/10 rounded-lg"
        aria-label={`${itemCount} items in cart, view cart`}
      >
        <div className="relative">
          <ShoppingCart
            className="h-5 w-5"
            aria-hidden="true"
          />
          {itemCount > 0 && (
            <span 
              className="absolute -top-2 -right-2 flex items-center justify-center h-5 w-5 rounded-full bg-primary text-white text-xs font-medium"
              aria-hidden="true"
            >
              {itemCount > 9 ? '9+' : itemCount}
            </span>
          )}
        </div>
        <span className="text-sm font-medium">
          Cart
        </span>
        <span className="sr-only">
          {itemCount === 0 ? 'Cart is empty' : `${itemCount} items in cart`}, view cart
        </span>
      </button>
    </div>
  );
};

export default CartButton;
