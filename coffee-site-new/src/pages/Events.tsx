import React, { useState } from 'react';
import { Star, Users, Heart, Briefcase, Gift } from 'lucide-react';

interface EventType {
  id: string;
  name: string;
  description: string;
  icon: React.ReactElement;
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
  const eventTypes: EventType[] = [
    {
      id: 'weddings',
      name: 'Weddings',
      description: 'Make your special day even more memorable with our premium coffee bar service.',
      icon: <Heart className="h-6 w-6" />,
      minGuests: 50,
      popular: true
    },
    {
      id: 'corporate',
      name: 'Corporate Events',
      description: 'Impress clients and employees with professional barista service at your next corporate function.',
      icon: <Briefcase className="h-6 w-6" />,
      minGuests: 20,
      popular: false
    },
    {
      id: 'private',
      name: 'Private Parties',
      description: 'Elevate your private celebrations with artisanal coffee and expert baristas.',
      icon: <Gift className="h-6 w-6" />,
      minGuests: 30,
      popular: false
    },
    {
      id: 'community',
      name: 'Community Events',
      description: 'Perfect for local gatherings, fundraisers, and community celebrations.',
      icon: <Users className="h-6 w-6" />,
      minGuests: 50,
      popular: true
    }
  ];

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

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.eventType) newErrors.eventType = 'Event type is required';
    if (!formData.eventDate) newErrors.eventDate = 'Event date is required';
    else if (new Date(formData.eventDate) < new Date()) newErrors.eventDate = 'Event date must be in the future';
    if (!formData.guestCount) newErrors.guestCount = 'Guest count is required';
    else if (isNaN(Number(formData.guestCount)) || Number(formData.guestCount) < 1) newErrors.guestCount = 'Please enter a valid number of guests';
    if (!formData.location) newErrors.location = 'Location is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleEventTypeSelect = (eventTypeId: string) => {
    setFormData(prev => ({ ...prev, eventType: eventTypeId }));
    if (errors.eventType) {
      setErrors(prev => ({ ...prev, eventType: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '', email: '', phone: '', eventType: '', eventDate: '',
          guestCount: '', location: '', message: ''
        });
      }, 1500);
    }
  };

  const testimonials = [
    {
      id: 1,
      quote: "The coffee bar was the highlight of our wedding! Our guests couldn't stop raving about the quality and presentation. The baristas were professional and added such a special touch to our special day.",
      author: "Sarah & Mike",
      role: "Wedding Couple",
      rating: 5,
      image: "https://images.unsplash.com/photo-1542171243-e66085a528cc?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      quote: "Professional, punctual, and amazing coffee. Our corporate event was a huge success thanks to their service. The mobile coffee bar was a huge hit with our team and clients alike.",
      author: "Jennifer K.",
      role: "Event Coordinator, TechCorp Inc.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1549444747-d1d6a6983750?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      quote: "The baristas were so friendly and the coffee was exceptional. Made our community fair a hit! We received countless compliments and will definitely be booking again for next year's event.",
      author: "Marcus T.",
      role: "Director, Local Community Center",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506748686214-e91715b7a195?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      quote: "We've used their services for three years running at our annual fundraiser. The coffee is consistently excellent and their team is a pleasure to work with. They've become an essential part of our event.",
      author: "Amanda R.",
      role: "Nonprofit Organizer",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 5,
      quote: "I was skeptical about having a coffee bar at our product launch, but it was hands down the best decision we made. The baristas were engaging and the coffee was a great conversation starter.",
      author: "David L.",
      role: "Marketing Director",
      rating: 5,
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      quote: "As a wedding planner, I've worked with many vendors, but this coffee service stands out. Their attention to detail and exceptional service made my job so much easier. The couple and guests were thrilled!",
      author: "Emily S.",
      role: "Professional Wedding Planner",
      rating: 5,
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=256&h=256&facepad=2&q=80"
    }
  ];

  const trustIndicators = [
    { value: "500+", label: "Events Served" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "24/7", label: "Support" }
  ];

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
      {/* Hero Section */}
      <section className="relative h-96 md:h-[32rem] flex items-center justify-center w-full overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80)`, backgroundAttachment: 'fixed' }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Elevate Your Event with a Coffee Bar
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 drop-shadow-md">
            The perfect coffee experience for any occasion.
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="relative -mt-16 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* How It Works Section */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden p-8 lg:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
              Getting started with our mobile coffee bar service is simple.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Submit Your Inquiry", description: "Fill out our simple form with details about your event." },
              { title: "Customize Your Package", description: "We'll work with you to create the perfect coffee experience." },
              { title: "Confirm Your Booking", description: "Review and confirm with our flexible payment options." },
              { title: "Enjoy Your Event", description: "Relax while we handle the coffee service from start to finish." }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white text-2xl font-bold border-4 border-white dark:border-gray-800 shadow-lg">
                  {index + 1}
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Event Types */}
        <div id="event-types">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Perfect for Any Occasion
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
              We bring the coffee shop experience to your event, no matter the size or location.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {eventTypes.map((eventType) => (
              <button
                key={eventType.id}
                type="button"
                onClick={() => handleEventTypeSelect(eventType.id)}
                className={`relative p-6 text-left rounded-xl border-2 transition-all duration-300 ease-in-out group
                  ${formData.eventType === eventType.id
                    ? 'border-primary bg-primary-50 dark:bg-primary-900/20 shadow-lg'
                    : 'border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg transition-colors duration-300 ${
                      formData.eventType === eventType.id
                        ? 'bg-primary-100 dark:bg-primary-800/50'
                        : 'bg-gray-100 dark:bg-gray-700'
                    }`}>
                      {eventType.icon &&
                        React.createElement(eventType.icon.type, {
                          className: `h-6 w-6 transition-colors duration-300 ${
                            formData.eventType === eventType.id 
                              ? 'text-primary dark:text-primary-400' 
                              : 'text-gray-600 dark:text-gray-300'
                          }`,
                          'aria-hidden': 'true'
                        })
                      }
                    </div>
                    <h3 className={`ml-3 text-lg font-semibold transition-colors duration-300
                      ${formData.eventType === eventType.id
                        ? 'text-primary dark:text-primary-300'
                        : 'text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-400'
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
                        <Star className="h-3 w-3 mr-1 fill-current text-primary-600 dark:text-primary-400" /> Popular
                      </span>
                    )}
                  </div>
                </div>
                {formData.eventType === eventType.id && (
                  <div className="absolute top-2 right-2">
                    <div className="flex items-center justify-center h-5 w-5 rounded-full bg-primary-600 shadow">
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

        {/* Testimonials and Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Trust Indicators & Testimonials */}
          <div className="space-y-12">
            <div className="bg-gray-50 dark:bg-gray-800/70 py-12 px-8 rounded-3xl shadow-xl">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                  Trusted by Event Planners & Hosts
                </h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
                  Don't just take our word for it. Here's what our clients have to say.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
                {trustIndicators.map((indicator, index) => (
                  <div key={index} className="p-2">
                    <p className="text-4xl font-extrabold text-primary-600 dark:text-primary-400">{indicator.value}</p>
                    <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">{indicator.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {testimonials.slice(0, 4).map((testimonial) => (
                <div key={testimonial.id} className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <blockquote className="flex-grow">
                    <p className="text-gray-600 dark:text-gray-300 text-base italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full object-cover shadow-sm" src={testimonial.image} alt={testimonial.author} />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                      <p className="text-xs text-amber-600 dark:text-amber-400">{testimonial.role}</p>
                    </div>
                    <div className="ml-auto flex-shrink-0 flex items-center">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Inquiry Form */}
          <div id="inquiry" className="bg-white dark:bg-gray-800 shadow-xl rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                Request a Quote
              </h2>
              <p className="mt-3 text-gray-500 dark:text-gray-300">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>
            
            {submitSuccess ? (
              <div className="text-center py-12">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30">
                  <svg className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-4 text-2xl font-medium text-gray-900 dark:text-white">Thank you for your inquiry!</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">We've received your message and will get back to you within 24 hours.</p>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => setSubmitSuccess(false)}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name *</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} placeholder="John Smith" className={`mt-1 block w-full rounded-md ${errors.name ? 'border-red-300 text-red-900' : 'border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white'} shadow-sm focus:ring-primary focus:border-primary`} />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address *</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} placeholder="you@example.com" className={`mt-1 block w-full rounded-md ${errors.email ? 'border-red-300 text-red-900' : 'border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white'} shadow-sm focus:ring-primary focus:border-primary`} />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number *</label>
                    <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleInputChange} placeholder="(555) 123-4567" className={`mt-1 block w-full rounded-md ${errors.phone ? 'border-red-300 text-red-900' : 'border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white'} shadow-sm focus:ring-primary focus:border-primary`} />
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Event Date *</label>
                    <input type="date" name="eventDate" id="eventDate" value={formData.eventDate} onChange={handleInputChange} min={new Date().toISOString().split('T')[0]} className={`mt-1 block w-full rounded-md ${errors.eventDate ? 'border-red-300 text-red-900' : 'border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white'} shadow-sm focus:ring-primary focus:border-primary`} />
                    {errors.eventDate && <p className="mt-1 text-sm text-red-600">{errors.eventDate}</p>}
                  </div>
                  <div>
                    <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Expected Number of Guests *</label>
                    <input type="number" name="guestCount" id="guestCount" min="1" value={formData.guestCount} onChange={handleInputChange} placeholder="100" className={`mt-1 block w-full rounded-md ${errors.guestCount ? 'border-red-300 text-red-900' : 'border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white'} shadow-sm focus:ring-primary focus:border-primary`} />
                    {errors.guestCount && <p className="mt-1 text-sm text-red-600">{errors.guestCount}</p>}
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Event Location (City & Venue) *</label>
                    <input type="text" name="location" id="location" value={formData.location} onChange={handleInputChange} placeholder="New York, NY - The Grand Ballroom" className={`mt-1 block w-full rounded-md ${errors.location ? 'border-red-300 text-red-900' : 'border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white'} shadow-sm focus:ring-primary focus:border-primary`} />
                    {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Tell Us About Your Event</label>
                    <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleInputChange} placeholder="Any special requests, themes, or additional details we should know about?" className="mt-1 shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white rounded-md" />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-white ${isSubmitting ? 'bg-primary/70' : 'bg-primary hover:bg-primary/90'} focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="pb-24" />
    </div>
  );
};

export default Events;