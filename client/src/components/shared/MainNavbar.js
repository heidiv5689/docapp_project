import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

const MainNavbar = () => (
  <>

  <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
  
  <Container>
  
  <Navbar.Brand href="/">Dr. Appointments</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
      
    </Nav>
    
      <Nav>
     
      <Nav.Link>
      <Link to='/doctors' style={{textDecoration:"none", color:"orange"}}>
      Doctors
      </Link>
      
      </Nav.Link>
      <Nav.Link eventKey={2}>
      <Link to='/users' style={{textDecoration:"none", color:"orange"}}>
              Users
      </Link>
      </Nav.Link>
      
      </Nav>
  </Navbar.Collapse>
  
  </Container>
</Navbar>




  </>

)

export default MainNavbar;