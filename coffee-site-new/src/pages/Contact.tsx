import React, { useState } from 'react';

const Contact: React.FC = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: 'work',
		message: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// TODO: handle form submission (e.g., send to API or email)
		console.log('Contact form submitted:', formData);
	};

	return (
		<div className="bg-white dark:bg-gray-900 min-h-screen">
			<section
				className="flex items-center justify-center relative min-h-[14rem] md:min-h-[18rem] w-full mb-4"
				style={{
					backgroundImage:
						'url(https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80)',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}
			>
				<div className="absolute inset-0 bg-black/40" />
				<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
					<p className="text-2xl md:text-3xl text-amber-100">We&apos;d love to hear from you</p>
				</div>
			</section>
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
				{/* Contact Info */}
				<div className="flex flex-col justify-start items-start bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-8 mb-6 md:mb-0">
					<h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
						<svg className="inline-block text-primary-600 dark:text-primary-400" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20a10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16a8 8 0 0 1 0 16zm-3.5-7.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0zm3.5-5a5 5 0 0 0-5 5c0 2.5 2.5 5 5 5s5-2.5 5-5a5 5 0 0 0-5-5z"/></svg>
						Contact Information
					</h2>
					<div className="flex flex-col gap-2 pl-1">
						<div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
							<svg className="inline-block text-primary-600 dark:text-primary-400" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/></svg>
							123 State Street, Pekin, IL 61554
						</div>
						<div className="flex items-center gap-2">
							<svg className="inline-block text-primary-600 dark:text-primary-400" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M21 8V7l-3 2.29V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2.29L21 17v-1l-3-2.29V17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2.29L21 7z"/></svg>
							<a href="mailto:info@coffeeshop.com" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">info@coffeeshop.com</a>
						</div>
						<div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
							<svg className="inline-block text-primary-600 dark:text-primary-400" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1.003 1.003 0 0 1 1.11-.21c1.12.45 2.33.68 3.48.68a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C5.92 22 2 18.08 2 13.5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.15.23 2.36.68 3.48a1.003 1.003 0 0 1-.21 1.11l-2.2 2.2z"/></svg>
							(309) 620-1234
						</div>
					</div>
					<div className="flex gap-4 mt-4 pl-1">
						<a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-400">
							<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"/></svg>
						</a>
						<a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter" className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-400">
							<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37a8.59 8.59 0 0 1-2.72 1.04a4.28 4.28 0 0 0-7.29 3.9A12.13 12.13 0 0 1 3.1 4.9a4.28 4.28 0 0 0 1.32 5.71a4.24 4.24 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.19a4.3 4.3 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.97A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2c0-.19 0-.38-.01-.57A8.72 8.72 0 0 0 24 4.59a8.59 8.59 0 0 1-2.54.7z"/></svg>
						</a>
						<a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-400">
							<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788c1.325 0 2.463.099 2.797.143v3.24l-1.92.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0"/></svg>
						</a>
					</div>
				</div>
				{/* Contact Form */}
				<div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-8">
					<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h2>
					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
							<input
								id="name"
								name="name"
								type="text"
								value={formData.name}
								onChange={handleChange}
								required
								className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"
							/>
						</div>
						<div>
							<label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Email</label>
							<input
								id="email"
								name="email"
								type="email"
								value={formData.email}
								onChange={handleChange}
								required
								className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"
							/>
						</div>
						<div>
							<label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
							<select
								id="subject"
								name="subject"
								value={formData.subject}
								onChange={handleChange}
								required
								className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"
							>
								<option value="work">Work with Us</option>
								<option value="events">Events</option>
								<option value="feedback">Feedback</option>
								<option value="other">Other</option>
							</select>
						</div>
						<div>
							<label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Message</label>
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
			</div>
		</div>
	);
};

export default Contact;

