import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

function Home() {
	return (
		<div className="Home">
			<Hero></Hero>
			<Skills></Skills>
			<Projects featuredProjects={true}></Projects>
			<Contact></Contact>
		</div>
	);
}

export default Home;
