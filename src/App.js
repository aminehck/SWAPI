import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import Starship from "./views/Starship";
import FilmsPage from "./pages/FilmsPage";
import Film from "./views/Film";
import Pilot from "./views/Pilot";
import PilotsPage from "./pages/PilotsPage";
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
						<Route path="/films" element={<FilmsPage/>} />
						<Route path="/films/:id" element={<Film/>} />
						<Route path="/pilots" element={<PilotsPage/>} />
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
