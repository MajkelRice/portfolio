import { Link } from "react-router-dom";
import projectsData from "../data/projectsData";

interface ProjectsProps {
	featuredProjects: boolean;
}

function Projects({ featuredProjects }: ProjectsProps) {
	return (
		<section id="projects" className="py-20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-white text-3xl font-bold mb-12 text-center">
					Featured Projects
					<div className="w-64 h-1 bg-primary mx-auto mt-2"></div>
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projectsData
						.filter((project) => !featuredProjects || project.featured)
						.map((project, index) => (
							<div
								key={index}
								className="transition-all duration-300 ease-in-out hover:-translate-y-2.5 bg-gray-800 rounded-lg overflow-hidden shadow-lg"
							>
								<div
									className="h-48 w-full flex items-center justify-center bg-cover bg-center"
									style={{
										backgroundImage: project.image
											? `url(${project.image})`
											: "none",
									}}
								>
									{!project.image && (
										<div className="h-48 w-full flex items-center justify-center bg-cover bg-center bg-gradient-to-br from-indigo-600 to-pink-500"></div>
									)}
								</div>
								<div className="p-6">
									<h3 className="text-xl font-bold mb-2 text-light">
										{project.title}
									</h3>
									<p className="text-secondary mb-4">{project.description}</p>
									<div className="flex flex-wrap mb-4">
										{project.tech.map((tech, techIndex) => (
											<span
												key={techIndex}
												className="text-xs bg-gray-700 text-primary rounded-full px-3 py-1 mr-2 mb-2"
											>
												{tech}
											</span>
										))}
									</div>
									<div className="flex space-x-4">
										{/* <button
											onClick={() => window.open(project.github, "_blank")}
											className="border-2 border-primary text-dark px-6 py-3 rounded bg-primary hover:bg-opacity-90 transition-all duration-300"
										>
											View on github <i className="fab fa-github text-xl"></i>
										</button> */}
										<a
											href={project.github}
											className="text-light hover:text-primary transition-colors"
										>
											<i className="fab fa-github text-xl"></i>
										</a>
										<a
											href={project.live}
											className="text-light hover:text-primary transition-colors"
											hidden={project.live == ""}
										>
											<i className="fas fa-external-link-alt text-xl"></i>
										</a>
									</div>
								</div>
							</div>
						))}
				</div>

				<div className="text-center mt-12">
					<Link
						to="/my-projects"
						className="text-primary hover:underline inline-flex items-center"
					>
						View More Projects
						<i className="fas fa-arrow-right ml-2"></i>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Projects;
