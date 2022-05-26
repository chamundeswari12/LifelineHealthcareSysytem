import { Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./nurse.css";

export default function Nurse() {
  return (
    <div className="nurse">
      <h1>Nurse dashboard</h1>
      <div className="nurseSection1">
        <Dropdown>
          <Dropdown.Toggle className="btnToggle" id="dropdown-basic">
            Appointment
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Link className="m-2" to="/user/currentAppointment" id="nav-link">
              Current Appointments
            </Link>
            <Link className="m-2" to="/user/upcomingAppointment" id="nav-link">
              Upcoming Appointments
            </Link>
          </Dropdown.Menu>
        </Dropdown>{" "}
        <Button className="btn-signup" as={Link} to="/user/nursesignup">
          Patient data
        </Button>
      </div>
    </div>
  );
}
