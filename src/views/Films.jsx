import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { Link } from "react-router-dom";
import { getIdUrl } from '../utils/getIdUrl';
import { HiFilm } from "react-icons/hi";

const Films = ({films}) => {
    return ( 
        <div className="container mt-3 ">
            <h1 className="mb-4 text-center">
                <HiFilm/> Films
            </h1>
            <Row md={4} className="justify-content-center g-4">
                {films.map((film) => (
                    <Col key={getIdUrl(film.url)}>
                        <Link to={`/films/${getIdUrl(film.url)}`}>
                            <Card
                                bg="dark"
                                border="secondary"
                                text="white"
                                className="hover-overlay mb-2"
                            >
                                <Badge bg="warning" className='position-absolute top-0 end-0 rounded-0' text="white">
                                    <h6>
                                    {film.planets.length} {film.planets.length < 2 ? 'Planet' : 'Planets'}
                                    </h6>
                                </Badge>
                                <Card.Img variant="top" className='bg-image mt-0' src={`https://starwars-visualguide.com/assets/img/films/${getIdUrl(film.url)}.jpg`} />
                                <Card.Body className='text-center'>
                                    <Card.Title>
                                        <h4>{film.title}</h4>
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
 
export default Films;