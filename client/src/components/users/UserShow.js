import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import UserForm from "./UserForm";
import { UserConsumer } from "../../providers/UserProvider";

const UserShow = ({ updateUser, deleteUser }) => {
  const { id } = useParams()
  const [user, setUser] = useState({ first: '', last: '', phone: '', note: '' })
  const { first, last, phone, note } = user 
  const [userDoctors, setUserDoctors] = useState([])
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/users/${id}`)
      .then( res => {
        setUser(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  useEffect( () => {
    axios.get(`/api/users/${id}/userDoctors`)
      .then( res => setUserDoctors(res.data))
      .catch( err => console.log(err))
  }, [])

  return (
    <>
      <h1>{first} {last} </h1>
      <h2>Phone: {phone}</h2>
      <h2>Notes: {note}  </h2>
      {/* <img 
        src={Image}
        alt="profile"
        width='300px'
      /> */}
      <Button onClick={() => setEdit(true)}>
        Edit
      </Button>

      <Modal show={editing} onHide={() => setEdit(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <UserForm 
            id={id}
            first={first}
            last={last}
            phone={phone}
            note={note}
            setEdit={setEdit}
            updateUser={updateUser}
          />
        </Modal.Body>
      </Modal>

      <Button onClick={() => deleteUser(id)}>
        Delete
      </Button>
      <br />
      
      { userDoctors.map( uc => 
        <div>
          <h1>{uc.title}</h1>
          <p>{uc.desc}</p>
          <p>{uc.cType}</p>
        </div> 
      )}
    </>
  )
}




const ConnectedUserShow = (props) => (
  <UserConsumer>
    { value => <UserShow {...props} {...value} /> }
  </UserConsumer>
)

export default ConnectedUserShow;