import { Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./doctor.css";

export default function Doctor() {
  return (
    <div className="doctor">
      <h1>doctor dashboard</h1>
      <div className="nurseSection1">
        <Button as={Link} to="/user/addAppointment">
          Set Appointment
        </Button>
        {"  "}
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Viewappointment
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Link className="m-2" to="/user/currentappointment" id="nav-link">
              Today Appointments
            </Link>

            <Link className="m-2" to="/user/upcomingappointment" id="nav-link">
              upcoming appointment
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}
