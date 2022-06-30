import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AppointmentForm = ({ addAppointment }) => {
  const [appointment, setAppointment] = useState({ status: 'patient', user_id: 0 })
  const [unenrolled, setUnenrolledUsers] = useState([])

  const { doctorId } = useParams()

  useEffect( () => {
    axios.get(`/api/doctors/${doctorId}/unenrolled`)
      .then( res => setUnenrolledUsers(res.data))
      .catch( err => console.log(err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setAppointment({ ...appointment, user_id: parseInt(appointment.user_id)})
    addAppointment(appointment)
    setAppointment({ status: 'patient', user_id: 0 })
  }

  return (
    <>
      <h1>Create Appointment</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Select
            name='status'
            value={appointment.status}
            onChange={(e) => setAppointment({ ...appointment, status: e.target.value })}
            required
          >
            <option value="patient">Patient</option>
            {/* <option value="teacher">Teacher</option>
            <option value="ta">Ta</option> */}
          </Form.Select>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Select
            name='user_id'
            value={appointment.user_id}
            onChange={(e) => setAppointment({ ...appointment, user_id: e.target.value })}
            required
          >
            { unenrolled.map( u => 
              <option value={u.id}>{u.first} {u.last}</option>
            )}
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default AppointmentForm;