import { useState } from "react";
import { Link } from "react-router-dom";

import NavBar from "../../components/navbar/Navbar";

export default function Dashboard() {
  // const [user,setUser]= useState(localStorage.getItem('user'));
  const [token, setToken] = useState(localStorage.getItem("Acess_Token"));
  // console.log(user);

  return (
    <>
      <NavBar />
      <div className="dashboard container">
        {(token == undefined || token == null) && (
          <h3>
            Please login <Link to="/login">Login</Link>
          </h3>
        )}
        {(token != undefined || token != null) && <h3>welcome</h3>}
      </div>
    </>
  );
}
