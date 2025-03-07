import React, { useState } from "react";
import handleScroll from "../helper/handleScroll";

const Navbar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="bg-dark text-white opacity-95 sticky top-0 z-50">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<div className="flex items-center">
						<div className="md:ml-12 text-xl font-bold text-white">
							&lt;
							<button
								onClick={() => handleScroll("hero")}
								className="inline-block text-primary cursor-pointer"
							>
								Michał Ryz
							</button>{" "}
							/&gt;
						</div>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-6">
						<button
							onClick={() => handleScroll("hero")}
							className="px-4 py-2 text-gray-300 hover:text-primary cursor-pointer"
						>
							Home
						</button>
						<button
							onClick={() => handleScroll("skills")}
							className="px-4 py-2 text-gray-300 hover:text-primary cursor-pointer"
						>
							Skills
						</button>
						<button
							onClick={() => handleScroll("projects")}
							className="px-4 py-2 text-gray-300 hover:text-primary cursor-pointer"
						>
							Projects
						</button>
						<button
							onClick={() => handleScroll("contact")}
							className="px-4 py-2 text-gray-300 hover:text-primary cursor-pointer"
						>
							Contact
						</button>
						<div className="ml-auto">
							<a
								href="src/assets/resume_michal_ryz.pdf"
								target="_blank"
								className="border-2 border-primary text-dark px-5 py-2 rounded bg-primary hover:border-primary/80 hover:bg-primary/80 transition-all duration-300"
							>
								My Resume
							</a>
						</div>
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden flex items-center">
						<button
							className="text-gray-300 hover:text-white focus:outline-none"
							onClick={toggleMenu}
						>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{isMenuOpen ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								)}
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="md:hidden bg-dark">
					<div className="px-4 pt-2 pb-3 space-y-2">
						<button
							onClick={() => handleScroll("hero")}
							className="block px-3 py-2 hover:bg-dark/80 rounded-md"
						>
							Home
						</button>
						<button
							onClick={() => handleScroll("skills")}
							className="block px-3 py-2 hover:bg-dark/80 rounded-md"
						>
							Skills
						</button>
						<button
							onClick={() => handleScroll("projects")}
							className="block px-3 py-2 hover:bg-dark/80 rounded-md"
						>
							Projects
						</button>
						<button
							onClick={() => handleScroll("contact")}
							className="block px-3 py-2 hover:bg-dark/80 rounded-md"
						>
							Contact
						</button>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
