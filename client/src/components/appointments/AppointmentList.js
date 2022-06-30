import { ListGroup } from 'react-bootstrap';
import Appointment from './Appointment';

const AppointmentList = ({ appointments, enrolledUsers }) => (
  <>
    <ListGroup variant="flush">
      { appointments.map( e => 
        <Appointment 
          key={e.id}
          {...e}
          enrolledUsers={enrolledUsers}
        />
      )}
    </ListGroup>
  </>
)

export default AppointmentList;