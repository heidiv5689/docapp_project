import { useState } from 'react';
import axios from 'axios';
import UserList from './UserList';
import UserForm from './UserForm';

import { Button, Modal } from 'react-bootstrap';
import { UserConsumer } from '../../providers/UserProvider';

const Users = ({ users, addUser }) => {
  
  const [adding, setAdd] = useState(false)

  return(
    <>
      <Button onClick={() => setAdd(true)}>
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <UserForm addUser={addUser} />
        </Modal.Body>
      </Modal>
      
      <UserList users={users} />
    </>
  )
}

const ConnectedUsers = (props) => (
  <UserConsumer>
    { value => <Users {...props} {...value} /> }
  </UserConsumer>
)

export default ConnectedUsers;