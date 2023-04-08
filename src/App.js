import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from "./Navbar";
import Starship from "./Starship";
import Footer from "./Footer";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="d-flex h-100 text-white bg-dark">
				<div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
					<Navbar />
					<Routes>
						<Route exact path="/" element={<Home/>} />
						<Route exact path="/starships/:id" element={<Starship/>} />
					</Routes>
					<Footer/>
				</div>
			</div>
		</Router>
	);
}

export default App;
