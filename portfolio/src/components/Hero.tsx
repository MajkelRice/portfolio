import { motion } from "framer-motion";

function Hero() {
	return (
		<section
			id="home"
			className="min-h-screen flex bg-fixed items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
					<div>
						<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 text-light">
							Hi, I'm <span className="text-primary">Michał</span>
						</h1>
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-primary">
							Full Stack Developer
						</h2>
						<p className="text-secondary mb-8 text-lg max-w-lg">
							I'm a computer science professional specializing in building
							exceptional digital experiences. Currently, I'm focused on
							building accessible, human-centered products.
						</p>
						<div className="flex flex-wrap gap-4">
							<button
								onClick={() => {}}
								className="cursor-pointer border-2 border-primary text-dark px-6 py-3 rounded bg-primary hover:bg-opacity-90 transition-all duration-300"
							>
								View my work
							</button>
							<button
								onClick={() => {}}
								className="cursor-pointer border-2 border-primary text-primary px-6 py-3 rounded hover:bg-primary hover:opacity-80 hover:text-dark transition-all duration-300"
							>
								Contact me
							</button>
						</div>
					</div>

					<div className="relative flex justify-center">
						<motion.div
							initial={{ scale: 1, opacity: 0.4 }}
							animate={{
								scale: [1, 1.1, 1],
								opacity: [0.3, 0.5, 0.3],
							}}
							transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
							className="absolute w-80 h-80 bg-primary rounded-full blur-3xl"
						></motion.div>

						<div className="w-96 h-96 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
							<img src="src/assets/ja.jpg" alt="my profile picture" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
