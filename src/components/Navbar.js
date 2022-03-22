import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function NavBar() {
  return (
    <Navbar className="color-nav" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/" id="navbar-brand">
            Lifeline Health Care System
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id="nav" className="ml-auto">
            <Nav.Link id="nav-link">
              <Link to="/" id="nav-link">
                About
              </Link>
            </Nav.Link>
            <Nav.Link id="nav-link">Medical Camps</Nav.Link>
            <Nav.Link>
              <Link to="/login" id="nav-link">
                Login
              </Link>
            </Nav.Link>
            <Nav.Link id="nav-link">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
