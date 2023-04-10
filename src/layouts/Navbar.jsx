import { NavLink } from "react-router-dom";
import logo from './../layouts/logo.svg';
import { FaUserAstronaut, FaSpaceShuttle } from "react-icons/fa";
import { HiFilm } from "react-icons/hi";

const Navbar = () => {
    return ( 
        <header className="mb-auto border-bottom">
            <NavLink to='/'>
                <img src={logo} className="float-md-start img-logo mb-0" alt="logo" />
            </NavLink>
            <nav className="nav nav-masthead justify-content-center float-md-end">
                <NavLink className="nav-link" to="/">
                    <FaSpaceShuttle/>  Spaceships
                </NavLink>
                <NavLink className="nav-link" to="/pilots">
                    <FaUserAstronaut /> Pilots
                </NavLink>
                <NavLink className="nav-link" to="/films">
                   <HiFilm/> Films
                </NavLink>
            </nav>
        </header>
     );
}
 
export default Navbar;