interface ScheduleItem {
  day: string;
  date: Date | null;
  location: string;
  time: string;
  address: string;
  phone?: string;
  email?: string;
  isMainLocation?: boolean;
  locationUrl?: string;
}

export const getTodaysSchedule = (schedule: ScheduleItem[]): ScheduleItem => {
  const today = new Date();
  const todayStr = today.toLocaleDateString('en-US', { weekday: 'long' });
  
  // First try to find an exact match for today
  const todaysSchedule = schedule.find(item => item.day === 'Today' || item.day === todayStr);
  
  if (todaysSchedule) {
    return todaysSchedule;
  }
  
  // Fallback to the main location if today's schedule isn't found
  const mainLocation = schedule.find(item => item.isMainLocation);
  
  return mainLocation || {
    day: 'Today',
    date: today,
    location: 'Downtown Cafe',
    time: 'Closed',
    address: '123 Coffee St, Portland, OR 97201',
    phone: '(555) 123-4567',
    email: 'downtown@coffeeshop.com',
    isMainLocation: true,
    locationUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.905075274152!2d-122.68288292338772!3d45.52014797107235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950a0e7f0b5e5b%3A0x4b6a1e1b9d0a0b0b!2s123%20Coffee%20St%2C%20Portland%2C%20OR%2097201!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus'
  };
};

export const getMapEmbedUrl = (address: string, locationUrl?: string): string => {
  if (locationUrl && locationUrl.includes('maps.google.com')) {
    return locationUrl.includes('output=embed') 
      ? locationUrl 
      : `${locationUrl}${locationUrl.includes('?') ? '&' : '?'}output=embed`;
  }
  
  return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.905075274152!2d-122.68288292338772!3d45.52014797107235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMxJzEyLjUiTiAxMjLCsDQwJzUyLjgiVw!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2s&q=${encodeURIComponent(address)}`;
};
