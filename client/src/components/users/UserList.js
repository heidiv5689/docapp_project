import { ListGroup, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import {Container, Row, Card, CardGroup} from 'react-bootstrap';

const UserList = ({ users }) => (
  <>


  <Container>
    <h1>All Users</h1>
  </Container>

  <Container className="mb-5 mt-2">
  

 

    <br/>
  <Row xs={1} md={3} className="g-4">
  { users.map( u => 
    <CardGroup>
    
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>{u.first} {u.last}</Card.Title>
        <Card.Text>
        Phone: {u.phone}
          
        </Card.Text>
        <Link to={`/users/${u.id}`}>
            <Button>Show</Button>
          </Link>
      </Card.Body>
      
    </Card>


    </CardGroup>
    )}
  </Row>
    

  </Container>
 
  </>
)

export default UserList;