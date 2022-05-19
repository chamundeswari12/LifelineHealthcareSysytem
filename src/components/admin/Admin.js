import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./admin.css";

export default function Admin() {
  return (
    <div className="admin">
      <h1>Admin dashboard</h1>
      <Button as={Link} to="/user/doctorsignup">
        Add Doctor
      </Button>{" "}
      <Button as={Link} to="/user/nursesignup">
        Add Nurse
      </Button>
    </div>
  );
}
