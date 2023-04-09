import Loading from "./components/Loading";
import Starships from "./Starships";
import useFetch from "./useFetch";

const Home = () => {
    const { data: items, isLoading, error } = useFetch('https://swapi.dev/api/starships');

    return ( 
        <>
            { error && <div>{error}</div> }
            { isLoading && <Loading />}
            {items && <Starships items={items}/>}
        </>

    );
}
 
export default Home;