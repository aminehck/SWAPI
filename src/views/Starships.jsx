import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { Link } from "react-router-dom";
import { getIdUrl } from '../utils/getIdUrl';
import { FaSpaceShuttle } from "react-icons/fa";

const Starships = ({starships}) => {
    return ( 
        <div className="container mt-3 ">
            <h1 className='mb-4 text-center'>
                <FaSpaceShuttle/> Spaceships
            </h1>
            <Row md={2} className="g-4">
                {starships.map((starship) => (
                    <Col key={getIdUrl(starship.url)}>
                        <Link to={`/starships/${getIdUrl(starship.url)}`}>
                            <Card
                                bg="dark"
                                border="secondary"
                                text="white"
                                className="hover-overlay mb-2"
                            >
                                <Badge bg="warning" className='position-absolute top-0 end-0 rounded-0' text="white">
                                    <h6>
                                        {starship.starship_class}
                                    </h6>
                                </Badge>
                                <Card.Img variant="top" className='bg-image mt-0' src={`https://starwars-visualguide.com/assets/img/starships/${getIdUrl(starship.url)}.jpg`} />
                                <Card.Body>
                                    <Card.Title>
                                        <h4>{starship.name}</h4>
                                    </Card.Title>
                                    <Card.Text>
                                        {starship.model}
                                    </Card.Text>
                                    <Button variant="outline-light">Read more</Button>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>

        </div>
     );
}
 
export default Starships;