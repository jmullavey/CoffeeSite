import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddToCartButton from '../components/cart/AddToCartButton';
import muffinImg from '../assets/images/muffin.jpg';

// Fallback image for menu items
const placeholderImage = '/images/placeholder-food.svg';

const Menu: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const menuItems = [
    {
      category: 'Coffee',
      items: [
        { 
          id: 'espresso',
          name: 'Espresso', 
          description: 'Rich and concentrated coffee', 
          price: 3.50,
          image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80'
        },
        { 
          id: 'americano',
          name: 'Americano', 
          description: 'Espresso with hot water', 
          price: 3.75,
          image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
        },
        { 
          id: 'cappuccino',
          name: 'Cappuccino', 
          description: 'Espresso with steamed milk and foam', 
          price: 4.50,
          image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80'
        },
        { 
          id: 'latte',
          name: 'Latte', 
          description: 'Espresso with steamed milk', 
          price: 4.75,
          image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80'
        },
        { 
          id: 'mocha',
          name: 'Mocha', 
          description: 'Espresso with chocolate and steamed milk', 
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
          description: 'Black tea with bergamot', 
          price: 3.50,
          image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' // Earl Grey example
        },
        { 
          id: 'green-tea',
          name: 'Green Tea', 
          description: 'Light and refreshing', 
          price: 3.50,
          image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80'
        },
        { 
          id: 'chamomile',
          name: 'Chamomile', 
          description: 'Herbal tea with floral notes', 
          price: 3.50,
          image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80' // Chamomile example
        },
      ]
    },
    {
      category: 'Pastries',
      items: [
        { 
          id: 'croissant',
          name: 'Croissant', 
          description: 'Buttery and flaky', 
          price: 3.75,
          image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80'
        },
        { 
          id: 'blueberry-muffin',
          name: 'Blueberry Muffin', 
          description: 'Freshly baked daily', 
          price: 3.50,
          image: muffinImg
        },
        { 
          id: 'cinnamon-roll',
          name: 'Cinnamon Roll', 
          description: 'With cream cheese frosting', 
          price: 4.25,
          image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80'
        },
      ]
    }
  ];

  return (
    <div className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Menu</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Handcrafted with the finest ingredients
          </p>
        </div>

        <div className="space-y-16">
          {menuItems.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                {section.category}
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item) => (
                  <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
                    <div className="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                      <img 
                        src={item.image || placeholderImage} 
                        alt={item.name}
                        className="w-full h-48 object-cover rounded-md mb-2"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = placeholderImage;
                        }}
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                        <p className="text-lg font-medium text-amber-600 dark:text-amber-400">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <p className="mt-2 text-gray-600 dark:text-gray-300 flex-1">{item.description}</p>
                      <div className="mt-4">
                        <AddToCartButton 
                          item={item} 
                          className="w-full py-2.5 text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
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

        <div className="mt-16 bg-amber-50 dark:bg-amber-900/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Have special dietary needs?
          </h3>
          <p className="text-gray-600 dark:text-amber-100 mb-6 max-w-2xl mx-auto">
            We offer a variety of plant-based milk alternatives and can accommodate most dietary restrictions. Just ask your barista!
          </p>
          <Link 
            to="/contact" 
            className="group inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
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
