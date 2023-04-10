import { useCallback, useEffect, useState } from 'react';

export function useFilm(film) {
    const [pilots, setPilots] = useState([]);
    const [starships, setStarships] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getPilots = useCallback(async () => {
        try {
            film?.characters.forEach((character) => {
                fetch(character)
                .then((dataResponse) => dataResponse.json())
                .then((pilotsData) => setPilots((prevState) => {
                    if (prevState.includes(pilotsData.name)) return prevState;
                    return [
                        ...prevState,
                        {
                            name: pilotsData.name,
                            url: pilotsData.url,
                        },
                    ];
                }));
            }); 
        } catch {
        } finally {
            setIsLoading(false);
        }
    }, [film?.characters]);

    const getStarships = useCallback(async () => {
        try {
            film?.starships.forEach((starship) => {
                fetch(starship)
                .then((dataResponse) => dataResponse.json())
                .then((starshipData) => setStarships((prevState) => {
                    if (prevState.includes(starshipData.name)) return prevState;
                    return [
                        ...prevState,
                        {
                            name: starshipData.name,
                            url: starshipData.url,
                        },
                    ];
                }));
            });
        } catch {
        } finally {
            setIsLoading(false);
        }
    }, [film?.starships]);

    useEffect(() => {
        setIsLoading(true);
        getPilots();
    }, [getPilots]);

    useEffect(() => {
        setIsLoading(true);
        getStarships();
    }, [getStarships]);

    return {
        pilots, starships, isLoading
    };
}