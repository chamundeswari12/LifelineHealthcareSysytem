import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function NavBar() {
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
          <Nav id="nav">
            <Link className="m-3" to="/" id="nav-link">
              About
            </Link>
            {/* <Nav.Link id="nav-link">Medical Camps</Nav.Link> */}
            <Link className="m-3" to="/login" id="nav-link">
              Login
            </Link>
            {/* <Nav.Link id="nav-link">Contact Us</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
