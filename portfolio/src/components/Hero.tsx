import { motion } from "framer-motion";
import handleScroll from "../helper/handleScroll";

function Hero() {
	return (
		<section
			id="hero"
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
							I'm a computer science student passionate about building scalable
							and efficient software solutions. I'm currently focused on
							developing both frontend and backend systems to create seamless,
							accessible, and human-centered digital experiences.
						</p>
						<div className="flex flex-wrap gap-4">
							<button
								onClick={() => handleScroll("projects")}
								className="cursor-pointer border-2 border-primary text-dark px-6 py-3 rounded bg-primary hover:border-primary/80 hover:bg-primary/80 transition-all duration-300"
							>
								View my work
							</button>
							<button
								onClick={() => handleScroll("contact")}
								className="cursor-pointer border-2 border-primary text-primary px-6 py-3 rounded hover:bg-primary hover:opacity-80 hover:text-dark transition-all duration-300"
							>
								Contact me
							</button>
						</div>
					</div>

					<div className="relative flex justify-center">
						<motion.div
							initial={{ scale: 1, opacity: 0.4 }}
							animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
							transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
							className="absolute max-w-[20rem] w-full aspect-square bg-primary rounded-full blur-3xl"
						></motion.div>

						<div className="relative z-10 overflow-hidden border-4 border-white shadow-xl rounded-full max-w-[24rem] w-full aspect-square">
							<img
								src="src/assets/ja.jpg"
								alt="my profile picture"
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
