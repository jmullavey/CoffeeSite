import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-96 md:h-[32rem] flex items-center justify-center bg-amber-50 dark:bg-amber-900/30 mb-8 overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80)',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black/10 dark:bg-black/30" />
        <div className="relative z-10 text-center w-full">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-8">
            Our journey from a humble coffee cart to your favorite neighborhood spot.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              From Humble Beginnings
            </h2>
            <div className="prose dark:prose-invert text-gray-600 dark:text-gray-300">
              <p className="mb-4">
                What started as a small coffee cart in downtown Portland has grown into a beloved local institution. 
                Our founder, Sarah Johnson, began her journey with a simple mission: to serve exceptional coffee 
                in a warm, welcoming environment.
              </p>
              <p className="mb-4">
                Over the years, we've stayed true to our roots while constantly innovating. We source our beans 
                directly from sustainable farms around the world, ensuring fair prices for farmers and exceptional 
                quality for our customers.
              </p>
              <p>
                Today, our team of passionate baristas continues Sarah's legacy, crafting each cup with care and 
                precision. We're proud to be part of the Portland community and look forward to serving you.
              </p>
            </div>
          </div>
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
              alt="Mobile Coffee Trailer Example"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 py-2 text-center">
              <span className="text-white text-lg">Our first coffee cart, 2010</span>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              What makes us different
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Sustainability',
                description: 'We partner with eco-conscious suppliers and use compostable packaging to minimize our environmental impact.',
                icon: '🌱'
              },
              {
                title: 'Quality',
                description: 'From bean to cup, we maintain the highest standards to ensure every drink is perfect.',
                icon: '✨'
              },
              {
                title: 'Community',
                description: 'We believe in giving back to the community that supports us through local events and partnerships.',
                icon: '🤝'
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 active:bg-primary/95 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 transition-all duration-300 mt-4"
                  style={{ textDecoration: 'none' }}
                >
                  <span className="flex items-center">
                    <span className="relative group-hover:after:scale-x-100 after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:transition-transform after:duration-300 after:origin-bottom-right after:ease-out">Get in Touch</span>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Meet the Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            The passionate people behind your perfect cup
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              name: 'Sarah Johnson',
              role: 'Founder & Head Roaster',
              img: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=256&h=256&facepad=2&q=80'
            },
            {
              name: 'Marcus Chen',
              role: 'Head Barista',
              img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=256&h=256&facepad=2&q=80'
            },
            {
              name: 'Elena Rodriguez',
              role: 'Pastry Chef',
              img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=256&h=256&facepad=2&q=80'
            },
            {
              name: 'Jamal Williams',
              role: 'Customer Experience',
              img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=256&h=256&facepad=2&q=80'
            }
          ].map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover shadow-md"
              />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
