import { useCallback, useEffect, useState } from 'react';


export function useStarship(startship) {
    const [pilots, setPilots] = useState([]);
    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getPilots = useCallback(async () => {
        try {
            startship?.pilots.forEach((pilot_url) => {
                fetch(pilot_url)
                .then((dataResponse) => dataResponse.json())
                .then((pilotData) => setPilots((prevState) => {
                    if (prevState.includes(pilotData.name)) return prevState;
                    return [
                        ...prevState,
                        {
                            name: pilotData.name,
                            url: pilotData.url,
                        },
                    ];
                }));
            });
        } catch {
        } finally {
          setIsLoading(false);
        }
    }, [startship?.pilots]);
    
    const getFilms = useCallback(async () => {
        try {
            startship?.films.forEach((filmResponse) => {
                fetch(filmResponse)
                .then((dataResponse) => dataResponse.json())
                .then((filmData) => setFilms((prevState) => {
                    if (prevState.includes(filmData.title)) return prevState;
                    return [
                    ...prevState,
                    {
                        name: filmData.title,
                        url: filmData.url,
                    },
                    ];
                }));
            });
        } catch {
        } finally {
          setIsLoading(false);
        }
    }, [startship?.films]);

    useEffect(() => {
        setIsLoading(true);
        getPilots();
    }, [getPilots]);

    useEffect(() => {
        setIsLoading(true);
        getFilms();
    }, [getFilms]);

  return { pilots, films, isLoading };
}