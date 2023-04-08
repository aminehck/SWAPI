import logo from './logo.svg';

const Navbar = () => {
    return ( 
        <header className="mb-auto">
            <img src={logo} className="float-md-start img-logo mb-0" alt="logo" />
            <nav className="nav nav-masthead justify-content-center float-md-end">
                <a className="nav-link active" aria-current="page" href="/">Spaceships</a>
                <a className="nav-link" href="/">Planets</a>
                <a className="nav-link" href="/">Films</a>
            </nav>
        </header>
     );
}
 
export default Navbar;