import React, { useState } from 'react';
import VisitUsSection from '../components/VisitUsSection';
import { getTodaysSchedule, getMapEmbedUrl } from '../utils/scheduleUtils';

// Example schedule data (customize as needed)
const schedule = [
	{
		day: 'Today',
		date: new Date(),
		location: 'Downtown Cafe',
		time: '6:00 AM - 8:00 PM',
		address: '123 Coffee St, Portland, OR 97201',
		phone: '(555) 123-4567',
		email: 'downtown@coffeeshop.com',
		isMainLocation: true,
		locationUrl:
			'https://www.google.com/maps?q=123+Coffee+Street,+Portland,+OR+97201&output=embed',
	},
	// ...add more schedule items as needed...
];

const todaySchedule = getTodaysSchedule(schedule);
const isClosed =
	todaySchedule.time === 'Closed' || todaySchedule.location === 'Closed';
const MAIN_ADDRESS = '123 Coffee Street, Portland, OR 97201';
const mapAddress = isClosed ? MAIN_ADDRESS : todaySchedule.location;
const mapUrl = getMapEmbedUrl(mapAddress, todaySchedule.locationUrl);

const Contact: React.FC = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// TODO: submit
		console.log('contact submit', formData);
	};

	return (
			<div className="bg-white dark:bg-gray-900">
				{/* Hero Section with contact/coffee image */}
				<section
					className="flex items-center justify-center relative min-h-[14rem] md:min-h-[18rem] w-full mb-4"
					style={{
						backgroundImage: 'url(https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80)',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
					}}
				>
					<div className="absolute inset-0 bg-black/40" />
					<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
						<h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Get in Touch</h1>
						<p className="text-2xl md:text-3xl text-amber-100">We&apos;d love to hear from you</p>
					</div>
				</section>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Contact Form */}
					<div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-8">
						<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
							Send us a Message
						</h2>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
								>
									Your Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
									className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
								>
									Email Address
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"
								/>
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
								>
									Your Message
								</label>
								<textarea
									id="message"
									name="message"
									rows={4}
									value={formData.message}
									onChange={handleChange}
									required
									className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"
								></textarea>
							</div>
							<div className="pt-2">
								<button
									type="submit"
									className="group w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 active:bg-primary/95 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 transition-all duration-300"
								>
									<span className="flex items-center">
										<span className="relative group-hover:after:scale-x-100 after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:transition-transform after:duration-300 after:origin-bottom-right after:ease-out">
											Send Message
										</span>
									</span>
								</button>
							</div>
						</form>
					</div>
					{/* Contact Information */}
					<div className="space-y-8">
						<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								Get in Touch
							</h2>
							<p className="text-gray-600 dark:text-gray-300 mb-6">
								Having questions or special requests? Send us a message and
								we&apos;ll get back to you as soon as possible.
							</p>
							<div className="space-y-4">
								<div className="flex items-start">
									<div className="flex-shrink-0 h-6 w-6 text-primary-600 dark:text-primary-400">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
											/>
										</svg>
									</div>
									<div className="ml-3">
										<p className="text-gray-700 dark:text-gray-300">
											123 Coffee Street
											<br />
											Portland, OR 97201
										</p>
									</div>
								</div>
								<div className="flex items-start">
									<div className="flex-shrink-0 h-6 w-6 text-primary-600 dark:text-primary-400">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											/>
										</svg>
									</div>
									<div className="ml-3">
										<a
											href="mailto:info@coffeeshop.com"
											className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
										>
											info@coffeeshop.com
										</a>
									</div>
								</div>
								<div className="flex items-start">
									<div className="flex-shrink-0 h-6 w-6 text-primary-600 dark:text-primary-400">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
											/>
										</svg>
									</div>
									<div className="ml-3">
										<span className="text-gray-700 dark:text-gray-300">
											(503) 555-1234
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Visit Us Section */}
			<VisitUsSection />

			{/* Map Section (full-width) */}
			<div className="w-full bg-gray-100 dark:bg-gray-800 py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-8">
						<h2 className="text-2xl font-bold text-gray-900 dark:text-white">
							Today&apos;s Location
						</h2>
						<div className="mt-6 w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
							<iframe
								title="Coffee Shop Location"
								src={mapUrl}
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen={false}
								loading="lazy"
								className="bg-gray-200 dark:bg-gray-700"
							/>
						</div>
						<div className="mt-4 flex items-center justify-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
							<a
								href={`tel:${todaySchedule.phone}`}
								className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
							>
								<svg
									className="h-4 w-4 mr-1.5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>
								{todaySchedule.phone}
							</a>
							<span className="text-gray-400">•</span>
							<a
								href={
									todaySchedule.locationUrl ??
									`https://maps.google.com/?q=${encodeURIComponent(
										todaySchedule.address
									)}`
								}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
							>
								<svg
									className="h-4 w-4 mr-1.5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								Get Directions
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;

