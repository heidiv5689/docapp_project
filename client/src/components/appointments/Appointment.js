import { ListGroup } from "react-bootstrap";

const Appointment = ({ status, user_id, doctor_id, enrolledUsers }) => {

  const displayFullName = (id) => {
    let fullName = ''
    enrolledUsers.map( u => {
      if (u.id === id) {
        fullName = u.first + " " + u.last 
      }
    })
    return fullName
  }

  return (
    <>
      <ListGroup.Item>
        {displayFullName(user_id)}
        <button>edit</button>
        <button>delete</button>
      </ListGroup.Item>
    </>
  )
}

export default Appointment;