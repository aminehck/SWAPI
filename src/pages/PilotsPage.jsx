import Loading from "../components/Loading";
import Pilots from "../views/Pilots";
import Pagination from 'react-bootstrap/Pagination';
import { api } from "../services/api";
import { useCallback, useEffect, useState } from "react";

const PilotsPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [pilots, setPilots] = useState([]);
    const [page, setPage] = useState(1);
    const getData = useCallback(async (page) => {
        try {
            const response = await api.get(`people/?page=${page}`);
            const returnedData = await response.data;
            setPilots(returnedData.results);
        } catch {
        } finally {
          	setIsLoading(false);
        }
      }, [])

    useEffect(() => {
        setPilots([])
        setIsLoading(true);
        getData(page);
    }, [getData, page]);

    return ( 
        <>
            { isLoading && <Loading />}
            { pilots && !isLoading && <Pilots pilots={pilots} />}
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
                        disabled={pilots.length<10}
                    >
                        Next
                    </Pagination.Next>
                </Pagination>
            )}
        </>

    );
}
 
export default PilotsPage;