import {} from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
	return (
		<div className="App">
			<div className="">
				<Navbar></Navbar>
				<Hero></Hero>
				<Skills></Skills>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;
