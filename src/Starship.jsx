import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Image from 'react-bootstrap/Image';

const Starship = () => {
    const {id} = useParams()
    const navigate = useNavigate();
    const {data: item, error, isLoading} = useFetch('https://swapi.dev/api/starships/' + id);
    
    return ( 
        <div className="details">
            { isLoading && <div>Loading ...</div> }
            { error && <div>{error}</div> }
            { item && (
                <div className='my-5 mx-2'>
                    <h2>
                        {/* <span onClick={() => navigate(-1)}>&lt;</span> */}
                        {item.name}
                    </h2>
                    <Row>
                        <Col md={7}>
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
                        <Col md={5}>
                            <Image src="https://picsum.photos/1700" fluid />
                        </Col>
                    </Row>
                </div>
            )}
        </div>
     );
}
 
export default Starship;