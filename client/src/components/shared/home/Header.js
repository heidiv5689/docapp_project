import React from "react";
import { Container, Col, Row, Button } from 'react-bootstrap';
import Di from '../DrApptsAssets/Dr.png';

const Header = () => {

return(
<Container>
<Row style={{display: 'flex',padding: "20px 0px 30px 10px", alignItems: 'center' }}>
  <Col>
  <h3>Come Make a Appointment Today!</h3>
  <p>We have the best primary caregivers in various fields of expertise. 
    You can let us know what you need, and we will pair you off with the best expert to help you with your needs.</p>
  <Button> Call Now: (123) 123 - 1234</Button>
  </Col>
  
  <Col>
  <img src={Di} alt='image' style={{ width: '18rem' }} ></img>
  </Col>
</Row>

</Container>

  )

}
export default Header;