import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found h-100 justify-content-center text-center m-5 p-5 align-items-center">
            <h2>Sorry</h2>
            <p><b>404</b> - Page not found !</p>
            <Link to="/">Go back ...</Link>
        </div>
     );
}
 
export default NotFound;