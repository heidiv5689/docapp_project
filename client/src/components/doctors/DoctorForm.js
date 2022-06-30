import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const DoctorForm = ({ addDoctor, id, first, last, image, speciality, setEdit, updateDoctor }) => {
  const [doctor, setDoctor] = useState({ first: '', last: '', image: '', speciality: '' })

  useEffect( () => {
    if (id) {
      setDoctor({ first, last, image, speciality })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateDoctor(id, doctor)
      setEdit(false)
    } else {
      addDoctor(doctor)
    }
    setDoctor({ first: '', last: '', image: '', speciality: '' })
  }

  return (
    <>
      <h1>{ id ? 'Edit' : 'Create'} docss</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            name='first'
            value={doctor.first}
            onChange={(e) => setDoctor({ ...doctor, first: e.target.value})}
            placeholder="First name"
            required
          />
           </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            name='last'
            value={doctor.last}
            onChange={(e) => setDoctor({ ...doctor, last: e.target.value})}
            placeholder="Last Name"
            required
          />
          
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image:</Form.Label>
          <Form.Control
            name='image'
            value={doctor.image}
            onChange={(e) => setDoctor({ ...doctor, image: e.target.value})}
            placeholder="Image"
            required
          />
        </Form.Group>
        <Form.Label>Speciality:</Form.Label>
        <Form.Select aria-label="Default select example"
          name='speciality'
          value={doctor.speciality}
          onChange={(e) => setDoctor({...doctor, speciality: e.target.value })}
          placeholder="speciality"
          required >
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        
        
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>


      

  


     

    </>
  )
}

export default DoctorForm;