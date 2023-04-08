import Starships from "./Starships";
import useFetch from "./useFetch";

const Home = () => {
    const { data: items, isLoading, error } = useFetch('https://swapi.dev/api/starships');

    return ( 
        <div className="home">
            { error && <div>{error}</div>}
            { isLoading && <div>Loading ...</div>}
            {items && <Starships items={items}/>}
        </div>

    );
}
 
export default Home;