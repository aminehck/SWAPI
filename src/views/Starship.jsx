import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import useFetch from "../hooks/useFetch";
import Loading from '../components/Loading';
import { useNavigate, useParams } from "react-router-dom";

const Starship = () => {
    const {id} = useParams()
    const navigate = useNavigate();
    const {data: item, error, isLoading} = useFetch('https://swapi.dev/api/starships/' + id);
    
    
    return ( 
        <>
            { isLoading && <Loading />}
            { error && <div>{error}</div> }
            { item && (
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
                                {item.name}
                            </h1>
                            <hr />
                            <ListGroup as="ul">
                                <ListGroup.Item as="li">
                                    <b>Model:</b> {item.model}
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>Manufacturer:</b> {item.manufacturer}
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>Class:</b> {item.starship_class}
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>Cost in credits:</b> {item.cost_in_credits}
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>Atmospheric Speed:</b> {item.max_atmosphering_speed} km/h
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>Length:</b> {item.length} m
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>Passengers:</b> {item.passengers}
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>Hyperdrive Rating:</b> {item.hyperdrive_rating}
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>Cargo capacity:</b> {item.cargo_capacity}
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>Crew:</b> {item.crew}
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>Consumables:</b> {item.consumables}
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <b>MGLT:</b> {item.MGLT}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row>
                        <h3 className='mt-3'>
                            Piltos List
                        </h3>
                        
                        <hr />
                        {/* {pilots.map((pilot) => (
                        <Col >
                            <Card
                                bg="light"
                                key={pilot}
                                text="dark"
                                style={{ width: '18rem' }}
                                className="mb-2"
                                >
                                <Card.Header>{pilot.name}</Card.Header>
                                <Card.Body>
                                    <Card.Title> Card Title </Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        ))} */}
                    </Row>
                </div>
            )}
        </>
     );
}
 
export default Starship;