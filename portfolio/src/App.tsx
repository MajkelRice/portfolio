import {} from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<div className="">
				<Navbar></Navbar>
				<Home></Home>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;
