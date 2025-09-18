import React, { useEffect } from 'react';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-[75vh] md:h-[32rem] flex items-center justify-center bg-amber-50 dark:bg-amber-900/30 mb-8 md:mb-16 overflow-hidden bg-scroll md:bg-fixed"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black/40 dark:bg-black/50" />
        <div className="relative z-10 text-center w-full max-w-2xl px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-3 md:mb-4 text-white drop-shadow-md">
            Our Story, Your Coffee
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-amber-100 drop-shadow-sm max-w-xl mx-auto">
            We're more than just a coffee shop; we're a community built on quality, passion, and a love for the perfect cup.
          </p>
        </div>
      </section>

      {/* Our Story with Image Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          <div className="mb-8 lg:mb-0 px-4 sm:px-6 lg:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              From a Passion Project to a Community Hub
            </h2>
            <div className="prose dark:prose-invert text-gray-600 dark:text-gray-300 max-w-none">
              <p className="mb-4 text-base sm:text-lg">
                What started as a small coffee cart in downtown Portland has grown into a beloved local institution.
                Our founder, Sarah Johnson, began her journey with a simple mission: to serve exceptional coffee
                in a warm, welcoming environment.
              </p>
              <p className="mb-4 text-base sm:text-lg">
                Over the years, we've stayed true to our roots while constantly innovating. We source our beans
                directly from sustainable farms around the world, ensuring fair prices for farmers and exceptional
                quality for our customers.
              </p>
              <p className="text-base sm:text-lg">
                Today, our team of passionate baristas continues Sarah's legacy, crafting each cup with care and
                precision. We're proud to be part of the Portland community and look forward to serving you.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 px-4 sm:px-6 lg:px-0">
            <div className="h-48 sm:h-64 rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/reserve/DHHQbqc0RrWVf0uDNe5E_The%20Litte%20Cafe.jpg?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Mobile Coffee Cart"
                loading="lazy"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-48 sm:h-64 rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1607681034512-1c9c5fbda608?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Coffee Roasting Process"
                loading="lazy"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-48 sm:h-64 rounded-xl overflow-hidden shadow-xl col-span-2">
              <img
                src="https://plus.unsplash.com/premium_photo-1663932464937-e677ddfc1d55?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Coffee Shop Interior"
                loading="lazy"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
            {[
              {
                title: 'Quality',
                description: 'From bean to cup, we maintain the highest standards to ensure every drink is perfect.',
                icon: '✨'
              },
              {
                title: 'Sustainability',
                description: 'We partner with eco-conscious suppliers and use compostable packaging to minimize our environmental impact.',
                icon: '🌱'
              },
              {
                title: 'Community',
                description: 'We believe in giving back to the community that supports us through local events and partnerships.',
                icon: '🤝'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-700 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2"
              >
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full mb-4 mx-auto transition-transform duration-300 group-hover:scale-110">
                  <span className="text-3xl sm:text-4xl">{value.icon}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">
                  {value.title}
                </h3>
                <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8">
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
            <div key={index} className="group text-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden shadow-md transform transition-transform duration-300 group-hover:scale-105">
                <img
                  src={member.img}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {member.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
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