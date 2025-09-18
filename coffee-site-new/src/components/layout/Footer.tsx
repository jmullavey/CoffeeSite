import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Brand and Tagline */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Uncharted Grounds Coffee</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Crafting the perfect cup, one bean at a time.
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/menu" className="text-gray-600 hover:text-amber-600 dark:text-gray-300 dark:hover:text-amber-400 transition-colors duration-200">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-amber-600 dark:text-gray-300 dark:hover:text-amber-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-600 hover:text-amber-600 dark:text-gray-300 dark:hover:text-amber-400 transition-colors duration-200">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-amber-600 dark:text-gray-300 dark:hover:text-amber-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Visit Us
            </h3>
            <address className="not-italic text-gray-600 dark:text-gray-300">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p>123 Court Street</p>
                  <p>Pekin, IL 61554</p>
                </div>
              </div>
            </address>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <a href="mailto:info@coffeehaven.com" className="text-primary hover:text-primary/90 transition-colors duration-200">
                  info@unchartedgrounds.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <a href="tel:+15558675309" className="text-primary hover:text-primary/90 transition-colors duration-200">
                  (555) 867-5309
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary rounded-full p-2 text-white hover:bg-primary/90 transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="bg-primary rounded-full p-2 text-white hover:bg-primary/90 transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="bg-primary rounded-full p-2 text-white hover:bg-primary/90 transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Coffee Haven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
