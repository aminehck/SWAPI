import { useCallback, useEffect, useState } from 'react';

export function usePilot(pilot) {
    const [ships, setShips] = useState([]);
    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [homeWorld, setHomeWorld] = useState( {name: ''} );

    const getShips = useCallback(async () => {
        try {
            pilot?.starships.forEach((ship_url) => {
                fetch(ship_url)
                .then((dataResponse) => dataResponse.json())
                .then((shipsData) => setShips((prevState) => {
                    if (prevState.includes(shipsData.name)) return prevState;
                    return [
                        ...prevState,
                        {
                            name: shipsData.name,
                            url: shipsData.url,
                        },
                    ];
                }));
            });
        } catch {
        } finally {
          setIsLoading(false);
        }
    }, [pilot?.starships]);
    
    const getFilms = useCallback(async () => {
        try {
            pilot?.films.forEach((filmResponse) => {
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
    }, [pilot?.films]);

    const getHomeWorld = useCallback(async () => {
        try {
            if (!pilot?.homeworld) return;
            const response = await fetch(pilot.homeworld);
            const homeWorldData = await response.json();
            setHomeWorld( {name: homeWorldData.name} );
        } catch {
        } finally {
            setIsLoading(false);
        }
      }, [pilot?.homeworld]);

    useEffect(() => {
        setIsLoading(true);
        getShips();
    }, [getShips]);

    useEffect(() => {
        setIsLoading(true);
        getFilms();
    }, [getFilms]);

    useEffect(() => {
        getHomeWorld();
      }, [getHomeWorld]);

  return { ships, films, homeWorld,isLoading };
}