import Loading from "./components/Loading";
import Starships from "./views/Starships";
import Pagination from 'react-bootstrap/Pagination';
import { api } from "./services/api";
import { useCallback, useEffect, useState } from "react";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [starships, setStarships] = useState([]);
    const [page, setPage] = useState(1);
    const getData = useCallback(async (page) => {
        try {
            setStarships([])
            const response = await api.get(`starships/?page=${page}`);
            const returnedData = await response.data;
            setStarships(returnedData.results);
        } catch {
        } finally {
          	setIsLoading(false);
        }
      }, [])

    useEffect(() => {
        setIsLoading(true);
        getData(page);
    }, [getData, page]);

    return ( 
        <>
            { isLoading && <Loading />}
            { starships && <Starships starships={starships} />}
            { !isLoading && (
                <Pagination className="mt-3 justify-content-center">
                    <Pagination.Prev 
                        disabled={page === 1}
                        onClick={() => setPage((prevState) => prevState - 1)}
                    > 
                        Prev
                    </Pagination.Prev>
                    <Pagination.Item active>{page}</Pagination.Item>
                    <Pagination.Next 
                        onClick={() => setPage((prevState) => prevState + 1)}
                        disabled={starships.length<10}
                    >
                        Next
                    </Pagination.Next>
                </Pagination>
            )}
        </>

    );
}
 
export default Home;