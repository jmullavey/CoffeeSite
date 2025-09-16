import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import VisitUsSection from '../components/VisitUsSection';
import { getTodaysSchedule, getMapEmbedUrl } from '../utils/scheduleUtils';

import visitUsLocations from '../components/visitUsLocations';
const schedule = visitUsLocations;

const todaySchedule = getTodaysSchedule(schedule);
const getMapCoords = (address: string) => {
  // Hardcoded for demo, but you could use a lookup or geocode
  if (address.includes('123 Court St')) return { lat: 40.567, lng: -89.644 };
  if (address.includes('456 River Rd')) return { lat: 40.568, lng: -89.650 };
  if (address.includes('789 Park Ave')) return { lat: 40.570, lng: -89.660 };
  // fallback Pekin
  return { lat: 40.567, lng: -89.644 };
};

const defaultCoords = getMapCoords(todaySchedule.address);

const Home: React.FC = () => {
  const [mapCoords, setMapCoords] = useState(defaultCoords);
  const mapRef = useRef<HTMLDivElement>(null);

  // Handler for Visit Us card 'View on map' links
  const handleViewOnMap = (address: string, locationUrl?: string) => {
    setMapCoords(getMapCoords(address));
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <Hero />

      {/* Visit Us Section */}
      <VisitUsSection paddingY="md" onViewOnMap={handleViewOnMap} />

      {/* Map Section (full-width) */}
      <div id="map" ref={mapRef} className="w-full bg-gray-100 dark:bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Location</h2>
            <div className="mt-6 w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Coffee Shop Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                className="bg-gray-200 dark:bg-gray-700"
                src={`https://www.google.com/maps?q=${mapCoords.lat},${mapCoords.lng}&z=15&output=embed`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <section className="pt-12 pb-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Specialties</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Handcrafted with care, each cup tells a story of quality and passion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Single Origin',
                description: 'Experience the unique flavors from the world\'s best coffee-growing regions.',
                image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                link: '/menu#single-origin',
                rating: '4.9/5 (120+ reviews)'
              },
              {
                title: 'Artisanal Blends',
                description: 'Expertly crafted blends for a perfectly balanced cup every time.',
                image: 'https://plus.unsplash.com/premium_photo-1661963739431-51ebfe9bb226?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                link: '/menu#blends',
                rating: '4.8/5 (95+ reviews)'
              },
              {
                title: 'Brewing Equipment',
                description: 'Everything you need to brew the perfect cup at home.',
                image: 'https://media.istockphoto.com/id/1147803687/photo/coffee-equipments-with-various-sizes-of-drip-coffee-cups-drip-paper-and-espresso-machine-on.jpg?s=1024x1024&w=is&k=20&c=cgZn2k_IFPBpx-tED1GYOGAl0cAQqvVzG5MaRSKx8eU=',
                link: '/shop',
                rating: '4.7/5 (85+ reviews)'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                      {item.rating}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                  <a 
                    href={item.link}
                    className="text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 font-medium inline-flex items-center transition-colors duration-200"
                  >
                    Learn more
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-10 lg:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Our Coffee Shop"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Founded in 2015, our passion for exceptional coffee has been brewing for years. What started as a small roastery has grown into a beloved community hub where coffee lovers gather to enjoy carefully sourced and expertly prepared beverages.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                We partner directly with farmers who share our commitment to sustainable practices, ensuring every cup supports both quality and ethical production.
              </p>
              <Link 
                to="/about"
                className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 active:bg-primary/95 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 transition-all duration-300 no-underline"
                style={{ textDecoration: 'none' }}
              >
                <span className="flex items-center no-underline" style={{ textDecoration: 'none' }}>
                  <span className="relative no-underline group-hover:after:scale-x-100 after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:transition-transform after:duration-300 after:origin-bottom-right after:ease-out" style={{ textDecoration: 'none' }}>Learn Our Story</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Menu Items */}
      <section className="pt-12 pb-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Customer Favorites</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our most loved drinks and treats
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Caramel Macchiato',
                description: 'Rich espresso with vanilla-flavored syrup, steamed milk and caramel drizzle',
                price: '$4.99',
                image: 'https://cdn.salla.sa/DPYKd/upVsEXInacOAdTKA7zNgp8XKUZ1HvxWZR4zBb4IA.png'
              },
              {
                name: 'Cold Brew',
                description: 'Smooth, cold-brewed coffee served over ice',
                price: '$3.99',
                image: 'https://wholefoodsoulfoodkitchen.com/wp-content/uploads/2022/10/cold-brew-concentrate.jpg'
              },
              {
                name: 'Avocado Toast',
                description: 'Sourdough bread with smashed avocado, cherry tomatoes, and feta',
                price: '$8.99',
                image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
              },
              {
                name: 'Chocolate Croissant',
                description: 'Buttery, flaky croissant with rich chocolate filling',
                price: '$3.49',
                image: 'https://images.unsplash.com/photo-1612201142855-7873bc1661b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                    <span className="text-amber-600 dark:text-amber-400 font-medium">{item.price}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/menu"
              className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 active:bg-primary/95 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 transition-all duration-300 no-underline"
              style={{ textDecoration: 'none' }}
            >
              <span className="flex items-center">
                <span className="relative group-hover:after:scale-x-100 after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:transition-transform after:duration-300 after:origin-bottom-right after:ease-out">View Full Menu</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-amber-50 dark:bg-amber-900/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-600 dark:text-amber-100 mb-8">
            Subscribe to our newsletter for the latest updates, special offers, and events
          </p>
          
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                required
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 active:bg-primary/95 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 transition-all duration-300"
              >
                <span className="flex items-center">
                  <span className="relative group-hover:after:scale-x-100 after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:transition-transform after:duration-300 after:origin-bottom-right after:ease-out">
                    Subscribe
                  </span>
                </span>
              </button>
            </div>
            <p className="mt-3 text-sm text-gray-500 dark:text-amber-100/70">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Home;
