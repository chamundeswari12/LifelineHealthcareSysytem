import { Link } from "react-router-dom";
import "./admin.css";

export default function Admin() {
  return (
    <div className="admin">
      <h1>Admin dashboard</h1>
      <Link to="/user/doctorsignup">Add Doctor</Link>
      <Link to="/user/nursesignup">Add Nurse</Link>
    </div>
  );
}
