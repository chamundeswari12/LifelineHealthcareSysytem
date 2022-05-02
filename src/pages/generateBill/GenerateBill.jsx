import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./generateBill.css";

export default function GenerateBill() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div id="generateBill" className="container-sm ">
        <h1 className="title text-center">Appointment Details</h1>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} className="mb-3">
              <Form.Label htmlFor="firstName">Patient First Name</Form.Label>
              <Form.Control
                name="firstName"
                id="firstName"
                required
                type="text"
                placeholder="First name"
                readOnly
                // defaultValue={data.firstName}
                // onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
              <Form.Label htmlFor="lastName">Patient Last Name</Form.Label>
              <Form.Control
                name="lastName"
                id="lastName"
                required
                type="text"
                placeholder="Last name"
                readOnly
                // defaultValue={data.lastName}
                // onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} className="mb-3">
              <Form.Label htmlFor="bloodGroup">Patient Blood Group</Form.Label>
              <Form.Control
                name="bloodGroup"
                id="bloodGroup"
                required
                placeholder=""
                type="text"
                value="A+"
                readOnly
                // defaultValue={data.firstName}
                // onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
              <Form.Label htmlFor="age">Patient Age</Form.Label>
              <Form.Control
                name="age"
                id="age"
                required
                placeholder=""
                type="text"
                value="24"
                readOnly
                // defaultValue={data.lastName}
                // onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} className="mb-2">
              <Form.Label htmlFor="Appointment Date">
                Appointment Date
              </Form.Label>
              <Form.Control
                name="Appointment Date"
                id="Appointment Date"
                required
                type="text"
                placeholder=""
                value="02-05-2022"
                readOnly
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-2">
              <Form.Label htmlFor="Appointment Time">
                Appointment Time
              </Form.Label>

              <Form.Control
                name="Appointment Time"
                id="Appointment Time"
                required
                type="text"
                placeholder=""
                value="09:00-09:15 AM"
                readOnly
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="Problem Description">
              Problem Description
            </Form.Label>
            <Form.Control
              as="textarea"
              name="Problem Description"
              id="Problem Description"
              readOnly
              placeholder="patient as some problem in head"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="Assigned Medicines">
              Assigned Medicines
            </Form.Label>
            <Form.Control
              as="textarea"
              name="Assigned Medicines"
              id="Assigned Medicines"
              readOnly
              value="tablets"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="Treatment status">Treatment status</Form.Label>
            <Form.Control
              type="text"
              name="Treatment status"
              id="Treatment status"
              readOnly
              value="Done"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="Treatment Price">Treatment Price</Form.Label>
            <Form.Control
              type="text"
              name="Treatment Price"
              id="Treatment Price"
              readOnly
              value="500"
            />
          </Form.Group>
          <Button className="btn-signup" type="submit">
            Make bill
          </Button>{" "}
          <Button as={Link} to="/" variant="danger">
            Cancel
          </Button>
        </Form>
      </div>
    </>
  );
}
