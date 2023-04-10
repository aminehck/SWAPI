import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Loading from '../components/Loading';
import { useStarship } from "../hooks/useStarship";
import { api } from '../services/api';
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from 'react';
import ItemList from '../components/ItemList';
import { getIdUrl } from '../utils/getIdUrl';

export default function Starship() {
    
    const navigate = useNavigate();
    const { id } = useParams();
    const [starship, setStarship] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { isLoading: isLoadingStarship, pilots, films } = useStarship(starship);
    

    const getAdditionalData = useCallback(async () => {
        try {
            const response = await api.get(`/starships/${id}`);
            setStarship(response.data);
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
                        <Col md={5}>
                            <Button 
                                className='mb-3'    
                                variant="outline-light"
                                onClick={() => navigate(-1)}
                            > 
                                Go back
                            </Button>
                            <Image className='bg-image' src="https://picsum.photos/1700" fluid />
                        </Col>
                        <Col md={7}>
                            <h1>
                                {starship.name}
                            </h1>
                            <hr />
                            <ListGroup as="ul">
                                <ListGroup.Item as="li">
                                    <b>Model:</b> {starship.model}
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>Manufacturer:</b> {starship.manufacturer}
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>Class:</b> {starship.starship_class}
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>Cost in credits:</b> {starship.cost_in_credits}
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>Atmospheric Speed:</b> {starship.max_atmosphering_speed} km/h
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>Length:</b> {starship.length} m
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>Passengers:</b> {starship.passengers}
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>Hyperdrive Rating:</b> {starship.hyperdrive_rating}
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>Cargo capacity:</b> {starship.cargo_capacity}
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>Crew:</b> {starship.crew}
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>Consumables:</b> {starship.consumables}
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>MGLT:</b> {starship.MGLT}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    
                    { isLoadingStarship ? (<></>) : (
                        <Row className='mt-3'>
                            <Col md={5}>    
                                <h3 className='mt-3'>
                                    Piltos
                                </h3>
                                <hr />
                                <div className='additional-info'>
                                    {pilots.length === 0 && (<p>No pilot found !</p>)}
                                    {pilots.map((pilot) => (
                                        <ItemList key={pilot.url} name={pilot.name} url={`/pilots/${getIdUrl(pilot.url)}`} icon="pilot" />
                                    ))}
                                </div>
                            </Col>
                            <Col md={7}>    
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