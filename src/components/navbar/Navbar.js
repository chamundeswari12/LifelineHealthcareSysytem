import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function NavBar() {
  
 const [token,setToken] = useState(localStorage.getItem('Acess_Token'));
console.log(`token=${token}`)

 const handlefunction=(e)=>{
  e.preventDefault();
  localStorage.removeItem('Acess_Token');
  localStorage.removeItem('user');
  setToken((data)=> data = localStorage.getItem('Acess_Token'));
 }
 
 useEffect(()=>{
  window.addEventListener("storage",()=>{
    setToken((data)=> data = localStorage.getItem('Acess_Token'));
   })
   },[token]);
  return (
    <Navbar className="color-nav" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/" id="navbar-brand">
            LHS
          </Link>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav id="nav">
            <Link className="m-2" to="/" id="nav-link">
              About
            </Link>
            {/* <Nav.Link id="nav-link">Medical Camps</Nav.Link> */}
            {(token==null || token == undefined) &&  <Link className="m-2" to="/login" id="nav-link">Login</Link>}
            {  (token!=null|| token != undefined) && <Link className="m-2" to="/" onClick={handlefunction} id="nav-link">Logout</Link>}
            {/* <Nav.Link id="nav-link">Contact Us</Nav.Link> */}
          </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}
