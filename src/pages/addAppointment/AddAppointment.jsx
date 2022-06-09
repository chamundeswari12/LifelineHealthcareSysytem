import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function AddAppointment() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="signup" className="container-sm ">
      <h1 className="title text-center">AddAppointment </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="date">Date</Form.Label>
          <Form.Control
            name="date"
            id="date"
            required
            type="date"
            placeholder="enter date"
            // defaultValue={data.username}
            // onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="time">Time</Form.Label>
          <Form.Control
            name="time"
            id="time"
            required
            type="time"
            placeholder="enter time"
            // defaultValue={data.username}
            // onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="time">Time</Form.Label>
          <Form.Control
            name="time"
            id="time"
            // required
            type="time"
            placeholder="enter time"
            // defaultValue={data.username}
            // onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="time">Time</Form.Label>
          <Form.Control
            name="time"
            id="time"
            // required
            type="time"
            placeholder="enter time"
            // defaultValue={data.username}
            // onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="time">Time</Form.Label>
          <Form.Control
            name="time"
            id="time"
            // required
            type="time"
            placeholder="enter time"
            // defaultValue={data.username}
            // onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="time">Time</Form.Label>
          <Form.Control
            name="time"
            id="time"
            // required
            type="time"
            placeholder="enter time"
            // defaultValue={data.username}
            // onChange={handleChange}
          />
        </Form.Group>
        <Button className="btn-signup" type="submit">
          Add Time
        </Button>{" "}
        <Button as={Link} to="/" variant="danger">
          Cancel
        </Button>
      </Form>
    </div>
  );
}

export default AddAppointment;
