import { useState } from "react";
import { Navbar, Container, Nav, Dropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Navbar.css";
import profilepic from "../../images/profilepic.svg";

export default function NavBar() {
  const [token, setToken] = useState(localStorage.getItem("Access_Token"));
  const username = localStorage.getItem("username");
  const handlefunction = () => {
    localStorage.clear();
    alert(`Logout Successful`);
    setToken((data) => (data = localStorage.getItem("Access_Token")));
  };

  return (
    <Navbar className="color-nav" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/" id="navbar-brand">
            LHS
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="m-2" to="/" id="nav-link">
              Home
            </Link>
          </Nav>
          <Nav id="nav">
            <Link className="m-2" to="/aboutUs" id="nav-link">
              About Us
            </Link>

            {(token == null || token == undefined) && (
              <Link className="m-2" to="/login" id="nav-link">
                Login
              </Link>
            )}

            {(token != null || token != undefined) && (
              <Link className="m-2" to="/user" id="nav-link">
                Dashboard
              </Link>
            )}
          </Nav>
          {(token != null || token != undefined) && (
            <Dropdown>
              <Dropdown.Toggle
                className="toggle"
                variant="light"
                id="dropdown-basic dropdownMenu dropdown-autoclose-true "
              >
                {/* <img src={profilepic} alt="profile" className="img" /> */}
                <p id="nav-link" className="username">
                  {username}
                </p>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Row>
                  <Link className="m-2" to="/user/profile" id="nav-link">
                    Profile
                  </Link>
                  <Link className="m-2" to="/user/settings" id="nav-link">
                    Settings
                  </Link>
                  <Link
                    className="m-2"
                    to="/"
                    onClick={handlefunction}
                    id="nav-link"
                  >
                    Logout
                  </Link>
                </Row>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
