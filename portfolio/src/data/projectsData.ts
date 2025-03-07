import dance_project from "../assets/dance_project.png";
import darwin_world from "../assets/darwin_world.png";
import yummier_project from "../assets/yummier_project.png";

const projectsData = [
	{
		title: "Cooking website with recipes",
		description:
			"Yummier is a cooking site that allows users to search for recipes, save them, and create a delecius meals.",
		tech: ["React", "TypeScript", "SpringBoot", "PostgreSQL", "Docker"],
		github: "https://github.com/treska03/Yummier",
		live: "",
		image: yummier_project,
		featured: true,
	},
	{
		title: "Website for a dance school",
		description:
			"Webiste for a dance school that allows users to view the schedule, check some photos and learn about the school.",
		tech: ["Html", "Css", "JavaScript"],
		github: "",
		live: "https://majkelrice.github.io/WDAI/",
		image: dance_project,
		featured: true,
	},
	{
		title: "Darwin life simulation",
		description:
			"Simulation of life of animals living, moving, eating and reproducing in a 2D world.",
		tech: ["Java", "JavaFX", "Gradle", "Git"],
		github: "https://github.com/kanitsch/darwin_world",
		live: "",
		image: darwin_world,
		featured: true,
	},
];
export default projectsData;
