import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Loading from '../components/Loading';
import { FaUserAstronaut } from "react-icons/fa";
import { HiFilm } from "react-icons/hi";
import { useStarship } from "../hooks/useStarship";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from 'react';
import { api } from '../services/api';
import { Link } from "react-router-dom";

export default function Starship() {
    
    const navigate = useNavigate();
    const { id } = useParams();
    const [starship, setStarship] = useState({});
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
                                    Piltos List
                                </h3>
                                <hr />
                                {pilots.length === 0 && (<p>No pilot found !</p>)}
                                {pilots.map((pilot) => (
                                    <Link key={pilot} to={pilot.url}>
                                        <p className='link'>
                                            - <FaUserAstronaut/>
                                            <span> {pilot.name}</span>
                                        </p>
                                    </Link>
                                ))}
                            </Col>
                            <Col md={7}>    
                                <h3 className='mt-3'>
                                    Films List
                                </h3>
                                <hr />
                                {films.length === 0 && (<p>No film found !</p>)}
                                {films.map((film) => (
                                    <Link key={film} to={film.url}>
                                        <p className='link'>
                                            - <HiFilm/>
                                            <span> {film.name}</span>
                                        </p>
                                    </Link>
                                ))}
                            </Col>
                        </Row>
                    ) }
                    
                </div>
            )}

        </>
     );
}