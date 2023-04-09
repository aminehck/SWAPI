import { NavLink } from "react-router-dom";
import logo from './../layouts/logo.svg';

const Navbar = () => {
    return ( 
        <header className="mb-auto border-bottom">
            <NavLink to='/'>
                <img src={logo} className="float-md-start img-logo mb-0" alt="logo" />
            </NavLink>
            <nav className="nav nav-masthead justify-content-center float-md-end">
                <NavLink className="nav-link" to="/">Spaceships</NavLink>
                <NavLink className="nav-link" to="/pilots">Pilots</NavLink>
                <NavLink className="nav-link" to="/films">Films</NavLink>
            </nav>
        </header>
     );
}
 
export default Navbar;