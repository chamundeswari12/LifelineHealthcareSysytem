import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ApiService from "../../services/ApiService";
import "./generateBill.css";

export default function GenerateBill() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    ApiService.billGenerate(data)
      .then((res) => {
        console.log(res.data);
        alert("Bill generation successfully!");
        navigate("/billdownload");
      })
      .catch((error) => {
        console.log(error);
      });
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
                name="patientFirstName"
                id="firstName"
                required
                type="text"
                placeholder="First name"
                // readOnly
                defaultValue={data.patientFirstName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
              <Form.Label htmlFor="lastName">Patient Last Name</Form.Label>
              <Form.Control
                name="patientLastName"
                id="lastName"
                required
                type="text"
                placeholder="Last name"
                // readOnly
                defaultValue={data.patientLastName}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} className="mb-3">
              <Form.Label htmlFor="bloodGroup">Patient Blood Group</Form.Label>
              <Form.Control
                name="BloodGroup"
                id="bloodGroup"
                required
                placeholder=""
                type="text"
                // value="A+"
                // readOnly
                defaultValue={data.BloodGroup}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
              <Form.Label htmlFor="age">Patient Age</Form.Label>
              <Form.Control
                name="patientAge"
                id="age"
                required
                placeholder=""
                type="text"
                // value="24"
                // readOnly
                defaultValue={data.patientAge}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} className="mb-2">
              <Form.Label htmlFor="Appointment Date">
                Appointment Date
              </Form.Label>
              <Form.Control
                name="appointmentDate"
                id="Appointment Date"
                required
                type="date"
                placeholder=""
                // value="02-05-2022"
                defaultValue={data.appointmentDate}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-2">
              <Form.Label htmlFor="Appointment Time">
                Appointment Time
              </Form.Label>

              <Form.Control
                name="appointmentTime"
                id="Appointment Time"
                required
                type="text"
                placeholder=""
                // value="09:00-09:15 AM"
                defaultValue={data.appointmentTime}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="Problem Description">
              Problem Description
            </Form.Label>
            <Form.Control
              as="textarea"
              name="problemDescription"
              id="Problem Description"
              // readOnly
              defaultValue={data.problemDescription}
              onChange={handleChange}
              placeholder="patient as some problem in head"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="Assigned Medicines">
              Assigned Medicines
            </Form.Label>
            <Form.Control
              as="textarea"
              name="assignedMedicines"
              id="Assigned Medicines"
              // readOnly
              // value="tablets"
              defaultValue={data.assignedMedicines}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="Treatment status">Treatment status</Form.Label>
            <Form.Control
              type="text"
              name="treatmentStatus"
              id="Treatment status"
              // readOnly
              // value="Done"
              defaultValue={data.treatmentStatus}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="Treatment Price">Treatment Price</Form.Label>
            <Form.Control
              type="text"
              name="treatmentPrice"
              id="Treatment Price"
              // readOnly
              // value="500"
              defaultValue={data.treatmentPrice}
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            // as={Link}
            // to="/billdownload"
            className="btn-signup"
            // type="submit"
            onClick={handleSubmit}
          >
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
