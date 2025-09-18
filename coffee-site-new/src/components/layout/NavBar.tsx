import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, Menu, X, ShoppingCart } from 'lucide-react';
import CartButton from '../cart/CartButton';

const NavBar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
              Uncharted Grounds Coffee
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/about" 
              className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-primary/10 dark:hover:bg-primary/10 no-underline hover:no-underline"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-primary/10 dark:hover:bg-primary/10 no-underline hover:no-underline"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/events" 
              className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-primary/10 dark:hover:bg-primary/10 no-underline hover:no-underline"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>
            
            {/* Order button placed after Events and before theme toggle */}
            <Link
              to="/menu"
              onClick={() => setMobileMenuOpen(false)}
              className="group inline-flex items-center justify-center px-5 py-3 rounded-xl text-base font-semibold text-white bg-primary hover:bg-primary/90 active:bg-primary/95 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 transition-all duration-200 no-underline hover:no-underline shadow-md"
            >
                  <ShoppingCart
                    className="h-6 w-6 mr-2 transition-transform duration-300 ease-in-out will-change-transform transition-colors group-hover:-rotate-[18deg] group-hover:scale-110 group-hover:text-amber-300 text-white"
                    style={{ willChange: 'transform' }}
                    aria-hidden="true"
                  />
              <span className="ml-2">Order</span>
            </Link>

            <div className="flex items-center space-x-4 ml-4">
              <button
                onClick={toggleTheme}
                className="btn btn-ghost p-2 rounded-full text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              
              <div className="h-6 w-px bg-gray-200 dark:bg-gray-700" />
              
              <CartButton />
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                to="/menu"
                className="block w-full text-left px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary/10 dark:hover:bg-primary/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Order
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary/10 dark:hover:bg-primary/10 transition-colors no-underline hover:no-underline"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/events"
                className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary/10 dark:hover:bg-primary/10 transition-colors no-underline hover:no-underline"
                onClick={() => setMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary/10 dark:hover:bg-primary/10 transition-colors no-underline hover:no-underline"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <button
                onClick={toggleTheme}
                className="w-full text-left px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary/10 dark:hover:bg-primary/10 transition-colors no-underline hover:no-underline"
              >
                {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
