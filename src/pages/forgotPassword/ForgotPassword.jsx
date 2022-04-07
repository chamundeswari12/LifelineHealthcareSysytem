import "./forgotPassword.css"
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "../../components/navbar/Navbar";


export const ForgotPassword = () => {

    const [mail,setMail]= useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

  return (
    <>
    <NavBar />
    <div id="forgotPassword" className="container-sm ">
      <h1 className="title text-center">Welcome</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Please enter mail id</Form.Label>
          <Form.Control
            required
            type="mail"
            value={mail}
            // isInvalid={errors}
            onChange={(e) => setMail(e.target.value)}
            placeholder="name@gmail.com"
          />
        </Form.Group>
        {/* {errors && (
          <p className="text-danger mb-1">
            The provided credentials do not match our records.
          </p>
        )} */}
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
                // value={initial.password}
                // onChange={(e) => (initial.password = e.target.value)}
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
                // // minLength="8"
                // value={confirmPassword}
                // onChange={(e) => (confirmPassword = e.target.value)}
                // isInvalid={errors}
                // pattern="^([@#](?=[^aeiou]{7,13}$)(?=[[:alnum:]]{7,13}$)(?=.*[A-Z]{1,}.*$).+)$"
              />
              {/* {errors && (
                <p className="text-danger mb-1">Password do not match</p>
              )} */}
            </Form.Group>
          </Row>



        <Button type="submit" variant="success">
          Submit
        </Button>
        {"  "}
        <Button as={Link} to="/">
            Cancel
          </Button>
        <br />
        <Link to="/login">login</Link>
        {" / "} <Link to="/signup">Signup</Link>
      </Form>
    </div>
  </>
  )
}
