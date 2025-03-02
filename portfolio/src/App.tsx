import {} from "react";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<div className="">
				<Navbar></Navbar>
				<Router>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/my-projects"
							element={<Projects featuredProjects={false} />}
						/>
					</Routes>
				</Router>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;
