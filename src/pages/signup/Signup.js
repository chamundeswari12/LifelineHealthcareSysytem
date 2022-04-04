import axios from "axios";
import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "../../components/navbar/Navbar";

import ApiService from "../../Services/ApiService";
import "./Signup.css";

export default function Signup() {
  let confirmPassword;
  let initial = {
    // firstName: "",
    // lastName: "",
    // username: "",
    // email: "",
    // password: "",
    // dob: "",
    // gender: "",
    // phoneNo: ""
  };

  const [signupData, setSignupData] = useState();
  const [errors, setErrors] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (initial.password && initial.password != confirmPassword) {
      setErrors(1);
      return;
    }
    // alert("welcome");
    console.log(initial);
    ApiService.register(initial)
      .then((res) => {
        console.log(res.data);
        alert("Registered successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <NavBar />
      <div id="signup" className="container-sm ">
        <h1 className="title text-center">Signup</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="firstName">First Name</Form.Label>
            <Form.Control
              name="firstName"
              id="firstName"
              required
              type="text"
              placeholder="First name"
              value={initial.firstName}
              onChange={(e) => (initial.firstName = e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="lastName">Last Name</Form.Label>
            <Form.Control
              name="lastName"
              id="lastName"
              required
              type="text"
              placeholder="Last name"
              value={initial.lastName}
              onChange={(e) => (initial.lastName = e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control
              name="username"
              id="username"
              required
              type="text"
              placeholder="Enter Username"
              value={initial.username}
              onChange={(e) => (initial.username = e.target.value)}
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
          <Row>
            <Form.Group as={Col} className="mb-2">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                name="password"
                id="password"
                required
                type="password"
                placeholder="Enter your password"
                // minLength="8"
                value={initial.password}
                onChange={(e) => (initial.password = e.target.value)}
                // pattern="[0-9a-zA-Z][!@#$%^&*-?].{8,14}"
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-2">
              <Form.Label htmlFor="ConfirmPassword">
                Confirm Password
              </Form.Label>

              <Form.Control
                name="ConfirmPassword"
                id="ConfirmPassword"
                required
                type="password"
                placeholder="Enter your password"
                // minLength="8"
                value={confirmPassword}
                onChange={(e) => (confirmPassword = e.target.value)}
                isInvalid={errors}
                // pattern="^([@#](?=[^aeiou]{7,13}$)(?=[[:alnum:]]{7,13}$)(?=.*[A-Z]{1,}.*$).+)$"
              />
              {errors && (
                <p className="text-danger mb-1">Password do not match</p>
              )}
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="dateOfBirth">Date of Birth</Form.Label>
            <Form.Control
              name="dateOfBirth"
              id="dateOfBirth"
              required
              type="date"
              value={initial.dob}
              onChange={(e) => (initial.dob = e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
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
              pattern="[0-9]{10}"
              message="please enter correct number"
              name="phone number"
              placeholder="9999999999"
              maxLength={10}
              value={initial.phoneNo}
              onChange={(e) => (initial.phoneNo = e.target.value)}
            />
          </Form.Group>
          <Button type="submit">Signup</Button>{" "}
          <Button as={Link} to="/">
            Cancel
          </Button>
        </Form>
      </div>
    </>
  );
}
// https://stackoverflow.com/questions/67932967/form-validation-in-react-bootstrap-with-different-validation-conditions-for-each
// https://www.brainstormcreative.co.uk/react-js/react-bootstrap-form-part-2-validation-and-errors/
