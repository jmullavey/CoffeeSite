// Shared locations data for the Visit Us section and pages
export interface LocationItem {
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

const visitUsLocations: LocationItem[] = [
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

export default visitUsLocations;
