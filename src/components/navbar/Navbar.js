import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";

export default function NavBar() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {}, [userInfo]);
  // useEffect(() => {
  //   console.log(isLoggedIn);
  // }, [isLoggedIn]);

  // const navigate = useNavigate;

  // const [token, setToken] = useState();

  // useEffect(() => {
  //   const data = localStorage.getItem("Acess_Token");
  //   setToken(data);
  //   console.log(`token1=${token}`);
  // }, [token]);
  // console.log(`token=${token}`);

  // const handlefunction = (e) => {
  //   localStorage.removeItem("Acess_Token");
  //   // localStorage.removeItem('user');
  //   const data = localStorage.getItem("Acess_Token");
  //   setToken(data);
  // };

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
        {/* <Nav id="nav">
          <Link className="m-2" to="/" id="nav-link">
            About
          </Link> */}
        {/* <Nav.Link id="nav-link">Medical Camps</Nav.Link> */}
        {userInfo ? (
          <Nav id="nav">
            <Link className="m-2" to="/" id="nav-link">
              About
            </Link>
            <Link
              className="m-2"
              to="/login"
              onClick={logoutHandler}
              id="nav-link"
            >
              Logout
            </Link>
          </Nav>
        ) : (
          <Nav id="nav">
            <Link className="m-2" to="/" id="nav-link">
              About
            </Link>
            <Link className="m-2" to="/login" id="nav-link">
              Login
            </Link>
          </Nav>
        )}
        {/* {(token==null || token == undefined) &&  <Link className="m-2" to="/login" id="nav-link">Login</Link>}
            {  (token!=null|| token != undefined) && <Link className="m-2" to="/" onClick={handlefunction} id="nav-link">Logout</Link>} */}
        {/* <Nav.Link id="nav-link">Contact Us</Nav.Link> */}
        {/* </Nav> */}
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}
