import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {useNavigate, Link } from "react-router-dom";
import "./Login.css";


export default function Login() {
  const navigate= useNavigate();
  const [username,setUsername]= useState("");
  const [password,setPassword]= useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(username,password);

   const login={"username":username,"password":password};
   console.log(login)
    await axios
      .post("http://localhost:2022/user/", login)
      .then((res) => {
        console.log(res.data);
        alert(`Welcome ${res.data.firstName}`)
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });


  };

  return (
    <div id="login" className="container-sm ">
      <h1 className="text-center">Welcome</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control required type="email"
          value={username}
          onChange={(e) => (setUsername( e.target.value))}
           placeholder="name@gmail.com" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>password</Form.Label>
          <Form.Control
            required
            type="password"
            value={password}
            onChange={(e) => (setPassword( e.target.value))}
            placeholder="enter your password"
            minLength="8"
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
        <Link to="">Forgot?</Link>
        {" / "} <Link to="/signup">Signup</Link>
      </Form>
    </div>
  );
}
