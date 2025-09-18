import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddToCartButton from '../components/cart/AddToCartButton';
import muffinImg from '../assets/images/muffin.jpg';

// Best practice: Move static data outside the component to prevent re-creation on every render.
const menuItems = [
  {
    category: 'Coffee',
    items: [
      {
        id: 'espresso',
        name: 'Espresso',
        description: 'A rich and concentrated shot of our signature blend.',
        price: 3.50,
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 'americano',
        name: 'Americano',
        description: 'Espresso with hot water, creating a full-bodied cup of coffee.',
        price: 3.75,
        image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 'cappuccino',
        name: 'Cappuccino',
        description: 'A classic mix of espresso, steamed milk, and a thick layer of foam.',
        price: 4.50,
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 'latte',
        name: 'Latte',
        description: 'Smooth espresso with creamy, steamed milk, topped with a hint of foam.',
        price: 4.75,
        image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 'mocha',
        name: 'Mocha',
        description: 'Espresso combined with rich chocolate and steamed milk, a perfect treat.',
        price: 5.00,
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80'
      },
    ]
  },
  {
    category: 'Tea',
    items: [
      {
        id: 'earl-grey',
        name: 'Earl Grey',
        description: 'Aromatic black tea with a distinctive bergamot flavor.',
        price: 3.50,
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 'green-tea',
        name: 'Green Tea',
        description: 'Light and refreshing green tea, known for its clean finish.',
        price: 3.50,
        image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 'chamomile',
        name: 'Chamomile',
        description: 'A soothing herbal tea with gentle floral and apple notes.',
        price: 3.50,
        image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80'
      },
    ]
  },
  {
    category: 'Pastries',
    items: [
      {
        id: 'croissant',
        name: 'Croissant',
        description: 'A classic French pastry: light, buttery, and perfectly flaky.',
        price: 3.75,
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 'blueberry-muffin',
        name: 'Blueberry Muffin',
        description: 'Freshly baked muffin packed with sweet, juicy blueberries.',
        price: 3.50,
        image: muffinImg
      },
      {
        id: 'cinnamon-roll',
        name: 'Cinnamon Roll',
        description: 'A warm, gooey roll swirled with cinnamon and topped with sweet cream cheese frosting.',
        price: 4.25,
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80'
      },
    ]
  }
];

const Menu: React.FC = () => {
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Menu</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Handcrafted with the finest ingredients, from our classic coffee to fresh pastries.
          </p>
        </div>

        {/* Order Type Toggle */}
        <div className="mb-12 flex flex-col items-center">
          <div className="w-full max-w-md">
            <div
              className="flex w-full rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 overflow-hidden shadow-sm p-1"
              role="group"
              aria-label="Order type toggle"
            >
              <button
                className={`flex-1 flex items-center justify-center py-2.5 px-4 text-sm font-semibold rounded-full transition-all duration-300 focus:outline-none focus:z-10 group ${orderType === 'delivery' ? 'bg-primary text-white shadow-md' : 'bg-transparent text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                onClick={() => setOrderType('delivery')}
                aria-pressed={orderType === 'delivery'}
              >
                <span className="mr-2">
                  <svg className={`transition-transform duration-300 ease-in-out will-change-transform transition-colors group-hover:-rotate-[18deg] group-hover:scale-110 ${orderType === 'delivery' ? 'text-white' : 'text-gray-400'} group-hover:text-amber-300`} style={{ willChange: 'transform' }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M3 13v-2h2v2H3zm16-2v2h2v-2h-2zm-1.5 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-10 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm13.5-3V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h1.18a3 3 0 0 0 5.64 0h2.36a3 3 0 0 0 5.64 0H19a2 2 0 0 0 2-2zm-2-7v7H5V7h14z"/></svg>
                </span>
                Delivery
              </button>
              <button
                className={`flex-1 flex items-center justify-center py-2.5 px-4 text-sm font-semibold rounded-full transition-all duration-300 focus:outline-none focus:z-10 group ${orderType === 'pickup' ? 'bg-primary text-white shadow-md' : 'bg-transparent text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                onClick={() => setOrderType('pickup')}
                aria-pressed={orderType === 'pickup'}
              >
                <span className="mr-2">
                  <svg className={`transition-transform duration-300 ease-in-out will-change-transform transition-colors group-hover:-rotate-[18deg] group-hover:scale-110 ${orderType === 'pickup' ? 'text-white' : 'text-gray-400'} group-hover:text-amber-300`} style={{ willChange: 'transform' }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6zm0 2h12v16H6V4zm6 2a2 2 0 0 1 2 2v2h-4V8a2 2 0 0 1 2-2zm-2 6h4v6h-4v-6z"/></svg>
                </span>
                Pickup
              </button>
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="space-y-16">
          {menuItems.map((section, sectionIndex) => (
            <div key={sectionIndex} id={section.category.toLowerCase().replace(/\s/g, '-')} className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-4">
                {section.category}
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item) => (
                  <div key={item.id} className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                        <p className="text-xl font-bold text-amber-600 dark:text-amber-400">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <p className="mt-1 text-gray-600 dark:text-gray-300 flex-1">{item.description}</p>
                      <div className="mt-6">
                        <AddToCartButton
                          item={item}
                          className="w-full py-3 text-base font-semibold rounded-lg text-white bg-primary hover:bg-primary/90 active:bg-primary/95 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 transition-all duration-300"
                        >
                          Add to Cart
                        </AddToCartButton>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dietary Needs Section */}
        <div className="mt-16 bg-amber-50 dark:bg-amber-900/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Have special dietary needs?
          </h3>
          <p className="text-gray-600 dark:text-amber-100 mb-6 max-w-2xl mx-auto">
            We offer a variety of plant-based milk alternatives and can accommodate most dietary restrictions. Just ask your barista!
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 active:bg-primary/95 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 transition-all duration-300 no-underline"
            style={{ textDecoration: 'none' }}
          >
            <span className="relative group-hover:after:scale-x-100 after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:transition-transform after:duration-300 after:origin-bottom-right after:ease-out">Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;