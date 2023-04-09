import { useCallback, useEffect, useState } from "react";
import Loading from "./components/Loading";
import { api } from "./services/api";
import Starships from "./views/Starships";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [starships, setStarships] = useState([]);
    const getData = useCallback(async () => {
        try {
            const response = await api.get('starships/');
            const returnedData = await response.data;
            setStarships(returnedData.results);
        } catch {
        } finally {
          setIsLoading(false);
        }
      }, [])

    useEffect(() => {
        setIsLoading(true);
        getData();
    }, [getData]);

    return ( 
        <>
            { isLoading && <Loading />}
            {starships && <Starships starships={starships}/>}
        </>

    );
}
 
export default Home;