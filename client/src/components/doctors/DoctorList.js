import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

const DoctorList = ({ doctors }) => (
  <>
    <h1>All Doctorss</h1>
    <Container>
      <Row md={4} xs={12}>
        { doctors.map( c => 
          <Col>
            <Card style={{ width: '10rem' }}>
              <Card.Body>
                <Card.Title>{c.first}</Card.Title>
                <Card.Link>
                  <Link to={`/doctors/${c.id}`}>
                    Show
                  </Link>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>  
        )}
      </Row>
    </Container>
  </>
)

export default DoctorList;