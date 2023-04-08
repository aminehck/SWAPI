import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if(!res.ok) {
                    setData(null)
                    throw Error('Error ! Couldn\'t fetch the data !');
                } 
                return res.json()
            })
            .then(data => {
                setIsLoading(false);
                setError(null)
                setData(data.results);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    setError(err.message)
                    setIsLoading(false);
                }
            })
            // abort the fetch
            return () => abortCont.abort();
    }, [url])

    return {data, isLoading, error};
}

export default useFetch;