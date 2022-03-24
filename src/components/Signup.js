import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Signup.css";
// import {  } from "react-router";
export default function Signup() {
  let initial = {
    // FirstName: "",
    // LastName: "",
    // UserName: "",
    // email: "",
    // password: "",
    // confirmPassword: "",
    // dateOfBirth: "",
    // gender: "",
    // phoneNumber: ""
  };
  // const history = useHistory();
  const [signupData, setSignupData] = useState({ initial });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(initial);
    await axios
      .post("http://localhost:2022/user/", initial)
      .then((res) => {
        console.log(res.data);
        // history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });

    // setSignupData({ ...initial });
    // console.log(signupData);
  };
  return (
    <div id="signup" className="container-sm ">
      <h1 className="text-center">Signup</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="FirstName">First Name</Form.Label>
          <Form.Control
            name="FirstName"
            id="FirstName"
            // autocomplete="FirstName"
            required
            type="text"
            placeholder="First name"
            value={initial.FirstName}
            onChange={(e) => (initial.FirstName = e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="LastName">Last Name</Form.Label>
          <Form.Control
            name="LastName"
            id="LastName"
            required
            type="text"
            placeholder="Last name"
            value={initial.LastName}
            onChange={(e) => (initial.LastName = e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="Username">Username</Form.Label>
          <Form.Control
            name="Username"
            id="Username"
            required
            type="text"
            placeholder="Enter Username"
            value={initial.UserName}
            onChange={(e) => (initial.UserName = e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            name="email"
            id="email"
            autoComplete="email"
            required
            type="email"
            placeholder="name@gmail.com"
            value={initial.email}
            onChange={(e) => (initial.email = e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="Password">Password</Form.Label>
          <Form.Control
            name="Password"
            id="Password"
            required
            type="password"
            placeholder="Enter your password"
            minLength="8"
            value={initial.password}
            onChange={(e) => (initial.password = e.target.value)}
            // pattern="[0-9a-zA-Z][!@#$%^&*-?].{8,14}"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="ConfirmPassword">Confirm Password</Form.Label>
          <Form.Control
            name="ConfirmPassword"
            id="ConfirmPassword"
            required
            type="password"
            placeholder="Enter your password"
            minLength="8"
            value={initial.confirmPassword}
            onChange={(e) => (initial.confirmPassword = e.target.value)}
            // pattern="^([@#](?=[^aeiou]{7,13}$)(?=[[:alnum:]]{7,13}$)(?=.*[A-Z]{1,}.*$).+)$"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="dateOfBirth">Date of Birth</Form.Label>
          <Form.Control
            name="dateOfBirth"
            id="dateOfBirth"
            required
            type="date"
            value={initial.dateOfBirth}
            onChange={(e) => (initial.dateOfBirth = e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Gender">
          <Form.Label>Gender : </Form.Label>{" "}
          <Form.Check
            required
            inline
            label="Male"
            name="gender"
            type="radio"
            value={initial.gender}
            onChange={(e) => {
              initial.gender = "Male";
            }}
          />
          <Form.Check
            inline
            label="Female"
            name="gender"
            type="radio"
            value={initial.gender}
            onChange={(e) => {
              initial.gender = "Female";
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="phone number">Phone Number</Form.Label>
          <Form.Control
            required
            id="phone number"
            type="tel"
            pattern="[+91][0-9]{12}"
            name="phone number"
            placeholder="+919999999999"
            value={initial.phoneNumber}
            onChange={(e) => (initial.phoneNumber = e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Signup</Button>{" "}
        <Button as={Link} to="/">
          Cancel
        </Button>
      </Form>
    </div>
  );
}
