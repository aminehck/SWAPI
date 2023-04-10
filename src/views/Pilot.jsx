import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Loading from '../components/Loading';
import ItemList from '../components/ItemList';
import { usePilot } from "../hooks/usePilot";
import { api } from '../services/api';
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from 'react';
import { getIdUrl } from '../utils/getIdUrl';

export default function Pilot() {
    
    const navigate = useNavigate();
    const { id } = useParams();
    const [pilot, setPilot] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { isLoading: isLoadingPilot, ships, films, homeWorld } = usePilot(pilot);
    

    const getAdditionalData = useCallback(async () => {
        try {
            const response = await api.get(`/people/${id}`);
            setPilot(response.data);
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
                <div className='my-5 mx-2'>
                    <Row>
                        <Col md={3}>
                            <Button 
                                className='mb-3'    
                                variant="outline-light"
                                onClick={() => navigate(-1)}
                            > 
                                Go back
                            </Button>
                            <Image className='bg-image' src={`https://starwars-visualguide.com/assets/img/characters/${getIdUrl(pilot.url)}.jpg`} fluid />
                        </Col>
                        <Col md={9}>
                            <h1>
                                {pilot.name}
                            </h1>
                            <hr />
                            <ListGroup as="ul">
                                <ListGroup.Item as="li">
                                    <b>Gender:</b> {pilot.gender}
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>Birthdate:</b> {pilot.birth_year}
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>Height:</b> {pilot.height} cm
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>Weight:</b> {pilot.mass} kg
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>Hair color:</b> {pilot.hair_color}
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>Skin:</b> {pilot.skin_color}
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>Eye color:</b> {pilot.eye_color}
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>Planet:</b> {homeWorld.name}
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b># Vehicles:</b> {pilot.vehicles.length} vehicle{pilot.vehicles.length>1 ? 's': ''}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    
                    { isLoadingPilot ? (<></>) : (
                        <Row className='mt-3'>
                            <Col md={6}>    
                                <h3 className='mt-3'>
                                    Spaceships
                                </h3>
                                <hr />
                                <div className='additional-info'>
                                    {ships.length === 0 && (<p>No spaceship found !</p>)}
                                    {ships.map((starship) => (
                                        <ItemList key={starship.url} name={starship.name} url={`/starships/${getIdUrl(starship.url)}`} icon="starship" />
                                    ))}
                                </div>
                            </Col>
                            <Col md={6}>    
                                <h3 className='mt-3'>
                                    Films
                                </h3>
                                <hr />
                                <div className='additional-info'>
                                    {films.length === 0 && (<p>No film found !</p>)}
                                    {films.map((film) => (
                                        <ItemList key={film.url} name={film.name} url={`/films/${getIdUrl(film.url)}`} icon="film" />
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    ) }
                    
                </div>
            )}

        </>
     );
}