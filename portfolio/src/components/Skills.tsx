function Skills() {
	return (
		<section id="skills" className="py-20 bg-gray-800">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-bold mb-12 text-center text-white">
					My Skills
					<div className="w-32 h-1 bg-primary mx-auto mt-2"></div>
				</h2>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
					<div className="flex flex-col justify-center">
						<h3 className="text-xl font-bold mb-6 text-light text-center lg:text-left">
							Technical Proficiency
						</h3>
						<div className="p-6 bg-gray-700 rounded-lg shadow-lg">
							<h3 className="text-xl font-bold mb-4 text-primary">
								About Me In a Nutshell
							</h3>
							{[
								{
									text: "Software engineer with 7+ years of experience",
									icon: "fas fa-code",
								},
								{
									text: "MS in Computer Science, Stanford University",
									icon: "fas fa-graduation-cap",
								},
								{
									text: "Worked at Google, Microsoft and startups",
									icon: "fas fa-briefcase",
								},
								{
									text: "Passionate about clean code and elegant solutions",
									icon: "fas fa-lightbulb",
								},
								{
									text: "Love hiking, photography and chess",
									icon: "fas fa-heart",
								},
							].map((item, index) => (
								<div key={index} className="space-y-3 flex items-start">
									<i className={`${item.icon} text-primary mt-1 mr-3`}></i>
									<span className="text-light">{item.text}</span>
								</div>
							))}
						</div>
					</div>
					<div>
						<h3 className="text-xl font-bold mb-6 text-light">
							Tech Stack & Tools
						</h3>

						<div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-4 text-white">
							{[
								{ name: "HTML5", icon: "fab fa-html5" },
								{ name: "CSS3", icon: "fab fa-css3-alt" },
								{ name: "JavaScript", icon: "fab fa-js" },
								{ name: "Bootstrap", icon: "fab fa-bootstrap" },
								{ name: "React", icon: "fab fa-react" },
								{ name: "Python", icon: "fab fa-python" },
								{ name: "Java", icon: "fab fa-java" },
								{ name: "Docker", icon: "fab fa-docker" },
								{ name: "Git", icon: "fab fa-git-alt" },
								{ name: "Linux", icon: "fab fa-linux" },
							].map((skill, index) => (
								<div
									key={index}
									//add changing color on hover for icons
									className="flex flex-col items-center p-4 bg-gray-700 rounded-lg transition-all duration-300 ease-in-out hover:scale-110 hover:text-primary "
								>
									<i className={`${skill.icon} text-3xl mb-2 text-light`}></i>
									<span className="text-sm ">{skill.name}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
