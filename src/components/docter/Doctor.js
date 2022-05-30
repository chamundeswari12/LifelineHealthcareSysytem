import { Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./doctor.css";

export default function Doctor() {
  return (
    <div className="doctor">
      <h1>doctor dashboard</h1>
      <Button as={Link} to="/user/addAppointment">
        Set Appointment
      </Button>{" "}
      {/* <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          view Appointment
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Today's appointment</Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              upcoming appointment
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Toggle>
      </Dropdown> */}
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          Viewappointment
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Link className="m-2" to="/user/Todayssappointment" id="nav-link">
            Today's appointment
          </Link>

          <Link className="m-2" to="/user/upcomingappointment" id="nav-link">
            upcoming appointment
          </Link>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
