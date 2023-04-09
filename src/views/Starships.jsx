import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { Link } from "react-router-dom";

const Starships = ({starships}) => {
    return ( 
        <div className="container mt-3 ">
            <Row xs={1} md={2} className="g-4">
                {starships.map((item) => (
                    <Col key={(item.url).match(/[0-9]+/)}>
                        <Link to={`/starships/${(item.url).match(/[0-9]+/)}`}>
                            <Card
                                bg="dark"
                                border="secondary"
                                text="white"
                                className="hover-overlay mb-2"
                            >
                                <Badge bg="warning" className='position-absolute top-0 end-0 rounded-0' text="white">
                                    <h6>
                                        {item.starship_class}
                                    </h6>
                                </Badge>
                                <Card.Img variant="top" className='bg-image mt-0' src="https://picsum.photos/250/100" />
                                <Card.Body>
                                    <Card.Title>
                                        <h4>{item.name}</h4>
                                    </Card.Title>
                                    <Card.Text>
                                        {item.model}
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