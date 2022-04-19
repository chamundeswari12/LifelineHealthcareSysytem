import "./otpverify.css";

import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "../../components/navbar/Navbar";
import ApiService from "../../services/ApiService";

export default function Otpverify() {
  const [value, setValue] = useState("");
  const [errors, setErrors] = useState(false);
  const [status, setStatus] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { otp: value };
    ApiService.verifyotp(data)
      .then((res) => {
        console.log(res.data);
        setErrors(false);
        alert("Otp verification successfully!");
        navigate("/forgotPassword/otpverify/newpassword");
      })
      .catch((error) => {
        setErrors(true);
        console.log(error);
      });
  };
  return (
    <>
      <NavBar />
      <div id="forgotPassword" className="container-sm ">
        <h1 className="title text-center">Welcome</h1>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="otp">OTP number</Form.Label>
            <Form.Control
              type="text"
              name="otp"
              id="otp"
              //   pattern="[+91][0-9].{11}"
              maxLength={4}
              title="enter otp"
              required
              //   placeholder="+919999999999"
              defaultValue={value}
              isInvalid={errors}
              onChange={(e) => {
                setValue(e.target.value);
                e.target.value ? setStatus(false) : setStatus(true);
              }}
            />
          </Form.Group>
          {errors && <p className="text-danger mb-1">OTP Invalid.</p>}
          <Button onClick={handleSubmit} disabled={status} variant="success">
            Verify OTP
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
  );
}
