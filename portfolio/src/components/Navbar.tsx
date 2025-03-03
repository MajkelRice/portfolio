import React, { useState } from "react";
import handleScroll from "../helper/handleScroll";

const Navbar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="bg-dark text-white opacity-95 sticky top-0 z-50">
			<div className=" mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center">
						<div className="ml-50 text-xl font-bold text-white">
							&lt;
							<button
								onClick={() => handleScroll("hero")}
								className="inline-block text-primary cursor-pointer"
							>
								Michał Ryz{" "}
							</button>{" "}
							/&gt;
						</div>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-4">
						<button
							onClick={() => handleScroll("hero")}
							className="px-3 py-2 text-gray-300 hover:text-primary cursor-pointer"
						>
							Home
						</button>
						<button
							onClick={() => handleScroll("skills")}
							className="px-3 py-2 text-gray-300 hover:text-primary cursor-pointer"
						>
							Skills
						</button>
						<button
							onClick={() => handleScroll("projects")}
							className="px-3 py-2 text-gray-300 hover:text-primary cursor-pointer"
						>
							Projects
						</button>
						<button
							onClick={() => handleScroll("contact")}
							className="px-3 py-2 text-gray-300 hover:text-primary cursor-pointer"
						>
							Contact
						</button>
						<button
							onClick={() => handleScroll("projects")}
							className=" ml-20 mr-4 cursor-pointer  border-2 border-primary text-dark px-5 py-2 rounded bg-primary hover:border-primary/80 hover:bg-primary/80 transition-all duration-300"
						>
							View my work
						</button>
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
				<div className="md:hidden bg-gray-700">
					<div className="px-2 pt-2 pb-3 space-y-1">
						<a
							href="#"
							className="block px-3 py-2 hover:bg-gray-600 rounded-md"
						>
							Home
						</a>
						<a
							href="#"
							className="block px-3 py-2 hover:bg-gray-600 rounded-md"
						>
							Projects
						</a>
						<a
							href="#"
							className="block px-3 py-2 hover:bg-gray-600 rounded-md"
						>
							Skills
						</a>
						<a
							href="#"
							className="block px-3 py-2 hover:bg-gray-600 rounded-md"
						>
							Contact
						</a>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
