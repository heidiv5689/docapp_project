import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AppointmentList from './AppointmentList';
import AppointmentForm from './AppointmentForm';

import { Modal, Button } from 'react-bootstrap';

const Appointments = () => {
  const [appointments, setAppointments] = useState([])
  const [teachers, setTeachers] = useState([])
  const [tas, setTas] = useState([])
  const [patients, setPatients] = useState([])
  const [enrolledUsers, setEnrolledUsers] = useState([])
  const [adding, setAdd] = useState(false)
 
  const { doctorId } = useParams()
  const location = useLocation()
  const { doctorTitle } = location.state

  useEffect( () => {
    axios.get(`/api/doctors/${doctorId}/appointments`)
      .then( res => {
        setAppointments(res.data)
        // setTeachers(res.data.teachers)
        // setTas(res.data.tas)
        setPatients(res.data.patients)
      })
      .catch( err => console.log(err))
  }, [])

  useEffect( () => {
    axios.get(`/api/doctors/${doctorId}/enrolled`)
      .then(res => {
        setEnrolledUsers(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  const whichStatus = (enroll) => {
    const { status } = enroll
    switch(status) {
      case 'patient':
        setPatients([...patients, enroll])
        break
      case 'ta':
        setTas([...tas, enroll])
        break
      default:
        setTeachers([...teachers, enroll])
    }
  }

  const addAppointment = (appointment) => {
    axios.post(`/api/doctors/${doctorId}/appointments`, { appointment })
      .then( res => {
        whichStatus(res.data)
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <Button onClick={() => setAdd(true)}>
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <AppointmentForm 
            addAppointment={addAppointment} 
          />
        </Modal.Body>
      </Modal>

      <h2>All Appointments for {doctorTitle} </h2>
      {/* <AppointmentList 
        appointments={appointments}
      /> */}
      {/* <h3>Doctors</h3>
      <AppointmentList
        appointments={teachers}
        enrolledUsers={enrolledUsers}
      />
      <br />
      <h3>Patients</h3>
      <AppointmentList
        appointments={tas}
        enrolledUsers={enrolledUsers}
      /> */}
      <br />
      <h3>Patients</h3>
      <AppointmentList
        appointments={patients}
        enrolledUsers={enrolledUsers}
      />
      <br />
    </>
  )
}

export default Appointments;