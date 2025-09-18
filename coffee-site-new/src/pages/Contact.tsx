import React, { useState } from "react";
import { FaMapMarkerAlt, FaMoneyBillWave, FaClock, FaCalendarAlt, FaPlug, FaUsers, FaConciergeBell, FaEnvelope, FaPhone, FaWifi, FaWheelchair, FaParking, FaPaw, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Send } from 'lucide-react';

// ========================
// FAQ Icons
// ========================
const iconMap = {
  LocationIcon: FaMapMarkerAlt,
  MoneyIcon: FaMoneyBillWave,
  ClockIcon: FaClock,
  EventIcon: FaCalendarAlt,
  PowerIcon: FaPlug,
  PeopleIcon: FaUsers,
  ServiceIcon: FaConciergeBell,
  CalendarIcon: FaCalendarAlt,
};

type IconKey = keyof typeof iconMap;

// ========================
// FAQ Data
// ========================
interface FAQ {
  question: string;
  answer: string;
  icon: IconKey;
  testimonial?: string;
}

const faqs: FAQ[] = [
  {
    question: "Where are you located?",
    answer: "123 State Street, Pekin, IL 61554",
    icon: "LocationIcon",
  },
  {
    question: "What are your hours?",
    answer: "Mon–Fri 7am–6pm, Sat 8am–2pm, Sun closed.",
    icon: "ClockIcon",
  },
  {
    question: "Do you take reservations for events?",
    answer: "Yes! Email us or call and we’ll help you plan.",
    icon: "CalendarIcon",
    testimonial: "They made our meetup seamless!",
  },
];

// ========================
// Accordion Item Component
// ========================
const AccordionItem: React.FC<{ faq: FAQ; idx: number }> = ({ faq, idx }) => {
  const [open, setOpen] = useState(false);
  const IconComponent = iconMap[faq.icon];

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
      <button
        className={`w-full flex items-center justify-between p-5 focus:outline-none transition-all duration-300 ${
          open ? "bg-primary-50 dark:bg-primary-900/20" : ""
        }`}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={`faq-panel-${idx}`}
        type="button"
      >
        <span className="flex items-center text-lg font-semibold text-gray-800 dark:text-gray-100">
          <IconComponent className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-4 flex-shrink-0" />
          {faq.question}
        </span>
        <svg
          className={`w-5 h-5 ml-2 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        id={`faq-panel-${idx}`}
        className={`px-5 pb-5 pt-2 text-gray-700 dark:text-gray-300 text-base transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <p>{faq.answer}</p>
        {faq.testimonial && (
          <div className="mt-4 text-sm italic text-primary-700 dark:text-primary-400">“{faq.testimonial}”</div>
        )}
      </div>
    </div>
  );
};

// ========================
// Contact Page Component
// ========================
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "work",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      // TODO: replace with your API/email integration
      console.log("Contact form submitted:", formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "work", message: "" });
    }, 1500);
  };

  const contactLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero */}
      <section
        className="relative h-96 md:h-[32rem] flex items-center justify-center w-full mb-16"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-md">Contact Us</h1>
          <p className="text-xl md:text-2xl text-amber-100 drop-shadow-sm">We'd love to hear from you</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info (Left Column) */}
        <div className="lg:col-span-1">
          <div className="space-y-8">

            {/* Contact Details */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-4">
                  <FaPhone className="text-primary-600 dark:text-primary-400 text-xl flex-shrink-0" />
                  <a href="tel:+13096201234" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200">(309) 620-1234</a>
                </div>
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-primary-600 dark:text-primary-400 text-xl flex-shrink-0" />
                  <a href="mailto:info@coffeeshop.com" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200">info@coffeeshop.com</a>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Our Hours</h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li className="flex justify-between"><span>Mon–Fri</span><span>7:00a – 6:00p</span></li>
                  <li className="flex justify-between"><span>Sat</span><span>8:00a – 2:00p</span></li>
                  <li className="flex justify-between"><span>Sun</span><span>Closed</span></li>
                </ul>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Amenities</h3>
                <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2"><FaWifi className="text-primary-600 dark:text-primary-400 flex-shrink-0" />Free Wi-Fi</li>
                  <li className="flex items-center gap-2"><FaWheelchair className="text-primary-600 dark:text-primary-400 flex-shrink-0" />Wheelchair access</li>
                  <li className="flex items-center gap-2"><FaParking className="text-primary-600 dark:text-primary-400 flex-shrink-0" />Parking onsite</li>
                  <li className="flex items-center gap-2"><FaPaw className="text-primary-600 dark:text-primary-400 flex-shrink-0" />Pet friendly</li>
                </ul>
              </div>
              <div className="mt-8 flex gap-4">
                {contactLinks.map((link, index) => (
                  <a key={index} href={link.href} aria-label={link.label} className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                    <link.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form & FAQ (Right Column) */}
        <div className="lg:col-span-2">
          <div className="space-y-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send us a message</h2>
              {submitSuccess ? (
                <div className="text-center py-12 transition-all duration-500 ease-in-out">
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-2xl font-medium text-gray-900 dark:text-white">Thank you for your message!</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">We've received your message and will get back to you soon.</p>
                  <div className="mt-6 flex justify-center">
                    <button
                      type="button"
                      onClick={() => setSubmitSuccess(false)}
                      className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 active:bg-primary/95 hover:opacity-90 active:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 transition-all duration-300 no-underline"
                      style={{ textDecoration: 'none' }}
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Jane Doe"
                      autoComplete="name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      placeholder="you@example.com"
                      autoComplete="email"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    >
                      <option value="work">Work inquiry</option>
                      <option value="events">Events</option>
                      <option value="general">General</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      placeholder="How can we help?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formData.name === '' || formData.email === '' || formData.message === '' || isSubmitting}
                    className={`group w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 active:bg-primary/95 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 transition-all duration-200 no-underline hover:no-underline ${formData.name === '' || formData.email === '' || formData.message === '' || isSubmitting ? 'bg-primary/80 cursor-not-allowed' : ''}`}
                  >
                    <Send className="h-5 w-5 mr-2 transition-transform duration-300 ease-in-out will-change-transform transition-colors group-hover:-rotate-[18deg] group-hover:scale-110 group-hover:text-amber-300 text-white" style={{ willChange: 'transform' }} aria-hidden="true" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={faq.question} faq={faq} idx={idx} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-16" />
    </div>
  );
};

export default Contact;