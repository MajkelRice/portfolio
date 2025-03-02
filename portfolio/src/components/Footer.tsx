import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-dark text-white py-8">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between">
					<div className="mb-4 md:mb-0">
						<h2 className="text-xl font-bold mb-2">Michał Ryz</h2>
						<p className="text-gray-300">
							Showcasing my journey through computer science
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-3 gap-8">
						<div>
							<h3 className="text-lg font-semibold mb-2">Links</h3>
							<ul className="space-y-1">
								<li>
									<a href="#" className="text-gray-300 hover:text-white">
										Home
									</a>
								</li>
								<li>
									<a href="#" className="text-gray-300 hover:text-white">
										Projects
									</a>
								</li>
								<li>
									<a href="#" className="text-gray-300 hover:text-white">
										Skills
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-lg font-semibold mb-2">Social</h3>
							<ul className="space-y-2">
								<li>
									<a
										href="https://github.com/majkelrice"
										target="_blank"
										className="text-gray-300 hover:text-white flex items-center gap-2"
									>
										<i className="fa-brands fa-github fa-lg"></i>
										GitHub
									</a>
								</li>
								<li>
									<a
										href="https://linkedin.com/in/michalryz"
										target="_blank"
										className="text-gray-300 hover:text-white flex items-center gap-2"
									>
										<i className="fa-brands fa-linkedin fa-lg"></i>
										LinkedIn
									</a>
								</li>
								<li></li>
							</ul>
						</div>

						<div className="col-span-2 md:col-span-1">
							<h3 className="text-lg font-semibold mb-2">Contact</h3>
							<ul className="space-y-1">
								<li className="text-gray-300 flex items-center gap-2">
									<i className="fas fa-envelope fa-lg"></i>
									michalryz2003@gmail.com
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-700 mt-8 pt-4 text-center  text-gray-300">
					<p>
						{<i className="fa-regular fa-copyright"></i>}
						{` `}
						{currentYear} Michał Ryz. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
