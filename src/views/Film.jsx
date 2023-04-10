import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Loading from '../components/Loading';
import ItemList from '../components/ItemList';
import { useFilm } from "../hooks/useFilm";
import { api } from '../services/api';
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from 'react';
import { getIdUrl } from '../utils/getIdUrl';

export default function Film() {
    
    const navigate = useNavigate();
    const { id } = useParams();
    const [film, setFilm] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { isLoading: isLoadingPilot, starships, pilots } = useFilm(film);
    

    const getAdditionalData = useCallback(async () => {
        try {
            const response = await api.get(`/films/${id}`);
            setFilm(response.data);
        } catch {
        } finally {
            setIsLoading(false);
        }
    }, [id]);

    useEffect(() => {
        getAdditionalData();
    }, [getAdditionalData]);
    
    return ( 
        <>
            { isLoading  ? (
                <Loading />
            ) : (
                <div className='my-3 mx-2'>
                    <Row>
                        <Col md={12} lg={3}>
                            <Button 
                                className='mb-3'    
                                variant="outline-light"
                                onClick={() => navigate(-1)}
                            > 
                                Go back
                            </Button>
                            <h2>
                                {film.title}
                            </h2>
                            <Image className='bg-image' src={`https://starwars-visualguide.com/assets/img/films/${getIdUrl(film.url)}.jpg`} fluid />
                            <hr />
                            <ListGroup as="ul">
                                <ListGroup.Item as="li">
                                    <b>Episode ID:</b> {film.episode_id}
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>Producer:</b> {film.producer}
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>Director:</b> {film.director}
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>Release date:</b> {film.release_date}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={12} lg={9}>
                            { isLoadingPilot ? (<></>) : (
                                <div>
                                    <Row className='mt-5'>
                                        <Col>    
                                            <h3 className='mt-3'>
                                                Pilots
                                            </h3>
                                            <hr />
                                            <Row className='additional-info'>
                                                {pilots.length === 0 && (<p>No pilot found !</p>)}
                                                {pilots.map((pilot) => (
                                                    <Col md={4}>
                                                        <ItemList key={pilot.url} name={pilot.name} url={`/pilots/${getIdUrl(pilot.url)}`} icon="pilot" />
                                                    </Col>
                                                ))}
                                                
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>    
                                            <h3 className='mt-3'>
                                                Spaceships
                                            </h3>
                                            <hr />
                                            <Row className='additional-info'>
                                                {starships.length === 0 && (<p>No spaceship found !</p>)}
                                                {starships.map((starship) => (
                                                    <Col md={6}>
                                                        <ItemList key={starship.url} name={starship.name} url={`/starships/${getIdUrl(starship.url)}`} icon="starship" />
                                                    </Col>
                                                ))}
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                            )}

                            
                                
                        </Col>
                    </Row>
                    
                </div>
            )}

        </>
     );
}