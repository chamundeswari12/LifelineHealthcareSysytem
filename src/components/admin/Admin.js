import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./admin.css";

export default function Admin() {
  return (
    <div className="admin">
      <h1>Admin dashboard</h1>
      <Button className="btn-signup" as={Link} to="/user/doctorsignup">
        Add Doctor
      </Button>{" "}
      <Button className="btn-signup" as={Link} to="/user/nursesignup">
        Add Nurse
      </Button>{" "}
      <Button className="btn-signup" as={Link} to="/user/allDoctorList">
        View all Doctors
      </Button>{" "}
      <Button className="btn-signup" as={Link} to="/user/allNurseList">
        View all Nurse
      </Button>{" "}
      <Button className="btn-signup" as={Link} to="/user/allUserList">
        View all Users
      </Button>
    </div>
  );
}
