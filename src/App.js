import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./Home";
import Starship from "./views/Starship";
import Films from "./views/Films";
import Film from "./views/Film";
import Pilot from "./views/Pilot";
import Pilots from "./views/Pilots";
import NotFound from "./components/Notfound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="d-flex h-100 text-white bg-dark">
				<div className="cover-container container d-flex w-100 h-100 p-3 mx-auto flex-column">
					<Navbar />
					<Routes>
						<Route exact path="/" element={<Home/>} />
						<Route path="/starships/:id" element={<Starship/>} />
						<Route path="/films" element={<Films/>} />
						<Route path="/films/:id" element={<Film/>} />
						<Route path="/pilots" element={<Pilots/>} />
						<Route path="/pilots/:id" element={<Pilot/>} />
						<Route path="*" element={<NotFound/>} />
					</Routes>
					<Footer/>
				</div>
			</div>
		</Router>
	);
}

export default App;
