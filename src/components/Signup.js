import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Signup.css";
export default function Signup() {
  const initial = {
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
  const [signupData, setSignupData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSignupData([...initial]);
    console.log(signupData);
  };
  return (
    <div id="signup" className="container-sm ">
      <h1 className="text-center">Signup</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            name="FirstName"
            required
            type="text"
            placeholder="First name"
            value={initial.FirstName}
            onChange={(e) => (initial.FirstName = e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name="LastName"
            required
            type="text"
            placeholder="Last name"
            value={initial.LastName}
            onChange={(e) => (initial.LastName = e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="Username"
            required
            type="text"
            placeholder="Enter Username"
            value={initial.UserName}
            onChange={(e) => (initial.UserName = e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            required
            type="email"
            placeholder="name@gmail.com"
            value={initial.email}
            onChange={(e) => (initial.email = e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="Password"
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
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            name="ConfirmPassword"
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
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            name="dateOfBirth"
            required
            type="date"
            value={initial.dateOfBirth}
            onChange={(e) => (initial.dateOfBirth = e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Gender </Form.Label>{" "}
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
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            required
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
