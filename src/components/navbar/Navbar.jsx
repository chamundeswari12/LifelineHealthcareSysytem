import { useEffect, useState } from "react";
import { Navbar, Container, Nav, Dropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import "./Navbar.css";
import profilepic from "../../images/profilepic.svg";
import jwtDecode from "jwt-decode";

export default function NavBar() {
  const [token, setToken] = useState(sessionStorage.getItem("Access_Token"));
  const username = sessionStorage.getItem("username");
  const handlefunction = () => {
    sessionStorage.clear();
    alert(`Logout Successful`);
    setToken((data) => (data = sessionStorage.getItem("Access_Token")));
  };

  //  const { exp } = jwtDecode(token);
  // const expirationTime = exp * 1000 - 60000;
  // console.log(Date.now(), expirationTime);
  // setTimeout(authLink, expirationTime);
  // const authLink = async () => {
  //   console.log(Date.now(), expirationTime);
  //   if (Date.now() >= expirationTime) {
  //     console.log(expirationTime);
  //     localStorage.clear();
  //     setToken((data) => (data = localStorage.getItem("Access_Token")));
  //   }
  // };

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
              <HomeIcon className="icon" /> Home
            </Link>
          </Nav>
          <Nav id="nav">
            <Link className="m-2" to="/aboutUs" id="nav-link">
              About Us
            </Link>

            {[null, undefined].includes(token) && (
              <Link className="m-2" to="/login" id="nav-link">
                Login
                <LoginIcon className="icon" />
              </Link>
            )}

            {![null, undefined].includes(token) && (
              <>
                <Link className="m-2" to="/user" id="nav-link">
                  Dashboard
                </Link>
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
                        <ManageAccountsIcon className="icon" /> Profile
                      </Link>
                      <Link className="m-2" to="/user/settings" id="nav-link">
                        <SettingsIcon className="icon" /> Settings
                      </Link>
                      <Link
                        className="m-2"
                        to="/"
                        onClick={handlefunction}
                        id="nav-link"
                      >
                        <LogoutIcon className="icon" />
                        Logout
                      </Link>
                    </Row>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
