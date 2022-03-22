import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Signup.css";
export default function Signup() {
  const [signupData, setSignupData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target);
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
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name="LastName"
            required
            type="text"
            placeholder="Last name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            // value={value.Username}
            required
            type="text"
            placeholder="Enter Username"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>EmailId</Form.Label>
          <Form.Control
            // value={value.email}
            required
            type="email"
            placeholder="name@gmail.com"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            // value={value.Password}
            required
            type="password"
            placeholder="Enter your password"
            minLength="8"

            // pattern="^([@#](?=[^aeiou]{7,13}$)(?=[[:alnum:]]{7,13}$)(?=.*[A-Z]{1,}.*$).+)$"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            // value={value.ConfirmPassword}
            required
            type="password"
            placeholder="Enter your password"
            minLength="8"
            // pattern="^([@#](?=[^aeiou]{7,13}$)(?=[[:alnum:]]{7,13}$)(?=.*[A-Z]{1,}.*$).+)$"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            // value={value.dateOfBirth}
            required
            type="date"
            name="dob"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Gender </Form.Label>{" "}
          <Form.Check required inline label="Male" name="Gender" type="radio" />
          <Form.Check inline label="Female" name="Gender" type="radio" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            // value={value.PhoneNumber}
            required
            type="number"
            minLength="10"
            name="phone number"
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
