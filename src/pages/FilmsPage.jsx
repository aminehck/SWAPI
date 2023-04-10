import Loading from "../components/Loading";
import Films from "../views/Films";
import Pagination from 'react-bootstrap/Pagination';
import { api } from "../services/api";
import { useCallback, useEffect, useState } from "react";

const FilmsPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [films, setFilms] = useState([]);
    const [page, setPage] = useState(1);
    const getData = useCallback(async (page) => {
        try {
            const response = await api.get(`films/?page=${page}`);
            const returnedData = await response.data;
            setFilms(returnedData.results);
        } catch {
        } finally {
          	setIsLoading(false);
        }
      }, [])

    useEffect(() => {
        setFilms([])
        setIsLoading(true);
        getData(page);
    }, [getData, page]);

    return ( 
        <>
            { isLoading && <Loading />}
            { films && !isLoading && <Films films={films} />}
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
                        disabled={films.length<10}
                    >
                        Next
                    </Pagination.Next>
                </Pagination>
            )}
        </>

    );
}
 
export default FilmsPage;