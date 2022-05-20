import "./Login.css";

import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import jwt from "jwt-decode";

import ApiService from "../../services/ApiService";
import NavBar from "../../components/navbar/Navbar";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginData = { username: username, password: password };

    ApiService.login(loginData)

      .then((res) => {
        console.log(res);
        localStorage.setItem("Access_Token", res.data.token);
        // const user = localStorage.getItem('user')
        const username = jwt(res.data.token).sub;
        console.log(username);
        localStorage.setItem("username", username);
        setErrors(false);
        alert(`Login Successful `);
        navigate("/user");
      })
      .catch((error) => {
        console.log(error);
        setErrors(true);
      });
  };

  return (
    <>
      <NavBar />
      <div id="login" className="container-sm ">
        <h1 className="title text-center">Welcome</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              type="text"
              value={username}
              isInvalid={errors}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="name@gmail.com"
            />
          </Form.Group>
          {errors && (
            <p className="text-danger mb-1">
              The provided credentials do not match our records.
            </p>
          )}
          <Form.Group className="mb-3">
            <Form.Label>password</Form.Label>
            <Form.Control
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="enter your password"
              // minLength="8"
              // pattern="^([@#](?=[^aeiou]{7,13}$)(?=[[:alnum:]]{7,13}$)(?=.*[A-Z]{1,}.*$).+)$"
            />
          </Form.Group>

          <Button type="submit" variant="success">
            Login
          </Button>
          {"  "}
          {/* <Button as={Link} to="/signup">
          Signup
        </Button> */}
          <br />
          <Link className="text-center " to="/forgotPassword">
            Forgot Password?
          </Link>
          {" / "}
          <Link className="text-center" to="/signup">
            New User? Signup
          </Link>
        </Form>
      </div>
    </>
  );
}
