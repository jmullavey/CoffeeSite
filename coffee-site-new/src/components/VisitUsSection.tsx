import React from 'react';

interface LocationCardProps {
  day: string;
  date: Date | null;
  location: string;
  time: string;
  address: string;
  phone?: string;
  email?: string;
  isMainLocation?: boolean;
  isWeekendCard?: boolean;
  locationUrl?: string;
}

interface VisitUsSectionProps {
  paddingY?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  id?: string;
  onViewOnMap?: (location: string, locationUrl?: string) => void;
}

const VisitUsSection: React.FC<VisitUsSectionProps> = ({ paddingY = 'md', onViewOnMap }) => {
  const paddingClasses = {
    none: '',
    sm: 'py-4',
    md: 'py-8',
    lg: 'py-12',
    xl: 'py-16'
  };
  
  const locations: LocationCardProps[] = [
    { 
      day: 'Today', 
      date: new Date(),
      location: 'Downtown Cafe', 
      time: '6:00 AM - 8:00 PM',
      address: '123 Coffee St, Portland, OR 97201',
      phone: '(555) 123-4567',
      email: 'downtown@coffeeshop.com',
      isMainLocation: true,
      locationUrl: 'https://www.google.com/maps?q=123+Coffee+Street,+Portland,+OR+97201&output=embed'
    },
    { 
      day: 'Tomorrow', 
      date: new Date(Date.now() + 86400000),
      location: 'Riverside Stand', 
      time: '8:00 AM - 5:00 PM',
      address: '456 River Rd, Portland, OR 97202',
      phone: '(555) 123-4568',
      email: 'riverside@coffeeshop.com',
      locationUrl: 'https://www.google.com/maps?q=456+River+Road,+Portland,+OR+97202&output=embed'
    },
    { 
      day: new Date(Date.now() + 2 * 86400000).toLocaleDateString('en-US', { weekday: 'long' }), 
      date: new Date(Date.now() + 2 * 86400000),
      location: 'Park Pop-up', 
      time: '9:00 AM - 4:00 PM',
      address: '789 Park Ave, Portland, OR 97203',
      phone: '(555) 123-4569',
      email: 'park@coffeeshop.com',
      locationUrl: 'https://www.google.com/maps?q=789+Park+Ave,+Portland,+OR+97203&output=embed'
    },
    { 
      day: 'Weekend Hours', 
      date: null,
      location: 'All Locations', 
      time: '7:00 AM - 6:00 PM',
      address: 'Saturday & Sunday',
      isWeekendCard: true
    }
  ];

  const handleViewOnMapClick = (e: React.MouseEvent, location: string, locationUrl?: string) => {
    if (onViewOnMap) {
      e.preventDefault();
      onViewOnMap(location, locationUrl);
      // Scroll to #map
      const mapSection = document.getElementById('map');
      if (mapSection) {
        mapSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // else, let default link work
  };

  return (
    <section className={`bg-gray-50 dark:bg-gray-800 ${paddingClasses[paddingY]}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Visit Us</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Our locations and business hours</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg ${
                item.isMainLocation ? 'ring-2 ring-amber-500' : ''
              }`}
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.day}</h3>
                    {item.date && (
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </p>
                    )}
                  </div>
                  {item.isMainLocation && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                      Main Location
                    </span>
                  )}
                </div>
                
                <div className="flex-1 space-y-3">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{item.location}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.address}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                      <svg className="flex-shrink-0 mt-0.5 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {item.time}
                    </div>
                    
                    {!item.isWeekendCard && (
                      <>
                        <div className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                          <svg className="flex-shrink-0 mt-0.5 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <a href={`tel:${item.phone}`} className="text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300">
                            {item.phone}
                          </a>
                        </div>
                        
                        <div className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                          <svg className="flex-shrink-0 mt-0.5 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <a href={`mailto:${item.email}`} className="text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300">
                            {item.email}
                          </a>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <a 
                    href="#map"
                    onClick={e => handleViewOnMapClick(e, item.location, item.locationUrl)}
                    className="inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 transition-colors duration-200"
                  >
                    <svg className="mr-1.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    View on map
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisitUsSection;
