import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found text-center">
            <h2>Sorry</h2>
            <p><b>404</b> - Page not found !</p>
            <Link to="/">Go back ...</Link>
        </div>
     );
}
 
export default NotFound;