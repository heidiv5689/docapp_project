import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DoctorConsumer } from '../../providers/DoctorProvider';
import { Modal, Button } from 'react-bootstrap';
import {Container, Row, Card, CardGroup} from 'react-bootstrap';



import DoctorForm from './DoctorForm';




const DoctorShow = ({ updateDoctor, deleteDoctor }) => {
  const { id } = useParams()
  const [doctor, setDoctor] = useState({ first: '', last: '', image: '', speciality: '' })
  const { first, last, image, speciality} = doctor

  const [doctorUsers, setDoctorUsers] = useState([])
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/doctors/${id}`)
      .then( res => setDoctor(res.data) )
      .catch( err => console.log(err) )
  }, [])

  useEffect( () => {
    axios.get(`/api/doctors/${id}/doctorUsers`)
      .then( res => setDoctorUsers(res.data) )
      .catch( err => console.log(err) )
  }, [])

  return (
    <>
    <Container>
    <h1>Doc Name:{first} {last} </h1>
      <h3>Speciality:{speciality} </h3>
      <img 
        src={image}
        alt="image"
        width='300px'
      />

    </Container>
    
      
      <Button onClick={() => setEdit(true)}>
        Edit
      </Button>

      <Modal show={editing} onHide={() => setEdit(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <DoctorForm 
            id={id}
            first={first}
            last={last}
            image={image}
            speciality={speciality}
            setEdit={setEdit}
            updateDoctor={updateDoctor}
          />
        </Modal.Body>
      </Modal>

      <Link
        to={`/${id}/appointments`}
        state={
          { doctorFirst: first }
        }
      >
        <Button>
          appointments
        </Button>
      </Link>
      <Button onClick={() => deleteDoctor(id)}>
        Delete
      </Button>
      <br />
      
      
      <h1>All Patients of Dr. {first} {last}</h1>
     
     
      
    <Container>
    <Row xs={1} md={3} className="g-4">
    {doctorUsers.map( cu => 
    <CardGroup>
    
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>{cu.first} {cu.last}</Card.Title>
        <Card.Text>
        Phone: {cu.phone}
          
        </Card.Text>
       
      </Card.Body>
      
    </Card>


    </CardGroup>
    )}
    </Row>
    </Container>

    </>
  )
}

const ConnectedDoctorShow = (props) => (
  <DoctorConsumer>
    { value => <DoctorShow {...props} {...value} />}
  </DoctorConsumer>
)

export default ConnectedDoctorShow;