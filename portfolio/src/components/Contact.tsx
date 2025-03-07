import React, { useState } from "react";
import resume_michal_ryz from "../assets/resume_michal_ryz.pdf";

function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [status, setStatus] = useState("");

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setStatus("Sending...");

		const response = await fetch("https://formspree.io/f/xwpvgark", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData),
		});

		if (response.ok) {
			setStatus("Message sent successfully!");
			setFormData({ name: "", email: "", subject: "", message: "" });
		} else {
			setStatus("Failed to send message. Try again later.");
		}
	};

	return (
		<section
			id="contact"
			className="py-20 bg-fixed bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
		>
			<div className="container mx-auto px-4">
				<div className="max-w-3xl mx-auto text-center mb-12">
					<h2 className="text-3xl text-white font-bold mb-2">Get In Touch</h2>
					<div className="w-48 h-1 bg-primary mx-auto mt-2"></div>
				</div>

				<div className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-lg">
					<form className="space-y-6" onSubmit={handleSubmit}>
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
									value={formData.name}
									onChange={handleChange}
									required
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
									value={formData.email}
									onChange={handleChange}
									required
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
								value={formData.subject}
								onChange={handleChange}
								required
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
								value={formData.message}
								onChange={handleChange}
								required
							></textarea>
						</div>

						<button
							type="submit"
							className="cursor-pointer bg-primary hover:bg-primary/80 text-black px-6 py-3 rounded-md font-medium transition-colors w-full"
						>
							Send Message
						</button>
					</form>
					{status && <p className="text-white text-center mt-4">{status}</p>}

					<div className="mt-8 pt-8 border-t border-gray-700 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
						<a
							href="https://linkedin.com/in/michal-ryz"
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
						<a
							href={resume_michal_ryz}
							target="_blank"
							className="text-gray-300 hover:text-primary transition-colors  flex flex-col items-center"
						>
							<i className="fas fa-file-lines fa-xl mt-2 mb-4"></i>
							My resume
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
