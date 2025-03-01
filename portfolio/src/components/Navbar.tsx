import React, { useState } from "react";

const Navbar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="bg-dark text-white sticky top-0 z-50">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center">
						<div className="text-xl font-bold text-primary">Michał Ryz</div>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-4">
						<a href="#" className="px-3 py-2 text-gray-300 hover:text-primary">
							Home
						</a>
						<a href="#" className="px-3 py-2 text-gray-300 hover:text-primary">
							Projects
						</a>
						<a href="#" className="px-3 py-2 text-gray-300 hover:text-primary">
							Skills
						</a>
						<a href="#" className="px-3 py-2 text-gray-300 hover:text-primary">
							Experience
						</a>
						<a href="#" className="px-3 py-2 text-gray-300 hover:text-primary">
							Contact
						</a>
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
							Experience
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
