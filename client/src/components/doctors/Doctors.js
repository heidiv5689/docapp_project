import { useState, } from 'react';
import DoctorList from './DoctorList';
import DoctorForm from './DoctorForm';
import { Button, Modal } from 'react-bootstrap';

import { DoctorConsumer } from '../../providers/DoctorProvider';

const Doctors = ({ addDoctor, doctors }) => {
  const [adding, setAdd] = useState(false)

  return (
    <>
      <Button onClick={() => setAdd(true)}>
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <DoctorForm addDoctor={addDoctor} />
        </Modal.Body>
      </Modal>

      <DoctorList 
        doctors={doctors}
      />
    </>
  )
}

const ConnectedCourses = (props) => (
  <DoctorConsumer>
    { value => <Doctors {...props} {...value} />}
  </DoctorConsumer>
)

export default ConnectedCourses;