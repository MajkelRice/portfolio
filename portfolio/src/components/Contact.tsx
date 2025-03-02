function Contact() {
	return (
		<section
			id="contact"
			className="py-20 bg-fixed bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
		>
			<div className="container  mx-auto px-4">
				<div className="max-w-3xl mx-auto text-center mb-12">
					<h2 className="text-3xl text-white font-bold mb-2">Get In Touch</h2>
					<div className="w-48 h-1 bg-primary mx-auto mt-2"></div>
				</div>

				<div className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-lg">
					<form className="space-y-6">
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<label htmlFor="name" className="block text-gray-300 mb-2 ">
									Name
								</label>
								<input
									type="text"
									id="name"
									className="w-full bg-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
									placeholder="Your name"
								/>
							</div>
							<div>
								<label htmlFor="email" className="block text-gray-300 mb-2 ">
									Email
								</label>
								<input
									type="email"
									id="email"
									className="w-full bg-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
									placeholder="your.email@example.com"
								/>
							</div>
						</div>

						<div>
							<label htmlFor="subject" className="block text-gray-300 mb-2 ">
								Subject
							</label>
							<input
								type="text"
								id="subject"
								className="w-full bg-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
								placeholder="What is this regarding?"
							/>
						</div>

						<div>
							<label htmlFor="message" className="block text-gray-300 mb-2 ">
								Message
							</label>
							<textarea
								id="message"
								className="w-full bg-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
								placeholder="Your message here..."
							></textarea>
						</div>

						<button
							type="submit"
							className="cursor-pointer bg-primary hover:bg-primary/80 text-black px-6 py-3 rounded-md font-medium transition-colors w-full"
						>
							Send Message
						</button>
					</form>

					<div className="mt-8 pt-8 border-t border-gray-700 grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
						<a
							href="https://linkedin.com/in/michalryz"
							target="_blank"
							className="text-gray-300 hover:text-primary transition-colors flex flex-col items-center"
						>
							<i className="fa-brands fa-linkedin fa-xl mt-2 mb-4"></i>
							LinkedIn
						</a>
						<a
							href="https://github.com/majkelrice"
							target="_blank"
							className="text-gray-300 hover:text-primary transition-colors  flex flex-col items-center"
						>
							<i className="fa-brands fa-github fa-xl mt-2 mb-4"></i>
							GitHub
						</a>
						<a
							href="mailto:michałryz2003@gmail.com"
							className="text-gray-300 hover:text-primary transition-colors  flex flex-col items-center"
						>
							<i className="fas fa-envelope fa-xl mt-2 mb-4"></i>
							Email
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
