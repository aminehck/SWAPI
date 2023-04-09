import { FaUserAstronaut } from "react-icons/fa";
import { HiFilm } from "react-icons/hi";
import { Link } from "react-router-dom";

const ItemList = (item) => {
    
    return ( 
        <Link to={item.url}>
            <p className='link'>
                - {item.icon === 'pilot' ? <FaUserAstronaut/> : <HiFilm/>}
                <span> {item.name}</span>
            </p>
        </Link>
     );
}
 
export default ItemList;