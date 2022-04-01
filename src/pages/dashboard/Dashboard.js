import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Admin from "../../components/admin/Admin";
import Doctor from "../../components/docter/Doctor";
import Nurse from "../../components/nurse/Nurse";
import User from "../../components/user/User";
import Login from "../login/Login";

export default function Dashboard() {
  // const [user, setUser] = useState(localStorage.getItem('user'));
  let role = "doctor"
  // console.log(user);
  return (
    <div className="dashboard container">
      {role == "doctor" ? <Doctor /> :
        role == "admin" ? <Admin /> :
          role == "nurse" ? <Nurse /> :
            role == "user" ?<User />:<Login/>}
      {/* { (user==undefined || user == null) && 
            <h3>Please login <Link to="/login" >Login</Link> </h3>}
           { (user!=undefined || user != null) && <h3>welcome {user}</h3>}
            */}
    </div>
  )
}