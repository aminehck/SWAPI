import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { Link } from "react-router-dom";
import { getIdUrl } from '../utils/getIdUrl';
import { FaUserAstronaut } from "react-icons/fa";

const Pilots = ({pilots}) => {
    return ( 
        <div className="container mt-3 ">
            <h1 className="mb-4 text-center">
                <FaUserAstronaut/> Pilots
            </h1>
            <Row xs={2} md={3} lg={5} className="justify-content-center g-4">
                {pilots.map((pilot) => (
                    <Col key={getIdUrl(pilot.url)}>
                        <Link to={`/pilots/${getIdUrl(pilot.url)}`}>
                            <Card
                                bg="dark"
                                border="secondary"
                                text="white"
                                className="hover-overlay mb-2"
                            >
                                <Badge bg="warning" className='position-absolute top-0 end-0 rounded-0' text="white">
                                    <h6>
                                        {pilot.films.length} film{pilot.films.length>1 ? 's' : ''}
                                    </h6>
                                </Badge>
                                <Card.Img variant="top" className='bg-image mt-0' src={`https://starwars-visualguide.com/assets/img/characters/${getIdUrl(pilot.url)}.jpg`} />
                                <Card.Body className='text-center'>
                                    <Card.Title>
                                        <h4>{pilot.name}</h4>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </div>
     );
}
 
export default Pilots;