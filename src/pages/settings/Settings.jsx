import React, { useState } from "react";
import { Container, Form, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../../components/navbar/Navbar";
import ApiService from "../../Services/ApiService";
import "./settings.css";
export const Settings = () => {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    ApiService.changePassword(data)
      .then((res) => {
        console.log(res.data);
        setErrors(false);
        alert("Password change successfully!");
        navigate("/");
      })
      .catch((error) => {
        setErrors(true);
        console.log(error);
      });
  };

  return (
    <>
      <NavBar />
      <Container className="settings">
        <h1 className="title">Change Password</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Col} className="mb-2">
            <Form.Label htmlFor="currentpassword">Current Password</Form.Label>
            <Form.Control
              name="oldPassword"
              id="currentpassword"
              required
              type="password"
              placeholder="Enter current password"
              defaultValue={data.currentPassword}
              onChange={handleChange}
              isInvalid={errors}
              // minLength="8"
              // value={initial.password}
              // pattern="[0-9a-zA-Z][!@#$%^&*-?].{8,14}"
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-2">
            <Form.Label htmlFor="newPassword">New Password</Form.Label>
            <Form.Control
              name="newPassword"
              id="newPassword"
              required
              type="password"
              placeholder="Enter new password"
              defaultValue={data.newPassword}
              onChange={handleChange}
              // // minLength="8"
              // isInvalid={errors}
              // pattern="^([@#](?=[^aeiou]{7,13}$)(?=[[:alnum:]]{7,13}$)(?=.*[A-Z]{1,}.*$).+)$"
            />
            {errors && (
              <p className="text-danger mb-1">Old password incorrect</p>
            )}
          </Form.Group>
          <Button type="submit" variant="success">
            Submit
          </Button>
          {"  "}
          <Button as={Link} to="/">
            Cancel
          </Button>
        </Form>
      </Container>
    </>
  );
};
