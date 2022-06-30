import React, { useState, useEffect } from 'react';
import axios from 'axios';
// allow to go to another page after an action is done
import { useNavigate } from 'react-router-dom';

export const DoctorContext = React.createContext()

export const DoctorConsumer = DoctorContext.Consumer;

const DoctorProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([])

  const navigate = useNavigate()

  useEffect( () => {
    axios.get('/api/doctors')
      .then( res => {
        setDoctors(res.data)
      })
      .catch( err => console.log(err) )
  }, [])

  const addDoctor = (doctor) => {
    axios.post('/api/doctors', { doctor })
      .then(res => {
        setDoctors([...doctors, res.data])
      })
      .catch( err => console.log(err) )
  }

  const updateDoctor = (id, doctor) => {
    axios.put(`/api/doctors/${id}`, { doctor })
      .then( res => {
        let newUpdatedDoctors = doctors.map( c => {
          if (c.id === id) {
            return res.data 
          }
          return c
        })
        setDoctors(newUpdatedDoctors)
        navigate('/doctors')
        window.location.reload()
      })
      .catch( err => console.log(err) )
  }

  const deleteDoctor = (id) => {
    axios.delete(`/api/doctors/${id}`)
      .then(res => {
        setDoctors(doctors.filter( c => c.id !== id ))
        navigate('/doctors')
        window.location.reload()
      })
      .catch( err => console.log(err) )
  }

  return (
    <DoctorContext.Provider value={{
      doctors,
      addDoctor,
      updateDoctor,
      deleteDoctor
    }}>
      { children }
    </DoctorContext.Provider>
  )
}

export default DoctorProvider;