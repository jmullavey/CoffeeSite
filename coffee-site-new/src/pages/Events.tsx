import React, { useState } from 'react';
import { Star, Calendar, MapPin, Users, Mail, Phone, Heart, Briefcase, Gift } from 'lucide-react';

interface EventType {
  id: string;
  name: string;
  description: string;
  icon: React.ReactElement<{ 
    className?: string;
    'aria-hidden'?: 'true' | 'false' | boolean;
  }>;
  minGuests: number;
  popular: boolean;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  location: string;
  message: string;
}

const Events: React.FC = () => {
  // Event types data
  const eventTypes: EventType[] = [
    {
      id: 'weddings',
      name: 'Weddings',
      description: 'Make your special day even more memorable with our premium coffee bar service.',
      icon: React.createElement(Heart, { className: 'h-6 w-6' }),
      minGuests: 50,
      popular: true
    },
    {
      id: 'corporate',
      name: 'Corporate Events',
      description: 'Impress clients and employees with professional barista service at your next corporate function.',
      icon: React.createElement(Briefcase, { className: 'h-6 w-6' }),
      minGuests: 20,
      popular: false
    },
    {
      id: 'private',
      name: 'Private Parties',
      description: 'Elevate your private celebrations with artisanal coffee and expert baristas.',
      icon: React.createElement(Gift, { className: 'h-6 w-6' }),
      minGuests: 30,
      popular: false
    },
    {
      id: 'community',
      name: 'Community Events',
      description: 'Perfect for local gatherings, fundraisers, and community celebrations.',
      icon: React.createElement(Users, { className: 'h-6 w-6' }),
      minGuests: 50,
      popular: true
    }
  ];

  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    location: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Validation rules
  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.eventType) {
      newErrors.eventType = 'Event type is required';
    }
    
    if (!formData.eventDate) {
      newErrors.eventDate = 'Event date is required';
    } else if (new Date(formData.eventDate) < new Date()) {
      newErrors.eventDate = 'Event date must be in the future';
    }
    
    if (!formData.guestCount) {
      newErrors.guestCount = 'Guest count is required';
    } else if (isNaN(Number(formData.guestCount)) || Number(formData.guestCount) < 1) {
      newErrors.guestCount = 'Please enter a valid number of guests';
    }
    
    if (!formData.location) {
      newErrors.location = 'Location is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // Handle event type selection
  const handleEventTypeSelect = (eventTypeId: string) => {
    setFormData(prev => ({
      ...prev,
      eventType: eventTypeId
    }));
    
    // Clear error if it exists
    if (errors.eventType) {
      setErrors(prev => ({
        ...prev,
        eventType: undefined
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          eventDate: '',
          guestCount: '',
          location: '',
          message: ''
        });
      }, 1500);
    }
  };

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      quote: "The coffee bar was the highlight of our wedding! Our guests couldn't stop raving about the quality and presentation. The baristas were professional and added such a special touch to our special day.",
      author: "Sarah & Mike",
      role: "Wedding Couple",
      rating: 5,
      image: "/images/testimonials/wedding.jpg"
    },
    {
      id: 2,
      quote: "Professional, punctual, and amazing coffee. Our corporate event was a huge success thanks to their service. The mobile coffee bar was a huge hit with our team and clients alike.",
      author: "Jennifer K.",
      role: "Event Coordinator, TechCorp Inc.",
      rating: 5,
      image: "/images/testimonials/corporate.jpg"
    },
    {
      id: 3,
      quote: "The baristas were so friendly and the coffee was exceptional. Made our community fair a hit! We received countless compliments and will definitely be booking again for next year's event.",
      author: "Marcus T.",
      role: "Director, Local Community Center",
      rating: 5,
      image: "/images/testimonials/community.jpg"
    },
    {
      id: 4,
      quote: "We've used their services for three years running at our annual fundraiser. The coffee is consistently excellent and their team is a pleasure to work with. They've become an essential part of our event.",
      author: "Amanda R.",
      role: "Nonprofit Organizer",
      rating: 5,
      image: "/images/testimonials/charity.jpg"
    },
    {
      id: 5,
      quote: "I was skeptical about having a coffee bar at our product launch, but it was hands down the best decision we made. The baristas were engaging and the coffee was a great conversation starter.",
      author: "David L.",
      role: "Marketing Director",
      rating: 5,
      image: "/images/testimonials/launch.jpg"
    },
    {
      id: 6,
      quote: "As a wedding planner, I've worked with many vendors, but this coffee service stands out. Their attention to detail and exceptional service made my job so much easier. The couple and guests were thrilled!",
      author: "Emily S.",
      role: "Professional Wedding Planner",
      rating: 5,
      image: "/images/testimonials/planner.jpg"
    }
  ];

  // Trust indicators data
  const trustIndicators = [
    { value: "500+", label: "Events Served" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "24/7", label: "Support" }
  ];

  // Render star rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'text-primary fill-current' : 'text-gray-300'}`} 
        aria-hidden="true"
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* How It Works Section */}
      <div className="relative bg-primary-50 dark:bg-primary-900/10 overflow-hidden py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
              Getting started with our mobile coffee bar service is simple.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="pt-6">
                <div className="flow-root bg-white dark:bg-gray-800 rounded-lg px-6 pb-8 h-full shadow-md">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
                      1
                    </div>
                    <h3 className="mt-6 text-lg font-medium text-gray-900 dark:text-white text-center">
                      Submit Your Inquiry
                    </h3>
                    <p className="mt-3 text-base text-gray-500 dark:text-gray-300 text-center">
                      Fill out our simple form with details about your event.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-white dark:bg-gray-800 rounded-lg px-6 pb-8 h-full shadow-md">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
                      2
                    </div>
                    <h3 className="mt-6 text-lg font-medium text-gray-900 dark:text-white text-center">
                      Customize Your Package
                    </h3>
                    <p className="mt-3 text-base text-gray-500 dark:text-gray-300 text-center">
                      We'll work with you to create the perfect coffee experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-white dark:bg-gray-800 rounded-lg px-6 pb-8 h-full shadow-md">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
                      3
                    </div>
                    <h3 className="mt-6 text-lg font-medium text-gray-900 dark:text-white text-center">
                      Confirm Your Booking
                    </h3>
                    <p className="mt-3 text-base text-gray-500 dark:text-gray-300 text-center">
                      Review and confirm with our flexible payment options.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-white dark:bg-gray-800 rounded-lg px-6 pb-8 h-full shadow-md">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
                      4
                    </div>
                    <h3 className="mt-6 text-lg font-medium text-gray-900 dark:text-white text-center">
                      Enjoy Your Event
                    </h3>
                    <p className="mt-3 text-base text-gray-500 dark:text-gray-300 text-center">
                      Relax while we handle the coffee service from start to finish.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Types */}
      <div id="event-types" className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Perfect for Any Occasion
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
              We bring the coffee shop experience to your event, no matter the size or location.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {eventTypes.map((eventType) => (
                <button
                  key={eventType.id}
                  type="button"
                  onClick={() => handleEventTypeSelect(eventType.id)}
                  className={`relative p-6 text-left rounded-xl border-2 transition-all duration-200 ease-in-out ${
                    formData.eventType === eventType.id 
                      ? 'border-primary bg-primary-50 dark:bg-primary-900/20' 
                      : 'border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className={`p-2 rounded-lg ${
                        formData.eventType === eventType.id 
                          ? 'bg-primary-100 dark:bg-primary-800/50' 
                          : 'bg-gray-100 dark:bg-gray-700'
                      }`}>
                        {React.cloneElement(eventType.icon, {
                          className: `h-6 w-6 ${
                            formData.eventType === eventType.id 
                              ? 'text-primary dark:text-primary-400' 
                              : 'text-gray-600 dark:text-gray-300'
                          }`,
                          'aria-hidden': 'true'
                        })}
                      </div>
                      <h3 className={`ml-3 text-lg font-medium ${
                        formData.eventType === eventType.id 
                          ? 'text-primary dark:text-primary-300' 
                          : 'text-gray-900 dark:text-white'
                      }`}>
                        {eventType.name}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 flex-grow">
                      {eventType.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm font-medium text-primary dark:text-primary-400">
                        Min. {eventType.minGuests}+ guests
                      </span>
                      {eventType.popular && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-400">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  {formData.eventType === eventType.id && (
                    <div className="absolute top-2 right-2">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-primary">
                        <svg className="h-3.5 w-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
            {errors.eventType && (
              <p className="mt-2 text-sm text-red-600 text-center" id="event-type-error">
                {errors.eventType}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Inquiry Form */}
      <div id="inquiry" className="bg-gray-50 dark:bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Request a Quote
            </h2>
            <p className="mt-3 text-xl text-gray-500 dark:text-gray-300">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 shadow-xl rounded-lg overflow-hidden">
            {submitSuccess ? (
              <div className="px-6 py-12 sm:px-12 text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30">
                  <svg
                    className="h-6 w-6 text-green-600 dark:text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-2xl font-medium text-gray-900 dark:text-white">
                  Thank you for your inquiry!
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  We've received your message and will get back to you within 24 hours.
                </p>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => setSubmitSuccess(false)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 sm:p-10">
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Full Name *
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`block w-full rounded-md ${errors.name ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500' : 'border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:ring-amber-500 focus:border-amber-500'} sm:text-sm`}
                        placeholder="John Smith"
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600" id="name-error">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email Address *
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`pl-10 block w-full rounded-md ${errors.email ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500' : 'border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:ring-amber-500 focus:border-amber-500'} sm:text-sm`}
                        placeholder="you@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600" id="email-error">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Phone Number *
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`pl-10 block w-full rounded-md ${errors.phone ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500' : 'border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:ring-amber-500 focus:border-amber-500'} sm:text-sm`}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600" id="phone-error">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Event Type *
                    </label>
                    <div className="mt-1">
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className={`block w-full rounded-md ${errors.eventType ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500' : 'border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:ring-amber-500 focus:border-amber-500'} py-2 pl-3 pr-10 text-base sm:text-sm`}
                      >
                        <option value="">Select an event type</option>
                        {eventTypes.map((type) => (
                          <option key={type.id} value={type.id}>
                            {type.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.eventType && (
                      <p className="mt-1 text-sm text-red-600" id="event-type-error">
                        {errors.eventType}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Event Date *
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <input
                        type="date"
                        name="eventDate"
                        id="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className={`pl-10 block w-full rounded-md ${errors.eventDate ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500' : 'border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:ring-amber-500 focus:border-amber-500'} sm:text-sm`}
                      />
                    </div>
                    {errors.eventDate && (
                      <p className="mt-1 text-sm text-red-600" id="date-error">
                        {errors.eventDate}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Expected Number of Guests *
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Users className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <input
                        type="number"
                        name="guestCount"
                        id="guestCount"
                        min="1"
                        value={formData.guestCount}
                        onChange={handleInputChange}
                        className={`pl-10 block w-full rounded-md ${errors.guestCount ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500' : 'border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:ring-primary/50 focus:border-primary'} sm:text-sm`}
                        placeholder="100"
                      />
                    </div>
                    {errors.guestCount && (
                      <p className="mt-1 text-sm text-red-600" id="guests-error">
                        {errors.guestCount}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Event Location (City & Venue) *
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <input
                        type="text"
                        name="location"
                        id="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className={`pl-10 block w-full rounded-md ${errors.location ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500' : 'border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:ring-primary/50 focus:border-primary'} sm:text-sm`}
                        placeholder="New York, NY - The Grand Ballroom"
                      />
                    </div>
                    {errors.location && (
                      <p className="mt-1 text-sm text-red-600" id="location-error">
                        {errors.location}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Tell Us About Your Event
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="shadow-sm focus:ring-primary/50 focus:border-primary block w-full sm:text-sm border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md"
                        placeholder="Any special requests, themes, or additional details we should know about?"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`group w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-white ${isSubmitting ? 'bg-primary/70' : 'bg-primary hover:bg-primary/90 active:bg-primary/95'} focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 transition-all duration-300`}
                    >
                      <span className="flex items-center">
                        <span className="relative group-hover:after:scale-x-100 after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:transition-transform after:duration-300 after:origin-bottom-right after:ease-out">
                          {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Trusted by Event Planners & Hosts Section with distinct background */}
      <div className="bg-gray-100 dark:bg-gray-800/70 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Trusted by Event Planners & Hosts
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
              Don't just take our word for it. Here's what our clients have to say about their experience.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 bg-white dark:bg-gray-700 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-8 sm:p-10">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
                {trustIndicators.map((indicator, index) => (
                  <div key={index} className="p-4">
                    <p className="text-4xl font-extrabold text-primary">{indicator.value}</p>
                    <p className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">{indicator.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials Section with different background */}
          <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex flex-col overflow-hidden rounded-xl bg-white dark:bg-gray-700 shadow-lg">
                  <div className="flex-1 p-6 flex flex-col">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-600 overflow-hidden">
                            <div className="h-full w-full flex items-center justify-center bg-gray-200 dark:bg-gray-600 text-gray-400">
                              <span className="text-xs">{testimonial.author.split(' ').map(n => n[0]).join('')}</span>
                            </div>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {testimonial.author}
                          </p>
                          <p className="text-sm text-amber-600">{testimonial.role}</p>
                          <div className="flex mt-1">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                      <blockquote className="mt-4">
                        <p className="text-base text-gray-600 dark:text-gray-300">"{testimonial.quote}"</p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
